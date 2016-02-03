<?php
/**
 * Created by PhpStorm.
 * User: moz
 * Date: 27/01/16
 * Time: 19:33
 */

use Helpers\Form;

$form_connexion = new Form('formulaire_connexion');


$form_connexion->method('POST');


$form_connexion->add('Text', 'nom_utilisateur')->label("Votre nom d'utilisateur");


$form_connexion->add('Password', 'mot_de_passe')->label("Votre mot de passe");


$form_connexion->add('Submit', 'submit')->value("Connectez-moi !");


// Pré-remplissage avec les valeurs précédemment entrées (s'il y en a)

$form_connexion->bound($_POST);
?>
