import postMessage from "../models/postMessage.js";
import mongoose from "mongoose";

const getPosts = async (req, res) => {
  const posts = await postMessage.find({});

  try {
    res.json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createPost = async (req, res) => {
  const newPost = new postMessage(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await postMessage.findByIdAndDelete(req.params.id);

    if (!post) res.status(404).send("Post not found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

const updatePost = async (req, res) => {
  const { id } = req.params;
  const { title, message, creator, selectedFile, tags } = req.body;

  if (!mongoose.Types.ObjectId.isValid(id))
    return res.status(404).send(`No post with id: ${id}`);

  const updatedPost = { creator, title, message, tags, selectedFile, _id: id };

  await postMessage.findByIdAndUpdate(id, updatedPost, { new: true });

  res.json(updatedPost);
};

const likePost = async (req, res) => {
  const { id } = req.params;
  const post = await postMessage.find({ _id: id });
  let newlikeCount = post[0].likeCount;
  newlikeCount++;
  const newPost = await postMessage.findByIdAndUpdate(
    id,
    { likeCount: newlikeCount },
    { new: true }
  );
  res.json(newPost);
};

export { getPosts, createPost, deletePost, updatePost, likePost };
