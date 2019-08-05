---
author: Benjamin
comments: true
date: 2010-11-29 08:54:40+00:00
excerpt: '<h1>HTML5Rendering</h1><p>This project aims at being able to output a visually
  similar HTML5 version of SILEX Websites that looks like in Flash.</p><p>The parameters
  of this plugin are (in your manager, the plugins section of a publication)</p><ul><li>default
  format: Values can be ''html'' or ''flash''. It is the format which will be displayed
  if there is not a format given in the URL (the ''&amp;format=html'' or ''&amp;format=flash''
  in the address</li><li>CSS declaration: Enter here CSS declaration, e.g. \"body{font-family:
  Verdana;}\".&lt;br/&gt;&lt;br/&gt;Only taken into account in HTML version of the
  site.</li></ul><p><!-- more --></p><p>This is not pixel perfect at the moment but
  looks pretty good.</p><p>Server-side processing</p><p>Everything is processed on
  the server-side, which makes this output perfectly suited for search engines. This
  has the drawback of not allowing actions to be triggered.</p><p>Components availability</p><p>One
  has to understand that there are two different parts in this project:</p><ul><li>The
  engine (called HTML5Generator)</li><li>The components (HTML version of components)</li></ul><p>The
  engine is what is called by the HTTP Server and what takes the URL, deduces the
  publication and layers to be opened. It then loads components and initialize them
  with the values needed depending on what is in the publication''s layers'' XML files.</p><p>The
  components are exactly what they are in the Flash version of SILEX since the introduction
  of XMLv3. The only difference is that we are loading the HTML5 version of them (we
  had to extend the descriptors in order to do that).</p><h1>HTML5Generator</h1><h2>Repository</h2><p>The
  repository is the open-source one of SILEX : <a href="https://github.com/silexlabs/Silex/">https://github.com/silexlabs/Silex/</a></p><h2>Sources</h2><p>There
  is a project directory in trunk/projects/html5generator, it does contain the hxml
  file to be ran (while working in this directory). The binaries are then located
  in the bin directory.</p><p>Sources on their own are located in trunk/framework/hx
  and the base package for this project is org.silex.htmlGenerator.</p><h2>Dependencies</h2><h3>haXe</h3><p>The
  HTML5Generator is written using the haXe language so, before compiling, you will
  need to install it from http://www.haxe.org.</p><p>No additional library is required.</p><h2>Building</h2><p>You
  just have to run the build.hxml file from the directory it''s in. (Either double-click
  or run "haxe build.hxml" from command-line when in its directory).</p><h2>Deployment</h2><p>After
  compiling, you can simply copy the content of the trunk/projects/html5generator/bin
  directory in trunk/silex_server/plugins/htmlGenerator/generator.</p><h2>Activation</h2><p>As
  you can guess from the deployment step, the html5Generator is a plugin and should
  be activated. To do so, you just have to go to the manager &gt; Settings &gt; Plugins
  &gt; Activate a plugin and choose the htmlGenerator plugin.</p><p>Note that you
  will also need to activate components (see the baseComponents section).</p><h2>Under
  the hood</h2><p>The generator instanciates components and fills them with the values
  for their properties, then, it calls the getHTML function of the components. This
  function should return a string that is the HTML that''s going to be given to the
  client to render the component.</p><h3>Hooks</h3><p>The plugin hooks to "pre-index-head",
  and, right after executing its logic, stops the normal flow of SILEX so that nothing
  else gets printed to the browser. This is implemented in the index.php file.</p><h1>baseComponents</h1><h2>Repository</h2><p>The
  repository is the open-source one of SILEX : https://silex.svn.sourceforge.net/svnroot/silex/trunk</p><h2>Sources</h2><p>There
  is a project directory in trunk/projects/html5basecomponents, it does contain the
  hxml file to be ran (while working in this directory). The binaries are then located
  in the bin directory.</p><p>Sources on their own are located in trunk/framework/hx
  and the base package for this project is org.silex.ui.</p><p>Also, we had to modify
  the base component''s descriptor files in order to include needed information for
  HTML5. Those are already located in trunk/silex_server/plugins/baseComponents/descriptors
  (see the "descriptors" section below).</p><p>The UiBase class implements the getHTML
  function and handles icons and basic properties (position/rotation...). It then
  calls the returnHTML function of subclasses. So, if your components extends UiBase,
  it should only implement returnHTML and not getHTML.</p><h2>Dependencies</h2><h3>haXe</h3><p>The
  baseComponents are written using the haXe language so, before compiling, you will
  need to install it from http://www.haxe.org.</p><p>No additional library is required.</p><h2>Building</h2><p>You
  just have to run the build.hxml file from the directory it''s in. (Either double-click
  or run "haxe build.hxml" from command-line).</p><h2>Deployment</h2><p>After compiling,
  you can simply copy the content of the trunk/projects/html5basecomponents/bin/lib
  directory in trunk/silex_server/plugins/baseComponents/html5.</p><h2>Activation</h2><p>After
  deploying, you should activate the baseComponents plugin if it''s not already activated.
  To do so, simply go to the manager &gt; Settings &gt; Plugins &gt; Activate a plugin
  and choose the baseComponents plugin.</p><h2>Descriptors</h2><p>Because the html5Generator
  needs some information to instanciate components (such as where to look for the
  component''s classes and the class name), we had to extend the descriptor files.
  We''ve only added the "html5Url" tag which has a textnode as a child. This text
  is composed of two parts: the first part is the path to the directory containing
  the classes (relative to the plugin''s directory), then comes a # to separate both
  parts, and the second part is the name of the class to instanciate.</p>'
