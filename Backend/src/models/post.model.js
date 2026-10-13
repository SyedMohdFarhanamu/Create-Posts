const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
    image: String,
    caption: String,
})


const postModel = mongoose.model('post', postSchema); // 'post' is the name of the collection in MongoDB where the documents will be stored.

module.exports = postModel;