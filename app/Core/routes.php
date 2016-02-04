<?php
/**
 * Routes - all standard routes are defined here.
 *
 * @author David Carr - dave@daveismyname.com
 * @version 2.2
 * @date updated Sept 19, 2015
 */

/** Create alias for Router. */
use Core\Router;
use Helpers\Hooks;

/** Define routes. */
Router::any('', 'Controllers\Welcome@index');
Router::any('subpage', 'Controllers\Welcome@subPage');
Router::any('laconnexion','Controllers\Connexion@connexion');
Router::any('connexion','Controllers\Connexion@index');
Router::any('regles','Controllers\Regles@index');
Router::any('scores','Controllers\Scores@index');
Router::any('inscription','Controllers\Connexion@indexInscription');
Router::any('linscription','Controllers\Connexion@inscription');

/** Module routes. */
$hooks = Hooks::get();
$hooks->run('routes');

/** If no route found. */
Router::error('Core\Error@index');

/** Turn on old style routing. */
Router::$fallback = false;

/** Execute matched routes. */
Router::dispatch();
