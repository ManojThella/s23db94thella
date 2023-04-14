const mongoose = require("mongoose")
const droneSchema = mongoose.Schema({
type: String,
cost: Number,
use: String
})
module.exports = mongoose.model("drone",droneSchema)