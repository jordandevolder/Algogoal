<?php
/**
 * Created by PhpStorm.
 * User: moz
 * Date: 28/01/16
 * Time: 15:19
 */

namespace Controllers;

use Helpers\DB\DBManager;
use Helpers\DB\EntityManager;
use Helpers\Gump;
use Helpers\Password;
use Helpers\Session;
use Helpers\Url;
use Helpers\AjaxHandler as Ajax;
use Core\Controller;
use Core\View;
use Models\Tables\Personne;
use Models\Tables\Score;
use Models\Queries\PersonneSQL;

class Connexion extends Controller
{
    private $userSQL;
    private $entityManager;

    public function __construct() {
        parent::__construct();
        $this->userSQL = new PersonneSQL();
        $this->entityManager = EntityManager::getInstance();
    }



    public function index()
    {
        $data['title'] = 'Connexion';
        View::renderTemplate('header', $data);
        View::render('connexion/connexion', $data);
        View::renderTemplate('footer', $data);
    }

    public function incrementLevel(){

        $levelActuel = Ajax::get('levelActuel');
        $nbInstruction = Ajax::get('tokensLength');
        $nbInstructionExecuted = Ajax::get('nbInstructions');
        $scoreValue = Ajax::get('score');
        $idJoueur = Session::get('id');
        $lvlJoueur = Session::get('level');
        echo "Nous sommes au level ".$levelActuel." le joueur est au level ".$lvlJoueur;
        if(($levelActuel-1) == $lvlJoueur){
            $sql = "insert into score values (".Session::get('id').",".$levelActuel.",".$nbInstructionExecuted.",".$nbInstruction.",".$scoreValue.");";
            $sql2 = "update personne set currentLvl = ".($levelActuel)." where id= ".$idJoueur.";";
            echo $sql;
            echo $sql2;
            $instanceofdb = $this->entityManager = DBManager::getInstance();
            $instanceofdb->prepare($sql);
            $instanceofdb->execute();
            $instanceofdb->prepare($sql2);
            $instanceofdb->execute();

            //currentLvl ++
            Session::set('level', $levelActuel);
        }
        else{
            //si le niveau du jeu est inférieur à celui du joueur, on update son score s'il est meilleur
            $user = $this->userSQL->findById(Session::get('id'));
            if($user->score < $scoreValue){
                $sql = "update score set score = ".$scoreValue.", nbInstructions= ".$nbInstructionExecuted.", nbLignes= ".$nbInstruction." where idPlayer= ".$idJoueur.";";
                $instanceofdb = $this->entityManager = DBManager::getInstance();
                $instanceofdb->prepare($sql);
                $instanceofdb->execute();
            }


        }
    }


    public function connexion() {

        $user = $this->userSQL->prepareFindByLogin($_POST['login']);
        if ($user == false || Password::verify($_POST['password'], $user->motdepasse) == false){
            // changer le render pour un url::redirect mais ajouter un message dans la session de mauvaise donnée
            $data['erreurCo'] = "Mauvaise données";
            $data['title'] = "Connexion";
            View::renderTemplate('header', $data);
            View::render('connexion/connexion', $data);
            View::renderTemplate('footer', $data);
            exit();
        }
        else {
            // $is_valid holds an array for the errors.
            $error = false;
        }
        if (!$error) {
            Session::set('loggedin', true);
            Session::set('id', $user->getId());
            Session::set('mail',$user->email);
            Session::set('login', $user->pseudo);
            Session::set('level', $user->currentLvl);

            $user->cookie = rand(0,64);
            setcookie("remember", $user->cookie, time() + 3600 * 31 * 24, DIR);

            Session::set('message', "Bienvenue $user->pseudo");
            Session::set('message_type', 'alert-success');
        }
           Url::redirect();
    }

    public function deconnexion()
    {
        Session::destroy('', false);
        Url::redirect();
    }


    public function indexInscription()
    {

        $data['title'] = "Inscription";
        $data['inscription'] = "Ici l'espace pour créer un compte";
        View::renderTemplate('header', $data);
        View::render('connexion/inscription', $data);
        View::renderTemplate('footer', $data);
    }

    public function inscription()
    {

        $data['title'] = "Inscription";
        $data['inscription'] = "Ici l'espace pour créer un compte";

        $_POST = Gump::sanitize($_POST);
        if (isset($_POST['pseudo'])) {
            //Validate data using Gump
            $is_valid = Gump::is_valid($_POST, array(
                'pseudo' => 'required|alpha_numeric',
                'email' => 'required|valid_email',
                'password' => 'required', //|max_len,18|min_len,6
                'password-again' => 'required' //|max_len,18|min_len,6
            ));

            if ($is_valid === true) {
                //Test for duplicate username`
                $user = $this->userSQL->prepareFindByLogin($_POST['pseudo']);

                if ($_POST['password'] != $_POST['password-again'])
                    $error[] = "Les deux mots de passes doivent être identiques";

                if ($user != false)
                    $error[] = 'Ce compte existe déjà';

                $user = $this->userSQL->prepareFindByEmail($_POST['email'])->execute();
                //Test for dupicate email address
                if (count($user) > 0)
                    $error[] = 'Ce compte email existe déjà.';

                $data['erreurs'] = $error;
                View::renderTemplate('header', $data);
                View::render('connexion/inscription', $data);
                View::renderTemplate('footer', $data);


            } else
                $error = $is_valid;

            if (!$error) {
                //Register and return the data as an array $data[]
                $pseudo = $_POST['pseudo']; $mail = $_POST['email']; $password = Password::make($_POST['password']);
                $user = new Personne($pseudo, $mail, $password);
                print_r($user);
                $this->entityManager->save($user);
                Session::set('id', $user->getId());
                Session::set('pseudo', $user->login);
                Session::set('level',$user->currentLvl);
                Session::set('loggedin', true);
                Url::redirect();
            }
        }

    }
}

