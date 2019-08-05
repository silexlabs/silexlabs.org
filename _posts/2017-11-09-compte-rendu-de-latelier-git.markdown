---
author: Tariq
comments: true
date: 2017-11-09 22:55:01+00:00
excerpt: "Avant tout un grand merci à toutes et à tous. Nous étions un peu moins d'une\
  \ trentaine à découvrir git, à renforcer nos acquis ou tout simplement à prendre\
  \ la température (je parle de moi là).Merci à <a href=\"https://github.com/JbIPS\"\
  \ target=\"_blank\">JB</a>, notre seigneur git, qui a réussi à nous faire aimer\
  \ ce merveilleux outil<iframe src=\"https://giphy.com/embed/No0TwN9itfV16\"\
  \ width=\"480\" height=\"204\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p>\
  Un grand merci à <a href=\"https://github.com/FTwex\" target=\"_blank\"\
  >Florian</a>, notre clutch player, qui une fois de plus a assuré et a pu animer\
  \ un atelier dissident sans avoir besoin de recharger son PC<iframe\
  \ src=\"https://giphy.com/embed/3oEdv5e5Zd2gsczAhG\" width=\"480\" height=\"262\"\
  \ frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe><p>\
  <h3>Le compte rendu</h3><h4>Un gestionnaire de version ?</h4>\
  Voici en introduction une petite vidéo illustrant l'arborescence des versions\
  \ d'un projet - ici <a href=\"https://github.com/silexlabs/unifile\" target=\"_blank\"\
  >Unifile</a>- où nous pouvons déjà constater combien git peut faciliter la vie.\
  \ Et ce surtout quand les contributeurs viennent de partout.<iframe\
  \ width=\"1000\" height=\"450\" src=\"https://www.youtube.com/embed/l5SO0J_KWYw\"\
  \ frameborder=\"0\" gesture=\"media\" allowfullscreen></iframe><h4>Pourquoi\
  \ git ?</h4>git remplis quatre critères :<ul>\
  <li><strong>Libre</strong> : git n'est porté par aucun GAFAM (Google Apple Facebook\
  \ Amazon Microsoft), vous pouvez voir son code <a href=\"https://github.com/git\"\
  \ target=\"_blank\">ici</a></li><li><strong>Décentralisé</strong> : Il\
  \ n'y a pas de serveur où tout votre code est stocké. Les utilisateurs peuvent se\
  \ synchroniser entre eux. </li><li><strong>Local</strong> : Chaque contributeur\
  \ dispose du projet en local</li><li><strong>Rapide</strong> :\
  <iframe src=\"https://giphy.com/embed/l4FGwBxQ8VjtzNcv6\" width=\"300\" height=\"\
  300\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\
  </li></ul><h4>Attention please</h4>GitHub n'est\
  \ pas lié à git, il s'agit juste d'une plateforme offrant des dépôts git gratuits.\
  \ La version gratuite ne propose que des dépôts publiques.On trouve\
  \ aussi<a href=\"https://about.gitlab.com/\" target=\"_blank\">GitLab</a>\
  \ : Un peu comme GitHub mais opensource<a href=\"https://bitbucket.org/\"\
  \ target=\"_blank\">BitBucket </a>: Solution payante qui ne propose que des <em>repos\
  \ </em>privés et un nombre limité de contributeurs par <em>repo</em>\
  <h4>Let's begin</h4>Dans un premier temps il va falloir installer git.\
  \ Rendez vous <a href=\"https://git-scm.com/downloads\" target=\"_blank\">ici</a>\
  \ pour l'installer.Une fois que c'est fait, ouvrez votrer terminal préféré\
  \ et lancez la commande suivante :<code>mkdir ma-recette && cd ma-recette\
  git init</code>Il s'agit là de la création du répertoire\
  \ \"ma-recette\", nous nous y plaçons et enfin nous initialisons git pour ce <em>repo</em>\
  <h4>L'index</h4>On crée un fichier et on ajoute notre liste\
  \ d'ingrédients<code>touch recette.txtgit status</code>\
  git status nous indique l'état de notre dépôt. Ici on voit que notre fichier\
  \ n'est pas suivi, il faut l'ajouter à l'index.<code>git add recette.txt\
  git status</code><h4>Le commit</h4>Par définition\
  \ le commit est un enregistrement des modifications dans le <em>repo</em>\
  Maintenant que notre index est prêt nous pouvons créer ce fameux commit\
  <code>git commitgit statusgit log</code><h4>Retour\
  \ vers le futur avec la commande revert</h4>Que celui qui ne s'est jamais\
  \ trompé me jette la première pierre. Pour éviter une pluie de caillou la commande\
  \ <strong>revert </strong>est très pratique.Elle permet de revenir \"\
  dans le temps\" et de faire machine arrière sur un \"commit foireux\" comme on dit\
  \ dans le jargon.<code>git revert HEAD</code>Dans la commande\
  \ ci-dessus on revient à l'état du dernier commit.<h4>Get remote !</h4>\
  Après ce travail en local, il est temps de partager la recette.\
  Créez un dépôt sur <a href=\"https://github.com/\" target=\"_blank\">GitHub </a>avec\
  \ le nom que vous voulez (dans notre exemple nous opterons pour atelier-git) et\
  \ ne l'initialisez pas.<code>git remote add origin https://github.com/$USER/atelier-git.git\
  git push origin master</code>Vous pouvez maintenant voir votre\
  \ code sur GitHub !<h4>Fork that</h4>La contribution c'est\
  \ partager son travail mais également intervenir sur le <em>repo</em> de quelqu'un\
  \ aussi. Pour cela GitHub propose de \"forker\" votre dossier.Il suffit\
  \ alors d'aller sur le dépôt et de cliquer sur \"Fork\"<img src=\"https://www.silexlabs.org/wp-content/uploads/2017/11/fork.png\"\
  \ alt=\"fork\" width=\"339\" height=\"75\" class=\"aligncenter size-full wp-image-207412\"\
  \ />GitHub crée une copie chez vous. C'est de là que vous pouvez partir\
  \ :<code>git clone $ADRESSE_DE_VOTRE_DEPOT</code>Vous pouvez\
  \ maintenant modifier comme bon vous semble les fichiers !<h4>Pull Request\
  \ ou PR pour les intimes</h4>Mais alors quand je fais ma modification\
  \ je peux directement la proposer sur le repo que j'ai forké ?<strong>Oui\
  \ !</strong> Et pour ce faire on passe par une <strong>pull request</strong>.\
  <img src=\"https://www.silexlabs.org/wp-content/uploads/2017/11/pull-request.png\"\
  \ alt=\"pull-request\" width=\"247\" height=\"67\" class=\"aligncenter size-full\
  \ wp-image-207415\" />Dès que le propriétaire aura accepté votre requête,\
  \ votre modification sera intégrée dans son dépôt.<iframe src=\"https://giphy.com/embed/15BuyagtKucHm\"\
  \ width=\"480\" height=\"272\" frameBorder=\"0\" class=\"giphy-embed\" allowFullScreen></iframe>\
  <h4>Pour aller plus loin</h4>En tout premier lieu je vous\
  \ invite à inonder la boite mail de <a href=\"https://github.com/JbIPS\" target=\"\
  _blank\">JB</a> avec vos PR :<a href=\"https://github.com/JbIPS/ma-recette\"\
  >https://github.com/JbIPS/ma-recette</a>Il y a aussi la documentation\
  \ officielle de git :<a href=\"https://git-scm.com/docs/gittutorial\"\
  \ target=\"_blank\">https://git-scm.com/docs/gittutorial</a> (en anglais)\
  Enfin voici une liste non exhaustive si vous souhaitez tout savoir sur GIT\
  <a href=\"https://try.github.io/levels/1/challenges/1\" target=\"_blank\"\
  >Try Git - GitHub</a> (en anglais)<a href=\"https://openclassrooms.com/courses/gerez-vos-codes-source-avec-git\"\
  \ target=\"_blank\">Git - OpenClassrooms</a><a href=\"https://rogerdudler.github.io/git-guide/index.fr.html\"\
  \ target=\"_blank\">Git Guide - Roger Dudler</a>La prez de JB :\
  <a href=\"https://jbips.github.io/slides/\">https://jbips.github.io/slides/</a>\
  Merci encore à toutes et à tous et à très vite."
