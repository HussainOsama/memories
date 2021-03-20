import express from "express";
import {
  main,
  about,
  getPosts,
  createPost,
  deletePost,
} from "../controller/controller.js";
// const main = require("../controller/controller.js");
var router = express.Router();

// middleware that is specific to this router

router.get("/", main);

router.get("/about", about);

router.get("/posts", getPosts);

router.post("/posts", createPost);

router.delete("/posts/:id", deletePost);

export default router;
