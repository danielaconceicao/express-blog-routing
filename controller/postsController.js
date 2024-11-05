const posts = require('../database/db');
const fs = require('fs')

const index = (req, res) => {
    res.json({
        data: posts,
        counter: posts.length
    });
}

const store = (req, res) => {
    const post = {
        title: req.body.title,
        slug: req.body.slug,
        content: req.body.content,
        image: req.body.image,
        tags: req.body.tags
    }

    posts.push(post);
    fs.writeFileSync('./database/db.js', `module.exports = ${JSON.stringify(posts, null, 4)}`);

    return res.status(201).json({
        status: 201,
        data: posts,
        counter: posts.length
    });
}

module.exports = {
    index,
    store
}