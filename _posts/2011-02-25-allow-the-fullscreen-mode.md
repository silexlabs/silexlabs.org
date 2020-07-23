---
layout: post
title: Use fullscreen mode

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Tutorials Silex
tags: []

selectedProject: Silex
selectedVersion: v1.6.1
color: red
_wp_old_slug: ''

display_name: koala
first_name: ''
last_name: ''
permalink: "/allow-the-fullscreen-mode/"
---

This tutorial will show you how to use the fullscreen mode on your publication.

Let's go !

### Step 1
: Install the Simple Fullscreen plugin

Note
: only a part of the installation process appears here ; if you want to see the all process, check the ["install new items" tutorial](https://www.silexlabs.org/?p=1447) first

![]({{ site.baseurl }}/assets/select-Simple-Fullscreen.png "select-Simple-Fullscreen")

![]({{ site.baseurl }}/assets/install-the-item.png "install the item")

After installation, go in the <Settings> rubric of your Manager, choose "plugins" and activate the fullscreen plugin.

![]({{ site.baseurl }}/assets/activate-it.png "activate it")

### Step 2
: Use it in your publication

To use the fullscreen mode, you have to put a media on the stage so you can trigger the fullscreen mode action on it.  
This media must be clickable.

In this tutorial we have choosen the silex logo.

Add to your media the following action
: 
`onRelease _global.fullScreen.startFullScreen`

![]({{ site.baseurl }}/assets/enter-this-action.png "enter this action")

And that's all !

_**Note :**_ to exit the fullscreen mode just use the "esc" key

**Our example:**

**![]({{ site.baseurl }}/assets/normal-mode.png "normal-mode")**

And after a click on the silex logo...

**![]({{ site.baseurl }}/assets/exit-fullscreen-mode.png "exit fullscreen mode")**

This tutorial is finished !