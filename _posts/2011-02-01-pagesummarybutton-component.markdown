---
author: "gina1985qian"
comments: true
date: "2011-02-01T15:34:39.000Z"
layout: "post"
title: "Catalog pages list, Flip Book summary"
categories: ["Plugins"]
tags: ["PageSummayButton"]

---
This plugins let you create an index of the pages of a flip book / catalog. Use it in PDF import templates only, see the [PDF import plugin](https://www.silexlabs.org/?p=1387) and the [PDF import templates](https://www.silexlabs.org/?cat=364).


## User guide


When you edit a flip book theme, where a PDF has been imported with the PDF import plugin, simply click on the button in the Wysiwyg, select the appearance of the List, the type of Scrolbar, etc. And click ok.

Then you will see something like this, at the bottom of a flip book:

[caption id="attachment_99575" align="aligncenter" width="402" caption="List of page numbers at the bottom of a flip book"]![](https://www.silexlabs.org/wp-content/uploads/2011/07/summary1.png)[/caption]

Or like this, a clickable list of pages which comes over the catalog:

[caption id="attachment_98492" align="aligncenter" width="700" caption="clickable list of pages"]![](https://www.silexlabs.org/wp-content/uploads/2011/07/pageSummayButton.png)[/caption]

It works also in a PDF import template, before importing the PDF.

<!-- more -->


## Installation instructions


Install this plugin from your manager (home > install from exchange platform): https://www.silexlabs.org/?page_id=144

To install manually: drop the sommaireALaPage folder in the silex /plugins folder


## Activation


You can activate it for a specific site or for the entire Silex server (for all sites hosted by your Silex server) in the Silex manager.

Otherwise, you can also do the same manually: To activate this plugin manually for specific site, add it to the PLUGINS_LIST parameter of your site in contents/[your_site]/conf.txt. Each plugin listed in this parameter is separated by the character @


    ex : PLUGINS_LIST=wysiwyg@search@sommaireALaPage&


To activate it manually at the Silex server level : edit the /conf/plugins_server.php file and add it to the $conf['PLUGINS_LIST'] parameter


    ex : $conf['PLUGINS_LIST'] = 'wysiwyg@snapshot@sommaireALaPage';




## Sources


The plugin is made up of these files:




  * index.php of this component, we use Javascript to add "pageSummary" button to the button group.


  * pageSummaryButton.swf: (AS3) Help people to create catalog easily for web magazine, it collect all functions of selector, connector, List component.We make a popup window at the wysiwyg to help people selecte components.


  * toolbarItems/pageSummaryButton.swf:(AS3) Help people to create catalog easily for web magazine, it collect all functions of selector, connector, List component. But there isn't the popup window.


Here are the sources: http://silex.svn.sourceforge.net/viewvc/silex/apps/third-party/plugins/pageSummaryButtonV2/src/


