---
id: 135568
title: "Cocktail v1.0 Sunrise official release"
date: "2012-08-14T11:41:32.000Z"
author: "codam"
layout: "page"
guid: "https://www.silexlabs.org/?p=135568"
categories: ["Blog Silex Labs","The Blog"]

---
This article is based on &#8220;Cocktail v1.0 Sunrise: goals, strategy, progress report&#8221; posted on February 2012 but has been adapted for the future release.<a href="https://www.silexlabs.org/130892/the-blog/cocktail-v1-0-sunrise-progress-report/attachment/icone_cocktail/" rel="attachment wp-att-135561"><br /> <img title="icone_cocktail" src="http://localhost:8080/wp-content/uploads/2012/02/icone_cocktail.png" alt="" width="121" height="127" /></a>[Cocktail](http://haxe.org/com/libs/cocktail "Cocktail: cross-platform library for the haXe programming language"), HTML rendering engine, is a [Haxe](http://haxe.org/ "the haXe programming language") library.  
Cocktail is cross-platform, embeddable and native.  
It renders HTML5, CSS3 and Haxe Javascript in native applications and web apps.  
Cocktail&#8217;s first version (v1.0.x) code name is &#8220;**Sunrise**&#8220;.  
It is released under GPL.  
We have made great progress in the code, and also in our vision and in our understanding of the real world issues. Here is a progress report about this great adventure we live, launching a very ambitious project with a long term plan in mind.  
Several contributors are already been investing time and efforts in the project, which is a good sign for such a young initiative: [Pol](http://www.superwup.com/), [codam](http://fr.linkedin.com/in/raphaelharmel), [Yannick](http://yannickdominguez.fr/), [lexa](http://the.webapp.cat/), [zabojad](http://www.tofee.fr/), [Silex Labs](https://www.silexlabs.org/silexlabs/) &#8211; non profit organization which owns the project, and [Intermedia](http://www.intermedia-paris.fr/), a company based on the monetization of innovative open source projects.  
Please leave us comments about what you think, criticisms appreciated! You can also follow [the project on github](https://github.com/silexlabs/Cocktail) and on [the working group](https://www.silexlabs.org/groups/labs/cocktail/).  
In  this article you will find an overview of what Cocktail really is, why we need it -with a use case-, and what has been already done &#8230; so you have to continue reading !!!![](https://www.silexlabs.org/wp-includes/js/tinymce/plugins/wordpress/img/trans.gif "More...")

## Scope and technical orientations

Cocktail&#8217;s initial catch phrase was &#8220;abstraction layer&#8221;, then became &#8220;Cross-platform UIs&#8221;, and now is &#8220;HTML rendering engine&#8221;. Each of these three concepts reveal a part of what Cocktail really is.  
The goal of this Haxe library is to provide an easy and efficient way to set up cross platform UIs in haXe applications.  
We need to achieve this goal in order to develop the [SLPlayer](https://www.silexlabs.org/groups/labs/slplayer/) and the future [Silex](http://projects.silexlabs.org/?/silex) v2. So we will focus on complex UIs, web design workflow, and deployment issues.

> Cocktail is a complement to NME / jeash, as an answer to the needs of content layout and publication. With Cocktail, UIs are built using the DOM, and do not use HTML5 canvas nor drawn shapes like NME. The generated DOM structure is simple and meaningful, e.g. a list will be rendered with <li> tags in HTML, with no sprites drawing in Flash. This approach makes sense for UIs of cross platform applications. It can be used in combination with NME / Jeash which are ideal for the game / time critical part.

We decided to have HaxeJS as entry point, as HTML & JavaScript are the web standards. Based on the HaxeJS code, Cocktail renders the layout in an abstract way (the rendering part) which can be used to generate the other targets like Flash, PHP, (other targets to come soon).  
The whole library is light, and there are few concepts, so the learning curve should be very soft, whatever background a developer has.

## Use case

The following use case was exposed by one of [Intermedia Company](http://www.intermedia-paris.fr/)&#8216;s customers.

> This client, a television broadcaster, wanted to provide an immersive experience for their main broadcasting programs.  
> The viewer should be able to dive into a engaging cross-device experience using a TV application ([HbbTV](http://www.hbbtv.org/) in this case), native applications (iPhone and Android), a website and a desktop widget. Each target should display a part of the data stored in their CMS. Each device targeting a different audience, and having a different look and feel.

For this case, using Haxe and Cocktail can be a really good solution to allow easier development, maintenance & evolution.

## Our approach

When using Haxe to develop an application, the common code for multiple platforms is mutualized. For instance, the main logic of your application and also the functionnal parts can be used with no extra cost on all supported platforms.  
When using Cocktail, the UIs can also be used for any supported platform.  
When combining Haxe & Cocktail, both functionnal & UI parts of the applications can be mutualized, which is a key point to allow easier development, maintenance & evolution.  
Using these cross-platform technics, several platforms can be targeted:

  * Mobile phones and tablets: android, iOS, Blackberry&#8230;
  * Desktops: Windows, OSX, linux
  * TV hardware and software &#8211; Google TV, HbbTV (DTT)
  * Browsers as a online web application in HTML5 with a Flash fallback (covering all major browsers)
  * PHP &#8211; web servers (in order to be able to generate and manipulate the client &#8220;view&#8221; on the server side)

## Proof of concept

Here are a some links where you can find demonstrations and also more details about Cocktail:

  * [Cocktail web app demo](http://haxe.org/com/libs/cocktail/cocktail_web_app_demo "Cocktail web app demo")
  * [Cocktail project on haXe wiki](http://haxe.org/com/libs/cocktail "Cocktail project on haXe wiki")
  * [Cocktail, for an open bar community !](https://www.silexlabs.org/129346/the-blog/cocktail-for-an-open-bar-community/)

## Status of Cocktail v1.0 Sunrise

This new version shows that our approach is simple and efficient. **We have implemented these major new functionalities, all of which are cross-platform JS/AS3/PHP**:

  * almost full support of  the CSS3 styles
  * an advanced text engine to to be able to build complex text layouts
  * an API suited for both javascript and Flash programmers

<div>
  We realized how important it is to handle both<strong> Flash and HTML workflows</strong>, and we addressed the dilema of Flash vs HTML approaches.
</div>

> While developing Cocktail, we kept in mind that haXe community is mainly made of people from both javascript and Flash world. Knowing that these are two different approaches, and given that Cocktail is exactly in the middle, we did our best so that developers can keep their familiar workflow. As a result, Flash vs HTML approaches are possible when using Cocktail to build graphical user interfaces.

There is still a lot of work on cocktail to achieve the final goal: be the ultimate most simple DOM abstraction layer for haXe UIs. Here is a list of what we will be working on for **the next few months**:

  * StyleManager to support CSS cascading, global CSS styles, etc.
  * handle the capabilities which are specific to a set of platforms, e.g. accelerometers
  * expose native UIs (Scroll bar, Buttons, input UIs&#8230;)
  * test the compilation in C++ and objective C, and add the PHP target in order to manipulate/generate the UI on the server side
  * improve compatibility with TV software (Google TV,HbbTV)
  * HTML and CSS parsers, in order to be able to convert basic HTML/CSS in an abstract DOMElement hierarchy

<div>
  And also smaller and more technical items taken from <a title="Cocktail haXe library, road map" href="https://github.com/silexlabs/Cocktail/wiki/Road-map">Cocktail road map on github</a>:
</div>

  * missing media (sound, video)
  * improve styles and dom elements: gradients, background, overflow / masks, borders&#8230;
  * focus and keyboard navigation
  * communication with the host application and runtime (Navigator, LocalData, capabilities, Env, &#8230;)
  * cross platform embedded fonts

<div>
  The first <strong>beta release is scheduled for 2012.</strong>
</div>
























