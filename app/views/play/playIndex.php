<?php
use Helpers\Session;
?>

<div class="container">
    <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
        <div class="col-lg-3"></div>
    </div>
<div>
<div class = "page-header"></div>
<?php
if(Session::get('loggedin') == true) {
    echo "<p>Heureux de te voir aventurier ! Prêt pour ton initiation à l'algorithmique ? Voici les différents niveaux,
        certains ne sont peut être pas visibles car tu n'as pas encore terminé les anciens ; n'oublie pas que pour
        pouvoir avancer dans les niveaux, il faut avoir fini tous les précédents en ramassant <b>le lingot d'or !!</b></p>
        <br> <p> Bonne chance !</p>";
        echo "<ul>";
        $lvl = -1;
        while($lvl != Session::get('level')){
            $link = "/projet/play/".($lvl+2);
            echo "
                <li class = \"levelList\"><a href='".$link."'>Niveau ".($lvl+2)."<span class=\"glyphicon glyphicon-flag\"></a></li>";
            $lvl++;
        }
        echo "</ul>
        <div class=\"container\">
        <div class=\"row\">
        <div class=\"col-lg-4\"></div>
        <div class=\"col-lg-6\">
            <img class=\"imgIndex\" src=\"image/player_bot.png\" class=\"img-responsive img-rounded\"><br>
            <img class=\"imgIndex\" src=\"image/stone.png\" class=\"img-responsive img-rounded\">
        </div>
        <div class=\"col-lg-4\"></div>
        </div>";

}
else
    echo "<p>Si tu souhaites jouer, tu devrais d'abord te <b>créer un compte</b> ou <b>te connecter</b> !</p><br><br>
            <div class=\"container\">
            <div class=\"row\">
             <div class=\"col-lg-3\"></div>
             <div class=\"col-lg-2\"><img class=\"imgIndex\" src=\"image/player_right.png\" class=\"img-responsive img-rounded\"></div>
             <div class=\"col-lg-2\"><img class=\"imgIndex\" src=\"image/monster.png\" class=\"img-responsive img-rounded\"></div>
             <div class=\"col-lg-3\"></div>
         </div>
<div>";
?>
