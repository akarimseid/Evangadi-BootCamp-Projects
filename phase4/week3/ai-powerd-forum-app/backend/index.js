import 'dotenv/config';
import {errorHandler} from './src/middleware/error-handler.js';        
import express from 'express';
import { db } from './db/config.js';
import cors from 'cors';

const app = express();
const port = process.env.PORT || 3777;

//middle wares
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Health check route
app.get('/health', (req, res) => {
    res.json({status : 'ok', timestamp : new Date()});
})

//main router


app.use(errorHandler);


//start the server 
const startServer = async () => {
try {
    // Test database connection

    const connection = await db.getConnection();
    console.log('Database connection established successfully');
    connection.release(); // Release the connection back to the pool
    app.listen(port, err => {
        if (err){
            console.error('Error starting server: ', err.message);
            process.exit(1);
        }
        console.log(`Server is running on port http://localhost:${port}`);
    });
} catch (error) {
    console.error('Error connecting to the database: ', error.message);                     
    process.exit(1);
}

};

startServer();