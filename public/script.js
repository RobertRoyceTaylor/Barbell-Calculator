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

plateDisplay();