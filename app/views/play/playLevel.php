<?php
    use Helpers\Session;
?>

<div class="page-header">
    <h2><?php echo $data['level'] ?>
        <a class="col-lg-offset-8" href="<?php echo DIR?>"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-home"></span> Accueil</button></a>
        <a href="/projet/indexJouer"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-arrow-up"></span> Index des niveaux</button></a>
    </h2>
</div>

<br>
<?php
if(Session::get('loggedin')==true)
{
    echo " <div class = \"container\">

	<!-- Game board and instruction list  -->
	<div class=\"row\">
		<div class=\"col-lg-7\"> <div id=\"board\"><canvas id=\"mon_canvas\" width=\"640\" height=\"640\"></canvas></div> </div>
		<div class=\"col-lg-5\"> <div id=\"instructionList\"></div>
									<button id=\"execute\">Execute</button>
									<button id=\"clear\">Clear</button>
									<button id=\"speedExec\">* 1</button>

                                    <br><br>

                                    <!-- Instructions -->


                                    <div class=\"dropdown\">
                                        <button class=\"dropbtn\">Instructions</button>
                                        <div class=\"dropdown-content\">
                                            <a id =\"move\">move</a>
                                            <a id =\"push\">push</a>
                                            <a id =\"rotateL\">rotateLeft</a>
                                            <a id =\"rotateR\">rotateRight</a>
                                            <a id =\"collect\">collect</a>
                                            <a id =\"jump\">jump</a>
                                            <a id =\"fire\">fire</a>
                                        </div>
                                    </div>

                                    <!-- Structures -->


                                    <div class=\"dropdown\">
                                        <button class=\"dropbtn\">Structures</button>
                                        <div class=\"dropdown-content\">
                                            <a id =\"while\">while</a>
                                            <a id =\"endWhile\">endWhile</a>
                                            <a id =\"if\">if</a>
                                            <a id =\"endIf\">endIf</a>
                                            <a id =\"break\">break</a>
                                            <a id =\"startCon\">[</a>
                                            <a id =\"endCon\">]</a>
                                        </div>
                                    </div>

                                    <!-- Conditions -->

                                    <div class=\"dropdown\">
                                        <button class=\"dropbtn\">Conditions</button>
                                        <div class=\"dropdown-content\">
                                            <a id=\"and\"> && </a>
                                            <a id=\"or\"> || </a>
                                            <a id=\"not\"> ! </a>
                                            <a id=\"canMove\"> canMove</a>
                                            <a id=\"canJump\"> canJump </a>
                                            <a id=\"canCollect\"> canCollect </a>
                                            <a id=\"canPush\"> canPush </a>
                                            <a id=\"canFire\"> canFire </a>
                                            <a id=\"true\"> true </a>
                                            <a id=\"false\"> false </a>
                                            <a id=\"openPar\"> ( </a>
                                            <a id=\"closePar\"> ) </a>
                                        </div>
                                    </div>
		</div>
	</div>


</div>";
}
?>

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
<script type="text/javascript" src = "/projet/javascript/script/graphic/graphicFactory.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/graphic/graphicMap.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/graphic/graphicInstructions.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/graphic/graphicGame.js"></script>
<script type="text/javascript" src = "/projet/javascript/script/graphic/graphicEntities.js"></script>


<!-- Include evenement  -->
<script type="text/javascript"src="/projet/javascript/script/evenement.js"></script>
