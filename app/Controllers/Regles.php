<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:22
 */

namespace Controllers;

use Core\Controller;
use Core\View;
class Regles extends Controller
{

    /**
     * Call the parent construct
     */
    public function __construct()
    {
        parent::__construct();
        $this->language->load('Welcome');
    }


    public function index()
    {
        $data['title'] = "Les règles";
        $data['regles'] = "Voici ici la vue des règles du jeu, qui comportera aussi quelques explications sur instructions en programmation";


        View::renderTemplate('header', $data);
        View::render('regles/regles', $data);
        View::renderTemplate('footer', $data);
    }
}
