---
layout: post
title: AMFPHP v2 Status Update

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog amfPHP
tags: []

_wp_old_slug: ''
disable_convert_smilies: '0'
disable_convert_chars: '0'
disable_wptexturize: '0'
disable_wpautop: '0'
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
permalink: "/amfphp-v2-status-update/"
---



What's
new: 
*   unit tests everywhere. The biggest share by far is for serializing/deserializing, and they cover the basics as well as some more advanced stuff. They are surely not complete, but if someone finds a problem, the current set up should be a sound basis for fixing the code quickly and permanently.
*   Streamlined code. There are little or no dependencies between the various classes. The previous code was a bit of a mess from that standpoint, for historical reasons, so this version takes a firm stance on everything that shouldn't be included. For the same reasons, all references to globals are abolished.
*   The possibility to separate cleanly the amfphp code from the code in your project, to use it as a lib to integrate into other frameworks etc. The “services” folder is still supported for legacy reasons, but it should not be considered the only way forward. Individual classes and folders can be registered with the gateway as services and service folders respectively.
*   Support for PHP 4 has been dropped, and the code is compatible with PHP 5.0 to 5.3 and more.

What's missing for this to be a replacement for AMFPHP 1.9
: 
*   The plugin/hook/configuration system
*   the following plugins which are going to be expected by the community
: Custom class mapping, authentication, charset handling
*   Flex support. Flex sends messages that are not Remote Procedure Calls, and these are not yet supported.
*   reintegrate the service browser
*   json support would be nice too, if only for testing purposes

known
issues: 
*   apparently there are some problems with include paths. Including a class from one of the services somehow works differently from 1.9 and sometimes messes up. If anyone can shed some light on this, I'd be grateful, because I haven't been able to find the solution.