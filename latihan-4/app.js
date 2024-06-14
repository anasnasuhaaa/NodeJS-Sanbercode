const express = require("express");
const path = require("path");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("Hello World");
});
app.get("/hello", (req, res) => {
  res.json({
    message: "Success fetc message",
    data: "Hello World",
  });
});
app.get("/user", (req, res) => {
  res.json({
    message: "Success fetch user",
    data: {
      id: 1,
      name: "budi",
      username: "budidu",
      email: "budi@gmail.com",
    },
  });
});

// Melayani file statis dari direktori "public"
app.use(express.static(path.join(__dirname, "public")));

app.listen(port, () => {
  console.log(`Server is running at localhost:${port}`);
});
