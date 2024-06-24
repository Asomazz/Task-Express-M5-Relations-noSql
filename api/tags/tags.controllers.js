const Tag = require("../../models/Tag");
const Post = require("../../models/Post");

exports.tagAdd = async (req, res, next) => {
  try {
    const newTag = await Tag.create(req.body);

    res.status(201).json(newTag);
  } catch (error) {
    next(error);
  }
};
