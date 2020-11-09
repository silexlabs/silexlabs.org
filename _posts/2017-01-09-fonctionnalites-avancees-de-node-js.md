---
layout: post
title: Fonctionnalités avancées de Node.js

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex Labs
- Compte rendu Vidéo
- The Blog
tags:
- backend
- compte rendu
- dev
- javaScript
- jean baptiste richardet
- node.js
- nodejs
- silex labs
- video
- webdev

_oembed_b1faf68157cb08e4dd7121d159d366ac: "{{unknown}}"
_oembed_28bfa16b45cfef188c9a08bdd752789a: "{{unknown}}"

layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"
_yoast_wpseo_primary_category: '5318'

media_title: 'Atelier Node.js avancé avec Jean-Baptiste Richardet '
_thumbnail_id: '206873'

display_name: Jean-Baptiste Richardet
first_name: Jean-Baptiste
last_name: Richardet
permalink: "/fonctionnalites-avancees-de-node-js/"
---

_Cet atelier nécessite une compréhension basique de la syntaxe Javascript et des débuts en Node.js faciliteront la compréhension._

[Vous pouvez voir l'atelier débutant ici pour voir quelques basiques ](https://youtu.be/raFkAYZiNxA)

Durant cet atelier, nous nous sommes attaqués au problème de transfert de gros fichier sur un réseau sans surcharger la mémoire des machines. Nous avons donc constitué un réseau d'une dizaine de machines, toutes équipées de Node.js v4 et nous avons pris comme fichier de départ un extrait de log serveurs de 13 Go.

Tout le processus repose sur la gestion de _streams_, ces objets Node.js que l'on peut voir comme des tuyaux avec une entrée, une sortie et un flux de donnée à l'intérieur. Ici, le fichier de log est inséré depuis une machine qui crée un _stream_ vers la machine suivante. Seul un bout des données est envoyé et la suite ne vient que quand le destinataire a fini de traiter le premier bout (aussi appelé _chunk_). Ainsi, les 13 Go de logs ne viendront pas remplir la mémoire d'un coup mais le fichier sera bien lu dans son entièreté.

Pour vous aider, vous pouvez commencer avec le code présent ici
: 


Si vous bloquez vraiment, retrouvez le code fini et enrichi ici
: 


Bon visionnage et n'hésitez pas à poser des questions et laisser des commentaires sur YouTube ou GitHub !

[voir la video](https://youtu.be/vbTJNZegLJQ)


### **Le tour du Web en 50 ateliers**

Cet atelier entre dans le cadre du projet [“Le tour du Web en 50 ateliers”](https://www.silexlabs.org/le-tour-du-web-en-50-ateliers-2/) qui propose des ateliers d’initiation aux métiers du numérique par la pratique pour permettre aux personnes défavorisées face à l’accès au numérique, de comprendre ce secteur et de s’initier à ses métiers.

![tour-du-web-carre-avr-2016-fdblc_simplon]({{ site.baseurl }}/assets/tour-du-web-carre-avr-2016-fdblc_simplon.png)
