<?php
    use Helpers\Session;
?>

<div class="page-header">
    <h1><?php echo $data['title'] ?></h1>
    <h2><?php echo $data['level'] ?></h2>
</div>

<a href="<?php echo DIR?>"><button class="btn btn-primary">Retourner à la page d'accueil</button></a><a href="/projet/indexJouer"><button class="btn btn-primary">Retour à l'index</button></a>

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
								</div>

	</div>

	</br>
	</br>
	</br>
	<!-- instruction and button  -->

	<div class=\"row\">
		<div class=\"col-lg-3\">
			<p> Instruction button</p>
			<div class=\"instructionButtonBloc\">
				<button id=\"move\"> move</button>
				<button id=\"push\"> push</button>
				<button id=\"rotateL\"> rotateLeft</button>
				<button id=\"rotateR\"> rotateRight</button>
				<button id=\"collect\"> collect </button>
				<button id=\"jump\"> jump </button>
			</div>
		</div>
		<div class=\"col-lg-3\">
			<p> Control button</p>
			<div class=\"instructionButtonBloc\">
				<button id=\"while\"> while</button>
				<button id=\"endWhile\"> endWhile</button>
				<button id=\"if\"> if</button>
				<button id=\"endIf\"> endIf</button>
				<button id=\"break\"> break </button>
				<button id=\"startCon\"> [ </button>
				<button id=\"endCon\"> ] </button>

			</div>
		</div>
		<div class=\"col-lg-3\">
			<p> Condition button</p>
			<div class=\"instructionButtonBloc\">
				<button id=\"and\"> && </button>
				<button id=\"or\"> || </button>
				<button id=\"not\"> ! </button>
				<button id=\"canMove\"> canMove</button>
				<button id=\"canJump\"> canJump </button>
				<button id=\"canCollect\"> canCollect </button>
				<button id=\"canPush\"> canPush </button>
				<button id=\"true\"> true </button>
				<button id=\"false\"> false </button>
				<button id=\"openPar\"> ( </button>
				<button id=\"closePar\"> ) </button>
			</div>
		</div>
		<div class=\"col-lg-3\">
			<p> Other category</p>
			<div class=\"instructionButtonBloc\">
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
