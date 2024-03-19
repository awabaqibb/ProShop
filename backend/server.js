import express from "express";
import cors from "cors";

import products from "./data/products.js";
import connectDB from "./db.js";

import dotenv from "dotenv";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB(
  "mongodb+srv://awabaqibb:FWDofnFYBFFMIDTX@cluster0.sbijvfd.mongodb.net/proshop?retryWrites=true&w=majority&appName=Cluster0"
);
const app = express();
app.use(cors());

app.get("/", (request, response, next) => {
  response.send("server is running");
});

app.get("/api/products", (request, response, next) => {
  response.json(products);
});

app.get("/api/products/:pid", (request, response, next) => {
  const product = products.find((item) => request.params.pid === item._id);
  response.json(product);
});

app.listen(port);
