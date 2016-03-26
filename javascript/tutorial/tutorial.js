canvas = null;
context = null;

window.onload = function()
{

    /* Chargement du contexte */
    canvas = document.getElementById('mon_canvas_tutorial');
    if(!canvas) {
        alert("Impossible de récupérer le canvas");
        return;
    }
    context = canvas.getContext('2d');
    if(!context) {
        alert("Impossible de récupérer le context du canvas");
        return;
    }

    /* Chargement du contexte fin */

    /* Chargement des images */
    /* Plusieurs solutions:
                    - Tu fais un fichier à coté tu es chargé de créer une instance de chaque image
                    que tu pourras utiliser ensuite, (regarde dans GraphicFactory) ça fonctionne avec
                    un tableau associatif (tab = {})
                    - Soit tu te fais pas chier et tu déclares directement ici comme ça:

                    var stone = Image("...")
     */

    /* Chargement des images fin */






    /* Création de l'entité personnage, la seul chose que tu vas avoir besoin ici */

    /* Fin personnage */







    /* Création de l'entité map */

    //var map[1][3];// Faut la construire avec que de l'herbe a la base par exemple, et ensuite tu viens y rajouter
                    // Une caisse au milieu si jamais c'est l'action pousser
                    // Faut surement mettre cette variable en globale pour pouvoir y accéder dans tes fonctions
                    // Attention le personnage c'est pas un element de la map, c'est quelque chose qui est posé sur la map
                    // Mais il vient pas prendre une place dans le tableau (par exemple pour le collect tu vois bien qu'il est au dessus
                    // Et qu'il remplace pas l'objet
    /* Fin entite map */






    /* Chargement des listeners */

    /* Fin listener */


};

/* Les différents fonctions, qui vont influencer directement la map en changeant leur état */
/* Tu devras ici modifier la variable map pour préparer l'execution */
/* Et ensuite tu pourras appeler une fonction qui va déclarer avec un laps de temps voir "setInterval" une fonction toute les x secondes