import express from "express";
import router from "./routes/book_routes.js"
import bodyParser from 'body-Parser'

const app = express();
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json()); //Conversion a formato JSON
app.use (express.json());
app.use(router);


export default app;