// const mongoose = require('mongoose');

// const Schema = mongoose.Schema;

// const campaingSchema = new Schema({
//     campaingname:{
//         type:String,
//         required:true
//     },
//     totalFund:{
//         type:String,
//         required:true
//     },
//     users:[{type:mongoose.Types.ObjectId,ref:"User"}],
    
// })

// module.exports = mongoose.model("Campaing", campaingSchema);

const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const campaingSchema = new Schema({
  campaingname: {
    type: String,
    required: true
  },
  totalFund: {
    type: String,
    required: true
  },
  users: [{
    type: mongoose.Types.ObjectId,
    ref: "User"
  }],
  adminOnly: {
    type: Boolean,
    default: false
  }
});

module.exports = mongoose.model("Campaing", campaingSchema);

