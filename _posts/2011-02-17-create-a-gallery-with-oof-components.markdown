---
author: "koala"
comments: true
date: "2011-02-17T17:35:23.000Z"
layout: "post"
link: "https://www.silexlabs.org/create-a-gallery-with-oof-components/"
slug: "create-a-gallery-with-oof-components"
title: "Create a gallery with Oof components"
wordpress_id: 1217
categories: ["Tutorials Silex"]

---
This tutorial will help you to create an image gallery in Silex with Oof components.

You will find in this post  the different steps to get there. You will also find the [.zip of the images](https://www.silexlabs.org/wp-content/uploads/2011/02/gallery.zip) that were used for this tutorial so that you can reproduce it on your Silex server.
You can [download the working gallery](https://www.silexlabs.org/?cat=55) on the exchange platform and see the [online result](http://silexprod.com/tutorial.gallery) here.

Good work !


### Pre-requisites


To do this tutorial you need :




  * full-sized images


  * the corresponding thumbnails


For the sake of this tutorial we have choosed 4 images : image1.jpg ; image2.jpg ; image3.jpg and image4.jpg

Let's go !

<!-- more -->


  1. create a "gallery" directory in the "media" folder of your Silex server


  2. in this "gallery" directory create a "full-sized" directory and a "thumb" directory


  3. put your full-sized images in the "full-sized" directory and your thumb images in the "thumb directory"


![](https://www.silexlabs.org/wp-content/uploads/2011/02/your-gallery-directory.png)

_**Note : your full-sized and thumb images must absolutely have the same name and the same extension ! Your images can be in .jpg, .png or .swf format**_


### Step 1 : Display the gallery thumbnail






  * Put 3 components on the stage from your library :
- DataSelector ("Selecteur de données" in french)
- ThumbList skin1 ("Liste de Miniatures" in french)
- RssConnector ("Connecteur RSS" in french)




![](https://www.silexlabs.org/wp-content/uploads/2011/02/add_oof_components1.jpg)










  * Configure your components


**- RssConnector :**

There is two fields to configure : url base ("URL du fichier" in french) and name ("nom" in french).
For the url base edit this = <<silex.rootUrl>>cgi/scripts/rss_browse_folder.php?folder_path=media/gallery/thumb and for the name just put "connector"


![](https://www.silexlabs.org/wp-content/uploads/2011/02/connector-properties1.png)




**- ThumbList :**




For this component you only have to configure its name and named it "thumbList" and that's all or almost !




![](https://www.silexlabs.org/wp-content/uploads/2011/02/thumblist-properties1.png)




In fact, depending on the result that you want, you can change the visual parameters of your thumlist as the row height or the items per row, etc...




![](https://www.silexlabs.org/wp-content/uploads/2011/02/thumblist-visual-parameters.png)




Note that for a better display of your thumbnails, it's better to uncheck the "resize image" box ("redimensionner images" in french) [![](https://www.silexlabs.org/wp-content/uploads/2011/02/resize-image-box.png)](https://www.silexlabs.org/?attachment_id=1275)




**- DataSelector :**




4 fields to configure : the "connector name", the "list name", the "icon field" and the "name"




![](https://www.silexlabs.org/wp-content/uploads/2011/02/selector-properties.png)




![](https://www.silexlabs.org/wp-content/uploads/2011/02/selector-properties-2.png)




Note : save the page, refresh and the thumbnails must appear...







Important ! to see your thumbnails correctly, you must configure accordingly the height and width of your thumblist component and the row height ("hauteur de cellule" in french). Note that you can display several images per line, for that you only have to put the wanted number in the "item per row" box ("éléments par ligne" in french)




**Here is the result on our example :**




![](https://www.silexlabs.org/wp-content/uploads/2011/02/the-thumbnails-appear.png)





### Step 2 : Display the full-sized images when click on thumbnails






  * Add the Image Display component.


![](https://www.silexlabs.org/wp-content/uploads/2011/02/add-image-display-component.jpg)




  * Configure your Image Display component


The only thing to change is the width and the height of your image display. Generally it is better to make them match with the width and the height of your full-sized images.

![](https://www.silexlabs.org/wp-content/uploads/2011/02/the-image-display-properties.png)




  * Fill the "commands to execute on click" in the selector component




- Select your selector
- choose "commands to execute on click"
- click on "edit"
- click on the "+"
- enter the following command = ImageDisplay.value=media/gallery/full-sized/<<title>>
- click on "ok"
- save and refresh your page


![](https://www.silexlabs.org/wp-content/uploads/2011/02/command-to-add-on-your-selector.png)Your gallery is done !

**Here is the result on our example :**

**![](https://www.silexlabs.org/wp-content/uploads/2011/02/gallery-image1.png) ![](https://www.silexlabs.org/wp-content/uploads/2011/02/gallery-image21.png)**

**![](https://www.silexlabs.org/wp-content/uploads/2011/02/gallery-image-3.png)**

![](https://www.silexlabs.org/wp-content/uploads/2011/02/gallery-image41.png)


### Step 3 (optional) : Load a first image automatically


For this :


- select your selector
- open the "action" toolbox
- enter the following action : onResult selectedIndex=0
- confirm
- save and refresh


![](https://www.silexlabs.org/wp-content/uploads/2011/02/action-on-the-selector.png)

The first image of your gallery appears automatically without to have to click on its thumbnail !

This tutorial is finished, but you can look at the other tutorials linked to this one :




  * [Turn your gallery into a slideshow](https://www.silexlabs.org/?p=1375)


  * [Customize your thumblist](https://www.silexlabs.org/?p=1336)




