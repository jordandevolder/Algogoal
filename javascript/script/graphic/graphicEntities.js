canvas = null;
context = null;
imageTab = {};

factoryImage = new FactoryImage();

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
    graphicGame.draw();
};



