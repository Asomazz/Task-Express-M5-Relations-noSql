const express = require("express");

const tagsRouter = express.Router();

const { tagAdd } = require("./tags.controllers");

tagsRouter.post("/", tagAdd);

module.exports = tagsRouter;
