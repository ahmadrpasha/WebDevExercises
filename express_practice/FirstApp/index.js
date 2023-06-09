const express = require("express");
const app = express();

// app.use((req, res) => {
//     console.log("We got a new request!");
//     res.send('<h1>This is my webpage!</h1>');
// })

app.get('/', (req, res) => {
    res.send('Welcome to the homepage!');
})

app.get('/r/:subreddit', (req, res) => {
    const { subreddit } = req.params;
    res.send(`<h1>Browsing the ${subreddit} subreddit</h1>`);
})

app.get('/r/:subreddit/:postId', (req, res) => {
    const { subreddit, postId } = req.params;
    res.send(`<h1>Viewing the Post ID: ${postId} of ${subreddit} subreddit</h1>`);
})

app.post('/cats', (req, res) => {
    res.send('Post request to /cats');
})

app.get('/cats', (req, res) => {
    console.log("cat request");
    res.send('MEOW');
})

app.get('/dogs', (req, res) => {
    console.log("dog request");
    res.send('WOOF');
})

app.get('/search', (req, res) => {
    const { q } = req.query;
    if (!q) {
        res.send('Nothing found if nothing searched');
    }
    res.send(`<h1>Search results for: ${q}</h1>`);
})

app.get('*', (req, res) => {
    res.send(`I don't know that path!`);
})



app.listen(3000, () => {
    console.log("Listening on port 3000");
})