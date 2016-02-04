<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:39
 */
?>

<div class="page-header">
	<h1><?php echo $data['title'] ?></h1>

</div>

<?php

echo $data['inscription'];

?>

<form action="linscription" method="post">
    Nom d'utilisateur: <input type="text" name="login"><br />
    Mot de passe: <input type="password" name="password"><br />
    Email: <input type="email" name="mail""><br />
    <input type="submit" name="inscription"">
</form>
