let plateDisplayHeight = function(){
    let baseHeight = 100;
    let plateArray = Array.prototype.slice.call(document.getElementsByClassName("plateVisual"));
    for(let i = 0; i < plateArray.length; i++){
        const temp = parseInt(plateArray[i].innerHTML);
        plateArray[i].style.height = (temp * 2 + baseHeight) + "px"
        plateArray[i].style.lineHeight = (temp * 2 + baseHeight) + "px"
    }
}
