canvas = null;
context = null;
grid = null;
imageTab = {};


window.onload = function()
{
    canvas = document.getElementById('mon_canvas');
    if(!canvas)
    {
        alert("Impossible de récupérer le canvas");
        return;
    }
    context = canvas.getContext('2d');
    if(!context)
    {
        alert("Impossible de récupérer le context du canvas");
        return;
    }

    grid = new GridGraphic();

    var avancer = document.getElementById('avancer');
    avancer.addEventListener('click', function() {
        player.move();
        draw();
    });

    var pousser = document.getElementById('pousser');
    pousser.addEventListener('click', function() {
        player.push();
        draw();
    });

    var rotateL = document.getElementById('rotateL');
    rotateL.addEventListener('click', function() {
        player.leftRotate();;
        draw();
    });

    var rotateR = document.getElementById('rotateR');
    rotateR.addEventListener('click', function() {
        player.rightRotate();
        draw();
    });

    var collect = document.getElementById('collect');
    collect.addEventListener('click', function() {
        player.collect();
        draw();
    });

    var jump = document.getElementById('jump');
    jump.addEventListener('click', function() {
        player.jump();
        draw();
    });

    createImageTab();
    draw();
};

function draw(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    grid.drawMap();
    grid.drawGrid();
    grid.drawPlayer();
    context.stroke();
    context.closePath();
}

function createImageTab(){


    var arrayString =   ["grass","weapon","gold","player","monster","arrow", "road",
                        "stone","goal","obstacle","water","obstacleUnmovable","waterWalkable"];

    for(var i = 0; i < arrayString.length; i++){
        imageTab[arrayString[i]] = new Image();
        switch(i)
        {
            case 0:
                imageTab[arrayString[i]].src = "../projet/image/grass.jpg";
                break;
            case 1:
                imageTab[arrayString[i]].src = "../projet/image/Bow.png";
                break;
            case 2:
                imageTab[arrayString[i]].src = "../projet/image/Gold.png";
                break;
            case 3:
                imageTab[arrayString[i]].src = "../projet/image/Player.png";
                break;
            case 4:
                imageTab[arrayString[i]].src = "../projet/image/Monster.png";
                break;
            case 5:
                imageTab[arrayString[i]].src = "../projet/image/Arrow.png";
                break;
            case 6:
                imageTab[arrayString[i]].src = "../projet/image/DirtRoad.jpg";
                break;
            case 7:
                imageTab[arrayString[i]].src = "../projet/image/Stone.jpg";
                break;
            case 8:
                imageTab[arrayString[i]].src = "../projet/image/Goal.jpg";
                break;
            case 9:
                imageTab[arrayString[i]].src = "../projet/image/Obstacle.png";
                break;
            case 10:
                imageTab[arrayString[i]].src = "../projet/image/Water.jpg";
                break;
            case 11:
                imageTab[arrayString[i]].src = "../projet/image/obstacleUnmovable.png";
                break;
            case 12:
                imageTab[arrayString[i]].src = "../projet/image/WaterWalkable.png";
                break;
        }
    }
}


function FactoryImage(){

}


FactoryImage.prototype.createImageFrom = function(typeTile, posX, posY){
    switch(typeTile) {
        case 0:
            return imageTab["grass"];
            break;
        case 1:
            if (!hasCollectWeapon && map.map[posY][posX].typeId == EntityType.WEAPON) {
                return imageTab["weapon"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 2:
            if (!hasCollectGold && map.map[posY][posX].typeId == EntityType.GOLD) {
                return imageTab["gold"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 3:
            return imageTab["player"];
            break;
        case 4:
            if (!hasKillMonster && map.map[posY][posX].typeId == EntityType.MONSTER) {
                return imageTab["monster"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 5:
            if (!hasCollectArrow && map.map[posY][posX].typeId == EntityType.AMMO) {
                return imageTab["arrow"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 6:
            return imageTab["road"];
            break;
        case 7:
            return imageTab["stone"];
            break;
        case 8:
            return imageTab["goal"];
            break;
        case 9:
            return imageTab["obstacle"];
            break;
        case 10:
            return imageTab["water"];
            break;
        case 11:
            return imageTab["obstacleUnmovable"];
            break;
        case 12:
            return imageTab["waterWalkable"];
            break;
    }
};

/*
FactoryImage.prototype.createImageFrom = function(typeTile, posX, posY){
    var image = new Image();
    switch(typeTile)
    {
        case 0:
            image.src = "../projet/image/grass.jpg";
            break;
        case 1:
            if(!hasCollectWeapon && map.map[posY][posX].typeId == EntityType.WEAPON){
                image.src = "../projet/image/Bow.png";
            }
            else{
                image.src =  "../projet/image/DirtRoad.jpg";
            }
            break;
        case 2:
            if(!hasCollectGold && map.map[posY][posX].typeId == EntityType.GOLD){
                image.src = "../projet/image/Gold.png";
            }
            else{
                image.src = "../projet/image/DirtRoad.jpg";
            }
            break;
        case 3:
            image.src = "../projet/image/Player.png";
            break;
        case 4:
            if(!hasKillMonster && map.map[posY][posX].typeId == EntityType.MONSTER){
                image.src = "../projet/image/Monster.png";
            }
            else{
                image.src = "../projet/image/DirtRoad.jpg";
            }
            break;
        case 5:
            if(!hasCollectArrow && map.map[posY][posX].typeId == EntityType.AMMO){
                image.src = "../projet/image/Arrow.png";
            }
            else{
                image.src = "../projet/image/DirtRoad.jpg";
            }
            break;
        case 6:
            image.src = "../projet/image/DirtRoad.jpg";
            break;
        case 7:
            image.src = "../projet/image/Stone.jpg";
            break;
        case 8:
            image.src = "../projet/image/Goal.jpg";
            break;
        case 9:
            image.src = "../projet/image/Obstacle.png";
            break;
        case 10:
            image.src = "../projet/image/Water.jpg";
            break;
        case 11:
            image.src = "../projet/image/obstacleUnmovable.png";
            break;
        case 12:
            image.src = "../projet/image/WaterWalkable.png";
            break;
    }
    return image;
};
*/

factoryImage = new FactoryImage();


function GridGraphic(){
    this.xPerTile = 64;
    this.yPerTile = 64;
    this.nbTileX = map.line;
    this.nbTileY = map.collumn;
}

GridGraphic.prototype.drawGrid = function(){

    //Drawing line grid
    for(var i = 0 ; i <= this.nbTileX; i++){
        context.moveTo(0,i*this.yPerTile);
        context.lineTo(this.xPerTile*this.nbTileX, i*this.yPerTile);
    }

    //Drawing collumn grid
    for(var i = 0 ; i <= this.nbTileX; i++){
        context.moveTo(i*this.xPerTile,0);
        context.lineTo(i*this.xPerTile,this.yPerTile*this.nbTileY);
    }
};


GridGraphic.prototype.drawMap = function(){

    console.log(imageTab);
    //Building of basic Tiles
    for(var i = 0; i < this.nbTileX; i++){
        for(var j = 0; j < this.nbTileY; j++){
            var image = factoryImage.createImageFrom(map.map[j][i].typeId, i , j);
            context.drawImage(image,i*this.xPerTile, j*this.yPerTile);
        }
    }
};

GridGraphic.prototype.drawPlayer = function(){
    var imagePlayer = factoryImage.createImageFrom(EntityType.PLAYER,0,0);
    context.drawImage(imagePlayer, player.y*this.xPerTile, player.x*this.yPerTile);
};


