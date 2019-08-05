---
author: "koala"
comments: true
date: "2011-02-18T17:42:56.000Z"
layout: "post"
link: "https://www.silexlabs.org/customize-you-thumblist-for-your-gallery/"
slug: "customize-you-thumblist-for-your-gallery"
title: "Customize your ThumbList for your gallery"
wordpress_id: 1336
categories: ["Tutorials Silex"]

---
This tutorial will show you how to customize your thumbList for your gallery and remove the rollover and click color effect.

Before starting look at the [before](http://silexprod.com/tutorial.gallery) / [after](http://silexprod.com/tutorial.gallery2)

If you don't see any difference, check the gallery on a white background :

![](https://www.silexlabs.org/wp-content/uploads/2011/02/color-effect-on-click.png)

Let's go and make this color effect disappear !


### <!-- more -->Step 1 : Get the thumbList's fla






  * Go on Silex's homepage _(click on the image to go directly on the site)_


[![](https://www.silexlabs.org/wp-content/uploads/2011/02/silex_homepage1.png)](https://www.silexlabs.org/silex/)




  * Select "Download"  _(click on the image to go directly on the site)_


[![](https://www.silexlabs.org/wp-content/uploads/2011/02/silex_download1.png)](http://projects.silexlabs.org/?/silex&format=flash/#/flash.cms/download)




  * Download the "Design Kit" _(click on the image to download it directly)_


[![](https://www.silexlabs.org/wp-content/uploads/2011/02/Design_Kit1.png)](http://sourceforge.net/projects/silex/files/silex_v1_downloads/v1.7.0/silex_design_kit-v1.7.0RC1.zip/download)

When it's done, go to the design kit directory, choose "skins", "default_as2", "Thumblist" and then the "Thumblist.fla"


### ![](https://www.silexlabs.org/wp-content/uploads/2011/02/Thumblist1.png)




### Step 2 : Modify your ThumbList with Flash


_Note :_ for precautions, it's better to save a copy of the original ThumbList.fla




  * Open your ThumbList.fla in Flash


  * Select the "ThumbCellRenderer" in the library


![](https://www.silexlabs.org/wp-content/uploads/2011/02/select-the-ThumbCellRenderer.png)




  * In the scenario, select the bg_btn


[![](https://www.silexlabs.org/wp-content/uploads/2011/02/select-bg_btn.png)](https://www.silexlabs.org/1336/silex/tutorials-silex/customize-you-thumblist-for-your-gallery/attachment/select-bg_btn/)




  * Select it on the stage too


![](https://www.silexlabs.org/wp-content/uploads/2011/02/select-bg_btn-on-the-stage.png)




  * Choose the "Properties" toolbox


  * In the "color effect", choose the alpha style


![](https://www.silexlabs.org/wp-content/uploads/2011/02/choose-alpha-style.png)




  * Put the alpha to zero


![](https://www.silexlabs.org/wp-content/uploads/2011/02/take-the-alpha-at-zero1.png)

Name and export your .swf animation. It's done !


### Step 3 : Integrate your new .swf in your Silex server


You can make the integration directly from your publication.








  * Open your publication in edition mode


  * Select the layer on wich one you want to add your gallery


  * Click on "add component" and choose "Thumblist" in the list


  * Click on the "+" (add skin appears on rollover)


![](https://www.silexlabs.org/wp-content/uploads/2011/02/add_skin1.png)




  * A pop-up opens ; browse into your files and choose your customized Thumblist (here named MyNewThumblist"


  * A message "File upload complete" appears


  * You can now choose your thumblist in the menu and click on "import"


![](https://www.silexlabs.org/wp-content/uploads/2011/02/choose_your_thumblist11.png)




  * Your Thumblist appears on your components toolbox and you can now use it !


This tutorial is finished !

