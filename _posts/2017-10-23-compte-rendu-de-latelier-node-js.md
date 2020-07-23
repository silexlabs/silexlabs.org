---
layout: post
title: Compte rendu de l'atelier Node.js

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- The Blog
tags: []

wpautop: "- Select -"
skin: "- Select -"
layout_footer: "- Select -"
layout_header: "- Select -"
_edit_last: '2427'
_thumbnail_id: '207335'

display_name: Tariq
first_name: Tariq
last_name: Benezza
permalink: "/compte-rendu-de-latelier-node-js/"
---

Avant tout merci !

Si _Le Cid_ avait été écrit durant l'atelier cela aurait ressemblé à cela
:  
_  
Nous partîmes cinq cents ; mais par un prompt renfort,  
Nous nous vîmes trois mille en arrivant au port 3000_

Finalement Florian avec ce super workshop est le nouveau Corneille
: 
### Déroulement

Voilà à peu de chose près comment s'est passé notre soirée
: 
*   Découverte des outils
*   Découverte de l'API Twitter
*   Création d'un serveur Node.js
*   Création du client Twitter
*   Création endpoints/tweets
*   Création endpoints API REST (tweets, homepage)

### Les outils

Les outils que nous avons utilisé sont les suivants
: 
*   **Node.JS/Javascript**

Vous pouvez télécharger node.js [ici même](https://nodejs.org/en/).

*   **NPM**

Le Node Package Manager. Il est livré avec node.js ci dessus

*   **API Twitter**

Une inscription vérifiée est nécessaire pour utiliser l'API Twitter. Vous devez donc avoir un compte twitter et le vérifier avec un numéro de mobile. Ensuite la création des identifiants se fait [ici](https://apps.twitter.com/).

*   [**Leaflet**](http://leafletjs.com/)

C'est une librairie Javascript qui va vous permettre d'enrichir vos cartes interactives.

*   **Git**


Nous vous y attendons nombreux.

### Node.js ? C'est quoi

*   Plateforme de développement
*   Utilise la machine virtuelle V8
*   Orienté événement
*   Libre sous licence MIT
*   Server side
*   Single threaded

### Standard REST

*   Representational state transfer
*   Créé en 2000 par Roy Fielding dans sa thèse "Architectural Styles and the Design of Network-based Software Architectures".
*   Échanges client-serveur
*   Serveur sans état (chaque requête d'un client contient toute l'information nécessaire)
*   Interface uniforme
*   Création page HTML & endpoint

### Architecture

![untitled-drawing]({{ site.baseurl }}/assets/Untitled-drawing-300x119.png)

### API Twitter

Il suffit de s'inscrire sur Twitter, de renseigner un numéro de portable et de créer son App ici
: 


Et voilà à quoi tout cela devrait ressembler

![presateliernodejs-odp]({{ site.baseurl }}/assets/Presateliernodejs.odp-300x276.png)

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
let filteredTweets = tweets.statuses.filter(o => o.geo !== null)`

`res.send(filteredTweets)  
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





A très vite !