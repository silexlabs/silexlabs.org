---
author: "lexa"
comments: true
date: "2011-04-06T17:35:06.000Z"
layout: "post"
title: "My Media - PDF import template"
categories: ["Exchange Silex","The Blog","Themes"]
tags: ["Léo Francia","pdf","pdf import template","silex theme","template"]

---
Here is an [Online demo](http://www.silexprod.com/silex_leo_02/?/my_media#/my_media/home) of the my media theme



## The mymedia PDF import template


This Silex theme is a PDF import template, which means that it is possible to convert a PDF into a site, automatically replacing the inner pages of the theme by the PDF pages.

> Use it with [the PDF import plugin](https://www.silexlabs.org/?p=1387) to generate websites from this template, **please read instructions bellow**

To make a web site out of a PDF, follow these steps




  1. install [the PDF import plugin](https://www.silexlabs.org/?p=1387) and configure it - see the instruction on the plugin's page


  2. login into your Silex manager, on the home page select "import PDF"


  3. click "upload PDF" and upload your PDF


  4. select the template "my_media-pdf-import-template" in the list and click "convert"


  5. follow the link to your new site




![](https://www.silexlabs.org/wp-content/uploads/2010/05/My-Media-theme.jpg)




<!-- more -->




![](https://www.silexlabs.org/wp-content/uploads/2010/05/My-media-theme-2.jpg)





## What to do after importing a PDF


The PDF is kept in the "media/" folder of your Silex server, and the generated images for each page of the PDF (swf and png) are stored in a sub folder of  the "media/" folder of your Silex server. A new site is created during conversion, which means that a new folder is created in the "contents/" folder of your Silex server.

If you want to change the title of the pages (displayed in the menu), edit the file "contents/<your site name>/structure.published.xml" in a text editor. Then add a "title" tag, bellow each "name" tag. For example, change this




    <name>page1</name>


Into this


    <name>page1</name><title>First Page</title>


This is a derive work from the template of [Leo Francia](http://loeufalacoque.com/leofrancia/) ["My media theme"](https://www.silexlabs.org/?p=618) so this theme will be installed with the “My Media - PDF import template" template.


## The dev kit for mymedia PDF import template


In order to customize all the components and designe elements of this template, please download the dev kit from the original template of [Leo Francia](http://loeufalacoque.com/leofrancia/) ["My media theme" here](https://www.silexlabs.org/?p=618)
**
**


