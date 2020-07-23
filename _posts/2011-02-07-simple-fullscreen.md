---
layout: post
title: Simple FullScreen

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags: []

_itemCurrentFileName: Simple Fullscreen plugin.zip
_wp_old_slug: ''
_selectedProject: Silex
_selectedVersionsArray: v1.6.1
color: orange
_epLastError: ''
_epLastMessage: ''
_itemCurrentVersion: '1.0'

display_name: yannick
first_name: ''
last_name: ''
permalink: "/simple-fullscreen/"
---

![]({{ site.baseurl }}/assets/plugin4.png "plugin")This plugin enables fullScreen mode in Silex via actions.

Use
---

install the plugin via the Silex Manager or by handActivate the plugin for a server or for one or many publication(s)

In a publication, on any component, you can use the following methods
: 
`_global.fullScreen.startFullScreen:` if you want to enter or fullscreen

`_global.fullScreen.stopFullScreen:` if you want to exit fullscreen

So, for instance, if you want the user to enter fullscreen by clicking on an image, on the target image use the following action
: 
`onRelease _global.fullScreen.startFullScreen:`