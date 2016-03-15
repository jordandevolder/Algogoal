<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:30
 */
?>

<div class="page-header">
    <h1><?php echo $data['title'] ?></h1>
</div>
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


