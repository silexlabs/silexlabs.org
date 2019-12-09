---
id: 138468
title: "It&#039;s a document&#039;s life"
date: "2013-05-08T11:39:27.000Z"
author: "yannick"
layout: "page"
guid: "https://www.silexlabs.org/?page_id=138468"

---
This one is an high-level overview of what happens in a cocktail&#8217;s HTML Document from start to finish. This is an idealised view of the process and doesn&#8217;t  
cover the actual implementation.

## Startup

First is the document&#8217;s creation and initialisation. This is typically done through a class of the &#8220;api&#8221; package allowing embed of a cocktail document in an application.  
In this phase :

  * The document is instantiated
  * It is given an HTML string
  * It parses this string and builds a DOM (Document Object Model) from it. (TODO : link article DOM et DOM HTML).
  * In parrallel of the DOM creation, loading of external assets (bitmap, CSS&#8230;) starts.
  * when the document is done building the DOM, it enters the invalidation/update cycle.

Invalidation/Update  
Once the document is initialised it enters an invalidation/update loop. Each time the document is modified either through  
user interaction (for instance clicking or hovering elements) or through code (for instance a script running at regular time  
interval), the document get invalidated then updated on the next &#8220;frame&#8221;. What defines a frame varies based on the platform.  
An update performs :

  * the cascading of the CSS styles on the HTML DOM
  * the update of the rendering tree, used for layout and rendering
  * the update of the layer tree, used to represent the z-ordering of the document
  * the layout the document.
  * the rendering of the document.

## Ending

When the document is deleted, it takes of nullifying each objects it holds and removing listeners to help with garbage collection.
























