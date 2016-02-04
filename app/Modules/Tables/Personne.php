<?php

/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 04/02/2016
 * Time: 10:56
 */
class Personne
{
    private $pseudo;
    private $motdepasse;
    private $mail;

    public function __construct($pseudo, $motpasse, $mail)
    {
        $this->pseudo=$pseudo;
        $this->motdepasse=$motpasse;
        $this->mail=$mail;
    }



}