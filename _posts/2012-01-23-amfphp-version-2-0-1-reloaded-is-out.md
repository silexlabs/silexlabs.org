---
layout: post
title: amfPHP version 2.0.1 reloaded is out!

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog amfPHP
- Blog Silex Labs
- The Blog
tags: []

_epLastMessage: ''
_edit_last: '11'
_selectedProject: AMFPHP
_itemCurrentVersion: ''
_selectedVersionsArray: v2.0.0
_thumbnail_id: '131388'
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/amfphp-version-2-0-1-reloaded-is-out/"
---

Silex Labs is proud to release the latest and greatest version of amfPHP.  A few months after the much awaited 2.0, we've worked hard to make the experience of our users even better.



We've also worked on making amfPHP more flexible and extensible. Some people have started working on third party plugins, and we want more, so this should make your life easier. We've made many changes under the hood to make things faster, more stable, and more secure.

We'd like to give a big thank you to the community for their support, feedback and ideas. Even those who were rude!

The download page is


You can read the details in the changelog, of which there is an excerpt below.

[![]({{ site.baseurl }}/assets/header-amfphp1-677x123.jpg "header-amfphp")](https://www.silexlabs.org/131386/the-blog/amfphp-version-2-0-1-reloaded-is-out/attachment/header-amfphp-2/)

[  
](https://www.silexlabs.org/131386/the-blog/amfphp-version-2-0-1-reloaded-is-out/attachment/header-amfphp-2/)change everything from private to protected to allow better extensibility  
possibility to add headers and messages in AMF response  
call duration in service browser  
support for receiving ArrayCollections is back(no sending back to client yet)  
check arguments count option for service router  
filter out methods starting with a '_', giving the possibility to have public methods that aren't accessible from clients.