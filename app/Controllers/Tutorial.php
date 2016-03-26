<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 26/03/2016
 * Time: 21:52
 */

namespace Controllers;

use Core\Controller;
use Core\View;
class Tutorial extends Controller
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
        $data['title'] = "Tutoriel";
        $data['regles'] = "Apprenez les bases du jeu grâce à ce tutoriel";


        View::renderTemplate('header', $data);
        View::render('tutorial/tutorial', $data);
        View::renderTemplate('footer', $data);
    }
}
