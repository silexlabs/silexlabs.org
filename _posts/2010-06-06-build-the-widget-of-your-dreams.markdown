---
author: admin
comments: true
date: 2010-06-06 15:21:13+00:00
excerpt: "How to make a <a href=\"http://widgets.yahoo.com/\" target=\"_blank\">Yahoo!\
  \ widget</a> out of a Silex publication ? It is quite simple since Silex has a widget\
  \ mechanism. It was made to allow you to put a publication on a <a href=\"http://www.myspace.com/lexayo\"\
  \ target=\"_blank\">myspace</a> page, to create an application out of a publication\
  \ with Zinc...Let's use this functionality of Silex and the <span style=\"\
  font-size: 13.3333px;\">Yahoo! widgets system, </span><span style=\"font-size: 13.3333px;\"\
  >in order to <strong>make a desktop application</strong> with installation, update\
  \ and configuration.</span><!--start_raw--><iframe scrolling=\"no\"\
  \ frameborder=\"0\" src=\"http://badge.ydp.clientapps.yahoo.com/badge/widgets/badge?aid=w8334&tc=575757&bc=ffffff&cn=silex-labs-news\"\
  \ style=\"width:180px;height:190px;padding:0;border:0;\" allowTransparency=\"true\"\
  ></iframe><!--end_raw--><span style=\"font-size: 13.3333px;\">Here is\
  \ <a href=\"https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.widget\"\
  >my sample widget</a>. And <a href=\"https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.zip\"\
  >here are the sources</a>.</span><span style=\"font-size: 13.3333px;\"\
  > </span>[caption id=\"attachment_1727\" align=\"alignnone\" width=\"\
  343\" caption=\"widget test for Silex: it gives you some news about Silex on your\
  \ desktop\"]<a href=\"https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.png\"\
  ><img class=\"size-full wp-image-1727  \" title=\"silex-yahoo-widget\" src=\"https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.png\"\
  \ alt=\"widget test for Silex\" width=\"343\" height=\"439\" /></a>[/caption]\
  <!-- more --><span style=\"font-size: 13.3333px;\">Yahoo! Widgets\
  \ is a free application platform for Mac OS X and Microsoft Windows. </span>\
  <ul><li><span style=\"font-size: 13.3333px;\">http://en.wikipedia.org/wiki/Yahoo!_Widgets</span></li>\
  <li><span style=\"font-size: 13.3333px;\">http://widgets.yahoo.com/</span></li>\
  </ul>Here is how to make a Yahoo! widget with Silex:\
  <ul><li><span style=\"font-size: 13.3333px;\"> <span style=\"font-size:\
  \ 11.1111px;\">in a silex server, create one site with the parameter \"layer skin\"\
  \ set to \"layer_skin_light.swf\" and no embed fonts (all text field should have\
  \ the parameter \"include font\" unchecked). You can remove the folders fonts, logs,\
  \ cgi, conf, install, js, loaders, plugins, tools, trash and all files in the root\
  \ folder except silex.swf</span></span></li><li><span style=\"font-size:\
  \ 13.3333px;\">in a new folder where you will put all the yahoo plugin, put a \"\
  Resources\" folder with the \"silex_server\" folder inside it.</span></li>\
  <li><span style=\"font-size: 13.3333px;\">use the file \"fla/loader_projector.fla\"\
  \ of the dev kit to generate the loader, which I called \"loader_yahoo_widget.swf\"\
  . This file contains the website configuration, your site name for example. Tip\
  \ : leave this line uncommented (i do not know why exactly):</span></li>\
  </ul><pre style=\"padding-left: 60px;\">rootUrl = \"../silex_server/\"\
  ;</pre><ul><li><span style=\"font-size: 13.3333px;\">create\
  \ a .kon file which is the yahoo widget conf file, see the example I did. You just\
  \ need to embed the loader_yahoo_widget.swf file. You also can define properties\
  \ which the user will be able to modify and which will be available in Silex as\
  \ accessors (in &lt;&lt;silex.config.YOUR PROPERTY FROM YAHOO CONFIG PANNEL&gt;&gt;)</span></li>\
  </ul>[caption id=\"attachment_1707\" align=\"alignnone\" width=\"\
  665\" caption=\"silex yahoo widget admin pannel\"]<img class=\"size-full wp-image-1707\"\
  \ title=\"silex yahoo widget admin pannel\" src=\"https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.jpg\"\
  \ alt=\"silex yahoo widget admin pannel\" width=\"665\" height=\"177\" />[/caption]\
  <ul><li><span style=\"font-size: 13.3333px;\">install yahoo widget\
  \ and use the \"open widget\" menu in order to load your widget.</span></li>\
  </ul>After you have done a cool widget, do not forget to <a href=\"\
  http://widgets.yahoo.com/submit/\" target=\"_blank\">submit it to yahoo! here</a>.\
  Note: the widget background is transparent, which is pretty cool :)\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 0px;\
  \ width: 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\">How to make\
  \ a Yahoo! widget out of a Silex publication ? It is quite simple since Silex has\
  \ a widget mechanism. It was made to allow you to put a publication on a myspace\
  \ page, to create an application out of a publication with Zinc...</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 0px; width:\
  \ 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\">http://en.wikipedia.org/wiki/File:Konfabulator_screenshot.jpg</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 0px;\
  \ width: 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\">Yahoo! Widgets\
  \ is a free application platform for Mac OS X and Microsoft Windows.</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 0px;\
  \ width: 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\">&gt; http://en.wikipedia.org/wiki/Yahoo!_Widgets</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 0px;\
  \ width: 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\">&gt; http://widgets.yahoo.com/</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 0px;\
  \ width: 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\">- in a silex\
  \ server, create one site with the parameter \"layer skin\" set to \"layer_skin_light.swf\"\
  \ and no embed fonts (all text field should have the parameter \"include font\"\
  \ unchecked). You can remove the folders fonts, logs, cgi, conf, install, js, loaders,\
  \ plugins, tools, trash and all files in the root folder except silex.swf</div>\
  <div id=\"_mcePaste\" style=\"position: absolute; left: -10000px; top: 0px;\
  \ width: 1px; height: 1px; overflow-x: hidden; overflow-y: hidden;\">- in a new\
  \ folder where you will put all the yahoo plugin, put a \"Resources\" folder with\
  \ the \"silex_server\" folder inside it.</div><div id=\"_mcePaste\" style=\"\
  position: absolute; left: -10000px; top: 0px; width: 1px; height: 1px; overflow-x:\
  \ hidden; overflow-y: hidden;\">- use the file \"fla/loader_projector.fla\" of the\
  \ dev kit to generate the loader, which I called \"loader_yahoo_widget.swf\". This\
  \ file contains the website configuration, your site name for example. Tip : leave\
  \ this line uncommented (i do not know why exactly):</div><div id=\"_mcePaste\"\
  \ style=\"position: absolute; left: -10000px; top: 0px; width: 1px; height: 1px;\
  \ overflow-x: hidden; overflow-y: hidden;\"><span style=\"white-space: pre;\"> </span>rootUrl\
  \ = \"../silex_server/\";</div><div id=\"_mcePaste\" style=\"position:\
  \ absolute; left: -10000px; top: 0px; width: 1px; height: 1px; overflow-x: hidden;\
  \ overflow-y: hidden;\">- create a .kon file which is the yahoo widget conf file,\
  \ see the example I did. You just need to embed the loader_yahoo_widget.swf file.\
  \ You also can define properties which the user will be able to modify and which\
  \ will be available in Silex as accessors (in &lt;&lt;silex.config.YOUR PROPERTY\
  \ FROM YAHOO CONFIG PANNEL&gt;&gt;)</div><div id=\"_mcePaste\" style=\"\
  position: absolute; left: -10000px; top: 0px; width: 1px; height: 1px; overflow-x:\
  \ hidden; overflow-y: hidden;\">illustration admin pannel</div><div id=\"\
  _mcePaste\" style=\"position: absolute; left: -10000px; top: 0px; width: 1px; height:\
  \ 1px; overflow-x: hidden; overflow-y: hidden;\">- install yahoo widget and use\
  \ the \"open widget\" menu in order to load your widget.</div><div id=\"\
  _mcePaste\" style=\"position: absolute; left: -10000px; top: 0px; width: 1px; height:\
  \ 1px; overflow-x: hidden; overflow-y: hidden;\">After you have done a cool widget,\
  \ let's submit it to yahoo! here http://widgets.yahoo.com/submit/</div>"
