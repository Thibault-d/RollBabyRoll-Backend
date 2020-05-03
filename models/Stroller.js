const mongoose = require("mongoose");
const { Schema } = mongoose;

const strollerSchema = new Schema({
  name: { type: String, required: true },
  brand: { type: String },
  weight: { type: Number },
  storage: { type: Number },
  handle: { type: String },
  dimensions: { type: String },
  maxweight: { type: Number },
  brakes: { type: String },
  image: { type: String },
  reversible: { type: String },
  bassinet: { type: String },
});

const Stroller = mongoose.model("Stroller", strollerSchema);
module.exports = Stroller;
