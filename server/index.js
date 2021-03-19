// This is app.js
import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

const app = express();
var port = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

const DATABASE_URL =
  "mongodb+srv://memories:memories123@cluster0.tnzxo.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";
mongoose
  .connect(DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(port, () => {
      console.log("backend start connection");
    });
  })
  .catch((err) => {
    console.log("err", err);
  });

app.get("/", (req, res) => {
  res.send("Hello worlds");
});
