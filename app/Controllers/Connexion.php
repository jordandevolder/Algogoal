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
use Core\Controller;
use Core\View;
use Models\Tables\Personne;
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


    public function connexion() {

        $data['title'] = 'Projet tutoré semeste 4';

        if (isset($_POST['login'])) {
            // If input is valid then check for username and password matching

                $user = $this->userSQL->prepareFindByLogin($_POST['login']);
                if ($user == false || Password::verify($_POST['password'], $user->password) == false)
                    $error[] = 'Mauvaises données';
            else {
                // $is_valid holds an array for the errors.
                $error = false;
            }
            if (!$error) {
                $error[] = "je suis rentré";
                Session::set('loggedin', true);
                Session::set('id', $user->getId());
                Session::set('login', $user->login);
                if (isset($_POST['remember'])) {
                    $user->cookie = $this->randomkey(64);
                    $this->entityManager->save($user);
                    setcookie("remember", $user->cookie, time() + 3600 * 31 * 24,DIR);
                }
                Session::set('message', "Bienvenu $user->login");
                Session::set('message_type', 'alert-success');
                Url::redirect();
                exit();
            }
        }

        View::rendertemplate('header', $data);
        View::render('welcome/welcome', $data, $error);
        View::rendertemplate('footer', $data);
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
                Session::set('loggedin', true);
                Url::redirect();
            }
        }

    }
}

