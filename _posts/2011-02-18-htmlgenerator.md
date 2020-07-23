---
layout: post
title: HTMLGenerator - display Silex sites in HTML 5

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags:
- html

_epLastError: ''
_itemCurrentVersion: '1.2'
_selectedProject: Silex
_selectedVersionsArray: v1.6.1,v1.6.2,v1.7.0

_itemCurrentFileName: silex-plugin.zip
_wp_old_slug: ''
color: orange
_edit_last: '9'

display_name: Benjamin
first_name: ''
last_name: ''
permalink: "/htmlgenerator/"
---

This plugin allows you to generate an HTML version of your websites. This is perfect for mobiles or internet tablets. And this is lighter too.

If your visitor do not have Flash, he should be automatically redirected to the HTML version of your website. If he does not have Flash nor Javascript, a link is displayed to visit the HTML version of the website.

![HTML 5 plugin for Silex]({{ site.baseurl }}/assets/plugin2.png "HTML Generator")

### Abotu this plugin

After having installed and activated it, you can access the HTML version of your websites by accessing your website's URL followed by &format=html For example, if you access your website at the URL


Also note that deeplinks should be put directly after the publication's name without any hash. For example, in if in Flash version you have the following
URL:  
> http://myserver/?/testsimple#/start/test

You can access the HTML version by going at  
> http://myserver/?/testsimple/start/test&format=html

### Installation

To install this plugin on a silex server, use the [manager's plugin installer - see the tutorial](https://www.silexlabs.org/?p=1447), or copy the plugin folder in the silex_server/plugins folder.

### Activation

In the manager, go to "Manage", click on the publication on which the plugin should be activated, then click on "Plugins > Activate a plugin", and finally click on the plugin icon and then on "confirm".

Then you can click on the plugin name which appeared in the list of activated plugins, and edit its parameters.

### Parameters

The parameters
: 
*   Default
format: values can be 'html' or 'flash'. It is the format which will be displayed by default, i.e. if there is not a format given in the URL (the '&format=html' or '&format=flash' in the address).
*   CSS

this: body%7Bfont-family%3A%20Verdana%3B%7D

Source code of the plugin

Here is the source code of this plugin, which is written in haXe (php
