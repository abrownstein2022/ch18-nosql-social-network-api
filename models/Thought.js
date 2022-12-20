const mongoose = require('mongoose');
const dateFns = require('date-fns');
//need to add this since reaction schema is in its own file but it's part of Thoughts schema too
const reactionSchema = require('./reaction.js'); 
const {formatDate} = require('./utils.js');  //it's a named export so must be inside curly braces and name must be identical

const thoughtSchema = new mongoose.Schema(
  {
    // thoughtId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId()
    // },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now, // this is  long ugly number like 8761923434256
      get: formatDate
    },
    userName: {
      type: String,
      required: true,  
    },
    //- added this to better identtify the user - username likey to encounter collision
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },
    // This will include an array that holds all reactions
    reactions: [reactionSchema],
    // reactions: {  //like replies
    //   type: Array,
    //   required: false,  // starts with empty array
    //   default: []
    // }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

ThoughtModel = mongoose.model('thought', thoughtSchema, 'thought')
module.exports = ThoughtModel;
