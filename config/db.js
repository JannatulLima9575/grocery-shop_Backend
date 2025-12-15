import { MongoClient } from "mongodb";

const uri = process.env.MONGO_URI;

let client;
let db;

export const connectDB = async () => {
  try {
    client = new MongoClient(uri);
    await client.connect();

    db = client.db("groceryShop"); // DB name
    console.log("MongoDB Connected (Native)");
  } catch (error) {
    console.error("MongoDB connection failed:", error);
    process.exit(1);
  }
};

export const getDB = () => db;