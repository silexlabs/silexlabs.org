---
layout: post
title: Le nouveau deep linking silex

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex
- The Blog
tags:
- innovation
- new
meta: {}

display_name: Silex Labs
first_name: Silex Labs
last_name: ''
permalink: "/le-nouveau-deep-linking-silex/"
---

__________________________________________________________________________

Silex, deep linking, référencement, sitemap,...

__________________________________________________________________________

Au cours de la navigation dans un site Silex, l'adresses qui est affichée dans la barre d'adresse de votre navigateur (zone de texte horizontale en haut) est modifiée pour refléter l'endroit où vous vous trouvez dans le site. Elle est aussi modifiée lorsque vous arrivez sur un site Silex en suivant un lien depuis un site ou depuis google.

[caption id="attachment_1326" align="aligncenter" width="548" caption="la barre d'adresse de votre navigateur
: l'adresse du site, le "?", le nom du site, le "#", et enfin, le deep link (chemin de la page) qui est modifié au cours de la navigation"]![nav]({{ site.baseurl }}/assets/nav.jpg "barre dadresse")[/caption]

Cet article présente le fonctionnement de Silex concernant les adresses des sites et des pages. Nous verrons aussi que ce fonctionnement a changé dans la version 1.5 de Silex (Silex Comet).

Cela a une grande influence sur le référencement, nous verrons pourquoi.

**Le deep linking dans Silex Comet**

Prenons l'exemple de mon site CV


_____________________________________

définition du deep linking




*   [définition "lien profond" wikipedia](http://fr.wikipedia.org/wiki/Lien_profond)
*   [Un article pas mal sur le deep linking](http://blog.quamediagroup.com/deeplinking-pour-flash-swfaddress.html)
*   [Définition de wikipedia en anglais](http://en.wikipedia.org/wiki/Deep_linking)

_______________________________________





_____________________________________

le # et le deeplinking

Dans une URL, seul ce qui se trouve après un # peut être modifié sans que le navigateur recharge entièrement la page. Ca nous vient des ancres HTML, et c'est pour que Silex puisse modifier l'adresse au cours de la navigation dans le site que nous devons insérer un # après le nom du site et avant le nom des pages.

_____________________________________

Cependant, la réécriture n'a pas lieu lorsqu'un moteur de recherche est détecté


**Le deep linking d'avant la Comet**



La réécriture d'URL était faite à la volée


_____________________________________

Le module Mod-rewrite



_____________________________________

****Pourquoi cette différence est-elle si importante?****




Et donc
: 
*   plus besoin du module Mod-rewrite pour réécrire les URLs. Les sites Silex pourront donc être vus par les moteurs de recherche quel que soit votre hébergeur, même s'il est très sécurisé ou très bon marché (ou gratuit :).


****Quelles sont les conséquences****

*   on ne peut plus passer d'un site à un autre sans recharger toute la page et donc tout silex, même si les deux sites sont sur le même serveur Silex
*   on peut désormais se passer du nom du site pour le site par défaut


****FAQ****

Pourquoi réécrire les liens, pourquoi ne pas laisser google indexer directement les liens avec le "#"?




Comment google trouve-t-il toutes les pages de mon site? Il n'y a pas de liens vers toutes les pages sur internet...

> Voici un exemple de parcours suivi par les bots des moteurs de recherche
: 

2.  le bot suit le lien, Silex lui retourne l'équivalent HTML du contenu de la page "experiences" et indexe ce contenu en prenant en compte les mots clefs de la page du site initial, celui qui contenait le lien.


5.  il ouvre ce sitemap-index qui est généré par Silex lorsqu'on fait "indexer" dans le manager

: 


> Vous remarquerez que ces liens sont des permalinks sans # pour que le bot voit les équivalent HTML des pages, cf explication ci-dessus.

> Le bot a donc tous les liens et peut indexer les pages, même celles qui n'étaient pas linkées dans un article ou ailleurs sur le site.