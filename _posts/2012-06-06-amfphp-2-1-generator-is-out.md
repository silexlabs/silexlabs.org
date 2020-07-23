---
layout: post
title: amfPHP 2.1 Generator is out!

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog amfPHP
- The Blog
tags: []

_epLastMessage: ''
_edit_last: '11'
_itemCurrentVersion: ''
_thumbnail_id: '135923'
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/amfphp-2-1-generator-is-out/"
---

Silex Labs is proud to announce amfPHP 2.1. The project builds on the solid foundation of 2.0.1, and breaks new ground in making our users lives even more exciting!

**Client Project Generation**
-----------------------------

**The main novelty here is Client Project Generation**. We had a look at various code generation solutions, and thought that we could one-up them
all: We don't just generate some code that you can copy paste from your browser into notepad. We generate a **fully functional project**,
including: 
*   service classes that expose your service methods so that you can call them easily.
*   a GUI class to access each service. These are great to make back offices.
*   project files to wrap them all and hit the ground running.

And it's all done with an innovative template system that allows us to integrate new client technologies in record time.

**We currently have generators for Flash Creative Suite, and for HTML/JS. Many more are on the way.**

So, what else?
--------------

*   The service browser has moved from its plugin to a **separate "back office" section**, and it sits alongside the client generator. This makes it much easier to customize and maintain.
*   plugin development just got
easier: We now have **priorities for our filters.**
*   You can **force the server to always return AMF3**. This was not the case before and caused some issues.
*   A new Typed Object/**Object mapping example.**
*   **access to AMF packet**, messages, headers etc. is now possible from your services.
*   a **new badass logo.**

And 3 new plugins
-----------------

*   **Discovery**. This is a plugin that adds a discovery service, which can be called to get information about your services. It is used by the service browser and client generator.
*   **Dummy**. What happens if a user or a robot sends a simple HTTP request to amfPHP? The dummy plugin handles this, and shows a static html page that you can customize.
*   **Included Request**. allows inclusion of an amfPHP entry point script. This is so that a script running on the same server can include the entry point script and execute a request. Its a bit experimental, but has proved useful.

Once more, thanks for your support!

Silex Labs

[![]({{ site.baseurl }}/assets/Amf-render-0291-677x451.png "Amf render 029")](https://www.silexlabs.org/132935/the-blog/amfphp-2-1-generator-is-out/attachment/amf-render-029/)