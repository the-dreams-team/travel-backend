const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const Schema = mongoose.Schema;


const userSchema = new Schema ({
    name: String,
    email: String,
    password: String,
    trips: [{
        type: mongoose.Types.ObjectId, 
        ref: 'Trip'
    
    }]


})


module.exports = mongoose.model('User', userSchema)