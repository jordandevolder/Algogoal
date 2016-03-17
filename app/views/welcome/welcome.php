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
<div>
<div class = "page-header"></div>
	<?php print_r($error); ?>
</div>


<p>Bonjour, ceci est la vue principale "welcome".
<p>Vous trouverez ici toute les informations générales sur le projet</p>



