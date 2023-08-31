const bcrypt = require("bcrypt");

const generateHash = async (password) => {
  await bcrypt.hash(password, 10);
};

const compareHash = async (password, hashedPass) => {
  await bcrypt.compare(password, hashedPass);
};

module.exports = {
  generateHash,
  compareHash,
};
