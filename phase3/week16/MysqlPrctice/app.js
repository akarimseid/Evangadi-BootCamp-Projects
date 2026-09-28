const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const { getPool, sql } = require("./db");

const app = express();
const PORT = 5000;

// Middleware registration
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Schema definition statements with system existence checks
const createProductsTable = `
  IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Products' AND xtype='U')
  CREATE TABLE Products (
    Product_id INT IDENTITY(1,1) PRIMARY KEY,
    product_url VARCHAR(255) NOT NULL,
    product_name VARCHAR(255) NOT NULL
  );
`;

const createUsersTable = `
  IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Users' AND xtype='U')
  CREATE TABLE Users (
    user_id INT IDENTITY(1,1) PRIMARY KEY,
    User_name VARCHAR(100) NOT NULL,
    User_password VARCHAR(255) NOT NULL
  );
`;

const createProductDescriptionTable = `
  IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='ProductDescription' AND xtype='U')
  CREATE TABLE ProductDescription (
    Description_id INT IDENTITY(1,1) PRIMARY KEY,
    Product_id INT NOT NULL,
    Product_brief_description VARCHAR(500),
    Product_description VARCHAR(MAX),
    Product_img VARCHAR(500),
    Product_link VARCHAR(255),
    FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
  );
`;

const createProductPriceTable = `
  IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='ProductPrice' AND xtype='U')
  CREATE TABLE ProductPrice (
    Price_id INT IDENTITY(1,1) PRIMARY KEY,
    Product_id INT NOT NULL,
    Starting_price VARCHAR(50),
    Price_range VARCHAR(255),
    FOREIGN KEY (Product_id) REFERENCES Products(Product_id)
  );
`;

const createOrdersTable = `
  IF NOT EXISTS (SELECT * FROM sysobjects WHERE name='Orders' AND xtype='U')
  CREATE TABLE Orders (
    order_id INT IDENTITY(1,1) PRIMARY KEY,
    Product_id INT NOT NULL,
    user_id INT NOT NULL,
    FOREIGN KEY (Product_id) REFERENCES Products(Product_id),
    FOREIGN KEY (user_id) REFERENCES Users(user_id)
  );
`;

// Direct execution function running on module load
async function initializeTables() {
  try {
    const pool = await getPool();
    await pool.request().query(createProductsTable);
    await pool.request().query(createUsersTable);
    await pool.request().query(createProductDescriptionTable);
    await pool.request().query(createProductPriceTable);
    await pool.request().query(createOrdersTable);
    console.log("Tables initialized directly on application startup.");
  } catch (err) {
    console.error("Direct table initialization failed:", err.message);
  }
}

initializeTables();

// Manual execution route triggered via browser GET request
app.get("/install", async (req, res) => {
  try {
    const pool = await getPool();
    await pool.request().query(createProductsTable);
    await pool.request().query(createUsersTable);
    await pool.request().query(createProductDescriptionTable);
    await pool.request().query(createProductPriceTable);
    await pool.request().query(createOrdersTable);

    console.log("Tables verified via /install route.");
    res.status(200).send("Tables created successfully!");
  } catch (err) {
    console.error("Error creating tables:", err.message);
    res.status(500).send(`Error creating tables: ${err.message}`);
  }
});

// Atomic multi-table insertion route
app.post("/add-product", async (req, res) => {
  const {
    product_name,
    product_url,
    Product_brief_description,
    Product_description,
    Product_img,
    Product_link,
    Starting_price,
    Price_range,
  } = req.body;

  // Defensive validation: ensure no critical column is undefined
  if (
    !product_name ||
    !product_url ||
    !Product_brief_description ||
    !Starting_price
  ) {
    return res
      .status(400)
      .send("Missing required product, description, or pricing fields.");
  }

  let pool;
  let transaction;

  try {
    pool = await getPool();

    // 1. Initialize the transaction object bound to the connection pool
    transaction = new sql.Transaction(pool);
    await transaction.begin();

    // 2. Insert into the parent Products table and capture the new IDENTITY
    const productRequest = new sql.Request(transaction);
    productRequest.input("name", sql.VarChar(255), product_name);
    productRequest.input("url", sql.VarChar(255), product_url);

    const productInsertQuery = `
      INSERT INTO Products (product_name, product_url)
      VALUES (@name, @url);
      SELECT SCOPE_IDENTITY() AS Product_id;
    `;

    const productResult = await productRequest.query(productInsertQuery);
    const newProductId = productResult.recordset[0].Product_id;

    // 3. Insert into the child ProductDescription table using newProductId
    const descRequest = new sql.Request(transaction);
    descRequest.input("prodId", sql.Int, newProductId);
    descRequest.input("briefDesc", sql.VarChar(500), Product_brief_description);
    descRequest.input("fullDesc", sql.VarChar(sql.MAX), Product_description);
    descRequest.input("img", sql.VarChar(500), Product_img);
    descRequest.input("link", sql.VarChar(255), Product_link);

    const descInsertQuery = `
      INSERT INTO ProductDescription (Product_id, Product_brief_description, Product_description, Product_img, Product_link)
      VALUES (@prodId, @briefDesc, @fullDesc, @img, @link);
    `;
    await descRequest.query(descInsertQuery);

    // 4. Insert into the child ProductPrice table using newProductId
    const priceRequest = new sql.Request(transaction);
    priceRequest.input("prodId", sql.Int, newProductId);
    priceRequest.input("startingPrice", sql.VarChar(50), Starting_price);
    priceRequest.input("priceRange", sql.VarChar(255), Price_range);

    const priceInsertQuery = `
      INSERT INTO ProductPrice (Product_id, Starting_price, Price_range)
      VALUES (@prodId, @startingPrice, @priceRange);
    `;
    await priceRequest.query(priceInsertQuery);

    // 5. Commit all three operations permanently to SQL Server
    await transaction.commit();

    console.log(
      `Product, Description, and Price committed under Product_id: ${newProductId}`,
    );
    res
      .status(200)
      .send(
        `Product registered successfully across all tables with ID: ${newProductId}`,
      );
  } catch (err) {
    // If any statement failed, roll back the transaction entirely
    if (transaction) {
      try {
        await transaction.rollback();
        console.log(
          "Transaction rolled back successfully. Database returned to previous state.",
        );
      } catch (rollbackErr) {
        console.error(
          "Error during transaction rollback:",
          rollbackErr.message,
        );
      }
    }
    console.error("Transaction execution failed:", err.message);
    res.status(500).send(`Transaction Failed: ${err.message}`);
  }
});

// Joined query returning complete product objects
app.get("/products", async (req, res) => {
  try {
    const pool = await getPool();
    const query = `
      SELECT 
        p.Product_id,
        p.product_name,
        p.product_url,
        d.Product_brief_description,
        d.Product_description,
        d.Product_img,
        d.Product_link,
        pr.Starting_price,
        pr.Price_range
      FROM Products p
      LEFT JOIN ProductDescription d ON p.Product_id = d.Product_id
      LEFT JOIN ProductPrice pr ON p.Product_id = pr.Product_id;
    `;
    const result = await pool.request().query(query);
    res.status(200).json(result.recordset);
  } catch (err) {
    console.error("Error retrieving product catalog:", err.message);
    res.status(500).send(`Failed to fetch catalog: ${err.message}`);
  }
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
