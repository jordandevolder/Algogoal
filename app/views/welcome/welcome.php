<?php
/**
 * Sample layout
 */

use Core\Language;
use Helpers\Session;

?>
<div class="container">
	<div class="row">
		<div class="col-lg-3"></div>
		<div class="col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
		<div class="col-lg-3"></div>
	</div>
    <div class="row">
        <div class="col-lg-4"></div>
        <div class="col-lg-4">
            <div id="myCarousel" class="carousel slide" data-ride="carousel">
                <ol class="carousel-indicators">
                    <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
                    <li data-target="#myCarousel" data-slide-to="1"></li>
                    <li data-target="#myCarousel" data-slide-to="2"></li>
                </ol>

                <div class="carousel-inner" role="listbox">
                    <div class="item active">
                        <img class = "imgcarrousel" src="image/elephant.jpg" alt="elephant">
                    </div>

                    <div class="item">
                        <img class = "imgcarrousel" src="image/zebra.jpg" alt="zebra">
                    </div>

                    <div class="item">
                        <img class = "imgcarrousel" src="image/lion.jpg" alt="lion">
                    </div>
                </div>

                <a class="left carousel-control" href="#myCarousel" role="button" data-slide="prev">
                    <span class="glyphicon glyphicon-chevron-left" aria-hidden="true"></span>
                    <span class="sr-only">Précédent</span>
                </a>

                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Suivant</span>
                </a>
            </div>
        </div>
        <div class="col-lg-4"></div>
    </div>
<div>
<div class = "page-header"></div>
	<?php print_r($error); ?>
</div>

<br>
<h1 class="sousTitreCentre">Pourquoi avoir fait ce site ?</h1><br>
<div class = "container">
    <div class = "row">
        <div class = "col-lg-1"></div>
        <div class = "col-lg-4">
            <p>Ce site a été réalisé dans le cadre d'un projet de fin de DUT informatique par notre équipe composée de quatre étudiants de l'IUT de Lens. Nous l'avons choisi parmi une large liste de projets aux compétences requises variées.</p>
        </div>
        <div class = "col-lg-1"></div>
        <div class = "col-lg-4">
            <p>Ce projet a donc pour but de valider les compétences enseignées à l'IUT lors de ces deux années de DUT. Sa réalisation s'est effectuée du 25/01/2016 au 28/04/2016.</p>
        </div>
    </div>
    <h1 class="sousTitreCentre">L'algo c'est facile !</h1>
    <br>
    <div class = "row">
        <div class = "col-lg-1"></div>
        <div class = "col-lg-4">
            <p>L'objectif de ce projet est d'aider ludiquement les personnes souhaitant apprendre l'algorithme. Vous trouverez donc sur ce site un jeu dans lequel vous devrez faire avancer un personnage dans un labyrinthe classique. Pour cela il faudra utiliser les commandes mises à votre disposition ce qui vous permettra d'apprendre le fonctionnement de chaque algorithme.</p>
        </div>
        <div class = "col-lg-1"></div>
        <div class = "col-lg-4">
            <p>A chaque partie correspond un score, c'est pourquoi ce site vous propose une page des scores afin de savoir qui a le meilleur score. Si vous ne connaissez rien à l'algorithme, n'ayez pas peur, une page d'aide est présente afin d'expliquer le fonctionnement de chaque bouton. Enfin, ce site comporte une page présentant notre équipe.</p>
        </div>
    </div>
    <h1 class="sousTitreCentre">Informations complémentaires</h1>
    <br>
    <div class = "row">
        <div class = "col-lg-1"></div>
        <div class = "col-lg-4">
            <p>Au cours de la réalisation de ce projet, notre tuteur, Jean-Marie Lagniez, a veillé à ce que le projet correspondent aux critères donnés, et a également aider notre équipe à mettre au point un bilan à chaque réunion sur ce qui était fait/à faire.</p>
        </div>
        <div class = "col-lg-1"></div>
        <div class = "col-lg-4">
            <p>Les compétences et les méthodes de programmation que nous avons utilisé :</p>
            <ul>
                <li>PHP</li>
                <li>JavaScript</li>
                <li>HTTP</li>
                <li>CSS</li>
                <li>MVC (Modèle Vue Controlleur)</li>
            </ul>
        </div>
    </div>
</div>