---
author: Tariq
comments: true
date: 2017-10-23 18:23:48+00:00
excerpt: "Avant tout merci !Si <em>Le Cid</em> avait été écrit durant\
  \ l'atelier cela aurait ressemblé à cela :<em>Nous partîmes\
  \ cinq cents ; mais par un prompt renfort,Nous nous vîmes trois mille\
  \ en arrivant au port 3000</em>Finalement Florian avec ce super workshop\
  \ est le nouveau Corneille :<iframe width=\"560\" height=\"315\" src=\"\
  https://www.youtube.com/embed/NqfP0Yhbif4\" frameborder=\"0\" allowfullscreen></iframe>\
  <h3>Déroulement</h3>Voilà à peu de chose près comment s'est\
  \ passé notre soirée :<ul><li>Découverte des outils</li>\
  <li>Découverte de l'API Twitter</li><li>Création d'un serveur\
  \ Node.js</li><li>Création du client Twitter</li><li>Création\
  \ endpoints/tweets</li><li>Création endpoints API REST (tweets, homepage)</li>\
  </ul><h3>Les outils</h3>Les outils que nous avons\
  \ utilisé sont les suivants :<ul><li><strong>Node.JS/Javascript</strong></li>\
  Vous pouvez télécharger node.js <a href=\"https://nodejs.org/en/\" target=\"\
  _blank\">ici même</a>.<li><strong>NPM</strong></li>Le Node Package\
  \ Manager. Il est livré avec node.js ci dessus<li><strong>API Twitter</strong></li>\
  Une inscription vérifiée est nécessaire pour utiliser l'API Twitter. Vous\
  \ devez donc avoir un compte twitter et le vérifier avec un numéro de mobile. Ensuite\
  \ la création des identifiants se fait <a href=\"https://apps.twitter.com/\" target=\"\
  _blank\">ici</a>.<li><a href=\"http://leafletjs.com/\" target=\"_blank\"\
  ><strong>Leaflet</strong></a></li>C'est une librairie Javascript qui va\
  \ vous permettre d'enrichir vos cartes interactives.<li><strong>Git</strong></li>\
  On ne le présente plus mais si vous souhaitez en savoir plus <a href=\"\
  https://twitter.com/JbIPS\" target=\"_blank\">JB</a> nous anime <a href=\"https://www.silexlabs.org/event/introduction-a-git-versionning/\"\
  \ target=\"_blank\">une formation le 07 Novembre</a>.Nous vous y attendons\
  \ nombreux.</ul><h3>Node.js ? C'est quoi</h3>\
  <ul><li>Plateforme de développement</li><li>Utilise la machine\
  \ virtuelle V8</li><li>Orienté événement</li><li>Libre sous\
  \ licence MIT</li><li>Server side</li><li>Single threaded</li>\
  </ul><h3>Standard REST</h3><ul><li>Representational\
  \ state transfer</li><li>Créé en 2000 par Roy Fielding dans sa thèse \"\
  Architectural Styles and the Design of Network-based Software Architectures\".</li>\
  <li>Échanges client-serveur</li><li>Serveur sans état (chaque\
  \ requête d'un client contient toute l'information nécessaire)</li><li>Interface\
  \ uniforme</li><li>Création page HTML & endpoint</li></ul>\
  <h3>Architecture</h3><img src=\"https://www.silexlabs.org/wp-content/uploads/2017/10/Untitled-drawing-300x119.png\"\
  \ alt=\"untitled-drawing\" width=\"560\" height=\"222\" class=\"alignnone size-medium\
  \ wp-image-207320\" /><h3>API Twitter</h3>Il suffit de s'inscrire\
  \ sur Twitter, de renseigner un numéro de portable et de créer son App ici :\
  <a href=\"https://apps.twitter.com/\" target=\"_blank\">https://apps.twitter.com/</a>\
  Et voilà à quoi tout cela devrait ressembler<img src=\"https://www.silexlabs.org/wp-content/uploads/2017/10/Presateliernodejs.odp-300x276.png\"\
  \ alt=\"presateliernodejs-odp\" width=\"560\" height=\"515\" class=\"alignnone size-medium\
  \ wp-image-207324\" /><h3>Le code du serveur Node</h3><code>\
  'use strict'const express = require('express')const\
  \ app = express()const port = 3000app.listen(port, (err) =>\
  \ {if(err){return console.log('Error', err)}\
  }</code><h3>Le client Twitter</h3>Dans le\
  \ terminal installer le package desmondmorris/node-twitter<code>npm install\
  \ -save twitter</code>Puis créer un fichier twitter-client.js en utilisant\
  \ les clés générés plus haut dans l'interface app Twitter<code>\
  'use strict'const Twitter = require('twitter')const client\
  \ = new Twitter({consumer_key: process.env.TWITTER_CONSUMER_KEY,\
  consumer_secret: process.env.TWITTER_CONSUMER_SECRET,access_token_key:\
  \ process.env.TWITTER_ACCESS_TOKEN_KEY,access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET\
  });module.exports = client</code><h3>Le\
  \ endpoint à la racine</h3>Ou point d'entrée principal<code>\
  /** GET /* Serve front page*/app.get('/',\
  \ (req, res) => {res.sendFile(__dirname + '/index.html')})\
  </code><h3>Endpoint /tweet</h3>Ou point d'entrée\
  \ de notre requête /tweets<code>/** GET /tweets\
  * REST endpoint to get tweets* @param {String} q paris\
  * @param {String} latlon 48.8669576,2.3116284,5km*/app.get('/tweets',\
  \ (req, res) => {if (req.query.q !== null && req.query.latlon !== null\
  \ && req.query.q !== '' && req.query.latlon !== '') {twitter.get('search/tweets',\
  \ {q: req.query.q,geocode: req.query.latlon,count:\
  \ 100}).then(function (tweets) {// Filter Twitter\
  \ API results with only tweets with geo fieldlet filteredTweets = tweets.statuses.filter(o\
  \ => o.geo !== null)res.send(filteredTweets)}).catch(function\
  \ (error) {res.status(500).send(error)})} else {\
  res.sendStatus(400)}})</code>\
  <h3>Page HTML & Leaflet</h3>Pour la page HTML et la configuration de\
  \ Leaflet nous vous invitons à <a href=\"https://github.com/FTwex\" target=\"_blank\"\
  >follow Florian sur github</a> mais également à <a href=\"https://github.com/FTwex/atelier-node\"\
  \ target=\"_blank\">cloner le repo de l'atelier</a>. Des dires même de notre expert\
  \ l'API Leaflet est suffisamment bien faite pour que vous puissiez jouer avec de\
  \ façon autonome.Nous restons à disposition sur le <a href=\"https://framateam.org/login?redirect_to=%2Fsilexlabs%2Fchannels%2Ftown-square\"\
  \ target=\"_blank\">chat</a>, sur <a href=\"https://twitter.com/silexlabs\" target=\"\
  _blank\">twitter</a>, sur <a href=\"https://github.com/silexlabs\" target=\"_blank\"\
  >github</a> et par <a href=\"mailto:contact@silexlabs.org?Subject=Salut%20la%20compagnie\"\
  \ target=\"_top\">mail</a> si vous avez la moindre question.A très vite\
  \ !"
