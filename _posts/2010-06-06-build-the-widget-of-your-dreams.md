---
layout: post
title: Build the widget of your dreams. Silex ♥ Yahoo!

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex
- The Blog
tags: []

disable_wpautop: '0'
disable_wptexturize: '0'
disable_convert_chars: '0'
disable_convert_smilies: '0'

display_name: Silex Labs
first_name: Silex Labs
last_name: ''
permalink: "/build-the-widget-of-your-dreams/"
---



Let's use this functionality of Silex and the Yahoo! widgets system, in order to **make a desktop application** with installation, update and configuration.



[caption id="attachment_1727" align="alignnone" width="343" caption="widget test for


Yahoo! Widgets is a free application platform for Mac OS X and Microsoft Windows.

*   http://en.wikipedia.org/wiki/Yahoo!_Widgets
*   http://widgets.yahoo.com/

Here is how to make a Yahoo! widget with
Silex: 
*   in a silex server, create one site with the parameter "layer skin" set to "layer_skin_light.swf" and no embed fonts (all text field should have the parameter "include font" unchecked). You can remove the folders fonts, logs, cgi, conf, install, js, loaders, plugins, tools, trash and all files in the root folder except silex.swf
*   in a new folder where you will put all the yahoo plugin, put a "Resources" folder with the "silex_server" folder inside it.
*   use the file "fla/loader_projector.fla" of the dev kit to generate the loader, which I called "loader_yahoo_widget.swf". This file contains the website configuration, your site name for example. Tip
: leave this line uncommented (i do not know why
exactly): 
rootUrl = "../silex_server/";

*   create a .kon file which is the yahoo widget conf file, see the example I did. You just need to embed the loader_yahoo_widget.swf file. You also can define properties which the user will be able to modify and which will be available in Silex as accessors (in <<silex.config.YOUR PROPERTY FROM YAHOO CONFIG PANNEL>>)

[caption id="attachment_1707" align="alignnone" width="665" caption="silex yahoo widget admin pannel"]![silex yahoo widget admin pannel]({{ site.baseurl }}/assets/silex-yahoo-widget.jpg "silex yahoo widget admin pannel")[/caption]

*   install yahoo widget and use the "open widget" menu in order to load your widget.

After you have done a cool widget, do not forget to [submit it to yahoo! here](http://widgets.yahoo.com/submit/).



How to make a Yahoo! widget out of a Silex publication ? It is quite simple since Silex has a widget mechanism. It was made to allow you to put a publication on a myspace page, to create an application out of a publication with Zinc...



Yahoo! Widgets is a free application platform for Mac OS X and Microsoft Windows.

> http://en.wikipedia.org/wiki/Yahoo!_Widgets

> http://widgets.yahoo.com/

- in a silex server, create one site with the parameter "layer skin" set to "layer_skin_light.swf" and no embed fonts (all text field should have the parameter "include font" unchecked). You can remove the folders fonts, logs, cgi, conf, install, js, loaders, plugins, tools, trash and all files in the root folder except silex.swf

- in a new folder where you will put all the yahoo plugin, put a "Resources" folder with the "silex_server" folder inside it.

- use the file "fla/loader_projector.fla" of the dev kit to generate the loader, which I called "loader_yahoo_widget.swf". This file contains the website configuration, your site name for example. Tip
: leave this line uncommented (i do not know why
exactly): 
rootUrl = "../silex_server/";

- create a .kon file which is the yahoo widget conf file, see the example I did. You just need to embed the loader_yahoo_widget.swf file. You also can define properties which the user will be able to modify and which will be available in Silex as accessors (in <<silex.config.YOUR PROPERTY FROM YAHOO CONFIG PANNEL>>)

illustration admin pannel

- install yahoo widget and use the "open widget" menu in order to load your widget.

After you have done a cool widget, let's submit it to yahoo! here http://widgets.yahoo.com/submit/