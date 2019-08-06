---
author: "admin"
comments: true
date: "2010-02-08T08:05:05.000Z"
layout: "post"
title: "Bonnes pratiques pour la création de thèmes et de sites avec Silex et Oof"
categories: ["Blog Silex","The Blog"]

---
Ce post est pour les utilisateurs chevronnés de Silex, ceux qui l'utilisent au quotidien. Quels outils utiliser pour être efficace, quelle arborescence de fichiers pour vos projets, quels éléments customiser pour avoir un site à 100% aux couleurs de votre charte graphique ?

Le but est de mettre tout le monde d'accord pour que tous les profiles utilisant Silex y retrouvent leurs petits : flasheurs, designers, webmasters et développeurs... **Alors pour ceux qui ont envie de pousser leur pratique de Silex au dela du travail d'une seule personne pour un seul site, lisez ceci !**

**<!-- more -->**


# **Les outils**


Utiliser un outil de versionning comme subversion - aka svn, pour faciliter la gestion des versions et la collaboration à plusieurs sur un même site. Avec ce genre d'outils, il est impossible de perdre quelque chose suite à un bug, à un déménagement, un incendie...

Liens sur subversion :




  * une FAQ : http://www.ird.fr/informatique-scientifique/outils/versioning/subversion_dsi/faq/index.php


  * un bon client svn pour windows : http://tortoisesvn.net/




## Les répertoires


Créer un repository qui porte le nom de votre projet (thème ou site) svn avec ces répertoires :




  * tags/


    * v1.0/


    * v1.1/


    * v1.2/


    * ...





  * trunk/


    * design/


    * fla-components/
/silex-components
/oof-components
/layouts


    * website/





tags/ est le répertoire des "tags" svn, c'est à dire des copies du trunk au moment d'une release ( http://fr.wikipedia.org/wiki/Release ). Voir ce qui se dit sur les tags et comment les générer dans wikipedia - http://fr.wikipedia.org/wiki/Subversion_(logiciel)

trunk/ est le répertoire de travail, éventuellement partagé par plusieurs personnes.

trunk/design/ doit contenir tous les éléments de design présents dans le site : les docs gimp, illustrator, photoshop, anims flash...

trunk/fla/ contient 3 repertoires 1. silex-components contenant les composants silex; 2. layouts contenant les gabarits; 3. oof-components contenant les composants oof que vous avez customisé pour votre site. Cela ne concerne que ce que vous avez customisé après avoir téléchargé le "Silex dev kit" ou le "Oof dev kit", pas les éléments par défaut qui sont dans media/components/ de Silex.

trunk/website/ est le répertoire qui contient le site en lui même, c'est à dire ce que vous allez mettre en ligne. Au départ c'est le contenu du "silex server" que vous pouvez télécharger sur http://sourceforge.net/projects/silex/ .


## Les fichiers




### Les fichiers "obligatoires"


**readme.txt** doit contenir vos notes, les e-mails des auteurs, les instructions pour installer votre thème dans Silex, l'adresse ou le thème est téléchargeable (lien vers la platforme d'échange)... Ce fichier doit être en Anglais, avec éventuellement des traductions dans d'autres langues.

**license.txt** doit contenir la lisense de votre création. Pour être intégré dans Silex, il doit s'agir d'une lisense Creative Commons. Pour créer / choisir une lisense : http://creativecommons.org/choose/?lang=fr


### Les fichiers "optionnels"


Vous pouvez utiliser les composants et gabarits livrées avec Silex ou bien customiser ces éléments en utilisant le "Silex dev kit" ou le "Oof dev kit". Lorsque vous customisez un élément, mettez la source modifiée dans le répertoire trunk/fla/ de votre site.

Liste des éléments customisables :




  * des éléments Silex : layer skin (1 seul par site), layouts, loader (1 seul par site)


  * des composants Silex : Composants scale 9 grid, boutons "délai", label buttons


  * des composants Oof : RichTextList, ThumbList, PlayListUi, ListUi, ...




#### Les composants


Sources des composants

