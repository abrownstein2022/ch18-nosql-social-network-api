const { Schema, Types } = require('mongoose');
const dateFns = require('date-fns');
const {formatDate} = require('./utils.js');  //it's a named export so must be inside curly braces and name must be identical

const thoughtSchema = new Schema(
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
    username: {
      type: String,
      required: true,  
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

module.exports = thoughtSchema;
