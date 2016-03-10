/***********************/
/*                     */
/*      Map Model      */
/*                     */
/***********************/

var mapLevel1 = [
    [7,7,7,7,7,7,7,0,7,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [6,6,6,6,6,9,6,6,6,8],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,7,7,7,7,7,7,7,7,7]
];

var mapLevel2 = [
    [7,7,7,7,7,7,7,0,7,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,9,6,6,6,6,8],
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
    [0,1,2,2,4,5,6,7,8,9],
    [10,11,12,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,9,6,6,6,6,8],
    [7,0,0,0,6,0,0,0,0,7],
    [6,6,9,10,6,0,0,0,0,7],
    [7,0,0,0,6,0,0,0,0,7],
    [7,0,0,0,9,6,6,6,2,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,7,7,7,7,7,7,7,7,7]
];

var mapFile = [
    [7,7,7,7,7,7,7,8,7,7],
    [7,0,0,5,0,0,0,6,0,7],
    [7,0,0,6,0,0,0,2,0,7],
    [7,0,0,6,0,0,6,6,0,7],
    [7,4,6,9,6,6,9,0,0,7],
    [7,0,0,6,0,0,6,0,0,7],
    [7,0,0,0,0,0,6,0,0,7],
    [6,6,9,10,6,6,6,9,0,7],
    [7,0,0,0,0,0,0,6,1,7],
    [7,7,7,7,7,7,7,7,7,7]
];


/***********************/
/*                     */
/*   Constantes game   */
/*                     */
/***********************/

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

OrientationType = {

    UP : 0,
    RIGHT : 1,
    DOWN: 2,
    LEFT: 3

};

factoryTile = new TileFactory();
factoryInstrution = new InstructionFactory();
physic = new Physics();


player = new Player(5,0,OrientationType.RIGHT,10);
player.updateSpeedDirection();
map = new Map(10,10, mapLevel1);
game = new GameExecution();
launcher = new GameLauncher();
tokens = [];


/***********************/
/*                     */
/*     Game States     */
/*                     */
/***********************/

hasCollectGold = false;
hasCollectWeapon = false;
hasCollectArrow = false;
hasKillMonster = false;


isWin = false;
isLoose = false;
isPlaying = true;

updateGameState();

idProcessusExecution = 0;


/***********************/
/*                     */
/*    Game function    */
/*                     */
/***********************/

function updateGameState(){
    canMove = physic.willCollided(map,player,1);
    canJump = physic.willCollided(map,player,2);
    canCollect = physic.ableToGather(map,player);
    canPush = physic.ableToPush(map,player);
    isWin = (map.map[player.x][player.y].typeId == EntityType.GOAL);

    tableauEtat["canMove"] = canMove;
    tableauEtat["canJump"] = canJump;
    tableauEtat["canCollect"] = canCollect;
    tableauEtat["canPush"] = canPush;
}

function hasWin(){
    isWin = (map.map[player.x][player.y].typeId == EntityType.GOAL);
}

function reinit(){
    listManager.clearList();

    player = new Player(5,0,OrientationType.RIGHT,10);
    player.updateSpeedDirection();
    map = new Map(10,10, mapLevel1);
    game = new GameExecution();
    launcher = new GameLauncher();
    tokens = [];
    listManager = new InstructionListManager();
    idProcessusExecution = 0;
    document.getElementById("speedExec").innerText = "* "+1;

    canMove = false;
    canJump = false;
    canCollect = false;
    canPush = false;

    isWin = false;
    isLoose = false;
    isPlaying = true;

    draw();
}