La source des composants Silex et Oof est toujours composée d'un fla et éventuellement accompagnée d'un fichier ".as" et d'un ".xml". Par exemple la source du composant ListUi_mypage_01 est constituée des fichiers : "ListUi_mypage_01.cmp.fla", "ListUi_mypage_01.cmp_exclude.xml" et "ListUiCmp.as". Ce composant est basé sur le composant Oof ListUi qui se trouve dans le répertoire "silex_components/" du "Oof dev kit", sous la forme des fichiers "ListUi.cmp.fla", "ListUi.cmp_exclude.xml" et "ListUiCmp.as". Donc si vous voulez customiser un élément, n'oubliez pas de vérifier si il y a dans le même répertoire des fichiers dont le nom commence par le nom du composant et se finit par ".cmp.fla", ".cmp_exclude.xml" et "Cmp.as". Dans ce cas, dupliquez et renommer les en même temps que le ".fla" de votre composant.

Pour les composants du "Oof dev kit", il y a toujours un "Cmp.as" et un ".cmp_exclude.xml". Pour les composants du "Silex dev kit", il n'y a pas de "Cmp.as" mais il y a parfois un ".cmp_exclude.xml".

Noms des composants

Nommez vos composants comme dans le dev kit, par exemple RichTextList reste RichTextList. Dans le cas où vous avez deux versions d'un composant dans le même site, ajoutez le numéro du composant après son nom. Par exemple, si vous avez une liste bleue, une liste verte et une liste rouge, nommez les : RichTextList, RichTextList1, RichTextList2. Ceci vous permet de faire des sets de composants "compatibles entre eux".

Répertoires de publication des composants

Une fois publié, mettez le swf généré dans le répertoire "trunk/website/media/[nom de votre site]/components/"  de votre site.

Composants scale 9 grid et autres composants de design -> "trunk/website/media/[nom de votre site]/components/"

Boutons "délai", label buttons -> "trunk/website/media/[nom de votre site]/components/buttons/"

Pour les composants Oof  -> "trunk/website/media/[nom de votre site]/components/oof/"


#### Les autres éléments customisables de Silex


Mettez la source des éléments dans "fla/"

Pour les layer skin, publiez votre gabarit dans toutes les versions de flash player (7 à 10) si c'est possible.

-> répertoire de publication : "trunk/website/fpX/ui/" en remplaçant X par le numéro de version de flash player

-> nom : "layer_skin_[nom de votre site].swf"

Pour les layouts

-> répertoire de publication : "trunk/website/layouts/"

-> nom : "layout_[nom de votre site].swf"

Le loader (1 seul par site)

-> répertoire de publication : "trunk/website/" (directement à la racine mais il y aura un répertoire "loaders/" dans les prochaines versions de Silex)

-> nom : loader.swf (on pourra changer ce nom dans les prochaines versions de Silex)


Bonnes pratiques pour la création de thèmes et de sites avec Silex et Oof




Les outils




Utiliser un outil de versionning comme subversion - aka svn, pour faciliter la gestion des versions et la collaboration à plusieurs sur un même site. Avec ce genre d'outils, il est impossible de perdre quelque chose suite à un bug, à un déménagement, un incendie...




Liens sur subversion :




- une FAQ : http://www.ird.fr/informatique-scientifique/outils/versioning/subversion_dsi/faq/index.php




- un bon client svn pour windows : http://tortoisesvn.net/




Les répertoires




Créer un repository qui porte le nom de votre projet (thème ou site) svn avec ces répertoires :




- tags/




- v1.0/




- v1.1/




- v1.2/




- ...




- trunk/




- design/




- fla/




- website/




tags/ est le répertoire des "tags" svn, c'est à dire des copies du trunk au moment d'une release ( http://fr.wikipedia.org/wiki/Release ). Voir ce qui se dit sur les tags et comment les générer dans wikipedia - http://fr.wikipedia.org/wiki/Subversion_(logiciel)




trunk/ est le répertoire de travail, éventuellement partagé par plusieurs personnes.




trunk/design/ doit contenir tous les éléments de design présents dans le site : les docs gimp, illustrator, photoshop, anims flash...




trunk/fla/ contient les composants silex, les gabarits et les composants oof que vous avez customisé pour votre site. Cela ne concerne que ce que vous avez customisé après avoir téléchargé le "Silex dev kit" ou le "Oof dev kit", pas les éléments par défaut qui sont dans media/components/ de Silex.




trunk/website/ est le répertoire qui contient le site en lui même, c'est à dire ce que vous allez mettre en ligne. Au départ c'est le contenu du "silex server" que vous pouvez télécharger sur http://sourceforge.net/projects/silex/ .




Les fichiers




Les fichiers "obligatoires"




readme.txt doit contenir vos notes, les e-mails des auteurs, les instructions pour installer votre thème dans Silex, l'adresse ou le thème est téléchargeable (lien vers la platforme d'échange)... Ce fichier doit être en Anglais, avec éventuellement des traductions dans d'autres langues.




