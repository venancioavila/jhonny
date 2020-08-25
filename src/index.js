const express = require("express");
const bodyParser = require("body-parser");
const User = require("./models/User");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/users", async function (req, res) {
  const users = await User.find();
  res.send(users);
});

app.get("/user/:id", async function (req, res) {
  const {
    params: { id },
  } = req;

  const user = await User.findOne({ _id: id });
  res.send(user);
});

app.delete("/removeUser/:id", async function (req, res) {
  const {
    params: { id },
  } = req;

  const user = await User.findByIdAndDelete({ _id: id });
  res.send(user);
});

app.put("/updateUser/:id", async function (req, res) {
  const {
    params: { id },
    body,
  } = req;

  const user = await User.findOneAndUpdate({ _id: id }, body);
  res.send(user);
});

app.post("/createUser", async function (req, res) {
  const { body } = req;

  const user = await User.create(body);
  res.send(user);
});

app.listen(3000);
console.log("server is running on port 3000");
