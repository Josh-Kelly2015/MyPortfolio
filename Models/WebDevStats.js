const mongoose = require("mongoose");
//Schema
const Schema = mongoose.Schema;
const MySchema = new Schema({
  apps: { type: Array },
  skills: { type: Array },
  goals: { type: Array },
  date: { type: String, default: Date.now() }
});

//Define Models
const WebDevStats = mongoose.model("webdevstats", MySchema);

module.exports = WebDevStats;
