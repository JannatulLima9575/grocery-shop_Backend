import express from "express";
import {
  addPrice,
  getAllPrices,
  getPricesByMarket,
  updatePrice,
  deletePrice,
} from "../controllers/price.controller.js";

const router = express.Router();

// CREATE
router.post("/", addPrice);

// READ
router.get("/", getAllPrices);
router.get("/market/:marketName", getPricesByMarket);

// UPDATE
router.put("/:id", updatePrice);

// DELETE
router.delete("/:id", deletePrice);

export default router;