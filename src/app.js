import dotenvSafe from 'dotenv-safe';
dotenvSafe.config({
    allowEmptyValues: true
});
import express from "express";
import morgan from "morgan";
import cors from "cors";
import routes from "./routes/index.routes";


// Server express
const app = express();


// Middlewares
app.use(morgan("dev"));
app.use(cors({
    exposedHeaders: ["Origin", "X-Requested-With", "Content-Type", "Accept", "Accept-Language", "Authorization"],
}));

app.use(express.static('public'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.use(routes);

export default app;
