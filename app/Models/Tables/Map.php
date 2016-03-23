<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 17/03/2016
 * Time: 17:34
 */

namespace Models\Tables;

use Helpers\DB\Entity;

class Map extends Entity
{

    public function __construct($id)
    {
        $this->id=$id;

    }

}