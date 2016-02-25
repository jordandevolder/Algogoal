function loadEvent(){

    /* Instruction event */
    var move = document.getElementById('move');
    move.addEventListener('click', function() {
        player.move();
        draw();
    });

    var push = document.getElementById('push');
    push.addEventListener('click', function() {
        player.push();
        draw();
    });

    var rotateL = document.getElementById('rotateL');
    rotateL.addEventListener('click', function() {
        player.leftRotate();;
        draw();
    });

    var rotateR = document.getElementById('rotateR');
    rotateR.addEventListener('click', function() {
        player.rightRotate();
        draw();
    });

    var collect = document.getElementById('collect');
    collect.addEventListener('click', function() {
        player.collect();
        draw();
    });

    var jump = document.getElementById('jump');
    jump.addEventListener('click', function() {
        player.jump();
        draw();
    });

    /* Control event */

    var while_ = document.getElementById('while');
    while_.addEventListener('click', function() {
        instructionList.addElement("while");
        draw();
    });

    var endWhile = document.getElementById('endWhile');
    endWhile.addEventListener('click', function() {
        instructionList.addElement("endWhile");
        draw();
    });

    var if_ = document.getElementById("if");
    if_.addEventListener('click', function() {
        instructionList.addElement("if");
        draw();
    });

    var endIf = document.getElementById("endIf");
    endIf.addEventListener('click', function() {
        instructionList.addElement("endIf");
        draw();
    });

    var break_ = document.getElementById("break");
    break_.addEventListener('click', function() {
        instructionList.addElement("break");
        draw();
    });

    /* Condition event */

    var and = document.getElementById('and');
    and.addEventListener('click', function() {
        instructionList.addElement("&&");
        draw();
    });

    var or = document.getElementById('or');
    or.addEventListener('click', function() {
        instructionList.addElement("||");
        draw();
    });

    var not = document.getElementById("not");
    not.addEventListener('click', function() {
        instructionList.addElement("!");
        draw();
    });

    var canMove = document.getElementById("canMove");
    canMove.addEventListener('click', function() {
        instructionList.addElement("canMove");
        draw();
    });

    var canJump = document.getElementById("canJump");
    canJump.addEventListener('click', function() {
        instructionList.addElement("canJump");
        draw();
    });

    var canCollect = document.getElementById("canCollect");
    canCollect.addEventListener('click', function() {
        instructionList.addElement("canCollect");
        draw();
    });

    var canPush = document.getElementById("canPush");
    canPush.addEventListener('click', function() {
        instructionList.addElement("canPush");
        draw();
    });



}