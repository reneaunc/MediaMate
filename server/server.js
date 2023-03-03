const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
dotenv.config();

const app = express();
app.use(express.json());

const port = 1337;

//SET THE VARIABLE OF THE DB ENVIRONMENT
const url = process.env.DATABASE_URL;

// user schema
const userSchema = new mongoose.Schema({
    username: {
        type: String,
        unique: true
    },
    email: {
        type: String,
        unique: true
    },
    password: {
        type: String
    } 
})

//CREATE A MONGOOSE MODEL
const User = mongoose.model("User", userSchema);


//CONNECT THE MONGODB USING THE MONGOOSE
mongoose.set('strictQuery', false);
mongoose.connect(url, function(err) {
    if(err) {
        console.log("err", err)
    } else {
        console.log("DB Connection Established");
    }
})

//DEFINE A ROOT ROUTE THAT SENDS A HELLO WORLD RESPONSE
app.get('/', function(req, res) {
    res.send('Hello World')
})

app.post('/api/signup', function (req, res) {
     //Extract the required fields (username, email, password, and confirmPassword) from the request body and store them in separate variables.
     const {username, email, password, confirmPassword} = req.body
 
     //Check if all the required fields are present in the request body. If any of the fields is missing, the code returns a failure status and an error message indicating that all input fields are required.
     if(!username || !email || !password || !confirmPassword) {
         return res.json({
             status: 'fail',
             message: 'All input field are required'
         });
     }

     //Use the bcrypt.hash function to hash the password before storing it in the database. The function takes the password and a salt value (12 in this case) as arguments, and returns the hashed password. If an error occurs while hashing the password, the code returns a failure status and an error message.
     bcrypt.hash(password, 12, function(err, hashedPassword) {
         if(err) {
             return res.json({
                 status: 'fail',
                 message: 'failed to hash the password'
             })
         }
         
         req.body.password = hashedPassword;
         //Use the User.create method to create a new user in the database. The method takes the request body as an argument and returns the newly created user. If an error occurs or the user is not created, the code returns a failure status and an error message.
         User.create(req.body, function (err, User) {
             if (err || !User) {
                 return res.json({
                     status: 'fail',
                     message: 'username or email already existed'
                 })
             }
 
             //If the user is successfully created, the code returns a success status and the newly created user.
             res.json({
                 status: 'success',
                 data: {
                     User
                 }
             })
         })
     })
  
 })

 app.post('/api/login', function (req, res) {
    //Extract the required fields(username and password) from the request body and store them in separate variables.
    const { username, password } = req.body

    //If statement to check if both the username and password fields are present in the request body.If any of them is missing, the code returns a failure status and an error message indicating that all input fields are required.
    if(!username || !password) {
        return res.json({
            status: 'fail',
            message: 'All input field are required'
        })
    }

    //Use the User.findOne method to retrieve the user from the database based on the username.If an error occurs or the user is not found, the code returns a failure status and an error message indicating that the username or password is invalid.
    User.findOne({username}, function(err, user) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'Failed to find the user'
            })
        }

        if(!user) {
            return res.json({
                status: 'fail',
                message: 'Invalid username or password'
            })
        }

        //Use the bcrypt.compare function to compare the password submitted by the user with the hashed password stored in the database.If the passwords do not match, the code returns a failure status and an error message indicating that the email or password is invalid.
        bcrypt.compare(password, user.password, function(err, isCorrectPassword) {
            if(err) {
                return res.json({
                    status: 'fail',
                    message: 'Failed to compare password'
                })
            }

            if(!isCorrectPassword) {
                return res.json({
                    status: 'fail',
                    message: 'Invalid username or password'
                })
            }

            //If the email and password are correct, the code returns a success status and the user.
            res.json({
                status: 'success',
                data: {
                    user
                }
            })
        })
    })
})

 app.listen(port, function () {
    console.log(`Example app listening on port ${port}`)
})