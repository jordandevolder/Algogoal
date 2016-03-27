canvas = null;
context = null;
exec="moveEx";
var grass = new Image();
grass.src = "image/DirtRoad.jpg";
var imagePlayer = new Image();
imagePlayer.src = "image/Player.png";
var caisse = new Image();
caisse.src = "image/Obstacle.png";
var bow = new Image();
bow.src = "image/Bow.png";
var arrow = new Image();
arrow.src = "image/Arrow.png";
var monster = new Image();
monster.src = "image/Monster.png";
var water = new Image();
water.src = "image/Water.jpg";
var waterw = new Image();
waterw.src = "image/WaterWalkable.png";

function draw(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }

    context.drawImage(imagePlayer,0*64, 1*64);
    context.stroke();
    context.closePath();
}

function drawPush(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }
    context.drawImage(water,2*64, 1*64);
    context.drawImage(caisse,1*64, 1*64);
    context.drawImage(imagePlayer,0*64, 1*64);
    context.stroke();
    context.closePath();
}

function drawCollect(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }
    context.drawImage(bow,0*64, 1*64);
    context.drawImage(imagePlayer,0*64, 1*64);
    context.stroke();
    context.closePath();
}

function drawJump(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();

    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }
    context.drawImage(water,1*64, 1*64);
    context.drawImage(imagePlayer,0*64, 1*64);
    context.stroke();
    context.closePath();
}

function drawFire(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();

    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }
    context.drawImage(monster,2*64, 1*64);
    context.fillStyle = "#FF0000";
    context.fillRect((2 * 64) + 13, (1 * 64) - 10,100,10);

    context.drawImage(arrow,1*64, 1*64);
    context.drawImage(bow,0*64, 1*64);
    context.drawImage(imagePlayer,0*64, 1*64);
    context.stroke();
    context.closePath();
}

function executeur(){
    switch(exec){
        case "moveEx":
            executeMove();
            swal({title:"Syntaxe utilisée", text:"move",type:"info"});
            break;
        case "pushEx":
            executePush();
            swal({title:"Syntaxe utilisée", text:"push",type:"info"});
            break;
        case "collectEx":
            executeCollect();
            swal({title:"Syntaxe utilisée", text:"collect",type:"info"});
            break;
        case "jumpEx":
            executeJump();
            swal({title:"Syntaxe utilisée", text:"jump",type:"info"});
            break;
        case "fireEx":
            executeFire();
            swal({title:"Syntaxe utilisée", text:"collect move collect fire",type:"info"});
            break;
        case "whileEx":
            executeWhile();
            swal({title:"Syntaxe utilisée", text:"while[canMove] move endWhile",type:"info"});
            break;
        case "trueEx":
            executeTrue();
            swal({title:"Syntaxe utilisée", text:"if[true] move endIf if[false] move endIf",type:"info"});
            break;
    }
};

function executeMove(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }

    context.drawImage(imagePlayer,1*64, 1*64);
    context.stroke();
    context.closePath();
}

function executePush(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }
    context.drawImage(waterw,2*64, 1*64);
    context.drawImage(imagePlayer,1*64, 1*64);
    context.stroke();
    context.closePath();
}

function executeCollect(){
    draw();
}

function executeJump(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();

    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }
    context.drawImage(water,1*64, 1*64);
    context.drawImage(imagePlayer,2*64, 1*64);
    context.stroke();
    context.closePath();
}

function executeFire(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();

    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }
    context.drawImage(monster,2*64, 1*64);
    context.rect((2 * 64) + 13, (1 * 64) - 10, 40, 10);
    context.fillStyle = "#FF0000";
    context.fillRect((2 * 64) + 13, (1 * 64) - 10,25,10);
    context.drawImage(imagePlayer,1*64, 1*64);
    context.stroke();
    context.closePath();
}

function executeWhile(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }

    context.drawImage(imagePlayer,2*64, 1*64);
    context.stroke();
    context.closePath();
}

