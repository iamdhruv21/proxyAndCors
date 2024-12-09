const express = require('express')
const app = express();

app.get('/', (req, res) => {
    res.send("This is Home Route")
});

app.get('/api/jokes', (req, res) => {
    const jokes = [
        {
            id: 1,
            title: "First Joke",
            detail: "lorem ipsum love dose tu ajja mere close"
        },
        {
            id: 2,
            title: "Second Joke",
            detail: "lorem ipsum love dose tu ajja mere close"
        },
        {
            id: 3,
            title: "Third Joke",
            detail: "lorem ipsum love dose tu ajja mere close"
        },
        {
            id: 4,
            title: "Fourth Joke",
            detail: "lorem ipsum love dose tu ajja mere close"
        },
        {
            id: 5,
            title: "Fifth Joke",
            detail: "lorem ipsum love dose tu ajja mere close"
        }
    ];

    res.send(jokes);
})


app.listen('3000', () => {
    console.log("App is running at port 3000")
})