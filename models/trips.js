const mongoose = require('mongoose')
const Schema = mongoose.Schema;


const tripSchema = new Schema ({
    tripName: 'String',
    departureDate: 'String',
    returnDate: 'String',
    departureCity: "String",
    arrivalCity: "String",
    departureIata: "String",
    arrivalIata: "String",
    ticketPrice: "String", 
    numberPassengers: "String",
    airlineType: "String",
    flightId: "String",
    flightObj: {},
    favorite: Boolean,
    userId: {
        type: mongoose.Types.ObjectId, 
        ref: 'User'
    },
})


module.exports = mongoose.model('Trip', tripSchema)


