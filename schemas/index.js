const mongoose = require("mongoose");
require("dotenv").config();

const db_user = process.env.db_user;
const db_pw = process.env.db_pw;

const connect = () => {
  // mongoose.connect는 MongoDB 서버에 연결하는 메서드입니다.
  mongoose
    .connect(
      // 빨간색으로 표시된 부분은 대여한 ID, Password, 주소에 맞게끔 수정해주세요!
      `mongodb+srv://${db_user}:${db_pw}@cluster0.i4yppsk.mongodb.net///?retryWrites=true&w=majority`,
      {
        dbName: "products", // node_lv1 데이터베이스명을 사용합니다.
      }
    )
    .then(() => console.log("MongoDB 연결에 성공하였습니다."))
    .catch((err) => console.log(`MongoDB 연결에 실패하였습니다. ${err}`));
};

mongoose.connection.on("error", (err) => {
  console.error("MongoDB 연결 에러", err);
});

module.exports = connect;
