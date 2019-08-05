---
author: "lexa"
comments: true
date: "2011-09-07T15:55:45.000Z"
layout: "post"
link: "https://www.silexlabs.org/cocktail-for-an-open-bar-community/"
slug: "cocktail-for-an-open-bar-community"
title: "Cocktail, for an open bar community !"
wordpress_id: 129346
categories: ["Blog Labs","Blog Silex Labs","The Blog"]
tags: ["cocktail","cross-platform","demo","flash","Haxe","html5","javaScript","js","library","php"]

---
_**Some parts of this article are now obsolete, as Cocktail has changed a lot (2012-08-14).**_

Cocktail, what is cocktail?!

[Cocktail is the name of a new project @ Silex Labs.](https://www.silexlabs.org/groups/labs/cocktail/)

_This is an article for developers about the haXe library Cocktail, cross platform haXe!_

_Please use up-to-date Firefox 6, Chrome or Safari, as there are still issues with other browsers._

![](https://www.silexlabs.org/wp-content/uploads/2011/09/cocktail-image.jpg)

According to the website in [The Labs](https://www.silexlabs.org/labs/), Cocktail is **a cross-platform library for the [haXe](http://haxe.org/) programming language**. It bridges the gap between all the targets supported by haXe, removing inconsistencies behind a common API. With it, **the same code base is used to deploy to these targets: **HTML5 + javaScript, **Flash, PHP**.

It helps **multi device application development** and should be used by haXe projects requiring cross-target compilation.

And of course, it is released under GPL.

In this alpha1 release, DOM manipulation basis are present, with assets loading, external libraries and native code includes, as well as drawing API. The text can be used, but the text style is not handled yet, so it may be different in js and Flash, as you can see it bellow.


[](https://www.silexlabs.org/?attachment_id=129494)



Javascript and Flash version of the clock, try to guess which one is which :)For now, the text styles are not handled yet, so it may appear different in js and Flash In this article, we will see some demo of cross platform code, and focus on the Cocktail part of the sample code. The first example, the "clock" is very simple, we load png images and manipulate them to display the time it is. The "ski game" sample is a bit more complex, and uses a classic technique in games, where the game is drawn on a screen at each frame - the scree is a canvas in HTML, and a Sprite in Flash, but this is transparent with Cocktail.

press the space bar to playguess what, this is not Flash ! Feel free to check the get started with [Cocktail article on the haXe wiki](http://haxe.org/com/libs/cocktail) for more technical information and getting started with haXe article for more details about haXe.

Links




  * [Project home](https://www.silexlabs.org/groups/labs/cocktail/)


  * [Cocktail road map and development state](https://github.com/silexlabs/Cocktail/wiki/Road-map)


  * [Cocktail source code](https://github.com/silexlabs/Cocktail)


  * [Forums](https://www.silexlabs.org/groups/labs/cocktail/forum/)


  * [Cocktail wiki on haXe.org](http://haxe.org/com/libs/cocktail)




**[Read the whole article if you want to see some code :)](https://www.silexlabs.org/the-blog/cocktail-for-an-open-bar-community/)**








* * *








<!-- more -->




## Clock demo


Here is a very basic demo, which displays an analog clock. The code is very simple and uses Cocktail library to load the background image and the clock hand image, and display it rotated, with its center as a register point.


### Flash version


Requires Flash Player 10.2.



### javascript version


Requires HTML5.



### The code


You can take look at the [code on github](https://github.com/SilexLabsThirdParty/Cocktail-legacy/blob/master/demo/clock/Clock.hx), and you will see that there is **NO conditional compilation at all**, no #if js nor #if flash...

Here we will show the parts which use the Cocktail API.


#### 1st contact: the imports show some of the classes exposed by Cocktail


[sourcecode language="actionscript3"]
import cocktail.resource.ResourceLoaderManager;
import cocktail.nativeElement.NativeElementManager;
import cocktail.domElement.ImageDOMElement;
import cocktail.domElement.TextDOMElement;
[/sourcecode]

These classes will let you manipulate the javascript or Flash DOM seamlessly, load assets and get keyboard events. As you will see it below...


#### The stage for the game


The "stage" or the root graphical object of our game, will be the root clip in Flash and the body in HTML. Here is how it is declared: 

[sourcecode language="actionscript3"]
/**
* The root of the dom (stage in flash, body in html)
*/
private static var rootDOMElement:DOMElement;
[/sourcecode]

And initialized:

[sourcecode language="actionscript3"]
rootDOMElement = new DOMElement(NativeElementManager.getRoot());
[/sourcecode]

You can notice that the root clip is returned by NativeElementManager::getRoot. Its type is NativeElement, and it is used to create a DOMElement, which is the base type for all graphical objects in Cocktail. So, this instruction, creates a DOMElement which will be used as the root container of our application, it will represent the root Sprite in the Flash version, and the body element in HTML.


#### The graphical objects


Here are the variables used to store the graphical objects

[sourcecode language="actionscript3"]
/**
* the background of the analogue clock
*/
private var _clockBackground:ImageDOMElement;

/**
* the foreground of the analogue clock
*/
private var _clockForeGround:ImageDOMElement;

/**
* the second needle of the clock
*/
private var _secondNeedle:ImageDOMElement;

/**
* the minute needle of the clock
*/
private var _minuteNeedle:ImageDOMElement;

/**
* the hour needle of the clock
*/
private var _hourNeedle:ImageDOMElement;

/**
* the numeric clock
*/
private var _clockDisplay:TextDOMElement;
[/sourcecode]


#### Manipulation of the DOM


Here is the code where the graphical assets are loaded...

[sourcecode language="actionscript3"]
ResourceLoaderManager.loadImage("assets/second_needle.png", onSecondNeedleLoaded, function(err){});
ResourceLoaderManager.loadImage("assets/hour_needle.png", onHourNeedleLoaded, function(err){});
ResourceLoaderManager.loadImage("assets/minute_needle.png", onMinuteNeedleLoaded, function(err){});
ResourceLoaderManager.loadImage("assets/clock_background.png", onClockBackgroundLoaded, function(err){});
ResourceLoaderManager.loadImage("assets/clock_foreground.png", onClockForegroundLoaded, function(err){});
[/sourcecode]

... and then attached to the DOM

[sourcecode language="actionscript3"]
rootDOMElement.addChild(_clockBackground);
rootDOMElement.addChild(_secondNeedle);
rootDOMElement.addChild(_minuteNeedle);
rootDOMElement.addChild(_hourNeedle);
rootDOMElement.addChild(_clockForeGround);
[/sourcecode]

The rotation of the images is set in order to reflect the time it is

[sourcecode language="actionscript3"]
_secondNeedle.rotation = Math.round(Date.now().getSeconds() * 6);
_minuteNeedle.rotation = Math.round(Date.now().getMinutes() * 6);
_hourNeedle.rotation = Math.round(Date.now().getHours() * (360/12));
[/sourcecode]

You can notice how simple it is to rotate a DOMElement with setRotation, passing the angle as the 1st argument and the rotation center as a 2d argument.


#### About the text


The text in cocktail is also handled as a DOMElement. But in this alpha1 release, the text style is not handled yet, so it may not appear the same in js and Flash.

[sourcecode language="actionscript3"]
_clockDisplay = new TextDOMElement();
rootDOMElement.addChild(_clockDisplay);
...
_clockDisplay.text = Date.now().toString();
[/sourcecode]


## Ski demo


Here is [the classic little ski game](http://gm2d.com/2009/02/simple-flash-game-in-haxe/) of [GM2D](http://gm2d.com/), which has modified to use Cocktail and compile in javascript and Flash with exactly the same code.

This example is interesting since it shows how to draw in a DOMElement, and how to use the keyboard events.


### Flash version


Requires Flash Player 10.2. Exactly the same as the original version...



### javascript version


Requires HTML5. Looks the same :)



### The code


You can take look at the [code on github](https://github.com/SilexLabsThirdParty/Cocktail-legacy/blob/master/demo/ski/Ski.hx), and you will see that there is **NO conditional compilation at all**, no #if js nor #if flash...

Here we will show the parts which use the Cocktail API.


#### The main classes


[sourcecode language="actionscript3"]
import cocktail.resource.ResourceLoaderManager;
import cocktail.nativeElement.NativeElementManager;
import cocktail.domElement.ImageDOMElement;
import cocktail.domElement.GraphicDOMElement;
import cocktail.domElement.TextDOMElement;
import cocktail.domElement.DOMElement;
import cocktail.keyboard.KeyboardData;
[/sourcecode]

These classes will let you manipulate the javascript or Flash DOM seamlessly, load assets and get keyboard events. As you will see it below...


#### The graphical Elements


Here are the variables used to store the graphical objects.

[sourcecode language="actionscript3"]
var mArena:GraphicDOMElement;
var mBits:ImageDOMElement;
[/sourcecode]

Note the GraphicDOMElement, this is the one to which we will draw. And we will use the ImageDOMElement as a source, since it will contain this png image:

[![](http://demos.silexlabs.org/cocktail/ski/tiles.png)](https://www.silexlabs.org/129346/the-blog/cocktail-for-an-open-bar-community/attachment/tiles/)

And here is the code where the GraphicDOMElement is initialized, before we can draw into it:

[sourcecode language="actionscript3"]
//the abstract gaphic dom object is instantiated and
//its dimensions are set. It will be used as a cross-platform
//drawing surface
mArena = new GraphicDOMElement();
mArena.width = 640;
mArena.height = 480;

//it is attached to the root dom object, the higher object
//in the DOM tree
rootDOMElement.addChild(mArena);
[/sourcecode]

And here is the "magic", how to draw in a DOMElement, which means draw in a canvas or in a Sprite depending on the target:

[sourcecode language="actionscript3"]
//use the drawImage method of the GraphicDOMElement
//to copy pixels onto a surface
mArena.drawImage(mBits, mPoint, mRect);
[/sourcecode]


## Credits


Special Thanks




  * [GM2D](http://gm2d.com/) for [the classic little ski game](http://gm2d.com/2009/02/simple-flash-game-in-haxe/) tutorial


  * Yannick for the code


  * [Pol](http://superwup.com/) for the design


  * [lexa](http://the.webapp.cat/) for the rest :)



