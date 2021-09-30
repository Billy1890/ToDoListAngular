const mongoose = require('mongoose');



const articleSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    createdBy: {
        id: {
            type: String,
            required: true,
        },

        name: {
            type: String,
            required: true,
        }
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})


const Todo = mongoose.model('todos', articleSchema)
module.exports = { Todo, }