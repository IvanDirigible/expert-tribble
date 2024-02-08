const { User, Thought } = require('../models');

module.exports = {
  async getUsers(req, res) {
    try {
      // const users = await User.find().populate('thoughts', 'friends');
      const users = await User.find().populate({ path: 'thoughts', select: "-__V" }).populate({path: 'friends', select: "-__V" });
      return res.json(users);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Get a single user
  async getSingleUser(req, res) {
    try {
      const user = await User.findOne({ _id: req.params.userId })
      .populate('thoughts', 'friends');

      if (!user) {
        return res.status(404).json({ message: 'No user with that ID' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // create a new user
  async createUser(req, res) {
    try {
      const user = await User.create(req.body);
      return res.json(user);
    } catch (err) {
      console.log(err);
      return res.status(500).json(err);
    }
  },
  // Searches for and updates a user
    async updateUser(req, res) {
    try {
      const user = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $set: req.body },
        { runValidators: true, new: true }
      );

      if (!user) {
        return res.status(404).json({ message: 'No user with this id!' });
      }

      res.json(user);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  // Delete a user (plus any associated thoughts)
  async deleteUser(req, res) {
    try {
      const user = await User.findOneAndDelete({ _id: req.params.userId });

      if (!user) {
        return res.status(404).json({ message: 'No such user with that id' });
      }
      
      await Thought.deleteMany({ _id: { $in: user.thoughts } });
      res.json({ message: 'User and thoughts deleted!'});
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async addFriend(req, res) {
    try {
      const friend = await User.findOneAndUpdate(
        { _id: req.params.userId },
        { $addToSet: { friends: req.params.friendId } },
        {runValidators: true, new: true }
        );

      if (!friend) {
        return res.status(404).json({ message: 'No such user with that id' });
      }

      res.json(friend);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  },
  async deleteFriend(req, res) {
    try {
      const friend = await User.findByIdAndDelete(
        { _id: req.params.userId },
        { $pull: { friends: req.params.friendId } },
        {runValidators: true, new: true }
      );
      
      if (!friend) {
        return res.status(404).json({ message: 'That is not a friend of the user' });
      }

      res.json(friend);
    } catch (err) {
      console.log(err);
      res.status(500).json(err);
    }
  }
};
