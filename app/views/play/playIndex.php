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
        certains ne sont peut être pas visibles car tu n'as simplement pas encore terminé les anciens, n'oublie pas que pour
        pouvoir avancer dans les niveaux, il faut avoir fini tous les précédents en ramassant le lingot d'or !!</p>
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
    echo "<p>Si vous souhaitez jouer, vous devriez d'abord vous créer un compte ou vous connecter !</p>";
?>
