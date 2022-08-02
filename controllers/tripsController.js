
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


const createTrip = (req, res) => {
    console.log(req.body)
    Trip.create(req.body)
    .then(trip => {
        res.json(trip)
    })
}


async function updateTrip (req, res) {
    console.log('this is the req.params.id sent with the update',req.params.id)
    console.log("this is from the trip update route",req.body)
    try {
    await Trip.findByIdAndUpdate(req.params.id, req.body);

    }catch (err){
        res.json({err});
    }
    Trip.findById(req.params.id)
    .then(trip => res.json(trip))


}

async function deleteTrip (req, res) {  
    let {id} = req.params
    Trip.findByIdAndDelete(id, (err, trip)=>{
        if (err){
            res.status(400).json(err)
            return
        } 
        res.json({msg: 'trip deleted'})
    })
    
   
}
async function tripDetails (req, res) {
    console.log('tripdetails route pinged')
    Trip.findById(req.params.id)
    .then(trip => {
        console.log(trip)
        res.json(trip)
    })
}





module.exports = {
    
    createTrip,
    tripDetails,
    updateTrip,
    deleteTrip,
    index,

}

