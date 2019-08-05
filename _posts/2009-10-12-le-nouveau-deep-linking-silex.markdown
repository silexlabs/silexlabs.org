---
author: admin
comments: true
date: 2009-10-12 17:16:19+00:00
excerpt: "<p style=\"text-align: center; \"><span style=\"font-family: mceinline;\"\
  >__________________________________________________________________________</span></p>\
  <p style=\"text-align: center;\">Silex, deep linking, référencement, sitemap,...</p>\
  <p style=\"text-align: center; \"><span style=\"font-family: mceinline;\"\
  >__________________________________________________________________________</span></p>\
  Au cours de la navigation dans un site Silex, l'adresses qui est affichée\
  \ dans la barre d'adresse de votre navigateur (zone de texte horizontale en haut)\
  \ est modifiée pour refléter l'endroit où vous vous trouvez dans le site. Elle est\
  \ aussi modifiée lorsque vous arrivez sur un site Silex en suivant un lien depuis\
  \ un site ou depuis google.[caption id=\"attachment_1326\" align=\"\
  aligncenter\" width=\"548\" caption=\"la barre d&#39;adresse de votre navigateur\
  \ : l&#39;adresse du site, le &quot;?&quot;, le nom du site, le &quot;#&quot;, et\
  \ enfin, le deep link (chemin de la page) qui est modifié au cours de la navigation\"\
  ]<img class=\"size-full wp-image-1326  \" title=\"barre dadresse\" src=\"https://www.silexlabs.org/wp-content/uploads/2009/10/nav.jpg\"\
  \ alt=\"nav\" width=\"548\" height=\"31\" />[/caption]<p style=\"text-align:\
  \ left;\">Cet article présente le fonctionnement de Silex concernant les adresses\
  \ des sites et des pages. Nous verrons aussi que ce fonctionnement a changé dans\
  \ la version 1.5 de Silex (Silex Comet).</p>Cela a une grande influence\
  \ sur le référencement, nous verrons pourquoi.<strong>Le deep linking\
  \ dans Silex Comet</strong>Prenons l'exemple de mon site CV : une page\
  \ a une adresse directe de la forme <a href=\"http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil</a> . Chaque\
  \ page étant associé à un seul lien, il s'agit d'un lien profond ou deep link.\
  <p style=\"padding-left: 30px; \">_____________________________________</p>\
  <address style=\"padding-left: 30px;\"><span style=\"text-decoration:\
  \ underline;\">définition du deep linking</span></address> <address style=\"padding-left:\
  \ 30px;\"><a href=\"http://www.linux-france.org/prj/jargonf/L/lien.html\">lien</a>\
  \ <a href=\"http://www.linux-france.org/prj/jargonf/H/hypertexte.html\">hypertexte</a>\
  \ pointant directement vers une page située à l'intérieur d'un autre <a href=\"\
  http://www.linux-france.org/prj/jargonf/S/site_web.html\">site web</a>, sur laquelle\
  \ on peut donc atterrir directement sans passer par la page d'accueil du site en\
  \ question. (<a href=\"http://www.linux-france.org/prj/jargonf/L/lien_profond.html\"\
  \ target=\"_blank\">source: linux-france.org</a>)</address> <address style=\"padding-left:\
  \ 30px;\"><li><a href=\"http://fr.wikipedia.org/wiki/Lien_profond\" target=\"\
  _blank\">définition \"lien profond\" wikipedia</a></li><li><a href=\"\
  http://blog.quamediagroup.com/deeplinking-pour-flash-swfaddress.html\" target=\"\
  _blank\">Un article pas mal sur le deep linking</a></li><li><a href=\"\
  http://en.wikipedia.org/wiki/Deep_linking\">Définition de wikipedia en anglais</a></li>\
  </address><div style=\"padding-left: 30px; \"><em>_____________________________________</em></div>\
  <!-- more -->Lorsque cette adresse directe vers une page de mon\
  \ site apparait dans un autre site, sous forme d'un lien, ce lien est appelé permalink\
  \ (cf. définitions <a href=\"http://fr.wikipedia.org/wiki/Permalien\" target=\"\
  _blank\">wikipedia en français</a> et <a href=\"http://en.wikipedia.org/wiki/Permalink\"\
  \ target=\"_blank\">en anglais</a>), car il est utilisé pour être indexé et suivi\
  \ par les moteurs de recherche qui indexent alors cette page de mon site CV.\
  Comme c'est l'adresse indexée, lorsqu'un internaute trouve ce lien suite\
  \ à une recherche google, il ouvre <a href=\"http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil</a> . Mais\
  \ cette adresse est rapidement réécrite en <a href=\"http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil</a> .\
  <p style=\"padding-left: 30px; \">_____________________________________</p>\
  <address style=\"padding-left: 30px;\"><span style=\"text-decoration:\
  \ underline;\">le # et le deeplinking</span></address> <address style=\"padding-left:\
  \ 30px;\">Dans une URL, seul ce qui se trouve après un # peut être modifié sans\
  \ que le navigateur recharge entièrement la page. Ca nous vient des ancres HTML,\
  \ et c'est pour que Silex puisse modifier l'adresse au cours de la navigation dans\
  \ le site que nous devons insérer un # après le nom du site et avant le nom des\
  \ pages.</address><p style=\"padding-left: 30px; \">_____________________________________</p>\
  Cependant, la réécriture n'a pas lieu lorsqu'un moteur de recherche est\
  \ détecté : google, lui, reçois  bien une page lorsqu'il demande <a href=\"http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil</a> , cette\
  \ adresse n'est pas réécrite dans ce cas et la page servie contient les mots clefs,\
  \ les images, les liens etc. de la page correspondante de mon Site silex - la page\
  \ \"accueil\" dans cet exemple.<strong>Le deep linking d'avant la Comet</strong>\
  Auparavant, dans Silex v0.7 et jusqu'à Silex Comet, les liens permalink\
  \ étaient de la forme <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/accueil</a> et étaient\
  \ réécrit en deep link <a href=\"http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil</a>\
  La réécriture d'URL était faite à la volée : lorsqu'un moteur de recherche\
  \ demandait la page <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/accueil</a> , Silex\
  \ utilisait un module de réécriture d'URL (Le module Mod-rewrite) pour servir une\
  \ page HTML équivalente au contenu de la page \"accueil\" de mon site Silex.\
  <p style=\"padding-left: 30px; \">_____________________________________</p>\
  <address style=\"padding-left: 30px;\"><span style=\"text-decoration:\
  \ underline;\">Le module Mod-rewrite</span></address> <address style=\"padding-left:\
  \ 30px;\">Ce module n'est pas présent chez tous les hébergeurs, c'est ce qui nous\
  \ pousse à nous en passer. Il est nécessaire pour modifier des URLs à la volée de\
  \ façon transparente pour le navigateur. Dans notre cas, il permet de servir une\
  \ page HTML qui n'existe pas en prétendant qu'elle existe, sans qu'une erreur soit\
  \ détectée. Par exemple la page <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/accueil</a> n'existe\
  \ pas mais la page HTML équivalente à la page \"accueil\" de mon site Flash est\
  \ retournée pour que google indexe son contenu. C'est la technique de l'URL rewriting\
  \ avec des fichiers .htaccess, cf cet <a href=\"http://fr.wikipedia.org/wiki/.htaccess\"\
  \ target=\"_blank\">article de wikipedia</a> ou <a href=\" http://en.wikipedia.org/wiki/Rewrite_engine\"\
  \ target=\"_blank\">celui-ci en anglais</a>.</address><p style=\"padding-left:\
  \ 30px; \">_____________________________________</p><strong><strong>Pourquoi\
  \ cette différence est-elle si importante?</strong></strong>Dorénavant,\
  \ la réécriture d'URL est faite par la page index.php car <a href=\"http://silex-ria.org/?/lex\"\
  >http://silex-ria.org/?/lex</a> signifie pour un serveur web : <a href=\"http://silex-ria.org/index.php\"\
  >http://silex-ria.org/index.php</a> avec comme paramètre, \"/lex\".\
  Et donc :<ul><li>plus besoin du module Mod-rewrite pour réécrire\
  \ les URLs. Les sites Silex pourront donc être vus par les moteurs de recherche\
  \ quel que soit votre hébergeur, même s'il est très sécurisé ou très bon marché\
  \ (ou gratuit :).</li><li>les sites Silex sont un peu mieux indexés (plus\
  \ précisément) grâce au nom de site avant le #, dans le cas ou il y a quelque part\
  \ des liens vers votre site avec le #, par exemple <a href=\"http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil</a> Silex\
  \ sert un équivalent HTML de la 1ere page du site lex (ici \"developpeur.independant.actionscript\"\
  ) alors que pour le lien <a href=\"http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil\"\
  >http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil</a> Silex\
  \ ne peut servir que la 1ere page du site par défaut, c'est à dire la 1ere page\
  \ du site officiel de Silex au lieu de celle de mon CV.</li></ul>\
  <strong><strong>Quelles sont les conséquences</strong><strong></strong></strong>\
  <ul><li>on ne peut plus passer d'un site à un autre sans recharger\
  \ toute la page et donc tout silex, même si les deux sites sont sur le même serveur\
  \ Silex</li><li>on peut désormais se passer du nom du site pour le site\
  \ par défaut : http://silex-ria.org/#/silex/home est équivalent à <a href=\"http://silex-ria.org/?/open.source.flash.cms/#/silex/home\"\
  >http://silex-ria.org/?/open.source.flash.cms/#/silex/home</a> mais est plus facile\
  \ à retenir, et plus beau à voir</li></ul><strong><strong>FAQ</strong><strong></strong></strong>\
  Pourquoi réécrire les liens, pourquoi ne pas laisser google indexer directement\
  \ les liens avec le \"#\"?<ul><li>lorsque google demande la\
  \ page <a href=\"http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/formation\"\
  >http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/formation</a>\
  \ le serveur voit <a href=\"http://silex-ria.org/?/lex\">http://silex-ria.org/?/lex</a>\
  \ et le navigateur qui voit ce qui se trouve après le # communique avec Silex pour\
  \ ouvrir la page \"formation\". Donc la page HTML retournée à google est l'équivalent\
  \ de la page \"start\" du site, ici developpeur.independant.actionscript.</li>\
  <li>il faut donc impérativement mettre des liens sans # pour que google\
  \ indexe votre site au mieux, comme <a href=\"http://silex-ria.org/?/lex/developpeur.independant.actionscript/formation\"\
  >http://silex-ria.org/?/lex/developpeur.independant.actionscript/formation</a> ou\
  \ <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/formation\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/formation</a></li>\
  </ul>Comment google trouve-t-il toutes les pages de mon site?\
  \ Il n'y a pas de liens vers toutes les pages sur internet...&gt; Voici\
  \ un exemple de parcours suivi par les bots des moteurs de recherche :\
  <ol><li>sur un site, découverte d'un lien vers la page <a href=\"http://silex-ria.org/?/lex/developpeur.independant.actionscript/experiences\"\
  >http://silex-ria.org/?/lex/developpeur.independant.actionscript/experiences</a>\
  \ ou la page <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/experiences\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/experiences</a> (ce\
  \ qui revient au même car mon site a bien le module Mod-rewrite)</li>\
  <li>le bot suit le lien, Silex lui retourne l'équivalent HTML du contenu de la page\
  \ \"experiences\" et indexe ce contenu en prenant en compte les mots clefs de la\
  \ page du site initial, celui qui contenait le lien.</li><li>il suit les\
  \ liens internes au site <a href=\"http://silex-ria.org/\">http://silex-ria.org/</a>\
  \ qui se trouvent dans cette page \"experiences\"</li><li>le bot cherche\
  \ le fichier <a href=\"http://silex-ria.org/robots.txt\">http://silex-ria.org/robots.txt</a>\
  \ et puisqu'il existe (silex en a un de base), il en extrait l'adresse du sitemap-index,\
  \ ici <a href=\"http://silex-ria.org/sitemap_index.php\">http://silex-ria.org/sitemap_index.php</a></li>\
  <li>il ouvre ce sitemap-index qui est généré par Silex lorsqu'on fait \"\
  indexer\" dans le manager</li><li>il ouvre tous les sitemaps contenus\
  \ dans le sitemap-index. Ces sitemaps contiennent les adresses de toutes les pages\
  \ des sites, par exemple le sitemap <a href=\"http://silex-ria.org/sitemap.php?id_site=lex\"\
  >http://silex-ria.org/sitemap.php?id_site=lex</a> contient des liens vers toutes\
  \ mes pages :</li></ol><p style=\"padding-left: 60px;\"><a href=\"\
  http://silex-ria.org/lex/developpeur.independant.actionscript/\">http://silex-ria.org/lex/developpeur.independant.actionscript/</a>\
  \ <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/accueil/\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/accueil/</a> <a href=\"\
  http://silex-ria.org/lex/developpeur.independant.actionscript/experiences/\">http://silex-ria.org/lex/developpeur.independant.actionscript/experiences/</a>\
  \ <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/contacts/\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/contacts/</a> <a\
  \ href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/divers/\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/divers/</a> <a href=\"\
  http://silex-ria.org/lex/developpeur.independant.actionscript/formation/\">http://silex-ria.org/lex/developpeur.independant.actionscript/formation/</a>\
  \ <a href=\"http://silex-ria.org/lex/developpeur.independant.actionscript/a.propos.de.ce.cv/\"\
  >http://silex-ria.org/lex/developpeur.independant.actionscript/a.propos.de.ce.cv/</a></p>\
  &gt; Vous remarquerez que ces liens sont des permalinks sans # pour que\
  \ le bot voit les équivalent HTML des pages, cf explication ci-dessus.\
  &gt; Le bot a donc tous les liens et peut indexer les pages, même celles qui n'étaient\
  \ pas linkées dans un article ou ailleurs sur le site.<p class=\"MsoNormal\"\
  ></p>"
