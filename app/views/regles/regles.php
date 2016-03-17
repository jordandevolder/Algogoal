<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:29
 */
?>
<div class="page-header">
	<h1><?php echo $data['title'] ?></h1>

</div>
<div class="container">
	<!-- DÉBUT DES INSTRUCTIONS  -->
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h1 id="titreCentre">Instructions</h1></div>
		<div class="col-lg-3"></div>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Move</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
		<p id="reg"> <b>Move</b> fera bouger le joueur d'une case, en tenant compte de son orientation : <br>Appuyer sur <b>move</b> alors que le joueur est orienté vers la droite le fera avancé d'une case vers la droite.</b></p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Push</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"> <b>Push</b> permet de bouger les caisses d'une case. Le joueur avancera lui aussi d'une case.<br>Les caisses peuvent être poussées dans les trous et dans l'herbe.</p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Rotate</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"> <b>RotateLeft</b> change l'orientation du joueur dans cette ordre : droite->haut->gauche->bas->droite.<br><b>RotateRight</b> change l'orientation du joueur dans cette ordre : droite->bas->gauche->haut->droite.</p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Collect</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"> <b>Collect</b> permet au joueur de ramasser l'objet présent sur la case où il se tient.</p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Jump</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"> <b>Jump fait avancer le joueur de deux cases si cela est possible. <br>Cette instruction permet au joueur de sauter par-dessus les trous.</b></p>
	</div>

	<!-- DÉBUT DES CONTROLES  -->
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h1 id="titreCentre">Control</h1></div>
		<div class="col-lg-3"></div>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">While</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"> Le <b>while</b> est suivi d'une condition (if). Tant que cette condition vaudra vraie, le code contenu entre <b>while et endWhile</b> s'exécutera.<br> Syntaxe : <b>while[condition] ... endWhile</b></p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">If</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg">Les instructions à l'intérieur de <b>if</b> ne seront exécutées que si la clause entre parenthèses est vraie.<br>Syntaxe : <b>if[clause] ... endIf</b><br><b>EndIf</b> permet de fermer le <b>if</b>.</p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Break</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"> <b>Break</b> met fin immédiatement à la boucle dans laquelle il est utilisé.</p>
	</div>

	<!-- DÉBUT DES CONDITIONS  -->
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h1 id="titreCentre">Condition</h1></div>
		<div class="col-lg-3"></div>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">&& (ET)</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"><b>&&</b> vaudra vrai si les deux clauses testées sont vraies, sinon il vaudra faux.<br>Syntaxe possible : <b>if[clause1 && clause2]</b></p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">|| (OU)</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"><b>||</b> vaudra vrai si une des deux conditions testées est vraie, sinon il vaudra faux.<br>Syntaxe possible : <b>if[clause1 || clause2]</b></p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">! (NON)</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"><b>!</b> vaudra vrai si la clause testée est fausse.<br>Syntaxe possible : <b>if[!clause1 && clause2]</b></p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">can{Action}</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"> <b>can{Action}</b> est booléen permettant de tester si le joueur peut effecteur une certaine action :<br>Par exemple, canCollect vaudra vrai si un objet est présent sur la case du joueur.<br>Syntaxe possible : <b>if[canCollect]</b></p>
	</div>

	<!-- DÉBUT DES BOUTONS PRATIQUES -->
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h1 id="titreCentre">Boutons pratiques</h1></div>
		<div class="col-lg-3"></div>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Execute</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"><b>Execute</b> permet simplement d'exécuter le code présent dans la console.</p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">Clear</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"><b>Clear</b> efface le contenu de la console, le code présent dedans est donc supprimé.</p>
	</div>

	<div class="row">
		<div class="col-lg-4"></div>
		<div class="col-lg-4"><h1 id="sousTitreCentre">*3</h1></div>
		<div class="col-lg-4"></div>
	</div>
	<div class"row">
	<p id="reg"><b>*3</b> multiplie par 3 la vitesse d'exécution des commandes (par exemple, déplacer un joueur se fera plus rapidement).</p>
	</div>

</div>