function executeTrue(){
    context.clearRect(0,0,canvas.width, canvas.height);
    context.beginPath();
    //Drawing line grid
    for(var i = 0 ; i <= 1; i++){
        context.moveTo(0,(i+1)*64);
        context.lineTo(64*3, (i+1)*64);
    }
    //Drawing collumn grid
    for(var j = 0 ; j <= 3; j++) {
        context.moveTo(j*64,2*64);
        context.lineTo(j * 64, 64 * 1);
    }
    for(var i = 0; i < 3; i++){
        context.drawImage(grass,i*64, 1*64);
    }

    context.drawImage(imagePlayer,1*64, 1*64);
    context.stroke();
    context.closePath();
}
window.onload = function()
{

    /* Chargement du contexte */
    canvas = document.getElementById('mon_canvas_tutorial');
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }
    context = canvas.getContext('2d');
    if(!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }

    /* Chargement du contexte fin */

    /* Chargement des images */

    /* Plusieurs solutions:
                    - Tu fais un fichier à coté tu es chargé de créer une instance de chaque image
                    que tu pourras utiliser ensuite, (regarde dans GraphicFactory) ça fonctionne avec
                    un tableau associatif (tab = {})
                    - Soit tu te fais pas chier et tu déclares directement ici comme ça:

                    var stone = Image("...")
     */

    /* Chargement des images fin */






    /* Création de l'entité personnage, la seul chose que tu vas avoir besoin ici */
    /* Fin personnage */







    /* Création de l'entité map */
    draw();
    //var map[1][3];// Faut la construire avec que de l'herbe a la base par exemple, et ensuite tu viens y rajouter
                    // Une caisse au milieu si jamais c'est l'action pousser
                    // Faut surement mettre cette variable en globale pour pouvoir y accéder dans tes fonctions
                    // Attention le personnage c'est pas un element de la map, c'est quelque chose qui est posé sur la map
                    // Mais il vient pas prendre une place dans le tableau (par exemple pour le collect tu vois bien qu'il est au dessus
                    // Et qu'il remplace pas l'objet
    /* Fin entite map */






    /* Chargement des listeners */
    var move = document.getElementById('moveTuto');
    move.addEventListener('click', function() {
        swal({title:"Move !", text:"Utilisez move pour faire avancer le joueur d'une case.",type:"info"}, draw());
        exec="moveEx";
    });
    var push = document.getElementById('pushTuto');
    push.addEventListener('click', function() {
        swal({title:"Push !", text:"Utilisez push pour faire avancer le joueur et la caisse d'une case. Si la caisse tombe dans l'eau, vous pourrez marcher dessus.",type:"info"}, drawPush());
        exec="pushEx";
    });
    var collect = document.getElementById('collectTuto');
    collect.addEventListener('click', function() {
        swal({title:"Collect !", text:"Utilisez collect pour ramasser l'objet sous le joueur.",type:"info"}, drawCollect());
        exec="collectEx";
    });
    var jump = document.getElementById('jumpTuto');
    jump.addEventListener('click', function() {
        swal({title:"Jump !", text:"Utilisez jump pour avancer de deux cases et ainsi sauter au-dessus de l'eau.",type:"info"}, drawJump());
        exec="jumpEx";
    });
    var fire = document.getElementById('fireTuto');
    fire.addEventListener('click', function() {
        swal({title:"Fire !", text:"Utilisez fire pour attaquer le monstre à moins de deux cases du joueur.",type:"info"}, drawFire());
        exec="fireEx";
    });
    var whileTuto = document.getElementById('whileTuto');
    whileTuto.addEventListener('click', function() {
        swal({title:"While !", text:"Utilisez while pour éviter d'avoir à utiliser plusieurs fois de suite les mêmes instructions.",type:"info"}, draw());
        exec="whileEx";
    });
    var trueTuto = document.getElementById('trueTuto');
    trueTuto.addEventListener('click', function() {
        swal({title:"True !", text:"Utilisez true dans une structure pour automatiquement exécuter le code dans cette structure. Si vous utilisez false, alors le code ne sera pas exécuté.",type:"info"}, draw());
        exec="trueEx";
    });
    var execute = document.getElementById('executeTuto');
    execute.addEventListener('click', function() {
        executeur();
    });
    /* Fin listener */

};

/* Les différents fonctions, qui vont influencer directement la map en changeant leur état */
/* Tu devras ici modifier la variable map pour préparer l'execution */
/* Et ensuite tu pourras appeler une fonction qui va déclarer avec un laps de temps voir "setInterval" une fonction toute les x secondes */