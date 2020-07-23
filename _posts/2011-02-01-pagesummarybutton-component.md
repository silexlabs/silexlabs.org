---
layout: post
title: Catalog pages list, Flip Book summary

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags:
- PageSummayButton

_epLastError: ''
_selectedProject: Silex
_epLastMessage: ''
_selectedVersionsArray: v1.6.1

_itemCurrentVersion: v1.0
_wp_old_slug: ''
color: purple
_thumbnail_id: '130805'
_edit_last: '9'

display_name: gina1985qian
first_name: ''
last_name: ''
permalink: "/pagesummarybutton-component/"
---



User guide
----------

When you edit a flip book theme, where a PDF has been imported with the PDF import plugin, simply click on the button in the Wysiwyg, select the appearance of the List, the type of Scrolbar, etc. And click ok.

Then you will see something like this, at the bottom of a flip
book: 
[caption id="attachment_99575" align="aligncenter" width="402" caption="List of page numbers at the bottom of a flip book"]![]({{ site.baseurl }}/assets/summary1.png "summary1")[/caption]

Or like this, a clickable list of pages which comes over the
catalog: 
[caption id="attachment_98492" align="aligncenter" width="700" caption="clickable list of pages"]![]({{ site.baseurl }}/assets/pageSummayButton.png "pageSummayButton")[/caption]

It works also in a PDF import template, before importing the PDF.

Installation instructions
-------------------------

Install this plugin from your manager (home > install from exchange


To install
manually: drop the sommaireALaPage folder in the silex /plugins folder

Activation
----------

You can activate it for a specific site or for the entire Silex server (for all sites hosted by your Silex server) in the Silex manager.

Otherwise, you can also do the same
manually: To activate this plugin manually for specific site, add it to the PLUGINS_LIST parameter of your site in contents/[your_site]/conf.txt. Each plugin listed in this parameter is separated by the character @

ex
: PLUGINS_LIST=wysiwyg@search@sommaireALaPage&

To activate it manually at the Silex server level
: edit the /conf/plugins_server.php file and add it to the $conf['PLUGINS_LIST'] parameter

ex
: $conf['PLUGINS_LIST'] = 'wysiwyg@snapshot@sommaireALaPage';

Sources
-------

The plugin is made up of these
files: 
*   index.php of this component, we use Javascript to add "pageSummary" button to the button group.
*  
pageSummaryButton.swf: (AS3) Help people to create catalog easily for web magazine, it collect all functions of selector, connector, List component.We make a popup window at the wysiwyg to help people selecte components.
*   toolbarItems/pageSummaryButton.swf:(AS3) Help people to create catalog easily for web magazine, it collect all functions of selector, connector, List component. But there isn't the popup window.

Here are the
