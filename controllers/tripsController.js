
const Trip = require('.././models/trips')


function index (req, res) {
    
    Trip.find({}, (err, trip)=>{
        console.log('got this far')
        if(err){
            res.status(400).json(err)
            return
        }
        res.json(trip)
    })

}


async function createTrip (req,res) {
try {
    await Trip.create(req.body);

    }catch (err){
        res.json({err});
    }
}

async function updateTrip (req, res) {
    try {
    await Trip.findById.update(req.params.id, req.body);

    }catch (err){
        res.json({err});
    }
}

async function deleteTrip (req, res) {  
    try {
    await Trip.findByIdAndDelete(req.params.id);

    }catch (err){
        res.json({err});
    }

}
async function tripDetails (req, res) {

}





module.exports = {
    
    createTrip,
    tripDetails,
    updateTrip,
    deleteTrip,
    index,

}

