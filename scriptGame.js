var world = [
    [1,1,1,1,1],
    [1,0,2,2,1],
    [1,2,1,2,1],
    [1,2,0,2,1],
    [1,0,2,2,1],
    [1,2,1,2,1],
    [1,2,0,2,1],
    [1,1,2,1,1],
];

var worldDict = {
    0: "blank",
    1: "wall",
    2: "sushi"
};

function drawWorld(){
    output = "";

    for(var row = 0;row < world.length; row++){
        output += "<div class = 'row'>"
        for(var x = 0; x < world[row].length;x++){
            output += "<div class = '" + worldDict[world[row][x]] +"'></div>"
        }
        output += "</div>"
    }
    document.getElementById("world").innerHTML = output;
}

var ninjaman = {
    x : 1,
    y : 1
}

function drawNinjaman(){
    document.getElementById('ninjaman').style.top = ninjaman.y * 44 + 'px';
    document.getElementById('ninjaman').style.left = ninjaman.x * 40 + 'px';
}
drawNinjaman();

document.onkeydown = function(e){
    if(e.keyCode == 37){ // LEFT
        ninjaman.x = ninjaman.x-1;
    }
    if(e.keyCode == 38){ // UP
        ninjaman.y--;
    }
    if(e.keyCode == 39){ // RIGHT
        ninjaman.x++;
    }
    if(e.keyCode == 40){ // DOWN
        ninjaman.y++;
    }
    drawNinjaman();
}