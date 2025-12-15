import express from "express";
import { getDB } from "../config/db.js";

const router = express.Router();

router.post("/add-product", async (req, res) => {
  const db = getDB();
  const result = await db.collection("products").insertOne({
    name: "Onion",
    price: 60,
    market: "Karwan Bazar",
    createdAt: new Date(),
  });

  res.json(result);
});

export default router;