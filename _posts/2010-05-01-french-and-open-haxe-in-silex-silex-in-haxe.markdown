---
author: admin
comments: true
date: 2010-05-01 13:50:05+00:00
excerpt: "<div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 1114px;\
  \ width: 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\"><span style=\"\
  white-space: pre;\"> </span>silex_ptr = Lib._global.getSilex();</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 1114px; width:\
  \ 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\"><span style=\"white-space:\
  \ pre;\"> </span>layout = silex_ptr.application.getLayout(timeline);</div>\
  Hello  This is a technical article on the use of <a href=\"http://haxe.org/\"\
  \ target=\"_blank\">haXe</a> to develop animation layouts for Silex publications.\
  \ I will explain why I find it very interesting to use haXe in Silex development\
  \ team and then explain how I reproduced the minimal layout in haXe (little explanation\
  \ and source download).<img class=\"size-full wp-image-1606 alignnone\"\
  \ title=\"haxe\" src=\"https://www.silexlabs.org/wp-content/uploads/2010/05/haxe.jpg\"\
  \ alt=\"haxe\" width=\"263\" height=\"69\" /> <a href=\"http://silex-ria.org/open.source.flash.cms/silex\"\
  ><img class=\"alignleft size-full wp-image-1621\" title=\"silex\" src=\"https://www.silexlabs.org/wp-content/uploads/2010/05/Untitled.jpg\"\
  \ alt=\"silex\" width=\"244\" height=\"60\" /></a>haXe is an open source\
  \ &amp; multiplatform programming language. A code written with haXe can be compiled\
  \ to JavaScript, Flash (AS2 &amp; AS3), PHP and NekoVM.It is developped\
  \ by <a href=\"http://ncannasse.fr/\" target=\"_blank\">Nicolas Cannasse</a> at\
  \ <a href=\"http://www.motion-twin.com/\" target=\"_blank\">Motion-Twin</a>, a French\
  \ game development companny. Nicolas is the one who initiated the open source Flash\
  \ community with his <a href=\"http://mtasc.org/\" target=\"_blank\">open source\
  \ Flash AS2 compiler</a> which turned out to be way better than the Adobe one :-0\
  <h2>Why haXe ?</h2>Open and French first of all ;-)\
  <h3>Multiple language, one code base</h3>It allows Silex to evolve smoothly\
  \ toward a full AS3 implementation, keeping the backward compatibility in mind.\
  \ And not only AS3 but also <a href=\"http://ncannasse.fr/blog/haxe_for_iphone\"\
  \ target=\"_blank\">iphone</a> and javascript :)<h3>Performance</h3>\
  <a href=\"http://www.splashdust.net/2009/10/as3-vs-haxe-performance/\"><img\
  \ class=\"size-full wp-image-1633 alignnone\" title=\"performance, haxe vs as3\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2010/05/Untitled3.jpg\" alt=\"\
  performance, haxe vs as3\" width=\"657\" height=\"282\" /></a>It seems\
  \ to be much efficient to use haXe than Flash to publish swf, according to <a href=\"\
  http://www.splashdust.net/2009/10/as3-vs-haxe-performance/\" target=\"_blank\">Joacim</a>...\
  <h3>Libraries and file formats</h3>haXe opens new perspectives\
  \ for Silex, like the use of the numerous libraries for 3D redering, 2D physics,\
  \ support of pdf (decryption only), zip, ...Click in the movie below\
  \ ...<object classid=\"clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" width=\"\
  680\" height=\"366\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\"\
  ><param name=\"src\" value=\"http://ncannasse.fr/file/phxdemo.swf\" /><embed type=\"\
  application/x-shockwave-flash\" width=\"680\" height=\"366\" src=\"http://ncannasse.fr/file/phxdemo.swf\"\
  ></embed></object><h2>How to develop page transitions in Silex with haXe\
  \ ?</h2><!-- more -->Here I will not make a tutorial because I\
  \ am not good at this :-( Instead I will explain the overall philosophy and use\
  \ of Silex API. You can look at these sources in order to see how I implemented\
  \ this: <a href=\"https://www.silexlabs.org/wp-content/uploads/2010/05/haxe-layout-minimal_v1.0.zip\"\
  >minimal layout of Silex, re-made with haXe</a>. For this need to install haXe and\
  \ edit the files with FlashDevelop or eclipse+<a href=\"http://haxe.org/com/ide/eclipse\"\
  \ target=\"_blank\">hxeclipse</a>.Here are the classes you need to implement\
  \ in a Silex animation layout..<address>Note that you do not need to\
  \ have programming skills to develop a Silex animation layout if you use Flash IDE\
  \ and the Silex authoring components</address><h3>The class interacting\
  \ with Silex API</h3>The class accesses Silex API thanks to this haXe\
  \ code:<pre>var timeline:MovieClip = Lib.current;</pre><pre>var\
  \ silex_ptr:Dynamic = Lib._global.getSilex();</pre><pre>var layout:Dynamic\
  \ = silex_ptr.application.getLayout(timeline);</pre><div>It will use the\
  \ Silex API in order to register the layout and its layer, i.e. say to Silex: \"\
  hello, I am a layout and here are the layers which I contain\". For this, use</div>\
  <pre>layout.registerLayoutContainer(timeline);</pre><pre>layout.registerLayerContainer(layerContainer,\
  \ LAYER_NAME);</pre>[caption id=\"attachment_1643\" align=\"alignnone\"\
  \ width=\"201\" caption=\"After these calls, the layout will then be initialized\
  \ and recognised by Silex for load, save operations etc. The layer will be visible\
  \ in the &quot;pages&quot; tool box.\"]<img class=\"size-full wp-image-1643   \"\
  \ title=\"pages tool box\" src=\"https://www.silexlabs.org/wp-content/uploads/2010/05/Untitled2.jpg\"\
  \ alt=\"Untitled2\" width=\"201\" height=\"230\" />[/caption]The animations\
  \ for the layer are to be registered too. These animations will be played when silex\
  \ want it to. The following animations can be  registered for a given layer (descriptions\
  \ come from <a href=\"http://silex-ria.org/api-v1/\" target=\"_blank\">Silex API\
  \ technical documentation</a>, especially the <a href=\"http://silex-ria.org/api-v1/files/core/Constants-as.html#org.silex.core.Constants.ANIM_NAME_PRELOAD\"\
  \ target=\"_blank\">constant for animation names</a>):<ul><li>preload\
  \ - Preload animation. This animation is played before any content is loaded (either\
  \ text or medias) and after the transition of the parent page.</li><li>show\
  \ - Show content. This animation is played once the content is loaded (at least\
  \ the text) and after the preload anim is over.</li><li>close - Hide content.\
  \ This animation is played when the current page is closing before the parent “transition\
  \ close” anim is started and after the current page “transition close” anim is over\
  \ (only if a child page was open).</li><li>transition - Show child page.\
  \ This animation is played when a page is opened in the current layout and only\
  \ after the show anim is over.</li><li>transitionClose - Hide child page.\
  \ This animation is played when the current layout has a child page opened in and\
  \ this child page is closed.</li></ul>The animations registered\
  \ like this<pre>layout.registerAnim(showAnim,silex_ptr.config.ANIM_NAME_SHOW,\
  \ false);</pre>Can be MovieClips or any object with the method \"play()\"\
  .<strong>The animation(s)</strong>One or more classes in\
  \ which you can implement the animation(s). For example a fade can let the content\
  \ of the page appear. This class has to have at least the method \"play()\" which\
  \ is called by Silex.The animations can change the layers appearance\
  \ - the layers you registered and which contain the dynamic content, i.e. the user\
  \  media."
