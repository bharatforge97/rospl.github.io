const mongoose = require('mongoose');


const userSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    password: {
        type: String, 
        required:true,
    
    },

    cart: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
        required: false
      }]
},{timestamps:true})

const User = mongoose.model('User' ,userSchema)
module.exports = User;
