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
        player.jump();
        draw();
    });

    var endwhile = document.getElementById('endwhile');
    endwhile.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var if_ = document.getElementById("if");
    if_.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var endif = document.getElementById("endif");
    endif.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var break_ = document.getElementById("break");
    break_.addEventListener('click', function() {
        player.jump();
        draw();
    });

    /* Condition event */

    var and = document.getElementById('and');
    and.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var or = document.getElementById('or');
    or.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var not = document.getElementById("not");
    not.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var canMove = document.getElementById("canMove");
    canMove.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var canJump = document.getElementById("canJump");
    canJump.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var canCollect = document.getElementById("canCollect");
    canCollect.addEventListener('click', function() {
        player.jump();
        draw();
    });

    var canPush = document.getElementById("canPush");
    canPush.addEventListener('click', function() {
        player.jump();
        draw();
    });



}