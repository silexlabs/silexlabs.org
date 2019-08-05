---
author: lexa
comments: true
date: 2012-02-01 10:28:52+00:00
excerpt: "<a href=\"https://www.silexlabs.org/130892/the-blog/cocktail-v1-0-sunrise-progress-report/attachment/app_512/\"\
  \ rel=\"attachment wp-att-131734\"><img class=\"size-medium wp-image-131734 alignleft\"\
  \ title=\"App_512\" src=\"https://www.silexlabs.org/wp-content/uploads/2012/02/App_5121-300x300.png\"\
  \ alt=\"\" width=\"139\" height=\"139\" /></a><em><strong>Some parts\
  \ of this article are now obsolete, as Cocktail has changed a lot (2012-08-14).</strong></em>\
  <a title=\"Cocktail: cross-platform library for the haXe programming language\"\
  \ href=\"http://haxe.org/com/libs/cocktail\">Cocktail</a> is a <a title=\"the haXe\
  \ programming language\" href=\"http://haxe.org/\">haXe</a> library, which helps\
  \ developers produce graphical user interfaces for multi-device applications.\
  The first version of Cocktail, v1.0.x is called \"Sunrise\". And of course,\
  \ it is released under GPL. We have made great progress in the code, and also in\
  \ our vision and in our understanding of the real world issues. Here is a progress\
  \ report about this great adventure we live, launching a very ambitious project\
  \ with a long term plan in mind.Several contributors are already investing\
  \ time and efforts in the project, which is a good sign for such a young initiative:\
  \ <a href=\"http://www.superwup.com/\">Pol</a>, <a href=\"http://fr.linkedin.com/in/raphaelharmel\"\
  >codam</a>, <a href=\"http://yannickdominguez.fr/\">Yannick</a>, <a href=\"http://the.webapp.cat/\"\
  >lexa</a>, <a href=\"http://www.tofee.fr/\">zabojad</a>, <a href=\"https://www.silexlabs.org/silexlabs/\"\
  >Silex Labs</a> - non profit organization which owns the project, and <a href=\"\
  http://www.intermedia-paris.fr/\">Intermedia</a> a company based on the monetization\
  \ of innovative open source projects.Please leave us comments about\
  \ what you think, criticisms appreciated! Also you can follow <a href=\"https://github.com/silexlabs/Cocktail\"\
  >the project on github</a> and on <a href=\"https://www.silexlabs.org/groups/labs/cocktail/\"\
  >the working group</a>.In  this article you will find an overview of\
  \ what is Cocktail really, why we need it (a use case), and what is done already...\
  \ Continue reading !!!<!-- more --><h2>Scope and technical orientations</h2>\
  Cocktail was initially called the \"abstraction layer\". The goal of this\
  \ haXe library is to make it easy and efficient to set up cross platform UIs, in\
  \ haXe applications which compile for all haXe supported targets. We need to achieve\
  \ this goal in order to develop the <a href=\"https://www.silexlabs.org/groups/labs/slplayer/\"\
  >SLPlayer</a> and the futur <a href=\"http://projects.silexlabs.org/?/silex\">Silex</a> v2.\
  \ So we will focus on complex UIs, web design workflow, and deployment issues.\
  <blockquote>Cocktail is a complement to NME / jeash, as an answer to the\
  \ needs of content layout and publication. With Cocktail, UIs are built using the\
  \ DOM directly, and do not use HTML5 canvas nor drawn shapes. So, compared to NME's\
  \ approach, the generated DOM structure is simple and meaningful, e.g. a list will\
  \ be rendered with &lt;li&gt; tags in HTML, with no sprites drawing in Flash. This\
  \ approach makes sense for UIs of cross platform applications. It can be used in\
  \ combination with NME / Jeash which are ideal for the game / time critical part.</blockquote>\
  The technique we have chosen is to abstract the DOM and the different native\
  \ languages concepts, and make an implementation for each one. We did not try to\
  \ stick to one target API or another, and we tried to take the best of each. The\
  \ whole library is light, and there are few concepts, so the learning curve should\
  \ be very soft, whatever background a developer has.<h2>Use case and proof\
  \ of concept</h2>Here is a perfect use case, which we had from one of\
  \ our clients.<blockquote>One of <a href=\"http://www.intermedia-paris.fr/\"\
  >Intermedia Company</a>'s customers, a television broadcaster, wanted to provide\
  \ an immersive experience for their main broadcasting programs.The viewer\
  \ would be able to dive into a engaging cross-device experience using: a TV application\
  \ (<a href=\"http://www.hbbtv.org/\">HbbTV</a> in this case), native applications\
  \ (iPhone and Android), a website and a desktop widget. Each target needs to dislay\
  \ a part of the data stored in their CMS. Each device targets a different audience,\
  \ and has a different look and feel.</blockquote>When a set of applications\
  \ is developed with haXe and Cocktail, all the components can be reused across platform\
  \ specific applications. For example a dynamic list of items, RSS feed widget, menu,\
  \ etc. It is very interesting to be able to compile the unitary elements of the\
  \ apps for each target platform, so that when an application is developed for a\
  \ given platform, it can have all the existing functionalities at no cost. Also\
  \ some of the applications have to be compiled to several targets: the web site\
  \ is rendered in HTML5 if the browser supports it, or in Flash otherwise. The iPhone\
  \ app is the same as the Android app, so it is valuable to have the same code generating\
  \ the two applications. See the <a href=\"http://haxe.org/com/libs/cocktail/cocktail_web_app_demo\"\
  >Cocktail web app demo </a>which has been tested on<ul><li>Mobile\
  \ phones and tablets: android, iOS, Blackberry...</li><li>Desktops: Windows,\
  \ OSX, linux</li><li>TV hardware and software - Google TV, HbbTV (DTT)</li>\
  <li>Browsers as a online web application in HTML5 with a Flash fallback\
  \ - all major browsers</li><li>PHP - web servers (in order to be able\
  \ to generate and manipulate the client \"view\" on the server side)</li>\
  </ul>In order to find more details about Cocktail, and other impressive\
  \ demos:<ul><li><a title=\"Cocktail web app demo\" href=\"http://haxe.org/com/libs/cocktail/cocktail_web_app_demo\"\
  >Cocktail web app demo</a></li><li><a title=\"Cocktail project on haXe\
  \ wiki\" href=\"http://haxe.org/com/libs/cocktail\">Cocktail project on haXe wiki</a></li>\
  <li><a href=\"https://www.silexlabs.org/129346/the-blog/cocktail-for-an-open-bar-community/\"\
  >Cocktail, for an open bar community !</a></li></ul><h2>Status\
  \ of Cocktail v1.0 Sunrise</h2>This new version shows that our approach\
  \ is simple and efficient. <strong>We have implemented these major new functionalities,\
  \ all of which are cross-platform AS3/JS</strong>:<ul><li>almost\
  \ full support of  the CSS3 styles</li><li>an advanced text engine to\
  \ to be able to build complex text layouts</li><li>an API suited for both\
  \ javascript and Flash programmers</li></ul><div>We realized\
  \ how important it is to handle both<strong> Flash and HTML workflows</strong>,\
  \ and we addressed the dilema of Flash vs HTML approaches.</div><blockquote>While\
  \ developing Cocktail, we kept in mind that haXe community is mainly made of people\
  \ from both javascript and Flash world. Knowing that these are two different approaches,\
  \ and given that Cocktail is exactly in the middle, we did our best so that developers\
  \ can keep their familiar workflow. As a result, Flash vs HTML approaches are possible\
  \ when using Cocktail to build graphical user interfaces.</blockquote>\
  There is still a lot of work on cocktail to achieve the final goal: be the ultimate\
  \ most simple DOM abstraction layer for haXe UIs. Here is a list of what we will\
  \ be working on for <strong>the next few months</strong>:<ul>\
  <li>StyleManager to support CSS cascading, global CSS styles, etc.</li>\
  <li>handle the capabilities which are specific to a set of platforms, e.g. accelerometers</li>\
  <li>expose native UIs (Scroll bar, Buttons, input UIs...)</li>\
  <li>test the compilation in C++ and objective C, and add the PHP target in order\
  \ to manipulate/generate the UI on the server side</li><li>improve compatibility\
  \ with TV software (Google TV,HbbTV)</li><li>HTML and CSS parsers, in\
  \ order to be able to convert basic HTML/CSS in an abstract DOMElement hierarchy</li>\
  </ul><div>And also smaller and more technical items taken from\
  \ <a title=\"Cocktail haXe library, road map\" href=\"https://github.com/silexlabs/Cocktail/wiki/Road-map\"\
  >Cocktail road map on github</a>:</div><ul><li>missing media\
  \ (sound, video)</li><li>improve styles and dom elements: gradients, background,\
  \ overflow / masks, borders...</li><li>focus and keyboard navigation</li>\
  <li>communication with the host application and runtime (Navigator, LocalData,\
  \ capabilities, Env, ...)</li><li>cross platform embedded fonts</li>\
  </ul><div>The first <strong>beta release is scheduled for april\
  \ 2012</strong> - we may present it at the <a title=\"world wide haXe conference\"\
  \ href=\"http://wwx.haxe.org/\">WWX haXe conference</a> :)</div><h2></h2>"
