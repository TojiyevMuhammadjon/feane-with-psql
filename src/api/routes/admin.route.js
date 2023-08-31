const { Router } = require("express");
const { register } = require("../controllers/admin.controller");

const admin = Router();

admin.post("/register", register);

module.exports = admin;
