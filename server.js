/**
 * @file server file
 */

// Define core modules
const   express = require("express"),
        bodyparser = require("body-parser");
// Define db connection
const   dbConfig = require("./config/db.conf.js");
const   mongoose = require("mongoose");

// define express app
const app = express();

// parse rquest content-type x-www-form-urlencoded and application/json
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json());

mongoose.Promise = global.Promise;

//Connection to db
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then( () => {
    console.log("Success, db connected");
}).catch(err => {
    console.log("cannot connect to db, bye for now");
});

// Home Route
app.get("/", (req, res) => {
    res.json({"message": "Home Products is in Here"});
});

app.get("*", (req, res) => {
    res.json({"message": "Not Found"});
});

// listen for request
app.listen(3333, () => {
    console.log("server is being listen on 3333")
});