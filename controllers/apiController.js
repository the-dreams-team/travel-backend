const Amadeus = require('amadeus');
const dotenv = require('dotenv');
dotenv.config();

const amadeus = new Amadeus({
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET
});


const findAirports = async (req, res) => {
  const { page, subType, keyword } = req.query;
  try {
    const response = await amadeus.client.get('/v1/reference-data/locations', {
      keyword,
      subType,
      'page[offset]': page * 10
    });
    await res.json(JSON.parse(response.body));
  } catch (error) {
    await res.json(error);
  }
};




module.exports = {
  findAirports,
};