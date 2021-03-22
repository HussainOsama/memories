import axios from "axios";

// const data = async () => {
//   try {
//     const data = await axios.get("http://localhost:5000/posts");
//     return data;
//   } catch (err) {
//     console.log("Data Fetch Failed");
//   }
// };

// let x = data();
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
export const createPost = (newPost) => axios.post(url, newPost);
export const updatePost = (id, updatedPost) =>
  axios.patch(`${url}/${id}`, updatedPost);
export const deletePost = (id) => axios.delete(`${url}/${id}`);
