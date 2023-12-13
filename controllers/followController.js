const Follow = require('../models/Follow');

exports.followUser = async (req, res) => {
  try {
    const follow = new Follow({ follower: req.userId, following: req.params.userId });
    await follow.save();
    res.status(200).json({ message: 'Followed user successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

exports.unfollowUser = async (req, res) => {
  try {
    await Follow.findOneAndDelete({ follower: req.userId, following: req.params.userId });
    res.status(200).json({ message: 'Unfollowed user successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
