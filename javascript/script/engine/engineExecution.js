/***********************/
/*                     */
/*    GameExecution    */
/*                     */
/***********************/

function GameExecution(){
    this.listExecution = [];
    this.currentPosition = 0;
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
        if(tokens[i] == "while"){
            whilePosition.push(i);
        }

        if(tokens[i] == "if"){
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

    console.log(this.listExecution);
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
    this.timeBetweenExecution = 500;
}

GameLauncher.prototype.launch = function(){
    idProcessusExecution = setInterval(this.go, this.timeBetweenExecution);
};

GameLauncher.prototype.go = function(){
    if(isPlaying){
        game.executeNextInstruction();
        draw();
    }
    else{
        clearInterval(idProcessusExecution);
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
    this.condition = condition;
    this.positionEndIf = -1;
}

IfInstruction.prototype.evaluateCondition = function(){

};

IfInstruction.prototype.execute = function(){
    if(this.condition){
        game.executeNextInstruction();
    }
    else{ //Condition isn't valuate at true, we have to go after the end if
        game.setCurrentPosition(this.positionEndIf+1);
    }
};

function EndIfInstruction(){
}

EndIfInstruction.prototype.execute = function(){

};


function WhileInstruction(condition){
    this.condition = condition;
    this.positionEndWhile = -1;
}

WhileInstruction.prototype.evaluateCondition = function(){

};

WhileInstruction.prototype.execute = function(){
    if(this.condition){
        return true;
    }
    else{ //Condition isn't valuate at true, we have to break the loop and go to the end while
        game.setCurrentPosition(this.positionEndWhile+1); //Ici on doit mettre à position end while + 1
        return false;
    }
};


function EndWhileInstruction(){
    this.positionWhile = -1;
}

EndWhileInstruction.prototype.execute = function(){
    //We have to back to the while start
    game.setCurrentPosition(this.positionWhile); //Ici la position doit être sur le while
    //game.executeNextInstruction();
};



function BreakInstruction(){

}

BreakInstruction.prototype.execute = function(){
    game.setCurrentPosition(0); //Ici on doit mettre la position au end while + 1
    //game.executeNextInstruction();
};

function MoveInstruction(){

}

MoveInstruction.prototype.execute = function(){
    player.move(map);
    //game.executeNextInstruction();
};

function JumpInstruction(){

}

JumpInstruction.prototype.execute = function(){
    player.jump(map);
    //game.executeNextInstruction();
};

function CollectInstruction(){

}

CollectInstruction.prototype.execute = function(){
    player.collect(map);
    //game.executeNextInstruction();
};

function PushInstruction(){

}

PushInstruction.prototype.execute = function(){
    player.push(map);
    //game.executeNextInstruction();
};

function RotateLeftInstruction(){

}

RotateLeftInstruction.prototype.execute = function(){
    player.leftRotate();
    //game.executeNextInstruction();
};

function RotateRightInstruction(){

}

RotateRightInstruction.prototype.execute = function(){
    player.rightRotate();
    //game.executeNextInstruction();
};

function Affichage(){

}

Affichage.prototype.execute = function(){
    console.log("Affichage test ");
    game.executeNextInstruction();
};




/*
 IMPORTANT
 NOTE POUR GERER LES BOOLEANS
 ON FAIT UNE HASH MAP et on associe tableauBooleanEtatJeu["nomVariable"] et on y accéde facilement
 */

/* Zone de test sur l'interpretation des booleans */

function NotationPolonaiseInverse (){
    this.pileOperateur = [];
    this.output = [];

    this.hasDetectOpen = false;
    this.hasDetectClose = false;

    this.priorityToken = {};
    this.priorityToken["&&"] = 1;
    this.priorityToken["||"] = 2;
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
            if(this.pileOperateur.length == 0){ //5.1
                this.pileOperateur.push(stringArray[i]);
            }
            else if(this.pileOperateur[this.pileOperateur.length - 1] == "("){ //5.2
                this.pileOperateur.push(stringArray[i]);
            }
            else if(this.getPriority(stringArray[i],this.pileOperateur[this.pileOperateur.length - 1])){//5.3
                this.pileOperateur.push(stringArray[i]);
            }
            else{ //5.4
                this.output.push(this.pileOperateur[this.pileOperateur.length - 1]);
                this.pileOperateur.pop();
                this.pileOperateur.push(stringArray[i]);
            }
        }
        else{ //2)
            this.output.push(stringArray[i]);
        }
    }

    //On vide le reste de la pile
    for(var i = 0; i < this.pileOperateur.length; i++){
        this.output.push(this.pileOperateur[i]);
    }
};

tableau = ["(","(","canMove","||","canJump",")","&&","canCollect",")","||","canPush"];
//tableau = ["(","1","||","3",")", "&&","(","3","||","4",")"];
console.log(tableau);
notation = new NotationPolonaiseInverse();
notation.createNotation(tableau);
console.log(notation.output);