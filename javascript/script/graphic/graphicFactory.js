/**************************/
/*                        */
/*      image loading     */
/*                        */
/**************************/

function createImageTab(){


    var arrayString =   ["grass","weapon","gold","player","monster","arrow", "road",
        "stone","goal","obstacle","water","obstacleUnmovable","waterWalkable"];

    for(var i = 0; i < arrayString.length; i++){
        imageTab[arrayString[i]] = new Image();
        switch(i)
        {
            case 0:
                imageTab[arrayString[i]].src = "../image/grass.jpg";
                break;
            case 1:
                imageTab[arrayString[i]].src = "../image/Bow.png";
                break;
            case 2:
                imageTab[arrayString[i]].src = "../image/Gold.png";
                break;
            case 3:
                imageTab[arrayString[i]].src = "../image/Player.png";
                break;
            case 4:
                imageTab[arrayString[i]].src = "../image/Monster.png";
                break;
            case 5:
                imageTab[arrayString[i]].src = "../image/Arrow.png";
                break;
            case 6:
                imageTab[arrayString[i]].src = "../image/DirtRoad.jpg";
                break;
            case 7:
                imageTab[arrayString[i]].src = "../image/Stone.jpg";
                break;
            case 8:
                imageTab[arrayString[i]].src = "../image/Goal.jpg";
                break;
            case 9:
                imageTab[arrayString[i]].src = "../image/Obstacle.png";
                break;
            case 10:
                imageTab[arrayString[i]].src = "../image/Water.jpg";
                break;
            case 11:
                imageTab[arrayString[i]].src = "../image/obstacleUnmovable.png";
                break;
            case 12:
                imageTab[arrayString[i]].src = "../image/WaterWalkable.png";
                break;
        }
    }
}

/**************************/
/*                        */
/*      ImageFactory      */
/*                        */
/**************************/

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