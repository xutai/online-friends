const mongoose = require('mongoose')
const userSchema = require('../schema/userSchema')

// https://mongoosejs.com/docs/api.html#schema_Schema-indexes
console.log(userSchema.indexes())

userSchema.methods.say = function() {
    const greeting = this.name ? "name is " + this.name  :  "no name "
    console.log(greeting)
}

const User = mongoose.model('user', userSchema)

module.exports = User
