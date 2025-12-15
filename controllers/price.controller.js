import { getDB } from "../config/db.js";
import { ObjectId } from "mongodb";

// ✅ Add New Price
export const addPrice = async (req, res) => {
  try {
    const db = getDB();
    const { productName, category, price, market } = req.body;

    if (!productName || !price || !market) {
      return res.status(400).json({ message: "Missing required fields" });
    }

    await db.collection("prices").insertOne({
      productName,
      category,
      price,
      market,
      updatedAt: new Date(),
    });

    res.status(201).json({ message: "Price added successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get All Prices
export const getAllPrices = async (req, res) => {
  try {
    const db = getDB();
    const prices = await db
      .collection("prices")
      .find()
      .sort({ updatedAt: -1 })
      .toArray();

    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Get Prices by Market
export const getPricesByMarket = async (req, res) => {
  try {
    const db = getDB();
    const { marketName } = req.params;

    const prices = await db
      .collection("prices")
      .find({ market: marketName })
      .toArray();

    res.json(prices);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Update Price
export const updatePrice = async (req, res) => {
  try {
    const db = getDB();
    const { id } = req.params;

    await db.collection("prices").updateOne(
      { _id: new ObjectId(id) },
      {
        $set: {
          ...req.body,
          updatedAt: new Date(),
        },
      }
    );

    res.json({ message: "Price updated successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// ✅ Delete Price
export const deletePrice = async (req, res) => {
  try {
    const db = getDB();
    const { id } = req.params;

    await db.collection("prices").deleteOne({
      _id: new ObjectId(id),
    });

    res.json({ message: "Price deleted successfully" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
