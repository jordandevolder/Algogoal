<?php
use Helpers\Session;
?>

<div class="page-header">
    <h1><?php echo $data['title'] ?></h1>
</div>

<?php
if(Session::get('loggedin') == true) {
    echo "<p>Heureux de te voir aventurier ! Prêt pour ton initiation à l'algorithmique ? Voici les différentes niveaux,
        certains ne sont peut être pas visible car tu n'as simplement pas encore terminé les anciens, n'oublie pas que pour
        pouvoir avancer dans les niveaux, il faut avoir fini tout les précédents en ramassant le lingot d'or !!</p>
        <br> <p> Bonne chance !</p>";

        echo "
        <ul>
            <li><a href=\"/projet/play/1\">Niveau 1</a></li>
            <li><a href=\"/projet/play/2\">Niveau 2</a></li>
            <li><a href=\"/projet/play/3\">Niveau 3</a></li>
            <li><a href=\"/projet/play/4\">Niveau 4</a></li>
      </ul>
       ";
}
else
    echo "<p>Si vous souhaitez jouer, vous devriez d'abord vous créez un compte ou vous connectez !</p>";
?>
