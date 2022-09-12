const express = require("express");
const { dbConnect } = require("./config/dbConnect");
const postsRouter = require("./modules/posts.route")

const app = express();

app.use(express.json());



 app.get("/", (req,res)=>{
    res.status(200).send("Welcome to my server.use /posts to get all")
 });
 app.use("/post",postsRouter);
 const start = async () =>{
    await dbConnect();

  app.listen(4000, () => {
    console.log("🚀 Server running on http://localhost:4000");
  });
}

start();
