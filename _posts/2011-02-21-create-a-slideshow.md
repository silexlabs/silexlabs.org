---
layout: post
title: Create a slideshow

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Tutorials Silex
tags: []

selectedVersion: ''
color: red
_wp_old_slug: ''
_epLastError: ''
_epLastMessage: ''

display_name: koala
first_name: ''
last_name: ''
permalink: "/create-a-slideshow/"
---

It's really easy to create a slideshow in Silex.

To do so, you first need to follow the full [gallery tutorial](https://www.silexlabs.org/?p=1217). The resulting gallery will be used for this tutorial. It can also be used for any other type of gallery (audio, video, image)



### Step 1
: Turn your gallery into a slideshow

For that, add the PlayListUi component.

![]({{ site.baseurl }}/assets/add-the-PlayListUi..png "add-the-PlayListUi.")

Then configure the following parameters
: 
*   the name
: name it "PlayListUi"
*   the "automatic next" box
: check it
*   the "display path"
: choose "ImageDisplay"
*   the "loop at end" box
: check it
*   the "list path"
: choose "thumbList"

![]({{ site.baseurl }}/assets/the-PlayListUi-properties.png "the PlayListUi properties")

If you just want your slideshow alone (without the "next" and "previous" , uncheck the "visible" toolbox.

If you want click "next" or "previous" during the slideshow, check the "visible" box and configure the x and y parameters.

![]({{ site.baseurl }}/assets/PlayListUi-properties-2.png "PlayListUi properties 2")

### Step 2
: Define your slideshow time parameters

Your slideshow time parameters are in the ImageDisplay component.

"time before auto next" and the "fade duration" are the main parameters.

![]({{ site.baseurl }}/assets/ImageDisplay-properties-for-slideshow.png "ImageDisplay properties for slideshow")

The "time before auto next" corresponds to the time (in second) an image is displayed before switching to the next image.

The "fade duration" corresponds to the transition time between an image and the next one.

You can change these parameters at your convenience !

And your slideshow is done !!

_**Note :**_ contrary to the gallery, the slideshow doesn't require the display of the thumbnails. So, exactly as for the "PlayListUi", you can uncheck the "visible" box.

This tutorial is finished.