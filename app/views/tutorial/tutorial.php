<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 26/03/2016
 * Time: 21:50
 */
?>

<div class="container">
    <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
        <div class="col-lg-3"></div>
    </div>
    <div class = "page-header"></div>
    <h2>Cliquez sur un bouton puis sur tester pour voir son effet !</h2>
    <div class = "tutoButtonBloc">
        <div class="row">
            <div class="col-lg-4">
                    <button id="moveTuto"> move</button>
            </div>
            <div class="col-lg-4">
                    <button id="pushTuto"> push</button>
            </div>
            <div class="col-lg-4">
                    <button id="collectTuto"> collect</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                    <button id="jumpTuto"> jump</button>
            </div>
            <div class="col-lg-4">
                <br>
                <div id="board">
                    <canvas id="mon_canvas_tutorial" width="192" height="192"></canvas>
                </div>
            </div>
            <div class="col-lg-4">
                    <button id="fireTuto"> fire</button>
            </div>
        </div>

        <div class="row">
            <div class="col-lg-4">
                    <button id="whileTuto"> while</button>
            </div>
            <div class="col-lg-4">
                <button id="executeTuto"> Tester !</button>
                <div class="row">
                    <div class="col-lg-3"><img class="arrowTuto" src="image/toprightarrow.png" class="img-responsive img-rounded"></div>
                    <div class="col-lg-3"></div>
                    <div class="col-lg-3"><img class="arrowTuto" src="image/topleftarrow.png" class="img-responsive img-rounded"></div>
                </div>
            </div>
            <div class="col-lg-4">
                    <button id="trueTuto"> true/false</button>
            </div>
        </div>
    </div>
</div>

<!-- Include Javascript -->

<!-- Include moteur -->

<script type="text/javascript" src = "/projet/javascript/script/engine/engineMap.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/engine/engineFactory.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/engine/engineCondition.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/engine/engineExecution.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/engine/enginePhysics.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/engine/entities.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/engine/globalEngineVariables.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/engine/engineGame.js"></script>

<!-- Include graphique -->
<script type="text/javascript" src = "/projet/javascript/tutorial/tutorial.js"></script>


<!-- Include evenement  -->
<script type="text/javascript"src="/projet/javascript/script/evenement.js"></script>
