const config = require("../../config");
const { connect } = require("mongoose");

const run = async (app) => {
  await connect("mongodb://127.0.0.1:27017/feane");
  console.log("connected to MongoDB");
  app.listen(config.port, () => {
    console.log(`listening on ${config.port}`);
  });
};

module.exports = run;
