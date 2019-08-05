---
author: "ariels"
comments: true
date: "2012-09-01T13:18:48.000Z"
layout: "post"
link: "https://www.silexlabs.org/fpccustomclassconverter/"
slug: "fpccustomclassconverter"
title: "AmfPHP Plugin FPCCustomClassConverter"
wordpress_id: 136139
categories: ["Exchange amfPHP"]

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

