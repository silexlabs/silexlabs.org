---
author: "ariels"
comments: true
date: "2011-01-18T13:18:31.000Z"
layout: "post"
link: "https://www.silexlabs.org/amfphp-v2-status-update/"
slug: "amfphp-v2-status-update"
title: "AMFPHP v2 Status Update"
wordpress_id: 2189
categories: ["Blog amfPHP"]

---
The bare bones version of AMFPHP 2 is just about ready. It's a no frills, clean implementation of a system to deserialize an AMF Packet, route the contained requests to the corresponding services, and serialize the answers back to AMF. If you're interested in taking a look, drop us a line and we'll send you a zip. The working repository is at [https://github.com/amfphp/amfphp-2.0](https://github.com/amfphp/amfphp-2.0) . Sourceforge will still be updated with distributable zips though.

<!-- more -->What's new:




  * unit tests everywhere. The biggest share by far is for serializing/deserializing, and they cover the basics as well as some more advanced stuff. They are surely not complete, but if someone finds a problem, the current set up should be a sound basis for fixing the code quickly and permanently.


  * Streamlined code. There are little or no dependencies between the various classes. The previous code was a bit of a mess from that standpoint, for historical reasons, so this version takes a firm stance on everything that shouldn't be included. For the same reasons, all references to globals are abolished.


  * The possibility to separate cleanly the amfphp code from the code in your project, to use it as a lib to integrate into other frameworks etc. The “services” folder is still supported for legacy reasons, but it should not be considered the only way forward. Individual classes and folders can be registered with the gateway as services and service folders respectively.


  * Support for PHP 4 has been dropped, and the code is compatible with PHP 5.0 to 5.3 and more.


What's missing for this to be a replacement for AMFPHP 1.9 :


  * The plugin/hook/configuration system


  * the following plugins which are going to be expected by the community : Custom class mapping, authentication, charset handling


  * Flex support. Flex sends messages that are not Remote Procedure Calls, and these are not yet supported.


  * reintegrate the service browser


  * json support would be nice too, if only for testing purposes


known issues:


  * apparently there are some problems with include paths. Including a class from one of the services somehow works differently from 1.9 and sometimes messes up. If anyone can shed some light on this, I'd be grateful, because I haven't been able to find the solution.



