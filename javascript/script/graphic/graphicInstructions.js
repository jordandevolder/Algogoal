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
    this.elementHTML.style.position = "absolute";
    this.elementHTML.style.left = this.posX+'px';
    this.elementHTML.style.top = this.posY+'px';
    this.elementHTML.style.fontSize = 20+'px';


}

GraphicInstruction.prototype.moveInstruction = function(posX, posY){
    this.posX = posX;
    this.posY = posY;

};


/**************************/
/*                        */
/* InstructionListManager */
/*                        */
/**************************/


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

}

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

InstructionListManager.prototype.clearList = function(){

    while (this.container.firstChild) {
        this.container.removeChild(this.container.firstChild);
    }
};