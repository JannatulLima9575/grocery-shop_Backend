import { getDB } from "../config/db.js";

export const createUser = async (req, res) => {
  try {
    const db = getDB();
    const user = req.body;

    user.createdAt = new Date();
    user.role = "user"; // default

    const result = await db.collection("users").insertOne(user);
    res.status(201).json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};