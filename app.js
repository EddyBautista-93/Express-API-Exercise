const { response } = require('express');
const express = require('express');
const api_helper = require('./API_helper');
// creates a express application 
const app = express();
const port = 3000;

app.get('/', (req, res) => res.send('Welcome to Make REST API Calls In Express!'))

//api_helper returns a promise which when resolved returns a JSON or returns an error when rejected.

app.get('/getAPIResponse', (req, res) => {
    api_helper.make_API_call('https://icanhazdadjoke.com/')
    .then(response => {
        res.json(response)
    })
    .catch(error => {
        res.send(error)
    })
})

app.listen(port, () => console.log(`App listening on port ${port}!`))
