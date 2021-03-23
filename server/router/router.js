import express from "express";
import {
  getPosts,
  createPost,
  deletePost,
  updatePost,
  likePost,
} from "../controller/controller.js";
// const main = require("../controller/controller.js");
var router = express.Router();

// middleware that is specific to this router

router.get("/posts", getPosts);
router.post("/posts", createPost);
router.delete("/posts/:id", deletePost);
router.patch("/posts/:id", updatePost);
router.patch("/posts/:id/likepost", likePost);

export default router;
