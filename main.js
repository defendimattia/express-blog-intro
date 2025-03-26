const express = require('express')
const app = express()
const port = 3000

const postList = require('./data/post-array.js')

app.use(express.static("public"))


app.get('/', (req, res) => {
    res.send('Server del mio blog')
})

app.get('/bacheca', (req, res) => {
    res.json(postList)
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})


