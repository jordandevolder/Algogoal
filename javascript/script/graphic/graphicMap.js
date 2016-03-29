/**
 *
 * @constructor GridMap is the graphic contents in the canvas
 */
function GridMap(){
    this.xPerTile = 64;
    this.yPerTile = 64;
    this.nbTileX = engineGame.map.line;
    this.nbTileY = engineGame.map.collumn;
}

/**
 * Draw a grid on the canvas
 */
GridMap.prototype.drawGrid = function(){
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= this.nbTileX; i++){
        context.moveTo(0,i*this.yPerTile);
        context.lineTo(this.xPerTile*this.nbTileX, i*this.yPerTile);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= this.nbTileX; j++) {
        context.moveTo(j * this.xPerTile, 0);
        context.lineTo(j * this.xPerTile, this.yPerTile * this.nbTileY);
    }
    context.stroke();
    context.closePath();
};

/**
 * Draw the map using image
 */
GridMap.prototype.drawMap = function(){
    for(var i = 0; i < this.nbTileX; i++){
        for(var j = 0; j < this.nbTileY; j++){
            var image = factoryImage.createImageFrom(engineGame.map.map[j][i].typeId, i , j);
            context.drawImage(image,i*this.xPerTile, j*this.yPerTile);
        }
    }
};

/**
 * Draw the character
 */
GridMap.prototype.drawPlayer = function(){
    var imgPlayer = new Image();
    imgPlayer.onload = function() {
        context.drawImage(this, engineGame.player.y * 64, engineGame.player.x * 64);
    };

    switch(engineGame.player.orientation){
        case OrientationType.UP:
            imgPlayer.src = "../image/player_top.png";
            break;
        case OrientationType.DOWN:
            imgPlayer.src = "../image/player_bot.png";
            break;
        case OrientationType.RIGHT:
            imgPlayer.src = "../image/player_right.png";
            break;
        case OrientationType.LEFT:
            imgPlayer.src = "../image/player_left.png";
            break;
    }
};

/**
 * Draw the monster life, according to his current life
 */
GridMap.prototype.drawMonsterLife = function() {

    if (engineGame.map.getMonsterPosition()[0] != -1 && engineGame.map.getMonsterPosition()[1] != -1) {

        var x = engineGame.map.getMonsterPosition()[1];
        var y = engineGame.map.getMonsterPosition()[0];

        var posX = engineGame.map.map[x][y].y;
        var posY = engineGame.map.map[x][y].x;

        context.beginPath();
        context.rect((posX * 64) + 13, (posY * 64) - 10, 40, 10);
        context.stroke();

        context.beginPath();
        context.fillStyle = "#FF0000";
        context.fillRect((posX * 64) + 13, (posY * 64) - 10, engineGame.map.map[x][y].hp * 10, 10);
        context.stroke();
        context.closePath();
    }
};