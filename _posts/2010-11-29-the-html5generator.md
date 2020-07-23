---
layout: post
title: The HTML5Generator

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Tutorials Silex
tags: []

_epLastError: ''
_epLastMessage: ''
_edit_last: '9'
_itemCurrentVersion: ''

display_name: Benjamin
first_name: ''
last_name: ''
permalink: "/the-html5generator/"
---

HTML5Rendering
==============

This project aims at being able to output a visually similar HTML5 version of SILEX Websites that looks like in Flash.

The parameters of this plugin are (in your manager, the plugins section of a publication)

*   default
format: Values can be 'html' or 'flash'. It is the format which will be displayed if there is not a format given in the URL (the '&format=html' or '&format=flash' in the address
*   CSS


This is not pixel perfect at the moment but looks pretty good.

Server-side processing

Everything is processed on the server-side, which makes this output perfectly suited for search engines. This has the drawback of not allowing actions to be triggered.

Components availability

One has to understand that there are two different parts in this
project: 
*   The engine (called HTML5Generator)
*   The components (HTML version of components)

The engine is what is called by the HTTP Server and what takes the URL, deduces the publication and layers to be opened. It then loads components and initialize them with the values needed depending on what is in the publication's layers' XML files.

The components are exactly what they are in the Flash version of SILEX since the introduction of XMLv3. The only difference is that we are loading the HTML5 version of them (we had to extend the descriptors in order to do that).

HTML5Generator
==============

Repository
----------

The repository is the open-source one of SILEX


Sources
-------

There is a project directory in trunk/projects/html5generator, it does contain the hxml file to be ran (while working in this directory). The binaries are then located in the bin directory.

Sources on their own are located in trunk/framework/hx and the base package for this project is org.silex.htmlGenerator.

Dependencies
------------

### haXe

The HTML5Generator is written using the haXe language so, before compiling, you will need to install it from http://www.haxe.org.

No additional library is required.

Building
--------

You just have to run the build.hxml file from the directory it's in. (Either double-click or run "haxe build.hxml" from command-line when in its directory).

Deployment
----------

After compiling, you can simply copy the content of the trunk/projects/html5generator/bin directory in trunk/silex_server/plugins/htmlGenerator/generator.

Activation
----------

As you can guess from the deployment step, the html5Generator is a plugin and should be activated. To do so, you just have to go to the manager > Settings > Plugins > Activate a plugin and choose the htmlGenerator plugin.

Note that you will also need to activate components (see the baseComponents section).

Under the hood
--------------

The generator instanciates components and fills them with the values for their properties, then, it calls the getHTML function of the components. This function should return a string that is the HTML that's going to be given to the client to render the component.

### Hooks

The plugin hooks to "pre-index-head", and, right after executing its logic, stops the normal flow of SILEX so that nothing else gets printed to the browser. This is implemented in the index.php file.

baseComponents
==============

Repository
----------

The repository is the open-source one of SILEX
: https://silex.svn.sourceforge.net/svnroot/silex/trunk

Sources
-------

There is a project directory in trunk/projects/html5basecomponents, it does contain the hxml file to be ran (while working in this directory). The binaries are then located in the bin directory.

Sources on their own are located in trunk/framework/hx and the base package for this project is org.silex.ui.

Also, we had to modify the base component's descriptor files in order to include needed information for HTML5. Those are already located in trunk/silex_server/plugins/baseComponents/descriptors (see the "descriptors" section below).

The UiBase class implements the getHTML function and handles icons and basic properties (position/rotation...). It then calls the returnHTML function of subclasses. So, if your components extends UiBase, it should only implement returnHTML and not getHTML.

Dependencies
------------

### haXe

The baseComponents are written using the haXe language so, before compiling, you will need to install it from http://www.haxe.org.

No additional library is required.

Building
--------

You just have to run the build.hxml file from the directory it's in. (Either double-click or run "haxe build.hxml" from command-line).

Deployment
----------

After compiling, you can simply copy the content of the trunk/projects/html5basecomponents/bin/lib directory in trunk/silex_server/plugins/baseComponents/html5.

Activation
----------

After deploying, you should activate the baseComponents plugin if it's not already activated. To do so, simply go to the manager > Settings > Plugins > Activate a plugin and choose the baseComponents plugin.

Descriptors
-----------

Because the html5Generator needs some information to instanciate components (such as where to look for the component's classes and the class name), we had to extend the descriptor files. We've only added the "html5Url" tag which has a textnode as a child. This text is composed of two
parts: the first part is the path to the directory containing the classes (relative to the plugin's directory), then comes a # to separate both parts, and the second part is the name of the class to instanciate.