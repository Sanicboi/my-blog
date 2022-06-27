//import all modules
const express = require('express');
const mongoose = require('mongoose');
const fs = require('fs');
const path = require('path');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const redis = require('redis');
const meilisearch = require('meilisearch');
const io = require('socket.io');
require('dotenv').config();

// Schema
// const ObjectId = new mongoose.Types.ObjectId()
const userSchema = new mongoose.Schema({
    username: String,
    blogPosts: [
        {
            id: {type: mongoose.ObjectId, index: true, unique: true},
            name: String,
            intro: String,
            text: String,
            final: String,
            tags: [
                String
            ]
        }
    ],
    password: String,
    email: String,
});


// model

const User = mongoose.model('user', userSchema);


// initialize the app

const app = express();

// auth middleware 

const hasToken = (req, res, next) => {
    const auth = req.headers.authorization;
    if (!auth) {
        res.status(403).end();
    } else if (auth.split(' ')[0] != 'Bearer') {
        res.status(403).end();
    } else {
        const token = auth.split(' ')[1];
        try {
            const decoded = jwt.verify(token, 'my_key');
            req.userId = decoded.id;
            next()
        } catch (error) {
            if (error.name === 'TokenExpiredError') {
                res.status(401).end();
            } else {
                res.status(403).end();
            }
        }
    }
}

// API
app.get('/api/posts', async (req, res) => {
    const conn = await mongoose.connect('mongodb://localhost:27017/blog_db');
    const posts = await User.find({blogPosts: {$elemMatch: {tags: {$all: ['popular']}}}}).select('blogPosts').sort('_id').limit(15); //TODO: make recommendations
    await conn.disconnect();
    res.status(200).json(posts).end();
});


app.get('/api/posts/:id',async (req, res) => {
    const conn = await mongoose.connect('mongodb://localhost:27017/blog_db');
    const user = await User.findOne({blogPosts: {$elemMatch: {id: new mongoose.Types.ObjectId(req.params.id)}}}).select('blogPosts username');
    //TODO: redis
    await conn.disconnect();
    const post = user.blogPosts.find(currentPost => currentPost.id.toString() === req.params.id);
    res.status(200).json({post: post, author: user.username}).end();
});

//for post requests
app.use(express.json())


app.post('/api/post', hasToken, async (req, res) => {
    const conn = await mongoose.connect('mongodb://localhost:27017/blog_db');
    const body = req.body;
    await conn.disconnect();
    res.status(201).json({post: body});
})


//listen on port 80
app.listen(process.env.PORT || 80, () => {
    console.log(`listening on port ${process.env.PORT || 80}`);
})