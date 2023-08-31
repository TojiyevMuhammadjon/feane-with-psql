const { Schema, model } = require("mongoose");

const schema = new Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    createdAt: {
      type: Date,
      required: true,
      default: new Date(),
    },
  },
  {
    timestamps: true,
  }
);

module.exports = model("Admin", schema);
