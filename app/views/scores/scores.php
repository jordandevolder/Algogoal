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
            <!-- <th>Score tableau 1</th>
            <th>Score tableau 2</th>
            à decommenter dès qu'on rajoute les scores
            -->
        </tr>
        </thead>
        <tbody>
            <?php
            foreach($data['scores'] as $p)
                echo "<tr>"."<td>".$p->pseudo."</td>"."</tr>";
            ?>
        </tbody>
</table>


