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
    User.findByIdAndUpdate(req.params.id, req.body, (err, users) => {
        if(err) {
            res.status(400).json
            return
        }
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
