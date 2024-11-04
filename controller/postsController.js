const posts = require('../db/db');

const index = (req, res) => {
    res.json({
        data: posts,
        counter: posts.length
    });
}

module.exports = {
    index
}