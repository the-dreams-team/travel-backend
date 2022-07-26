const User = require('.././models/user')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')
const saltRounds = 10;

function createJWT(user) {
  return jwt.sign({user}, 'seirocks', {expiresIn: '24h'})
}

//allowing the user to login and cross reference that to the account that has been created (if there is one)

// const createLogin = (req, res) => {
//     User.findOne({name: req.body.name}, (err, user) => {
//         if(err) {
//             res.status(400).json(err)
//             return
//         }

//         if(!user) {
//             res.status(400).json({msg: 'The username that was submitted was not found!'})
//             return
//         }

//         let password = brypt.compareSync(req.body.password, user.password)

//         if(password) {
//             delete user.password

//             res.json(user)
//         } else {
//             res.status(204).json({msg: 'The password is not valid!'})
//         }

//     })
// }

const loginUser = (req, res) => {
  User.findOne({ email: req.body.email })
  .then(user => {
    if(!user){
      res.json({ msg: 'Please create an account first'})
      return
    }
    const pwValid = bcrypt.compareSync(req.body.password, user.password);
    if(pwValid === false){
      res.json({ msg: 'You entered the wrong password'})
    } else {
      //User logged in succesfully
      const token = createJWT(user);
      res.json({token});
    }
  })
}

const signupUser = (req, res) => {
  User.findOne({ email: req.body.email})
  .then(user => {
    if(!user){
      const hash = bcrypt.hashSync(req.body.password, saltRounds);
      User.create({
        name: req.body.username,
        email: req.body.email,
        password: hash
      })
      .then(user => {
        //console.log('new User', user);
        const token = createJWT(user);
        res.json({token});
      })
    } else {
      res.json({msg: 'you already created an account'});
    };
  });
}


 module.exports = {
     loginUser,
     signupUser,

 }


