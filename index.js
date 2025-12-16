import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import { connectDB } from "./config/db.js";

// Routes
import userRoutes from "./routes/user.routes.js";
import priceRoutes from "./routes/price.routes.js";

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

// ========== MIDDLEWARES ==========
app.use(cors());
app.use(express.json());

// ========== DATABASE ==========
connectDB();

// ========== ROOT TEST ==========
app.get("/", (req, res) => {
  res.send("🚀 Local Market Tracker API is running!");
});

// ========== API ROUTES ==========
app.use("/api/users", userRoutes);
app.use("/api/prices", priceRoutes);

// (future)
// app.use("/api/products", productRoutes);
// app.use("/api/markets", marketRoutes);
// app.use("/api/reviews", reviewRoutes);

// ========== 404 HANDLER ==========
app.use((req, res) => {
  res.status(404).json({ message: "Route not found" });
});

// ========== SERVER ==========
app.listen(port, () => {
  console.log(`✅ Server running on port ${port}`);
});