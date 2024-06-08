import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';
import User from './models/user.js';
import bcrypt from 'bcrypt';
import isValidEmail from './lib/email.js';


const app = express();
const port = process.env.PORT || 8000;
const saltRounds = 10

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

mongoose.connect("mongodb://127.0.0.1:27017/chripifyDB");


app.get('/', (req, res) => {
    return res.status(200).json({
        message: "Hello World"
    });
});

app.post('/register', async (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const username = req.body.username;

    try {
        const emailCheck = await User.findOne({ email: email });
        if (emailCheck) {
            return res.status(200).json({ message: "An account with this email address already exists. Please log in or use a different email." });
        }
        const usernameCheck = await User.findOne({ username: username });
        if (usernameCheck) {
            return res.status(200).json({ message: "The username you have chosen is already taken. Please choose a different username." });
        }

        bcrypt.hash(password, saltRounds, (err, hash) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Please try again later." });
            }
            else {
                const newUser = new User({
                    email: email,
                    password: hash,
                    username: username
                });
                newUser.save();
                return res.status(200).json({ message: "success" });
            }
        })
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Please try again later." });
    }
});

app.post('/login', async (req, res) => {
    console.log(req.body);
    const email = req.body.email;
    const password = req.body.password;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(200).json({ message: "No account found with this email address. Please check the email or register for a new account." });
        }

        bcrypt.compare(password, user.password, (err, success) => {
            if (err) {
                console.log(err);
                return res.status(500).json({ message: "Please try again later." });
            }
            else {
                if (success) {
                    return res.status(200).json({ message: "success" });
                }
                else {
                    return res.status(200).json({ message: "The password you entered is incorrect. Please try again." })
                }
            }
        });
    }
    catch (err) {
        console.log(err);
        return res.status(500).json({ message: "Please try again later." });
    }

});

app.get('/isAuthenticated', (req, res) => {
    return res.status(200).json({ message: false });
})


app.listen(port, () => {
    console.log(`Server running of port ${port}`);
});