layout: post
link: https://www.silexlabs.org/the-html5generator/
slug: the-html5generator
title: The HTML5Generator
wordpress_id: 128955
categories:
- "Tutorials Silex"
---

# HTML5Rendering

This project aims at being able to output a visually similar HTML5 version of SILEX Websites that looks like in Flash.

The parameters of this plugin are (in your manager, the plugins section of a publication)

  * default format: Values can be 'html' or 'flash'. It is the format which will be displayed if there is not a format given in the URL (the '&format=html' or '&format=flash' in the address
  * CSS declaration: Enter here CSS declaration, e.g. \"body{font-family: Verdana;}\".<br/><br/>Only taken into account in HTML version of the site.

<!-- more -->

This is not pixel perfect at the moment but looks pretty good.

Server-side processing

Everything is processed on the server-side, which makes this output perfectly suited for search engines. This has the drawback of not allowing actions to be triggered.

Components availability

One has to understand that there are two different parts in this project:

  * The engine (called HTML5Generator)
  * The components (HTML version of components)

The engine is what is called by the HTTP Server and what takes the URL, deduces the publication and layers to be opened. It then loads components and initialize them with the values needed depending on what is in the publication's layers' XML files.

The components are exactly what they are in the Flash version of SILEX since the introduction of XMLv3. The only difference is that we are loading the HTML5 version of them (we had to extend the descriptors in order to do that).

# HTML5Generator

## Repository

The repository is the open-source one of SILEX : [https://github.com/silexlabs/Silex/](https://github.com/silexlabs/Silex/)

## Sources

There is a project directory in trunk/projects/html5generator, it does contain the hxml file to be ran (while working in this directory). The binaries are then located in the bin directory.

Sources on their own are located in trunk/framework/hx and the base package for this project is org.silex.htmlGenerator.

## Dependencies

### haXe

The HTML5Generator is written using the haXe language so, before compiling, you will need to install it from http://www.haxe.org.

No additional library is required.

## Building

You just have to run the build.hxml file from the directory it's in. (Either double-click or run "haxe build.hxml" from command-line when in its directory).

## Deployment

After compiling, you can simply copy the content of the trunk/projects/html5generator/bin directory in trunk/silex_server/plugins/htmlGenerator/generator.

## Activation

As you can guess from the deployment step, the html5Generator is a plugin and should be activated. To do so, you just have to go to the manager > Settings > Plugins > Activate a plugin and choose the htmlGenerator plugin.

Note that you will also need to activate components (see the baseComponents section).

## Under the hood

The generator instanciates components and fills them with the values for their properties, then, it calls the getHTML function of the components. This function should return a string that is the HTML that's going to be given to the client to render the component.

### Hooks

The plugin hooks to "pre-index-head", and, right after executing its logic, stops the normal flow of SILEX so that nothing else gets printed to the browser. This is implemented in the index.php file.

# baseComponents

## Repository

The repository is the open-source one of SILEX : https://silex.svn.sourceforge.net/svnroot/silex/trunk

## Sources

There is a project directory in trunk/projects/html5basecomponents, it does contain the hxml file to be ran (while working in this directory). The binaries are then located in the bin directory.

Sources on their own are located in trunk/framework/hx and the base package for this project is org.silex.ui.

Also, we had to modify the base component's descriptor files in order to include needed information for HTML5. Those are already located in trunk/silex_server/plugins/baseComponents/descriptors (see the "descriptors" section below).

The UiBase class implements the getHTML function and handles icons and basic properties (position/rotation...). It then calls the returnHTML function of subclasses. So, if your components extends UiBase, it should only implement returnHTML and not getHTML.

## Dependencies

### haXe

The baseComponents are written using the haXe language so, before compiling, you will need to install it from http://www.haxe.org.

No additional library is required.

## Building

You just have to run the build.hxml file from the directory it's in. (Either double-click or run "haxe build.hxml" from command-line).

## Deployment

After compiling, you can simply copy the content of the trunk/projects/html5basecomponents/bin/lib directory in trunk/silex_server/plugins/baseComponents/html5.

## Activation

After deploying, you should activate the baseComponents plugin if it's not already activated. To do so, simply go to the manager > Settings > Plugins > Activate a plugin and choose the baseComponents plugin.

## Descriptors

Because the html5Generator needs some information to instanciate components (such as where to look for the component's classes and the class name), we had to extend the descriptor files. We've only added the "html5Url" tag which has a textnode as a child. This text is composed of two parts: the first part is the path to the directory containing the classes (relative to the plugin's directory), then comes a # to separate both parts, and the second part is the name of the class to instanciate.
