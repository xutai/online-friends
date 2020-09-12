// db ops
// fake data:

// mongo shell or mongosh
db.users.insert(
    [
        {
            "name": "萌妹",
            "age": 19,
            "available": true,
            "imgid": 1,
            location: {
                type: "Point",
                coordinates: [-70, 28.791]
            },
            dist: {
                calculated: ""
            }
        },
        {
            "name": "柠檬小姐姐",
            "age": 22,
             "imgid": 2,
            "available": true,
            location: {
                type: "Point",
                coordinates: [-65, 24.791]
            },
            dist: {
                calculated: ""
            }
        },
        {
            "name": "草莓",
            "age": 19,
            "available": true,
            "imgid": 3,
                location: {
                type: "Point",
                coordinates: [-40, 32.791]
            },
            dist: {
                calculated: ""
            }
        },
        {
            "name": "西瓜妹",
            "age": 23,
            "available": true,
            "imgid": 4,
                    location: {
                type: "Point",
                coordinates: [-30, 52.791]
            },
            dist: {
                calculated: ""
            }
        }
    ]
)

