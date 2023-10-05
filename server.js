import express from 'express';
import colors from "colors";
import dotenv from 'dotenv'

//configuration of env

dotenv.config();
const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Welcome to ecommerce app</h1>");
});

const PORT = process.env.PORT || 8082;

app.listen(PORT, () => {
    console.log(
        `Server Running on ${process.env.DEV_MODE} mode on port ${PORT}`.bgCyan
        .white
        );
});
