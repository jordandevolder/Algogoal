canMove = true;
canJump = true;
canCollect = true;
canPush = true;

tableauEtat = {};

tableauEtat["canMove"] = canMove;
tableauEtat["canJump"] = canJump;
tableauEtat["canCollect"] = canCollect;
tableauEtat["canPush"] = canPush;

/***********************/
/*                     */
/*    GameExecution    */
/*                     */
/***********************/

function GameExecution(){
    this.listExecution = [];
    this.currentPosition = 0;

    this.regexWhile = new RegExp(/^while/);
    this.regexIf = new RegExp(/^if/);

}

GameExecution.prototype.buildLogicInstruction = function() {
    this.createInstructionsFromArray();
};

GameExecution.prototype.setCurrentPosition = function(index){
    this.currentPosition = index;
};

GameExecution.prototype.addInstruction = function(instruction){
    this.listExecution.push(instruction);
};

GameExecution.prototype.createInstructionsFromArray = function(){

    var whilePosition = [];
    var ifPosition = [];
    for(var i = 0; i < tokens.length; i++){
        this.listExecution.push(factoryInstrution.constructInstruction(tokens[i]));
        if(tokens[i].search(this.regexWhile) >= 0){
            whilePosition.push(i);
        }

        if(tokens[i].search(this.regexIf) >= 0){
            ifPosition.push(i);
         }

        if(tokens[i] == "endIf"){
          this.listExecution[ifPosition[ifPosition.length-1]].positionEndIf = i;
          ifPosition.pop();
        }

        if(tokens[i] == "endWhile"){
           this.listExecution[whilePosition[whilePosition.length-1]].positionEndWhile = i;
           this.listExecution[i].positionWhile = whilePosition[whilePosition.length-1];
           whilePosition.pop();
        }
    }
};

GameExecution.prototype.executeNextInstruction = function(){
    if((this.currentPosition >= this.listExecution.length) || (!isPlaying)){
        isPlaying = false;
    }
    else {
        this.listExecution[this.currentPosition++].execute();
    }
};

function GameLauncher(){
    idProcessusExecution = 0;
    this.baseTimeBetween = 1500;
    this.currentDiviser = 1;
    this.currentTimeExecution = this.baseTimeBetween*this.currentDiviser;
}

GameLauncher.prototype.launch = function(){
    isPlaying = true;
    idProcessusExecution = setInterval(this.go, this.currentTimeExecution);
};

GameLauncher.prototype.changeInterval = function(){
    this.currentDiviser++;
    if(this.currentDiviser > 3){
        this.currentDiviser = 1;
    }
    document.getElementById("speedExec").innerText = "* "+this.currentDiviser;
    clearInterval(idProcessusExecution);
    this.currentTimeExecution = this.baseTimeBetween / this.currentDiviser;
    this.launch();
};

GameLauncher.prototype.go = function(){
    updateGameState();

    if(isPlaying){
        if(isWin){
            alert("VICTORY");
            clearInterval(idProcessusExecution);
        }
        else {
            game.executeNextInstruction();
            draw();
        }
    }
    else{
        clearInterval(idProcessusExecution);
        if(isWin){
            alert("VICTORY");
        }
        else{
            alert("LOSE");
        }
    }
};





/***********************/
/*                     */
/*     Instructions    */
/*                     */
/***********************/

function Instruction(positionArray){

}

Instruction.prototype.execute = function(){

};

function IfInstruction(condition){

    this.positionEndIf = -1;
    this.notationPolonaiseCondition = new NotationPolonaiseInverse();

    var tableauCondition = condition.split(" ");
    tableauCondition.splice(0,2);
    tableauCondition.splice(tableauCondition.length-1, tableauCondition.length);

    this.notationPolonaiseCondition.createNotation(tableauCondition);
    this.evaluator = new BuildInterpreterCondition(this.notationPolonaiseCondition.output);
}

IfInstruction.prototype.evaluateCondition = function(){
    return this.evaluator.evaluateExpression();
};

IfInstruction.prototype.execute = function(){
    if(this.evaluateCondition()){
        this.evaluator.listOperande = [];
        this.evaluator.listOperator = [];
    }
    else{ //Condition isn't valuate at true, we have to break the loop and go to the end while
        this.evaluator.listOperande = [];
        this.evaluator.listOperator = [];
        game.setCurrentPosition(this.positionEndIf+1); //Ici on doit mettre à position end while + 1
    }
};

function EndIfInstruction(){
}

EndIfInstruction.prototype.execute = function(){

};


function WhileInstruction(condition){

    this.positionEndWhile = -1;
    this.notationPolonaiseCondition = new NotationPolonaiseInverse();

    var tableauCondition = condition.split(" ");
    tableauCondition.splice(0,2);
    tableauCondition.splice(tableauCondition.length-1, tableauCondition.length);

    this.notationPolonaiseCondition.createNotation(tableauCondition);
    this.evaluator = new BuildInterpreterCondition(this.notationPolonaiseCondition.output);

}

