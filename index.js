import express from "express";
import bodyParser from "body-parser";

const app = express();
const PORT = 3000;

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/message", (req, res) => {
  res.render("messages");
});

app.get("/finalmsg", (req, res) => {
  res.render("final");
});

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
