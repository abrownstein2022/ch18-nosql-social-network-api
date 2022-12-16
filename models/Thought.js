const { Schema, Types } = require('mongoose');
import dateFns from 'date-fns'

const thoughtSchema = new Schema(
  {
    thoughtId: {
      type: Schema.Types.ObjectId,
      default: () => new Types.ObjectId()
    },
    thoughtText: {
      type: String,
      required: true,
      maxlength: 1,
      minlength: 280
    },
    createdAt: {
      type: Date,
      default: Date.now, // this is  long ugly number like 8761923434256
      get: function(val){
        return dateFns.format(val, 'HH:mm:SS d/yy')
      },
    },
    username: {
      type: String,
      required: true,  
    },
    reactions: {  //like replies
      type: Array,
      required: false,  // starts with empty array
      default: []
    }
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

module.exports = thoughtSchema;
