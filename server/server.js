const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors({ origin: "http://localhost:3000" }));

app.use("/dist", express.static("../dist"));

app.listen(7100, () => console.log("Server listening on port 7100"));
