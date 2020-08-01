---
layout: post
title: Compte rendu de l'atelier git
date: '2017-11-09T23:55:01.000+01:00'
type: post
parent_id: '0'
password: ''
status: publish
categories:
- The Blog
tags:
- atelier
- git
meta:
  wpautop: "- Select -"
  _yoast_wpseo_primary_category: ''
  skin: "- Select -"
  layout_footer: "- Select -"
  layout: "- Select -"
  layout_header: "- Select -"
  _edit_last: '2427'
  _oembed_137336c2aeb0fa0f344aa0b8608d755b: "{{unknown}}"
  _thumbnail_id: '207420'
author:
  login: Tariq
  email: tariq.benezza@gmail.com
  display_name: Tariq
  first_name: Tariq
  last_name: Benezza
permalink: "/compte-rendu-de-latelier-git/"
image: "/assets/atelier-git.png"

---
![](/assets/atelier-git.png)

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
[BitBucket](https://bitbucket.org/) : Solution payante qui ne propose que des _repos_ privés et un nombre limité de contributeurs par _repo_

#### Let's begin

Dans un premier temps il va falloir installer git. Rendez vous [ici](https://git-scm.com/downloads) pour l'installer.

Une fois que c'est fait, ouvrez votrer terminal préféré et lancez la commande suivante :

`mkdir ma-recette && cd ma-recette git init`

Il s'agit là de la création du répertoire "ma-recette", nous nous y plaçons et enfin nous initialisons git pour ce _repo_

#### L'index

On crée un fichier et on ajoute notre liste d'ingrédients

`touch recette.txt git status`

git status nous indique l'état de notre dépôt. Ici on voit que notre fichier n'est pas suivi, il faut l'ajouter à l'index.

`git add recette.txt git status`

#### Le commit

Par définition le commit est un enregistrement des modifications dans le _repo_

Maintenant que notre index est prêt nous pouvons créer ce fameux commit

`git commit git status git log`

#### Retour vers le futur avec la commande revert

Que celui qui ne s'est jamais trompé me jette la première pierre. Pour éviter une pluie de caillou la commande **revert** est très pratique.  
Elle permet de revenir "dans le temps" et de faire machine arrière sur un "commit foireux" comme on dit dans le jargon.

`git revert HEAD`

Dans la commande ci-dessus on revient à l'état du dernier commit.

#### Get remote !

Après ce travail en local, il est temps de partager la recette.  
Créez un dépôt sur [GitHub](https://github.com/) avec le nom que vous voulez (dans notre exemple nous opterons pour atelier-git) et ne l'initialisez pas.

`git remote add origin https://github.com/$USER/atelier-git.git git push origin master`

Vous pouvez maintenant voir votre code sur GitHub !

#### Fork that

La contribution c'est partager son travail mais également intervenir sur le _repo_ de quelqu'un aussi. Pour cela GitHub propose de "forker" votre dossier.  
Il suffit alors d'aller sur le dépôt et de cliquer sur "Fork"

![fork]({{ site.baseurl }}/assets/fork.png)

GitHub crée une copie chez vous. C'est de là que vous pouvez partir :

`git clone $ADRESSE_DE_VOTRE_DEPOT`

Vous pouvez maintenant modifier comme bon vous semble les fichiers !

#### Pull Request ou PR pour les intimes

Mais alors quand je fais ma modification je peux directement la proposer sur le repo que j'ai forké ?

**Oui !** Et pour ce faire on passe par une **pull request**.

![pull-request]({{ site.baseurl }}/assets/pull-request.png)

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