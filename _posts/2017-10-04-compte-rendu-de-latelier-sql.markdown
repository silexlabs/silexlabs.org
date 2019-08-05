---
author: Tariq
comments: true
date: 2017-10-04 17:22:18+00:00
excerpt: "Avant tout merci !Merci à toutes et à tous d'être venus. Nous\
  \ avons établi un record hier : 2h de SQL non stop. Le Guiness book cherche à contacter\
  \ <a href=\"https://twitter.com/DonoSoftly\" target=\"_blank\">Donovan</a> depuis\
  \ ce matin mais comme d'habitude il répond :<code>SET GLOBAL connect_timeout=18446744073709551615;</code>\
  Autre record également nous étions un peu moins de 25 personnes ce qui\
  \ en dit long sur le besoin qui existe au sujet de SQL.<blockquote class=\"\
  twitter-tweet\" data-lang=\"en\"><p lang=\"fr\" dir=\"ltr\">C&#39;est parti à <a\
  \ href=\"https://twitter.com/EEMI75?ref_src=twsrc%5Etfw\">@EEMI75</a> <a href=\"\
  https://twitter.com/silexlabs?ref_src=twsrc%5Etfw\">@silexlabs</a> <a href=\"https://twitter.com/PalaisB?ref_src=twsrc%5Etfw\"\
  >@PalaisB</a> <a href=\"https://twitter.com/hashtag/sqlmesoftly?src=hash&amp;ref_src=twsrc%5Etfw\"\
  >#sqlmesoftly</a> <a href=\"https://t.co/DudSEr8Xhy\">pic.twitter.com/DudSEr8Xhy</a></p>&mdash;\
  \ Tariq Benezza (@tariqbenezza) <a href=\"https://twitter.com/tariqbenezza/status/915263021576007680?ref_src=twsrc%5Etfw\"\
  >October 3, 2017</a></blockquote><script async src=\"//platform.twitter.com/widgets.js\"\
  \ charset=\"utf-8\"></script><h2>Rappel sur l'installation de l'environnement</h2>\
  Avant tout il vous faut installer l'environnement MySQL si ce n'est pas\
  \ déjà fait.Télécharger et installer le serveur MySQL ici :\
  <a href=\"https://dev.mysql.com/downloads/mysql/\" target=\"_blank\">https://dev.mysql.com/downloads/mysql/</a>\
  Télécharger et installer MySQL Workbench ici :<a href=\"https://dev.mysql.com/downloads/workbench/\"\
  \ target=\"_blank\">https://dev.mysql.com/downloads/workbench/</a>Lancer\
  \ ensuite Workbench et configurez une connection s'il ne vous en propose pas une\
  \ par défaut :<img src=\"https://www.silexlabs.org/wp-content/uploads/2017/10/Capture-du-2017-10-04-13-57-25-300x198.png\"\
  \ alt=\"capture-du-2017-10-04-13-57-25\" width=\"600\" height=\"396\" class=\"alignnone\
  \ size-medium wp-image-207267\" /><h2>Premiers pas en SQL</h2>\
  Nous allons pouvoir passer aux choses sérieuses. Télécharger maintenant les\
  \ exercices et la présentation :<a href=\"https://drive.google.com/file/d/0B2W8pIVLTLvcZmpzdlZ4RTlnWGM/view\"\
  \ target=\"_blank\">Présentation et exercices</a>L'idéal est de commencer\
  \ avec le fichier2017-10-03 - SILEXLABS - EEMI - Découverte du SQL avec\
  \ MySQL.pdfIl s'agit de la présentation avec les différentes notions\
  \ présentées hier.Une fois à la page 40 lancez vous dans les différentes\
  \ requêtes proposées à travers les fichiers SQL :01-db.sql\
  02-table.sql03-restriction.sql04-projection.sql05-triage.sql\
  06-aggregation.sqlLe fichier suivant va vous permettre de remplir\
  \ votre base avec plusieurs milliers de noms et adresses emails :eemi_db_clients.sql\
  Evidemment nous n'oublions la e-bibliographie avec les liens suivants\
  \ :• <a href=\"https://www.mysql.com/\" target=\"_blank\">Le site officiel\
  \ de MySQL</a>• <a href=\"https://www.mysql.com/fr/\" target=\"_blank\"\
  >Le site officiel de MySQL en français</a>• <a href=\"https://dev.mysql.com/\"\
  \ target=\"_blank\">La doc officiel de MySQL</a>• <a href=\"https://www.mysql.com/news-and-events/on-demand-webinars/\"\
  \ target=\"_blank\">Les news et les webinars de nombreuses fonctionnalités</a>\
  • <a href=\"http://mysqlserverteam.com/\" target=\"_blank\">Le blog de la\
  \ communauté de développeurs MySQL</a>• <a href=\"http://dasini.net/blog/fr/\"\
  \ target=\"_blank\">Le bog - en français - de Olivier DASINI un expert MySQL (D'aucuns\
  \ disent même que c'est le jumeau maléfique de Donovan)</a>Enfin si\
  \ vous avez des questions n'hésitez surtout pas à contacter <a href=\"https://twitter.com/DonoSoftly\"\
  \ target=\"_blank\">Donovan</a> ou même <a href=\"mailto:contact@silexlabs.org?Subject=Questions\
  \ sur SQL\" target=\"_top\">Silex Labs</a> directement"
