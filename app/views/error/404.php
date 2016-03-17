<?php
/**
 * Sample layout
 */

use Core\Error;

?>
<div class="container content">
	<div class="row">
		<div class="col-md-12">

			<div class="container">
				<div class="row">
					<div class="col-lg-3"></div>
					<div class="col-lg-6"><h1 class="grandTitrePage">404 <?php echo $data['error'];?></h1></div>
					<div class="col-lg-3"></div>
				</div>
				<div class = "page-header"></div>
				<div>
					<hr />
					<h3>The page you were looking for could not be found</h3>
					<p>This could be the result of the page being removed, the name being changed or the page being temporarily unavailable</p>
					<h3>Troubleshooting</h3>

					<ul>
						<li>If you spelled the URL manually, double check the spelling</li>
						<li>Go to our website's home page, and navigate to the content in question</li>
					</ul>

				</div>
			</div>
		</div>
