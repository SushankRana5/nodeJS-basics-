import mongoose from 'mongoose'

mongoose.connect(`mongodb://localhost:27017/databaseDemo`)

const Schema=mongoose.Schema({
    username:String,
    name:String,
    program:String
})
const usermodel=mongoose.model('user',Schema)
export default usermodel;