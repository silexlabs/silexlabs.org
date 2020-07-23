---
layout: post
title: amfPHP 2 alpha1

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog amfPHP
tags: []

disable_wpautop: '0'
disable_wptexturize: '0'
disable_convert_chars: '0'
disable_convert_smilies: '0'
_wp_old_slug: ''
_epLastError: ''
_epLastMessage: ''
_thumbnail_id: '135923'
_edit_last: '11'
_itemCurrentVersion: ''
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/amfphp-2-alpha1/"
---

[![]({{ site.baseurl }}/assets/amf_logo1.jpg "amf_logo1")](https://www.silexlabs.org/2011/02/amfphp-2-alpha1/amf_logo1/)

The alpha for amfPHP 2 is finally here! It's not ready for production use yet, but it should be of interest to many of you amfPHP users out there.

What's
new: 
*   The core system has been stripped to the basics and refactored/rewritten. That means deserializing an AMF packet, making the RPC call, and serializing the answer. It makes for a much cleaner and more extendible codebase.
*   The plugin system. It's basic, it's not yet documented, but it works. Basic versions of plugins for logging, authentication, charset conversion, custom class mapping, flex messaging are also included. The idea is that the community can enhance these and contribute some of their own.
*   unit tests everywhere. There were absolutely no tests for 1.9, but now there's a growing body of tests to make sure that any change to the codebase doesn't create a regression.
*   PHP 4 is no longer supported.
*   support for PHP 5.3. A lot of the 1.9 code was written a long time ago and just didn't cut it by PHP 5.3 standards. This should no longer be the case.
*   some changes in serializing/deserializing objects. Anonymous objects are deserialized as objects, not arrays. Typed objects use a very simple
convention: The type found when deserializing is set to "_explicitType" on the PHP Object. And if you want to serialize an object with a type, all you have to do is make sure its "_explicitType" field is set. The Custom Class Mapping helps you do things the old way, but if you want to do things differently, you can.
*   A new workflow using amfPHP as a library. The old workflow where you put your service classes in the "services" folder is still supported, but you can just as easily keep amfPHP completely separate from your project and add various service classes to it through configuration.
*   a generated phpDoc

What's missing for a stable
release: 
*   there's a couple of serialization/deserialization handed over from the old codebase that haven't yet been fixed.
*   Not much has been done to optimize the code, so it could probably be sped up
*   documentation
*   whatever issues you find, that's the point of this release!

Who is this
for: 
*   Advanced users and developers who would like to take advantage of the new features such as the plugin system, library work flow etc.
*   Anyone who has issues with the old version, such as problems with PHP 5.3

Who should stick to
1.9: 
*   if 1.9 is ok for you and you just want to get stuff done, stay with it for the moment
*   users of the service browser, as it's not integrated in v2 yet

[So here it is! Download here.](http://sourceforge.net/projects/amfphp/files/amfphp/amfPHP-2.0.alpha1.zip/download)