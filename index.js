require('dotenv').config();
const express = require('express');
const mongoose = require('./config/database');

const postRoutes = require('./routes/postRoute');
const likeRoutes = require('./routes/likePost');
const commentRoutes = require('./routes/commentPost');

const app = express();

app.use(express.json());

// Routes
app.use('/posts', postRoutes);
app.use('/likes', likeRoutes);
app.use('/comments', commentRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
