import express from "express";
import dotenv from 'dotenv';
dotenv.config();

const app = express();
const  URI = `${process.env.APP_URI + process.env.APP_VERSION}`;

console.log(`uri ${URI}`);
app.use(`${URI}/commits`, require("./commit-by-user.routes"));



export default app;
