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
let calculateAvaliablePlates = function(placeholderParam){
    return 0;
}

let weightCalculation = function(weightInput,avaliablePlatesArr,userBarbell){
    resetBarbell();

    if(weightInput <= 45){
        return requiredPlatesArr;
    }
    weightInput = (weightInput - userBarbell) / 2;
    for(const plate of avaliablePlatesArr){
        if(plate <= weightInput){
            requiredPlatesArr.push(plate);
            weightInput = weightInput - plate;
        }
    }

    return requiredPlatesArr;
}

let sumRequiredPlates = function(array, userBarbell){
    if(array.length === 0){
        return userBarbell;
    }
    const initialValue = 0;
    let sum = array.reduce((previousValue, currentValue) => previousValue + currentValue, initialValue);
    return (sum * 2) + userBarbell;
}

let resetBarbell = function(){
    requiredPlatesArr = [];
    avaliablePlatesArr = [45,35,25,10,5,2.5] //Placeholder: Will be filled in using a function

}


app.get('/', function(req,res){
    res.render("index", {
        UserWeightDisplay: sumRequiredPlates(requiredPlatesArr, userBarbell),
        RequiredPlatesDisplay: requiredPlatesArr
    })
});

app.post('/', function(req, res){
    userInput = Math.round(req.body.weightInput / 5) * 5;
    if(userInput <= 45){
        userInput = 45;
    }
    weightCalculation(userInput, avaliablePlatesArr, userBarbell)

    res.redirect('/')
})  


app.listen(port,function(){
    console.log("Server started on port " + port)
})
