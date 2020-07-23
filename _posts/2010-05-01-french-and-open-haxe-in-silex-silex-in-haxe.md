---
layout: post
title: French and open, haXe in Silex / Silex in haXe

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex
- The Blog
tags: []


display_name: Silex Labs
first_name: Silex Labs
last_name: ''
permalink: "/french-and-open-haxe-in-silex-silex-in-haxe/"
---

silex_ptr = Lib._global.getSilex();

layout = silex_ptr.application.getLayout(timeline);

Hello This is a technical article on the use of [haXe](http://haxe.org/) to develop animation layouts for Silex publications. I will explain why I find it very interesting to use haXe in Silex development team and then explain how I reproduced the minimal layout in haXe (little explanation and source download).

![haxe]({{ site.baseurl }}/assets/haxe.jpg "haxe") [![silex]({{ site.baseurl }}/assets/Untitled.jpg "silex")](http://silexlabs.org/open.source.flash.cms/silex)

haXe is an open source & multiplatform programming language. A code written with haXe can be compiled to JavaScript, Flash (AS2 & AS3), PHP and NekoVM.



Why haXe ?
----------

Open and French first of all ;-)

### Multiple language, one code base



### Performance

[![performance, haxe vs as3]({{ site.baseurl }}/assets/Untitled3.jpg "performance, haxe vs as3")](http://www.splashdust.net/2009/10/as3-vs-haxe-performance/)

It seems to be much efficient to use haXe than Flash to publish swf, according to [Joacim](http://www.splashdust.net/2009/10/as3-vs-haxe-performance/)...

### Libraries and file formats

haXe opens new perspectives for Silex, like the use of the numerous libraries for 3D redering, 2D physics, support of pdf (decryption only), zip, ...

Click in the movie below ...  

How to develop page transitions in Silex with haXe ?
----------------------------------------------------

  
Here I will not make a tutorial because I am not good at this :-( Instead I will explain the overall philosophy and use of Silex API. You can look at these sources in order to see how I implemented


Here are the classes you need to implement in a Silex animation layout..

Note that you do not need to have programming skills to develop a Silex animation layout if you use Flash IDE and the Silex authoring components

### The class interacting with Silex API

The class accesses Silex API thanks to this haXe
code: 
var timeline:MovieClip = Lib.current;

var silex_ptr:Dynamic = Lib._global.getSilex();

var layout:Dynamic = silex_ptr.application.getLayout(timeline);

It will use the Silex API in order to register the layout and its layer, i.e. say to
Silex: "hello, I am a layout and here are the layers which I contain". For this, use

layout.registerLayoutContainer(timeline);

layout.registerLayerContainer(layerContainer, LAYER_NAME);

[caption id="attachment_1643" align="alignnone" width="201" caption="After these calls, the layout will then be initialized and recognised by Silex for load, save operations etc. The layer will be visible in the "pages" tool box."]![Untitled2]({{ site.baseurl }}/assets/Untitled2.jpg "pages tool box")[/caption]



*   preload - Preload animation. This animation is played before any content is loaded (either text or medias) and after the transition of the parent page.
*   show - Show content. This animation is played once the content is loaded (at least the text) and after the preload anim is over.
*   close - Hide content. This animation is played when the current page is closing before the parent “transition close” anim is started and after the current page “transition close” anim is over (only if a child page was open).
*   transition - Show child page. This animation is played when a page is opened in the current layout and only after the show anim is over.
*   transitionClose - Hide child page. This animation is played when the current layout has a child page opened in and this child page is closed.

The animations registered like this

layout.registerAnim(showAnim,silex_ptr.config.ANIM_NAME_SHOW, false);

Can be MovieClips or any object with the method "play()".

**The animation(s)**

One or more classes in which you can implement the animation(s). For example a fade can let the content of the page appear. This class has to have at least the method "play()" which is called by Silex.

The animations can change the layers appearance - the layers you registered and which contain the dynamic content, i.e. the user  media.