layout: post
link: https://www.silexlabs.org/compte-rendu-de-latelier-node-js/
slug: compte-rendu-de-latelier-node-js
title: Compte rendu de l'atelier Node.js
wordpress_id: 207309
categories:
- "The Blog"
---

Avant tout merci !

				Si _Le Cid_ avait été écrit durant l'atelier cela aurait ressemblé à cela :
				_
				Nous partîmes cinq cents ; mais par un prompt renfort,
				Nous nous vîmes trois mille en arrivant au port 3000_

				Finalement Florian avec ce super workshop est le nouveau Corneille :





### Déroulement



				Voilà à peu de chose près comment s'est passé notre soirée :





  * Découverte des outils


  * Découverte de l'API Twitter


  * Création d'un serveur Node.js


  * Création du client Twitter


  * Création endpoints/tweets


  * Création endpoints API REST (tweets, homepage)





### Les outils


				Les outils que nous avons utilisé sont les suivants :





  * **Node.JS/Javascript**

				Vous pouvez télécharger node.js [ici même](https://nodejs.org/en/).

  * **NPM**

				Le Node Package Manager. Il est livré avec node.js ci dessus

  * **API Twitter**

				Une inscription vérifiée est nécessaire pour utiliser l'API Twitter. Vous devez donc avoir un compte twitter et le vérifier avec un numéro de mobile. Ensuite la création des identifiants se fait [ici](https://apps.twitter.com/).

  * [**Leaflet**](http://leafletjs.com/)

				C'est une librairie Javascript qui va vous permettre d'enrichir vos cartes interactives.

  * **Git**

				On ne le présente plus mais si vous souhaitez en savoir plus [JB](https://twitter.com/JbIPS) nous anime [une formation le 07 Novembre](https://www.silexlabs.org/event/introduction-a-git-versionning/).
				Nous vous y attendons nombreux.




### Node.js ? C'est quoi







  * Plateforme de développement


  * Utilise la machine virtuelle V8


  * Orienté événement


  * Libre sous licence MIT


  * Server side


  * Single threaded





### Standard REST







  * Representational state transfer


  * Créé en 2000 par Roy Fielding dans sa thèse "Architectural Styles and the Design of Network-based Software Architectures".


  * Échanges client-serveur


  * Serveur sans état (chaque requête d'un client contient toute l'information nécessaire)


  * Interface uniforme


  * Création page HTML & endpoint





### Architecture



				![untitled-drawing](https://www.silexlabs.org/wp-content/uploads/2017/10/Untitled-drawing-300x119.png)



### API Twitter



				Il suffit de s'inscrire sur Twitter, de renseigner un numéro de portable et de créer son App ici :

				[https://apps.twitter.com/](https://apps.twitter.com/)

				Et voilà à quoi tout cela devrait ressembler

				![presateliernodejs-odp](https://www.silexlabs.org/wp-content/uploads/2017/10/Presateliernodejs.odp-300x276.png)



### Le code du serveur Node



				`
				'use strict'
				const express = require('express')
				const app = express()
				const port = 3000
				app.listen(port, (err) => {
				if(err){
				return console.log('Error', err)
				}
				}
				`



### Le client Twitter



				Dans le terminal installer le package desmondmorris/node-twitter
				`npm install -save twitter`

				Puis créer un fichier twitter-client.js en utilisant les clés générés plus haut dans l'interface app Twitter

				`
				'use strict'
				const Twitter = require('twitter')
				const client = new Twitter({
				consumer_key: process.env.TWITTER_CONSUMER_KEY,
				consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
				access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
				access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
				});
				module.exports = client
				`



### Le endpoint à la racine



				Ou point d'entrée principal

				`
				/*
				* GET /
				* Serve front page
				*/
				app.get('/', (req, res) => {
				res.sendFile(__dirname + '/index.html')
				})
				`



### Endpoint /tweet



				Ou point d'entrée de notre requête /tweets

				`
				/*
				* GET /tweets
				* REST endpoint to get tweets
				* @param {String} q paris
				* @param {String} latlon 48.8669576,2.3116284,5km
				*/
				app.get('/tweets', (req, res) => {
				if (req.query.q !== null && req.query.latlon !== null && req.query.q !== '' && req.query.latlon !== '') {
				twitter.get('search/tweets', {
				q: req.query.q,
				geocode: req.query.latlon,
				count: 100
				})
				.then(function (tweets) {
				// Filter Twitter API results with only tweets with geo field
				let filteredTweets = tweets.statuses.filter(o => o.geo !== null)

				res.send(filteredTweets)
				})
				.catch(function (error) {
				res.status(500).send(error)
				})
				} else {
				res.sendStatus(400)
				}
				})
				`



### Page HTML & Leaflet



				Pour la page HTML et la configuration de Leaflet nous vous invitons à [follow Florian sur github](https://github.com/FTwex) mais également à [cloner le repo de l'atelier](https://github.com/FTwex/atelier-node). Des dires même de notre expert l'API Leaflet est suffisamment bien faite pour que vous puissiez jouer avec de façon autonome.

				Nous restons à disposition sur le [chat](https://framateam.org/login?redirect_to=%2Fsilexlabs%2Fchannels%2Ftown-square), sur [twitter](https://twitter.com/silexlabs), sur [github](https://github.com/silexlabs) et par [mail](mailto:contact@silexlabs.org?Subject=Salut%20la%20compagnie) si vous avez la moindre question.

				A très vite !
