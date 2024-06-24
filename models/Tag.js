const { model, Schema, default: mongoose } = require("mongoose");

const TagSchema = new Schema({
  name: String,
  posts: [{ type: mongoose.Schema.Types.ObjectId, ref: "Post" }],
});

module.exports = model("Tag", TagSchema);
