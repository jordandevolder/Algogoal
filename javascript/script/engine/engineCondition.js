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