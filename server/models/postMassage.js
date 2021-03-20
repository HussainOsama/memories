//Import Mongoose
import mongoose from "mongoose";

//Define a schema
var Schema = mongoose.Schema;

var PostSchema = new Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Compile model from schema
var PostModel = mongoose.model("PostModel", PostSchema);

export default PostModel;
