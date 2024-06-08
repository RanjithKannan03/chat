import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    avatarURL: {
        type: String,
        default: 'null'
    },
});

const User = mongoose.model("User", userSchema);

export default User;