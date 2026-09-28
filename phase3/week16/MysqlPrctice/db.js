const sql = require("mssql");

const config = {
  user: "myDBuser",
  password: "MSSQLEVANGADI1",
  server: "localhost",
  database: "MS_SQL_EVANGADI",
  port: 1433,
  options: {
    encrypt: false,
    trustServerCertificate: true,
  },
};

// Variable to hold our active connection pool
let pool = null;

async function getPool() {
  // If a pool already exists, reuse it
  if (pool) {
    return pool;
  }

  try {
    // If no pool exists, establish the connection
    pool = await sql.connect(config);
    console.log("Connected to MS SQL database successfully!");
    return pool;
  } catch (err) {
    console.error("Database connection failed:", err.message);
    throw err;
  }
}

module.exports = {
  sql,
  getPool,
};
