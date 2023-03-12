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
    },
    consume: {
        type: [String]
    },
    wishlist: {
        type: [String]
    }

})

// media schema
const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
        unique: true
    },
    releaseYear: {
        type: String,
    },
    rating: {
        type: String
    },
    description: {
        type: String
    },
    communityReview: {
        type: String
    },
    libraryStatus: {
        type: String
    },
    mediaImagePath: {
        type: String
    }
    
})

const historySchema = new mongoose.Schema({
    username: {
        type: String,
        
    },
    action: {
        type: String
    },
    title: {
        type: String,
    },
    releaseYear: {
        type: String,
    },
    rating: {
        type: String
    },
    description: {
        type: String
    },
    communityReview: {
        type: String
    },
    libraryStatus: {
        type: String
    },
    mediaImagePath: {
        type: String
    }
})

//CREATE A MONGOOSE MODEL
const User = mongoose.model("User", userSchema);
const Media = mongoose.model("medias", mediaSchema);
const History = mongoose.model("historys", historySchema)

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

//general route to get all user data
app.get('/api/alluser', function(req, res) {
    User.find({}, function(err, users) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'Cannot connect to the database'
            })
        }

        if(!users) {
            return res.json({
                status: 'fail',
                message: 'cannot get users collections'
            })
        }

        res.json({
            status: 'success',
            data: {
                users
            }
        })
    })
})

//general route to get all media data
app.get('/api/allmedia', function(req, res) {
    Media.find({}, function(err, medias) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'Cannot connect to the database'
            })
        }

        if(!medias) {
            return res.json({
                status: 'fail',
                message: 'cannot get medias collection'
            })
        }

        res.json({
            status: 'success',
            data: {
                medias
            }
        })
    })
})

// Route to grab specific piece of Media
app.get('/api/media/:title', function(req, res) {
    const title = req.params.title;
    Media.findOne({ title: title }, function(err, media) {
        if (err) {
            return res.json({
                status: 'fail',
                message: 'Cannot connect to the database'
            });
        }
        if (!media) {
            return res.json({
                status: 'fail',
                message: 'Media not found'
            });
        }
        res.json({
            status: 'success',
            data: {
                media
            }
        });
    });
});

app.get('/api/grabuser/:username', function(req, res) {
    const username = req.params.username;
    User.findOne({username: username}, function(err, user) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'Failed to find user'
            })
        }
        res.json({
            status: 'success',
            data: {
                user
            }
        })
    })
})

//Query to add item to user's wishlist array 
app.post('/api/adduserwish', function (req, res) {
    const {username, title} = req.body

    if(!title || !username) {
        return res.json({
            status: 'fail',
            message: 'title or user is missing'
        });
    }

    User.updateOne({username: username}, { $push: {wishlist: title}}, function(err, result) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'error with the database connection'
            });
        }

        if(!result) {
            return res.json({
                status: 'fail',
                message: 'fail to update document'
            });
        }

        const resultObj = result.modifiedCount

        res.json({
            status: 'success',
            data: {
                resultObj
            }
        });
    })
})

//Query to remove item from a user's wishlist array
app.post('/api/removeuserwish', function (req, res) {
    const {username, title} = req.body

    if(!title || !username) {
        return res.json({
            status: 'fail',
            message: 'title or user is missing'
        });
    }

    User.updateOne({username: username}, { $pull: {wishlist: title}}, function(err, result) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'error with the database connection'
            });
        }

        if(!result) {
            return res.json({
                status: 'fail',
                message: 'fail to update document'
            });
        }

        const resultObj = result.modifiedCount

        res.json({
            status: 'success',
            data: {
                resultObj
            }
        });
    })    
})

//Query to add item to user's consume array 
app.post('/api/adduserconsume', function (req, res) {
    const {username, title} = req.body

    if(!title || !username) {
        return res.json({
            status: 'fail',
            message: 'title or user is missing'
        });
    }

    User.updateOne({username: username}, { $push: {consume: title}}, function(err, result) {

        if(err) {
            return res.json({
                status: 'fail',
                message: 'error with the database connection'
            });
        }

        if(!result) {
            return res.json({
                status: 'fail',
                message: 'fail to update document'
            });
        }

        const resultObj = result.modifiedCount

        res.json({
            status: 'success',
            data: {
                resultObj
            }
        });
    })
})

//Query to remove item from user's consume list
app.post('/api/removeuserconsume', function (req, res) {
    const {username, title} = req.body

    if(!title || !username) {
        return res.json({
            status: 'fail',
            message: 'title or user is missing'
        });
    }

    User.updateOne({username: username}, { $pull: {consume: title}}, function(err, result) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'error with the database connection'
            });
        }

        if(!result) {
            return res.json({
                status: 'fail',
                message: 'title not in the wishlist array'
            });
        }

        const resultObj = result.modifiedCount

        res.json({
            status: 'success',
            data: {
                resultObj
            }
        });
    })    
})



//Add new media item to media collection database from user add item to library
app.post('/api/addmediaitem', function (req, res) { 
    const {title, releaseYear, rating, description, communityReview, libraryStatus, mediaImagePath} = req.body

    if(!title) {
        return res.json({
            status: 'fail',
            message: 'title is require'
        });
    }

    Media.findOne({ title: title }, function(err, media) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'database connection fail'
            });
        }
        if(!media) {
            Media.create(req.body, function (err, result) {
                if (err|| !result) {
                    return res.json({
                        status: 'fail',
                        message: 'fail to create new media doc'
                    })
                }
    
                //If the media is successfully created, the code returns a success status.
                res.json({
                    status: 'success'
                })
            })
        } else {
            return res.json({
                status: 'fail',
                message: 'media already exist'
            });
        }
    }) 
})

//Add user activity to history for feed
app.post('/api/addhistory', function (req, res) { 
    const {username, action, title, releaseYear, rating, description, communityReview, libraryStatus, mediaImagePath} = req.body

    if(!title || !username) {
        return res.json({
            status: 'fail',
            message: 'username or title is require'
        });
    }

    History.create(req.body, function (err, result) {
        if (err) {
            return res.json({
                status: 'fail',
                message: 'fail to connect to database'
            })
        }

        if(!result) {
            return res.json({
                status: 'fail',
                message: 'fail to create new history doc'
            })
        }

        //If the history is successfully created, the code returns a success status.
        res.json({
            status: 'success'
        })
    })
})

//general route to get all user data
app.get('/api/allhistory', function(req, res) {
    History.find({}, function(err, histories) {
        if(err) {
            return res.json({
                status: 'fail',
                message: 'Cannot connect to the database'
            })
        }

        if(!histories) {
            return res.json({
                status: 'fail',
                message: 'cannot get users collections'
            })
        }

        res.json({
            status: 'success',
            data: {
                histories
            }
        })
    })
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