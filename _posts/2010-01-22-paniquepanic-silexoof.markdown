---
author: "admin"
comments: true
date: "2010-01-22T08:33:29.000Z"
layout: "post"
title: "Panique/Panic Silex/OOF"
categories: ["Blog Silex","The Blog"]

---
Vous êtes en panique avec Silex ou OOF? rien ne marche et vous ne voyez pas pourquoi?
Voici quelques outils qui vous permettront d'analyser la situation. C'est un peu technique, mais ça vous donnera des indices sur ce qui ne va pas. On vous conseille évidemment un petit tour dans le forum d'abord, ça fait moins mal :-)
1- le débuggeur de services. Ca vous permet de tester si les choses vont bien côté serveur. Voir ici : [http://wp-manager.silex-ria.org/?p=375](http://wp-manager.silex-ria.org/?p=375)

2- les logs. dans le répertoire conf, il y a un fichier log.ini, qui contient la ligne

logLevel = DISABLED

Les logs sont donc désactivés. Si vous la remplacez par

logLevel = DEBUG

vous aurez des logs dans le répertoire logs/

Attention, c'est mauvais pour les performances et la sécurité, donc une fois que vous avez fini, remettez le comme avant!

Enfin, vous pouvez regarder les messages qu'échangent votre page Silex et votre serveur avec [CharlesProxy](http://www.charlesproxy.com/).

======================================================================

So you're upset with Silex or OOF? It deosn't work and you don't see why?

Here are some tools that will help you analyse the siutation. It's a bit technical, but it will give you some clues on what is going on. We obviously advise you to check out the forums first to see if someone hasn't already got the solution to your problem there.

1- The service debugger. It allows you to test if things are working ok on your server : [http://wp-manager.silex-ria.org/?p=375](http://wp-manager.silex-ria.org/?p=375)

2- The logs. In the conf folder, you can find log.ini, and it contains the following line:

logLevel = DISABLED

logs are deactivated. But if you replace it with:

logLevel = DEBUG
You will find logs in the logs/ folder

Be careful, this is bad for performance and security, so once you're done, put it back to how it was before!

Finally, you can check the messages that go between your silex page and your server with [CharlesProxy](http://www.charlesproxy.com/).


