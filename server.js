"use strict";
const express = require("express");
const app = express();


app.use(json());
app.use(express.static(__dirname + "/public"));

const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`Server listening on ${port}.`);
});

//https://c-moses-portfolio.herokuapp.com/