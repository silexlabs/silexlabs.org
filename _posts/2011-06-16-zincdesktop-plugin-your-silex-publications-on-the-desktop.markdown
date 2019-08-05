---
author: "lexa"
comments: true
date: "2011-06-16T10:16:02.000Z"
layout: "post"
link: "https://www.silexlabs.org/zincdesktop-plugin-your-silex-publications-on-the-desktop/"
slug: "zincdesktop-plugin-your-silex-publications-on-the-desktop"
title: "ZincDesktop plugin, your Silex publications on the desktop"
wordpress_id: 81290
categories: ["Plugins"]

---
### Description


Functionalities provided by this plugin




  * your site with a transparent background on the user desktop


  * no installation, just a native application which launches from the hard drive


  * mac and windows compatible, 1 Silex publication gives 2 pixel perfect versions


Applications we have already produced


  * an installer to install programs, install drivers, call system scripts, etc. See the image bellow.


  * distribute Silex on a USB Key or CD/DVD


  * make application which can access the file system, transfer files through FTP...


License

This plugin is free and open source, just like Silex. But it uses [zinc which is a commercial product](http://www.multidmedia.com/). You can use it as is, but there is a watermark on it. You should buy a Zinc license here if you want to remove the watermark.

[caption id="attachment_70662" align="aligncenter" width="614" caption="Silex zinc plugin example: an installer"]![](https://www.silexlabs.org/wp-content/uploads/2011/06/silex-portable-app-example.jpg)[/caption]

<!-- more -->


### Installation


To install this plugin on a silex server, use the [manager's plugin installer - see the tutorial](https://www.silexlabs.org/?p=1447), or copy the "ZincDesktop" plugin folder in the silex_server/plugins folder.


### Activation


Server activation (for all publications):

In the server's manager go to "Settings > Plugins > Activate a plugin", click on the plugin icon and then on "confirm".

Specific publication activation:

In the server's manager go to "Manage", click on the publication on which the plugin should be activated, then click on "Plugins > Activate a plugin", and finally click on the plugin icon and then on "confirm".


### **Use**




#### Make a desktop application out of a Silex site


[Download Silex "portable app" version](http://projects.silexlabs.org/?/silex/flash.cms/download) from Silex site. In the Silex portable app folder, there are several folders: "silex_server/" and "silex_design_kit/" and so on. And there is also the Silex launcher application, for mac (silex.app), windows (silex.exe) and linux (silex). Start the application corresponding to your OS in order to access Silex launcher and start using Silex as a portable app.

After installing Silex, the manager opens and there you can create a new Silex site from the "create" section. To make it a desktop app you should:




  1. activate the "ZincDesktop" plugin for your new site - please read this help section about [activating a Silex plugin](https://www.silexlabs.org/?p=1519)


  2. duplicate the silex launcher applications, for mac (silex.app), windows (silex.exe) and linux (silex) and rename them with the name of your new site, e.g. myApp.exe, myApp.app and myApp if gave the name "myApp" to your new site


When you start the new application, you will see a standard native window with your site in it.


#### Use Zink desktop API in your application


In your Silex site, you can put Silex action on the components and access Zinc API to manipulate files, install programs, install drivers, call system scripts, etc. See [Zinc API documentation here](http://www.multidmedia.com/support/livedocs/).

For example, this starts a windows script :

onRelease _global.mdm.System.exec:test-script.bat

And for mac

onRelease _global.mdm.System.exec:test-script.sh

Please look at the site "portable-app" provided with Silex portable app version

**Links**




  * [Download Silex portable app version](http://projects.silexlabs.org/?/silex/flash.cms/download)


  * [Install and activate a Silex plugin](https://www.silexlabs.org/?p=1519)


  * [Zinc web site](http://www.multidmedia.com/)


  * [Zinc API](http://www.multidmedia.com/support/livedocs/)



