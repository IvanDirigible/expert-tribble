const { Schema, model } = require('mongoose');
// const Thought = require('./Thought');

const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      required: true,
      trim: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      //Issue with the validate
      validate: {
        validator: () => Promise.resolve(false),
        message: 'Email validation failed'
      },
    },
    // Return here and confirm that _id values are being referenced properly
    // Gotta figure out how to reference these!
    // I think this is how you do it.
    thoughts: [{ type: Schema.Types.ObjectId, ref: 'thought' }],
    friends: [{ type: Schema.Types.ObjectId, ref: 'user' }],
  },
  {
    toJSON: {
      getters: true,
      virtuals: true,
    },
  }
);

userSchema
  .virtual('friendCount')
  .get(function () {
    // Are the quotes needed?
    return this.friends.length;
  });

const User = model('user', userSchema);

module.exports = User;
