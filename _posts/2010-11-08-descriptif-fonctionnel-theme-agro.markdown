---
author: "koala"
comments: true
date: "2010-11-08T19:39:17.000Z"
layout: "post"
title: "\"Agro\" Theme"
categories: ["Themes"]

---
[![](https://www.silexlabs.org/wp-content/uploads/2010/11/capture_agro_innovations.jpg)](http://silexprod.com/koala/#/start/innovations)




[![](https://www.silexlabs.org/wp-content/uploads/2010/11/capture_agro_clients.jpg)](http://silexprod.com/koala/#/start/clients)





### [Online Demo](http://silexprod.com/koala)




# Généralités :


** Spécificité du thème :** un diaporama en arrière plan, visible sur toutes les pages du site.

**Nombre de pages :** 14

**Nombre de rubriques :** 6

[Téléchargez la version PDF de ce descriptif](../wp-content/uploads/2011/02/DESCRIPTIF-FONCTIONNEL.pdf)

[Download the english version of this functional description](../wp-content/uploads/2011/02/FUNCTIONAL-DESCRIPTION-%E2%80%93-AGRO-THEME.pdf)


### Pré-requis






  * Avoir au minimum la version 1.6.1  du Silex Serveur.


**_A noter :_** le dossier media>agro contient :

-       les jpg utilisés dans le site (photos, logos, fond, barre de navigation, etc…)

-       un dossier « gallery » avec les jpg  utilisés pour le diaporama

-       un dossier « components » avec les composants spécifiques au thème

-       le favicon du site


### Les éléments utilisés


Ce thème a été réalisé avec les éléments suivants :

**Pour le diaporama :**

-       le composant Oof « DataSelector »

-       le composant Oof « RssConnector »

-       le composant Oof « ThumbList »

-       le composant Oof « ImageDisplay »

-       le composant Oof « PlayListUi »

-       des photos en format jpg de dimension 1 800 x 900

**Pour la barre de navigation :**

-       le composant « toggle_button »

-       un jpg

-       un composant texte

**Pour les différentes pages du thème :**

-       des jpg

-       des composants texte

-       le composant « button »

<!-- more -->


# Architecture du thème


Dans ce thème toutes les pages dépendent de la page <start> ou autrement dit, tous les calques sont des calques enfants du calque <start>.

[![](https://www.silexlabs.org/wp-content/uploads/2010/11/architecture_theme_agro.jpg)](https://www.silexlabs.org/?attachment_id=1047)

**Il y a au total 6 icônes :** "Home", "Company", "Products", "Innovations", "Clients" et "Contacts".

Ces pages sont accessibles via la barre de navigation du site.

La page <Services> n’est accessible que via la page <Company>.

La page <Products.details> n’est accessible que via la page <Products>.

Les pages <About.innovations>, <Technologies> et <Directory> ne sont accessibles que via la page <Innovations>.

Les pages <Affiliate>, <Membership> et <Company.clients> ne sont accessibles que via la page « Clients ».

**Particularités :**

-      La page <Products> est accessible via la barre de navigation mais aussi via la page <Company>.

-      La page <Contacts> est accessible via la barre de navigation mais aussi via les pages <Affiliate> et <Membership>.

**_A noter :_ **la page <Home> est la page qui s’ouvre automatiquement lors du chargement du site. En « langage Silex » cela signifie que  l’icône « home » a été définie comme icône par défaut.

Libre à vous de choisir la page par défaut de votre site.


# Le thème page par page ou calque par calque




### Calque <Start>


Pour information, tous les éléments figurant sur le calque <Start>, figurent sur l’ensemble de votre site.

Ici les éléments sont :

-       les éléments nécessaires au diaporama : connector, thumbList, imageDisplay, PlayListUI et selector

-       la barre de navigation (format jpg)

-       la bordure jaune (format jpg)

-       les toggle_button (« home », « society », « products », « innovations », « clients », « contacts »)

-       un composant texte (« name ») correspondant au nom de l’entreprise, ici « Agriest. »

-       les icônes pointant vers les pages <Services>, <Products.details>, <About.innovations>, <Technologies>, <Affiliate>, <Membership> et <Company.clients>


#### Pour adapter ce thème à votre contenu


**_A noter :_** avant de maquetter quelque élément que ça soit, il vous faut désactiver le diaporama. Pour cela, allez dans le composant « selector », dans la liste des propriétés, et effacez « connector » dans la case « connector name ». Sauvegardez et rafraîchissez.

**Plusieurs paramètres sont à prendre en considération :**




  * **le nom du 1er calque**


Par défaut, le 1er calque du thème, la calque-parent ici, s’appelle « start ». Vous pouvez bien sûr renommer ce calque mais attention car il faudra intégrer cette modification partout où le nom du calque est utilisé.

Voici la liste des éléments où intégrer  les modifications ; ces modifs s’effectuent dans « action » et de la façon suivante : onRelease open :nomducalque/nomdelapageàouvrir

-       dans le calque « company » > more & more2 >

-       dans le calque « services » > return

-       dans le calque « products» > more, more2 & more3

-       dans le calque « products.details » > return

-       dans le calque « innovations» > more, more2 & more3

-       dans le calque « about.innovations » > return

-       dans le calque « directory » > return

-       dans le calque « technologies » > return

-       dans le calque « clients» > more, more2 & more3

-       dans le calque « affiliate » > return & contact

-       dans le calque « membership » > return & contact

-       dans le calque « company.clients » > return




  * **Les images du diaporama**


Bien entendu, vous pouvez changer les images du diaporama pour y mettre les vôtres.

Pour cela :

-       dans votre silex serveur, allez dans le répertoire media/agro/gallery

-       le dossier gallery contient 2 sous-dossiers : thumb et full-sized

-       remplacez les images existantes par celles de votre choix

**_A noter :_** dans le dossier <thumb>, il est recommandé de mettre vos images en miniature pour une question de chargement. Peu importe la qualité visuelle des images dans votre dossier <thumb> car celles-ci ne seront pas visibles sur votre site.

Vous pouvez mettre autant d’images que vous le désirez.

Pour augmenter ou diminuer le temps de passage d’une image à une autre, allez dans le composant « imageDisplay » ; dans la liste des propriétés modifiez selon vos besoins le « time before auto next ».

Pour modifier les dimensions et l’emplacement du diaporama, modifier les paramètres « x » et « y » pour la position, et « width » et « height » pour les dimensions.




  * **Les rubriques**


Les rubriques ici sont au nombre de 6 : « Home », « Company », « Products », « Innovations », « Clients » et « Contacts ».

Elles sont matérialisées par le composant « toggle_button ».

Vous pouvez :

-       renommer chacune de ces rubriques ; pour cela sélectionnez votre toggle_button, allez dans la liste des propriétés, et dans chacun des « labels » (4 au total), éditez votre texte.

-       Modifier le style, la police et la couleur de votre texte pour chacune des rubriques (au moment où vous éditez dans chacun des « labels »)

-       Ajouter ou supprimer des rubriques

**_A noter :_** chaque rubrique ouvre une page lui correspondant. Si vous modifiez le titre d’une rubrique, pensez également à modifier le nom de la page qu’elle ouvre (« name of the page » dans les propriétés du toggle_button concerné).

**_A noter 2 :_** en ce qui concerne l’aspect visuel et l’animation du toggle_button, vous ne pouvez effectuer des modifications qu’à partir du fichier .fla du toggle_button.




  * **Le composant texte**


Comme tous les composants texte, vous pouvez en modifier le contenu, le style, la police, la couleur, le déplacer ou le supprimer.


  * **Les icônes pointant vers d’autres pages**


En l’état actuel, il existe 7 icônes pointant vers les pages suivantes : « Services », « Products.details », « About.innovations », « Technologies », « Affiliate », « Membership » et « Company.clients ».

Ces icônes permettent aux actions onRelease open : etc… de fonctionner.

Elles sont fonction du nombre de pages supplémentaires effectives sur votre site.

Vous pouvez en ajouter, en supprimer ou modifier le nom des pages qu’elles ouvrent (« name of the page » dans les propriétés de l’icône).

_A noter :_ ces icônes ne sont pas visibles sur votre site mais figurent bien sur votre calque <Start>.


### Calque <Home>


Ce calque a été défini comme calque par défaut. C’est donc sur la page « Home » que l’on arrive à l’ouverture du site.

Comme mentionné dans la partie « Architecture du site », libre à vous de définir une autre page par défaut, ou encore de ne définir aucune page par défaut.

**_A noter :_** aucun élément ne figure sur le calque « home ». Il s’agit d’un parti pris pour permettre aux visiteurs de visualiser le diaporama dans son intégralité.


### Calque « Company »


Sur ce calque apparaît un élément nouveau : le fond (background).

Ce fond se retrouve également sur tous les autres calques (sauf le calque <home>).

Il s’agit d’un jpg. Les dimensions sont w = 1100 et h= 600 ; l’opacité est à 80 de sorte à ce que les images du diaporama puissent être visibles en arrière plan.

Vous pouvez bien sûr modifier la taille du fond, sa position et son opacité.

Les autres éléments qui composent également ce calque (cette page) sont :

-       des composants  texte (title, paragraph, list)

-       des images (format jpg)

-       2 composants « button » ; 1 qui ouvre la page « Services » et 1 autre qui ouvre la page « Products »

Vous pouvez :

-       modifier la police, la taille, le caractère, la couleur, déplacer, ajouter ou supprimer les composants texte

-       importer vos propres images, conserver celles existantes ou les supprimer

-       ajouter ou supprimer les composants « button ». Vous pouvez également les modifier. Pour cela, si vous voulez changer l’intitulé, sélectionnez votre « button », allez dans la liste des propriétés et éditez le texte que vous souhaitez.

Si vous voulez changer le nom de la page qu’ouvre ce bouton, changez le « name of the page » dans la liste des propriétés, modifiez en conséquence votre action sur ce bouton, et surtout n’oubliez pas de modifier le « name of the page » de l’icône correspondante sur  le calque <Start> (voir calque <Start> => « les icônes pointant vers d’autres pages »).


### Les autres calques


Les calques restants (<Services>, <Products>, <Products.details>, <Innovations>, <About.innovations>, <Directory>, <Technologies>, <Clients>, <Affiliate>, <Membership>, <Company.clients> et <Contacts>) sont composés des mêmes types d’éléments et dans la même logique que le calque <Company>.

Vous pouvez donc vous reporter aux explications du calque <Start> ainsi qu’à la partie « Architecture du thème » pour les modifiez selon vos besoins.


### Paramètres


**Flash Player :** actuellement le site est en Flash Player 8, ce qui signifie que les animations en flash  9 et 10 ne fonctionnent pas.
Vous pouvez changer facilement la version du Flash Player depuis votre Manager.

**Dimensions du site :** 1 800 x 900 – vous pouvez changer ces dimensions toujours à partir de votre Manager.

**Icône (favicon) :** le favicon du site a été personnalisé (voir à gauche de la barre d’adresse de votre navigateur). Libre à vous de le garder tel quel ou de mettre votre propre favicon. Pour cela, intégrez votre favicon (extension en .ico obligatoire) dans votre répertoire media/votresite (ici media/agro) et modifiez le chemin, en fonction, depuis votre Manager dans le champs <icône> (ici : media/agro/favicon.ico).


# Pour finir...


Une fois que vous avez fini vos modifications, n’oubliez pas de retourner sur le calque <Start>, de sélectionner le « selector » et, dans la liste des propriétés, de rajouter « connector » dans la case « connector name ». Enregistrez et rafraîchissez, votre site est prêt.

_**A noter :**_ ce thème est un modèle de site pouvant être réalisé avec Silex. Les pages qui le composent sont une suggestion de présentation. Vous pouvez vous servir de ce thème comme d’une base ou vous en servir tel quel en intégrant seulement vos contenus.

Libre à vous d’exprimer votre créativité et de maquetter comme bon vous semble !

_**A noter 2 : **_ en complément de ce descriptif fonctionnel, n’hésitez pas à consulter l'[aide en ligne Silex](http://community.silexlabs.org/silex/aide/).

Bon site !

_Ce thème et le descriptif associé ont été réalisés par Isabelle Barros - Les photos utilisées pour ce thème proviennent de [photo libre](http://www.photo-libre.fr/)_

_Si ce thème vous plait mais que vous n'avez ni le temps ni l'envie de l'adapter à vos besoins, [contactez l'association Silex Labs](mailto:contact@silexlabs.org) qui vous mettra en relation avec les free-lances compétents en la matière.
_

[Téléchargez la version PDF de ce descriptif](https://www.silexlabs.org/wp-content/uploads/2011/02/DESCRIPTIF-FONCTIONNEL.pdf)

[Download the english version of this functional description](https://www.silexlabs.org/wp-content/uploads/2011/02/FUNCTIONAL-DESCRIPTION-–-AGRO-THEME.pdf)


