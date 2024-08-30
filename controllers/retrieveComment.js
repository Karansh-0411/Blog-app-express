const Comment = require('../models/Comment');

exports.retrieveComments = async (req, res) => {
  try {
    const comments = await Comment.find({ postId: req.params.postId });
    res.status(200).send(comments);
  } catch (error) {
    res.status(500).send(error);
  }
};
