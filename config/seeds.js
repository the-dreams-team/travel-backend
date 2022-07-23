require('dotenv').config();
require('./database.js');
const User = require('../models/user');
const Trip = require('../models/trips');




const trips = [
    {
       tripName: "My first trip",
       departureDate: " Sep-1-2022",
       returnDate:"Sep-3-2022",
       departureCity: "Austin",
       arrivalCity: "Atlanta"
    },
    {
      tripName: "My honeymoon",
       departureDate: " Sep-21-2022",
       returnDate:"Sep-31-2022",
       departureCity: "New York City",
       arrivalCity: "DC"
    }
]

const users = [
  {
    name: "Jhon",
    email: "jhon123@gmail.com",
    password: "1234",
    
  },
  {
    name: "Megan",
    email: "megan321@gmail.com",
    password: "12345",
  }
]

// trips.deleteMany({})
// .then(()=>{
//     return trips.insertMany(trips)
// }).then((insertedTrips)=>{
//     console.log(insertedTrips)
// })




User.deleteMany({})
.then(() => Trip.deleteMany({}))
.then(() => {
  return User.insertMany(users)
  .then(() => {
    return Trip.insertMany(trips)
  })
})
.then(console.log)
.catch(console.error)
.finally(() => {
  process.exit()
});