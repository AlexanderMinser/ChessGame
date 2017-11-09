//Alexander Minser
//11/9/2017
//Chess board squares



function Square(coords){
    this.coords = coords;
}

Square.prototype.setCoords = function(coords){
    this.coords = coords;
}

Square.prototype.getCoords = function(){
    return coords;
}
