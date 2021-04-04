const mongoose = require('mongoose');

const ThingSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Thing needs to be filled out!"],
        minLength: [2, "Thing name must be at least 2 characters"]
    },
    description: {
        type: String,
        required: [true, "Need content of the Thing!"],
        minLength: [10, "Thing description must be at least 10 characters"]
    }
})

const Thing = mongoose.model("Thing", ThingSchema)

module.exports = Thing;