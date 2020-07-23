---
layout: post
title: Silex SEO Plugin

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex
- Plugins
tags: []

_itemCurrentVersion: '1.0'
_edit_last: '15'
_epLastMessage: ''
_selectedVersionsArray: v1.6.2,v1.7.0
_selectedProject: Silex

_itemCurrentFileName: ''
_thumbnail_id: '132915'
wpautop: "- Select -"
skin: "- Select -"
layout_footer: "- Select -"
layout_header: "- Select -"

display_name: codam
first_name: codam
last_name: ''
permalink: "/silex-seo-plugin/"
---

[![]({{ site.baseurl }}/assets/plugin1.png "plugin")](https://www.silexlabs.org/132908/the-blog/blog-silex/silex-seo-plugin/attachment/plugin-2/)

### Description

This plugin adds the possiblity to generate SEO (Search Engine Optimization) informations for a silex site in some specific cases.

Normal cases are already taken care of by Silex.

It is specifically designed for these
cases: 
*   when different pages (or deeplinks) share the same layer (useful for multiple languages contexts).
*   when dynamic content is used. In that case the seo plugin should be run regularly.

This
includes: 
*   accessors resolving
*   Oof selector children resolving and parsing

Silex natively takes care of the following cases, when you are saving the layers via the
Wysiwyg: 
*   only one deeplink is used per layer
*   html compatible components (text, images, label buttons...)

### Example provided !!!

This plugin is provided with an example publication named "test_seo_plugin" so you can easily try this functionality.

### Installation

To install this plugin on a silex server, use the manager's plugin installer (exchange platform), or copy the plugin folder in the silex_server/plugins folder.

### Activation

This plugin has to be activated at publication level.

Specific publication
activation: 
In the server's manager go to "Manage", click on the publication on which the plugin should be activated, then click on "Plugins > Activate a plugin", and finally click on the plugin icon and then on "confirm".

### Use

To generate seo information for all layers of the
publication: 
-In the server's manager go to "Manage", click on the publication for which the seo should be generated, then click on "Generate Seo".

-The plugin will update the /silex_server/contents/site_id/*.seodata.xml files contents.

-As a result, the sitemap of the site (accessible
here: /silex_server/sitemap.php?id_site=site_id) will be updated.

It can be useful to check the sitemap before and after running the SEO generation process.

### Parameters

None

### Content

The snapshot plugin folder contains several
files: 
*   index.php
    *   contains the php needed to load the plugin.
*   directories
    *   hx
        *   contains the PHP seo project generated with Haxe
    *   lang
        *   contains the translations files

### Sources

They can be found on following subversion