layout: post
link: https://www.silexlabs.org/cocktail-v1-0-sunrise-progress-report/
slug: cocktail-v1-0-sunrise-progress-report
title: 'Cocktail v1.0 Sunrise: goals, strategy, progress report'
wordpress_id: 130892
categories:
- "Blog Silex Labs"
- "The Blog"
---

[![](https://www.silexlabs.org/wp-content/uploads/2012/02/App_5121-300x300.png)](https://www.silexlabs.org/130892/the-blog/cocktail-v1-0-sunrise-progress-report/attachment/app_512/)

				_**Some parts of this article are now obsolete, as Cocktail has changed a lot (2012-08-14).**_

				[Cocktail](http://haxe.org/com/libs/cocktail) is a [haXe](http://haxe.org/) library, which helps developers produce graphical user interfaces for multi-device applications.

				The first version of Cocktail, v1.0.x is called "Sunrise". And of course, it is released under GPL. We have made great progress in the code, and also in our vision and in our understanding of the real world issues. Here is a progress report about this great adventure we live, launching a very ambitious project with a long term plan in mind.

				Several contributors are already investing time and efforts in the project, which is a good sign for such a young initiative: [Pol](http://www.superwup.com/), [codam](http://fr.linkedin.com/in/raphaelharmel), [Yannick](http://yannickdominguez.fr/), [lexa](http://the.webapp.cat/), [zabojad](http://www.tofee.fr/), [Silex Labs](https://www.silexlabs.org/silexlabs/) - non profit organization which owns the project, and [Intermedia](http://www.intermedia-paris.fr/) a company based on the monetization of innovative open source projects.

				Please leave us comments about what you think, criticisms appreciated! Also you can follow [the project on github](https://github.com/silexlabs/Cocktail) and on [the working group](https://www.silexlabs.org/groups/labs/cocktail/).

				In  this article you will find an overview of what is Cocktail really, why we need it (a use case), and what is done already... Continue reading !!!

				<!-- more -->


## Scope and technical orientations


				Cocktail was initially called the "abstraction layer". The goal of this haXe library is to make it easy and efficient to set up cross platform UIs, in haXe applications which compile for all haXe supported targets. We need to achieve this goal in order to develop the [SLPlayer](https://www.silexlabs.org/groups/labs/slplayer/) and the futur [Silex](http://projects.silexlabs.org/?/silex) v2. So we will focus on complex UIs, web design workflow, and deployment issues.


<blockquote>Cocktail is a complement to NME / jeash, as an answer to the needs of content layout and publication. With Cocktail, UIs are built using the DOM directly, and do not use HTML5 canvas nor drawn shapes. So, compared to NME's approach, the generated DOM structure is simple and meaningful, e.g. a list will be rendered with <li> tags in HTML, with no sprites drawing in Flash. This approach makes sense for UIs of cross platform applications. It can be used in combination with NME / Jeash which are ideal for the game / time critical part.</blockquote>


				The technique we have chosen is to abstract the DOM and the different native languages concepts, and make an implementation for each one. We did not try to stick to one target API or another, and we tried to take the best of each. The whole library is light, and there are few concepts, so the learning curve should be very soft, whatever background a developer has.


## Use case and proof of concept


				Here is a perfect use case, which we had from one of our clients.


<blockquote>One of [Intermedia Company](http://www.intermedia-paris.fr/)'s customers, a television broadcaster, wanted to provide an immersive experience for their main broadcasting programs.

				The viewer would be able to dive into a engaging cross-device experience using: a TV application ([HbbTV](http://www.hbbtv.org/) in this case), native applications (iPhone and Android), a website and a desktop widget. Each target needs to dislay a part of the data stored in their CMS. Each device targets a different audience, and has a different look and feel.</blockquote>


				When a set of applications is developed with haXe and Cocktail, all the components can be reused across platform specific applications. For example a dynamic list of items, RSS feed widget, menu, etc. It is very interesting to be able to compile the unitary elements of the apps for each target platform, so that when an application is developed for a given platform, it can have all the existing functionalities at no cost. Also some of the applications have to be compiled to several targets: the web site is rendered in HTML5 if the browser supports it, or in Flash otherwise. The iPhone app is the same as the Android app, so it is valuable to have the same code generating the two applications. See the [Cocktail web app demo ](http://haxe.org/com/libs/cocktail/cocktail_web_app_demo)which has been tested on




  * Mobile phones and tablets: android, iOS, Blackberry...


  * Desktops: Windows, OSX, linux


  * TV hardware and software - Google TV, HbbTV (DTT)


  * Browsers as a online web application in HTML5 with a Flash fallback - all major browsers


  * PHP - web servers (in order to be able to generate and manipulate the client "view" on the server side)


				In order to find more details about Cocktail, and other impressive demos:


  * [Cocktail web app demo](http://haxe.org/com/libs/cocktail/cocktail_web_app_demo)


  * [Cocktail project on haXe wiki](http://haxe.org/com/libs/cocktail)


  * [Cocktail, for an open bar community !](https://www.silexlabs.org/129346/the-blog/cocktail-for-an-open-bar-community/)




## Status of Cocktail v1.0 Sunrise


				This new version shows that our approach is simple and efficient. **We have implemented these major new functionalities, all of which are cross-platform AS3/JS**:




  * almost full support of  the CSS3 styles


  * an advanced text engine to to be able to build complex text layouts


  * an API suited for both javascript and Flash programmers




We realized how important it is to handle both** Flash and HTML workflows**, and we addressed the dilema of Flash vs HTML approaches.




<blockquote>While developing Cocktail, we kept in mind that haXe community is mainly made of people from both javascript and Flash world. Knowing that these are two different approaches, and given that Cocktail is exactly in the middle, we did our best so that developers can keep their familiar workflow. As a result, Flash vs HTML approaches are possible when using Cocktail to build graphical user interfaces.</blockquote>


				There is still a lot of work on cocktail to achieve the final goal: be the ultimate most simple DOM abstraction layer for haXe UIs. Here is a list of what we will be working on for **the next few months**:




  * StyleManager to support CSS cascading, global CSS styles, etc.


  * handle the capabilities which are specific to a set of platforms, e.g. accelerometers


  * expose native UIs (Scroll bar, Buttons, input UIs...)


  * test the compilation in C++ and objective C, and add the PHP target in order to manipulate/generate the UI on the server side


  * improve compatibility with TV software (Google TV,HbbTV)


  * HTML and CSS parsers, in order to be able to convert basic HTML/CSS in an abstract DOMElement hierarchy




And also smaller and more technical items taken from [Cocktail road map on github](https://github.com/silexlabs/Cocktail/wiki/Road-map):






  * missing media (sound, video)


  * improve styles and dom elements: gradients, background, overflow / masks, borders...


  * focus and keyboard navigation


  * communication with the host application and runtime (Navigator, LocalData, capabilities, Env, ...)


  * cross platform embedded fonts




The first **beta release is scheduled for april 2012** - we may present it at the [WWX haXe conference](http://wwx.haxe.org/) :)




##
