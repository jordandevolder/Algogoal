<?php
/**
 * Created by PhpStorm.
 * User: Quentin
 * Date: 15/03/2016
 * Time: 18:32
 */

namespace Controllers;

use Core\Controller;
use Core\View;
class Equipe extends Controller
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
        $data['title'] = "L'équipe";
        $data['equipe'] = "Cette page vous permettra d'en savoir un peu plus sur l'équipe qui a fait ce projet.";


        View::renderTemplate('header', $data);
        View::render('equipe/equipe', $data);
        View::renderTemplate('footer', $data);
    }
}
