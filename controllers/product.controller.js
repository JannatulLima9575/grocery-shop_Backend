// product controller.js
import Product from "../models/product.model.js";

// Create a new product
export const createProduct = async (req, res) => {
  try {
    const newProduct = new Product(req.body);      
    const savedProduct = await newProduct.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  } 
};

// Get all products
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};