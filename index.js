require("./db");
const Product = require("./productModel");
async function addProduct() {
  const product = new Product({
    name: "Premium Headphones",
    category: "Electronics",
    variants: [
      {
        sku: "HP-BL-001",
        color: "Black",
        price: 199.99,
        stock: 15
      },
      {
        sku: "HP-WH-001",
        color: "White",
        price: 209.99,
        stock: 8
      }
    ],
    reviews: [
      {
        userId: "123",
        rating: 5,
        comment: "Excellent sound quality"
      }
    ],
    avgRating: 5
  });
  await product.save();
  console.log("Product Added");
}
async function getCategoryRatings() {
  const result = await Product.aggregate([
    {
      $group: {
        _id: "$category",
        avgCategoryRating: { $avg: "$avgRating" }
      }
    }
  ]);
  console.log("Category Ratings:", result);
}
async function lowStock() {
  const result = await Product.aggregate([
    { $unwind: "$variants" },
    {
      $match: {
        "variants.stock": { $lt: 10 }
      }
    },
    {
      $project: {
        name: 1,
        "variants.color": 1,
        "variants.stock": 1
      }
    }
  ]);

  console.log(result);
}
async function updateStock() {
  await Product.updateOne(
    { "variants.sku": "HP-BL-001" },
    { $set: { "variants.$.stock": 20 } }
  );

  console.log("Stock Updated");
}
async function run() {
  await addProduct();       
  await getCategoryRatings();
  await lowStock();          
  await updateStock();      
}
run();