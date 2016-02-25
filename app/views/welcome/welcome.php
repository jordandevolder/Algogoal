<?php
/**
 * Sample layout
 */

use Core\Language;

?>

<div class="page-header">
	<h1><?php echo $data['title'] ?></h1>

</div>

<p>Bonjour, ceci est la vue principale "welcome". Le jeu sera présent ici</p>
<p>Sur la navbar sont présents les intitulés des différentes vues qui seront présentes sur le site</p>

<canvas id="mon_canvas" width="800" height="650"></canvas>
</br>
<button id="avancer"> Avancer</button>
<button id="pousser"> Pousser</button>
<button id="rotateL"> Rotate Left</button>
<button id="rotateR"> Rotate right</button>
<button id="collect"> Collect </button>
<button id="jump"> Jump </button>

</br>

<canvas id="mon_canvas_2" width="800" height="200"></canvas>
