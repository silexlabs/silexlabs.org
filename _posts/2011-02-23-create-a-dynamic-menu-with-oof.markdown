---
author: koala
comments: true
date: 2011-02-23 13:27:43+00:00
excerpt: "This tutorial will show you how to create a dynamic menu with Oof, without\
  \ using icons.You will find in this post the different steps to get\
  \ there.You can <a href=\"https://www.silexlabs.org/?p=2562\" target=\"\
  _blank\">download the working dynamic menu on the exchange platform</a> and see\
  \ <a href=\"http://silexprod.com/tutorial.dynamic.menu\" target=\"_blank\">the final\
  \ result here</a>.<em><strong><!-- more -->Note : </strong></em>to make\
  \ this tutorial, we used the Rectangle component, the BitmapRectangle component,\
  \ text components and the minimal_best layout.<h3>Step 1 : Create your\
  \ dynamic menu</h3>For that, add the RichTextList and the DataSelector\
  \ components.<img class=\"aligncenter size-full wp-image-1405\" title=\"\
  add-the-components\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/add-the-components.png\"\
  \ alt=\"\" width=\"700\" height=\"161\" />Then configure them :\
  <ul><li><strong>the RichTextList component</strong></li>\
  </ul>* the name : name it \"list\"<img class=\"aligncenter\
  \ size-full wp-image-1406\" title=\"rename-your-RichTextList\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/rename-your-RichTextList.png\"\
  \ alt=\"\" width=\"700\" height=\"103\" />* edit your labels : it's\
  \ the name of your categories (here : Home, Who ?, What ?, Where ?)\
  * edit your data : it's the name of your pages that correspond to your categories\
  \ (here : homepage, whopage, whatpage, wherepage)<img class=\"aligncenter\
  \ size-full wp-image-1407\" title=\"list-properties\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/list-properties.png\"\
  \ alt=\"\" width=\"700\" height=\"230\" /><em><strong>Note :</strong></em>\
  \ to edit your labels and data, click on \"edit\", click on the \"+\", enter your\
  \ text, click on the \"+\" to add another label (or data). When you have done, just\
  \ click on \"ok\". Of course if you forget a label (or a data) you can click on\
  \ \"edit\" again and add it. You can also delete an item or copy it : for that,\
  \ select your item by checking the box to its left, and click on the red \"x\" if\
  \ you want to delete it, or on the square to copy it. If you want to change the\
  \ order of your items (or data) drag and drop it to the wanted position.\
  <img class=\"aligncenter size-full wp-image-1433\" title=\"edit labels\" src=\"\
  https://www.silexlabs.org/wp-content/uploads/2011/02/edit-labels.png\" alt=\"\"\
  \ width=\"700\" height=\"167\" /><ul><li><strong>the DataSelector\
  \ component</strong></li></ul>* the name : DataSelector\
  * the list name : put the name of your RichTextList (here : list)\
  * the cell content : &lt;&lt;label&gt;&gt;* the deeplink format :\
  \ &lt;&lt;data&gt;&gt;<img class=\"aligncenter size-full wp-image-1409\"\
  \ title=\"DataSelector-properties\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/DataSelector-properties.png\"\
  \ alt=\"\" width=\"700\" height=\"169\" />* the page's name : &lt;&lt;data&gt;&gt;\
  * the \"icon\" box : check it<img class=\"aligncenter size-full\
  \ wp-image-1410\" title=\"data-selector-properties-2\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/data-selector-properties-2.png\"\
  \ alt=\"\" width=\"700\" height=\"110\" />And it's done !\
  <em><strong>Note :</strong></em> the DataSelector component has the icon property.\
  \ So, if you want to put a particular layout for your pages transition, you have\
  \ to choose the wanted layout on your DataSelector properies.The cell\
  \ content corresponds to the list content that appears on the stage.The\
  \ deeplink format correponds to what appears on the URL. And the page's name corresponds\
  \ to the name of the xml pages.<h3>Step 2 : Customize your dynamic menu</h3>\
  <ul><li>the RichTextList</li></ul>To change\
  \ the visual aspect of your menu, you have to parameter your RichTextList (named\
  \ \"list\").* if you want a vertical menu or an horizontal menu, just\
  \ change the number of \"items per row\"In this tutorial, we have an\
  \ horizontal menu with 4 categories, so we have 4 items per row.If you\
  \ want a vertical menu, whatever the number of categories, put 1 item per row.\
  * place your menu where you want on your publication by using the x and\
  \ y parameters* change the width and the height of your menu\
  <img class=\"aligncenter size-full wp-image-1419\" title=\"list visual parameters\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/list-visual-parameters1.png\"\
  \ alt=\"\" width=\"700\" height=\"98\" />You can also change the font,\
  \ color, size, etc... of the text that corresponds to your categories.\
  For that, when you edit your text in the \"labels\", edit it in html.\
  For this tutorial, we have edited our labels in that way :<img class=\"\
  aligncenter size-full wp-image-1420\" title=\"edit-your-text-label-in-html\" src=\"\
  https://www.silexlabs.org/wp-content/uploads/2011/02/edit-your-text-label-in-html.png\"\
  \ alt=\"\" width=\"700\" height=\"166\" /><em><strong>Note :</strong></em>\
  \ to edit in html, verify that the \"html\" box is well checked<img\
  \ class=\"size-full wp-image-1434 alignnone\" title=\"html box\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/html-box.png\"\
  \ alt=\"\" width=\"129\" height=\"108\" />This tutorial is finished\
  \ !<em><strong>Note :</strong></em> you can also customize the RichTextList\
  \ display the same way it has been done for the thumblist display in <a href=\"\
  https://www.silexlabs.org/?p=1336\" target=\"_blank\">this tutorial</a>."
