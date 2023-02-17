const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: [true, 'Email is required!'],
        minLength: [10, 'Email must be minimum 10 characters long!'],
    },
    password: {
        type: String,
        required: true,
        minLength: [4, 'Password must be minimum 4 characters long!']
    },
    description: {
        type: String,
        required: [true, 'Skils description is required!'],
        minLength: [5, 'Username must be minimum 5 characters long!'],

    },
    
});


const User = mongoose.model('User', userSchema);

module.exports = User;


