import postMassage from "../models/postMassage.js";

const main = (req, res) => {
  res.send("Hello worlds");
};

const about = (req, res) => {
  res.send("Welcome to ABOUT page ");
};

const getPosts = async (req, res) => {
  const posts = await postMassage.find({});

  try {
    res.json(posts);
  } catch (err) {
    res.status(500).send(err);
  }
};

const createPost = async (req, res) => {
  const newPost = new postMassage(req.body);

  try {
    await newPost.save();
    res.status(200).json(newPost);
  } catch (err) {
    res.status(500).send(err);
  }
};

const deletePost = async (req, res) => {
  try {
    const post = await postMassage.findByIdAndDelete(req.params.id);

    if (!post) res.status(404).send("Post not found");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
};

export { main, about, getPosts, createPost, deletePost };
