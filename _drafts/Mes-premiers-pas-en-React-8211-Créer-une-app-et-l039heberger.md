---
id: 207169
title: "Mes premiers pas en React &#8211; Créer une app et l&#039;heberger"
date: "2018-10-24T17:06:49.000Z"
author: "Tariq"
layout: "page"
guid: "https://www.silexlabs.org/?p=207169"
image: "/wp-content/uploads/2017/09/ATELIER-4.png"
categories: ["The Blog"]

---
Salut la compagnie,  
Dans le cadre de la saison 2018/2019 nous avons décidé de vous donner encore plus que l&#8217;année dernière. Plus de tutos, plus d&#8217;articles, plus d&#8217;ateliers mais jamais assez d&#8217;apéros !  
Parce que tout le monde nous en parlait et que j&#8217;ai harcelé @Clemos pour animer un atelier autour de cette &#8220;techno&#8221; voilà ci-dessous un petit compte rendu de notre atelier du 23 Octobre chez nos amis du bon coin.

### React &#8211;help :

React est une librairie Javascript, créée au début par et pour Facebook, qui permet d&#8217;écrire très rapidement des applis web. Et je dois vous avouer une chose me concernant, il y a clairement un avant et un après React. La première chose c&#8217;est que c&#8217;est très simple à mettre en place. Voilà la liste des ingrédients à avoir :

  * [Node.js](https://nodejs.org/en/) : @Jb vous en parle assez pour savoir ce que c&#8217;est. Mais pour rappel il s&#8217;agit d&#8217;un environnement d&#8217;execution qui vous permet de faire du Javascript côté serveur
  * Un terminal ou console pour executer quelques instructions en ligne de commande
  * Un IDE, ou environnement de developpement. @Clemos ne jure que par [Sublime](https://www.sublimetext.com/) et depuis que je lui ai avoué utiliser [Visual Studio Code](https://code.visualstudio.com/) il ne me parle plus

### Go go go !

#### Le terminal

Une fois Node installé, voilà une commande à faire dans votre terminal qui va vous changer la vie :  
`npm install -g create-react-app`  
Cette simple commande installe un package vous permettant ensuite de créer une app react de base pour vos projets. Une fois que c&#8217;est chose faite, rendez vous sur votre repertoire de travail et tapez (évidemment vous pouvez appeler votre projet comme vous le souhaitez) :  
`create-react-app my-app<br />
cd my-app/<br />
npm start`  
Normalement là votre navigateur s&#8217;ouvre et votre première application react tourne :  
  
Si vous désirez en savoir plus sur ce package tout est disponible [ici](https://github.com/facebookincubator/create-react-app)

#### Markdown App

Nous allons maintenant apporter quelques modifications à cette magnifique application et en faire un éditeur de markdown. Très brièvement, markdown est un systeme de formatage de texte simple et minimaliste. Pour exemple il est utilisé sur [Github](htttp://www.github.com) (le réseau social des développeurs) pour documenter ce qui est publié.  
Voilà ce vers quoi nous voulons aller :

<table>
  <tr>
    <th>
      Markdown
    </th>
    
    <th>
      Résultat
    </th>
  </tr>
  
  <tr>
    <th>
      <code># Title 1</code>
    </th>
    
    <th>
      <h1>
        Title 1
      </h1>
    </th>
  </tr>
  
  <tr>
    <th>
      <code>## Title 2</code>
    </th>
    
    <th>
      <h2>
        Title 2
      </h2>
    </th>
  </tr>
  
  <tr>
    <th>
      <code>### Title 3</code>
    </th>
    
    <th>
      <h3>
        Title 3
      </h3>
    </th>
  </tr>
</table>

Et ce que nous obtiendrons à la fin :  
<img src="http://localhost:8080/wp-content/uploads/2017/09/Capture-du-2017-09-19-11-29-47-300x130.png" alt="capture-du-2017-09-19-11-29-47" width="600" height="260" class="alignnone size-medium wp-image-207232" srcset="http://localhost:8080/wp-content/uploads/2017/09/Capture-du-2017-09-19-11-29-47-300x130.png 300w, http://localhost:8080/wp-content/uploads/2017/09/Capture-du-2017-09-19-11-29-47-768x334.png 768w, http://localhost:8080/wp-content/uploads/2017/09/Capture-du-2017-09-19-11-29-47.png 1020w" sizes="(max-width: 600px) 100vw, 600px" /> 

#### La forme

Avant de commencer nous allons préparer la forme du projet en utilisant [Bootstrap](http://getbootstrap.com/). Il s&#8217;agit d&#8217;une librairie qui va nous permettre de cadrier notre espace de travail. La finalité c&#8217;est d&#8217;avoir une colonne à gauche pour &#8220;le source&#8221; et une colonne à droite pour le résultat sans se prendre la tête.  
Pour cela nous allons donc intégrer
























