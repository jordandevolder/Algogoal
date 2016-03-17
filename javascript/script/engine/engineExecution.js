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
    for(var i = 0; i < engineGame.tokens.length; i++){
        this.listExecution.push(factoryInstrution.constructInstruction(engineGame.tokens[i]));
        if(engineGame.tokens[i].search(this.regexWhile) >= 0){
            whilePosition.push(i);
        }

        if(engineGame.tokens[i].search(this.regexIf) >= 0){
            ifPosition.push(i);
         }

        if(engineGame.tokens[i] == "endIf"){
          this.listExecution[ifPosition[ifPosition.length-1]].positionEndIf = i;
          ifPosition.pop();
        }

        if(engineGame.tokens[i] == "endWhile"){
           this.listExecution[whilePosition[whilePosition.length-1]].positionEndWhile = i;
           this.listExecution[i].positionWhile = whilePosition[whilePosition.length-1];
           whilePosition.pop();
        }
    }
};

GameExecution.prototype.executeNextInstruction = function(){
    if((this.currentPosition >= this.listExecution.length) || !(engineGame.isPlaying)){
        engineGame.isPlaying = false;
    }
    else {
        var oldExecution = this.currentPosition;
        this.listExecution[this.currentPosition++].execute();

        //Add " <--- " to the currentAction
        if(this.currentPosition < this.listExecution.length) {
            var currentTexte = document.getElementById("instruction" + (this.currentPosition)).innerText;
            document.getElementById("instruction" + (this.currentPosition)).innerHTML = currentTexte + " " + " " + "<---";
        }

        //Remove the old " <--- "
        var string = document.getElementById("instruction" + (oldExecution)).innerText;
        var indexOfSelected = string.indexOf("<---");
        var toSet = string.substring(0, indexOfSelected);
        console.log(toSet);

        document.getElementById("instruction" + (oldExecution)).innerHTML = toSet;
    }
};

function GameLauncher(){
    idProcessusExecution = 0;
    this.baseTimeBetween = 1500;
    this.currentDiviser = 1;
    this.currentTimeExecution = this.baseTimeBetween*this.currentDiviser;
}


GameLauncher.prototype.changeInterval = function(){
    this.currentDiviser++;
    if(this.currentDiviser > 3){
        this.currentDiviser = 1;
    }
    document.getElementById("speedExec").innerText = "* "+this.currentDiviser;
    this.currentTimeExecution = this.baseTimeBetween / this.currentDiviser;
    if(idProcessusExecution != 0){
        clearInterval(idProcessusExecution);
        this.launch();
    }
};

GameLauncher.prototype.launch = function() {
    engineGame.isPlaying = true;
    idProcessusExecution = setInterval(this.go, this.currentTimeExecution);
};

GameLauncher.prototype.go = function(){
    engineGame.updateGameState();

    if(engineGame.isPlaying){
        if(engineGame.isWin){
            clearInterval(idProcessusExecution);
            engineGame.triggerGameWin();        }
        else {
            engineGame.executer.executeNextInstruction();
            graphicGame.draw();
        }
    }
    else{
        clearInterval(idProcessusExecution);
        if(engineGame.isWin){
            engineGame.triggerGameWin();
        }
        else{
            engineGame.triggerGameLose();
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
        engineGame.executer.setCurrentPosition(this.positionEndIf+1); //Ici on doit mettre à position end while + 1
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
        engineGame.executer.setCurrentPosition(this.positionEndWhile+1); //Ici on doit mettre à position end while + 1
    }
};


function EndWhileInstruction(){
    this.positionWhile = -1;
}

EndWhileInstruction.prototype.execute = function(){
    //We have to back to the while start
    engineGame.executer.setCurrentPosition(this.positionWhile); //Ici la position doit être sur le while
};



function BreakInstruction(){

}

BreakInstruction.prototype.execute = function(){
    engineGame.executer.setCurrentPosition(0); //Ici on doit mettre la position au end while + 1
};

function MoveInstruction(){

}

MoveInstruction.prototype.execute = function(){
    engineGame.player.move(engineGame.map);
};

function JumpInstruction(){

}

JumpInstruction.prototype.execute = function(){
    engineGame.player.jump(engineGame.map);
};

function CollectInstruction(){

}

CollectInstruction.prototype.execute = function(){
    engineGame.player.collect(engineGame.map);
};

function PushInstruction(){

}

PushInstruction.prototype.execute = function(){
    engineGame.player.push(engineGame.map);
};

function RotateLeftInstruction(){

}

RotateLeftInstruction.prototype.execute = function(){
    engineGame.player.leftRotate();
};

function RotateRightInstruction(){

}

RotateRightInstruction.prototype.execute = function(){
    engineGame.player.rightRotate();
};

function FireInstruction(){

}

FireInstruction.prototype.execute = function(){
  engineGame.player.fire();
};