<?php
/**
 * Created by PhpStorm.
 * User: moz
 * Date: 27/01/16
 * Time: 19:33
 */
?>

<form method='post' action="/projet/connexion/">
    <h1>Connectez-vous</h1>
    <fieldset id="inputs">
        <input id="login" type="text" placeholder="Pseudo" autofocus required>
        <input id="password" type="password" placeholder="Mot de passe" required>
    </fieldset>
    <fieldset id="actions">
        <input type="submit" id="submit" value="Connexion">
        <a href="">Créer un compte ici</a>
    </fieldset>
</form>