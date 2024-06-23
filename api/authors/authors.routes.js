const express = require("express");

const authorsRouter = express.Router();

const { authorCreate } = require("./authors.controllers");

authorsRouter.post("/", authorCreate);

module.exports = authorsRouter;
