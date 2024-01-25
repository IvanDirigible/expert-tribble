const { Schema, model } = require('mongoose');
const Thought = require('./Thought');

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
      validate: {
        isEmail: true,
      },
    },
    // Return here and confirm that _id values are being referenced properly
    // Gotta figure out how to reference these!
    thoughts: [Thought],
    friends: [userSchema],
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
    return `${this.friends.length}`;
  });

const User = model('user', userSchema);

module.exports = User;
