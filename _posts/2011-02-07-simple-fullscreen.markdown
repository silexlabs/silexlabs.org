---
author: "yannick"
comments: true
date: "2011-02-07T20:11:49.000Z"
layout: "post"
link: "https://www.silexlabs.org/simple-fullscreen/"
slug: "simple-fullscreen"
title: "Simple FullScreen"
wordpress_id: 2370
categories: ["Plugins"]

---
![](https://www.silexlabs.org/wp-content/uploads/2011/02/plugin4.png)This plugin enables fullScreen mode in Silex via actions.


## Use


install the plugin via the Silex Manager or by handActivate the plugin for a server or for one or many publication(s)

In a publication, on any component, you can use the following methods :

`_global.fullScreen.startFullScreen:` if you want to enter or fullscreen

`_global.fullScreen.stopFullScreen:` if you want to exit fullscreen

So, for instance, if you want the user to enter fullscreen by clicking on an image, on the target image use the following action :

`onRelease _global.fullScreen.startFullScreen:`

