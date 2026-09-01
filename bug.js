// app.js
const express = require("express");
const app = express();

app.get("/run", (req, res) => {
  const code = req.query.code;

  res.status(400).send("Evaluation disabled for security reasons");
});

app.listen(3000);
