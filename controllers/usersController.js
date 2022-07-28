const User = require('../models/user')

const index = (req, res) => {
    User.find({} , (err, users) => {
        if(err) {
            res.status(400).json(err)
            return
        }
        res.json(users)
    })
}

const createNewUser = (req, res) => {
    User.create(req.body)
    .then((Users) => {
        User.find({}, (err, user) => {
            res.json(user)
        })
    })
}

const updateUser = (req, res) => {
    console.log('update user route was pinged')
    console.log('this is the REQ Params ->',req.params.id)
    User.findByIdAndUpdate(req.params.id, req.body, (err, user) => {
        if(err) {
            console.log('error on update')
            res.status(400).json
            return
        }
        //send back the updated user info

        User.findById(req.params.id)
        .then(user => res.json(user))
    })
}

const deleteUser = (req, res) => {
    User.findByIdAndDelete(req.params.id , (err, user) => {
        if(err) {
            res.status(400).json(err)
            return
        }
    })
}




module.exports = {
    index,
    createNewUser,
    updateUser,
    deleteUser

}
