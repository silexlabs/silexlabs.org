---
author: admin
comments: true
date: 2010-05-25 14:18:55+00:00
excerpt: "<h1>Sources</h1><a href=\"http://wp-manager.silex-ria.org/wp-content/uploads/2010/05/fullscreen-v10.zip\"\
  >fullscreen-v1.0</a><h3>About this Component</h3>This is a silex\
  \ component (see <a href=\"http://oof.sourceforge.net/api-v1/\">http://silex-ria.org/api-v1/</a>\
  \ ). It is only available for FP 8 and newer.If you put this component\
  \ in a Silex page or in the preload files list, it will add a command to the interpreter\
  \ which make it possible to switch to fullscreen mode and back to normal.\
  <h3>Use</h3>Take an empty web site to test the component<ul>\
  <li>download the component archive and extract FullScreenComponent.cmp.swf\
  \ to the \"media/\" folder of your Silex installation folder</li><li>put\
  \ the component on the stage in Silex, or add it to the preload files list in the\
  \ manager (you will not be able to use the events of the components in this second\
  \ case</li><li>on a media, put the action \"onRelease fullscreen:true\"\
  </li><li>on a media, put the action \"onRelease fullscreen:false\"</li>\
  <li>on a media, put the action \"onRelease fullscreen:toggle\"</li>\
  <li>on the component itself, you can put these actions<ul>\
  <li>onDisplayFullScreen alert:full screen mode !</li><li>onDisplayNormal\
  \ alert:normal screen mode !</li><li>onDisplayToggle alert:screen mode\
  \ has changed !</li></ul></li></ul>Then\
  \ you can click on the medias and see the alert occures<h3>Life cycle\
  \ of the component</h3><ul><li>load in a silex page</li>\
  <li>adds the methods to the interpreter for toggle full screen/normal</li>\
  <li>dispatch events</li></ul><h3>Notes</h3>\
  <ul><li>It works only in sites published for FP 8+</li><li>The\
  \ command works only with the onRelease event</li><li>To enable full-screen\
  \ mode, the allowFullScreen parameter has been added in the object and embed tags\
  \ in Silex index.php</li><li>about the property \"Stage.display\", it\
  \ just work for the version de flash Player more than 9; so we use Stage[\"display\"\
  ] = \"normal\"; You can put the component in Sites for Flash Player 7, but it will\
  \ work only if the user has FP8+</li></ul><h3>Structure of this\
  \ component</h3><ul><li>FullScreenComponent.cmp.fla, we will\
  \ put in the dossier \"silex_trunk/components/fullscreen\";</li></ul>\
  <ul><li>FullScreenComponent.as, we will put in the dossier \"\
  silex_trunk/components/fullscreen\";</li></ul><h3>Sources</h3>\
  In the interpreter, we add a method named \"fullscreen\". in this function\
  \ we need to give parameter;<ul><li>function fullscreen(value_str);\
  <ul><li>value_str==true</li><li>value_str==false</li>\
  <li>value_str==toggle</li></ul></li></ul>\
  In the FullScreenComponent.as:<ul><li>_initAfterRegister()</li>\
  <li>utiliser silexInstance.config.flashPlayerVersion to take the version\
  \ of flashplayer</li><li>add stage listener  onFullScreen()</li>\
  <li>dynamic  add a new function  fullscreen() in the class interperter</li>\
  </ul><li>onFullScreen() -- listene to object stage<ul>\
  <li>dispatch onFullScreen event</li><li>dispatch onNormal event</li>\
  <li>dispatch onToggle event</li></ul></li>\
  <ul><li>displayFullScreen() -- when called, this flash will display at\
  \ the mode Stage.displayState = \"fullscreen\"</li></ul><ul>\
  <li>displayNormal() -- when called, this flash will display at the mode\
  \ Stage.displayState = \"normal\"</li></ul><ul><li>displayToggle()\
  \ -- when called, this function will allow us to toggle between fullscreen mode.</li>\
  <li>setFullscreenState() - used to passer the variable about the fullscreen\
  \ between the silex and the component</li></ul>"
layout: post
link: https://www.silexlabs.org/fullscreen-component/
slug: fullscreen-component
title: Fullscreen Component
wordpress_id: 639
categories:
- "Plugins"
---

# Sources


				[fullscreen-v1.0](http://wp-manager.silex-ria.org/wp-content/uploads/2010/05/fullscreen-v10.zip)


### About this Component


				This is a silex component (see [http://silex-ria.org/api-v1/](http://oof.sourceforge.net/api-v1/) ). It is only available for FP 8 and newer.
				If you put this component in a Silex page or in the preload files list, it will add a command to the interpreter which make it possible to switch to fullscreen mode and back to normal.


### Use


				Take an empty web site to test the component




  * download the component archive and extract FullScreenComponent.cmp.swf to the "media/" folder of your Silex installation folder


  * put the component on the stage in Silex, or add it to the preload files list in the manager (you will not be able to use the events of the components in this second case


  * on a media, put the action "onRelease fullscreen:true"


  * on a media, put the action "onRelease fullscreen:false"


  * on a media, put the action "onRelease fullscreen:toggle"


  * on the component itself, you can put these actions


    * onDisplayFullScreen alert:full screen mode !


    * onDisplayNormal alert:normal screen mode !


    * onDisplayToggle alert:screen mode has changed !





				Then you can click on the medias and see the alert occures


### Life cycle of the component






  * load in a silex page


  * adds the methods to the interpreter for toggle full screen/normal


  * dispatch events




### Notes






  * It works only in sites published for FP 8+


  * The command works only with the onRelease event


  * To enable full-screen mode, the allowFullScreen parameter has been added in the object and embed tags in Silex index.php


  * about the property "Stage.display", it just work for the version de flash Player more than 9; so we use Stage["display"] = "normal"; You can put the component in Sites for Flash Player 7, but it will work only if the user has FP8+




### Structure of this component






  * FullScreenComponent.cmp.fla, we will put in the dossier "silex_trunk/components/fullscreen";




  * FullScreenComponent.as, we will put in the dossier "silex_trunk/components/fullscreen";




### Sources


				In the interpreter, we add a method named "fullscreen". in this function we need to give parameter;




  * function fullscreen(value_str);


    * value_str==true


    * value_str==false


    * value_str==toggle





				In the FullScreenComponent.as:


  * _initAfterRegister()


  * utiliser silexInstance.config.flashPlayerVersion to take the version of flashplayer


  * add stage listener  onFullScreen()


  * dynamic  add a new function  fullscreen() in the class interperter



* onFullScreen() -- listene to object stage




  * dispatch onFullScreen event


  * dispatch onNormal event


  * dispatch onToggle event








  * displayFullScreen() -- when called, this flash will display at the mode Stage.displayState = "fullscreen"




  * displayNormal() -- when called, this flash will display at the mode Stage.displayState = "normal"




  * displayToggle() -- when called, this function will allow us to toggle between fullscreen mode.


  * setFullscreenState() - used to passer the variable about the fullscreen between the silex and the component


