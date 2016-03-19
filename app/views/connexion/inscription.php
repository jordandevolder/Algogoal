<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:39
 */
?>

<div class="container">
    <div class="row">
        <div class="col-lg-offset-3 col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
    </div>
<div>
<div class = "page-header"></div>


<?php if (isset($data['erreurs'])) {
    foreach($data['erreurs'] as $err)
        echo "<p class=\"alert-danger\">".$err."<br /></p>";
}
?>
<!--
<form action="linscription" method="post">
    Nom d'utilisateur: <input type="text" name="pseudo" required><br/>
    Mot de passe: <input type="password" name="password" required><br/>
    Mot de passe de nouveau: <input type="password" name="password-again" required><br/>
    Email: <input type="email" name="email""><br/>
    <input type="submit" name="inscription"">
</form>
-->
<div class="row">
    <br><br>
    <div id="formulaireConnexion" class="col-lg-offset-3 col-lg-6">
        <form role="form" action="linscription" method="post">
            <br><br>
            <div class="form-group">
                <label for="login">Pseudo:</label>
                <input type="text" class="form-control" name="pseudo" required>
            </div>
            <div class="form-group">
                <label for="pwd">Mot de passe:</label>
                <input type="password" name="password" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="pwd">Mot de passe de nouveau:</label>
                <input type="password" name="password-again" class="form-control" required>
            </div>
            <div class="form-group">
                <label for="email">Email:</label>
                <input type="email" name="email" class="form-control" required>
            </div>
            <button type="submit" name="inscription" class="btn btn-default">Inscription</button>
            <br><br><br>
        </form>
    </div>
</div>