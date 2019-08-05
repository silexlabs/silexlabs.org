---
author: ariels
comments: true
date: 2012-09-01 13:22:36+00:00
excerpt: "<div id=\"LC46\">Since service classes are created internally by AMFPHP\
  \ it is not possible to pass (at construction or with setters) parameters to services.</div>\
  <div id=\"LC47\"></div><div id=\"LC48\">With ServicePropertySetter,\
  \ it is now possible. This plugin can be used to centralize configuration parameters\
  \ and dispatch them to the services.</div><div id=\"LC49\"></div>\
  <div id=\"LC50\">For instance, if services need a connection to a database by\
  \ using a PDO object, instead of creating one in each services, only one can be\
  \ created in a configuration file and passed to the services with this plugin :\
  \ no need to have a database configuration (or an include file) in each services.</div>\
  <div id=\"LC51\"></div><div><a href=\"https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/ServicePropertySetter/documentation.txt\"\
  >https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/ServicePropertySetter/documentation.txt</a></div>\
  <div id=\"LC52\"></div>"
layout: post
link: https://www.silexlabs.org/servicepropertysetter-plugin/
slug: servicepropertysetter-plugin
title: AmfPHP Plugin ServicePropertySetter
wordpress_id: 136145
categories:
- "Exchange amfPHP"
---

Since service classes are created internally by AMFPHP it is not possible to pass (at construction or with setters) parameters to services.







With ServicePropertySetter, it is now possible. This plugin can be used to centralize configuration parameters and dispatch them to the services.







For instance, if services need a connection to a database by using a PDO object, instead of creating one in each services, only one can be created in a configuration file and passed to the services with this plugin : no need to have a database configuration (or an include file) in each services.







[https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/ServicePropertySetter/documentation.txt](https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/ServicePropertySetter/documentation.txt)



