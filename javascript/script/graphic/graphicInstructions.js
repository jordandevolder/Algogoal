/**
 *
 * @param x position x of the graphic instruction
 * @param y position y of the graphic instruction
 * @param id the specific id, needed to recognize the html element
 * @param element type string, is the texte that we want to set
 * @param typeElement elementType like button, p, etc..
 * @constructor Construction a graphic instruction which is in reality an html element
 */
function GraphicInstruction(x,y,id,element, typeElement){
    var node = document.createTextNode(element);
    this.posX = x;
    this.posY = y;
    this.id = id;
    this.elementHTML = document.createElement(typeElement);
    this.elementHTML.appendChild(node);
    this.elementHTML.id = "instruction"+id;

   /* this.elementHTML.addEventListener('click', function() {
        if(!engineGame.isPlaying) {
            graphicGame.listManager.container.removeChild(document.getElementById("instruction"+id));
            engineGame.tokens.splice(id,1);

            console.log(graphicGame.listManager.nbInstruction);
            for(var i = id+1; i < graphicGame.listManager.nbInstruction; i++){
                var toChange = graphicGame.listManager.instructionGraphicList["instruction"+i].id - 1;
                console.log(toChange);
                graphicGame.listManager.instructionGraphicList["instruction"+i].elementHTML.id = "instruction"+(toChange);
            }
        }
    });*/

    // couleur syntaxique
    switch(element)
    {
        case "while":
            this.elementHTML.style.color = "red";
            break;
        case "if":
            this.elementHTML.style.color = "blue";
            break;
        case "endWhile":
            this.elementHTML.style.color = "red";
            break;
        case "endIf":
            this.elementHTML.style.color = "blue";
            break;
        default:
            this.elementHTML.style.color="black";
            break;
    }
    this.elementHTML.style.position = "relative";
    this.elementHTML.style.left = this.posX+'px';
    this.elementHTML.style.top = this.posY+'px';
    this.elementHTML.style.fontSize = 20+'px';


}

/**
 *
 * @param posX x position
 * @param posY y position
 * Function use to recenter an instruction
 */
GraphicInstruction.prototype.moveInstruction = function(posX, posY){
    this.posX = posX;
    this.posY = posY;

};

/**
 *
 * @constructor InstructionListManager, this class is used to manage all agencing of adding html element graphically in the list
 */
function InstructionListManager(){
    this.container = document.getElementById("instructionList");
    this.instructionGraphicList = {};
    this.nbInstruction = 0;
    this.startingXPosition = 40;
    this.startingYPosition = 50;

    this.incrementY = 0;
    this.incrementX = 40;
    this.nbImbrication = 0;

    this.currentX = this.startingXPosition;
    this.currentY = this.startingYPosition;


    /* Use to manage condition construction */

    this.isWaitingForConditionEnd = false;
    this.currentConditionBuilding = "";
    this.idConditionBuilding = "";

}

/**
 *
 * @param string the instruction that we want to add
 */
InstructionListManager.prototype.addInstruction = function(string){

    /* Debut partie ajoute */

    if(string == "while" || string == "if"){
        this.idConditionBuilding = "instruction"+this.nbInstruction;
        this.isWaitingForConditionEnd = true;
        this.currentConditionBuilding += string;


        this.instructionGraphicList["instruction"+this.nbInstruction] = new GraphicInstruction(this.currentX,this.currentY, this.nbInstruction,string,"p");
        this.container.appendChild(this.instructionGraphicList["instruction"+this.nbInstruction].elementHTML);
        this.instructionGraphicList["instruction"+this.nbInstruction].moveInstruction(20,20);
    }

    else if(this.isWaitingForConditionEnd){
        document.getElementById(this.idConditionBuilding).textContent += " "+string;
        this.currentConditionBuilding += " "+string;
    }

    if(string == "]"){
        this.isWaitingForConditionEnd = false;
        engineGame.tokens.push(this.currentConditionBuilding);
        this.currentConditionBuilding = "";
        this.nbImbrication++;
        this.nbInstruction++;
        this.currentX = this.startingXPosition + (this.nbImbrication * this.incrementX);
        this.currentY = this.startingYPosition + (this.nbInstruction * this.incrementY);
        return;
    }


    if(!this.isWaitingForConditionEnd) {

        /* Fin partie Ajoute */

        //Les structures qui ont besoin de perdre une indentation et donc d'update la position tout de suite
        engineGame.tokens.push(string);
        if (string == "endWhile" || string == "endIf") {
            this.nbImbrication--;
            if (this.nbImbrication < 0) {
                this.nbImbrication = 0;
            }
            this.currentX = this.startingXPosition + (this.nbImbrication * this.incrementX);
            this.currentY = this.startingYPosition + (this.nbInstruction * this.incrementY);
        }

        this.instructionGraphicList["instruction" + this.nbInstruction] = new GraphicInstruction(this.currentX, this.currentY, this.nbInstruction, string,"p");
        this.container.appendChild(this.instructionGraphicList["instruction"+this.nbInstruction].elementHTML);
        this.instructionGraphicList["instruction" + this.nbInstruction].moveInstruction(20, 20);


        //Les structures qui vont engendrer une modification future de l'indentation
        if (string == "while" || string == "if") {
            this.nbImbrication++;
        }

        this.nbInstruction++;
        this.currentX = this.startingXPosition + (this.nbImbrication * this.incrementX);
        this.currentY = this.startingYPosition + (this.nbInstruction * this.incrementY);
    }
};

/**
 * Clear the list by erasing all html element
 */
InstructionListManager.prototype.clearList = function(){

    while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
    }
};