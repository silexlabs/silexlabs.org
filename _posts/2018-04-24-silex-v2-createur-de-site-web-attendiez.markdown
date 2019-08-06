---
author: "jbips"
comments: true
date: "2018-04-24T22:16:28.000Z"
layout: "post"
title: "Silex v2, le créateur de site web que vous attendiez"
categories: ["The Blog"]

---
Il est aujourd'hui indispensable d'avoir un pied dans le web, que vous soyez une entreprise, une association ou un groupe de musique. Devant la demande grandissante, le marché des éditeurs de site web a été très secoué par les acteurs du secteur, GAFAM ou autres. Cependant, nous sommes convaincus que, comme pour le reste de votre activité, votre image sur l'Internet doit vous appartenir : vous devez pouvoir la changer du tout au tout, la déplacer ou choisir de mettre de la publicité (ou pas).







C'est en voulant vous redonner ce pouvoir que nous avons fait évoluer Silex.





<!-- more -->





## Silex 2, ça change quoi ?










Commençons par le plus visible : [l'interface utilisateur](https://github.com/silexlabs/Silex/wiki/Editor-UI). Si vous avez utilisé les versions précédentes, vous remarquerez un net changement. L'interface est épuré, plus claire et plus intuitive, elle se rapproche d'outils que vous connaissez peut-être déjà pour vous simplifier l'apprentissage et la prise en main.







![](https://www.silexlabs.org/wp-content/uploads/2018/04/Screenshot-from-2018-04-25-00-13-16.png)










Mais en plus de ce changement d'expérience utilisateur, Silex s'est aussi refait une beauté dans les coulisses. Nous avons complètement séparé Silex "l'éditeur" de [CloudExplorer ](https://github.com/silexlabs/CloudExplorer2)qui vous permet de naviguer dans vos stockages en ligne. Ainsi, les deux peuvent évoluer librement, permettant des mises à jours plus fréquentes. Cela permettra aussi, si la communauté le désire, de réutiliser ces composants de manières indépendantes : par exemple le projet de [Silex "offline"](https://github.com/silexlabs/Silex/releases) pourrait se passer de CloudExplorer, et un développeur pourra utiliser CloudExplorer pour créer un client FTP libre en ligne. Tout est maintenant permis !







L'équipe a également optimisé la méthode de création de vos sites web. Les sites générés sont maintenant 100% conformes aux normes du web et pourront donc être déployés où bon vous semble ;). D'ailleurs il se dit dans les couloirs que l'expérience de mise en ligne sera bientôt complètement revue. N'hésitez pas à partager vos idées !










## Et comment va CloudExplorer ?










Comme nous l'avons dit CloudExplorer (CE pour les intimes) peut maintenant vivre sa vie sans dépendre des mises à jours Silex. Du coup, il s'est doté de nouvelles possibilités pour fêter la v2 : WebDAV, SFTP et RemoteStorage font leur entrée dans le réseau Silex ! Cette nouvelle version a également permis de réparer les problèmes de connexion à Dropbox et à grandement optimisé l'utilisation de GitHub.









[caption id="" align="aligncenter" width="535"]![Fast bread GIF](https://media.giphy.com/media/wh8mz9x4lDshq/giphy.gif) CloudExplorer + Unifile, une allégorie[/caption]









L'autre grande nouvelle est que CE a lui aussi été scindé en deux pour assouplir encore plus la structure : son code serveur [Unifile](https://github.com/silexlabs/unifile) est maintenant sorti du nid et permettra à tous les développeurs d'utiliser le cloud dans leur application comme s'il s'agissait de leur disque dur. Si vous avez des demandes de stockage particulière, c'est avec l'équipe Unifile qu'il faudra [discuter](https://github.com/silexlabs/unifile/issues/new) (autour d'un verre de préférence). Souhaitons une longue vie à ce nouveau composant !










## La v3, c'est pour quand ?










Puisque nous avons énormément œuvré pour rendre Silex plus agile, il est maintenant plus simple de mettre en production des changements, de nouvelles fonctionnalités et des corrections de bugs (si, il y en a toujours un peu hélas). La v3 n'est donc pas pour tout de suite mais il y aura régulièrement du changement dans la v2. On peut même vous le dire, un nouvel éditeur de style est actuellement en création. On en reparle bientôt ;)










Si vous êtes à Paris et, comme nous, tout excité par cette sortie tant attendu, on a pensé à vous : [rendez-vous jeudi 26 avril dans les locaux de LeBonCoin](https://www.silexlabs.org/event/50eme-apero-open-source-de-silex-labs/) pour une démo by Alex Hoyau himself suivi d'un apéro festif !







Créez librement,







L'équipe Silex Labs


