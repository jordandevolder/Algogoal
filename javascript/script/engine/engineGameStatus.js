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