const mongoose = require('mongoose');

const PrefrenceSchema = new mongoose.Schema({
    location: {
        type: String,
        required: true
    },
    minprice: {
        type: Number,
        required: true
    },
    maxprice: {
        type: Number,
        required: true
    },
    hometype: {
        houses: {
            type: Boolean
        },
        manufactured: {
            type: Boolean
        },
        condos: {
            type: Boolean
        },
        apartments: {
            type: Boolean
        },
        acreage: {
            type: Boolean
        },
        townhouse: {
            type: Boolean
        }
    },
    bathrooms: {
        type: Number
    },
    maxhoa: {
        type: Number
    },
    parkingspots: {
        type: Number
    },
    housesize: {
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    lotsize: {
        min: {
            type: Number
        },
        max: {
            type: Number
        }
    },
    stories: {
        type: Number
    },
    ammenities: {
        type: String
    },
    view: {
        type: String
    },
    nearby: {
        type: String
    },
    date: {
        type: Date,
        default: Date.now
    }
})

module.exports = PrefrenceSchema;