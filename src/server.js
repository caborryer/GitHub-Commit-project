import app from './app.js';
import dotenv from 'dotenv';
import colors from 'colors';

// Environment
dotenv.config();


// Server
app.listen(
    process.env.PORT,
    console.log(
        `${process.env.NODE_ENV} Server on port: ${process.env.PORT}`.yellow.bold
    )
);
