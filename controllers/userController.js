const { User, Thought } = require('../models');
const errorHandler = require('./errorHandler.js')

module.exports = {
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
    // In the then block below: the return was modified so that the user is passed to the next tthen block
    User.findOneAndDelete({ _id: req.params.user_id })
      .then((user) => {
        !user
          ? res.status(404).json({ message: 'No user with that ID' })
          : Thought.deleteMany({ _id: { $in: req.params.user_id } })

        return user
      })
      .then((user) => user && res.json({ message: 'User deleted!' }))
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
  },

  removeFriend(req, res) {
    User.findOneAndUpdate(
      { _id: req.params.user_id },
      { $pull: { friends: req.params.friend_id } },
      { new: true }
    )
  },
};
