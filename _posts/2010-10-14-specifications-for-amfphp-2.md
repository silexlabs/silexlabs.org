---
layout: post
title: Specifications for AMFPHP 2

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog amfPHP
tags: []

_wp_old_slug: ''
disable_wpautop: '0'
disable_wptexturize: '0'
disable_convert_chars: '0'
disable_convert_smilies: '0'
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
permalink: "/specifications-for-amfphp-2/"
---

Technical Specifications for AMFPHP 2.0
=======================================

This document details the different classes that are contained in AMFPHP 2.0.

It builds on the following documents :

[https://www.silexlabs.org/2010/08/amfphp-2-0-roadmap/](../../../../../2010/08/amfphp-2-0-roadmap/)



design goals
: 
*   to be compatible as much as possible with the existing system, so that users can update their systems painlessly
*   to be modular to decentralize development. Actions and Fillters as they exist now are to be done away now as nearly no one understands them. They will be replaced by plugins.
*   The integration of amfphp within larger projects should no longer be an issue. The distribution will be made so that it functions as a gateway as before, but it should be flexible to just use the distribution as a library.
*   The core should be as lean as possible. This means deserializing, routing to a class function, serializing, and that's it. All the other functionality users might want should be pushed towards plugins.
*   To be compatible with the latest and greatest in PHP, while staying compatible with PHP 5. Support for PHP 4 will be dropped.
*   Performance. AMFPHP is fast, let's try to keep it that way.
*   Of course fix up the bugs that are in AMFPHP 1.9. PHP 5.3 compatibilty issues, date encoding, Iexternalizable, etc.

Please feel free to disagree in the comments!

The Plan
--------

The following milestones are
planned: 
*   an amf library with unit tests
*   a barebones amfphp setup with just deserialization, service routing, and serialization
*   the minimal plugins to be functional. The priority here is support for charsets and security, but we're open to lobbying.

File Structure
--------------

Here is the file structure, with classes in italics :

trunk -> amfphp. Contains the main distribution code

Tests. The tests

plugins : the plugin repository

amfphp -> core

plugins : installed plugins

gateway.php

core -> common

amf

_Gateway_

_Context_

_PluginManager_(defined elsewhere)

_HookManager_(defined elsewhere)

common -> _IDeserializer_

_ISerializer_

### IServiceRouter

_IExceptionHandler_

### DefaultServiceRouter

amf -> _AmfDeserializer_

_AmfSerializer_

_AmfExceptionHandler_

→ services folder where the developer puts service classes

Class Details
-------------

### Gateway

the gateway is at gateway.php, whose only job is to instantiate the actual gateway class, eventually tweak its parameters the necessary inits, and call its « init » and « execute» functions, and then echo its response. This is quite like the actual setup, except that it should be much simpler because of plugins, and that because the response is not necessarily output in the Gateway class, AMFPHP can be more easily integrated into other platforms.

some pseudo code for the gateway class

function init(){  
try{  
loadHookManager()  
loadCore()  
loadPlugins()  
initContext()  
loop steps in context with a hook before and after  
}catch{  
handleException()  
}  
}

function execute(){  
try{  
deserialize()

routeService()

serialize()  
}catch{  
handleException()  
}  
}

Hooks will be added at various steps in the process so that plugins can interact with the main code and data when needed.

### Context

Contains the data being manipulated in its various formats and flavours, as well as pointers to the various classes that will be called during the process. Is meant to be remoting protocol agnostic, i.e. work just as well for amf as for json or xml.

This is initialized by the gateway, and can be tweaked by the plugins as needed. For all purposes the context could be a singleton, but it is safer to attach it to the gateway.

*   requestHeaders
*   requestBody
*   getParams (optional, this might not be a good idea)
*   serviceName
*   serviceFunction
*   functionCallParameters
*   functionCallReturnValue
*   responseHeaders
*   responseBody
*   deserializer : IDeserializer
*   serviceRouter : IServiceRouter
*   serializer : Iserializer
*   exceptionHandler : IexceptionHandler
*   pluginData (an array to hold any persistent plugin data)

### IDeserializer

Interface for classes that deserialize AMFPHP data.

*   function deserialize (context :Context)

### ISerializer

Interface for classes that serialize AMFPHP data.

*   function serialize (context :Context)

### IServiceRouter

Interface for routing services

*   function route (context :Context)

### DefaultServiceRouter

The default implementation for routing a call to a service.

### AmfDeserializer, AmfSerializer, AmfExceptionHandler

The implementations of IDeserializer, ISerializer, and IexceptionHandler for AMF remoting.

Plans for Plugins
-----------------

The system described above is a bare bones amf remoting system. To be useful to most people though, it will need to be enhanced with some of the following plugins. This is not meant to be full specifications, rather some ideas on how the functionality could be built into plugins and how these plugins would interact with the main system.

### Authentication

Looks for a static « authentication » descriptor on the service class, containing the roles needed by the user to access the service and/or its functions. The roles would be defined and stored in a session. As such would need to intervene just before the class instantiation in the service router. An API would be available in the services to manipulate the user roles.

### Cache

Ideally this would be remoting protocol agnostic, so it would intervene between deserialization and service routing. The actual cache data would be manipulated through an API in the service code.

### Security

In its most basic form security is just about blocking requests coming from other domains. This can be done before deserialization.

### Custom VO (Value-Object) mapping

Can be done after deserialization and after serialization

### Charsets

Can be done after deserialization and after serialization

### Logging

Can be done at any point, really, but it would be most helpful to log exceptions and the like.

### JSON/XML-RPC/Haxe Remoting/PHP amf extension

These would look at the data type and replace the deserializer and serializer on the context.

### Service Browser

The existing service browser can be refactored as a plugin

### Server compatibility test suite

A plugin to generate a report on whether or not the server configuration is compatible with AMFPHP, and if not to try to provide some helpful remarks on how to fix it