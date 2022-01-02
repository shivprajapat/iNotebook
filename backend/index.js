const connectToMongo = require("./db");
const express = require("express");

connectToMongo();
app = express();
const port = 3000;
app.get("/", (req, res) => {
  res.send("Hello React");
});

app.listen(port, () => {
  console.log(`iNotebook backend listening at http://localhost:${port}`);
});
