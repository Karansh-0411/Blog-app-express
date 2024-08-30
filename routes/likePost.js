const express = require('express');
const router = express.Router();
const { likePost } = require('../controllers/likePost');
const { unlikePost } = require('../controllers/unlikePost');

router.post('/like', likePost);
router.post('/unlike', unlikePost);

module.exports = router;
