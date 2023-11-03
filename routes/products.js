const express = require("express");
const router = express.Router();

const Product = require("../schemas/product");

// 경로 '/'에서 실행
router.get("/products", async (req, res) => {
  const products = await Product.find({}).sort({ createdAt: -1 });
  console.log(products);
  res.json({ data: products });
  // res.sendFile(path.join(__dirname, "../public/products/index.html"));
});

router.post("/products", async (req, res) => {
  const { title, password, author, content, status } = req.body;
  const new_product = new Product({
    author,
    password,
    title,
    content,
    status,
  });
  // Object.keys를 배열로 가져온다.
  if (Object.keys(req.body).length === 0) {
    res.json({ errorMessage: "데이터 형식이 올바르지 않습니다." });
    return;
  }
  try {
    const savedProduct = await new_product.save();
    console.log(savedProduct);

    res.json({ result: "판매 상품을 등록하였습니다." });
  } catch (error) {
    console.log(error);
  }
});

router.get("/products/:productId", async (req, res) => {
  try {
    const { productId } = req.params;
    const product = await Product.findById({ _id: productId });
    res.json({ product });
  } catch (error) {
    res.json({ message: "상품 조회에 실패하였습니다." });
  }
});

router.patch("/products/:productId", async (req, res) => {
  const { password, title } = req.body;
  const { productId } = req.params;
  const product = await Product.findById({ _id: productId });

  if (password !== product.password) {
    res.json({ message: "상품을 수정할 권한이 존재하지 않습니다." });
  }

  if (password === product.password) {
    await Product.updateOne({ _id: productId }, { $set: { title: title } });
    res.json({ message: "success" });
  }
});

router.delete("/products/:productId", async (req, res) => {
  const { password } = req.body;
  const { productId } = req.params;
  const product = await Product.findById(productId.toString());

  if (password !== product.password) {
    res.json({ message: "상품 조회에 실패하였습니다." });
  }
  if (password === product.password) {
    await Product.deleteOne({ _id: productId });
    res.json({ message: "success" });
  }
});

module.exports = router;
