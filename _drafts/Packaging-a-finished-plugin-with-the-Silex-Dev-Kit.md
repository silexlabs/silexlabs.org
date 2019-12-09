---
id: 128980
title: "Packaging a finished plugin with the Silex Dev Kit"
date: "2011-08-16T15:20:49.000Z"
author: "yannick"
layout: "page"
guid: "https://www.silexlabs.org/?p=128980"
categories: ["Tutorials Silex"]

---
For this tutorial, you need the Silex Dev Kit available here and FLASH CS4 or CS5  
When you are done developing your plugin, using either SVN or the SWC of the Silex dev kit, it is good practice to package it in a way that will allow other developers or designers to easily use it and/or re-compile it. It is most useful when you develop a skinnable component, the aim is to provide designer with a FLA file that will be easy to edit and publish.

### 1/ SWCs list

Here are the SWC contained in the silex dev kit :</p> 

  * SilexFlashFramework : the main silex framework, contains all the core AS2 classes. For instance if your component extends UIBase, you will need this SWC in your FLA.
  * SilexComponentsClasses : contains the AS2 base classes to create buttons in Silex, it is for instance used by the simple buttons and the label buttons.
  * SilexFlashLoadersClasses : contains the classes used by the Silex loaders. If you want to create a custom loader, you will need those classes.
  * SilexFlashLayoutAuthoringClasses : contains the classes used in for the layouts components.
  * SilexBaseComponentsClasses : contains the classes for the base components (image, video, audio, asFrame, text), you will need them if your component extends one of those.

Some SWC relies on others, for instance if you extend one of the base components, you will need to import SilexBaseComponentsClasses.swc in your FLA library but also SilexFlashFramework.swc as the base components relies on it.

### 2/ Installing the Silex SWCs

The Silex dev kit contains a number of SWC and MXP files. Each of the SWC needs to be installed to become available in your FLASH IDE component panel which wil then allow you to put them in the library of any FLA file.  
You can do it by hand by copying the SWC in the components folder of your FLASH install (you can find resource online for details, the component folder varying with FLash version), but it is simpler to double-click on the correponding MXP file (the one with the same name as the SWC) that will open the Adobe Extension Manager and automatically install the component (works for FLASH CS4 and CS5). You can now start or re-start FLASH and see the component in the component panel.

### 3/ Using the Silex SWCs

Once you installed the Silex SWCs in FLASH, you just needs to drop them from the component panel to the library to embed the SWC in your FLA. If you forgot one of the SWC containing classes used by your plugin, Flash will throw a compilation error.

### 4/ packaging your own SWC

To be usable by designers, your plugin needs to be self-reliant. The ultimate step in this direction is to package your own classes as a SWC included in your FLA. To create a SWC, in the library right-click on the clip linked to the main class of your plugin and select &#8220;export as a SWC&#8221;. The created SWC can then be installed in Flash and imported in your FLA&#8217;s library from the component panel.  
IMPORTANT : to reduce the size of the created SWC, you must put an exclude file in the same folder as your FLA that will have the same name + &#8220;\_exclude.xml&#8221;. For instance, if the name of your FLA is &#8220;myComponent.FLA&#8221;, you must have in the same folder a &#8220;myComponent\_exclude.xml&#8221; file. You can find the content for th exclude file here : https://silex.svn.sourceforge.net/svnroot/silex/trunk/framework/silex_exclude.xml  
The aim of the exclude file is to prevent Flash from compiling all of the Silex framework classes within your SWC. Those classes are not needed are they are already included in the silex server and loaded at startup. You can save up to 60ko this way.
























