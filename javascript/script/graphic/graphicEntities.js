canvas = null;
context = null;
imageTab = {};
engineGame = null;
engineGraphic = null;
gridActive = true;

factoryImage = new FactoryImage();

/* Prechargement des images */
var preloader = new ImagePreloader();
preloader.createImage();
/* Fin prechargement */

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

    var tableau = (window.location.href).split("/");

    engineGame = new EngineGame("mapLevel"+tableau[tableau.length-1], tableau[tableau.length-1]);
    graphicGame = new GraphicGame();
    loadEvent();
    graphicGame.draw();

};

