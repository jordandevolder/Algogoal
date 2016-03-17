
function GraphicGame(){
    this.listManager = new InstructionListManager();
    this.mapComponents = new GridMap();
}

GraphicGame.prototype.reInit = function(){
    this.listManager.clearList();
    this.listManager = new InstructionListManager();
    document.getElementById("speedExec").innerText = "* "+1;
};

GraphicGame.prototype.draw = function(){
    context.clearRect(0,0,canvas.width, canvas.height);

    context.beginPath();
    this.mapComponents.drawMap();
    this.mapComponents.drawGrid();
    this.mapComponents.drawPlayer();
    this.mapComponents.drawMonsterLife();
    context.closePath();

    context.stroke();
};