layout: post
link: https://www.silexlabs.org/create-a-dynamic-menu-with-oof/
slug: create-a-dynamic-menu-with-oof
title: Create a dynamic menu with Oof
wordpress_id: 1403
categories:
- "Tutorials Silex"
---

This tutorial will show you how to create a dynamic menu with Oof, without using icons.

				You will find in this post the different steps to get there.

				You can [download the working dynamic menu on the exchange platform](https://www.silexlabs.org/?p=2562) and see [the final result here](http://silexprod.com/tutorial.dynamic.menu).

				_**<!-- more -->Note : **_to make this tutorial, we used the Rectangle component, the BitmapRectangle component, text components and the minimal_best layout.


### Step 1 : Create your dynamic menu


				For that, add the RichTextList and the DataSelector components.

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/add-the-components.png)

				Then configure them :




  * **the RichTextList component**


				* the name : name it "list"

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/rename-your-RichTextList.png)

				* edit your labels : it's the name of your categories (here : Home, Who ?, What ?, Where ?)

				* edit your data : it's the name of your pages that correspond to your categories (here : homepage, whopage, whatpage, wherepage)

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/list-properties.png)

				_**Note :**_ to edit your labels and data, click on "edit", click on the "+", enter your text, click on the "+" to add another label (or data). When you have done, just click on "ok". Of course if you forget a label (or a data) you can click on "edit" again and add it. You can also delete an item or copy it : for that, select your item by checking the box to its left, and click on the red "x" if you want to delete it, or on the square to copy it. If you want to change the order of your items (or data) drag and drop it to the wanted position.

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/edit-labels.png)




  * **the DataSelector component**


				* the name : DataSelector

				* the list name : put the name of your RichTextList (here : list)

				* the cell content : <<label>>

				* the deeplink format : <<data>>

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/DataSelector-properties.png)

				* the page's name : <<data>>

				* the "icon" box : check it

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/data-selector-properties-2.png)

				And it's done !

				_**Note :**_ the DataSelector component has the icon property. So, if you want to put a particular layout for your pages transition, you have to choose the wanted layout on your DataSelector properies.
				The cell content corresponds to the list content that appears on the stage.
				The deeplink format correponds to what appears on the URL. And the page's name corresponds to the name of the xml pages.


### Step 2 : Customize your dynamic menu






  * the RichTextList


				To change the visual aspect of your menu, you have to parameter your RichTextList (named "list").

				* if you want a vertical menu or an horizontal menu, just change the number of "items per row"

				In this tutorial, we have an horizontal menu with 4 categories, so we have 4 items per row.

				If you want a vertical menu, whatever the number of categories, put 1 item per row.

				* place your menu where you want on your publication by using the x and y parameters

				* change the width and the height of your menu

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/list-visual-parameters1.png)

				You can also change the font, color, size, etc... of the text that corresponds to your categories.

				For that, when you edit your text in the "labels", edit it in html.

				For this tutorial, we have edited our labels in that way :

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/edit-your-text-label-in-html.png)

				_**Note :**_ to edit in html, verify that the "html" box is well checked

				![](https://www.silexlabs.org/wp-content/uploads/2011/02/html-box.png)

				This tutorial is finished !

				_**Note :**_ you can also customize the RichTextList display the same way it has been done for the thumblist display in [this tutorial](https://www.silexlabs.org/?p=1336).
