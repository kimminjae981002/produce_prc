const express = require("express");
const router = express.Router();

const Product = require("../schemas/products");

router.post("/products", async (req, res) => {
  const { title, password, author, content, date, status } = req.body;
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDay();
  const hour = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();
  const new_date = `${year}/${month}/${day} ${hour}:${minutes}"${seconds}`;
  const new_product = new Product({
    author: author,
    password: password,
    title: title,
    content: content,
    status: status,
    date: new_date,
  });
  try {
    const savedProduct = await new_product.save();
    console.log(savedProduct);
    res.redirect(`/products/${new_product._id}`);
  } catch (error) {
    console.log(error);
  }
  res.json("sucecss");
});
