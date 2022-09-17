const express = require('express')
const dotenv = require('dotenv').config() 
const port = process.env.PORT
const app = express()   
app.get('/', (req, res) => {
    res.send('hello world')
})
app.listen(port, () => {
    console.log(`Server is listening to port ${port}`)
})
