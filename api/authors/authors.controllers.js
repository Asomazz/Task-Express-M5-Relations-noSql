const Author = require("../../models/Author");

exports.authorCreate = async (req, res, next) => {
  try {
    const newAuthor = await Author.create(req.body);

    res.status(201).json(newAuthor);
  } catch (error) {
    next(error);
  }
};
