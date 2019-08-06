---
author: "jbips"
comments: true
date: "2017-01-09T16:44:27.000Z"
layout: "post"
title: "Fonctionnalités avancées de Node.js"
categories: ["Blog Silex Labs","Compte rendu Vidéo","The Blog"]
tags: ["backend","compte rendu","dev","javaScript","jean baptiste richardet","node.js","nodejs","silex labs","video","webdev"]

---
_Cet atelier nécessite une compréhension basique de la syntaxe Javascript et des débuts en Node.js faciliteront la compréhension._

[Vous pouvez voir l'atelier débutant ici pour voir quelques basiques ](https://youtu.be/raFkAYZiNxA)

Durant cet atelier, nous nous sommes attaqués au problème de transfert de gros fichier sur un réseau sans surcharger la mémoire des machines. Nous avons donc constitué un réseau d'une dizaine de machines, toutes équipées de Node.js v4 et nous avons pris comme fichier de départ un extrait de log serveurs de 13 Go.

<!-- more -->

Tout le processus repose sur la gestion de _streams_, ces objets Node.js que l'on peut voir comme des tuyaux avec une entrée, une sortie et un flux de donnée à l'intérieur. Ici, le fichier de log est inséré depuis une machine qui crée un _stream _vers la machine suivante. Seul un bout des données est envoyé et la suite ne vient que quand le destinataire a fini de traiter le premier bout (aussi appelé _chunk_). Ainsi, les 13 Go de logs ne viendront pas remplir la mémoire d'un coup mais le fichier sera bien lu dans son entièreté.

Pour vous aider, vous pouvez commencer avec le code présent ici :

[https://github.com/JbIPS/atelier-node-1/](https://github.com/JbIPS/atelier-node-1/).

Si vous bloquez vraiment, retrouvez le code fini et enrichi ici :

[https://github.com/JbIPS/atelier-node-1/tree/finish](https://github.com/JbIPS/atelier-node-1/tree/finish)



Bon visionnage et n'hésitez pas à poser des questions et laisser des commentaires sur YouTube ou GitHub !



[embed]https://youtu.be/vbTJNZegLJQ[/embed]




### **Le tour du Web en 50 ateliers**


Cet atelier entre dans le cadre du projet[ “Le tour du Web en 50 ateliers”](https://www.silexlabs.org/le-tour-du-web-en-50-ateliers-2/) qui propose des ateliers d’initiation aux métiers du numérique par la pratique pour permettre aux personnes défavorisées face à l’accès au numérique, de comprendre ce secteur et de s’initier à ses métiers.

![tour-du-web-carre-avr-2016-fdblc_simplon](https://www.silexlabs.org/wp-content/uploads/2016/10/tour-du-web-carre-avr-2016-fdblc_simplon.png)


