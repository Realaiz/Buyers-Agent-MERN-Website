const mongoose = require('mongoose');

const PropertySchema = new mongoose.Schema({
    address: {
        type: String,
        required: true
    }
})


const Property = mongoose.model('Property', PropertySchema);

module.exports = Property;