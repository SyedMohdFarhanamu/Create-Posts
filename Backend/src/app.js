const express = require('express');
const multer = require('multer');
const uploadFile = require('./services/storage.service');
const postModel = require('./models/post.model')
const cors = require('cors');

const app = express();

app.use(express.json()); // this middleware used for raw json data
app.use(cors()); // this middleware is used to enable CORS

// multer middleware for handling file uploads
const upload = multer({storage: multer.memoryStorage()}); // store the file in memory


app.post('/create-post', upload.single('image'), async (req,res) => {
    // console.log(req.body);
    console.log(req.file); // log the file object to the console

    const result = await uploadFile(req.file.buffer); // pass the buffer to the uploadFile function
    console.log(result); // log the result to the console
    // till here we have uploaded the file to ImageKit server and got the result in the console

    // now we will save the post data to MongoDB
    const post = await postModel.create({
        image: result.url, // save the url of the uploaded image to the image field
        caption: req.body.caption // save the caption from the request body
    })

    return res.status(200).json({
        message: 'Post created successfully',
        post: post
    })
})


app.get('/posts', async (req,res) => {
    const posts = await postModel.find(); // find all the posts from the database

    return res.status(200).json({
        message: 'Posts fetched successfully',
        posts: posts
    })
})

module.exports = app;
