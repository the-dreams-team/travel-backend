const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const trip = new Schema ({
    tripName: 'String',
    departureDate: 'String',
    returnDate: 'String',
    departureCity: "String",
    arrivalCity: "String",
    userId: {type: mongoose.Types.ObjectId, ref: 'User'},
})


module.exports = mongoose.model('trip', tripSchema)