const express = require('express');
const app = express();
const postsRouter = require('./routers/posts');
app.use(express.json())


const HOST = process.env.HOST;
const PORT = process.env.PORT;

app.listen(PORT, (req, res) => {
    console.log(`Server is running at ${HOST}:${PORT}`);
});

app.get('/', (req, res) => {
    res.send('My blog API 01');
});

app.use('/posts', postsRouter);