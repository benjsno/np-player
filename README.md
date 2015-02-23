**Version**: v1.0

*Déposez le dossier `np-player` à la racine du site. Les dossiers `css`, `pics` et le fichier `index.php` sont nécessaires uniquement pour l'exemple d'intégration.*

NOUS PROD Player
==========================
Ce player HTML5 charge des vidéos depuis [Vimeo](https://vimeo.com/).
Il propose, sous le player vimeo, des infos cliquables concernant la vidéo en lecture  et un menu de visuels cliquables lançant chacun une vidéo. 
Les données du player sont chargées depuis un fichier JSON externe se trouvant dans le dossier np-player/data/

*Pour un player vimeo le plus sobre possible, 
il faut un compte `vimeo plus` pour pouvoir supprimer la barre de control
dans les paramètres vidéos d'intégration.*

## Usage ##

###Définir les données du player###
Créer un dossier dans np-player/data/ dans lequel on crée un fichier json du même nom.

Par exemple 
`np-player/data/2015-03-01/2015-03-01.json`
ou
`np-player/data/mars2015/mars2015.json`



Données du fichier JSON :

Pour chaque vidéo on doit définir

-   title : le titre (ex: nom d'artiste)
-   subtitle : le sous-titre (ex: date et lieu du concert)
-   pict_url : l'URL de l'image qui s'affichera dans le menu
-   vi_video_id : L'id de la vidéo Vimeo
-   title_url : le lien quand on clique sur le titre (ex:fiche artiste)
-   subtitle_url : le lien quand on clique sur le sous-titre (ex:fiche artiste, agenda concert ou réservation)
-   book_url : le lien quand on clique sur "réserver" (ex:URL FNAC spectacle)

```json
{
    "0":{
		"title" : "The Prodigy",
		"subtitle" : "15 avril 2015 - Le Zénith / Paris",
		"pict_url" : "http://www.nousproductions.com/pics/data/artistes/photoBios/413-230x230.jpg",
		"vi_video_id" : "97933438",
		"title_url" : "http://www.nousproductions.com/artistes-the-prodigy,363.php",
		"subtitle_url" : "http://www.nousproductions.com/concerts.php",
		"book_url" : "http://www.fnacspectacles.com/place-spectacle/manifestation/Musique-electronique-THE-PRODIGY-ZPPRO.htm#/disponibilite/2fcf7dd8c0a8280b415df6c424781265/normale"
	}
}
```


###Intégrer le player dans une page###
Le player avec menu est une iframe intégrable facilement. On indique à l'iframe quels données charger en passant le nom du dossier via une variable d (?d=nomdudossier)
```html
<iframe id="np-player" scrolling="no" frameborder="0" src="./np-player/iframe/np-player.php?d=2015-03-01" width="592" height="506"></iframe>
```

