const mongoose = require('mongoose');
function connectDB() {
    mongoose.connect('mongodb://localhost:27017/todolist');
    mongoose.connection.once('connected', () => console.log('DB Connection Established Successfully.'))
}

module.exports = { connectDB }