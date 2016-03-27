/**************************/
/*                        */
/*         GridMap        */
/*                        */
/**************************/

function GridMap(){
    this.xPerTile = 64;
    this.yPerTile = 64;
    this.nbTileX = engineGame.map.line;
    this.nbTileY = engineGame.map.collumn;
}

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

GridMap.prototype.drawMap = function(){
    for(var i = 0; i < this.nbTileX; i++){
        for(var j = 0; j < this.nbTileY; j++){
            var image = factoryImage.createImageFrom(engineGame.map.map[j][i].typeId, i , j);
            context.drawImage(image,i*this.xPerTile, j*this.yPerTile);
        }
    }
};

GridMap.prototype.drawPlayer = function(){
    var imagePlayer = factoryImage.createImageFrom(EntityType.PLAYER,0,0);
    context.drawImage(imagePlayer, engineGame.player.y*this.xPerTile, engineGame.player.x*this.yPerTile);
};

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
    }
};