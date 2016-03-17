<?php
/**
 * Created by PhpStorm.
 * User: moz
 * Date: 27/01/16
 * Time: 19:33
 */

use Helpers\Form;
?>

<div class="container">
    <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
        <div class="col-lg-3"></div>
    </div>
<div>
<div class = "page-header"></div>
<div class="alert-danger"><?php echo $data['erreurCo']; ?></div>

<body>
Connexion à l'espace membre :<br />
<form action="laconnexion" method="post">
Login : <input type="text" name="login" value = "login" required><br />
Mot de passe : <input type="password" name="password" value="password" required><br />
<input type="submit" name="connexion" value="Connexion">
</form>
<a href="/projet/inscription/">Vous inscrire</a>
<?php
if (isset($erreur)) echo '<br /><br />',$erreur;
?>
</body>


