---
author: "ariels"
comments: true
date: "2012-09-01T13:22:36.000Z"
layout: "post"
title: "AmfPHP Plugin ServicePropertySetter"
categories: ["Exchange amfPHP"]

---
Since service classes are created internally by AMFPHP it is not possible to pass (at construction or with setters) parameters to services.







With ServicePropertySetter, it is now possible. This plugin can be used to centralize configuration parameters and dispatch them to the services.







For instance, if services need a connection to a database by using a PDO object, instead of creating one in each services, only one can be created in a configuration file and passed to the services with this plugin : no need to have a database configuration (or an include file) in each services.







[https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/ServicePropertySetter/documentation.txt](https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/ServicePropertySetter/documentation.txt)





