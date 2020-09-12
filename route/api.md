// crud 
// create, read, update, delete


// url params  --- ?key=value&key=value
//lgn === longtitude,  lat === latitude,  
// parseFloat() trun String to Number



need to know:

- [geoNear](https://docs.mongodb.com/manual/reference/operator/aggregation/geoNear/)
- geospatial-queries
2d indexes



### get
```js
// find all  this works!
User.find({}).then(function(users) {
    // console.log(users)
    res.send(users)
})


// v0  deprecated syntax  not sure if it's working
User.geoNear(
    {type: 'Point', coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]},
    {maxDistance: 100000, spherical: true}
).then(function(users) {
    res.send(users)
})


// v1  not sure if it's working
User.aggregate()
.near({
        near: {
        type: 'Point', 
        coordinates: [parseFloat(req.query.lng), parseFloat(req.query.lat)]
        },
        distanceField: "distance",
        maxDistance: 3000000,
        spherical: true
    }).then(function(users) {
    res.send(users)
}).catch(console.error)


// v2  not working?
const lng = parseFloat(req.query.lng)
const lat =  parseFloat(req.query.lat)
User.aggregate([
    {
        $geoNear: {
            near: {
                type: 'Point',
                coordinates: [lng, lat]
            },
            // distanceField: "distance",
            // distanceField: "dist.calculated",
            // spherical: true
            // maxDistance: 3000000,
            // query: 
            // distanceMultiplier
            // includeLocs
            // uniqueDocs
            // minDistance
            // key
        }
    }
])
```


### mock in mongo shell or mongosh
```js
db.users.aggregate([
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
```