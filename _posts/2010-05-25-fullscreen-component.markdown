---
author: "admin"
comments: true
date: "2010-05-25T14:18:55.000Z"
layout: "post"
title: "Fullscreen Component"
categories: ["Plugins"]

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




