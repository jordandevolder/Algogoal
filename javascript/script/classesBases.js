/**
 * Created by nicolasserf on 03/02/2016.
 */


function sleep(milliseconds) {
    var start = new Date().getTime();
    for (var i = 0; i < 1e7; i++) {
        if ((new Date().getTime() - start) > milliseconds){
            break;
        }
    }
}

/*                     *\
 //--------------------\\
 ||       Factory       ||
 \\--------------------//
 \*                     */

/* Tile Factory */

function TileFactory(){

}

TileFactory.prototype.constructTile = function(valeur, posX, posY){
    switch(valeur)
    {
        case 0:
            return new FreeCell(posX, posY,0);
        case 1:
            return new Weapon(posX, posY, 10, 3, 1);
        case 2:
            return new Gold(posX, posY, 2);
        case 3:
            return new Player(posX, posY, OrientationType.LEFT, 5, 3);
        case 4:
            return new Monster(posX,posY, OrientationType.LEFT, 5, 4);
        case 5:
            return new Ammo(posX, posY, 5)
        case 6:
            return new Road(posX,posY,6);
        case 7:
            return new Rock(posX, posY,7);
        case 8:
            return new Goal(posX, posY,8);
        case 9:
            return new Obstacle(posX, posY,9);
        case 10:
            return new River(posX, posY, 10); 
        case 11:
            return new ObstacleUnmovable(posX,posY,11);
        case 12:
            return new WaterWalkable(posX, posY, 12);
    }
};

function InstructionFactory(){

}

InstructionFactory.prototype.constructInstruction = function(string){
    switch(string)
    {
        case "while":
            return new WhileInstruction(true);
        case "endWhile":
            return new EndWhileInstruction();
        case "if":
            return new IfInstruction(true);
        case "endif":
            return new EndIfInstruction();
        case "move":
            return new MoveInstruction();
        case "jump":
            return new JumpInstruction();
        case "collect":
            return new CollectInstruction();
        case "rotateLeft":
            return new RotateLeftInstruction();
        case "rotateRight":
            return new RotateRightInstruction();
        case "push":
            return new PushInstruction();
        case "affichage":
            return new Affichage();
    }
};



/* End Tile Factory */

/*                     *\
 //--------------------\\
 ||  Constantes, Define  ||
 \\--------------------//
 \*                     */

var EntityType = {
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

var OrientationType = {

    UP : 0,
    RIGHT : 1,
    DOWN: 2,
    LEFT: 3

};



/*         *\
 //-------\\
 ||  Class  ||
 \\-------//
 \*         */

physic = new Physics();
factoryTile = new TileFactory();
factoryInstrution = new InstructionFactory();

/****************/
/*              */
/*    Physics   */
/*              */
/****************/

function Physics(){

}

Physics.prototype.willCollided = function(map,player,distance){
    var x1 = player.x + (player.dx * distance);
    var y1 = player.y + (player.dy * distance);

    return (
        (map.map[x1][y1] !== undefined) &&
        (map.map[x1][y1].reachable)
    )
}

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
}

Physics.prototype.ableToGather = function(map,player){
    return (map.map[player.x][player.y].gatherable);
}

Physics.prototype.ableToLook = function(map,player) {
    return (map.map[player.x + player.dx][player.y + player.dy] !== undefined);
}


/****************/
/*              */
/*   Entities   */
/*              */
/****************/

/* Entity */

function Entity(x,y,reachable, gatherable, freecell, typeId){
    this.x = x;
    this.y = y;
    this.typeId = typeId;
    this.reachable = reachable;
    this.gatherable = gatherable;
    this.isFreeCell = freecell;
}

/* Entity End */

function FreeCell(x,y,typeId){
    Entity.call(this,x,y,false, false,true,typeId)
}

/* Road */

function Road(x,y, typeId){
    Entity.call(this,x,y, true, false,true,typeId);
}

/* End Road */

/* River */

function River(x,y, typeId){
    Entity.call(this,x,y, false, false,true,typeId);
}

/* End River */

/* WaterWalkable */
function WaterWalkable(x,y,typeId){
    Entity.call(this,x,y,true, false,false,typeId);
}
/* End WaterWalkable */

/* Goal*/

function Goal(x,y, typeId){
    Entity.call(this,x,y, true, false,true,typeId);
}

