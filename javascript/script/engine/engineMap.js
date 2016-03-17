/***********************/
/*                     */
/*      Map Model      */
/*                     */
/***********************/

/*
EntityType = {
    FREECELL : 0,
    WEAPON: 1,
    GOLD: 2,
    PLAYER: 3,
    MONSTER: 4,
    AMMO: 5,
    ROAD: 6,
    ROCK: 7,
    GOAL: 8,
    OBSTACLE: 9,
    RIVER: 10,
    OBSTACLEUNMOVABLE: 11,
    WATERWALKABLE: 12
};
*/

var mapLevel1 = [
    [7,7,7,7,7,7,7,7,7,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [6,1,5,6,6,6,4,2,6,8],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,7,7,7,7,7,7,7,7,7]
];

var mapLevel2 = [
    [7,7,7,7,7,7,7,7,7,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,9,6,2,6,6,8],
    [7,0,0,0,6,0,0,0,0,7],
    [6,6,6,6,6,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,7,7,7,7,7,7,7,7,7]
];

var mapLevel3 = [
    [7,7,7,7,7,7,7,7,7,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,9,6,6,6,6,8],
    [7,0,0,0,6,0,0,0,0,7],
    [6,6,9,10,6,0,0,0,0,7],
    [7,0,0,0,6,0,0,0,0,7],
    [7,0,0,0,9,6,6,6,2,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,7,7,7,7,7,7,7,7,7]
];

var mapLevel4 = [
    [7,7,7,7,7,7,7,8,7,7],
    [7,0,0,5,6,1,0,6,0,7],
    [7,0,0,6,0,0,0,2,0,7],
    [7,4,6,6,0,0,6,6,0,7],
    [7,0,0,9,6,6,9,0,0,7],
    [6,6,6,6,0,0,6,0,0,7],
    [7,0,0,0,0,0,6,0,0,7],
    [7,6,6,10,6,6,6,9,0,7],
    [7,0,0,0,0,0,0,6,1,7],
    [7,7,7,7,7,7,7,7,7,7]
];