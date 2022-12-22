const { ObjectId } = require('mongoose').Types;
const { Thought, User, Reaction } = require('../models');
const errorHandler = require('./errorHandler');


module.exports = {
  // Get all thought
  getThoughts(req, res) {
    Thought.find()
      .then(thoughts => res.json(thoughts))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // Get a single thought
  getSingleThought(req, res) {
    Thought.findOne({ _id: req.params.thought_id })
      .select('-__v')
      .then(thought => res.json(thought))
      .catch((err) => {
        console.log(err);
        return res.status(500).json(err);
      });
  },
  // create a new thought
  createThought(req, res) {
    console.log('POST `/api/thought/` - create a thought:', req.body)
    Thought.create(req.body)
      .then((thought) => {
        thought
          ? User.findOneAndUpdate(
            { _id: req.body.userId },
            { $push: { thoughts: thought._id } },
            { new: true }
          )
          .catch(errorHandler)
          : res.json({ message: 'Thought was not createtd successfully', value: thought,})

          return thought
      })
      .then(thought => thought && res.status(200).json({ message: 'Thought was created!'}))
      .catch(errorHandler);
  },
  // Delete a thought 
  deleteThought(req, res) {
    // attempt to find and delete a thought by id
    Thought.findOneAndRemove({ _id: req.params.thought_id })
      .then((thought) =>
        // if the thought is not found: return error message
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          // if thought is found: use the "thought.userName" to find and update the user => "pull" the "thought.id" from the "thoughts" array
          : User.findOneAndUpdate(
              { userName: thought.userName },
              { $pull: { thoughts: thought._id } },
              { new: true }
            )
      )
      .then((user) =>
        !user
          ? res.status(404).json({
              message: 'Thought deleted, but no user found',
            })
          : res.json({ message: 'Thought successfully deleted' })
      )
      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //  Update a thought 
  updateThought(req, res) {
    // attempt to find and delete a thought by id
    Thought.findOneAndUpdate({ _id: req.params.thought_id }, { thoughtText: req.body.thoughtText})
      .then((thought) =>
        // if the thought is not found: return error message
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : res.status(200).json({ message: 'Thought updated' })
 
      )

      .catch((err) => {
        console.log(err);
        res.status(500).json(err);
      });
  },

  //alexis start here
// create a new reaction
createReaction(req, res) {
  // Reaction.create(req.body)
  //   .then((reaction) => res.json(reaction))
  //   .catch(errorHandler);

    //- models have methods like 'find()' and 'findAndUpdate()'
    //- schemas can only be interacted with inside of another model
    Thought.findOneAndUpdate({ 
      _id: req.params.thought_id 
    }, { 
      //- push a new reaction to the thought.reactions array - using the reaction schema
      $push: { reactions: req.body }
    })
     //need this to resolve the request and respond
      .then((thought) =>
        // if the thought is not found: return error message
        !thought
          ? res.status(404).json({ message: 'No such thought exists' })
          : res.status(200).json({ message: 'Reaction added to thought' })
 
      )

},



// Delete a reaction 
deleteReaction(req, res) {
  // attempt to find and delete a reaction within a thought by id

  Thought.findOneAndUpdate({ 
    _id: req.params.thought_id 
  }, { 
    //- push a new reaction to the thought.reactions array - using the reaction schema
    $pull: { reactions: { _id: req.body.reactionId} } // req.body === '{ reactionId: '12341234' }' => like saying where: {  reactionId: reactionId }
  })
    .then((thought) =>
      // if the thought is not found: return error message
      !thought
        ? res.status(404).json({ message: 'No such thought exists' })
        : res.status(200).json({ message: 'Reaction added to thought' })

    )
},

};
