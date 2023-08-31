const config = require("../../config");
const jwt = require("jsonwebtoken");

const secretkey = config.jwtsecretkey;

const sign = (payload) => {
  jwt.sign(payload, secretkey, { expiresIn: "24h" });
};
const verify = (payload) => {
  jwt.verify(payload, secretkey);
};

module.exports = {
  sign,
  verify,
};
