<?php

/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 04/02/2016
 * Time: 10:56
 */

namespace Models\Tables;

use Helpers\DB\Entity;

class Personne extends Entity
{
    private $pseudo;
    private $motdepasse;
    private $mail;
    public $cookie;

    public function __construct($pseudo = "", $mail = "", $motpasse = "", $cookie = "", $id = false)
    {
        parent::_construct();
        $this->pseudo = $pseudo;
        $this->motdepasse = $motpasse;
        $this->mail = $mail;
        $this->id = $id;
        $this->cookie = $cookie;
    }


}

