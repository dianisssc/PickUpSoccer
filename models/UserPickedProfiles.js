const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const pickedProfileSchema = new Schema({
  name: { type: String, required: true },
  location: { type: String, required: true },
  contacted: { type: Boolean, default: false},
  profileLink: { type: String, required: true},
});

const PickedProfile = mongoose.model("Picked", pickedProfileSchema);

module.exports = PickedProfile;