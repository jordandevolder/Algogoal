<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 17/03/2016
 * Time: 17:35
 */

namespace Models\Tables;

use Helpers\DB\Entity;

class Score extends Entity
{
    public $idPlayer;
    public $idMap;
    public $nbInstructions;
    public $nbLignes;

   /* public function __construct($idMap, $idPlayer, $nbInstructions, $nbLignes)
    {
        parent::__construct();
        $this->idMap=$idMap;
        $this->idPlayer=$idPlayer;
        $this->nbInstructions=$nbInstructions;
        $this->nbLignes=$nbLignes;
    }*/

}