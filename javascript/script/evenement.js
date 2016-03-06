function loadEvent(){

    /* Instruction event */
    var move = document.getElementById('move');
    move.addEventListener('click', function() {
        listManager.addInstruction("move");
    });

    var push = document.getElementById('push');
    push.addEventListener('click', function() {
        listManager.addInstruction("push");
    });

    var rotateL = document.getElementById('rotateL');
    rotateL.addEventListener('click', function() {
        listManager.addInstruction("rotateLeft");
    });

    var rotateR = document.getElementById('rotateR');
    rotateR.addEventListener('click', function() {
        listManager.addInstruction("rotateRight");
    });

    var collect = document.getElementById('collect');
    collect.addEventListener('click', function() {
        listManager.addInstruction("collect");
    });

    var jump = document.getElementById('jump');
    jump.addEventListener('click', function() {
        listManager.addInstruction("jump");
    });

    /* Control event */

    var while_ = document.getElementById('while');
    while_.addEventListener('click', function() {
        listManager.addInstruction("while");
    });

    var endWhile = document.getElementById('endWhile');
    endWhile.addEventListener('click', function() {
        listManager.addInstruction("endWhile");
    });

    var if_ = document.getElementById("if");
    if_.addEventListener('click', function() {
        listManager.addInstruction("if");
    });

    var endIf = document.getElementById("endIf");
    endIf.addEventListener('click', function() {
        listManager.addInstruction("endIf");
    });

    var break_ = document.getElementById("break");
    break_.addEventListener('click', function() {
        listManager.addInstruction("break");
    });

    /* Condition event */

    var and = document.getElementById('and');
    and.addEventListener('click', function() {
        listManager.addInstruction("&&");
    });

    var or = document.getElementById('or');
    or.addEventListener('click', function() {
        listManager.addInstruction("||");
    });

    var not = document.getElementById("not");
    not.addEventListener('click', function() {
        listManager.addInstruction("!");
    });

    var canMove = document.getElementById("canMove");
    canMove.addEventListener('click', function() {
        listManager.addInstruction("canMove");
    });

    var canJump = document.getElementById("canJump");
    canJump.addEventListener('click', function() {
        listManager.addInstruction("canJump");
    });

    var canCollect = document.getElementById("canCollect");
    canCollect.addEventListener('click', function() {
        listManager.addInstruction("canCollect");
    });

    var canPush = document.getElementById("canPush");
    canPush.addEventListener('click', function() {
        listManager.addInstruction("canPush");
    });

    var openPar = document.getElementById("openPar");
    openPar.addEventListener('click', function() {
        listManager.addInstruction("(");
    });

    var closePar = document.getElementById("closePar");
    closePar.addEventListener('click', function() {
        listManager.addInstruction(")");
    });

    var startCon = document.getElementById("startCon");
    startCon.addEventListener('click', function() {
        listManager.addInstruction("[");
    });


    var endCon = document.getElementById("endCon");
    endCon.addEventListener('click', function() {
        listManager.addInstruction("]");
    });

    var speedExec = document.getElementById("speedExec");
    speedExec.addEventListener('click',function(){
        launcher.changeInterval();
    });


    /* Execution */

    var execute = document.getElementById("execute");
    execute.addEventListener('click', function(){
        console.log(tokens);
        player = new Player(5,0,OrientationType.RIGHT,10);
        player.updateSpeedDirection();
        draw();
        game.buildLogicInstruction();
        launcher.launch();
    });

    var clear = document.getElementById("clear");
    clear.addEventListener('click',function(){
        reinit();
     });
}