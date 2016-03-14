idProcessusExecution = 0;

function EngineGame(idMap){

    this.currentIdMap = idMap;

    this.associativeMapLevel = {};
    this.associativeMapLevel["mapLevel1"] = mapLevel1;
    this.associativeMapLevel["mapLevel2"] = mapLevel2;
    this.associativeMapLevel["mapLevel3"] = mapLevel3;
    this.associativeMapLevel["mapLevel4"] = mapLevel4;

    this.player = new Player(5,0,OrientationType.RIGHT, 10);
    this.player.updateSpeedDirection();
    this.map = new Map(10,10,this.associativeMapLevel[this.currentIdMap]);
    this.executer = new GameExecution();
    this.launcher = new GameLauncher();
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
    this.tableauEtat["true"] = true;
    this.tableauEtat["false"] = false;

    this.hasCollectGold = false;
    this.hasCollectWeapon = false;
    this.hasCollectArrow = false;
    this.hasKillMonster = false;

    this.isWin = false;
    this.isLose = false;
    this.isPlaying = true;

    /* End Game State */
}

EngineGame.prototype.getCorrespondantePositionPlayer = function(currentIdMap){

};

EngineGame.prototype.triggerGameWin = function(){
    if(this.hasCollectGold){
        console.log("Felicitation, vous avez gagné le niveau en emportant avec vous le trésor, vous pouvez passer au niveau suivant !");
        swal("Good job!", "You clicked the button!", "success");
        //Ici dans la base de données MYSQL, il faut changer la donnée currentLevel pour le faire monter
    }
    else{
        console.log("Lose 1");
        swal("Presque !", "Vous êtes arrivé au bout du chemin, malheureusement, sans trésor, vous n'avez pas d'or pour arriver au prochain niveau ! Retenter celui ci en ramassant l'or", "error");
    }
};

EngineGame.prototype.triggerGameLose = function(){
    console.log("Lose 2");
    swal("Oh non !", "Vous n'avez malheuresement pas réussit à atteindre l'objectif ! Réessayer je suis sur que vous pouvez y arriver !", "error");
};

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

    clearInterval(idProcessusExecution);
    idProcessusExecution = 0;

    this.player = new Player(5,0,OrientationType.RIGHT, 10);
    this.player.updateSpeedDirection();
    this.map = new Map(10,10,this.associativeMapLevel[this.currentIdMap]);
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
    this.tableauEtat["true"] = true;
    this.tableauEtat["false"] = false;

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

