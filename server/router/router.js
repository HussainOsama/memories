import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
} from "../controller/controller.js";
// const main = require("../controller/controller.js");
var router = express.Router();

// middleware that is specific to this router

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id", updatePost);

export default router;
