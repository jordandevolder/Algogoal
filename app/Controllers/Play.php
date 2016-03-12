<?php
namespace Controllers;

use Core\Controller;
use Core\View;

class Play extends Controller
{
    /**
    * Call the parent construct
    */
    public function __construct()
    {
        parent::__construct();
        $this->language->load('Welcome');
    }


    public function index(){
        $data['title'] = "Index des niveaux pour jouer";


        View::renderTemplate('header', $data);
        View::render('play/playIndex', $data);
        View::renderTemplate('footer', $data);
    }

    public function playLevel($id){
        $data['title'] = "Amusez vous bien sur cette map ! ";
        $data['level'] = "Level: ".$id;



        View::renderTemplate('header', $data);
        View::render('play/playLevel', $data);
        View::renderTemplate('footer', $data);
    }
}
?>