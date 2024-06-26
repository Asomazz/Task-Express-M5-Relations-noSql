const { model, Schema, default: mongoose } = require("mongoose");

const PostSchema = new Schema({
  title: String,
  body: String,
  author: { type: mongoose.Schema.Types.ObjectId, ref: "Author" },
  tags: [{ type: mongoose.Schema.Types.ObjectId, ref: "Tag" }],
});

module.exports = model("Post", PostSchema);
