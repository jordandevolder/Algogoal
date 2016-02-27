function loadEvent(){

    /* Instruction event */
    var move = document.getElementById('move');
    move.addEventListener('click', function() {
        //player.move();
        listManager.addInstruction("move");
        draw();
    });

    var push = document.getElementById('push');
    push.addEventListener('click', function() {
        //player.push();
        listManager.addInstruction("push");
        draw();
    });

    var rotateL = document.getElementById('rotateL');
    rotateL.addEventListener('click', function() {
        //player.leftRotate();
        listManager.addInstruction("rotateLeft");
        draw();
    });

    var rotateR = document.getElementById('rotateR');
    rotateR.addEventListener('click', function() {
        //player.rightRotate();
        listManager.addInstruction("rotateRight");
        draw();
    });

    var collect = document.getElementById('collect');
    collect.addEventListener('click', function() {
        //player.collect();
        listManager.addInstruction("collect");
        draw();
    });

    var jump = document.getElementById('jump');
    jump.addEventListener('click', function() {
        //player.jump();
        listManager.addInstruction("jump");
        draw();
    });

    /* Control event */

    var while_ = document.getElementById('while');
    while_.addEventListener('click', function() {
        //instructionList.addElement("while");
        listManager.addInstruction("while");
        draw();
    });

    var endWhile = document.getElementById('endWhile');
    endWhile.addEventListener('click', function() {
        listManager.addInstruction("endWhile");
        draw();
    });

    var if_ = document.getElementById("if");
    if_.addEventListener('click', function() {
        listManager.addInstruction("if");
        draw();
    });

    var endIf = document.getElementById("endIf");
    endIf.addEventListener('click', function() {
        listManager.addInstruction("endIf");
        draw();
    });

    var break_ = document.getElementById("break");
    break_.addEventListener('click', function() {
        listManager.addInstruction("break");
        draw();
    });

    /* Condition event */

    var and = document.getElementById('and');
    and.addEventListener('click', function() {
        listManager.addInstruction("&&");
        draw();
    });

    var or = document.getElementById('or');
    or.addEventListener('click', function() {
        listManager.addInstruction("||");
        draw();
    });

    var not = document.getElementById("not");
    not.addEventListener('click', function() {
        listManager.addInstruction("!");
        draw();
    });

    var canMove = document.getElementById("canMove");
    canMove.addEventListener('click', function() {
        listManager.addInstruction("canMove");
        draw();
    });

    var canJump = document.getElementById("canJump");
    canJump.addEventListener('click', function() {
        listManager.addInstruction("canJump");
        draw();
    });

    var canCollect = document.getElementById("canCollect");
    canCollect.addEventListener('click', function() {
        listManager.addInstruction("canCollect");
        draw();
    });

    var canPush = document.getElementById("canPush");
    canPush.addEventListener('click', function() {
        listManager.addInstruction("canPush");
        draw();
    });

    /* Execution */

    var execute = document.getElementById("execute");
    execute.addEventListener('click', function() {
        //listManager.addInstruction("canCollect");
        //draw();
        //game.createInstructionsFromArray();
        listManager.execute();
        draw();
    });

}