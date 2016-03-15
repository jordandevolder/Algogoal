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
    //Drawing line grid
    for(var i = 0 ; i <= this.nbTileX; i++){
        context.moveTo(0,i*this.yPerTile);
        context.lineTo(this.xPerTile*this.nbTileX, i*this.yPerTile);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= this.nbTileX; j++){
        context.moveTo(j*this.xPerTile,0);
        context.lineTo(j*this.xPerTile,this.yPerTile*this.nbTileY);
    }
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