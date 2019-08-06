---
author: "ariels"
comments: true
date: "2010-11-23T12:23:55.000Z"
layout: "post"
title: "Thoughts on Oof"
categories: ["Blog Silex Labs","The Blog"]

---
This post is a recap of Oof and it's history, some of the more  recurring comments we get on the projects, and some speculation about  the future of the project. On top of that for the more technically  minded are some ideas on how this could be done. Nothing is yet set in  stone, so constructive criticism is appreciated!


## About Oof


See the functionalities, target etc here [http://oof.sourceforge.net/](http://oof.sourceforge.net/)

<!-- more -->


## Scope of Oof


The fields




  * User interface design


  * Webdesign


  * Simple data manipulations


The goals


  * improve productivity


  * lower the needed skills


  * clarify the workflow


Key target


  * designers and ergonomists (in Silex)


  * web designers (in Flash)


  * developers (in javascript, ActionScript, java...)




## Oof and it's history


When we started with Oof, the idea was to build a toolbox so that  designers could manipulate data without asking us to reinvent the wheel  on each new project. We first thought it would be another ActionScript  framework but our clients and therefore our core target wasn't  developers but designers and the goal was to improve productivity and  clarify the workflow. Furthermore, our project Silex was more and more  successful and the use of Oof directly in Silex was very promising since  it was opening the doors of application development to designers and  ergonomists. So we made a set of components which you can use exactly  the same way inside Flash IDE or in Silex, which let you manipulate and  display data without any code, just by combining the components and  setting their parameters.

Oof would be modular, and each module would know as little as necessary  about its surrounding environment. The initial set up was that there  was data on a server, and we needed to display it in a list. We already  had a list, we just needed to retrieve the data from the server.  Furthermore, the data could be received in many ways. It could be an RSS  feed, something stored in a custom database*, an Excel file on a  server*, JSON, XML, XML-RPC (Google API, flickr, ...), a flat text file,  CSV, etc. So we built a variety of what we called “Connectors”, whose  job was to get the data and make it available to the other modules. We  then just needed that something in the middle that would take the data  and interact with the list. We also wanted to be able to do stuff when  the user clicked in the list, and so was born the “DataSelector”.

* use server side script written in php

Drawing: Server with the data (the internet) <---> Connector <----> DataSelector <----> List




  * DatabaseConnector, ExcelConnector, RssConnector, XmlConnector


  * ThumbList, RichTextList, DropDownList, RollOverMenu, SlideMenu


If you just added something to display an image you could build an  image gallery with this, and so we did. So we got this setup:

Drawing: Server with  the data (the internet) <---> Connector <----> DataSelector  <----> List <--------> Image display


  * AudioDisplay, ImageDisplay, VideoDisplay, MultiLineIo, SingleLineIo


From this promising start Oof grew to integrate new modules and  functionalities, and we got to today, where quite a few people use the  project, and we have some hindsight on what we got right and what we got  wrong.


## Oof components list


List of Oof components organized by category

User interface




  * AudioDisplay, ImageDisplay, VideoDisplay, MultiLineIo, SingleLineIo


  * CheckBox, ColorPick, ColorView, TextEditor


  * ListScrollBar, ListUi, PlayListUi


  * ReorderableRichTextList, RichTextList, RollOverMenuList, SlideMenu, ThumbList


  * Timer


Non visual


  * DataContainer


  * EmailConnector, EmailSender


  * LoginConnector, LockedIcon (specific to Silex)


  * DatabaseConnector, ExcelConnector, RssConnector, XmlConnector


  * DataSelector, RecordCreator, RecordDeleter, RecordUpdater


  * Uploader


Debug


  * DataContainerViewer


  * OofDiagnosis




## Complaints about Oof


Please comment, but this is what we hear the most:




  * Oof is too complicated. Yes ok, we plead guilty to this. We  understand that you would just like for example to drop an Image Gallery  module on the stage, give it the url where it's supposed to get the  data and be done with it. You really couldn't care less about Connectors  and DataSelectors, and you have to deliver this website yesterday.


  * You would like to be able to use this other list because of its cool  text effect, but you can't. More generally, Oof should integrate well  with other components that weren't necessarily written for it.


  * When you get something wrong, nothing happens and you get no feedback on what might be missing.


  * You would like to build and maybe sell your own Oof modules.


  * You would like to use Oof directly in Flash and not just Silex.




## Speculation on the future


Oof is split into 2 parts: Oof Core and Oof Modules. Oof Core is the  technology that allows linking modules together, and some other stuff  that is detailed further down. Oof Modules is more or less everything  else: modules that are written for Oof and that fit well with its  philosophy. The Oof 1.x modules are migrated to Oof Modules. Last but  not least, third party Oof modules are skinable and redistributable.

The system is articulated around two groups of people: module users and  module creators. So two use cases describing their experiences follow:


### Oof User use case


The user has a blank stage and wants to build a image gallery. He can




  * take a ready Image Gallery module


  * if the ready made modules aren't the right fit, he choose from a list  of macros that will assemble the basics for him and he can just tweak  the settings.


  * Finally, and this for the advanced users only, he can do what he has  to do now, which is assemble the low level modules himself


If something goes wrong, an analysis tool is available to guide him.


### Oof Module creator use case


The module creator has this cool Flash list he would like to integrate  and distribute. He fires up the Oof Creator application, which guides  him through the different steps of generating the necessary wrappers for  his list, and helps him distribute his new module. It can then be used  in Flash, in Silex, and in Javascript.


## Some loose technical specifications


This may all seem pie in the sky, but most of it is actually doable.  The basic foundation of this, without which it doesn't mean much, is the  Oof Module creator experience. How can we make this happen?

All the module creator needs is an ActionScript Interface to his  existing class. This interface describes all the methods. In the  comments for each method he adds additional information about what it  does, like for Javadocs. For example, here's an excerpt from an  interface for an ImageGallery module:

**package**

{

**public** **interface** IImageGallery

{

/**

* the url for the rss feed

* @type url

* @...

* */

**function** **set** rssFeedUrl(value:String):**void**;

}

}

We can feed this interface to an app that can generate a wrapper that  instanciates the ImageGallery, and can interact with different host  technologies. For Flash, it could generate “Inspectable” tags, for Silex  the properties list, for Javascript something that works with  ExternalInterface and/or Flashvars.

So that the user experience can happen as described, the existing  modules need to be assembled together in a Flash class, the interface  can be extracted, and it can be fed to the wrapper generator. The macro  bit is dodgy but doable, as we already assemble components in Silex, it  can be used as a starting point.

The whole marketplace thing is really more a social engineering thing  than a technical problem, so we can take care of that once the basics  are sorted out.


