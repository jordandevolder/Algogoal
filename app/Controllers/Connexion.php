<?php
/**
 * Created by PhpStorm.
 * User: moz
 * Date: 28/01/16
 * Time: 15:19
 */

namespace Controllers;

use Helpers\Gump;
use Core\Controller;
use Core\View;
use Models\Queries\PersonneSQL;

class Connexion extends Controller
{
    private $userSQL;

    public function __construct() {
        parent::__construct();
        $this->userSQL = new PersonneSQL();
    }



    public function index()
    {
        $data['title'] = 'Connexion';
        View::renderTemplate('header', $data);
        View::render('connexion/connexion', $data);
        View::renderTemplate('footer', $data);
    }

    public function connexion()
    {
        echo $_POST['login'];
        //Sanitize Data using Gump helper
        $_POST = Gump::sanitize($_POST);

        if (isset($_POST['login'])) {
            //Validate data using Gump
            $is_valid = Gump::is_valid($_POST, array(
                'login' => 'required',
                'password' => 'required' //|max_len,18|min_len,6
            ));

            // If input is valid then check for username and password matching
            if ($is_valid === true) {
                $user = $this->userSQL->prepareFindByLogin($_POST['login']);

                if ($user == false || Password::verify($_POST['password'], $user->password) == false)
                    $error[] = 'Mauvaises données';
            } else {
                // $is_valid holds an array for the errors.
                $error = $is_valid;
            }
            if (!$error) {

                Session::set('loggedin', true);
                Session::set('id', $user->getId());
                Session::set('login', $user->login);
                if (isset($_POST['remember'])) {
                    $user->cookie = $this->randomkey(64);
                    $this->entityManager->save($user);
                    setcookie("remember", $user->cookie, time() + 3600 * 31 * 24, DIR);
                }
                Session::set('message', "Bienvenu $user->login");
                Session::set('message_type', 'alert-success');
                Url::redirect();
                exit();
            }
        }

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
        $_POST = Gump::sanitize($_POST);
        if (isset($_POST['login'])) {
            //Validate data using Gump
            $is_valid = Gump::is_valid($_POST, array(
                'pseudo' => 'required|alpha_numeric',
                'email' => 'required|valid_email',
                'password' => 'required', //|max_len,18|min_len,6
                'password-again' => 'required' //|max_len,18|min_len,6
            ));

            if ($is_valid === true) {
                //Test for duplicate username`
                $user = $this->userSQL->prepareFindByLogin($_POST['login']);

                if ($_POST['password'] != $_POST['password-again'])
                    $error[] = "Les deux mots de passes doivent être identiques";

                if ($user != false)
                    $error[] = 'Ce compte existe déjà';

                $user = $this->userSQL->prepareFindByEmail($_POST['email'])->execute();
                //Test for dupicate email address
                if (count($user) > 0)
                    $error[] = 'Ce compte email existe déjà.';

            } else
                $error = $is_valid;

            if (!$error) {
                //Register and return the data as an array $data[]
                $user = new Personne($_POST['login'], $_POST['email'], Password::make($_POST['password']), "");
                $this->entityManager->save($user);
                Session::set('id', $user->getId());
                Session::set('login', $user->login);
                Session::set('loggedin', true);
                Url::redirect();
            }
        }

    }
}

