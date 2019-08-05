---
author: "koala"
comments: true
date: "2011-02-21T17:28:54.000Z"
layout: "post"
link: "https://www.silexlabs.org/create-a-slideshow/"
slug: "create-a-slideshow"
title: "Create a slideshow"
wordpress_id: 1375
categories: ["Tutorials Silex"]

---
It's really easy to create a slideshow in Silex.

To do so, you first need to follow the full [gallery tutorial](https://www.silexlabs.org/?p=1217). The resulting gallery will be used for this tutorial. It can also be used for any other type of gallery (audio, video, image)

You can [download the working slideshow](https://www.silexlabs.org/?p=2542) on the exchange platform and see the [online result](http://silexprod.com/tutorial.slideshow) here.


### <!-- more -->Step 1 : Turn your gallery into a slideshow


For that, add the PlayListUi component.

![](https://www.silexlabs.org/wp-content/uploads/2011/02/add-the-PlayListUi..png)

Then configure the following parameters :




  * the name : name it "PlayListUi"


  * the "automatic next" box : check it


  * the "display path" : choose "ImageDisplay"


  * the "loop at end" box : check it


  * the "list path" : choose "thumbList"


![](https://www.silexlabs.org/wp-content/uploads/2011/02/the-PlayListUi-properties.png)

If you just want your slideshow alone (without the "next" and "previous" , uncheck the "visible" toolbox.

If you want click "next" or "previous" during the slideshow, check the "visible" box and configure the x and y parameters.

![](https://www.silexlabs.org/wp-content/uploads/2011/02/PlayListUi-properties-2.png)


### Step 2 : Define your slideshow time parameters


Your slideshow time parameters are in the ImageDisplay component.

"time before auto next" and the "fade duration" are the main parameters.

![](https://www.silexlabs.org/wp-content/uploads/2011/02/ImageDisplay-properties-for-slideshow.png)

The "time before auto next" corresponds to the time (in second) an image is displayed before switching to the next image.

The "fade duration" corresponds to the transition time between an image and the next one.

You can change these parameters at your convenience !

And your slideshow is done !!

_**Note :**_ contrary to the gallery, the slideshow doesn't require the display of the thumbnails. So, exactly as for the "PlayListUi", you can uncheck the "visible" box.

This tutorial is finished.

