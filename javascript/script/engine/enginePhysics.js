/*
 * Class use to test every things according to the map, so physics component such as collision as test here.
 */

function Physics(){

}

Physics.prototype.willCollided = function(map,player,distance){
    var x1 = player.x + (player.dx * distance);
    var y1 = player.y + (player.dy * distance);

    return (
        (map.map[x1][y1] !== undefined) &&
        (map.map[x1][y1].reachable)
    )
};

Physics.prototype.ableToPush = function(map,player){
    var x1 = player.x + player.dx;
    var y1 = player.y + player.dy;
    var x2 = player.x + (2*player.dx);
    var y2 = player.y + (2*player.dy);

    return(
        (map.map[x1][y1] !== undefined)&&
        (map.map[x2][y2] !== undefined)&&
        (map.map[x1][y1] instanceof Obstacle)&&
        (map.map[x2][y2].isFreeCell)
    )
};

Physics.prototype.ableToGather = function(map,player){
    return (map.map[player.x][player.y].gatherable);
};

Physics.prototype.ableToLook = function(map,player) {
    return (map.map[player.x + player.dx][player.y + player.dy] !== undefined);
};