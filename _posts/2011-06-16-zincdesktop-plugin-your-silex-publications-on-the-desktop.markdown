---
author: lexa
comments: true
date: 2011-06-16 10:16:02+00:00
excerpt: "<h3>Description</h3>Functionalities provided by this plugin\
  <ul><li>your site with a transparent background on the user desktop</li>\
  <li>no installation, just a native application which launches from the hard\
  \ drive</li><li>mac and windows compatible, 1 Silex publication gives\
  \ 2 pixel perfect versions</li></ul>Applications we have already\
  \ produced<ul><li>an installer to install programs, install\
  \ drivers, call system scripts, etc. See the image bellow.</li><li>distribute\
  \ Silex on a USB Key or CD/DVD</li><li>make application which can access\
  \ the file system, transfer files through FTP...</li></ul>License\
  This plugin is free and open source, just like Silex. But it uses <a href=\"\
  http://www.multidmedia.com/\">zinc which is a commercial product</a>. You can use\
  \ it as is, but there is a watermark on it. You should buy a Zinc license here if\
  \ you want to remove the watermark.[caption id=\"attachment_70662\"\
  \ align=\"aligncenter\" width=\"614\" caption=\"Silex zinc plugin example: an installer\"\
  ]<img class=\"size-full wp-image-70662 \" title=\"Silex portable app example\" src=\"\
  https://www.silexlabs.org/wp-content/uploads/2011/06/silex-portable-app-example.jpg\"\
  \ alt=\"\" width=\"614\" height=\"461\" />[/caption]<!-- more -->\
  <h3><span>Installation</span></h3>To install this plugin on a silex\
  \ server, use the <a href=\"https://www.silexlabs.org/?p=1447\">manager's plugin\
  \ installer - see the tutorial</a>, or copy the \"ZincDesktop\" plugin folder in\
  \ the silex_server/plugins folder.<h3>Activation</h3>Server\
  \ activation (for all publications):In the server's manager go to \"\
  Settings &gt; Plugins &gt; Activate a plugin\", click on the plugin icon and then\
  \ on \"confirm\".Specific publication activation:In the\
  \ server's manager go to \"Manage\", click on the publication on which the plugin\
  \ should be activated, then click on \"Plugins &gt; Activate a plugin\", and finally\
  \ click on the plugin icon and then on \"confirm\".<h3><strong>Use</strong></h3>\
  <h4>Make a desktop application out of a Silex site</h4><a href=\"\
  http://projects.silexlabs.org/?/silex/flash.cms/download\" target=\"_blank\">Download\
  \ Silex \"portable app\" version</a> from Silex site. In the Silex portable app\
  \ folder, there are several folders: \"silex_server/\" and \"silex_design_kit/\"\
  \ and so on. And there is also the Silex launcher application, for mac (silex.app),\
  \ windows (silex.exe) and linux (silex). Start the application corresponding to\
  \ your OS in order to access Silex launcher and start using Silex as a portable\
  \ app.After installing Silex, the manager opens and there you can create\
  \ a new Silex site from the \"create\" section. To make it a desktop app you should:\
  <ol><li>activate the \"ZincDesktop\" plugin for your new site\
  \ - please read this help section about <a href=\"https://www.silexlabs.org/?p=1519\"\
  >activating a Silex plugin</a></li><li>duplicate the silex launcher applications,\
  \ for mac (silex.app), windows (silex.exe) and linux (silex) and rename them with\
  \ the name of your new site, e.g. myApp.exe, myApp.app and myApp if gave the name\
  \ \"myApp\" to your new site</li></ol>When you start the new\
  \ application, you will see a standard native window with your site in it.\
  <h4>Use Zink desktop API in your application</h4>In your Silex site,\
  \ you can put Silex action on the components and access Zinc API to manipulate files,\
  \ install programs, install drivers, call system scripts, etc. See <a href=\"http://www.multidmedia.com/support/livedocs/\"\
  >Zinc API documentation here</a>.For example, this starts a windows\
  \ script :onRelease _global.mdm.System.exec:test-script.bat\
  And for maconRelease _global.mdm.System.exec:test-script.sh\
  Please look at the site \"portable-app\" provided with Silex portable app version\
  <strong>Links</strong><ul><li><a href=\"http://projects.silexlabs.org/?/silex/flash.cms/download\"\
  \ target=\"_blank\">Download Silex portable app version</a></li><li><a\
  \ href=\"https://www.silexlabs.org/?p=1519\">Install and activate a Silex plugin</a></li>\
  <li><a href=\"http://www.multidmedia.com/\">Zinc web site</a></li>\
  <li><a href=\"http://www.multidmedia.com/support/livedocs/\">Zinc API</a></li>\
  </ul>"
layout: post
link: https://www.silexlabs.org/zincdesktop-plugin-your-silex-publications-on-the-desktop/
slug: zincdesktop-plugin-your-silex-publications-on-the-desktop
title: ZincDesktop plugin, your Silex publications on the desktop
wordpress_id: 81290
categories:
- "Plugins"
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


