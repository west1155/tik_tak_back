var express = require('express');
var app = express();
var bodyParser = require('body-parser');
let data = [];
var cors = require('cors');
// server.js
app.use(cors());

// support parsing of application/json type post data
app.use(bodyParser.urlencoded({
    extended: true
}));

app.get("/items", (req, res) => {
    res.json(data);
});

app.get("/items/:id", (req, res) => {
    const itemId = req.params.id;
    const item = data.find(_item => _item.id === itemId);

    if (item) {
        res.json(item);
    } else {
        res.json({ message: `item ${itemId} doesn't exist`})
    }
});

app.post("/items", (req, res) => {

    const item = req.body;
    console.log('Adding new item: ', item);

    data.push(item);



    // return updated list
    res.json(data);

});

app.use(express.static(__dirname + '/tik_tak'));


app.get('/',function(req, res){//get,put,post,delete
    res.sendFile(__dirname + '/tik_tak/index.html');
});


app.get("/posts", (req, res) => {
    res.send("We are now on posts");
});




app.listen(1111, () => console.log("Server running"));

module.exports = app;
