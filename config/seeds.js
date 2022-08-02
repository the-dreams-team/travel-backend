require("dotenv").config();
require("./database.js");
const bcrypt = require('bcrypt');
const User = require("../models/user");
const Trip = require("../models/trips");

const trips = [
  {
    favorite: false,
    tripName: "My first trip",
    departureDate: " Sep-1-2022",
    returnDate: "Sep-3-2022",
    departureCity: "Austin",
    arrivalCity: "Atlanta",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "American Airlines",
    flightId: "123"

  },
  {
    favorite: false,
    tripName: "My honeymoon",
    departureDate: " Sep-21-2022",
    returnDate: "Sep-31-2022",
    departureCity: "New York City",
    arrivalCity: "DC",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "Spirit Airlines",
    flightId: "123"

  },
  {
    favorite: true,
    tripName: "DisneyWorld",
    departureDate: " June-06-2022",
    returnDate: "June-15-2022",
    departureCity: "Kansas City",
    arrivalCity: "Orlando",
    ticketPrice: "400", 
    numberPassengers: "150",
    airlineType: "American Airlines",
    flightId: "123"

  },
  {
    favorite: false,
    tripName: "FamilyReunion",
    departureDate: " Aug-21-2022",
    returnDate: "Aug-30-2022",
    departureCity: "Seatlle",
    arrivalCity: "Dallas",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "Southwest Airlines",
    flightId: "123"

  },
  {
    favorite: false,
    tripName: "FishingTrip",
    departureDate: "Aug-1-2022",
    returnDate: "Aug-10-2022",
    departureCity: "San Franciso",
    arrivalCity: "Portland",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "United Airlines",
    flightId: "123"

  },
  {
    favorite: false,

    tripName: "Spring Break 2022",
    departureDate: "Apr-21-2022",
    returnDate: "May-1-2022",
    departureCity: "Portland",
    arrivalCity: "Boston",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "American Airlines",
    flightId: "123"

  },
  {
    favorite: false,

    tripName: "Graduation",
    departureDate: "May-21-2022",
    returnDate: "May-31-2022",
    departureCity: "Topeka",
    arrivalCity: "Little Rock",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "Ethiad Airlines",
    flightId: "123"

  },
  {
    favorite: false,
    tripName: "Summer Vacation",
    departureDate: "July-04-2022",
    returnDate: "July-11-2022",
    departureCity: "Dallas",
    arrivalCity: "Buffalo",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "Southwest Airlines",
    flightId: "123"

  },
  {
   
    favorite: false,
    tripName: "Memorial Weekend",
    departureDate: "Aug-1-2022",
    returnDate: "Aug-15-2022",
    departureCity: "Boston",
    arrivalCity: "Philidelpia",
    ticketPrice: "225", 
    numberPassengers: "200",
    airlineType: "Spirit Airlines",
    flightId: "123"

  }
];

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
  },
];

// trips.deleteMany({})
// .then(()=>{
//     return trips.insertMany(trips)
// }).then((insertedTrips)=>{
//     console.log(insertedTrips)
// })

// User.deleteMany({})
//   .then(() => Trip.deleteMany({}))
//   .then(() => {
//     return User.create([{ name: 'Jhon', email: 'jhon123@gmail.com', password: bcrypt.hashSync('1234', 10)},{ name: 'Megan', email: 'megan321@gmail.com', password: bcrypt.hashSync('12345', 10)}])
//     .then(() => {
//       return Trip.insertMany(trips)
//     })
//     .then(trips => console.log(trips))
//   })
//   .catch(console.error)
//   .finally(() => {
//     process.exit();
//   });


User.deleteMany({})
.then(() => Trip.deleteMany({}))
.then(() => {
  return User.create({name: 'Megan', email: 'megan321@gmail.com', password: bcrypt.hashSync('12345', 10)})
  .then(user => 
   trips.map((trip) => ({...trip, userId: user._id }))
  )
  .then((trips) => Trip.insertMany(trips))
})
.then(console.log())
.catch(console.error)
.finally(() => {
  process.exit();
});

