---
layout: post
title: Développez une application web qui n'explose pas - Programmation d'un démineur en Elm

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories: []
tags: []

_edit_last: '2427'
_EventShowMapLink: '1'
_EventShowMap: '1'




_EventDuration: '7200'
_EventCurrencySymbol: ''
_EventCurrencyPosition: suffix
_EventCost: ''
_EventURL: ''
_EventTimezone: Europe/Paris
_EventTimezoneAbbr: CEST
_yoast_wpseo_primary_post_cat: ''
_EventVenueID: '207612'
_thumbnail_id: '207847'

display_name: Tariq
first_name: Tariq
last_name: Benezza
permalink: "/event/developpez-application-web-nexplose-programmation-dun-demineur-elm/"
---

Qu'est ce que Elm ?
===================

Elm (https://elm-lang.org/ ) est un langage permettant de créer des applications web fiables. Le plus étonnant est que cette fiabilité est obtenue avec un très faible nombre de concepts, faisant de Elm un langage rapide à apprendre.

Au programme
============

Nous verrons à quel point "The Elm Architecture" rend la conception d'application web d'une facilité déconcertante, grâce à un modèle de circulation des données à sens unique (ayant inspiré le célèbre Redux de React).

L'atelier sera composé de plusieurs étapes que vous devrez compléter, chacun pourra avancer à son rythme. Nous implémenterons le célèbre jeu du démineur !

En gros nous parlerons de
: 
*   "The Elm Architecture"
*   Définir des "messages"
*   La syntaxe
: tout est expression !
*   Manipuler des listes
*   Les "commandes" ou comment effectuer des "effets de bord"

![meme-demineur]({{ site.baseurl }}/assets/meme-demineur-687x458.jpg)

Pré-requis
==========

*   Connaissance minimaliste du HTML (les balises `div` et `button` suffiront ;))
*   Avoir un peu programmé dans n'importe quel langage (savoir grossièrement ce qu'est une fonction suffit)
*   Amener un ordinateur portable. L'atelier est prévu pour être suivi grâce à des outils entièrement en ligne dans le navigateur, vous pouvez donc venir "les mains dans les poches". Si vous désirez travailler en local sur votre machine, installez
: 
*   "npm" (https://nodejs.org/en/),
*   puis "elm" et "elm-format" ("npm install -g elm elm-format" en console). Si vous rencontrez des soucis de droits d’installation sous linux, essayez cette solution(https://docs.npmjs.com/resolving-eacces-permissions-errors-when-installing-packages-globally) puis relancez la commande précédente,
*   le plugin Elm pour votre éditeur (activez le "elm-format on save", ça change la vie!). L'un des plugins le plus abouti actuellement est celui d'IntelliJ.

Notre amphitryon du soir
: ==========================

Inutile de les présenter [leboncoin](https://www.leboncoin.fr/) est juste le premier site de petites annonces en France, la team est top et elle nous accueille dans ses locaux pour le dernier atelier avant l'été.

L'animateur
===========

![sebsheep]({{ site.baseurl }}/assets/sebsheep.jpeg)

Sébastien Besnier est professeur de mathématiques et informatique en CPGE. Insatiable curieux des langages informatiques, il maintient et améliore sur son temps libre https://www.vitanim.fr un site de gestion d'animateurs de colonies de vacances pour l'association Vitacolo.

Comment s'inscrire ?
====================

Tout se passe sur [meetup](https://www.meetup.com/Silex-Labs-Aperopensource/events/261670239/). Les places sont limitées !