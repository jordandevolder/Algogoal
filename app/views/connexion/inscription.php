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

<?php echo $data['inscription'] . PHP_EOL; ?>

<?php if (isset($data['erreurs'])) {
    foreach($data['erreurs'] as $err)
        echo "<p class=\"alert-danger\">".$err."<br /></p>";
}
?>

<form action="linscription" method="post">
    Nom d'utilisateur: <input type="text" name="pseudo"><br/>
    Mot de passe: <input type="password" name="password"><br/>
    Mot de passe de nouveau: <input type="password" name="password-again"><br/>
    Email: <input type="email" name="email""><br/>
    <input type="submit" name="inscription"">
</form>
