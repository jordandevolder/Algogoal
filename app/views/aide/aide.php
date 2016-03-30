<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:29
 */
?>

<div class="container">
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
		<div class="col-lg-3"></div>
	</div>
	<div class = "page-header"></div>
	<!-- DÉBUT DES BASES  -->
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h3 class="grandTitrePage">Règles du jeu</h3>
			<br>
			<p>Dans AlgoGoal, votre but est de réussir à traverser un plateau représentant un labyrinthe, en atteignant le carré jaune de l'autre côté du niveau. Pour cela, vous devrez utiliser les fonctions à votre disposition pour faire avancer votre joueur, en utilisant la bonne syntaxe. Le score est défini selon plusieurs critères :
			<ol>
				<li>Le monstre a été tué</li>
				<li>Le lingot d'or a été ramassé</li>
			</ol>
			Ramasser le lingot d'or est obligatoire pour finir le niveau, mais tuer le monstre ne l'est pas. N'oubliez pas également d'essayer d'utiliser le moins d'instructions possible.
			</p>
		</div>
		<div class="col-lg-3"></div>
	</div>
</div>

	<!-- DÉBUT DES COMMANDES  -->
<div class="container">
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h3 class="grandTitrePage">Commandes</h3></div>
		<div class="col-lg-3"></div>
	</div>
	<!-- DÉBUT DES INSTRUCTIONS  -->
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h4 class="titreCentre">Instructions</h4></div>
		<div class="col-lg-3"></div>
	</div>
	<br>
	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Move</h1>
			<p id="reg"> <b>Move</b> fera bouger le joueur d'une case, en tenant compte de son orientation : <br>Appuyer sur <b>move</b> alors que le joueur est orienté vers la droite le fera avancer d'une case vers la droite.</b></p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Push</h1>
			<p id="reg"> <b>Push</b> permet de bouger les caisses d'une case. Le joueur avancera lui aussi d'une case.<br>Les caisses peuvent être poussées dans les trous et dans l'herbe.</p>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Rotate</h1>
			<p id="reg"> <b>RotateLeft</b> change l'orientation du joueur dans cette ordre : droite->haut->gauche->bas->droite.<br><b>RotateRight</b> change l'orientation du joueur dans cette ordre : droite->bas->gauche->haut->droite.</p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Collect</h1>
			<p id="reg"> <b>Collect</b> permet au joueur de ramasser l'objet présent sur la case où il se tient.</p>		</div>
	</div>

	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Jump</h1>
			<p id="reg"> <b>Jump</b> fait avancer le joueur de deux cases si cela est possible. <br>Cette instruction permet au joueur de sauter par-dessus les trous.</b></p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Fire</h1>
			<p id="reg"> <b>Fire</b> permet au joueur de tirer une flèche sur le monstre situé devant lui.</p>
		</div>
	</div>

	<!-- DÉBUT DES CONTROLES  -->
	<br>
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h4 class="titreCentre">Control</h4></div>
		<div class="col-lg-3"></div>
	</div>

	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">While</h1>
			<p id="reg"> Le <b>while</b> est obligatoirement suivi d'une condition. Tant que cette condition vaudra vraie, le code contenu entre <b>while et endWhile</b> s'exécutera.<br> Syntaxe : <b>while[condition] ... endWhile</b></p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">If</h1>
			<p id="reg">Les instructions à l'intérieur de <b>if</b> ne seront exécutées que si la clause entre parenthèses est vraie.<br>Syntaxe : <b>if[clause] ... endIf</b><br><b>EndIf</b> permet de fermer le <b>if</b>.</p>
		</div>
	</div>
	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Break</h1>
			<p id="reg"> <b>Break</b> met fin immédiatement à la boucle dans laquelle il est utilisé.</p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">True/False</h1>
			<p>Dans ce jeu, <b>true</b> permet de créer une boucle infinie, de cette manière : <b>while(true)</b>. Ainsi, le code contenu dans le while s'exécutera à l'infini (jusqu'à un éventuel <b>break</b>). <b>False</b> n'a donc dans ce jeu aucune utilité, mais il est tout de même présent pour que vous ne perdiez pas à l'esprit son utilité.</p>
		</div>
	</div>

	<!-- DÉBUT DES CONDITIONS  -->
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h4 class="titreCentre">Condition</h4></div>
		<div class="col-lg-3"></div>
	</div>

	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">&& (ET)</h1>
			<p><b>&&</b> vaudra vrai si les deux clauses testées sont vraies, sinon il vaudra faux.<br>Syntaxe possible : <b>if[clause1 && clause2]</b></p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">|| (OU)</h1>
			<p><b>||</b> vaudra vrai si au moins une des deux conditions testées est vraie, sinon il vaudra faux.<br>Syntaxe possible : <b>if[clause1 || clause2]</b></p>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">! (NON)</h1>
			<p><b>!</b> vaudra vrai si la clause testée est fausse.<br>Syntaxe possible : <b>if[!clause1 && clause2]</b></p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
		<h1 class="sousTitreCentre">can{Action}</h1>
			<p> <b>can{Action}</b> est booléen permettant de tester si le joueur peut effecteur une certaine action :<br>Par exemple, canCollect vaudra vrai si un objet est présent sur la case du joueur.<br>Syntaxe possible : <b>if[canCollect]</b></p>
		</div>
	</div>

	<!-- DÉBUT DES BOUTONS PRATIQUES -->

	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h4 class="titreCentre">Boutons pratiques</h4></div>
		<div class="col-lg-3"></div>
	</div>

	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Execute</h1>
			<p><b>Execute</b> permet simplement d'exécuter le code présent dans la console.</p>
		</div>
		<div class="col-lg-2"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">Clear</h1>
			<p><b>Clear</b> efface le contenu de la console, le code présent dedans est donc supprimé. Le plateau de jeu est également réinitialisé.</p>
		</div>
	</div>

	<div class="row">
		<div class="col-lg-1"></div>
		<div class="col-lg-4">
			<h1 class="sousTitreCentre">*1</h1>
			<p><b>*1</b> augmente la vitesse d'exécution des commandes (par exemple, déplacer un joueur se fera plus rapidement).</p>
		</div>
	</div>

</div>