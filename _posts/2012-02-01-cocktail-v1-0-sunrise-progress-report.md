---
layout: post
title: 'Cocktail v1.0
Sunrise: goals, strategy, progress report'

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex Labs
- The Blog
tags: []

_epLastMessage: ''
_edit_last: '15'
_itemCurrentVersion: ''
_thumbnail_id: '135561'
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: lexa
first_name: lexa
last_name: ''
permalink: "/cocktail-v1-0-sunrise-progress-report/"
---

[![]({{ site.baseurl }}/assets/App_5121-300x300.png "App_512")](https://www.silexlabs.org/130892/the-blog/cocktail-v1-0-sunrise-progress-report/attachment/app_512/)

_**Some parts of this article are now obsolete, as Cocktail has changed a lot (2012-08-14).**_

[Cocktail](http://haxe.org/com/libs/cocktail


The first version of Cocktail, v1.0.x is called "Sunrise". And of course, it is released under GPL. We have made great progress in the code, and also in our vision and in our understanding of the real world issues. Here is a progress report about this great adventure we live, launching a very ambitious project with a long term plan in mind.

Several contributors are already investing time and efforts in the project, which is a good sign for such a young




In  this article you will find an overview of what is Cocktail really, why we need it (a use case), and what is done already... Continue reading !!!

Scope and technical orientations
--------------------------------



> Cocktail is a complement to NME / jeash, as an answer to the needs of content layout and publication. With Cocktail, UIs are built using the DOM directly, and do not use HTML5 canvas nor drawn shapes. So, compared to NME's approach, the generated DOM structure is simple and meaningful, e.g. a list will be rendered with <li> tags in HTML, with no sprites drawing in Flash. This approach makes sense for UIs of cross platform applications. It can be used in combination with NME / Jeash which are ideal for the game / time critical part.

The technique we have chosen is to abstract the DOM and the different native languages concepts, and make an implementation for each one. We did not try to stick to one target API or another, and we tried to take the best of each. The whole library is light, and there are few concepts, so the learning curve should be very soft, whatever background a developer has.

Use case and proof of concept
-----------------------------

Here is a perfect use case, which we had from one of our clients.

> One of [Intermedia Company](http://www.intermedia-paris.fr/)'s customers, a television broadcaster, wanted to provide an immersive experience for their main broadcasting programs.
> 


When a set of applications is developed with haXe and Cocktail, all the components can be reused across platform specific applications. For example a dynamic list of items, RSS feed widget, menu, etc. It is very interesting to be able to compile the unitary elements of the apps for each target platform, so that when an application is developed for a given platform, it can have all the existing functionalities at no cost. Also some of the applications have to be compiled to several


*   Mobile phones and
tablets: android, iOS, Blackberry...
*  
Desktops: Windows, OSX, linux
*   TV hardware and software - Google TV, HbbTV (DTT)
*   Browsers as a online web application in HTML5 with a Flash fallback - all major browsers
*   PHP - web servers (in order to be able to generate and manipulate the client "view" on the server side)

In order to find more details about Cocktail, and other impressive
demos: 
*   [Cocktail web app demo](http://haxe.org/com/libs/cocktail/cocktail_web_app_demo "Cocktail web app demo")
*   [Cocktail project on haXe wiki](http://haxe.org/com/libs/cocktail "Cocktail project on haXe wiki")
*   [Cocktail, for an open bar community !](https://www.silexlabs.org/129346/the-blog/cocktail-for-an-open-bar-community/)

Status of Cocktail v1.0 Sunrise
-------------------------------

This new version shows that our approach is simple and efficient. **We have implemented these major new functionalities, all of which are cross-platform
AS3/JS**: 
*   almost full support of  the CSS3 styles
*   an advanced text engine to to be able to build complex text layouts
*   an API suited for both javascript and Flash programmers

We realized how important it is to handle both** Flash and HTML workflows**, and we addressed the dilema of Flash vs HTML approaches.

> While developing Cocktail, we kept in mind that haXe community is mainly made of people from both javascript and Flash world. Knowing that these are two different approaches, and given that Cocktail is exactly in the middle, we did our best so that developers can keep their familiar workflow. As a result, Flash vs HTML approaches are possible when using Cocktail to build graphical user interfaces.

There is still a lot of work on cocktail to achieve the final
goal: be the ultimate most simple DOM abstraction layer for haXe UIs. Here is a list of what we will be working on for **the next few
months**: 
*   StyleManager to support CSS cascading, global CSS styles, etc.
*   handle the capabilities which are specific to a set of platforms, e.g. accelerometers
*   expose native UIs (Scroll bar, Buttons, input UIs...)
*   test the compilation in C++ and objective C, and add the PHP target in order to manipulate/generate the UI on the server side
*   improve compatibility with TV software (Google TV,HbbTV)
*   HTML and CSS parsers, in order to be able to convert basic HTML/CSS in an abstract DOMElement hierarchy

And also smaller and more technical items taken from [Cocktail road map on github](https://github.com/silexlabs/Cocktail/wiki/Road-map "Cocktail haXe library, road
map"): 
*   missing media (sound, video)
*   improve styles and dom
elements: gradients, background, overflow / masks, borders...
*   focus and keyboard navigation
*   communication with the host application and runtime (Navigator, LocalData, capabilities, Env, ...)
*   cross platform embedded fonts

