idProcessusExecution = 0;
/**
 *
 * @param idMap the idMap use to know which level user has select
 * @param levelActuel int value that represented the level (0,1,2,3,...) use to update data base
 * @constructor
 */
function EngineGame(idMap, levelActuel){

    this.currentIdMap = idMap;
    this.levelActuel = levelActuel;

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

    this.nbInstructionExecuted = 0;

    /* Game State */

    this.canMove = true;
    this.canJump = true;
    this.canCollect = true;
    this.canPush = true;
    this.canFire = true;

    this.tableauEtat = {};
    this.tableauEtat["canMove"] = this.canMove;
    this.tableauEtat["canJump"] = this.canJump;
    this.tableauEtat["canCollect"] = this.canCollect;
    this.tableauEtat["canPush"] = this.canPush;
    this.tableauEtat["canFire"] = this.canFire;
    this.tableauEtat["true"] = true;
    this.tableauEtat["false"] = false;

    this.hasCollectGold = false;
    this.hasCollectWeapon = false;
    this.hasCollectArrow = false;
    this.hasKillMonster = false;

    this.isWin = false;
    this.isPlaying = false;

    /* End Game State */
}

/**
 * this function is call when player has win the game, that mean has reach the goal Tile
 */
EngineGame.prototype.triggerGameWin = function(){
    if(this.hasCollectGold){
        swal("Good job!", "Félicitations, vous avez gagné le niveau en emportant avec vous le trésor, vous pouvez passer au niveau suivant !", "success");
        //Ici dans la base de données MYSQL, il faut changer la donnée currentLevel pour le faire monter


        //Data according to game state
        console.log("Nombre d'instructions: "+ this.tokens.length);
        console.log("Nombre d'instructions executees: "+ this.nbInstructionExecuted);
        var score = 0;
        if(this.hasCollectGold == true && this.hasKillMonster == true){
            score = 3;
        }
        else{
            score = 2;
        }
        //
        $.ajax({

            type: 'POST',
            url : '/projet/play/incrementLevel',
            data: {levelActuel : this.levelActuel, tokensLength : this.tokens.length, nbInstructions : this.nbInstructionExecuted, score : score},
            dataType : 'text',
            beforeSend:function(){ /* Il faut faire ici un wait ici */ },
            success : function(code){
                console.log("Oh1");
                console.log(code);
            }

        });

    }
    else{
        swal("Presque !", "Vous êtes arrivé au bout du chemin, malheureusement, sans trésor, vous n'avez pas d'or pour arriver au prochain niveau ! Retenter celui ci en ramassant l'or", "error");
    }

    this.isPlaying = false;
};

/**
 * this functions is call when player has lose the game, that mean a code crash or instruction ending without reaching goal Tile
 */
EngineGame.prototype.triggerGameLose = function(){
    console.log("Nombre d'instructions: "+ this.tokens.length);
    console.log("Nombre d'instructions executees: "+ this.nbInstructionExecuted);
    swal("Oh non !", "Vous n'avez malheuresement pas réussit à atteindre l'objectif ! Réessayer je suis sur que vous pouvez y arriver !", "error");
    this.isPlaying = false;
};


/**
 * Function call to updateGameState during the game, call each time that something change in the map
 */
EngineGame.prototype.updateGameState = function(){

    this.canMove = physic.willCollided(this.map,this.player,1);
    this.canJump = physic.willCollided(this.map,this.player,2);
    this.canCollect = physic.ableToGather(this.map,this.player);
    this.canPush = physic.ableToPush(this.map,this.player);
    this.canFire = physic.isHitingMonster(this.map,this.player);
    this.isWin = (this.map.map[this.player.x][this.player.y].typeId == EntityType.GOAL);

    this.tableauEtat["canMove"] = this.canMove;
    this.tableauEtat["canJump"] = this.canJump;
    this.tableauEtat["canCollect"] = this.canCollect;
    this.tableauEtat["canPush"] = this.canPush;
    this.tableauEtat["canFire"] = this.canFire;
};

/**
 * This function is call when the user click on "execute" button
 */
EngineGame.prototype.startExecutionListInstructions = function(){
    /* Probleme, quand on fait replay, les objets ne s'affiche plus */
    if(!this.isPlaying) {
        this.player = new Player(5, 0, OrientationType.RIGHT, 10);
        this.player.updateSpeedDirection();
        this.map = new Map(10,10,this.associativeMapLevel[this.currentIdMap]);
        this.updateGameState();
        this.isPlaying = true;
        this.nbInstructionExecuted = 0;
        this.isWin = false;
        graphicGame.reInitMap();
        graphicGame.draw();
        this.executer = new GameExecution();

        //On analyse déjà la construction
        try {
            this.executer.createInstructionsFromArray();
        }catch(err){
            console.log('Nique ta mere errreur');
        }


        if (this.executer.listExecution.length > 0) {
            var currentTexte = document.getElementById("instruction" + 0).innerText;
            document.getElementById("instruction" + 0).innerHTML = currentTexte + " " + " " + "<---";
        }
        this.launcher.launch();
    }
};

/**
 * This function is used to reinit all the game for example when used click on clear
 */
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

    this.nbInstructionExecuted = 0;

    /* Game State */

    this.canMove = true;
    this.canJump = true;
    this.canCollect = true;
    this.canPush = true;
    this.canFire = true;

    this.tableauEtat = {};
    this.tableauEtat["canMove"] = this.canMove;
    this.tableauEtat["canJump"] = this.canJump;
    this.tableauEtat["canCollect"] = this.canCollect;
    this.tableauEtat["canPush"] = this.canPush;
    this.tableauEtat["canFire"] = this.canFire;
    this.tableauEtat["true"] = true;
    this.tableauEtat["false"] = false;

    this.hasCollectGold = false;
    this.hasCollectWeapon = false;
    this.hasCollectArrow = false;
    this.hasKillMonster = false;

    this.isWin = false;
    this.isPlaying = false;


    graphicGame.draw();

    /* End Game State */
};

