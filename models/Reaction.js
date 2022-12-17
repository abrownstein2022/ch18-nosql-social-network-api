const { Schema, Types } = require('mongoose');
const {formatDate} = require('./utils.js');

const reactionSchema = new Schema(
  {
    reactionId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    reactionBody:{
      type: String,
      required: true,  //same as minlength 1
      maxlength: 280 
    },
    userName: {
      type: String,
      required: true
    },
    createdAt: {
      type: Date,
      default: Date.now, // this is  long ugly number like 8761923434256
      get: formatDate   //invokes function with argument of current value (createdAt)
    },
  },
  {
    // Mongoose supports two Schema options to transform Objects after querying MongoDb: toJSON and toObject.
    // Here we are indicating that we want virtuals to be included with our response, overriding the default behavior
    toJSON: {
      virtuals: true,
    },
    id: false,
  }
);

//! A model is not created for Reactions, only the schema is used in "thought"s Model
module.exports = reactionSchema;
