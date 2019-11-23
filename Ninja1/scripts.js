var leftValue = 450, topValue = 100, direction = "down", walk = 1;
function update(){
    document.getElementById("character").style.left = leftValue+"px";
    document.getElementById("character").style.top = topValue+"px";
    document.getElementById("character").style.backgroundImage = "url('../img/"+direction+""+walk+".png')";

}
document.onkeydown = function(e){
    console.log(e);
    if(walk == 1){
        walk = 2;
    }
    else if(walk == 2){
        walk = 1;
    }
    if(e.keyCode == 37 && leftValue > 0){ // LEFT
        leftValue = leftValue - 10;
        direction = "left";
        console.log(walk);
    }
    else if(e.keyCode == 39 && leftValue < 500){ // RIGHT
        leftValue = leftValue + 10;
        direction = "right";
    }
    else if(e.keyCode == 40 && topValue < 500){ // DOWN
        topValue = topValue + 10;
        direction = "down";
    }
    else if(e.keyCode == 38 && topValue > 0){ // UP
        topValue = topValue - 10;
        direction = "top";
    }
    update();
}