
const User = require('../models/user');

// CREATE a user
let createUser = async (req, res) => {
    
  const user = new User(req.body);

  await user.save()
    .then(() => {
      res.status(201).send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};

// READ all users
let findAllUser = (req, res) => {
  User.find()
    .then(users => {
      res.send(users);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// // READ a user by ID
 let findUser = (req, res) => {
  User.findById(req.params.id)
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(err => {
      res.status(500).send(err);
    });
};

// // UPDATE a user
let updateUser= async (req, res) => {
  await User.findByIdAndUpdate(req.params.id, req.body, { new: true, runValidators: true })
    .then(user => {
      if (!user) {
        return res.status(404).send();
      }
      res.send(user);
    })
    .catch(err => {
      res.status(400).send(err);
    });
};


module.exports.createUser= createUser
module.exports.findAllUser= findAllUser
module.exports.findUser= findUser
module.exports.updateUser=updateUser