/*
 * Class use to test every things according to the map, so physics component such as collision as test here.
 */

function Physics(){

}

Physics.prototype.willCollided = function(map,player,distance){
    var x1 = player.x + (player.dx * distance);
    var y1 = player.y + (player.dy * distance);

    return (
        (engineGame.map.map[x1][y1] !== undefined) &&
        (engineGame.map.map[x1][y1].reachable)
    )
};

Physics.prototype.ableToPush = function(map,player){
    var x1 = player.x + player.dx;
    var y1 = player.y + player.dy;
    var x2 = player.x + (2*player.dx);
    var y2 = player.y + (2*player.dy);

    return(
        (engineGame.map.map[x1][y1] !== undefined)&&
        (engineGame.map.map[x2][y2] !== undefined)&&
        (engineGame.map.map[x1][y1] instanceof Obstacle)&&
        (engineGame.map.map[x2][y2].isFreeCell)
    )
};

Physics.prototype.isHitingMonster = function(map,player){
    if(player.weapon === undefined){
        //No weapon
        return false;
    }else if(player.ammoQuantity == 0){
        return false;
    }else{
        var x1 = player.x;
        var y1 = player.y;

        for(var i = 1; i <= player.weapon.range; i++){
            var x2 = x1 + (i*player.dx);
            var y2 = y1 + (i*player.dy);
            if(engineGame.map.map[x2][y2] !== undefined &&
                engineGame.map.map[x2][y2] instanceof Monster){
                return true;
            }
        }
        return false;
    }
};

Physics.prototype.ableToGather = function(map,player){
    return (engineGame.map.map[player.x][player.y].gatherable);
};

Physics.prototype.ableToLook = function(map,player) {
    return (engineGame.map.map[player.x + player.dx][player.y + player.dy] !== undefined);
};