const express = require("express");
const mongoose = require("mongoose");
const app = express();
app.use(express.json());
mongoose.connect("mongodb://127.0.0.1:27017/productDB")
.then(() => console.log("Database Connected"))
.catch(() => console.log("Connection Error"));
const productSchema = new mongoose.Schema({
  name: String,
  price: Number,
  category: String,
  inStock: Boolean
}, { timestamps: true });
const Product = mongoose.model("Product", productSchema);
app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  const result = await newProduct.save();
  res.send(result);
});
app.get("/products", async (req, res) => {
  const data = await Product.find();
  res.send(data);
});
app.get("/products/:id", async (req, res) => {
  const data = await Product.findById(req.params.id);
  res.send(data);
});
app.put("/products/:id", async (req, res) => {
  const data = await Product.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true }
  );
  res.send(data);
});
app.delete("/products/:id", async (req, res) => {
  await Product.findByIdAndDelete(req.params.id);
  res.send("Product Deleted");
});
app.listen(3000, () => {
  console.log("Server running on port 3000");
});

