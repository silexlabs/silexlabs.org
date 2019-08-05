---
author: ariels
comments: true
date: 2012-09-01 13:18:48+00:00
excerpt: "<div id=\"LC45\">FPCCustomClassConverter is an AMFPHP plugin that improves\
  \ the mechanism of VO</div><div id=\"LC46\">class resolution from the\
  \ explicitType value. For instance with a minimal</div><div id=\"LC47\"\
  >configuration the plugin can manage package like explicitType value.</div>\
  <div id=\"LC48\">For instance if explicitType is equal to \"net.femtoparsec.model.MyVoClass\"\
  ,</div><div id=\"LC49\">the plugin will search the folder \"&lt;ROOT&gt;/net/femtoparsec/model\"\
  \ for</div><div id=\"LC50\">the file \"MyVoClass.php\" (&lt;ROOT&gt; is\
  \ a parameter of the plugin).</div><div id=\"LC51\"></div><div\
  \ id=\"LC52\">The plugin can also be configured to behave like the original</div>\
  <div id=\"LC53\">CustomClassConverter.</div><div id=\"LC54\"></div>\
  <div id=\"LC55\">The plugin also modifies the way the properties to serialized\
  \ are determined.</div><div id=\"LC56\">The original version simply serializes\
  \ public properties of PHP VO. This plugin</div><div id=\"LC57\">do the\
  \ same and also serialized private properties with getter and setter.</div>\
  <div id=\"LC58\">It is also possible to serialize custom property for specific\
  \ object that are</div><div id=\"LC59\">not VO object (or not controlled\
  \ by the develloper).</div><div></div><div><a href=\"https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/FPCCustomClassConverter/documentation.txt\"\
  >https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/FPCCustomClassConverter/documentation.txt</a></div>"
layout: post
link: https://www.silexlabs.org/fpccustomclassconverter/
slug: fpccustomclassconverter
title: AmfPHP Plugin FPCCustomClassConverter
wordpress_id: 136139
categories:
- "Exchange amfPHP"
---

FPCCustomClassConverter is an AMFPHP plugin that improves the mechanism of VO




class resolution from the explicitType value. For instance with a minimal




configuration the plugin can manage package like explicitType value.




For instance if explicitType is equal to "net.femtoparsec.model.MyVoClass",




the plugin will search the folder "<ROOT>/net/femtoparsec/model" for




the file "MyVoClass.php" (<ROOT> is a parameter of the plugin).







The plugin can also be configured to behave like the original




CustomClassConverter.







The plugin also modifies the way the properties to serialized are determined.




The original version simply serializes public properties of PHP VO. This plugin




do the same and also serialized private properties with getter and setter.




It is also possible to serialize custom property for specific object that are




not VO object (or not controlled by the develloper).







[https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/FPCCustomClassConverter/documentation.txt](https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/FPCCustomClassConverter/documentation.txt)