/* End Goal */

/* Obstacle */
function Obstacle(x,y, typeId){
    Entity.call(this,x,y, false, false,false,typeId);
}

/* Obstacle unmovable */
function ObstacleUnmovable(x,y,typeId){
    Entity.call(this,x,y,false, false, false, typeId);
}

/* End Obstacle*/

/* Rock */

function Rock(x,y, typeId){
    Entity.call(this,x,y, false, false,false,typeId);
}

/* End Rock */


/* Ammo */

function Ammo(x,y,typeId){
    Entity.call(this,x,y, true, true, false,typeId);
}

/* End Ammo */


/* Gold */

function Gold(x,y,typeId){
    Entity.call(this,x,y, true, true, false,typeId);
}

/* End Gold */


/* Weapon */

function Weapon(x,y,damage,range,typeId){
    Entity.call(this,x,y, true, true, false, typeId);
    this.range = range;
    this.damage = damage;
}

/* End Weapon */

/* Monster */

function Monster(x,y,orientation,hp,typeId){
    Entity.call(this,x,y,false, false, false, typeId);
    this.orientation = orientation;
    this.hp = hp;
}

Monster.prototype.getDamaged = function(quantity){
    this.hp = this.hp - quantity;
    if(this.hp < 0){
        hp = 0;
    }
}

/* End Monster */

/* Player */

function Player(x,y,orientation,hp){
    Entity.call(this,x,y,false, false, false);
    this.orientation = orientation;
    this.ammoQuantity = 0;
    this.weapon = undefined;
    this.hp = hp;
    this.dx = 0;
    this.dy = 0;
}

Player.prototype.updateSpeedDirection = function(){
    switch(this.orientation)
    {
        case OrientationType.UP:
            this.dx = -1;
            this.dy = 0;
            break;
        case OrientationType.DOWN:
            this.dx = 1;
            this.dy = 0;
            break;
        case OrientationType.RIGHT:
            this.dx = 0;
            this.dy = 1;
            break;
        case OrientationType.LEFT:
            this.dx = 0;
            this.dy = -1;
            break;
    }
}

Player.prototype.leftRotate = function (){
    if(this.orientation == OrientationType.UP){
        console.log("block");
        this.orientation = 3;
        this.updateSpeedDirection();
    }
    else{
        this.orientation = (this.orientation-1);
        this.updateSpeedDirection();
    }
}

Player.prototype.rightRotate = function(){
    this.orientation = (this.orientation+1)%4;
    this.updateSpeedDirection();
}

Player.prototype.move = function(){
    if(!physic.willCollided(map,this,1)){
        game.isWorking = false;
        return;
    }
    this.x += this.dx;
    this.y += this.dy;
}


Player.prototype.jump = function(){
    if(!physic.willCollided(map,this,2)){
        game.isWorking = false;
        return;
    }
    this.x += 2*this.dx;
    this.y += 2*this.dy;
}

Player.prototype.collect = function(){
    if(!physic.ableToGather(map,this)){
        return
    }

    switch(map.map[player.x][player.y].typeId)
    {
        case EntityType.AMMO:
            this.ammoQuantity+=3;
            map.map[player.x][player.y] = factoryTile.constructTile(EntityType.ROAD, player.x, player.y);
            hasCollectArrow = true;
            break;
        case EntityType.GOLD:
            hasCollectGold = true;
            break;
        case EntityType.WEAPON:
            this.weapon = map.map[player.x][player.y];
            this.ammoQuantity++;
            map.map[player.x][player.y] = factoryTile.constructTile(EntityType.ROAD,player.x, player.y);
            hasCollectWeapon = true;
            break;
    }
}

Player.prototype.showInformations = function(){
    console.log(
            "Player informations: \n"+
            "Position X: "+ this.x +"\n"+
            "Position Y: "+ this.y +"\n"+
            "Orientation: "+ this.orientation + "\n"+
            "Weapon : " + this.weapon + "\n"+
            "Ammo Quantity: " + this.ammoQuantity + "\n"+
            "HP : " + this.hp + "\n"
    );
}

