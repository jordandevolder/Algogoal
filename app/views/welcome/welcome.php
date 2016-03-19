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
                    <span class="sr-only">Previous</span>
                </a>

                <a class="right carousel-control" href="#myCarousel" role="button" data-slide="next">
                    <span class="glyphicon glyphicon-chevron-right" aria-hidden="true"></span>
                    <span class="sr-only">Next</span>
                </a>
            </div>
        </div>
        <div class="col-lg-4"></div>
    </div>
<div>
<div class = "page-header"></div>
	<?php print_r($error); ?>
</div>

<p>Bonjour, ceci est la vue principale "welcome".
<p>Vous trouverez ici toute les informations générales sur le projet</p>