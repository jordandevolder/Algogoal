<?php
/**
 * Created by PhpStorm.
 * User: moz
 * Date: 28/01/16
 * Time: 15:19
 */

namespace Controllers;


use Core\Controller;
use Core\View;

class Connexion extends Controller
{


    public function connexion()
    {
        $data['infosConnexion'] = "Voici la page de connexion";

        View::renderTemplate('header', $data);
        View::render('connexion/connexion', $data);
        View::renderTemplate('footer', $data);
    }
}