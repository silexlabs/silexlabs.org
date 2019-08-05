---
author: admin
comments: true
date: 2010-08-04 22:56:52+00:00
excerpt: "We at AMFPHP have some very exciting news for the community: we will be\
  \ partially rewriting AMFPHP to bring you a leaner, meaner and cleaner AMFPHP and\
  \ these modifications/additions will bring AMFPHP's version up to 2.0.\
  AMFPHP, in its current state, is old and getting more and more frail with every\
  \ release of PHP. The last serious development done on the system was carried out\
  \ a year or two ago, and it's time for a revamp - wouldn't you agree? ;) In the\
  \ upcoming version, we will be bringing you an up-to-date iteration of AMFPHP that\
  \ is compliant with PHP 5.2.x &amp; 5.3.x and we will be dropping our PHP4 support\
  \ in favour of the wicked new features in PHP5.x that will make our system run more\
  \ efficiently and - most importantly - more effectively. Don't worry though - AMFPHP\
  \ will remain the easiest and fastest AMF system, with the smallest footprint.\
  In this article, we will be detailing all the future features of AMFPHP\
  \ 2.0, as well as a few ideas that will hopefully get picked up by the community\
  \ and implemented independently - otherwise we will address them later on.\
  <!-- more --><h2>Overview</h2>AMFPHP 2.0 will be redesigned\
  \ with a strong Object-Oriented architecture. We will be setting the system up for\
  \ easy maintainability, customization and scalability, as well as providing detailed\
  \ documentation for all the hackers &amp; newbies out there. The reason why we're\
  \ redesigning the system is because AMFPHP 1.9.x (now more than two years old) is\
  \ getting to give serious headaches to developers running more up-to-date versions\
  \ of PHP5.x.x, and this is just not on. Instead of modifying the system as it stands,\
  \ we will be redeveloping the core functionality and fixing some of the serialization/deserialization\
  \ issues encountered by the community at large. Over and above that, we will be\
  \ adding in some exciting and innovative features that will help make your development\
  \ life so much easier.<h2>System Upgrades</h2><ul>\
  <li>Compatibility with PHP 5.2.x, PHP 5.3.x<ul><li>If issues\
  \ crop up with future versions of PHP, we will patch the existing system and export\
  \ a release for that version</li></ul></li><li>Deprecation\
  \ of PHP 4 support</li></ul><h2>Architecture Changes / Additions</h2>\
  The AMFPHP system will become a strictly Object-Oriented system that will\
  \ facilitate easy modification or extension. As a function of this structure, we\
  \ will be implementing a brand new <strong>plugin &amp; hook system</strong>, which\
  \ will allow developers to create nifty additions to AMFPHP without having to hack\
  \ the core.Some of the plugins that we plan to develop are (but are\
  \ not limited to):<ul><li>Authentication</li><li>Cache</li>\
  <li>Security<ul><li>We will probably provide two forms\
  \ of security plugins, one which is solely server-side and one which will integrate\
  \ with our innovative cross-tier RSA encryption mechanism to be documented soon</li>\
  </ul></li><li>Custom VO (Value-Object) mapping</li>\
  <li>Charsets</li><li>Logging</li><li>JSON/XML-RPC/Haxe\
  \ Remoting - you'll soon be able to use AMFPHP as a web-service architecture without\
  \ actually using AMF!</li></ul>These plugins will all work through\
  \ our plugin &amp; hook system which will allow you to modify or replace a step\
  \ in the regular application flow (in brackets are examples of which plugins could\
  \ be used in certain points in the flow):<ul><li><strong>Accept\
  \ HTTP request</strong> (logging, authentication)</li><li><strong>Modify/pre-process\
  \ the incoming data</strong> (charset)</li><li><strong>Replace the upcoming\
  \ deserialization stage</strong> (alternative AMF deserialization plugin?)</li>\
  <li><strong>Throw an exception if an error is encountered</strong> (authentication,\
  \ security, custom error handler)</li><li><strong>Bypass the normal flow\
  \ </strong>(cache)</li><li><strong>Build the HTTP response</strong> (logging)</li>\
  <li><strong>Modify/pre-process the outgoing data</strong> (VO mapping, charset)</li>\
  </ul>We will also be exploring the possibility of writing a new\
  \ C-based AMF serializer/deserializer to seriously improve on the speed of the system.\
  Detailed error messages are on the cards as well; no more convoluted error\
  \ messages with no debugging information! We hope to have a configuration option\
  \ available that will tell AMFPHP to send back detailed information about the error.\
  We will also be revamping the configuration aspect of AMFPHP. We're as\
  \ yet undecided about whether to go for an XML-based type of configuration or whether\
  \ to keep it in PHP.Security will be a big focus for us in AMFPHP 2.0;\
  \ as mentioned above, we will be implementing a couple different forms of authentication\
  \ and authorization, and these methodologies will be documented as and when we settle\
  \ on which (or which combination of) methods we will use.Another huge\
  \ change to the system is <strong>detailed documentation</strong>. We will post\
  \ more about this in future articles, but needless to say that it will be very thorough\
  \ and we'll have both high-level and low-level documentation available.\
  All in all, we have very big things planned for AMFPHP 2.0 and we welcome your\
  \ comments, questions and suggestions! If there's anything that we've missed or\
  \ that you'd like to see in AMFPHP 2.0, do give us a shout in the comments!"
