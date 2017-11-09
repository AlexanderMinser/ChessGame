//Alexander Minser
//11/9/2017
//Chess board pieces



function Piece(coord) {
    this.coord = coord

}

Piece.prototype.getCoord = function(){
    return this.coord;
}

Piece.prototype.setCoord = function(coord){
    this.coord = coord;
}

function Knight() {

}

function Pawn() {

}

function Rook() {

}

function Bishop() {

}

function Queen() {

}

function King() {

}
