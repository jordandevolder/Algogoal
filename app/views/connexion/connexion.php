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
        <div class="col-lg-offset-3 col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
    </div>
<div>
<div class = "page-header"></div>
<div class="alert-danger"><?php echo $data['erreurCo']; ?></div>

<body>
<div class="row">
    <br><br>
    <div id="formulaireConnexion" class="col-lg-offset-3 col-lg-6">
        <form role="form" action="laconnexion" method="post">
            <br><br>
            <div class="form-group">
                <label for="email">Pseudo:</label>
                <input type="text" class="form-control" id="login" name="login" required>
            </div>
            <div class="form-group">
                <label for="pwd">Mot de passe:</label>
                <input type="password" name="password" class="form-control" id="pwd" required>
            </div>
            <button type="submit" class="btn btn-default">Connexion</button>
            <br><br>
        </form>
        <a href="/projet/inscription/"><button class="btn btn-default"><span class="glyphicon glyphicon-floppy-disk"></span> Vous inscrire</button></a>
        <br><br>
    </div>
</div>
<?php
if (isset($erreur)) echo '<br /><br />',$erreur;
?>
</body>


