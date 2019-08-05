---
author: lexa
comments: true
date: 2010-07-05 17:33:16+00:00
excerpt: "<img class=\"size-full wp-image-741 alignnone\" src=\"http://wp-manager.silex-ria.org/wp-content/uploads/2010/07/plugin.png\"\
  \ alt=\"search plugin\" width=\"180\" height=\"85\" /><h3>Description</h3>\
  This plugin allows you to index the contents of a given site through the\
  \ new Silex manager. It then makes possible performing search queries in the indexed\
  \ site's contents.<h3>Example provided !!!</h3>This plugin is\
  \ provided with an example publication named \"test_search\" so you can easily try\
  \ this functionality.<h3>Prerequisite</h3>The search plugin\
  \ uses the Silex Seo plugin. This required plugin is included within the search\
  \ plugin.<h3>Installation instructions</h3>To install this plugin\
  \ on a silex server, use the manager's plugin installer (exchange platform), or\
  \ copy the plugin folder in the silex_server/plugins folder.<h3>Use</h3>\
  To index a site, open the silex manager and go to manage&gt;[your_site]&gt;plugins.\
  \ Activate the search plugin for your site and then select it in the installed plugins\
  \ list. The administration page of the plugin will show up and should propose to\
  \ click on a \"index\" button. Once the site indexed, a message confirming that\
  \ the site has been indexed should be printed.Once a site is indexed,\
  \ this plugin also allows you to perform search queries in the site's contents.\
  To do so, go in the Wysiwyg, select a sublayer and click \"Add Component\"\
  , go Buttons section, then choose \"Add Search Component\".The needed\
  \ elements will be automatically added and configured. You just have to move and\
  \ resize the components as you wish.note: there is no use to activate\
  \ this plugin at the Silex server level. You may use it only at Silex site level.\
  <h3>Technical information</h3>The script you have to call for\
  \ such queries is the feed.php script inside the plugin directory (its use doesn't\
  \ require that you activate the search plugin for a given site). The results of\
  \ the queries are return in the rss format. To read the instructions for using this\
  \ feed.php script, simply open a web browser and give it the script's address without\
  \ passing any GET parameters (for example : http://[my_silex_server_address]/plugins/search/feed.php).\
  \ The feed.php help page should then show up.It is made up of :\
  <ul><li>index.php : contains the management class of the plugin</li>\
  <li>create_website_index.php : the script performing the indexation of a\
  \ given site</li><li>feed.php : the script that allows to consult indexed\
  \ contents</li><li>silex_search.php : class used by the indexation</li>\
  <li>The Zend libraries used by the indexation.</li></ul>\
  <h3>Sources</h3>search plugin for Silex<a href=\"https://silex.svn.sourceforge.net/svnroot/silex/apps/third-party/plugins/search/src/\"\
  >https://silex.svn.sourceforge.net/svnroot/silex/apps/third-party/plugins/search/src/</a>"
layout: post
link: https://www.silexlabs.org/search-plugin-for-silex/
slug: search-plugin-for-silex
title: Search plugin for Silex
wordpress_id: 735
categories:
- "Plugins"
tags:
- "engine"
- "index"
- "indexation"
- "plugin"
- "search"
---

![search plugin](http://wp-manager.silex-ria.org/wp-content/uploads/2010/07/plugin.png)


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


				The script you have to call for such queries is the feed.php script inside the plugin directory (its use doesn't require that you activate the search plugin for a given site). The results of the queries are return in the rss format. To read the instructions for using this feed.php script, simply open a web browser and give it the script's address without passing any GET parameters (for example : http://[my_silex_server_address]/plugins/search/feed.php). The feed.php help page should then show up.

				It is made up of :




  * index.php : contains the management class of the plugin


  * create_website_index.php : the script performing the indexation of a given site


  * feed.php : the script that allows to consult indexed contents


  * silex_search.php : class used by the indexation


  * The Zend libraries used by the indexation.




### Sources


				search plugin for Silex

				[https://silex.svn.sourceforge.net/svnroot/silex/apps/third-party/plugins/search/src/](https://silex.svn.sourceforge.net/svnroot/silex/apps/third-party/plugins/search/src/)
