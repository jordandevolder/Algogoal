<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 17/03/2016
 * Time: 17:35
 */

namespace Models\Tables;

use Helpers\DB\Entity;

class Score
{
    public $idPlayer;
    public $idMap;
    public $nbInstructions;
    public $nbLignes;

    public function __construct($idMap, $idPlayer, $nbInstructions, $nbLignes)
    {
        $this->idMap=$idMap;
        $this->idPlayer=$idPlayer;
        $this->nbInstructions=$nbInstructions;
        $this->nbLignes=$nbLignes;
    }

}