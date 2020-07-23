---
layout: post
title: My Media - PDF import template

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Exchange Silex
- The Blog
- Themes
tags:
- Léo Francia
- pdf
- pdf import template
- silex theme
- template

_epLastError: ''
_epLastMessage: ''
_itemCurrentFileName: my_media_pdf-import-template.zip
_selectedProject: Silex
_itemCurrentVersion: v1.1
_wp_old_slug: ''

color: blue
_edit_last: '9'

display_name: lexa
first_name: lexa
last_name: ''
permalink: "/my-media-pdf-import-template/"
---

Here is an [Online demo](http://www.silexprod.com/silex_leo_02/?/my_media#/my_media/home "Démo en ligne") of the my media theme  

The mymedia PDF import template
-------------------------------

This Silex theme is a PDF import template, which means that it is possible to convert a PDF into a site, automatically replacing the inner pages of the theme by the PDF pages.

> Use it with [the PDF import plugin](https://www.silexlabs.org/?p=1387) to generate websites from this template, **please read instructions bellow**

To make a web site out of a PDF, follow these steps

1.  install [the PDF import plugin](https://www.silexlabs.org/?p=1387) and configure it - see the instruction on the plugin's page
2.  login into your Silex manager, on the home page select "import PDF"
3.  click "upload PDF" and upload your PDF
4.  select the template "my_media-pdf-import-template" in the list and click "convert"
5.  follow the link to your new site

![]({{ site.baseurl }}/assets/My-Media-theme.jpg "My-Media-theme")

![]({{ site.baseurl }}/assets/My-media-theme-2.jpg "My-media-theme-2")

What to do after importing a PDF
--------------------------------

The PDF is kept in the "media/" folder of your Silex server, and the generated images for each page of the PDF (swf and png) are stored in a sub folder of  the "media/" folder of your Silex server. A new site is created during conversion, which means that a new folder is created in the "contents/" folder of your Silex server.

If you want to change the title of the pages (displayed in the menu), edit the file "contents/<your site name>/structure.published.xml" in a text editor. Then add a "title" tag, bellow each "name" tag. For example, change this

<name>page1</name>

Into this

<name>page1</name><title>First Page</title>



The dev kit for mymedia PDF import template
-------------------------------------------

