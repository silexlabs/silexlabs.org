---
layout: post
title: Search plugin for Silex

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags:
- engine
- index
- indexation
- plugin
- search

Description: This plugin allows you to index the contents of a given site though the new Silex manager. It then makes possible performing search queries in the indexed site's contents.
Version: '1.1'
SilexVersion: "> 1.6.x"
FlashPlayerVersion: n/a
AuthorEmail: thomas.fetiveau.tech@gmail.com

color: orange
_epLastError: ''
_epLastMessage: ''
_itemCurrentVersion: v1.4

_itemCurrentFileName: search_plugin.zip
_selectedProject: Silex
_selectedVersionsArray: v1.6.0,v1.6.1,v1.6.2
_edit_last: '15'

display_name: lexa
first_name: lexa
last_name: ''
permalink: "/search-plugin-for-silex/"
---

![search plugin]({{ site.baseurl }}/assets/plugin.png)

### Description

This plugin allows you to index the contents of a given site through the new Silex manager. It then makes possible performing search queries in the indexed site's contents.

### Example provided !!!

This plugin is provided with an example publication named "test_search" so you can easily try this functionality.

### Prerequisite

The search plugin uses the Silex Seo plugin. This required plugin is included within the search plugin.

### Installation instructions

To install this plugin on a silex server, use the manager's plugin installer (exchange platform), or copy the plugin folder in the silex_server/plugins folder.

### Use

To index a site, open the silex manager and go to manage>[your_site]>plugins. Activate the search plugin for your site and then select it in the installed plugins list. The administration page of the plugin will show up and should propose to click on a "index" button. Once the site indexed, a message confirming that the site has been indexed should be printed.

Once a site is indexed, this plugin also allows you to perform search queries in the site's contents.

To do so, go in the Wysiwyg, select a sublayer and click "Add Component", go Buttons section, then choose "Add Search Component".

The needed elements will be automatically added and configured. You just have to move and resize the components as you wish.

note: there is no use to activate this plugin at the Silex server level. You may use it only at Silex site level.

### Technical information

The script you have to call for such queries is the feed.php script inside the plugin directory (its use doesn't require that you activate the search plugin for a given site). The results of the queries are return in the rss format. To read the instructions for using this feed.php script, simply open a web browser and give it the script's address without passing any GET parameters (for example
: http://[my_silex_server_address]/plugins/search/feed.php). The feed.php help page should then show up.

It is made up of
: 
*   index.php
: contains the management class of the plugin
*   create_website_index.php
: the script performing the indexation of a given site
*   feed.php
: the script that allows to consult indexed contents
*   silex_search.php
: class used by the indexation
*   The Zend libraries used by the indexation.

### Sources

search plugin for Silex

