require("dotenv").config();
require("./database.js");
const bcrypt = require('bcrypt');
const User = require("../models/user");
const Trip = require("../models/trips");

const trips = [
  {
    tripName: "My first trip",
    departureDate: " Sep-1-2022",
    returnDate: "Sep-3-2022",
    departureCity: "Austin",
    arrivalCity: "Atlanta",
  },
  {
    tripName: "My honeymoon",
    departureDate: " Sep-21-2022",
    returnDate: "Sep-31-2022",
    departureCity: "New York City",
    arrivalCity: "DC",
  },
  {
    tripName: "DisneyWorld",
    departureDate: " June-06-2022",
    returnDate: "June-15-2022",
    departureCity: "Kansas City",
    arrivalCity: "Orlando",
  },
  {
    tripName: "FamilyReunion",
    departureDate: " Aug-21-2022",
    returnDate: "Aug-30-2022",
    departureCity: "Seatlle",
    arrivalCity: "Dallas",
  },
  {
    tripName: "FishingTrip",
    departureDate: "Aug-1-2022",
    returnDate: "Aug-10-2022",
    departureCity: "San Franciso",
    arrivalCity: "Portland",
  },
  {
    tripName: "Spring Break 2022",
    departureDate: "Apr-21-2022",
    returnDate: "May-1-2022",
    departureCity: "Portland",
    arrivalCity: "Boston",
  },
  {
    tripName: "Graduation",
    departureDate: "May-21-2022",
    returnDate: "May-31-2022",
    departureCity: "Topeka",
    arrivalCity: "Little Rock",
  },
  {
    tripName: "Summer Vacation",
    departureDate: "July-04-2022",
    returnDate: "July-11-2022",
    departureCity: "Dallas",
    arrivalCity: "Buffalo",
  },
  {
    tripName: "Memorial Weekend",
    departureDate: "Aug-1-2022",
    returnDate: "Aug-15-2022",
    departureCity: "Boston",
    arrivalCity: "Philidelpia",
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

User.deleteMany({})
  .then(() => Trip.deleteMany({}))
  .then(() => {
    return User.create([{ name: 'Jhon', email: 'jhon123@gmail.com', password: bcrypt.hashSync('1234', 10)},{ name: 'Megan', email: 'megan321@gmail.com', password: bcrypt.hashSync('12345', 10)}])
    .then(() => {
      return Trip.insertMany(trips);
    });
  })
  .then(console.log)
  .catch(console.error)
  .finally(() => {
    process.exit();
  });
