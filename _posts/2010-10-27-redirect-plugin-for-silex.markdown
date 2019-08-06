---
author: "lexa"
comments: true
date: "2010-10-27T15:18:34.000Z"
layout: "post"
title: "Redirect plugin for Silex"
categories: ["Plugins"]
tags: ["plugin"]

---
![](https://www.silexlabs.org/wp-content/uploads/2010/10/plugin3.png)

This is a redirection plugin for Silex.

When the user opens the site, he is automatically redirected to the address of your choice. You can choose to redirect only if the user has or do not have a browser which supports Flash or HTML5.


### Installation


To install this plugin on a silex server, use the [manager's plugin installer - see the tutorial](https://www.silexlabs.org/?p=1447), or copy the plugin folder in the silex_server/plugins folder.


### Activation




#### Server activation (for all publications):


In the server's manager go to "Settings > Plugins > Activate a plugin", click on the plugin icon and then on "confirm".


#### Specific publication activation:


In the server's manager go to "Manage", click on the publication on which the plugin should be activated, then click on "Plugins > Activate a plugin", and finally click on the plugin icon and then on "confirm".


### **Use**


The parameters :




  * Address to redirect to: this is the address where you want to redirect the user.


  * Cases when to do the redirection: the values can be "html5", "flash","no-html5", "no-flash" or "always", in order to edirect when the browser does or does not support HTML5 and Flash or always redirect. Or it can be "mobile" and "desktop" in order to detect if the user is on mobile or desktop computer.




### Source code of the plugin


This plugin is very simple, it is only 1 php file, you can download the plugin and edit the index.php file.


