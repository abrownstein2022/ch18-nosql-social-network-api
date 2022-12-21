const { User, Thought } = require('../models');
const errorHandler = require('./errorHandler.js')

module.exports = {

  // remove all data
  async cleanUp(req, res){
    await User.deleteMany()
    await Thought.deleteMany()
    res.status(200).json({ message: 'All values deleted' })
  },
  // Get all users
  getUsers(req, res) {
    User.find()
      .then((users) => res.json(users))
      .catch((err) => res.status(500).json(err));
  },
  // Get a user
  getSingleUser(req, res) {
    User.findOne({ _id: req.params.user_id })
      .select('-__v')
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : res.json(user)
      )
      .catch((err) => res.status(400).json(err));
  },
  // Create a user
  createUser(req, res) {
    User.create(req.body)
      .then((user) => res.json(user))
      .catch(errorHandler);
  },
  // Delete a user
  deleteUser(req, res) {
    console.log('deleting user:', {
      params: req.params,
      body: req.body
    })
    // In the then block below: the return was modified so that the user is passed to the next then block
    User.findOneAndDelete({ _id: req.params.user_id })
      .then((user) => {
        if(user){
          Thought.deleteMany({ userId : req.params.user_id } )
          .then((thought) => thought && res.json({ message: 'User and thought deleted!' }))
        .catch((err) => res.status(500).json({message: 'Error deleting thoughts', value: err }));

        }else{
          res.status(404).json({ message: 'No user with that ID' })
        }

      })
      .catch((err) => res.status(500).json(err));
  },

  // Update a user
  updateUser(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.user_id },
      { $set: req.body },
      { runValidators: true, new: true }
    )
      .then((user) =>
        !user
          ? res.status(404).json({ message: 'No user with this id!' })
          : res.json(user)
      )
      .catch((err) => res.status(500).json(err));
  },

  addFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.user_id },
      { $push: { friends: req.params.friend_id } },
      { new: true }
    )
     //need this to resolve the request and respond
     .then((user) =>
     // if the user is not found: return error message
     !user
       ? res.status(404).json({ message: 'No such user exists' })
       : res.status(200).json({ message: 'Friend added to user' })
   )
  },

  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.user_id },
      { $pull: { friends: req.params.friend_id } },
      { new: true }
    )
      //need this to resolve the request and respond   
    .then((user) =>
    // if the user is not found: return error message
    !user
      ? res.status(404).json({ message: 'No such user exists' })
      : res.status(200).json({ message: 'Friend removed from user' })
  )
  },
};

//can also do below and not combine functions above with commas
//module.exports= {asdfasdf, asdfasdf, asdfasdf, adsfasdf}