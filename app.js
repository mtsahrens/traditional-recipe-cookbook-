const express = require('express')
require('dotenv').config()
const app = express()
const port = 3000
const{Pool} = require('pg')

const pool = new Pool()

pool.query('SELECT NOW()').then(time => console.log(time))

console.log(process.env)

app.get('/', (req, res) => {console.log('Hello'); res.send('Hello World')})

app.listen(port, () => {console.log('listening on port 3000')})