license.txt doit contenir la lisense de votre création. Pour être intégré dans Silex, il doit s'agir d'une lisense Creative Commons. Pour créer / choisir une lisense : http://creativecommons.org/choose/?lang=fr




Les fichiers "optionnels"




Vous pouvez utiliser les composants et gabarits livrées avec Silex ou bien customiser ces éléments en utilisant le "Silex dev kit" ou le "Oof dev kit". Lorsque vous customisez un élément, mettez la source modifiée dans le répertoire trunk/fla/ de votre site.




Liste des éléments customisables :




- des éléments Silex : layer skin (1 seul par site), layouts, loader (1 seul par site)




- des composants Silex : Composants scale 9 grid, boutons "délai", label buttons




- des composants Oof : RichTextList, ThumbList, PlayListUi, ListUi, ...




Les composants




Sources des composants




La source des composants Silex et Oof est toujours composée d'un fla et éventuellement accompagnée d'un fichier ".as" et d'un ".xml". Par exemple la source du composant ListUi_mypage_01 est constituée des fichiers : "ListUi_mypage_01.cmp.fla", "ListUi_mypage_01.cmp_exclude.xml" et "ListUiCmp.as". Ce composant est basé sur le composant Oof ListUi qui se trouve dans le répertoire "silex_components/" du "Oof dev kit", sous la forme des fichiers "ListUi.cmp.fla", "ListUi.cmp_exclude.xml" et "ListUiCmp.as". Donc si vous voulez customiser un élément, n'oubliez pas de vérifier si il y a dans le même répertoire des fichiers dont le nom commence par le nom du composant et se finit par ".cmp.fla", ".cmp_exclude.xml" et "Cmp.as". Dans ce cas, dupliquez et renommer les en même temps que le ".fla" de votre composant.




Pour les composants du "Oof dev kit", il y a toujours un "Cmp.as" et un ".cmp_exclude.xml". Pour les composants du "Silex dev kit", il n'y a pas de "Cmp.as" mais il y a parfois un ".cmp_exclude.xml".




Noms des composants




Nommez vos composants comme dans le dev kit, par exemple RichTextList reste RichTextList. Dans le cas où vous avez deux versions d'un composant dans le même site, ajoutez le numéro du composant après son nom. Par exemple, si vous avez une liste bleue, une liste verte et une liste rouge, nommez les : RichTextList, RichTextList1, RichTextList2. Ceci vous permet de faire des sets de composants "compatibles entre eux".




Répertoires de publication des composants




Une fois publié, mettez le swf généré dans le répertoire "trunk/website/media/[nom de votre site]/components/" de votre site.




Composants scale 9 grid et autres composants de design




-> "trunk/website/media/[nom de votre site]/components/"




Boutons "délai", label buttons




-> "trunk/website/media/[nom de votre site]/components/buttons/"




Pour les composants Oof,




-> "trunk/website/media/[nom de votre site]/components/oof/"




Les autres éléments customisables de Silex




Mettez la source des éléments dans "fla/"




Pour les layer skin, publiez votre gabarit dans toutes les versions de flash player (7 à 10) si c'est possible.




-> répertoire de publication : "trunk/website/fpX/ui/" en remplaçant X par le numéro de version de flash player




-> nom : "layer_skin_[nom de votre site].swf"




Pour les layouts,




-> répertoire de publication : "trunk/website/layouts/"




-> nom : "layout_[nom de votre site].swf"




Le loader (1 seul par site)




-> répertoire de publication : "trunk/website/" (directement à la racine mais il y aura un répertoire "loaders/" dans les prochaines versions de Silex)




-> nom : loader.swf (on pourra changer ce nom dans les prochaines versions de Silex)