layout: post
link: https://www.silexlabs.org/amfphp-2-0-roadmap/
slug: amfphp-2-0-roadmap
title: AMFPHP 2.0 Roadmap
wordpress_id: 1743
categories:
- "Blog amfPHP"
tags:
- "amfphp 2.0"
- "roadmap"
---

We at AMFPHP have some very exciting news for the community: we will be partially rewriting AMFPHP to bring you a leaner, meaner and cleaner AMFPHP and these modifications/additions will bring AMFPHP's version up to 2.0.

				AMFPHP, in its current state, is old and getting more and more frail with every release of PHP. The last serious development done on the system was carried out a year or two ago, and it's time for a revamp - wouldn't you agree? ;) In the upcoming version, we will be bringing you an up-to-date iteration of AMFPHP that is compliant with PHP 5.2.x & 5.3.x and we will be dropping our PHP4 support in favour of the wicked new features in PHP5.x that will make our system run more efficiently and - most importantly - more effectively. Don't worry though - AMFPHP will remain the easiest and fastest AMF system, with the smallest footprint.

				In this article, we will be detailing all the future features of AMFPHP 2.0, as well as a few ideas that will hopefully get picked up by the community and implemented independently - otherwise we will address them later on.

				<!-- more -->


## Overview


				AMFPHP 2.0 will be redesigned with a strong Object-Oriented architecture. We will be setting the system up for easy maintainability, customization and scalability, as well as providing detailed documentation for all the hackers & newbies out there. The reason why we're redesigning the system is because AMFPHP 1.9.x (now more than two years old) is getting to give serious headaches to developers running more up-to-date versions of PHP5.x.x, and this is just not on. Instead of modifying the system as it stands, we will be redeveloping the core functionality and fixing some of the serialization/deserialization issues encountered by the community at large. Over and above that, we will be adding in some exciting and innovative features that will help make your development life so much easier.


## System Upgrades






  * Compatibility with PHP 5.2.x, PHP 5.3.x


    * If issues crop up with future versions of PHP, we will patch the existing system and export a release for that version





  * Deprecation of PHP 4 support




## Architecture Changes / Additions


				The AMFPHP system will become a strictly Object-Oriented system that will facilitate easy modification or extension. As a function of this structure, we will be implementing a brand new **plugin & hook system**, which will allow developers to create nifty additions to AMFPHP without having to hack the core.

				Some of the plugins that we plan to develop are (but are not limited to):




  * Authentication


  * Cache


  * Security


    * We will probably provide two forms of security plugins, one which is solely server-side and one which will integrate with our innovative cross-tier RSA encryption mechanism to be documented soon





  * Custom VO (Value-Object) mapping


  * Charsets


  * Logging


  * JSON/XML-RPC/Haxe Remoting - you'll soon be able to use AMFPHP as a web-service architecture without actually using AMF!


				These plugins will all work through our plugin & hook system which will allow you to modify or replace a step in the regular application flow (in brackets are examples of which plugins could be used in certain points in the flow):


  * **Accept HTTP request** (logging, authentication)


  * **Modify/pre-process the incoming data** (charset)


  * **Replace the upcoming deserialization stage** (alternative AMF deserialization plugin?)


  * **Throw an exception if an error is encountered** (authentication, security, custom error handler)


  * **Bypass the normal flow **(cache)


  * **Build the HTTP response** (logging)


  * **Modify/pre-process the outgoing data** (VO mapping, charset)


				We will also be exploring the possibility of writing a new C-based AMF serializer/deserializer to seriously improve on the speed of the system.

				Detailed error messages are on the cards as well; no more convoluted error messages with no debugging information! We hope to have a configuration option available that will tell AMFPHP to send back detailed information about the error.

				We will also be revamping the configuration aspect of AMFPHP. We're as yet undecided about whether to go for an XML-based type of configuration or whether to keep it in PHP.

				Security will be a big focus for us in AMFPHP 2.0; as mentioned above, we will be implementing a couple different forms of authentication and authorization, and these methodologies will be documented as and when we settle on which (or which combination of) methods we will use.

				Another huge change to the system is **detailed documentation**. We will post more about this in future articles, but needless to say that it will be very thorough and we'll have both high-level and low-level documentation available.

				All in all, we have very big things planned for AMFPHP 2.0 and we welcome your comments, questions and suggestions! If there's anything that we've missed or that you'd like to see in AMFPHP 2.0, do give us a shout in the comments!