layout: post
link: https://www.silexlabs.org/compte-rendu-de-latelier-sql/
slug: compte-rendu-de-latelier-sql
title: Compte rendu de l'atelier SQL
wordpress_id: 207260
categories:
- "The Blog"
---

Avant tout merci !

				Merci à toutes et à tous d'être venus. Nous avons établi un record hier : 2h de SQL non stop. Le Guiness book cherche à contacter [Donovan](https://twitter.com/DonoSoftly) depuis ce matin mais comme d'habitude il répond :

				`SET GLOBAL connect_timeout=18446744073709551615;`

				Autre record également nous étions un peu moins de 25 personnes ce qui en dit long sur le besoin qui existe au sujet de SQL.



<blockquote>C'est parti à [@EEMI75](https://twitter.com/EEMI75?ref_src=twsrc%5Etfw) [@silexlabs](https://twitter.com/silexlabs?ref_src=twsrc%5Etfw) [@PalaisB](https://twitter.com/PalaisB?ref_src=twsrc%5Etfw) [#sqlmesoftly](https://twitter.com/hashtag/sqlmesoftly?src=hash&ref_src=twsrc%5Etfw) [pic.twitter.com/DudSEr8Xhy](https://t.co/DudSEr8Xhy)
>
> -- Tariq Benezza (@tariqbenezza) [October 3, 2017](https://twitter.com/tariqbenezza/status/915263021576007680?ref_src=twsrc%5Etfw)</blockquote>






## Rappel sur l'installation de l'environnement



				Avant tout il vous faut installer l'environnement MySQL si ce n'est pas déjà fait.

				Télécharger et installer le serveur MySQL ici :

				[https://dev.mysql.com/downloads/mysql/](https://dev.mysql.com/downloads/mysql/)

				Télécharger et installer MySQL Workbench ici :

				[https://dev.mysql.com/downloads/workbench/](https://dev.mysql.com/downloads/workbench/)

				Lancer ensuite Workbench et configurez une connection s'il ne vous en propose pas une par défaut :

				![capture-du-2017-10-04-13-57-25](https://www.silexlabs.org/wp-content/uploads/2017/10/Capture-du-2017-10-04-13-57-25-300x198.png)



## Premiers pas en SQL



				Nous allons pouvoir passer aux choses sérieuses. Télécharger maintenant les exercices et la présentation :

				[Présentation et exercices](https://drive.google.com/file/d/0B2W8pIVLTLvcZmpzdlZ4RTlnWGM/view)

				L'idéal est de commencer avec le fichier

				2017-10-03 - SILEXLABS - EEMI - Découverte du SQL avec MySQL.pdf

				Il s'agit de la présentation avec les différentes notions présentées hier.

				Une fois à la page 40 lancez vous dans les différentes requêtes proposées à travers les fichiers SQL :

				01-db.sql
				02-table.sql
				03-restriction.sql
				04-projection.sql
				05-triage.sql
				06-aggregation.sql

				Le fichier suivant va vous permettre de remplir votre base avec plusieurs milliers de noms et adresses emails :

				eemi_db_clients.sql

				Evidemment nous n'oublions la e-bibliographie avec les liens suivants :

				• [Le site officiel de MySQL](https://www.mysql.com/)
				• [Le site officiel de MySQL en français](https://www.mysql.com/fr/)
				• [La doc officiel de MySQL](https://dev.mysql.com/)
				• [Les news et les webinars de nombreuses fonctionnalités](https://www.mysql.com/news-and-events/on-demand-webinars/)
				• [Le blog de la communauté de développeurs MySQL](http://mysqlserverteam.com/)
				• [Le bog - en français - de Olivier DASINI un expert MySQL (D'aucuns disent même que c'est le jumeau maléfique de Donovan)](http://dasini.net/blog/fr/)

				Enfin si vous avez des questions n'hésitez surtout pas à contacter [Donovan](https://twitter.com/DonoSoftly) ou même [Silex Labs](mailto:contact@silexlabs.org?Subject=Questions sur SQL) directement
