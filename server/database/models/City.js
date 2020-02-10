const mongoose = require('mongoose');
const PreferenceSchema = require('./Prefrence')
const User = require('./User')

const CitySchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    preferences: PreferenceSchema
})


const City = mongoose.model('City', CitySchema);

module.exports = City;