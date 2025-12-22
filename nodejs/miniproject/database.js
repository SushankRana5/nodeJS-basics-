import mongoose from "mongoose";

mongoose.connect("mongodb://127.0.0.1:27017/athunticationDB")
.then(() => console.log("MongoDB connected"))
.catch(err => console.log(err));

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

const User = mongoose.model("User", userSchema);

export default User;
