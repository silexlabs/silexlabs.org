---
layout: post
title: Customize your ThumbList for your gallery

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
_edit_last: '11'
_itemCurrentVersion: ''

display_name: koala
first_name: ''
last_name: ''
permalink: "/customize-you-thumblist-for-your-gallery/"
---

This tutorial will show you how to customize your thumbList for your gallery and remove the rollover and click color effect.



If you don't see any difference, check the gallery on a white background
: 
![]({{ site.baseurl }}/assets/color-effect-on-click.png "color-effect-on-click")

Let's go and make this color effect disappear !

### Step 1
: Get the thumbList's fla

*   Go on Silex's homepage _(click on the image to go directly on the site)_

[![]({{ site.baseurl }}/assets/silex_homepage1.png "silex_homepage")](https://www.silexlabs.org/silex/)

*   Select "Download"  _(click on the image to go directly on the site)_

[![]({{ site.baseurl }}/assets/silex_download1.png "silex_download")](http://projects.silexlabs.org/?/silex&format=flash/#/flash.cms/download)

*   Download the "Design Kit" _(click on the image to download it directly)_

[![]({{ site.baseurl }}/assets/Design_Kit1.png "Design_Kit")](http://sourceforge.net/projects/silex/files/silex_v1_downloads/v1.7.0/silex_design_kit-v1.7.0RC1.zip/download)

When it's done, go to the design kit directory, choose "skins", "default_as2", "Thumblist" and then the "Thumblist.fla"

### ![]({{ site.baseurl }}/assets/Thumblist1.png "Thumblist")

### Step 2
: Modify your ThumbList with Flash

_Note :_ for precautions, it's better to save a copy of the original ThumbList.fla

*   Open your ThumbList.fla in Flash
*   Select the "ThumbCellRenderer" in the library

![]({{ site.baseurl }}/assets/select-the-ThumbCellRenderer.png "select the ThumbCellRenderer")

*   In the scenario, select the bg_btn

[![]({{ site.baseurl }}/assets/select-bg_btn.png "select-bg_btn")](https://www.silexlabs.org/1336/silex/tutorials-silex/customize-you-thumblist-for-your-gallery/attachment/select-bg_btn/)

*   Select it on the stage too

![]({{ site.baseurl }}/assets/select-bg_btn-on-the-stage.png "select bg_btn on the stage")

*   Choose the "Properties" toolbox
*   In the "color effect", choose the alpha style

![]({{ site.baseurl }}/assets/choose-alpha-style.png "choose-alpha-style")

*   Put the alpha to zero

![]({{ site.baseurl }}/assets/take-the-alpha-at-zero1.png "take-the-alpha-at-zero")

Name and export your .swf animation. It's done !

### Step 3
: Integrate your new .swf in your Silex server

You can make the integration directly from your publication.

*   Open your publication in edition mode
*   Select the layer on wich one you want to add your gallery
*   Click on "add component" and choose "Thumblist" in the list
*   Click on the "+" (add skin appears on rollover)

![]({{ site.baseurl }}/assets/add_skin1.png "add_skin")

*   A pop-up opens ; browse into your files and choose your customized Thumblist (here named MyNewThumblist"
*   A message "File upload complete" appears
*   You can now choose your thumblist in the menu and click on "import"

![]({{ site.baseurl }}/assets/choose_your_thumblist11.png "choose_your_thumblist")

*   Your Thumblist appears on your components toolbox and you can now use it !

This tutorial is finished !