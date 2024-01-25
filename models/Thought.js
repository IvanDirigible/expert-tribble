const { Schema, model } = require('mongoose');

const thoughtSchema = new Schema(
  {
    thoughtText: {
      type: String,
      required: true,
      length: [1, 280],
    },
    createdAt: {
      type: Date,
      default: Date.now,
      get: function(dateTime){
        return dayjs.unix(dateTime).format("HH:MM:SS MM/DD/YYYY")
      }
    },
    username: {
      type: String,
      required: true,
    },
    reactions: [reactionSchema],
  },
  {
    toJSON: {
      getters: true,
    },
    id: false,
  }
);

thoughtSchema
  .virtual('reactionCount')
  .get(function () {
    return `${this.reactions.length}`;
  })
  .set(function () {
    // Will return to this
  });

const Thought = model('thought', thoughtSchema);

module.exports = thoughtSchema;
