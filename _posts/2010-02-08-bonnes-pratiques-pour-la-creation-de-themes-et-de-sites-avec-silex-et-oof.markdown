---
author: admin
comments: true
date: 2010-02-08 08:05:05+00:00
excerpt: "Ce post est pour les utilisateurs chevronnés de Silex, ceux qui l'utilisent\
  \ au quotidien. Quels outils utiliser pour être efficace, quelle arborescence de\
  \ fichiers pour vos projets, quels éléments customiser pour avoir un site à 100%\
  \ aux couleurs de votre charte graphique ?Le but est de mettre tout\
  \ le monde d'accord pour que tous les profiles utilisant Silex y retrouvent leurs\
  \ petits : flasheurs, designers, webmasters et développeurs... <strong>Alors pour\
  \ ceux qui ont envie de pousser leur pratique de Silex au dela du travail d'une\
  \ seule personne pour un seul site, lisez ceci !</strong><strong><!-- more --></strong>\
  <h1><strong>Les outils</strong></h1>Utiliser un outil de versionning\
  \ comme subversion - aka svn, pour faciliter la gestion des versions et la collaboration\
  \ à plusieurs sur un même site. Avec ce genre d'outils, il est impossible de perdre\
  \ quelque chose suite à un bug, à un déménagement, un incendie...Liens\
  \ sur subversion :<ul><li>une FAQ : http://www.ird.fr/informatique-scientifique/outils/versioning/subversion_dsi/faq/index.php</li>\
  <li>un bon client svn pour windows : http://tortoisesvn.net/</li>\
  </ul><h2>Les répertoires</h2>Créer un repository qui porte\
  \ le nom de votre projet (thème ou site) svn avec ces répertoires :<ul>\
  <li>tags/<ul><li>v1.0/</li><li>v1.1/</li>\
  <li>v1.2/</li><li>...</li></ul></li>\
  <li>trunk/<ul><li>design/</li><li>fla-components/\
  /silex-components/oof-components/layouts</li>\
  <li>website/</li></ul></li></ul>tags/\
  \ est le répertoire des \"tags\" svn, c'est à dire des copies du trunk au moment\
  \ d'une release ( http://fr.wikipedia.org/wiki/Release ). Voir ce qui se dit sur\
  \ les tags et comment les générer dans wikipedia - http://fr.wikipedia.org/wiki/Subversion_(logiciel)\
  trunk/ est le répertoire de travail, éventuellement partagé par plusieurs\
  \ personnes.trunk/design/ doit contenir tous les éléments de design\
  \ présents dans le site : les docs gimp, illustrator, photoshop, anims flash...\
  trunk/fla/ contient 3 repertoires 1. silex-components contenant les composants\
  \ silex; 2. layouts contenant les gabarits; 3. oof-components contenant les composants\
  \ oof que vous avez customisé pour votre site. Cela ne concerne que ce que vous\
  \ avez customisé après avoir téléchargé le \"Silex dev kit\" ou le \"Oof dev kit\"\
  , pas les éléments par défaut qui sont dans media/components/ de Silex.\
  trunk/website/ est le répertoire qui contient le site en lui même, c'est à dire\
  \ ce que vous allez mettre en ligne. Au départ c'est le contenu du \"silex server\"\
  \ que vous pouvez télécharger sur http://sourceforge.net/projects/silex/ .\
  <h2>Les fichiers</h2><h3>Les fichiers \"obligatoires\"</h3>\
  <strong>readme.txt</strong> doit contenir vos notes, les e-mails des auteurs,\
  \ les instructions pour installer votre thème dans Silex, l'adresse ou le thème\
  \ est téléchargeable (lien vers la platforme d'échange)... Ce fichier doit être\
  \ en Anglais, avec éventuellement des traductions dans d'autres langues.\
  <strong>license.txt</strong> doit contenir la lisense de votre création. Pour\
  \ être intégré dans Silex, il doit s'agir d'une lisense Creative Commons. Pour créer\
  \ / choisir une lisense : http://creativecommons.org/choose/?lang=fr<h3>Les\
  \ fichiers \"optionnels\"</h3>Vous pouvez utiliser les composants et gabarits\
  \ livrées avec Silex ou bien customiser ces éléments en utilisant le \"Silex dev\
  \ kit\" ou le \"Oof dev kit\". Lorsque vous customisez un élément, mettez la source\
  \ modifiée dans le répertoire trunk/fla/ de votre site.Liste des éléments\
  \ customisables :<ul><li>des éléments Silex : layer skin (1\
  \ seul par site), layouts, loader (1 seul par site)</li><li>des composants\
  \ Silex : Composants scale 9 grid, boutons \"délai\", label buttons</li>\
  <li>des composants Oof : RichTextList, ThumbList, PlayListUi, ListUi, ...</li>\
  </ul><h4>Les composants</h4><span style=\"text-decoration:\
  \ underline;\">Sources des composants</span>La source des composants\
  \ Silex et Oof est toujours composée d'un fla et éventuellement accompagnée d'un\
  \ fichier \".as\" et d'un \".xml\". Par exemple la source du composant ListUi_mypage_01\
  \ est constituée des fichiers : \"ListUi_mypage_01.cmp.fla\", \"ListUi_mypage_01.cmp_exclude.xml\"\
  \ et \"ListUiCmp.as\". Ce composant est basé sur le composant Oof ListUi qui se\
  \ trouve dans le répertoire \"silex_components/\" du \"Oof dev kit\", sous la forme\
  \ des fichiers \"ListUi.cmp.fla\", \"ListUi.cmp_exclude.xml\" et \"ListUiCmp.as\"\
  . Donc si vous voulez customiser un élément, n'oubliez pas de vérifier si il y a\
  \ dans le même répertoire des fichiers dont le nom commence par le nom du composant\
  \ et se finit par \".cmp.fla\", \".cmp_exclude.xml\" et \"Cmp.as\". Dans ce cas,\
  \ dupliquez et renommer les en même temps que le \".fla\" de votre composant.\
  Pour les composants du \"Oof dev kit\", il y a toujours un \"Cmp.as\" et\
  \ un \".cmp_exclude.xml\". Pour les composants du \"Silex dev kit\", il n'y a pas\
  \ de \"Cmp.as\" mais il y a parfois un \".cmp_exclude.xml\".<span style=\"\
  text-decoration: underline;\">Noms des composants</span>Nommez vos composants\
  \ comme dans le dev kit, par exemple RichTextList reste RichTextList. Dans le cas\
  \ où vous avez deux versions d'un composant dans le même site, ajoutez le numéro\
  \ du composant après son nom. Par exemple, si vous avez une liste bleue, une liste\
  \ verte et une liste rouge, nommez les : RichTextList, RichTextList1, RichTextList2.\
  \ Ceci vous permet de faire des sets de composants \"compatibles entre eux\".\
  <span style=\"text-decoration: underline;\">Répertoires de publication des\
  \ composants</span>Une fois publié, mettez le swf généré dans le répertoire\
  \ \"trunk/website/media/[nom de votre site]/components/\"  de votre site.\
  Composants scale 9 grid et autres composants de design -&gt; \"trunk/website/media/[nom\
  \ de votre site]/components/\"Boutons \"délai\", label buttons -&gt;\
  \ \"trunk/website/media/[nom de votre site]/components/buttons/\"Pour\
  \ les composants Oof  -&gt; \"trunk/website/media/[nom de votre site]/components/oof/\"\
  <h4>Les autres éléments customisables de Silex</h4>Mettez la\
  \ source des éléments dans \"fla/\"<span style=\"text-decoration: underline;\"\
  >Pour les layer skin</span>, publiez votre gabarit dans toutes les versions de flash\
  \ player (7 à 10) si c'est possible.-&gt; répertoire de publication\
  \ : \"trunk/website/fpX/ui/\" en remplaçant X par le numéro de version de flash\
  \ player-&gt; nom : \"layer_skin_[nom de votre site].swf\"\
  <span style=\"text-decoration: underline;\">Pour les layouts</span>\
  -&gt; répertoire de publication : \"trunk/website/layouts/\"-&gt; nom\
  \ : \"layout_[nom de votre site].swf\"<span style=\"text-decoration:\
  \ underline;\">Le loader</span> (1 seul par site)-&gt; répertoire de\
  \ publication : \"trunk/website/\" (directement à la racine mais il y aura un répertoire\
  \ \"loaders/\" dans les prochaines versions de Silex)-&gt; nom : loader.swf\
  \ (on pourra changer ce nom dans les prochaines versions de Silex)<div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">Bonnes pratiques pour la\
  \ création de thèmes et de sites avec Silex et Oof</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px;\
  \ height: 1px; top: 0px; left: -10000px;\">Les outils</div><div id=\"\
  _mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">Utiliser un outil de versionning\
  \ comme subversion - aka svn, pour faciliter la gestion des versions et la collaboration\
  \ à plusieurs sur un même site. Avec ce genre d'outils, il est impossible de perdre\
  \ quelque chose suite à un bug, à un déménagement, un incendie...</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Liens sur subversion\
  \ :</div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x:\
  \ hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\"\
  >- une FAQ : http://www.ird.fr/informatique-scientifique/outils/versioning/subversion_dsi/faq/index.php</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">- un bon client svn\
  \ pour windows : http://tortoisesvn.net/</div><div id=\"_mcePaste\" style=\"\
  position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height:\
  \ 1px; top: 0px; left: -10000px;\">Les répertoires</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px;\
  \ height: 1px; top: 0px; left: -10000px;\">Créer un repository qui porte le nom\
  \ de votre projet (thème ou site) svn avec ces répertoires :</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">- tags/</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">- v1.0/</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">- v1.1/</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">- v1.2/</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">- ...</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">- trunk/</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">- design/</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">- fla/</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">- website/</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">tags/ est le répertoire\
  \ des \"tags\" svn, c'est à dire des copies du trunk au moment d'une release ( http://fr.wikipedia.org/wiki/Release\
  \ ). Voir ce qui se dit sur les tags et comment les générer dans wikipedia - http://fr.wikipedia.org/wiki/Subversion_(logiciel)</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">trunk/ est le répertoire\
  \ de travail, éventuellement partagé par plusieurs personnes.</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">trunk/design/ doit contenir\
  \ tous les éléments de design présents dans le site : les docs gimp, illustrator,\
  \ photoshop, anims flash...</div><div id=\"_mcePaste\" style=\"position:\
  \ absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; top:\
  \ 0px; left: -10000px;\">trunk/fla/ contient les composants silex, les gabarits\
  \ et les composants oof que vous avez customisé pour votre site. Cela ne concerne\
  \ que ce que vous avez customisé après avoir téléchargé le \"Silex dev kit\" ou\
  \ le \"Oof dev kit\", pas les éléments par défaut qui sont dans media/components/\
  \ de Silex.</div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x:\
  \ hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\"\
  >trunk/website/ est le répertoire qui contient le site en lui même, c'est à dire\
  \ ce que vous allez mettre en ligne. Au départ c'est le contenu du \"silex server\"\
  \ que vous pouvez télécharger sur http://sourceforge.net/projects/silex/ .</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Les fichiers</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Les fichiers \"obligatoires\"\
  </div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden;\
  \ overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">readme.txt\
  \ doit contenir vos notes, les e-mails des auteurs, les instructions pour installer\
  \ votre thème dans Silex, l'adresse ou le thème est téléchargeable (lien vers la\
  \ platforme d'échange)... Ce fichier doit être en Anglais, avec éventuellement des\
  \ traductions dans d'autres langues.</div><div id=\"_mcePaste\" style=\"\
  position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height:\
  \ 1px; top: 0px; left: -10000px;\">license.txt doit contenir la lisense de votre\
  \ création. Pour être intégré dans Silex, il doit s'agir d'une lisense Creative\
  \ Commons. Pour créer / choisir une lisense : http://creativecommons.org/choose/?lang=fr</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Les fichiers \"optionnels\"\
  </div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden;\
  \ overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Vous\
  \ pouvez utiliser les composants et gabarits livrées avec Silex ou bien customiser\
  \ ces éléments en utilisant le \"Silex dev kit\" ou le \"Oof dev kit\". Lorsque\
  \ vous customisez un élément, mettez la source modifiée dans le répertoire trunk/fla/\
  \ de votre site.</div><div id=\"_mcePaste\" style=\"position: absolute;\
  \ overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left:\
  \ -10000px;\">Liste des éléments customisables :</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px;\
  \ height: 1px; top: 0px; left: -10000px;\">- des éléments Silex : layer skin (1\
  \ seul par site), layouts, loader (1 seul par site)</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px;\
  \ height: 1px; top: 0px; left: -10000px;\">- des composants Silex : Composants scale\
  \ 9 grid, boutons \"délai\", label buttons</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px;\
  \ height: 1px; top: 0px; left: -10000px;\">- des composants Oof : RichTextList,\
  \ ThumbList, PlayListUi, ListUi, ...</div><div id=\"_mcePaste\" style=\"\
  position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height:\
  \ 1px; top: 0px; left: -10000px;\">Les composants</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px;\
  \ height: 1px; top: 0px; left: -10000px;\">Sources des composants</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">La source des composants\
  \ Silex et Oof est toujours composée d'un fla et éventuellement accompagnée d'un\
  \ fichier \".as\" et d'un \".xml\". Par exemple la source du composant ListUi_mypage_01\
  \ est constituée des fichiers : \"ListUi_mypage_01.cmp.fla\", \"ListUi_mypage_01.cmp_exclude.xml\"\
  \ et \"ListUiCmp.as\". Ce composant est basé sur le composant Oof ListUi qui se\
  \ trouve dans le répertoire \"silex_components/\" du \"Oof dev kit\", sous la forme\
  \ des fichiers \"ListUi.cmp.fla\", \"ListUi.cmp_exclude.xml\" et \"ListUiCmp.as\"\
  . Donc si vous voulez customiser un élément, n'oubliez pas de vérifier si il y a\
  \ dans le même répertoire des fichiers dont le nom commence par le nom du composant\
  \ et se finit par \".cmp.fla\", \".cmp_exclude.xml\" et \"Cmp.as\". Dans ce cas,\
  \ dupliquez et renommer les en même temps que le \".fla\" de votre composant.</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Pour les composants\
  \ du \"Oof dev kit\", il y a toujours un \"Cmp.as\" et un \".cmp_exclude.xml\".\
  \ Pour les composants du \"Silex dev kit\", il n'y a pas de \"Cmp.as\" mais il y\
  \ a parfois un \".cmp_exclude.xml\".</div><div id=\"_mcePaste\" style=\"\
  position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height:\
  \ 1px; top: 0px; left: -10000px;\">Noms des composants</div><div id=\"\
  _mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">Nommez vos composants comme\
  \ dans le dev kit, par exemple RichTextList reste RichTextList. Dans le cas où vous\
  \ avez deux versions d'un composant dans le même site, ajoutez le numéro du composant\
  \ après son nom. Par exemple, si vous avez une liste bleue, une liste verte et une\
  \ liste rouge, nommez les : RichTextList, RichTextList1, RichTextList2. Ceci vous\
  \ permet de faire des sets de composants \"compatibles entre eux\".</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Répertoires de publication\
  \ des composants</div><div id=\"_mcePaste\" style=\"position: absolute;\
  \ overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left:\
  \ -10000px;\">Une fois publié, mettez le swf généré dans le répertoire \"trunk/website/media/[nom\
  \ de votre site]/components/\" de votre site.</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px;\
  \ height: 1px; top: 0px; left: -10000px;\">Composants scale 9 grid et autres composants\
  \ de design</div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x:\
  \ hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\"\
  >-&gt; \"trunk/website/media/[nom de votre site]/components/\"</div><div\
  \ id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y: hidden;\
  \ width: 1px; height: 1px; top: 0px; left: -10000px;\">Boutons \"délai\", label\
  \ buttons</div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x:\
  \ hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\"\
  >-&gt; \"trunk/website/media/[nom de votre site]/components/buttons/\"</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Pour les composants\
  \ Oof,</div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x:\
  \ hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\"\
  >-&gt; \"trunk/website/media/[nom de votre site]/components/oof/\"</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Les autres éléments\
  \ customisables de Silex</div><div id=\"_mcePaste\" style=\"position:\
  \ absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; top:\
  \ 0px; left: -10000px;\">Mettez la source des éléments dans \"fla/\"</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Pour les layer skin,\
  \ publiez votre gabarit dans toutes les versions de flash player (7 à 10) si c'est\
  \ possible.</div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x:\
  \ hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\"\
  >-&gt; répertoire de publication : \"trunk/website/fpX/ui/\" en remplaçant X par\
  \ le numéro de version de flash player</div><div id=\"_mcePaste\" style=\"\
  position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height:\
  \ 1px; top: 0px; left: -10000px;\">-&gt; nom : \"layer_skin_[nom de votre site].swf\"\
  </div><div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden;\
  \ overflow-y: hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">Pour\
  \ les layouts,</div><div id=\"_mcePaste\" style=\"position: absolute;\
  \ overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left:\
  \ -10000px;\">-&gt; répertoire de publication : \"trunk/website/layouts/\"</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; overflow-x: hidden; overflow-y:\
  \ hidden; width: 1px; height: 1px; top: 0px; left: -10000px;\">-&gt; nom : \"layout_[nom\
  \ de votre site].swf\"</div><div id=\"_mcePaste\" style=\"position: absolute;\
  \ overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left:\
  \ -10000px;\">Le loader (1 seul par site)</div><div id=\"_mcePaste\" style=\"\
  position: absolute; overflow-x: hidden; overflow-y: hidden; width: 1px; height:\
  \ 1px; top: 0px; left: -10000px;\">-&gt; répertoire de publication : \"trunk/website/\"\
  \ (directement à la racine mais il y aura un répertoire \"loaders/\" dans les prochaines\
  \ versions de Silex)</div><div id=\"_mcePaste\" style=\"position: absolute;\
  \ overflow-x: hidden; overflow-y: hidden; width: 1px; height: 1px; top: 0px; left:\
  \ -10000px;\">-&gt; nom : loader.swf (on pourra changer ce nom dans les prochaines\
  \ versions de Silex)</div>"
layout: post
link: https://www.silexlabs.org/bonnes-pratiques-pour-la-creation-de-themes-et-de-sites-avec-silex-et-oof/
slug: bonnes-pratiques-pour-la-creation-de-themes-et-de-sites-avec-silex-et-oof
title: Bonnes pratiques pour la création de thèmes et de sites avec Silex et Oof
wordpress_id: 1432
categories:
- "Blog Silex"
- "The Blog"
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
