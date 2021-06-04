const express = require("express");
const mongodb = require("mongodb");
const bcrypt = require("bcrypt");
const app = express();
require("dotenv").config();
let MongoClient = mongodb.MongoClient;

//-------------ROUTER-------------
let clientes = require("./clientes");
let gestion = require("./gestion");
let cars = require("./cars");
//--------------------------------
app.use(express.static("public"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/clientes", clientes);
app.use("/cars", cars);
app.use("/gestion", gestion);

MongoClient.connect(
  process.env.MONGO_URL,
  { useNewUrlParser: true, useUnifiedTopology: true },
  function (error, client) {
    if (error !== null) {
      console.log(error);
    } else {
      app.locals.db = client.db("alquilercar");
    }
  }
);

app.listen(3000);