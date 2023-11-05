const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const Product = require("./schemas/product");
const productsRouter = require("./routes/products");
const connect = require("./schemas/index");
connect();
// const methodOverride = require("method-override");

// 미들웨어 사용
// app.use(methodOverride("_method"));
// Assuming you have a public folder with your static files
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// postRouter를 실행한다.
app.use("/api", [productsRouter]);

app.get("/", (req, res) => {
  res.send("hello world");
});

// port 실행
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
