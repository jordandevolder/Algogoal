<?php
/**
 * Sample layout
 */

use Core\Language;
use Helpers\Session;

?>

<div class="page-header">
	<h1><?php echo $data['title'] ?></h1>

</div>
<div>
	<?php print_r($error); ?>
</div>


<p>Bonjour, ceci est la vue principale "welcome". Le jeu sera présent ici</p>
<p>Sur la navbar sont présents les intitulés des différentes vues qui seront présentes sur le site</p>


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



