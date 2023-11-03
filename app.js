const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
// const Post = require("./schemas/post");
// const postsRouter = require("./routes/posts");
const connect = require("./schemas/index");
connect();
// const methodOverride = require("method-override");

// 미들웨어 사용
// app.use(methodOverride("_method"));
// app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// postRouter를 실행한다.
// app.use("/", [postsRouter]);

// 경로 '/'에서 실행
app.get("/", async (req, res) => {
  //   const posts = await Post.find({});
  res.sendFile(path.join(__dirname, "public/products/index.html"));
});

// port 실행
app.listen(port, () => {
  console.log(port, "포트로 서버가 열렸어요!");
});
