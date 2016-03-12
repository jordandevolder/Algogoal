function loadEvent(){

    /* Instruction event */
    var move = document.getElementById('move');
    move.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("move");
    });

    var push = document.getElementById('push');
    push.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("push");
    });

    var rotateL = document.getElementById('rotateL');
    rotateL.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("rotateLeft");
    });

    var rotateR = document.getElementById('rotateR');
    rotateR.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("rotateRight");
    });

    var collect = document.getElementById('collect');
    collect.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("collect");
    });

    var jump = document.getElementById('jump');
    jump.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("jump");
    });

    /* Control event */

    var while_ = document.getElementById('while');
    while_.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("while");
    });

    var endWhile = document.getElementById('endWhile');
    endWhile.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("endWhile");
    });

    var if_ = document.getElementById("if");
    if_.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("if");
    });

    var endIf = document.getElementById("endIf");
    endIf.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("endIf");
    });

    var break_ = document.getElementById("break");
    break_.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("break");
    });

    /* Condition event */

    var and = document.getElementById('and');
    and.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("&&");
    });

    var or = document.getElementById('or');
    or.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("||");
    });

    var not = document.getElementById("not");
    not.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("!");
    });

    var canMove = document.getElementById("canMove");
    canMove.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("canMove");
    });

    var canJump = document.getElementById("canJump");
    canJump.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("canJump");
    });

    var canCollect = document.getElementById("canCollect");
    canCollect.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("canCollect");
    });

    var canPush = document.getElementById("canPush");
    canPush.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("canPush");
    });

    var openPar = document.getElementById("openPar");
    openPar.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("(");
    });

    var closePar = document.getElementById("closePar");
    closePar.addEventListener('click', function() {
        graphicGame.listManager.addInstruction(")");
    });

    var startCon = document.getElementById("startCon");
    startCon.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("[");
    });


    var endCon = document.getElementById("endCon");
    endCon.addEventListener('click', function() {
        graphicGame.listManager.addInstruction("]");
    });

    var speedExec = document.getElementById("speedExec");
    speedExec.addEventListener('click',function(){
        engineGame.launcher.changeInterval();
    });


    /* Execution */

    var execute = document.getElementById("execute");
    execute.addEventListener('click', function(){
        engineGame.startExecutionListInstructions();

        /*
        player = new Player(5,0,OrientationType.RIGHT,10);
        player.updateSpeedDirection();
        updateGameState();
        draw();
        game.buildLogicInstruction();
        launcher.launch(); */
    });

    var clear = document.getElementById("clear");
    clear.addEventListener('click',function(){
        engineGame.reInit();
        graphicGame.reInit();
     });
}