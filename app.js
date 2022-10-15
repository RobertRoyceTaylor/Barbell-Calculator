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
let numOfPlatesArr = [0,0,0,0,0,0];
let avaliablePlatesArr = [];
let requiredPlatesArr = [];

//JavaScript Functions for Program
let calculateAvaliablePlates = function(array){
    for(let i = 0; i < (numOfPlatesArr[0] / 2);i++){
        array.push(45);
    }
    for(let i = 0; i < (numOfPlatesArr[1] / 2);i++){
        array.push(35);
    }
    for(let i = 0; i < (numOfPlatesArr[2] / 2);i++){
        array.push(25);
    }
    for(let i = 0; i < (numOfPlatesArr[3] / 2);i++){
        array.push(10);
    }
    for(let i = 0; i < (numOfPlatesArr[4] / 2);i++){
        array.push(5);
    }
    for(let i = 0; i < (numOfPlatesArr[5] / 2);i++){
        array.push(2.5);
    }
    return array;
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
    avaliablePlatesArr = [];

}


app.get('/', function(req,res){
    res.render("index", {
        UserWeightDisplay: sumRequiredPlates(requiredPlatesArr, userBarbell),
        RequiredPlatesDisplay: requiredPlatesArr,
        Plate45Value: numOfPlatesArr[0],
        Plate35Value: numOfPlatesArr[1],
        Plate25Value: numOfPlatesArr[2],
        Plate10Value: numOfPlatesArr[3],
        Plate5Value: numOfPlatesArr[4],
        Plate2_5Value: numOfPlatesArr[5]
    })
});

app.post('/', function(req, res){
    numOfPlatesArr[0] = parseInt(req.body.numOf45Plate);
    numOfPlatesArr[1] = parseInt(req.body.numOf35Plate);
    numOfPlatesArr[2] = parseInt(req.body.numOf25Plate);
    numOfPlatesArr[3] = parseInt(req.body.numOf10Plate);
    numOfPlatesArr[4] = parseInt(req.body.numOf5Plate);
    numOfPlatesArr[5] = parseInt(req.body.numOf2_5Plate);

    userInput = Math.round(req.body.weightInput / 5) * 5;
    if(userInput <= 45){
        userInput = 45;
    }
    calculateAvaliablePlates(avaliablePlatesArr);
    console.log(avaliablePlatesArr);
    console.log(numOfPlatesArr);
    weightCalculation(userInput, avaliablePlatesArr, userBarbell)

    res.redirect('/')
})  


app.listen(port,function(){
    console.log("Server started on port " + port)
})

/*
1. find a way to get values from number of plates
    a. put the plate selector inside the form and use req.body.(insertNameHere) to get the data and store them in an array???
2. use values to create avaliable plates array
3. work on styles sheet
*/
