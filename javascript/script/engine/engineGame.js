idProcessusExecution = 0;

function EngineGame(idMap){

    this.currentIdMap = idMap;

    this.player = new Player(5,0,OrientationType.RIGHT, 10);
    this.player.updateSpeedDirection();
    this.map = new Map(10,10,idMap);
    this.executer = new GameExecution();
    this.launcher = new GameLauncher();
    this.tokens = [];

    /* Game State */

    this.canMoveState = true;
    this.canJumpState = true;
    this.canCollectState = true;
    this.canPushState = true;

    this.tableauEtat = {};
    this.tableauEtat["canMove"] = this.canMove;
    this.tableauEtat["canJump"] = this.canJump;
    this.tableauEtat["canCollect"] = this.canCollect;
    this.tableauEtat["canPush"] = this.canPush;

    this.hasCollectGold = false;
    this.hasCollectWeapon = false;
    this.hasCollectArrow = false;
    this.hasKillMonster = false;

    this.isWin = false;
    this.isLose = false;
    this.isPlaying = true;

    /* End Game State */
}

EngineGame.prototype.updateGameState = function(){

    this.canMove = physic.willCollided(this.map,this.player,1);
    this.canJump = physic.willCollided(this,this.player,2);
    this.canCollect = physic.ableToGather(this,this.player);
    this.canPush = physic.ableToPush(this,this.player);
    this.isWin = (this.map.map[this.player.x][this.player.y].typeId == EntityType.GOAL);

    this.tableauEtat["canMove"] = this.canMove;
    this.tableauEtat["canJump"] = this.canJump;
    this.tableauEtat["canCollect"] = this.canCollect;
    this.tableauEtat["canPush"] = this.canPush;
};

EngineGame.prototype.startExecutionListInstructions = function(){
    this.player = new Player(5,0,OrientationType.RIGHT,10);
    this.player.updateSpeedDirection();
    this.updateGameState();
    graphicGame.draw();
    this.executer.buildLogicInstruction();
    this.launcher.launch();
};

EngineGame.prototype.reInit = function(){

    this.player = new Player(5,0,OrientationType.RIGHT, 10);
    this.player.updateSpeedDirection();
    this.map = new Map(10,10,this.currentIdMap);
    this.executer = new GameExecution();
    this.launcher = new GameLauncher();
    this.listManager = new InstructionListManager();
    this.tokens = [];

    /* Game State */

    this.canMove = true;
    this.canJump = true;
    this.canCollect = true;
    this.canPush = true;

    this.tableauEtat = {};
    this.tableauEtat["canMove"] = this.canMove;
    this.tableauEtat["canJump"] = this.canJump;
    this.tableauEtat["canCollect"] = this.canCollect;
    this.tableauEtat["canPush"] = this.canPush;

    this.hasCollectGold = false;
    this.hasCollectWeapon = false;
    this.hasCollectArrow = false;
    this.hasKillMonster = false;

    this.isWin = false;
    this.isLose = false;
    this.isPlaying = true;

    graphicGame.draw();

    /* End Game State */
};

engineGame = new EngineGame(mapLevel1);
