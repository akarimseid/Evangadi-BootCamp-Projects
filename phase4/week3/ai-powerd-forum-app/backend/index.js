import 'dotenv/config';
import express from 'express';

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


//start the server 
const startServer = async () => {
try {
    app.listen(port, err => {
        if (err){
            console.error('Error starting server: ', err.message);
            process.exit(1);
        }
        console.log(`Server is running on port http://localhost:${port}`);
    });
} catch (error) {
    process.exit(1);
}
};

startServer();