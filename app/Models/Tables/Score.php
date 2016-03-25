<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 17/03/2016
 * Time: 17:35
 */

namespace Models\Tables;

class Score
{
    public $idPlayer;
    public $idMap;
    public $nbInstructions;
    public $nbLignes;
    public $score;

   public function __construct($idPlayer = 0, $idMap=0, $nbInstructions=0, $nbLignes=0, $score=0)
   {
       $this->idMap=$idMap;
       $this->idPlayer=$idPlayer;
       $this->nbInstructions=$nbInstructions;
       $this->nbLignes=$nbLignes;
       $this->score=$score;
   }

}