layout: post
link: https://www.silexlabs.org/french-and-open-haxe-in-silex-silex-in-haxe/
slug: french-and-open-haxe-in-silex-silex-in-haxe
title: French and open, haXe in Silex / Silex in haXe
wordpress_id: 1605
categories:
- "Blog Silex"
- "The Blog"
---

silex_ptr = Lib._global.getSilex();




layout = silex_ptr.application.getLayout(timeline);


				Hello  This is a technical article on the use of [haXe](http://haxe.org/) to develop animation layouts for Silex publications. I will explain why I find it very interesting to use haXe in Silex development team and then explain how I reproduced the minimal layout in haXe (little explanation and source download).

				![haxe](https://www.silexlabs.org/wp-content/uploads/2010/05/haxe.jpg) [![silex](https://www.silexlabs.org/wp-content/uploads/2010/05/Untitled.jpg)](http://silex-ria.org/open.source.flash.cms/silex)

				haXe is an open source & multiplatform programming language. A code written with haXe can be compiled to JavaScript, Flash (AS2 & AS3), PHP and NekoVM.

				It is developped by [Nicolas Cannasse](http://ncannasse.fr/) at [Motion-Twin](http://www.motion-twin.com/), a French game development companny. Nicolas is the one who initiated the open source Flash community with his [open source Flash AS2 compiler](http://mtasc.org/) which turned out to be way better than the Adobe one :-0


## Why haXe ?


				Open and French first of all ;-)


### Multiple language, one code base


				It allows Silex to evolve smoothly toward a full AS3 implementation, keeping the backward compatibility in mind. And not only AS3 but also [iphone](http://ncannasse.fr/blog/haxe_for_iphone) and javascript :)


### Performance


				[![performance, haxe vs as3](https://www.silexlabs.org/wp-content/uploads/2010/05/Untitled3.jpg)](http://www.splashdust.net/2009/10/as3-vs-haxe-performance/)

				It seems to be much efficient to use haXe than Flash to publish swf, according to [Joacim](http://www.splashdust.net/2009/10/as3-vs-haxe-performance/)...


### Libraries and file formats


				haXe opens new perspectives for Silex, like the use of the numerous libraries for 3D redering, 2D physics, support of pdf (decryption only), zip, ...

				Click in the movie below ...



## How to develop page transitions in Silex with haXe ?


				<!-- more -->
				Here I will not make a tutorial because I am not good at this :-( Instead I will explain the overall philosophy and use of Silex API. You can look at these sources in order to see how I implemented this: [minimal layout of Silex, re-made with haXe](https://www.silexlabs.org/wp-content/uploads/2010/05/haxe-layout-minimal_v1.0.zip). For this need to install haXe and edit the files with FlashDevelop or eclipse+[hxeclipse](http://haxe.org/com/ide/eclipse).

				Here are the classes you need to implement in a Silex animation layout..

				Note that you do not need to have programming skills to develop a Silex animation layout if you use Flash IDE and the Silex authoring components


### The class interacting with Silex API


				The class accesses Silex API thanks to this haXe code:


    var timeline:MovieClip = Lib.current;




    var silex_ptr:Dynamic = Lib._global.getSilex();




    var layout:Dynamic = silex_ptr.application.getLayout(timeline);




It will use the Silex API in order to register the layout and its layer, i.e. say to Silex: "hello, I am a layout and here are the layers which I contain". For this, use




    layout.registerLayoutContainer(timeline);




    layout.registerLayerContainer(layerContainer, LAYER_NAME);


				[caption id="attachment_1643" align="alignnone" width="201" caption="After these calls, the layout will then be initialized and recognised by Silex for load, save operations etc. The layer will be visible in the "pages" tool box."]![Untitled2](https://www.silexlabs.org/wp-content/uploads/2010/05/Untitled2.jpg)[/caption]

				The animations for the layer are to be registered too. These animations will be played when silex want it to. The following animations can be  registered for a given layer (descriptions come from [Silex API technical documentation](http://silex-ria.org/api-v1/), especially the [constant for animation names](http://silex-ria.org/api-v1/files/core/Constants-as.html#org.silex.core.Constants.ANIM_NAME_PRELOAD)):




  * preload - Preload animation. This animation is played before any content is loaded (either text or medias) and after the transition of the parent page.


  * show - Show content. This animation is played once the content is loaded (at least the text) and after the preload anim is over.


  * close - Hide content. This animation is played when the current page is closing before the parent “transition close” anim is started and after the current page “transition close” anim is over (only if a child page was open).


  * transition - Show child page. This animation is played when a page is opened in the current layout and only after the show anim is over.


  * transitionClose - Hide child page. This animation is played when the current layout has a child page opened in and this child page is closed.


				The animations registered like this


    layout.registerAnim(showAnim,silex_ptr.config.ANIM_NAME_SHOW, false);


				Can be MovieClips or any object with the method "play()".

				**The animation(s)**

				One or more classes in which you can implement the animation(s). For example a fade can let the content of the page appear. This class has to have at least the method "play()" which is called by Silex.

				The animations can change the layers appearance - the layers you registered and which contain the dynamic content, i.e. the user  media.