WhileInstruction.prototype.evaluateCondition = function(){
    return this.evaluator.evaluateExpression();
};

WhileInstruction.prototype.execute = function(){

    if(this.evaluateCondition()){
        this.evaluator.listOperande = [];
        this.evaluator.listOperator = [];
    }
    else{ //Condition isn't valuate at true, we have to break the loop and go to the end while
        this.evaluator.listOperande = [];
        this.evaluator.listOperator = [];
        game.setCurrentPosition(this.positionEndWhile+1); //Ici on doit mettre à position end while + 1
    }
};


function EndWhileInstruction(){
    this.positionWhile = -1;
}

EndWhileInstruction.prototype.execute = function(){
    //We have to back to the while start
    game.setCurrentPosition(this.positionWhile); //Ici la position doit être sur le while
};



function BreakInstruction(){

}

BreakInstruction.prototype.execute = function(){
    game.setCurrentPosition(0); //Ici on doit mettre la position au end while + 1
};

function MoveInstruction(){

}

MoveInstruction.prototype.execute = function(){
    player.move(map);
};

function JumpInstruction(){

}

JumpInstruction.prototype.execute = function(){
    player.jump(map);
};

function CollectInstruction(){

}

CollectInstruction.prototype.execute = function(){
    player.collect(map);
};

function PushInstruction(){

}

PushInstruction.prototype.execute = function(){
    player.push(map);
};

function RotateLeftInstruction(){

}

RotateLeftInstruction.prototype.execute = function(){
    player.leftRotate();
};

function RotateRightInstruction(){

}

RotateRightInstruction.prototype.execute = function(){
    player.rightRotate();
};

function Affichage(){

}

Affichage.prototype.execute = function(){
    console.log("Affichage test ");
    game.executeNextInstruction();
};







function NotationPolonaiseInverse (){
    this.pileOperateur = [];
    this.output = [];

    this.priorityToken = {};
    this.priorityToken["||"] = 1;
    this.priorityToken["&&"] = 2;
    this.priorityToken["!"] = 3;
}

NotationPolonaiseInverse.prototype.getPriority = function(elem1, elem2){
    return this.priorityToken[elem1] > this.priorityToken[elem2];
};

NotationPolonaiseInverse.prototype.createNotation = function(stringArray){

    for(var i = 0; i < stringArray.length; i++){
        if(stringArray[i] == "("){
            this.pileOperateur.push("(");
        }
        else if(stringArray[i] == ")"){
            while(this.pileOperateur[this.pileOperateur.length - 1] != "("){
                this.output.push(this.pileOperateur[this.pileOperateur.length - 1]);
                this.pileOperateur.pop();
            }
            this.pileOperateur.pop();
        }
        else if(stringArray[i] == "&&" || stringArray[i] == "||" || stringArray[i] == "!"){ //4)
            if(this.pileOperateur.length == 0){
                this.pileOperateur.push(stringArray[i]);
            }
            else if(this.pileOperateur[this.pileOperateur.length - 1] == "(") {
                this.pileOperateur.push(stringArray[i]);
            }
            else if(this.getPriority(stringArray[i],this.pileOperateur[this.pileOperateur.length - 1])){//5.3
                this.pileOperateur.push(stringArray[i]);
            }
            else{
                this.output.push(this.pileOperateur[this.pileOperateur.length - 1]);
                this.pileOperateur.pop();
                this.pileOperateur.push(stringArray[i]);
            }
        }
        else{
            this.output.push(stringArray[i]);
        }
    }

    //On vide le reste de la pile
    for(var i = 0; i < this.pileOperateur.length; i++){
        this.output.push(this.pileOperateur[i]);
    }
};


function BuildInterpreterCondition(expressionPolonaise){

    this.expression = expressionPolonaise;
}

BuildInterpreterCondition.prototype.evaluateExpression = function(){

    console.log(this.expression);
    var copieExpression = this.expression.slice(0);
    var structPile = [];
    while(copieExpression.length > 0){
        if(copieExpression[0] == "&&"){
            var resultat = structPile[structPile.length-1] && structPile[structPile.length-2];
            structPile.pop();
            structPile.pop();
            structPile.push(resultat);
        }
        else if(copieExpression[0] == "||"){
            var resultat = structPile[structPile.length-1] || structPile[structPile.length-2];
            structPile.pop();
            structPile.pop();
            structPile.push(resultat);
        }
        else{
            structPile.push(tableauEtat[copieExpression[0]]);
        }
        copieExpression.shift();
    }
    console.log(structPile[0]);
   return structPile[0];
};