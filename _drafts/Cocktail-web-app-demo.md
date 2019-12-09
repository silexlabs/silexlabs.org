---
id: 130938
title: "Cocktail web app demo"
date: "2011-12-26T10:26:39.000Z"
author: "lexoyo"
layout: "page"
guid: "https://www.silexlabs.org/?p=130938"
categories: ["Blog Silex Labs","The Blog"]

---
**This article is obsolete &#8211; **it ended up [on the haXe wiki here](http://haxe.org/com/libs/cocktail/cocktail_web_app_demo)

## A proof of concept

As explained in the article [about Cocktail v1.0 alpha2](https://www.silexlabs.org/?p=130892), Cocktail is the ideal haXe library to produce your cross platform applications. And by this I mean that 1 code can be compiled and packaged for

  * android and iOS
  * windows, mac OS desktops
  * TV hardware and software as a native application
  * browsers as a web application
  * PHP in order to be able to generate and manipulate the client &#8220;view&#8221; &#8211; the DOM, on the server side

<div>
  Here is a little application which we have deployed and tested on each of these targets. For now, some functionalities are still missing, which make it impossible to navigate in the hole application on the TVs.
</div>

> <div>
>   This small app shows icons on start page, which let the user open the inner sections of the app, navigate in pages using lists of items.
> </div>
> 
> <div>
>   It is a very simple example which will show show you how easy it is to build cross platform applications with haXe and Cocktail.
> </div>

Feel free to download [the source code of the application](https://github.com/silexlabs/Cocktail/tree/develop/demo/simple-webapp/src "web app demo - cocktail cross platform library") on github or [the compiled applications for each target](https://github.com/silexlabs/Cocktail/tree/develop/demo/simple-webapp/bin), though there is a direct link to download the compiled versions in the article bellow.  
The code to generate the home page is quite simple, there is a sample code at the end of the article.

## iPhone and Android native apps

<img class="alignleft" title="cocktail-iphoneH" src="http://localhost:8080/wp-content/uploads/2011/12/cocktail-iphoneH1-300x162.png" alt="" width="180" height="97" />  
<img class="alignleft" title="cocktail-iphoneV" src="http://localhost:8080/wp-content/uploads/2011/12/cocktail-iphoneV1-162x300.png" alt="" width="97" height="180" /> The mobile version of the app is just the first step to real native apps. For this first test we have used the Flash version and AIR in order to package the application. This is quite impressive to see how the application resizes and how fast it reacts, but we plan to compile Cocktail app directly in C language and package it without AIR, which is very heavy and not supported by all phones.  
.  
.  
.  
.

## Web sites in HTML5 with a Flash fallback

<img class="alignleft" title="cocktail-browser" src="http://localhost:8080/wp-content/uploads/2011/12/cocktail-browser1-300x214.png" alt="" width="300" height="214" />  
.  
.  
.  
.  
.  
.  
.  
.  
.

## TV application

<img class="alignleft" title="cocktail-tv" src="http://localhost:8080/wp-content/uploads/2011/12/cocktail-tv1-300x225.png" alt="" width="300" height="225" />  
.<img class="alignleft size-medium wp-image-130942" title="photo" src="http://localhost:8080/wp-content/uploads/2011/12/photo1-300x225.jpg" alt="" width="300" height="225" srcset="http://localhost:8080/wp-content/uploads/2011/12/photo1-300x225.jpg 300w, http://localhost:8080/wp-content/uploads/2011/12/photo1.jpg 640w" sizes="(max-width: 300px) 100vw, 300px" />  
.  
.  
.  
.  
.  
.  
.  
.  
.  
.  
.

## Desktop applications or widget

<img class="alignleft" title="cocktail-desktop-app" src="http://localhost:8080/wp-content/uploads/2011/12/cocktail-desktop-app1-300x265.png" alt="" width="300" height="265" />  
.  
.  
.  
.  
.  
.  
.  
.  
.

## Take a look at the code

The code to generate the home page is quite simple,  &#8211; you will recognize Cocktail API

<div>
  <pre>// **
// background
var backGround:ImageDOMElement = new ImageDOMElement(NativeElementManager.createNativeElement(NativeElementTypeValue.image));
backGround.load("images/blackPixel.png");
// style is applied here even if image is not loaded so RichList assets are placed on the correct position
backGround.style.position = PositionStyleValue.absolute;
backGround.style.display = DisplayStyleValue.block;
// 100% of height and width
backGround.style.top = PositionOffsetStyleValue.length(px(0));
backGround.style.left = PositionOffsetStyleValue.length(px(0));
backGround.style.width = DimensionStyleValue.percent(100);
backGround.style.height = DimensionStyleValue.percent(100);
// **
// create a list of icons
// create the data
var richListModel = [
				{text:"Cal", imagePath:"images/calendrier_blanc.png" },
				{text:"Music", imagePath:"images/icone_music_blanc.png" },
				...
			];
// create a main container for the cells
var content:ContainerDOMElement = new ContainerDOMElement(NativeElementManager.createNativeElement(neutral));
content.style.display = block;
// create list's cells
var cellData:CellModel;
for (cellData in richListModel)
{
	// create cell with text and image
	// empty cell part
	var cell:ContainerDOMElement = new ContainerDOMElement(NativeElementManager.createNativeElement(NativeElementTypeValue.custom("li")));
	// image part
	if (cellData.imagePath != "" && cellData.imagePath != null)
	{
		var cellImage:ImageDOMElement = new ImageDOMElement();
		// add image
		cell.addChild(cellImage);
		// load image
		cellImage.load(cellData.imagePath);
	}
	// add text
	var cellTextContainer:ContainerDOMElement = Utils.getContainer();
	if (cellData.text != "" && cellData.text != null)
	{
		var textElement:TextElement = new TextElement(cellData.text);
		cellTextContainer.addText(textElement);
		cell.addChild(cellTextContainer);
	}
	// add cell to instance
	content.addChild(cell);
}
//**
// the main screen
// build the main container for all of our elements
page.addChild(backGround);
page.addChild(richList);
// attach to the body (root timeline in flash or body in html)
var body:BodyDOMElement = new BodyDOMElement();
body.addChild(page);</pre>
</div>
























