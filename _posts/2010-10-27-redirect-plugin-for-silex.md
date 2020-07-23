---
layout: post
title: Redirect plugin for Silex

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags:
- plugin

version: Compatible V1.6 +
_wp_old_slug: ''
color: orange
_epLastError: ''
_itemCurrentVersion: v1.2
_epLastMessage: ''

_itemCurrentFileName: plugins.zip
_selectedProject: Silex
_selectedVersionsArray: v1.6.0,v1.6.1,v1.6.2
_edit_last: '9'

display_name: lexa
first_name: lexa
last_name: ''
permalink: "/redirect-plugin-for-silex/"
---

![]({{ site.baseurl }}/assets/plugin3.png)

This is a redirection plugin for Silex.

When the user opens the site, he is automatically redirected to the address of your choice. You can choose to redirect only if the user has or do not have a browser which supports Flash or HTML5.

### Installation

To install this plugin on a silex server, use the [manager's plugin installer - see the tutorial](https://www.silexlabs.org/?p=1447), or copy the plugin folder in the silex_server/plugins folder.

### Activation

#### Server activation (for all
publications): 
In the server's manager go to "Settings > Plugins > Activate a plugin", click on the plugin icon and then on "confirm".

#### Specific publication
activation: 
In the server's manager go to "Manage", click on the publication on which the plugin should be activated, then click on "Plugins > Activate a plugin", and finally click on the plugin icon and then on "confirm".

### **Use**

The parameters
: 
*   Address to redirect
to: this is the address where you want to redirect the user.
*   Cases when to do the
redirection: the values can be "html5", "flash","no-html5", "no-flash" or "always", in order to edirect when the browser does or does not support HTML5 and Flash or always redirect. Or it can be "mobile" and "desktop" in order to detect if the user is on mobile or desktop computer.

### Source code of the plugin

This plugin is very simple, it is only 1 php file, you can download the plugin and edit the index.php file.