Player.prototype.push = function(){
    if(!physic.ableToPush(map,this)) {
        return;
    }

    var x1 = player.x+player.dx;
    var y1 = player.y+player.dy;
    var x2 = player.x+(2*player.dx);
    var y2 = player.y+(2*player.dy);

    if(map.map[x2][y2].typeId == EntityType.ROAD){
        map.map[x2][y2] = factoryTile.constructTile(EntityType.OBSTACLE,x1,y1);
    }
    else if(map.map[x2][y2].typeId == EntityType.RIVER){
        map.map[x2][y2] = factoryTile.constructTile(EntityType.WATERWALKABLE,x1,y1);
    }
    else{
        map.map[x2][y2] = factoryTile.constructTile(EntityType.OBSTACLEUNMOVABLE,x1,y1);
    }

    map.map[x1][y1] = factoryTile.constructTile(EntityType.ROAD,x1,y1);

    this.move(map);

}

Player.prototype.lookAt = function(map){
    if(!physic.ableToLook(map,this)){
        return;
    }

    switch(map.map[this.x+this.dx][this.y+this.dy].typeId)
    {
        case EntityType.WEAPON:
            return "weapon";
        case EntityType.AMMO:
            return "ammo";
        case EntityType.GOLD:
            return "gold";
        case EntityType.OBSTACLE:
            return "obstacle";
        case EntityType.FREECELL:
            return "freeCell";
        case EntityType.RIVER:
            return "river";
        case EntityType.ROAD:
            return "road";
        case EntityType.MONSTER:
            return "monster";
        case EntityType.GOAL:
            return "goal";
        case EntityType.ROCK:
            return "rock";
        case EntityType.OBSTACLEUNMOVABLE:
            return "obstacleunmovable";
    }
}

/* Notice:  Les méthodes suivantes seront
 à implementer au fur et à mesure
 */

Player.prototype.fire = function(){
    if(this.ammoQuantity > 0){
        //Faire un tire
        this.ammoQuantity--;
    }
}

/* Fin Notice */

/* End Player */



/****************/
/*              */
/*      Map     */
/*              */
/****************/

/*
 VOID : 0,
 WEAPON: 1,
 GOLD: 2,
 PLAYER: 3,
 MONSTER: 4,
 AMMO: 5,
 ROAD: 6,
 ROCK: 7,
 GOAL: 8,
 OBSTACLE: 9,

 */

/* Map */

function Map (nbLine, nbCollumn, map){
    this.line = nbLine;
    this.collumn = nbCollumn;
    this.map = [];

    for(var i = 0; i < map.length; i++)
    {
        this.map[i] = [];
        for(var j = 0; j < map[i].length; j++)
        {
            this.map[i][j] = factoryTile.constructTile(map[i][j], i, j);
        }
    }
}

Map.prototype.show = function(){
    var toReturn = "";
    for(var i = 0; i < this.line; i++)
    {
        toReturn += "[";
        for(var j = 0; j < this.collumn; j++)
        {
            toReturn += this.map[i][j].typeId+" ,";
        }
        toReturn += "]\n";
    }
    return toReturn;
}


/* End Map */


/***********************/
/*                     */
/*    GameExecution    */
/*                     */
/***********************/

function GameExecution(){
    this.listExecution = [];
    this.currentPosition = 0;
    this.isWorking = true;
}

GameExecution.prototype.setCurrentPosition = function(index){
    this.currentPosition = index;
}

GameExecution.prototype.addInstruction = function(instruction){
    this.listExecution.push(instruction);
}

GameExecution.prototype.createInstructionsFromArray = function(){
    var whilePosition = [];
    var ifPosition = [];
    for(var i = 0; i < tokens.length; i++){
        this.listExecution.push(factoryInstrution.constructInstruction(tokens[i]));
        if(tokens[i] == "while"){
            whilePosition.push(i);
        }

        if(tokens[i] == "if"){
            ifPosition.push(i);
        }


        if(tokens[i] == "endif"){
            this.listExecution[ifPosition[ifPosition.length-1]].positionEndIf = i;
            ifPosition.pop();
        }

        if(tokens[i] == "endWhile"){
            this.listExecution[whilePosition[whilePosition.length-1]].positionEndWhile = i;
            this.listExecution[i].positionWhile = whilePosition[whilePosition.length-1];
            whilePosition.pop();
        }
    }

    console.log(this.listExecution);
};

GameExecution.prototype.lauchExecution = function(){
    this.listExecution[this.currentPosition++].execute();
}

