---
author: "admin"
comments: true
date: "2009-06-10T21:38:04.000Z"
layout: "post"
link: "https://www.silexlabs.org/camembert/"
slug: "camembert"
title: "Camembert !"
wordpress_id: 485
categories: ["Blog Silex Labs","The Blog"]

---
Un bon truc pour Silex : on peut mettre des graphiques facilement




Par exemple : [http://hoyau.info/demos/silex_server/openflashchart](http://hoyau.info/demos/silex_server/openflashchart)





Open flash Chart dans Silex :

- télécharger OpenFlashChart ici :

[http://teethgrinder.co.uk/open-flash-chart-2/downloads.php](http://teethgrinder.co.uk/open-flash-chart-2/downloads.php)

(lien direct = [https://sourceforge.net/project/downloading.php?group_id=201148&filename=open-flash-chart-2-Jormungandr-2.zip&a=7823743](https://sourceforge.net/project/downloading.php?group_id=201148&filename=open-flash-chart-2-Jormungandr-2.zip&a=7823743) )
- mettre dans silex (dans media/ par exemple) le fichier swf qui est dans le zip (open-flash-chart.swf)

- mettre dans silex un fichier data (par exemple dans media/ le fichier ded démo de OpenFlashChart qui s'appelle data.json et dont le contenu est ici [http://teethgrinder.co.uk/open-flash-chart-2/tutorial/data.json](http://teethgrinder.co.uk/open-flash-chart-2/tutorial/data.json) )

- dans silex, clicker sur le bouton "AS3" et mettre l'adresse "media/open-flash-chart.swf?data-file=media/data.json" (sans les guillemets)

Enfin, il y a d'autres utilisations possibles d'openflashchart, comme la liaison avec des bases de données (comme le font piwik)

