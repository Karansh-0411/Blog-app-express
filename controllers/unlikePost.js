const Like = require('../models/Like');

exports.unlikePost = async (req, res) => {
  try {
    const { postId, userId } = req.body;
    const like = await Like.findOneAndDelete({ postId, userId });
    if (!like) {
      return res.status(404).send({ error: 'Like not found' });
    }
    res.status(200).send({ message: 'Post unliked' });
  } catch (error) {
    res.status(500).send(error);
  }
};
