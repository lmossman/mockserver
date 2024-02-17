const data = require('./data_1000_friends.json')
const express = require('express')
const app = express()
const port = 8685

app.get('/test', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})