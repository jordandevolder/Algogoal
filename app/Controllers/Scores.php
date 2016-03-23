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
use Models\Queries\scoreSQL;

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
        View::renderTemplate('header', $data);
        View::render('scores/indexScores', $data);
        View::renderTemplate('footer', $data);
    }


    public function affichageScore($num)
    {
        $data['title'] = "Les scores";
        $userSQL = new PersonneSQL();
        $user = $userSQL->prepareFindAll()->execute();

        // /!\ A ajouter dans le tableau data les scores correspondant au joueur quand il y aura des scores
        $score = new ScoreSQL();
        $condi = array();
        foreach($user as $p)
        {
            $condi[] = "idPlayer = ".$p->id." and idMap =".$num;

        }
        $scores = array();
        $infos = array();
        for($i=0;$i<count($condi);$i++)
        {
            $scores[] = $score->prepareFindWithCondition($condi[$i])->execute();
        }
        for($i=0;$i<count($scores);$i++)
        {
            for($j=0;$j<count($scores[$i]);$j++)
                $infos[] = $scores[$i][$j];
        }

        $data['scores'] = $infos;
        $data['taille'] = count($infos);
        for($i=0;$i<count($infos);$i++)
        {
            $data['scores']['pseudos'][] = $userSQL->getPseudoById($data['scores'][$i]->idPlayer);
        }
        View::renderTemplate('header', $data);
        View::render('scores/scores', $data);
        View::renderTemplate('footer', $data);
    }

}
