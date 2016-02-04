<?php
/**
 * Created by PhpStorm.
 * User: moz
 * Date: 27/01/16
 * Time: 19:33
 */

use Helpers\Form;
?>

<div class="page-header">
    <h1><?php echo $data['title'] ?></h1>

</div>

<body>
Connexion à l'espace membre :<br />
<form action="laconnexion" method="post">
Login : <input type="text" name="login" value="<?php if (isset($_POST['login'])) echo htmlentities(trim($_POST['login'])); ?>"><br />
Mot de passe : <input type="password" name="pass" value="<?php if (isset($_POST['pass'])) echo htmlentities(trim($_POST['pass'])); ?>"><br />
<input type="submit" name="connexion" value="Connexion">
</form>
<a href="/projet/inscription/">Vous inscrire</a>
<?php
if (isset($erreur)) echo '<br /><br />',$erreur;
?>
</body>


