/**************************/
/*                        */
/*         GridMap        */
/*                        */
/**************************/

function GridMap(){
    this.xPerTile = 64;
    this.yPerTile = 64;
    this.nbTileX = map.line;
    this.nbTileY = map.collumn;
}

GridMap.prototype.drawGrid = function(){
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





GridMap.prototype.drawMap = function(){
    for(var i = 0; i < this.nbTileX; i++){
        for(var j = 0; j < this.nbTileY; j++){
            var image = factoryImage.createImageFrom(map.map[j][i].typeId, i , j);
            context.drawImage(image,i*this.xPerTile, j*this.yPerTile);
        }
    }
};

GridMap.prototype.drawPlayer = function(){
    var imagePlayer = factoryImage.createImageFrom(EntityType.PLAYER,0,0);
    context.drawImage(imagePlayer, player.y*this.xPerTile, player.x*this.yPerTile);
};