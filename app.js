const express = require("express");
const app = express();
const connectDB = require("./database");
const dotenv = require("dotenv");
const authorsRouter = require("./api/authors/authors.routes");
const postsRouter = require("./api/posts/posts.routes");
const tagsRouter = require("./api/tags/tags.routes");

connectDB();
dotenv.config();
app.use(express.json());
app.use("/posts", postsRouter);
app.use("/authors", authorsRouter);
app.use("/tags", tagsRouter);

app.use((req, res, next) => {
  res.status(404).json({ message: "Path not found" });
});

app.use((err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    message: err.message || "Internal Server Error",
  });
});

app.listen(process.env.PORT, () => {
  console.log("The application is running");
});
