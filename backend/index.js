const connectToMongo = require("./db");
connectToMongo();
const express = require("express");
var cors = require("cors");
const app = express();
const port = 5000;

app.use(express.json());

// Available Routes
app.use(cors());
app.use("/api/auth", require("./routes/auth"));

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