layout: post
link: https://www.silexlabs.org/le-nouveau-deep-linking-silex/
slug: le-nouveau-deep-linking-silex
title: Le nouveau deep linking silex
wordpress_id: 1251
categories:
- "Blog Silex"
- "The Blog"
tags:
- "innovation"
- "new"
---

__________________________________________________________________________




Silex, deep linking, référencement, sitemap,...




__________________________________________________________________________



				Au cours de la navigation dans un site Silex, l'adresses qui est affichée dans la barre d'adresse de votre navigateur (zone de texte horizontale en haut) est modifiée pour refléter l'endroit où vous vous trouvez dans le site. Elle est aussi modifiée lorsque vous arrivez sur un site Silex en suivant un lien depuis un site ou depuis google.

				[caption id="attachment_1326" align="aligncenter" width="548" caption="la barre d'adresse de votre navigateur : l'adresse du site, le "?", le nom du site, le "#", et enfin, le deep link (chemin de la page) qui est modifié au cours de la navigation"]![nav](https://www.silexlabs.org/wp-content/uploads/2009/10/nav.jpg)[/caption]


Cet article présente le fonctionnement de Silex concernant les adresses des sites et des pages. Nous verrons aussi que ce fonctionnement a changé dans la version 1.5 de Silex (Silex Comet).



				Cela a une grande influence sur le référencement, nous verrons pourquoi.

				**Le deep linking dans Silex Comet**

				Prenons l'exemple de mon site CV : une page a une adresse directe de la forme [http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil) . Chaque page étant associé à un seul lien, il s'agit d'un lien profond ou deep link.


_____________________________________



				définition du deep linking [lien](http://www.linux-france.org/prj/jargonf/L/lien.html) [hypertexte](http://www.linux-france.org/prj/jargonf/H/hypertexte.html) pointant directement vers une page située à l'intérieur d'un autre [site web](http://www.linux-france.org/prj/jargonf/S/site_web.html), sur laquelle on peut donc atterrir directement sans passer par la page d'accueil du site en question. ([source: linux-france.org](http://www.linux-france.org/prj/jargonf/L/lien_profond.html))

* [définition "lien profond" wikipedia](http://fr.wikipedia.org/wiki/Lien_profond)


* [Un article pas mal sur le deep linking](http://blog.quamediagroup.com/deeplinking-pour-flash-swfaddress.html)


* [Définition de wikipedia en anglais](http://en.wikipedia.org/wiki/Deep_linking)




_______________________________________


				<!-- more -->

				Lorsque cette adresse directe vers une page de mon site apparait dans un autre site, sous forme d'un lien, ce lien est appelé permalink (cf. définitions [wikipedia en français](http://fr.wikipedia.org/wiki/Permalien) et [en anglais](http://en.wikipedia.org/wiki/Permalink)), car il est utilisé pour être indexé et suivi par les moteurs de recherche qui indexent alors cette page de mon site CV.

				Comme c'est l'adresse indexée, lorsqu'un internaute trouve ce lien suite à une recherche google, il ouvre [http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil) . Mais cette adresse est rapidement réécrite en [http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil](http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil) .


_____________________________________



				le # et le deeplinking Dans une URL, seul ce qui se trouve après un # peut être modifié sans que le navigateur recharge entièrement la page. Ca nous vient des ancres HTML, et c'est pour que Silex puisse modifier l'adresse au cours de la navigation dans le site que nous devons insérer un # après le nom du site et avant le nom des pages.


_____________________________________



				Cependant, la réécriture n'a pas lieu lorsqu'un moteur de recherche est détecté : google, lui, reçois  bien une page lorsqu'il demande [http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/?/lex/developpeur.independant.actionscript/accueil) , cette adresse n'est pas réécrite dans ce cas et la page servie contient les mots clefs, les images, les liens etc. de la page correspondante de mon Site silex - la page "accueil" dans cet exemple.

				**Le deep linking d'avant la Comet**

				Auparavant, dans Silex v0.7 et jusqu'à Silex Comet, les liens permalink étaient de la forme [http://silex-ria.org/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/lex/developpeur.independant.actionscript/accueil) et étaient réécrit en deep link [http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil)

				La réécriture d'URL était faite à la volée : lorsqu'un moteur de recherche demandait la page [http://silex-ria.org/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/lex/developpeur.independant.actionscript/accueil) , Silex utilisait un module de réécriture d'URL (Le module Mod-rewrite) pour servir une page HTML équivalente au contenu de la page "accueil" de mon site Silex.


_____________________________________



				Le module Mod-rewrite Ce module n'est pas présent chez tous les hébergeurs, c'est ce qui nous pousse à nous en passer. Il est nécessaire pour modifier des URLs à la volée de façon transparente pour le navigateur. Dans notre cas, il permet de servir une page HTML qui n'existe pas en prétendant qu'elle existe, sans qu'une erreur soit détectée. Par exemple la page [http://silex-ria.org/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/lex/developpeur.independant.actionscript/accueil) n'existe pas mais la page HTML équivalente à la page "accueil" de mon site Flash est retournée pour que google indexe son contenu. C'est la technique de l'URL rewriting avec des fichiers .htaccess, cf cet [article de wikipedia](http://fr.wikipedia.org/wiki/.htaccess) ou [celui-ci en anglais]( http://en.wikipedia.org/wiki/Rewrite_engine).


_____________________________________



				****Pourquoi cette différence est-elle si importante?****

				Dorénavant, la réécriture d'URL est faite par la page index.php car [http://silex-ria.org/?/lex](http://silex-ria.org/?/lex) signifie pour un serveur web : [http://silex-ria.org/index.php](http://silex-ria.org/index.php) avec comme paramètre, "/lex".

				Et donc :




  * plus besoin du module Mod-rewrite pour réécrire les URLs. Les sites Silex pourront donc être vus par les moteurs de recherche quel que soit votre hébergeur, même s'il est très sécurisé ou très bon marché (ou gratuit :).


  * les sites Silex sont un peu mieux indexés (plus précisément) grâce au nom de site avant le #, dans le cas ou il y a quelque part des liens vers votre site avec le #, par exemple [http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil](http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/accueil) Silex sert un équivalent HTML de la 1ere page du site lex (ici "developpeur.independant.actionscript") alors que pour le lien [http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil](http://silex-ria.org/#/lex/developpeur.independant.actionscript/accueil) Silex ne peut servir que la 1ere page du site par défaut, c'est à dire la 1ere page du site officiel de Silex au lieu de celle de mon CV.


				****Quelles sont les conséquences********




  * on ne peut plus passer d'un site à un autre sans recharger toute la page et donc tout silex, même si les deux sites sont sur le même serveur Silex


  * on peut désormais se passer du nom du site pour le site par défaut : http://silex-ria.org/#/silex/home est équivalent à [http://silex-ria.org/?/open.source.flash.cms/#/silex/home](http://silex-ria.org/?/open.source.flash.cms/#/silex/home) mais est plus facile à retenir, et plus beau à voir


				****FAQ********

				Pourquoi réécrire les liens, pourquoi ne pas laisser google indexer directement les liens avec le "#"?




  * lorsque google demande la page [http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/formation](http://silex-ria.org/?/lex/#/developpeur.independant.actionscript/formation) le serveur voit [http://silex-ria.org/?/lex](http://silex-ria.org/?/lex) et le navigateur qui voit ce qui se trouve après le # communique avec Silex pour ouvrir la page "formation". Donc la page HTML retournée à google est l'équivalent de la page "start" du site, ici developpeur.independant.actionscript.


  * il faut donc impérativement mettre des liens sans # pour que google indexe votre site au mieux, comme [http://silex-ria.org/?/lex/developpeur.independant.actionscript/formation](http://silex-ria.org/?/lex/developpeur.independant.actionscript/formation) ou [http://silex-ria.org/lex/developpeur.independant.actionscript/formation](http://silex-ria.org/lex/developpeur.independant.actionscript/formation)


				Comment google trouve-t-il toutes les pages de mon site? Il n'y a pas de liens vers toutes les pages sur internet...

				> Voici un exemple de parcours suivi par les bots des moteurs de recherche :


  1. sur un site, découverte d'un lien vers la page [http://silex-ria.org/?/lex/developpeur.independant.actionscript/experiences](http://silex-ria.org/?/lex/developpeur.independant.actionscript/experiences) ou la page [http://silex-ria.org/lex/developpeur.independant.actionscript/experiences](http://silex-ria.org/lex/developpeur.independant.actionscript/experiences) (ce qui revient au même car mon site a bien le module Mod-rewrite)


  2. le bot suit le lien, Silex lui retourne l'équivalent HTML du contenu de la page "experiences" et indexe ce contenu en prenant en compte les mots clefs de la page du site initial, celui qui contenait le lien.


  3. il suit les liens internes au site [http://silex-ria.org/](http://silex-ria.org/) qui se trouvent dans cette page "experiences"


  4. le bot cherche le fichier [http://silex-ria.org/robots.txt](http://silex-ria.org/robots.txt) et puisqu'il existe (silex en a un de base), il en extrait l'adresse du sitemap-index, ici [http://silex-ria.org/sitemap_index.php](http://silex-ria.org/sitemap_index.php)


  5. il ouvre ce sitemap-index qui est généré par Silex lorsqu'on fait "indexer" dans le manager


  6. il ouvre tous les sitemaps contenus dans le sitemap-index. Ces sitemaps contiennent les adresses de toutes les pages des sites, par exemple le sitemap [http://silex-ria.org/sitemap.php?id_site=lex](http://silex-ria.org/sitemap.php?id_site=lex) contient des liens vers toutes mes pages :




[http://silex-ria.org/lex/developpeur.independant.actionscript/](http://silex-ria.org/lex/developpeur.independant.actionscript/) [http://silex-ria.org/lex/developpeur.independant.actionscript/accueil/](http://silex-ria.org/lex/developpeur.independant.actionscript/accueil/) [http://silex-ria.org/lex/developpeur.independant.actionscript/experiences/](http://silex-ria.org/lex/developpeur.independant.actionscript/experiences/) [http://silex-ria.org/lex/developpeur.independant.actionscript/contacts/](http://silex-ria.org/lex/developpeur.independant.actionscript/contacts/) [http://silex-ria.org/lex/developpeur.independant.actionscript/divers/](http://silex-ria.org/lex/developpeur.independant.actionscript/divers/) [http://silex-ria.org/lex/developpeur.independant.actionscript/formation/](http://silex-ria.org/lex/developpeur.independant.actionscript/formation/) [http://silex-ria.org/lex/developpeur.independant.actionscript/a.propos.de.ce.cv/](http://silex-ria.org/lex/developpeur.independant.actionscript/a.propos.de.ce.cv/)



				> Vous remarquerez que ces liens sont des permalinks sans # pour que le bot voit les équivalent HTML des pages, cf explication ci-dessus.

				> Le bot a donc tous les liens et peut indexer les pages, même celles qui n'étaient pas linkées dans un article ou ailleurs sur le site.

