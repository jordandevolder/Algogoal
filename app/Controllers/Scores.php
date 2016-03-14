<?php
/**
 * Created by PhpStorm.
 * User: Jordan
 * Date: 03/02/2016
 * Time: 23:23
 */


namespace Controllers;

use Core\Controller;
use Core\View;
use Models\Queries\PersonneSQL;
use Helpers\DB\EntityManager;

class Scores extends Controller
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
        $data['title'] = "Les scores";
        $data['pres'] = "Voici la vue des scores qui permettra d'afficher les scores des différents joueurs de la base de donnée";
        $userSQL = new PersonneSQL();
        $user = $userSQL->prepareFindAll()->execute();
        $data['scores'] = $user;
        // /!\ A ajouter dans le tableau data les scores correspondant au joueur quand il y aura des scores


        View::renderTemplate('header', $data);
        View::render('scores/scores', $data);
        View::renderTemplate('footer', $data);
    }

}
