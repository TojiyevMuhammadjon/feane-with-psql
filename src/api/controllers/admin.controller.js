const Admin = require("../../models/register.model");

const register = async (req, res) => {
  try {
    const { username, password } = req.body;

    const admin = await new Admin({username, password});
    console.log(admin);
    res.status(200).json({ message: "success" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  register,
};
