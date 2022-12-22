const mongoose = require('mongoose');

// const validateFunc = email => {
//   return email.test(/regex/g)
// }

const emailRegExp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
const regexDelimiter = /asdfasdfasdf/

const userSchema = new mongoose.Schema(
  {
    // mongoose already generates a unique UUID: { _id: "1234-abcd-1234-abcd"}
    // userId: {
    //   type: Schema.Types.ObjectId,
    //   default: () => new Types.ObjectId()
    // },
    userName: {
      type: String,
      unique: true,
      required: true,
      trim: true,
      maxlength: 50,
      minlength: 4
    },
    email: {
      type: String,
      unique: true,
      required: true,  
      // validate: [validateFunc, 'string to return when email doesnt match pattern'],
      match: [emailRegExp, 'Please enter a valid email address!']
    },
    thoughts: {
      type: Array,
      required: false,  //user starts with empty array
      default: []
    },
    friends: {
      type: Array,
      required: false,  //user starts with empty array
      default: []
    },
    createdAt: {
      type: Date,
      default: Date.now
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

userSchema.virtual('friendCount').get(function () {
  return this.friends.length;
});

// Create a virtual property `commentCount` that gets the number of friends per user
// userSchema
//   .virtual('friendCount')
//   // Getter
//   .get(() => this?.friends?.length ?? 0)
  // same as:
  /*
  .get(function () {
    return this.friends.length
  })
  */

//  now that we defined the schema, we can create a mongoose model to export and use
// mongoose.model(<model-name>, <model-schema>, <force-model-name>)  sometimes mongoose will add an s - user => users
UserModel = mongoose.model('user', userSchema, 'user')

module.exports = UserModel;
