const buttons = {
    buttonPlateIncriment45: document.getElementById("45-btn"),
    buttonPlateIncriment35: document.getElementById("35-btn"),
    buttonPlateIncriment25: document.getElementById("25-btn"),
    buttonPlateIncriment10: document.getElementById("10-btn"),
    buttonPlateIncriment5: document.getElementById("5-btn"),
    buttonPlateIncriment2: document.getElementById("2-btn")
};

const platesCount = {
    plateCount45: document.getElementById("inner-text-45"),
    plateCount35: document.getElementById("inner-text-35"),
    plateCount25: document.getElementById("inner-text-25"),
    plateCount10: document.getElementById("inner-text-10"),
    plateCount5: document.getElementById("inner-text-5"),
    plateCount2: document.getElementById("inner-text-2")
};




let plateDisplay = function(){
    let baseHeight = 100;
    let plateArray = Array.prototype.slice.call(document.getElementsByClassName("plateVisual"));
    for(let i = 0; i < plateArray.length; i++){
        const temp = parseInt(plateArray[i].innerHTML);
        plateArray[i].style.height = (temp * 2 + baseHeight) + "px"
        plateArray[i].style.lineHeight = (temp * 2 + baseHeight) + "px"
        switch (temp) {
            case 45:
                plateArray[i].style.backgroundColor = "red";
                break;
            
            case 35:
                plateArray[i].style.backgroundColor = "blue";
                break;

            case 25:
                plateArray[i].style.backgroundColor = "green";
                break;

            case 10:
                plateArray[i].style.backgroundColor = "yellow";
                break;

            case 5:
                plateArray[i].style.backgroundColor = "orange";
                break;

            case 2.5:
                plateArray[i].style.backgroundColor = "pink";
                break;
        
            default:
                break;
        }
    }
}



function incrementValue(value) {
    value += 2;
    return value;
}

function decrementValue(value) {
    value -= 2;
    return value;
}


function incrementDisplay(plate, value) {
    let maxValue = 6
    let defaultValue = 0
    if (value > maxValue || value < 0) {
        value = defaultValue;
    }
    plate.value = value;
    return plate.value;
}




buttons.buttonPlateIncriment45.addEventListener("mousedown", function (event) {
    //Stops the menu from appearing
    document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    })
    switch (event.button) {
        case 0:
            incrementDisplay(platesCount.plateCount45,incrementValue(parseInt(platesCount.plateCount45.value)))
            break;
        case 2:
            incrementDisplay(platesCount.plateCount45,decrementValue(parseInt(platesCount.plateCount45.value)))
            break;
        default:
            break;
    }    
});

buttons.buttonPlateIncriment35.addEventListener("mousedown", function (event) {
    document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    })
    switch (event.button) {
        case 0:
            incrementDisplay(platesCount.plateCount35,incrementValue(parseInt(platesCount.plateCount35.value)))
            break;
        case 2:
            incrementDisplay(platesCount.plateCount35,decrementValue(parseInt(platesCount.plateCount35.value)))
            break;
        default:
            break;
    }    
});

buttons.buttonPlateIncriment25.addEventListener("mousedown", function (event) {
    document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    })
    switch (event.button) {
        case 0:
            incrementDisplay(platesCount.plateCount25,incrementValue(parseInt(platesCount.plateCount25.value)))
            break;
        case 2:
            incrementDisplay(platesCount.plateCount25,decrementValue(parseInt(platesCount.plateCount25.value)))
            break;
        default:
            break;
    }    
});

buttons.buttonPlateIncriment10.addEventListener("mousedown", function (event) {
    document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    })
    switch (event.button) {
        case 0:
            incrementDisplay(platesCount.plateCount10,incrementValue(parseInt(platesCount.plateCount10.value)))
            break;
        case 2:
            incrementDisplay(platesCount.plateCount10,decrementValue(parseInt(platesCount.plateCount10.value)))
            break;
        default:
            break;
    }    
});

buttons.buttonPlateIncriment5.addEventListener("mousedown", function (event) {
    document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    })
    switch (event.button) {
        case 0:
            incrementDisplay(platesCount.plateCount5,incrementValue(parseInt(platesCount.plateCount5.value)))
            break;
        case 2:
            incrementDisplay(platesCount.plateCount5,decrementValue(parseInt(platesCount.plateCount5.value)))
            break;
        default:
            break;
    }    
});

buttons.buttonPlateIncriment2.addEventListener("mousedown", function (event) {
    document.addEventListener("contextmenu", function(event){
        event.preventDefault();
    })
    switch (event.button) {
        case 0:
            incrementDisplay(platesCount.plateCount2,incrementValue(parseInt(platesCount.plateCount2.value)))
            break;
        case 2:
            incrementDisplay(platesCount.plateCount2,decrementValue(parseInt(platesCount.plateCount2.value)))
            break;
        default:
            break;
    }    
});
plateDisplay();

