const Post = require('../models/Post');

exports.createPost = async (req, res) => {
  try {
    const post = new Post(req.body);
    await post.save();
    res.status(201).send(post);
  } catch (error) {
    res.status(400).send(error);
  }
};