layout: post
link: https://www.silexlabs.org/compte-rendu-de-latelier-git/
slug: compte-rendu-de-latelier-git
title: Compte rendu de l'atelier git
wordpress_id: 207393
categories:
- "The Blog"
---

Avant tout un grand merci à toutes et à tous. Nous étions un peu moins d'une trentaine à découvrir git, à renforcer nos acquis ou tout simplement à prendre la température (je parle de moi là).

				Merci à [JB](https://github.com/JbIPS), notre seigneur git, qui a réussi à nous faire aimer ce merveilleux outil





				Un grand merci à [Florian](https://github.com/FTwex), notre clutch player, qui une fois de plus a assuré et a pu animer un atelier dissident sans avoir besoin de recharger son PC







### Le compte rendu





#### Un gestionnaire de version ?



				Voici en introduction une petite vidéo illustrant l'arborescence des versions d'un projet - ici [Unifile](https://github.com/silexlabs/unifile)- où nous pouvons déjà constater combien git peut faciliter la vie. Et ce surtout quand les contributeurs viennent de partout.





#### Pourquoi git ?



				git remplis quatre critères :





  * **Libre** : git n'est porté par aucun GAFAM (Google Apple Facebook Amazon Microsoft), vous pouvez voir son code [ici](https://github.com/git)


  * **Décentralisé** : Il n'y a pas de serveur où tout votre code est stocké. Les utilisateurs peuvent se synchroniser entre eux.


  * **Local** : Chaque contributeur dispose du projet en local


  * **Rapide** :








#### Attention please



				GitHub n'est pas lié à git, il s'agit juste d'une plateforme offrant des dépôts git gratuits. La version gratuite ne propose que des dépôts publiques.

				On trouve aussi

				[GitLab](https://about.gitlab.com/) : Un peu comme GitHub mais opensource
				[BitBucket ](https://bitbucket.org/): Solution payante qui ne propose que des _repos _privés et un nombre limité de contributeurs par _repo_



#### Let's begin



				Dans un premier temps il va falloir installer git. Rendez vous [ici](https://git-scm.com/downloads) pour l'installer.

				Une fois que c'est fait, ouvrez votrer terminal préféré et lancez la commande suivante :

				`mkdir ma-recette && cd ma-recette
				git init
				`

				Il s'agit là de la création du répertoire "ma-recette", nous nous y plaçons et enfin nous initialisons git pour ce _repo_



#### L'index



				On crée un fichier et on ajoute notre liste d'ingrédients

				`touch recette.txt
				git status`

				git status nous indique l'état de notre dépôt. Ici on voit que notre fichier n'est pas suivi, il faut l'ajouter à l'index.

				`git add recette.txt
				git status`



#### Le commit



				Par définition le commit est un enregistrement des modifications dans le _repo_

				Maintenant que notre index est prêt nous pouvons créer ce fameux commit

				`git commit
				git status
				git log`



#### Retour vers le futur avec la commande revert



				Que celui qui ne s'est jamais trompé me jette la première pierre. Pour éviter une pluie de caillou la commande **revert **est très pratique.
				Elle permet de revenir "dans le temps" et de faire machine arrière sur un "commit foireux" comme on dit dans le jargon.

				`git revert HEAD`

				Dans la commande ci-dessus on revient à l'état du dernier commit.



#### Get remote !



				Après ce travail en local, il est temps de partager la recette.
				Créez un dépôt sur [GitHub ](https://github.com/)avec le nom que vous voulez (dans notre exemple nous opterons pour atelier-git) et ne l'initialisez pas.

				`git remote add origin https://github.com/$USER/atelier-git.git
				git push origin master`

				Vous pouvez maintenant voir votre code sur GitHub !



#### Fork that



				La contribution c'est partager son travail mais également intervenir sur le _repo_ de quelqu'un aussi. Pour cela GitHub propose de "forker" votre dossier.
				Il suffit alors d'aller sur le dépôt et de cliquer sur "Fork"

				![fork](https://www.silexlabs.org/wp-content/uploads/2017/11/fork.png)

				GitHub crée une copie chez vous. C'est de là que vous pouvez partir :

				`git clone $ADRESSE_DE_VOTRE_DEPOT`

				Vous pouvez maintenant modifier comme bon vous semble les fichiers !



#### Pull Request ou PR pour les intimes



				Mais alors quand je fais ma modification je peux directement la proposer sur le repo que j'ai forké ?

				**Oui !** Et pour ce faire on passe par une **pull request**.

				![pull-request](https://www.silexlabs.org/wp-content/uploads/2017/11/pull-request.png)

				Dès que le propriétaire aura accepté votre requête, votre modification sera intégrée dans son dépôt.





#### Pour aller plus loin



				En tout premier lieu je vous invite à inonder la boite mail de [JB](https://github.com/JbIPS) avec vos PR :

				[https://github.com/JbIPS/ma-recette](https://github.com/JbIPS/ma-recette)

				Il y a aussi la documentation officielle de git :

				[https://git-scm.com/docs/gittutorial](https://git-scm.com/docs/gittutorial) (en anglais)

				Enfin voici une liste non exhaustive si vous souhaitez tout savoir sur GIT

				[Try Git - GitHub](https://try.github.io/levels/1/challenges/1) (en anglais)
				[Git - OpenClassrooms](https://openclassrooms.com/courses/gerez-vos-codes-source-avec-git)
				[Git Guide - Roger Dudler](https://rogerdudler.github.io/git-guide/index.fr.html)

				La prez de JB :

				[https://jbips.github.io/slides/](https://jbips.github.io/slides/)

				Merci encore à toutes et à tous et à très vite.
