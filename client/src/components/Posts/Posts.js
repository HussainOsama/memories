import Post from "./Post/Post";
import { useSelector } from "react-redux";
import { CircularProgress, Grid } from "@material-ui/core";
import useStyles from "./styles.js";

function Posts({ setCurrentId }) {
  const posts = useSelector((state) => state.posts);
  const classes = useStyles();

  console.log(posts);

  return !posts.length ? (
    <CircularProgress />
  ) : (
    <Grid container className={classes.mainContainer}>
      {posts.map((post) => (
        <Grid item key={post._id} xs={12} sm={6}>
          <Post post={post} setCurrentId={setCurrentId} />
        </Grid>
      ))}
    </Grid>
  );
  // <>
  //   {posts.map((post) => (
  //     <Post
  //       key={post._id}
  //       creator={post.creator}
  //       title={post.title}
  //       message={post.message}
  //       tags={post.tags}
  //       likeCount={posts.likeCount}
  //       createdAt={post.createdAt}
  //       selectedFile={post.selectedFile}
  //     />
  //   ))}
  //   {/* <Post />
  //   <Post />
  //   <Post /> */}
  // </>
}

export default Posts;
