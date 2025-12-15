const express = require('express')
const app = express()
const port = process.env.PORT || 3000;


import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./config/db.js";


import priceRoutes from "./routes/price.routes.js";

dotenv.config();
app.use(cors());
app.use(express.json());

// DB connect
connectDB();

app.get('/', (req, res) => {
  res.send('API running with MongoDB Native Driver!');
})



// Prices Routes 
app.use("/api/prices", priceRoutes);


app.listen(port, () => {
  console.log(`User Server running on port ${port}`);
})