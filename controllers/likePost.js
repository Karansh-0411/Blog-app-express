const Like = require('../models/Like');

exports.likePost = async (req, res) => {
  try {
    const like = new Like(req.body);
    await like.save();
    res.status(201).send(like);
  } catch (error) {
    res.status(400).send(error);
  }
};