layout: post
link: https://www.silexlabs.org/build-the-widget-of-your-dreams/
slug: build-the-widget-of-your-dreams
title: Build the widget of your dreams. Silex ♥ Yahoo!
wordpress_id: 1705
categories:
- "Blog Silex"
- "The Blog"
---

How to make a [Yahoo! widget](http://widgets.yahoo.com/) out of a Silex publication ? It is quite simple since Silex has a widget mechanism. It was made to allow you to put a publication on a [myspace](http://www.myspace.com/lexayo) page, to create an application out of a publication with Zinc...

				Let's use this functionality of Silex and the Yahoo! widgets system, in order to **make a desktop application** with installation, update and configuration.



				Here is [my sample widget](https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.widget). And [here are the sources](https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.zip).



				[caption id="attachment_1727" align="alignnone" width="343" caption="widget test for Silex: it gives you some news about Silex on your desktop"][![widget test for Silex](https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.png)](https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.png)[/caption]

				<!-- more -->

				Yahoo! Widgets is a free application platform for Mac OS X and Microsoft Windows.




  * http://en.wikipedia.org/wiki/Yahoo!_Widgets


  * http://widgets.yahoo.com/


				Here is how to make a Yahoo! widget with Silex:


  * in a silex server, create one site with the parameter "layer skin" set to "layer_skin_light.swf" and no embed fonts (all text field should have the parameter "include font" unchecked). You can remove the folders fonts, logs, cgi, conf, install, js, loaders, plugins, tools, trash and all files in the root folder except silex.swf


  * in a new folder where you will put all the yahoo plugin, put a "Resources" folder with the "silex_server" folder inside it.


  * use the file "fla/loader_projector.fla" of the dev kit to generate the loader, which I called "loader_yahoo_widget.swf". This file contains the website configuration, your site name for example. Tip : leave this line uncommented (i do not know why exactly):




    rootUrl = "../silex_server/";






  * create a .kon file which is the yahoo widget conf file, see the example I did. You just need to embed the loader_yahoo_widget.swf file. You also can define properties which the user will be able to modify and which will be available in Silex as accessors (in <<silex.config.YOUR PROPERTY FROM YAHOO CONFIG PANNEL>>)


				[caption id="attachment_1707" align="alignnone" width="665" caption="silex yahoo widget admin pannel"]![silex yahoo widget admin pannel](https://www.silexlabs.org/wp-content/uploads/2010/06/silex-yahoo-widget.jpg)[/caption]




  * install yahoo widget and use the "open widget" menu in order to load your widget.


				After you have done a cool widget, do not forget to [submit it to yahoo! here](http://widgets.yahoo.com/submit/).

				Note: the widget background is transparent, which is pretty cool :)


How to make a Yahoo! widget out of a Silex publication ? It is quite simple since Silex has a widget mechanism. It was made to allow you to put a publication on a myspace page, to create an application out of a publication with Zinc...




http://en.wikipedia.org/wiki/File:Konfabulator_screenshot.jpg




Yahoo! Widgets is a free application platform for Mac OS X and Microsoft Windows.




> http://en.wikipedia.org/wiki/Yahoo!_Widgets




> http://widgets.yahoo.com/




- in a silex server, create one site with the parameter "layer skin" set to "layer_skin_light.swf" and no embed fonts (all text field should have the parameter "include font" unchecked). You can remove the folders fonts, logs, cgi, conf, install, js, loaders, plugins, tools, trash and all files in the root folder except silex.swf




- in a new folder where you will put all the yahoo plugin, put a "Resources" folder with the "silex_server" folder inside it.




- use the file "fla/loader_projector.fla" of the dev kit to generate the loader, which I called "loader_yahoo_widget.swf". This file contains the website configuration, your site name for example. Tip : leave this line uncommented (i do not know why exactly):




rootUrl = "../silex_server/";




- create a .kon file which is the yahoo widget conf file, see the example I did. You just need to embed the loader_yahoo_widget.swf file. You also can define properties which the user will be able to modify and which will be available in Silex as accessors (in <<silex.config.YOUR PROPERTY FROM YAHOO CONFIG PANNEL>>)




illustration admin pannel




- install yahoo widget and use the "open widget" menu in order to load your widget.




After you have done a cool widget, let's submit it to yahoo! here http://widgets.yahoo.com/submit/
