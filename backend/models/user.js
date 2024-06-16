import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
    email: String,
    username: String,
    password: String,
    avatarURL: {
        type: String,
        default: 'https://t4.ftcdn.net/jpg/04/10/43/77/360_F_410437733_hdq4Q3QOH9uwh0mcqAhRFzOKfrCR24Ta.jpg'
    },
    status: {
        type: String,
        default: "Available"
    },
    pinnedChannels: {
        type: [String],
        defualt: []
    }
});

const User = mongoose.model("User", userSchema);

export default User;