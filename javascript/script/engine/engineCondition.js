/**
 *
 * @constructor
 * This constructor initialize variables needed to make a RPN from a basic
 *
 */
function NotationPolonaiseInverse (){
    this.pileOperateur = [];
    this.output = [];

    this.priorityToken = {};
    this.priorityToken["||"] = 1;
    this.priorityToken["&&"] = 2;
    this.priorityToken["!"] = 3;
}

/**
 *
 * @param elem1 first element is type is an binary operator
 * @param elem2 second element is type is binary operator
 * @returns {boolean} first element has priority on the second element
 */
NotationPolonaiseInverse.prototype.getPriority = function(elem1, elem2){
    return this.priorityToken[elem1] > this.priorityToken[elem2];
};

/**
 *
 * @param stringArray an array of string representing the "standard" condition writing with "( )"
 *
 * this function store in the output little to little the result of the RPN, finally, at the end
 * of the function, the output contained an RPN
 */
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
    for(var j = 0; j < this.pileOperateur.length; j++){
        this.output.push(this.pileOperateur[j]);
    }
};


/**
 *
 * @param expressionPolonaise this parameter is a RPN
 * @constructor
 *
 * make an instance variable of the RPN
 */
function BuildInterpreterCondition(expressionPolonaise){

    this.expression = expressionPolonaise;
}

/**
 *
 * @returns this function start from the RPN, copy it, and finally after traitment, return true or false
 * according with the condition
 */
BuildInterpreterCondition.prototype.evaluateExpression = function(){

    var copieExpression = this.expression.slice(0); //copy
    var structPile = [];
    while(copieExpression.length > 0){
        if(copieExpression[0] == "&&"){
            var resultatTmp1 = structPile[structPile.length-1] && structPile[structPile.length-2];
            structPile.pop();
            structPile.pop();
            structPile.push(resultatTmp1);
        }
        else if(copieExpression[0] == "||"){
            var resultatTmp2 = structPile[structPile.length-1] || structPile[structPile.length-2];
            structPile.pop();
            structPile.pop();
            structPile.push(resultatTmp2);
        }
        else if(copieExpression[0] == "!"){
            var resultatTmp = (structPile[structPile.length-1] == false);
            structPile.pop();
            structPile.push(resultatTmp);
        }
        else{
            structPile.push(engineGame.tableauEtat[copieExpression[0]]);
        }
        copieExpression.shift();
    }
    return structPile[0];
};