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
        echo "<ul>";
        $lvl = -1;
        while($lvl != Session::get('level')){
            $link = "/projet/play/".($lvl+2);
            echo "
                <li><a href='".$link."'>Niveau ".($lvl+2)."</a></li>";
            $lvl++;
        }
        echo "</ul>";

}
else
    echo "<p>Si vous souhaitez jouer, vous devriez d'abord vous créez un compte ou vous connectez !</p>";
?>
