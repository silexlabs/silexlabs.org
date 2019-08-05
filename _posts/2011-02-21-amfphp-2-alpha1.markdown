---
author: ariels
comments: true
date: 2011-02-21 15:12:45+00:00
excerpt: "<a href=\"https://www.silexlabs.org/2011/02/amfphp-2-alpha1/amf_logo1/\"\
  \ rel=\"attachment wp-att-2457\"><img class=\"alignnone size-full wp-image-2457\"\
  \ title=\"amf_logo1\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/02/amf_logo1.jpg\"\
  \ alt=\"\" width=\"694\" height=\"336\" /></a>The alpha for amfPHP 2\
  \ is finally here! It's not ready for production use yet, but it should be of interest\
  \ to many of you amfPHP users out there.<!-- more -->What's\
  \ new:<ul><li>The core system has been stripped to the basics\
  \ and refactored/rewritten. That means deserializing an AMF packet, making the RPC\
  \ call, and serializing the answer. It makes for a much cleaner and more extendible\
  \ codebase.</li><li>The plugin system. It's basic, it's not yet documented,\
  \ but it works. Basic versions of plugins for logging, authentication, charset conversion,\
  \ custom class mapping, flex messaging are also included. The idea is that the community\
  \ can enhance these and contribute some of their own.</li><li>unit tests\
  \ everywhere. There were absolutely no tests for 1.9, but now there's a growing\
  \ body of tests to make sure that any change to the codebase doesn't create a regression.</li>\
  <li>PHP 4 is no longer supported.</li><li>support for PHP 5.3.\
  \ A lot of the 1.9 code was written a long time ago and just didn't cut it by PHP\
  \ 5.3 standards. This should no longer be the case.</li><li>some changes\
  \ in serializing/deserializing objects. Anonymous objects are deserialized as objects,\
  \ not arrays. Typed objects use a very simple convention: The type found when deserializing\
  \ is set to \"_explicitType\" on the PHP Object. And if you want to serialize an\
  \ object with a type, all you have to do is make sure its \"_explicitType\" field\
  \ is set. The Custom Class Mapping helps you do things the old way, but if you want\
  \ to do things differently, you can.</li><li>A new workflow using amfPHP\
  \ as a library. The old workflow where you put your service classes in the \"services\"\
  \ folder is still supported, but you can just as easily keep amfPHP completely separate\
  \ from your project and add various service classes to it through configuration.</li>\
  <li>a generated phpDoc</li></ul>What's missing for a\
  \ stable release:<ul><li>there's a couple of serialization/deserialization\
  \ handed over from the old codebase that haven't yet been fixed.</li>\
  <li>Not much has been done to optimize the code, so it could probably be sped up</li>\
  <li>documentation</li><li>whatever issues you find, that's the\
  \ point of this release!</li></ul>Who is this for:\
  <ul><li>Advanced users and developers who would like to take advantage\
  \ of the new features such as the plugin system, library work flow etc.</li>\
  <li>Anyone who has issues with the old version, such as problems with PHP\
  \ 5.3</li></ul>Who should stick to 1.9:<ul>\
  <li>if 1.9 is ok for you and you just want to get stuff done, stay with it for\
  \ the moment</li><li>users of the service browser, as it's not integrated\
  \ in v2 yet</li></ul><a href=\"http://sourceforge.net/projects/amfphp/files/amfphp/amfPHP-2.0.alpha1.zip/download\"\
  >So here it is! Download here.</a>"
layout: post
link: https://www.silexlabs.org/amfphp-2-alpha1/
slug: amfphp-2-alpha1
title: amfPHP 2 alpha1
wordpress_id: 2389
categories:
- "Blog amfPHP"
---

[![](https://www.silexlabs.org/wp-content/uploads/2011/02/amf_logo1.jpg)](https://www.silexlabs.org/2011/02/amfphp-2-alpha1/amf_logo1/)

				The alpha for amfPHP 2 is finally here! It's not ready for production use yet, but it should be of interest to many of you amfPHP users out there.

				<!-- more -->

				What's new:




  * The core system has been stripped to the basics and refactored/rewritten. That means deserializing an AMF packet, making the RPC call, and serializing the answer. It makes for a much cleaner and more extendible codebase.


  * The plugin system. It's basic, it's not yet documented, but it works. Basic versions of plugins for logging, authentication, charset conversion, custom class mapping, flex messaging are also included. The idea is that the community can enhance these and contribute some of their own.


  * unit tests everywhere. There were absolutely no tests for 1.9, but now there's a growing body of tests to make sure that any change to the codebase doesn't create a regression.


  * PHP 4 is no longer supported.


  * support for PHP 5.3. A lot of the 1.9 code was written a long time ago and just didn't cut it by PHP 5.3 standards. This should no longer be the case.


  * some changes in serializing/deserializing objects. Anonymous objects are deserialized as objects, not arrays. Typed objects use a very simple convention: The type found when deserializing is set to "_explicitType" on the PHP Object. And if you want to serialize an object with a type, all you have to do is make sure its "_explicitType" field is set. The Custom Class Mapping helps you do things the old way, but if you want to do things differently, you can.


  * A new workflow using amfPHP as a library. The old workflow where you put your service classes in the "services" folder is still supported, but you can just as easily keep amfPHP completely separate from your project and add various service classes to it through configuration.


  * a generated phpDoc


				What's missing for a stable release:


  * there's a couple of serialization/deserialization handed over from the old codebase that haven't yet been fixed.


  * Not much has been done to optimize the code, so it could probably be sped up


  * documentation


  * whatever issues you find, that's the point of this release!


				Who is this for:


  * Advanced users and developers who would like to take advantage of the new features such as the plugin system, library work flow etc.


  * Anyone who has issues with the old version, such as problems with PHP 5.3


				Who should stick to 1.9:


  * if 1.9 is ok for you and you just want to get stuff done, stay with it for the moment


  * users of the service browser, as it's not integrated in v2 yet


				[So here it is! Download here.](http://sourceforge.net/projects/amfphp/files/amfphp/amfPHP-2.0.alpha1.zip/download)
