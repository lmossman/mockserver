const data = require('./data_8000_records.json')
const express = require('express')
const app = express()
const port = 8685

app.get('/test', (req, res) => {
    // setTimeout(() => {
    //     res.json(data)
    // }, 60000);
    res.json(data)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})