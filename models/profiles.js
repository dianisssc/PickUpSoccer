const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  email: { type: String, required: true},
  password: {type: String, required: true},
  name: { type: String, required: true },
  location: { type: String, required: true },
  image: { type: String},
  links: { type: String},
  gender: {type: String}, 
  age: { type: Number, required: true},
  role: {type: String, required: true},
  position: { type: String, required: true},
  style: { type: String, required: true},
  experience: { type: String, required: true},
  sessions: {type: String, required: true},
  contact: {type: String, required: true}, 
  about: { type: String}
});

const Profile = mongoose.model("Profile", ProfileSchema);

module.exports = Profile;
