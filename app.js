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


//Global Variables
let userInput = 0;
let userBarbell = 45; 
let avaliablePlatesArr = [45,35,25,10,5,2.5] //Placeholder: Will be filled in using a function
let requiredPlatesArr = [];

//JavaScript Functions for Program
let weightCalculation = function(weightInput,avaliablePlatesArr,userBarbell){
    resetBarbell();
    weightInput = Math.round(weightInput / 5) * 5;
    console.log(weightInput);
    weightInput = (weightInput - userBarbell) / 2;
    console.log(weightInput);
    for(const plate of avaliablePlatesArr){
        if(plate <= weightInput){
            requiredPlatesArr.push(plate);
            weightInput = weightInput - plate;
        }
    }

    return requiredPlatesArr;
}

let resetBarbell = function(){
    requiredPlatesArr = [];
    avaliablePlatesArr = [45,35,25,10,5,2.5] //Placeholder: Will be filled in using a function

}



app.get('/', function(req,res){
    res.render("index", {
        UserWeightDisplay: userInput,
        RequiredPlatesDisplay: requiredPlatesArr
    })
});


app.post('/', function(req, res){
    userInput = req.body.weightInput;

    weightCalculation(userInput, avaliablePlatesArr, userBarbell)

    res.redirect('/')
})  


app.listen(port,function(){
    console.log("Server started on port " + port)
})