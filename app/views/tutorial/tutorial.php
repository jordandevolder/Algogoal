<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 26/03/2016
 * Time: 21:50
 */
use Helpers\Session;
?>

<div class="container">
    <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
        <div class="col-lg-3"></div>
    </div>
    <div class = "page-header"></div>
    <div class="row">
        <div class="col-lg-4">
            <p> Instruction button</p>
            <div class="instructionButtonBloc">
                <button id="move"> move</button>
                <button id="push"> push</button>
                <button id="rotate"> rotate</button>
                <button id="collect"> collect </button>
                <button id="jump"> jump </button>
                <button id="fire"> fire </button>
            </div>
        </div>
        <div class="col-lg-4">
            <p> Control button</p>
            <div class="instructionButtonBloc">
                <button id="while"> while</button>
                <button id="if"> if</button>
                <button id="break"> break </button>

            </div>
        </div>
        <div class="col-lg-4">
            <p> Condition button</p>
            <div class="instructionButtonBloc">
                <button id="and"> && </button>
                <button id="or"> || </button>
                <button id="not"> ! </button>
                <button id="canMove"> canMove</button>
                <button id="canJump"> canJump </button>
                <button id="canCollect"> canCollect </button>
                <button id="canPush"> canPush </button>
                <button id="canFire"> canFire </button>
                <button id="true"> true </button>
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
<script type="text/javascript" src = "/projet/javascript/script/graphic/tutorial.js"></script>


<!-- Include evenement  -->
<script type="text/javascript"src="/projet/javascript/script/evenement.js"></script>
