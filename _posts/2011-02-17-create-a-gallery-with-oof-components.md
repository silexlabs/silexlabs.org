---
layout: post
title: Create a gallery with Oof components

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

display_name: koala
first_name: ''
last_name: ''
permalink: "/create-a-gallery-with-oof-components/"
---

This tutorial will help you to create an image gallery in Silex with Oof components.

You will find in this post  the different steps to get there. You will also find the [.zip of the images](https://www.silexlabs.org/wp-content/uploads/2011/02/gallery.zip) that were used for this tutorial so that you can reproduce it on your Silex server.  


Good work !

### Pre-requisites

To do this tutorial you need
: 
*   full-sized images
*   the corresponding thumbnails

For the sake of this tutorial we have choosed 4 images
: image1.jpg ; image2.jpg ; image3.jpg and image4.jpg

Let's go !

1.  create a "gallery" directory in the "media" folder of your Silex server
2.  in this "gallery" directory create a "full-sized" directory and a "thumb" directory
3.  put your full-sized images in the "full-sized" directory and your thumb images in the "thumb directory"

![]({{ site.baseurl }}/assets/your-gallery-directory.png "your-gallery-directory")

_**Note
: your full-sized and thumb images must absolutely have the same name and the same extension ! Your images can be in .jpg, .png or .swf format**_

### Step 1
: Display the gallery thumbnail

*   Put 3 components on the stage from your library
:  
    - DataSelector ("Selecteur de données" in french)  
    - ThumbList skin1 ("Liste de Miniatures" in french)  
    - RssConnector ("Connecteur RSS" in french)

![]({{ site.baseurl }}/assets/add_oof_components1.jpg "add_oof_components")

*   Configure your components

**- RssConnector :**

There is two fields to configure
: url base ("URL du fichier" in french) and name ("nom" in french).  
For the url base edit this = <<silex.rootUrl>>cgi/scripts/rss_browse_folder.php?folder_path=media/gallery/thumb and for the name just put "connector"

![]({{ site.baseurl }}/assets/connector-properties1.png "connector-properties")

**- ThumbList :**

For this component you only have to configure its name and named it "thumbList" and that's all or almost !

![]({{ site.baseurl }}/assets/thumblist-properties1.png "thumblist properties")

In fact, depending on the result that you want, you can change the visual parameters of your thumlist as the row height or the items per row, etc...

![]({{ site.baseurl }}/assets/thumblist-visual-parameters.png "thumblist visual parameters")

Note that for a better display of your thumbnails, it's better to uncheck the "resize image" box ("redimensionner images" in french) [![]({{ site.baseurl }}/assets/resize-image-box.png "resize image box")](https://www.silexlabs.org/?attachment_id=1275)

**- DataSelector :**

4 fields to configure
: the "connector name", the "list name", the "icon field" and the "name"

![]({{ site.baseurl }}/assets/selector-properties.png "selector properties")

![]({{ site.baseurl }}/assets/selector-properties-2.png "selector properties 2")

Note
: save the page, refresh and the thumbnails must appear...

Important ! to see your thumbnails correctly, you must configure accordingly the height and width of your thumblist component and the row height ("hauteur de cellule" in french). Note that you can display several images per line, for that you only have to put the wanted number in the "item per row" box ("éléments par ligne" in french)

**Here is the result on our example :**

![]({{ site.baseurl }}/assets/the-thumbnails-appear.png "the thumbnails appear")

### Step 2
: Display the full-sized images when click on thumbnails

*   Add the Image Display component.

![]({{ site.baseurl }}/assets/add-image-display-component.jpg "add-image-display-component")

*   Configure your Image Display component

The only thing to change is the width and the height of your image display. Generally it is better to make them match with the width and the height of your full-sized images.

![]({{ site.baseurl }}/assets/the-image-display-properties.png "the image display properties")

*   Fill the "commands to execute on click" in the selector component

- Select your selector  
- choose "commands to execute on click"  
- click on "edit"  
- click on the "+"  
- enter the following command = ImageDisplay.value=media/gallery/full-sized/<<title>>  
- click on "ok"  
- save and refresh your page

![]({{ site.baseurl }}/assets/command-to-add-on-your-selector.png "command to add on your selector")Your gallery is done !

**Here is the result on our example :**

 **![]({{ site.baseurl }}/assets/gallery-image1.png "gallery image1") ![]({{ site.baseurl }}/assets/gallery-image21.png "gallery image2")** 

**![]({{ site.baseurl }}/assets/gallery-image-3.png "gallery image 3")**

![]({{ site.baseurl }}/assets/gallery-image41.png "gallery image4")

### Step 3 (optional)
: Load a first image automatically

For this
: 
- select your selector  
- open the "action" toolbox  
- enter the following action
: onResult selectedIndex=0  
- confirm  
- save and refresh

![]({{ site.baseurl }}/assets/action-on-the-selector.png "action on the selector")

The first image of your gallery appears automatically without to have to click on its thumbnail !

This tutorial is finished, but you can look at the other tutorials linked to this one
: 
*   [Turn your gallery into a slideshow](https://www.silexlabs.org/?p=1375)
*   [Customize your thumblist](https://www.silexlabs.org/?p=1336)