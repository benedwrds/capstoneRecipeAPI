const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const passport = require("passport");
const path = require('path')

const users = require("./Routes/api/users");

const app = express();
// Bodyparser middleware

app.use(
  bodyParser.urlencoded({
    extended: false
    
  })
);
app.use(bodyParser.json());// DB Config
const db = require("./Config/keys").mongoURI;// Connect to MongoDB
mongoose
  .connect(
    //not sure if this the correct localhost string to use??
    //says in place of "/User" should be my database name 
    //https://mongoosejs.com/docs/connections.html
    'mongodb://localhost:27017/benedwrds',
    //db,
    { useUnifiedTopology: true,
      useNewUrlParser: true 
    }
  )
  .then(() => console.log("MongoDB successfully connected"))
  .catch(err => console.log(err));

// Passport middleware
app.use(passport.initialize());
// Passport config
require("./Config/passport")(passport);
// Routes
app.use("/api/users", users);

if(process.env.NODE_ENV === 'production'){
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
}
  
  const port = process.env.PORT || 5000; 
  // process.env.port is Heroku's port if you choose to deploy the app there 
  app.listen(port, () => console.log(`Server up and running on port ${port} !`))