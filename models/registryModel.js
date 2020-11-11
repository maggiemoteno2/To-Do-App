const mongoose = require("mongoose");

var RegistrySchema = mongoose.Schema({
  email: { type: String, required: true },
  password: { type: String, min: 15, required: true },
});


var RegistryModel = mongoose.model("RegistryModel", RegistrySchema);

module.exports = RegistryModel;