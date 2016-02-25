canvas = null;
context = null;


window.onload = function()
{
    var avancer = document.getElementById('avancer');

    avancer.addEventListener('click', function() {
        player.move();
        context.clearRect(0, 0, canvas.width, canvas.height);
        grid.drawMap();
        grid.drawGrid();
        grid.drawPlayer();
    });

    var pousser = document.getElementById('pousser');

        pousser.addEventListener('click', function() {
        player.push();
        context.clearRect(0, 0, canvas.width, canvas.height);
        grid.drawMap();
        grid.drawGrid();
        grid.drawPlayer();
    });

    var rotateL = document.getElementById('rotateL');

        rotateL.addEventListener('click', function() {
        player.leftRotate();;
        context.clearRect(0, 0, canvas.width, canvas.height);
        grid.drawMap();
        grid.drawGrid();
        grid.drawPlayer();
    });

    var rotateR = document.getElementById('rotateR');

        rotateR.addEventListener('click', function() {
        player.rightRotate();
        context.clearRect(0, 0, canvas.width, canvas.height);
        grid.drawMap();
        grid.drawGrid();
        grid.drawPlayer();
    });

    var collect = document.getElementById('collect');

        collect.addEventListener('click', function() {
        player.collect();
        context.clearRect(0, 0, canvas.width, canvas.height);
        grid.drawMap();
        grid.drawGrid();
        grid.drawPlayer();
    });


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

    context.clearRect(0, 0, canvas.width, canvas.height);
    
    var grid = new GridGraphic();

    grid.drawMap();
    grid.drawGrid();
    grid.drawPlayer();

    context.clearRect(0, 0, canvas.width, canvas.height);

    player.showInformations();

    grid.drawMap();
    grid.drawGrid();
    grid.drawPlayer();
    
    context.closePath();
}

function FactoryImage(){

}

FactoryImage.prototype.createImageFrom = function(typeTile, posX, posY){
    image = new Image();
    switch(typeTile)
    {
        case 0:
            image.src = "../image/grass.jpg";
            break;
        case 1:
            if(!hasCollectWeapon && map.map[posY][posX].typeId == EntityType.WEAPON){
                image.src = "../image/Weapon.png";
            }
            else{
                image.src = "../image/DirtRoad.jpg";
            }
            break;
        case 2:
            if(!hasCollectGold && map.map[posY][posX].typeId == EntityType.GOLD){
                image.src = "../image/Gold.png";
            }
            else{
                image.src = "../image/DirtRoad.jpg";
            }
            break;
        case 3:
            image.src = "../image/Player.png";
            break;
        case 4:
            if(!hasKillMonster && map.map[posY][posX].typeId == EntityType.MONSTER){
                image.src = "../image/Monster.png";
            }
            else{
                image.src = "../image/DirtRoad.jpg";
            }
            break;
        case 5:
            if(!hasCollectArrow && map.map[posY][posX].typeId == EntityType.AMMO){
                image.src = "../image/Arrow.png";
            }
            else{
                image.src = "../image/DirtRoad.jpg";
            }
            break;
        case 6:
            image.src = "../image/DirtRoad.jpg";
            break;
        case 7:
            image.src = "../image/Stone.jpg";
            break;
        case 8:
            //image.src = "../image/goal.jpg";
            image.src = "../image/grass.jpg";
            break;
        case 9:
            image.src = "../image/Obstacle.png";
            break;
    }
    return image;
};

factoryImage = new FactoryImage();


function GridGraphic(){
    this.xPerTile = 64;
    this.yPerTile = 64;
    this.nbTileX = map.line;
    this.nbTileY = map.collumn;
}

GridGraphic.prototype.drawGrid = function(){
    context.beginPath();

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
}

GridGraphic.prototype.drawMap = function(){

    //Building of basic Tiles
    for(var i = 0; i < this.nbTileX; i++){
        for(var j = 0; j < this.nbTileY; j++){
            var image = factoryImage.createImageFrom(map.map[j][i].typeId, i , j)
            context.drawImage(image,i*this.xPerTile, j*this.yPerTile);
        }
    }
}

GridGraphic.prototype.drawPlayer = function(){
    var imagePlayer = factoryImage.createImageFrom(EntityType.PLAYER,0,0);
    context.drawImage(imagePlayer, player.y*this.xPerTile, player.x*this.yPerTile);
}


