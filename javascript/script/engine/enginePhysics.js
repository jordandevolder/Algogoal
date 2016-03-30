/*
 * Class use to test every things according to the map, so physics component such as collision as test here.
 */

/**
 *
 * @constructor Physics engine to test every collision etc.. according to player
 */
function Physics(){

}

/**
 *
 * @param map mapReference that pointing to the current map
 * @param player playerReference that pointing to the current player
 * @param distance distance that we want to know if we can go straight on to x distance
 * @returns {boolean|*} true if we can move, else false
 */
Physics.prototype.willCollided = function(map,player,distance){
    var x1 = player.x + (player.dx * distance);
    var y1 = player.y + (player.dy * distance);

    if((x1 < 0 || y1 < 0 || x1 >= 10 || y1 >= 10)) {
        return false;
    }else {
        return(
            (engineGame.map.map[x1][y1] !== undefined) &&
            (engineGame.map.map[x1][y1].reachable)
        )
    }
};

/**
 *
 * @param map mapReference that pointing to the current map
 * @param player playerReference that pointing to the current player
 * @returns {boolean|*} true if a box is front of player and can be push, false else
 */
Physics.prototype.ableToPush = function(map,player){
    var x1 = player.x + player.dx;
    var y1 = player.y + player.dy;
    var x2 = player.x + (2*player.dx);
    var y2 = player.y + (2*player.dy);

    if((x1 < 0 || y1 < 0 || x1 >= 10 || y1 >= 10 || x2 < 0 || x2 >= 10 || y2 < 0 || y2 >= 10)) {
        return false;
    }else {
        return (
            (engineGame.map.map[x1][y1] !== undefined) &&
            (engineGame.map.map[x2][y2] !== undefined) &&
            (engineGame.map.map[x1][y1] instanceof Obstacle) &&
            (engineGame.map.map[x2][y2].isFreeCell)
        )
    }
};

/**
 *
 * @param map mapReference that pointing to the current map
 * @param player playerReference that pointing to the current player
 * @returns {boolean} true if we have arrow and ammo and we have enough close to hit monster
 */
Physics.prototype.isHitingMonster = function(map,player){
    if(player.weapon === undefined){
        return false;
    }else if(player.ammoQuantity == 0){
        return false;
    }else{
        var x1 = player.x;
        var y1 = player.y;

        if(x1 < 0 || y1 < 0 || x1 >= 10 || y1 >= 10){
            return false;
        }

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

/**
 *
 * @param map mapReference that pointing to the current map
 * @param player playerReference that pointing to the current player
 * @returns {*} look if the tile that the player is on, is gatherable (ammo, arrow or gold)
 */
Physics.prototype.ableToGather = function(map,player){
    return (engineGame.map.map[player.x][player.y].gatherable);
};

/**
 * We don't care atm about this function
 * @param map mapReference that pointing to the current map
 * @param player playerReference that pointing to the current player
 * @returns {boolean}
 */
Physics.prototype.ableToLook = function(map,player) {
    return (engineGame.map.map[player.x + player.dx][player.y + player.dy] !== undefined);
};