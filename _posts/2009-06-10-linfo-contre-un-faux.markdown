---
author: "lexa"
comments: true
date: "2009-06-10T17:41:33.000Z"
layout: "post"
title: "L’info contre un faux"
categories: ["Blog Silex Labs","The Blog"]

---
Info... pour informatique qui craque? Non pour information qui bug!




Open source je te hais, enfin en tout cas je hais les projets open source comme phpbb qui est devenu une usine à gaz version chernobug. Et ajouter un peu d'OVH pour du chernodébyl. ESCUZET MOI, ZE ZUI ZUN PEU DÈG







  * les forums remarchent [http://silex.hoyau.info/forum](http://silex.hoyau.info/forum) et [http://silex.hoyau.info/forum_en](http://silex.hoyau.info/forum_en)


  * on a mis un nouveau design




<!-- more -->




Je vous explique donc la situation :




Suite à la mise en 1ere page de silex sur SourceForge.net hier (en plus du lien "June Project OF The Month"), nous avons eu un gros pic de download dans la matinée - environ 1 par minute.  Suite à quoi les gens ont afflué sur les forums [http://silex.hoyau.info/forum](http://silex.hoyau.info/forum) et [http://silex.hoyau.info/forum_en](http://silex.hoyau.info/forum_en)




Ces forums sont propulsés par [phpbb](http://www.phpbb.fr/) et hébergés sur un gros compte OVH. Et ces deux derniers étant bien foireux, le tout c'est écroulé et a affiché un message d'erreur du type





    Lost connection to MySQL server at 'reading initial communication packet',




    system error: 111




Pour la faire courte, j'y ai passé la journée en essayant







  * d'utiliser la base de donnée fournie par sourceforge


  * d'utiliser un autre système de forum en récupérant nos messages


  * d'utiliser les applications sourceforge dont phpbb fait pourtant partie


  * de mettre à jour la version de phpbb


  * de spliter la base de donnée en 2 (forum en / fr) pour éviter que ça ne recommence




Au final rien n'a marché, sauf qu'OVH est intervenu et a réinitialisé les bases de données qui buguaient. On en est donc revenu au même point ou presque :







  * les forums remarchent


  * on a mis un nouveau design




J'espère que Silex aura moins de succès dans l'avenir car j'en ai vraiment chié avec OVH et phpbb. D'un autre côté il y a des chances puisque ce genre de choses nuit clairement à notre référencement et aux utilisateurs qui avaient besoin de notre aide... Cool! :-|


