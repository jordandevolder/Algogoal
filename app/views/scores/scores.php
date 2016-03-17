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
<div class = "page-header"></div>
<table class="table table-striped">
        <thead>
        <tr>
            <th>Pseudo</th>
            <th>Nombre d'instructions</th>
            <th>Nombre de lignes</th>
            <th>Score</th>
        </tr>
        </thead>
        <tbody>
            <?php
            foreach($data['scores'] as $p)
                echo "<tr>"."<td>".$p->pseudo."</td>"."</tr>";
            ?>
        </tbody>
</table>


