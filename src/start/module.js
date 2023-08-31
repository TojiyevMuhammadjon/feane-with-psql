const cors = require("cors");
const cookie = require("cookie-parser");
const express = require("express");
const fileupload = require("express-fileupload");
const routes = require("../api/routes");

const modules = (app) => {
  app.use(cors());
  app.use(express.urlencoded({ extended: true }));
  app.use(express.json());

  app.use(fileupload());
  app.use(cookie());

  app.use(express.static(process.cwd() + "/src/public/"));

  app.set("view engine", "ejs");
  app.set("views", "src/views");

  app.use(routes);
};

module.exports = modules;
