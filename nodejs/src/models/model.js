import mongoose from 'mongoose'

const sch = mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
})

const model = mongoose.model('model', sch)

export default model;