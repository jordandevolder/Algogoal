canvas = null;
context = null;
grid = null;
instructionList = null;
imageTab = {};

window.onload = function()
{
    canvas = document.getElementById('mon_canvas');
    if(!canvas)
    {
        alert("Impossible de récupérer le canvas");
        return;
    }
    context = canvas.getContext('2d');
    if(!context)
    {
        alert("Impossible de récupérer le context du canvas");
        return;
    }

    loadEvent();

    grid = new GridGraphic();

    createImageTab();
    draw();
};

function draw(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    grid.drawMap();
    grid.drawGrid();
    grid.drawPlayer();
    context.stroke();
    context.closePath();
}

function createImageTab(){


    var arrayString =   ["grass","weapon","gold","player","monster","arrow", "road",
                        "stone","goal","obstacle","water","obstacleUnmovable","waterWalkable"];

    for(var i = 0; i < arrayString.length; i++){
        imageTab[arrayString[i]] = new Image();
        switch(i)
        {
            case 0:
                imageTab[arrayString[i]].src = "../projet/image/grass.jpg";
                break;
            case 1:
                imageTab[arrayString[i]].src = "../projet/image/Bow.png";
                break;
            case 2:
                imageTab[arrayString[i]].src = "../projet/image/Gold.png";
                break;
            case 3:
                imageTab[arrayString[i]].src = "../projet/image/Player.png";
                break;
            case 4:
                imageTab[arrayString[i]].src = "../projet/image/Monster.png";
                break;
            case 5:
                imageTab[arrayString[i]].src = "../projet/image/Arrow.png";
                break;
            case 6:
                imageTab[arrayString[i]].src = "../projet/image/DirtRoad.jpg";
                break;
            case 7:
                imageTab[arrayString[i]].src = "../projet/image/Stone.jpg";
                break;
            case 8:
                imageTab[arrayString[i]].src = "../projet/image/Goal.jpg";
                break;
            case 9:
                imageTab[arrayString[i]].src = "../projet/image/Obstacle.png";
                break;
            case 10:
                imageTab[arrayString[i]].src = "../projet/image/Water.jpg";
                break;
            case 11:
                imageTab[arrayString[i]].src = "../projet/image/obstacleUnmovable.png";
                break;
            case 12:
                imageTab[arrayString[i]].src = "../projet/image/WaterWalkable.png";
                break;
        }
    }
}


function FactoryImage(){

}


