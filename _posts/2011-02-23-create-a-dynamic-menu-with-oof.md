---
layout: post
title: Create a dynamic menu with Oof

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
permalink: "/create-a-dynamic-menu-with-oof/"
---

This tutorial will show you how to create a dynamic menu with Oof, without using icons.

You will find in this post the different steps to get there.



_**Note :**_ to make this tutorial, we used the Rectangle component, the BitmapRectangle component, text components and the minimal_best layout.

### Step 1
: Create your dynamic menu

For that, add the RichTextList and the DataSelector components.

![]({{ site.baseurl }}/assets/add-the-components.png "add-the-components")

Then configure them
: 
*   **the RichTextList component**

* the name
: name it "list"

![]({{ site.baseurl }}/assets/rename-your-RichTextList.png "rename-your-RichTextList")

* edit your labels
: it's the name of your categories (here
: Home, Who ?, What ?, Where ?)

* edit your data
: it's the name of your pages that correspond to your categories (here
: homepage, whopage, whatpage, wherepage)

![]({{ site.baseurl }}/assets/list-properties.png "list-properties")

_**Note :**_ to edit your labels and data, click on "edit", click on the "+", enter your text, click on the "+" to add another label (or data). When you have done, just click on "ok". Of course if you forget a label (or a data) you can click on "edit" again and add it. You can also delete an item or copy it
: for that, select your item by checking the box to its left, and click on the red "x" if you want to delete it, or on the square to copy it. If you want to change the order of your items (or data) drag and drop it to the wanted position.

![]({{ site.baseurl }}/assets/edit-labels.png "edit labels")

*   **the DataSelector component**

* the name
: DataSelector

* the list name
: put the name of your RichTextList (here
: list)

* the cell content
: <<label>>

* the deeplink format
: <<data>>

![]({{ site.baseurl }}/assets/DataSelector-properties.png "DataSelector-properties")

* the page's name
: <<data>>

* the "icon" box
: check it

![]({{ site.baseurl }}/assets/data-selector-properties-2.png "data-selector-properties-2")

And it's done !

_**Note :**_ the DataSelector component has the icon property. So, if you want to put a particular layout for your pages transition, you have to choose the wanted layout on your DataSelector properies.  
The cell content corresponds to the list content that appears on the stage.  
The deeplink format correponds to what appears on the URL. And the page's name corresponds to the name of the xml pages.

### Step 2
: Customize your dynamic menu

*   the RichTextList

To change the visual aspect of your menu, you have to parameter your RichTextList (named "list").

* if you want a vertical menu or an horizontal menu, just change the number of "items per row"

In this tutorial, we have an horizontal menu with 4 categories, so we have 4 items per row.

If you want a vertical menu, whatever the number of categories, put 1 item per row.

* place your menu where you want on your publication by using the x and y parameters

* change the width and the height of your menu

![]({{ site.baseurl }}/assets/list-visual-parameters1.png "list visual parameters")

You can also change the font, color, size, etc... of the text that corresponds to your categories.

For that, when you edit your text in the "labels", edit it in html.

For this tutorial, we have edited our labels in that way
: 
![]({{ site.baseurl }}/assets/edit-your-text-label-in-html.png "edit-your-text-label-in-html")

_**Note :**_ to edit in html, verify that the "html" box is well checked

![]({{ site.baseurl }}/assets/html-box.png "html box")

This tutorial is finished !

