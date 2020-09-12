const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

mongoose.set('useFindAndModify', false);
mongoose.connect('mongodb://xutai.site:27017/online')

const db = mongoose.connection

db.on('error', console.error.bind(console, 'connection error'))
db.once('open', function () {
    console.log('mongodb connteded by mongoose')
})

const app = express()

app.use(express.static('public'))
app.use(bodyParser.json(true, '100kb', '100kb', true, 'application/json'))
app.use('/api', require('./route/api'))
app.use(function (err, req, res, next) {
    console.error(err.stack)
    res.status(500).send(err)
})

app.listen(process.env.port || 4000, function () {
    console.log('listening on posrt 4000')
})
