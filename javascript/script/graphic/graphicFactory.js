
/**
 *
 * @constructor FactoryImage use to get the reference of an image from a typeTile
 */
function FactoryImage(){

}


FactoryImage.prototype.createImageFrom = function(typeTile, posX, posY){
    switch(typeTile) {
        case 0:
            return imageTab["grass"];
            break;
        case 1:
            if (!engineGame.hasCollectWeapon && engineGame.map.map[posY][posX].typeId == EntityType.WEAPON) {
                return imageTab["weapon"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 2:
            if (!engineGame.hasCollectGold && engineGame.map.map[posY][posX].typeId == EntityType.GOLD) {
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
            if (!engineGame.hasKillMonster && engineGame.map.map[posY][posX].typeId == EntityType.MONSTER) {
                return imageTab["monster"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 5:
            if (!engineGame.hasCollectArrow && engineGame.map.map[posY][posX].typeId == EntityType.AMMO) {
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

function ImagePreloader(){
    this.asFinishLoading = false;
    this.srcArray = ["grass","weapon","gold","player","monster","arrow", "road",
        "stone","goal","obstacle","water","obstacleUnmovable","waterWalkable"];
    this.totalImageToLoad = this.srcArray.length;
    this.totalImageLoaded = 0;

}

ImagePreloader.prototype.createImage = function(){
    for(var i = 0 ; i < this.srcArray.length; i++){
        imageTab[this.srcArray[i]] = new Image();
        imageTab[this.srcArray[i]].onload = function(){
            this.totalImageLoaded++; if(this.totalImageLoaded == this.totalImageToLoad) this.end();
        }.bind(this);
        imageTab[this.srcArray[i]].src = "../image/"+this.srcArray[i]+".png";
    }
};

ImagePreloader.prototype.end = function(){
    this.asFinishLoading = true;
};

ImagePreloader.prototype.allImageLoaded = function(){
    return this.totalImageLoaded == this.totalImageToLoad;
};