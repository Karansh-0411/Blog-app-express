const express = require('express');
const router = express.Router();
const { createComment } = require('../controllers/comment');
const { retrieveComments } = require('../controllers/retrieveComment');

router.post('/create', createComment);
router.get('/:postId', retrieveComments);

module.exports = router;
