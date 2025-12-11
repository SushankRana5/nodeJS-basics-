import mongoose from "mongoose";
mongoose.connect(`mongodb://localhost:27017/mongodbdemo`)

const userschema = mongoose.Schema({
    name: String,
    username: String,
    age: Number,
})

const usermodel = mongoose.model('users', userschema);
export default usermodel;