FactoryImage.prototype.createImageFrom = function(typeTile, posX, posY){
    switch(typeTile) {
        case 0:
            return imageTab["grass"];
            break;
        case 1:
            if (!hasCollectWeapon && map.map[posY][posX].typeId == EntityType.WEAPON) {
                return imageTab["weapon"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 2:
            if (!hasCollectGold && map.map[posY][posX].typeId == EntityType.GOLD) {
                return imageTab["gold"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 3:
            return imageTab["player"];
            break;
        case 4:
            if (!hasKillMonster && map.map[posY][posX].typeId == EntityType.MONSTER) {
                return imageTab["monster"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 5:
            if (!hasCollectArrow && map.map[posY][posX].typeId == EntityType.AMMO) {
                return imageTab["arrow"];
            }
            else {
                return imageTab["road"];
            }
            break;
        case 6:
            return imageTab["road"];
            break;
        case 7:
            return imageTab["stone"];
            break;
        case 8:
            return imageTab["goal"];
            break;
        case 9:
            return imageTab["obstacle"];
            break;
        case 10:
            return imageTab["water"];
            break;
        case 11:
            return imageTab["obstacleUnmovable"];
            break;
        case 12:
            return imageTab["waterWalkable"];
            break;
    }
};

factoryImage = new FactoryImage();

/**************************/
/*                        */
/*       GridGraphic      */
/*                        */
/**************************/

function GridGraphic(){
    this.xPerTile = 64;
    this.yPerTile = 64;
    this.nbTileX = map.line;
    this.nbTileY = map.collumn;
}

GridGraphic.prototype.drawGrid = function(){
    //Drawing line grid
    for(var i = 0 ; i <= this.nbTileX; i++){
        context.moveTo(0,i*this.yPerTile);
        context.lineTo(this.xPerTile*this.nbTileX, i*this.yPerTile);
    }
    //Drawing collumn grid
    for(var i = 0 ; i <= this.nbTileX; i++){
        context.moveTo(i*this.xPerTile,0);
        context.lineTo(i*this.xPerTile,this.yPerTile*this.nbTileY);
    }
};


GridGraphic.prototype.drawMap = function(){
    for(var i = 0; i < this.nbTileX; i++){
        for(var j = 0; j < this.nbTileY; j++){
            var image = factoryImage.createImageFrom(map.map[j][i].typeId, i , j);
            context.drawImage(image,i*this.xPerTile, j*this.yPerTile);
        }
    }
};

GridGraphic.prototype.drawPlayer = function(){
    var imagePlayer = factoryImage.createImageFrom(EntityType.PLAYER,0,0);
    context.drawImage(imagePlayer, player.y*this.xPerTile, player.x*this.yPerTile);
};

/**************************/
/*                        */
/*   Constante execution  */
/*                        */
/**************************/

idProcessusExecution = 0;

/**************************/
/*                        */
/* InstructionListManager */
/*                        */
/**************************/

listManager = new InstructionListManager();

function InstructionListManager(){
    this.container = document.getElementById("instructionList");
    this.instructionGraphicList = {};
    this.nbInstruction = 0;
    this.startingXPosition = 80;
    this.startingYPosition = 50;

    this.incrementY = 20;
    this.incrementX = 40;
    this.nbImbrication = 0;

    this.currentX = this.startingXPosition;
    this.currentY = this.startingYPosition;

    this.iterateurExecution = 0;

    //this.idProcessusExecution;
}


InstructionListManager.prototype.buildLogicInstruction = function(){
    game.createInstructionsFromArray();
};

InstructionListManager.prototype.lauchExecution = function(){
    idProcessusExecution = setInterval(this.execute, 1000);
};

InstructionListManager.prototype.execute = function(){

    console.log("bite");
    if(isPlaying){
        game.executeNextInstruction();
        draw();
    }
    else{
        console.log("BOOM");
        clearInterval(idProcessusExecution);
    }
};

function test(){
    alert("con");
}

/*
function sleep(seconds){
    var waitUntil = new Date().getTime() + seconds*1000;
    while(new Date().getTime() < waitUntil) true;
}
*/

/*
 IMPORTANT
 NOTE POUR GERER LES BOOLEANS
 ON FAIT UNE HASH MAP et on associe tableauBooleanEtatJeu["nomVariable"] et on y accéde facilement


 */



InstructionListManager.prototype.addInstruction = function(string){

    //Les structures qui ont besoin de perdre une indentation et d'update donc la position tout de suite
    tokens.push(string);
    if(string == "endWhile" || string == "endIf"){
        this.nbImbrication--;
        if (this.nbImbrication < 0) {
            this.nbImbrication = 0;
        }
        this.currentX = this.startingXPosition + (this.nbImbrication * this.incrementX);
        this.currentY = this.startingYPosition + (this.nbInstruction * this.incrementY);
    }

    this.instructionGraphicList["instruction"+this.nbInstruction] = new GraphicInstruction(this.currentX,this.currentY,this.nbInstruction,string);
    this.container.appendChild(this.instructionGraphicList["instruction"+this.nbInstruction].elementHTML);
    this.instructionGraphicList["instruction"+this.nbInstruction].moveInstruction(20,20);


    //Les structures qui vont engendrer une modification future de l'indentation
    if(string == "while" || string == "if") {
        this.nbImbrication++;
    }

    this.nbInstruction++;
    this.currentX = this.startingXPosition + (this.nbImbrication * this.incrementX);
    this.currentY = this.startingYPosition + (this.nbInstruction * this.incrementY);
};


/**************************/
/*                        */
/*   GraphicInstruction   */
/*                        */
/**************************/

function GraphicInstruction(x,y,positionList,element){
    var node = document.createTextNode(element);

    this.posX = x;
    this.posY = y;
    this.elementHTML = document.createElement('p');
    this.elementHTML.appendChild(node);
    this.elementHTML.id = "instruction"+positionList;


    this.elementHTML.style.position = "absolute";
    this.elementHTML.style.left = this.posX+'px';
    this.elementHTML.style.top = this.posY+'px';
    this.elementHTML.style.fontSize = 20+'px';


}

GraphicInstruction.prototype.moveInstruction = function(posX, posY){
    this.posX = posX;
    this.posY = posY;

};

instructionGraphic = null;
