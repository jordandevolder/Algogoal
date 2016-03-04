canvas = null;
context = null;
grid = null;
imageTab = {};

factoryImage = new FactoryImage();
listManager = new InstructionListManager();

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
    createImageTab();
    loadEvent();
    grid = new GridMap();
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



