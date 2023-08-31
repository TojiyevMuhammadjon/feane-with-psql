const admin = require("./admin.route");
const router = require("./auth.route");
const homeRoute = require("./home.route");

module.exports = [router, homeRoute, admin];
