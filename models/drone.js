const mongoose = require("mongoose");
const droneSchema = mongoose.Schema({
type: {
    type: String,
    minLength: 5
},
cost: Number,
use: {
    type: String,
    minLength: 3
}
});


module.exports = mongoose.model("drone",droneSchema)