---
author: "koala"
comments: true
date: "2011-02-25T17:04:54.000Z"
layout: "post"
title: "Use fullscreen mode"
categories: ["Tutorials Silex"]

---
This tutorial will show you how to use the fullscreen mode on your publication.

Let's go !<!-- more -->


### Step 1 : Install the Simple Fullscreen plugin


Note : only a part of the installation process appears here ; if you want to see the all process, check the ["install new items" tutorial](https://www.silexlabs.org/?p=1447) first

![](https://www.silexlabs.org/wp-content/uploads/2011/02/select-Simple-Fullscreen.png)

![](https://www.silexlabs.org/wp-content/uploads/2011/02/install-the-item.png)

After installation, go in the <Settings> rubric of your Manager, choose "plugins" and activate the fullscreen plugin.

![](https://www.silexlabs.org/wp-content/uploads/2011/02/activate-it.png)


### Step 2 : Use it in your publication


To use the fullscreen mode, you have to put a media on the stage so you can trigger the fullscreen mode action on it.
This media must be clickable.

In this tutorial we have choosen the silex logo.

Add to your media the following action :

`onRelease _global.fullScreen.startFullScreen`

![](https://www.silexlabs.org/wp-content/uploads/2011/02/enter-this-action.png)

And that's all !

_**Note :**_ to exit the fullscreen mode just use the "esc" key

**Our example:**

**![](https://www.silexlabs.org/wp-content/uploads/2011/02/normal-mode.png)**

And after a click on the silex logo...

**![](https://www.silexlabs.org/wp-content/uploads/2011/02/exit-fullscreen-mode.png)**

This tutorial is finished !**
**


