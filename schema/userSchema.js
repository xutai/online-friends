const mongoose = require('mongoose')
const Schema = mongoose.Schema
// create geolocation Schema
// geojson.org
const GeoSchema = new Schema({
        type: {
            type: String,
            default: 'Point'
        },
        coordinates: {
            type: [Number],
            // [1, 2, 3]
            index: "2d"
           // "2dsphereIndexVersion": 3
            // 2dsphere !!!! 
        }
    /*
    ,
    dist: {
        calculated: {
            type: Number,
            default: 0
        },
        location: {
            type: {
                type: String,
                default: "Point"
            },
            coordinates: {
                type: [Number],
                index: "2dsphere"
            }


        }
    }
    */
})
const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        default: 0
    },
    available: {
        type: Boolean,
        default: true
    },
    imgid: {
      type: Number,
      default: 0
      
    },
    geometry: GeoSchema
})
module.exports = userSchema