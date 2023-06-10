const mongoose = require('mongoose');
const campaing = require('./campaing');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    phonenumber: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true,
        minlength: 8
    },
    gender: {
        type: String,
        required: true
    },
    isAdmin:{
        type: Boolean,
        required:true
    },
    isInternAccepted:{
        type: Boolean,
        required:true
    },
    campaings: [
        {
            campaing: {
                type: Schema.Types.ObjectId,
                ref: "Campaing",
                required: true
            },
            fundscollected: {
                type: String,
                required: true
            },
            fundstonextmilestone: {
                type: String,
                required: true
            },
            mileStonesPassed: {
                type: String,
                required: true
            }
        }
    ],
    rewards: [
        {
            certificates: [ ],
            goodies: [ ],
            lor: [ ]
        }
    ]
    
});

module.exports = mongoose.model("User", userSchema);
