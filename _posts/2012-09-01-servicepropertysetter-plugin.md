---
layout: post
title: AmfPHP Plugin ServicePropertySetter

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Exchange amfPHP
tags: []

_epLastMessage: ''
_edit_last: '16'
_itemCurrentVersion: '1.0'
_selectedProject: AMFPHP
_selectedVersionsArray: v2.0.0
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"
_wp_old_slug: servicepropertysetter

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/servicepropertysetter-plugin/"
---

Since service classes are created internally by AMFPHP it is not possible to pass (at construction or with setters) parameters to services.

With ServicePropertySetter, it is now possible. This plugin can be used to centralize configuration parameters and dispatch them to the services.

For instance, if services need a connection to a database by using a PDO object, instead of creating one in each services, only one can be created in a configuration file and passed to the services with this plugin
: no need to have a database configuration (or an include file) in each services.