GameExecution.prototype.executeNextInstruction = function(){
    if(this.currentPosition >= this.listExecution.length || !this.isWorking){
        return;
    }
    this.listExecution[this.currentPosition++].execute();
}

/***********************/
/*                     */
/*     Instructions    */
/*                     */
/***********************/

function Instruction(positionArray){

}

Instruction.prototype.execute = function(){

}

function IfInstruction(condition){
    this.condition = condition;
    this.positionEndIf = -1;
}

IfInstruction.prototype.evaluateCondition = function(){

}

IfInstruction.prototype.execute = function(){
    if(this.condition){
        game.executeNextInstruction();
    }
    else{ //Condition isn't valuate at true, we have to go after the end if
        game.setCurrentPosition(this.positionEndIf+1);
        game.executeNextInstruction();
    }
}

function EndIfInstruction(){
}

EndIfInstruction.prototype.execute = function(){
    //game.executeNextInstruction();
}


function WhileInstruction(condition){
    this.condition = condition;
    this.positionEndWhile = -1;
}

WhileInstruction.prototype.evaluateCondition = function(){

}

WhileInstruction.prototype.execute = function(){
    if(this.condition){
        return true;
    }
    else{ //Condition isn't valuate at true, we have to break the loop and go to the end while
        game.setCurrentPosition(this.positionEndWhile+1); //Ici on doit mettre à position end while + 1
        return false;
    }
}


function EndWhileInstruction(){
    this.positionWhile = -1;
}

EndWhileInstruction.prototype.execute = function(){
    //We have to back to the while start
    game.setCurrentPosition(this.positionWhile); //Ici la position doit être sur le while
    //game.executeNextInstruction();
}



function BreakInstruction(){

}

BreakInstruction.prototype.execute = function(){
    game.setCurrentPosition(0); //Ici on doit mettre la position au end while + 1
    //game.executeNextInstruction();
}

function MoveInstruction(){

}

MoveInstruction.prototype.execute = function(){
    player.move(map);
    //game.executeNextInstruction();
}

function JumpInstruction(){

}

JumpInstruction.prototype.execute = function(){
    player.jump(map);
    //game.executeNextInstruction();
}

function CollectInstruction(){

}

CollectInstruction.prototype.execute = function(){
    player.collect(map);
    //game.executeNextInstruction();
}

function PushInstruction(){

}

PushInstruction.prototype.execute = function(){
    player.push(map);
    //game.executeNextInstruction();
}

function RotateLeftInstruction(){

}

RotateLeftInstruction.prototype.execute = function(){
    player.leftRotate();
    //game.executeNextInstruction();
}

function RotateRightInstruction(){

}

RotateRightInstruction.prototype.execute = function(){
    player.rightRotate();
    //game.executeNextInstruction();
}

function Affichage(){

}

Affichage.prototype.execute = function(){
    console.log("Affichage test ");
    game.executeNextInstruction();
}

/***********************/
/*                     */
/*         Map         */
/*                     */
/***********************/

var mapLevel1 = [
    [7,7,7,7,7,7,7,0,7,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [7,0,0,0,0,0,0,0,0,7],
    [6,6,6,6,6,6,6,6,6,8],
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

/***********************/
/*                     */
/*      Constantes     */
/*                     */
/***********************/

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




player = new Player(5,0,OrientationType.RIGHT,10);
player.updateSpeedDirection();

map = new Map(10,10, mapLevel3);

game = new GameExecution();

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

canMove = false;
canJump = false;
canCollect = false;
canPush = false;

isWin = false;
isLoose = false;
isPlaying = true;

function updateGameState(){
    canMove = physic.willCollided(map,player,1);
    canJump = physic.willCollided(map,player,2);
    canCollect = physic.ableToGather(map,player);
    canPush = physic.ableToPush(map,player);
}

function hasWin(){
    isWin = (map.map[player.x][player.y].idType == EntityType.GOAL);
}

/*****************/
/*               */
/* Test et debug */
/*               */
/*****************/

//var tokens = ["move","while","move","jump", "while","move", "push", "move","endWhile", "move", "move","endWhile"];


/*var tokens = ["while","move","if","if","affichage","endif","affichage","endif","endWhile"];
game.createInstructionsFromArray(tokens);
console.log(game.listExecution);
game.lauchExecution();
*/
player.showInformations();



/* Fin test et debug */
