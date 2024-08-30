const express = require('express');
const router = express.Router();
const { createPost } = require('../controllers/createPost');
const { retrievePosts } = require('../controllers/retrieve');

router.post('/create', createPost);
router.get('/', retrievePosts);

module.exports = router;
