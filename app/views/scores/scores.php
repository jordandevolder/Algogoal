<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:30
 */
?>

<div class="container">
    <div class="row">
        <div class="col-lg-3"></div>
        <div class="col-lg-6"><h1 class="grandTitrePage"><?php echo $data['title'] ?></h1></div>
        <div class="col-lg-3"></div>
    </div>
<div>

<div class="page-header">
    <a href="/projet/scores/1"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-play-circle"></span> Niveau 1</button></a>
    <a href="/projet/scores/2"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-play-circle"></span> Niveau 2</button></a>
    <a href="/projet/scores/3"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-play-circle"></span> Niveau 3</button></a>
    <a href="/projet/scores/4"><button type="button" class="btn btn-primary"><span class="glyphicon glyphicon-play-circle"></span> Niveau 4</button></a>

</div>
    <table class="table table-striped">
        <thead>
        <tr>
            <th>Pseudo</th>
            <th>Nombre d'instructions executées</th>
            <th>Nombre de lignes</th>
            <th>Score</th>
        </tr>
        </thead>
        <?php
        for($i=0;$i<$data['taille'];$i++){
        echo "<tr>
            <td>".$data['scores']['pseudos'][$i]."</td>
            <td>".$data['scores'][$i]->nbInstructions."</td>
            <td>".$data['scores'][$i]->nbLignes."</td>
            <td>".$data['scores'][$i]->score."</td>
        </tr>";
        }
        ?>
        <tbody>

        </tbody>
    </table>


