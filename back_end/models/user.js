let mongoose = require('mongoose');
let userSchema = mongoose.Schema({
    name: String,
    email: String,
    password: String,
    role: {
        type: String,
        enum: ["CUSTOMER", "FARMER", "ADMIN"]
    }
});
let users = mongoose.model('users', userSchema);

module.exports = { users };