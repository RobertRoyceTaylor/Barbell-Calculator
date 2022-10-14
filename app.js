const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs")
const app = express();

const port = process.env.PORT || 3000;

app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs')
app.use(express.static('public'))
app.use(bodyParser.urlencoded({ extended: true }));

let userInputWeight = 0;
app.get('/', function(req,res){
    res.render("index", {
        UserWeightInput: userInputWeight
    })
});


app.post('/', function(req, res){
    userInputWeight = req.body.weightInput;


    res.redirect('/')
})


app.listen(port,function(){
    console.log("Server started on port " + port)
})