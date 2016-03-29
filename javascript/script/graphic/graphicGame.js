/**
 *
 * @constructor GraphicGame Object used to store component according to graphic rendering
 * that mean The graphicListManager and the Map
 */
function GraphicGame(){
    this.listManager = new InstructionListManager();
    this.mapComponents = new GridMap();
}

/**
 * Function use to reInit all graphic contents, that mean instructionList and map
 */
GraphicGame.prototype.reInit = function(){
    this.listManager.clearList();
    this.listManager = new InstructionListManager();
    this.mapComponents = new GridMap();
    document.getElementById("speedExec").innerText = "* "+1;
};

GraphicGame.prototype.reInitMap = function(){
    this.mapComponents = new GridMap();
};


/**
 * Function use to draw, this function clear the current context, and call all draw of mapComponent
 */
GraphicGame.prototype.draw = function(){
    context.clearRect(0,0,canvas.width, canvas.height);

    this.mapComponents.drawMap();
    if(gridActive) {
        this.mapComponents.drawGrid();
    }
    this.mapComponents.drawPlayer();
    this.mapComponents.drawMonsterLife();
};