const express = require('express')
const route = express.Router()
const User = require('../models/users')

route.get('/', function (req, res, next) {
    console.log('/')
    res.send('1')
    res.end('2')
})
route.get('/online/users', function (req, res, next) {
    const lng = parseFloat(req.query.lng)
    const lat =  parseFloat(req.query.lat)
    User.aggregate([
        {
            $geoNear: {
                near: {
                    type: 'Point',
                    coordinates: [0, 0]
                },
                // distanceField: "distance",
                distanceField: "dist.calculated",
                spherical: false,
                // maxDistance: 3000000,
                // query: 
                // distanceMultiplier
                // includeLocs
                // uniqueDocs
                // minDistance
                key: "location"
            }
        },
        { $limit: 5 }
    ])
    .exec((err, result) => {
        if (err) throw err
        res.send(result)
    })
})


/*
User.find(function (err, users) {
    if (err) console.error(err)
    //console.log(users)
    console.log('find all user instances')
})
 
User.find({name: /^Tyle/}, function (err, result) {
    if (err) console.error(err)
    console.log("Lu", result)
})
 
*/
route.post('/online/users', function (req, res, next) {
    console.log(req.body)
    //const user = new User({
    //  name: 'Lucy',
    //  age: '27'
    //  name: req.body.name,
    //  age: req.body.age
    // })
    // const user = new User(req.body)

    // user.save(function (err, user) {
    ////     if (err) return console.error(err)
    //      user.say()
    //  })

    //User.createIndexes( { location : "2dsphere"} )

    // mongoose method, Guides, Models, Constructing Documetns, , model.create()
    User.create(req.body, (err, result) => {
        // if (err) return handleError(err)
        // if (err) return next()
        if (err) return next(err)
        // use next(err) here will jump to app.js the default erro handling function
        res.send(
            result
            /*
         {
             type: 'POST',
             message: 'post request  /online    send',
             name:  req.body.name,
             age: req.body.age
         })
           */
        )
    })
    // User.create(req.body).then().catch(next)
    // res.end('/')
    // this end() here does not work! 

})

/*
{"name" : "tyler", "age": "27"}
*/

route.put('/online/users/:id', function (req, res, next) {
    //User.updateOne({_id: req.params.id}, req.body, (err, r) => {     // does not work!!
    User.findByIdAndUpdate({ _id: req.params.id }, req.body, { returnOriginal: false }, function (err, r) {
        if (err) return next(err)
        /*
        User.findOne({ _id: req.params.id }, function (err, newResult) {
            if (err) return next(err)    
        })
        */
        res.send(r)
    })
})

route.delete('/online/users/:id', function (req, res, next) {
    // mongoose method,
    // console.log(req.params.name)
    User.findOneAndDelete({ _id: req.params.id }, function (err, r) {
        if (err) return next(err)
        res.send(r)
    })
    /*
    User.deleteOne(req.body, (err) => {
        if (err)  return next(err)
    })
    */
})

module.exports = route