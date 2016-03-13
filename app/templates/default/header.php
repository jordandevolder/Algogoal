<?php
/**
 * Sample layout
 */

use Helpers\Assets;
use Helpers\Url;
use Helpers\Hooks;
use Helpers\Session;

//initialise hooks
$hooks = Hooks::get();
?>
<!DOCTYPE html>
<html lang="<?php echo LANGUAGE_CODE; ?>">
<head>

	<!-- Site meta -->
	<meta charset="utf-8">
	<?php
	//hook for plugging in meta tags
	$hooks->run('meta');
	?>
	<title><?php echo $data['title'].' - '.SITETITLE; //SITETITLE defined in app/Core/Config.php ?></title>


    <header class="navbar navbar-inverse navbar-fixed-top bs-docs-nav" role="banner">
        <div class="container">
            <div class="navbar-header">
                <button class="navbar-toggle" type="button" data-toggle="collapse" data-target=".bs-navbar-collapse">
                    <span class="sr-only">Toggle navigation</span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                    <span class="icon-bar"></span>
                </button>

                <a href="<?php echo DIR?>" class="navbar-brand">Projet Semestre 4</a>
            </div>
            <nav class="collapse navbar-collapse bs-navbar-collapse" role="navigation">
                <ul class="nav navbar-nav">
                    <li>
                        <a href="/projet/indexJouer">Jouer</a>
                    </li>
                    <li>
                        <a href="/projet/regles/">Règles</a>
                    </li>
                    <li>
                        <a href="/projet/scores/">Tableau des scores</a>
                    </li>
                    <?php
                    if(Session::get('loggedin') == true) {
                        echo "<li><a href='/projet/ladeconnexion/'>Deconnexion</a></li>";
                        echo "<li style='color:whitesmoke';>".Session::get('message')."</li>";
                    }
                    else
                        echo "<li><a href='/projet/connexion/'>Connexion</a></li>";
                    ?>
                </ul>
            </nav>
        </div>
    </header>
	<!-- CSS -->
	<?php
	Assets::css(array(
		'//maxcdn.bootstrapcdn.com/bootstrap/3.3.6/css/bootstrap.min.css',
		Url::templatePath() . 'css/style.css',
        '/projet/sweetalert/dist/sweetalert2.css'
	));

	//hook for plugging in css
	$hooks->run('css');
	?>

</head>


<body style="padding-top:60px;">
<?php
//hook for running code after body tag
$hooks->run('afterBody');
?>

<div class="container">
