---
layout: post
title: AmfPHP Plugin FPCCustomClassConverter

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Exchange amfPHP
tags: []

_epLastMessage: ''
_edit_last: '10'
_itemCurrentVersion: '1.0'
_selectedProject: AMFPHP
_selectedVersionsArray: v2.0.0
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/fpccustomclassconverter/"
---

FPCCustomClassConverter is an AMFPHP plugin that improves the mechanism of VO

class resolution from the explicitType value. For instance with a minimal

configuration the plugin can manage package like explicitType value.

For instance if explicitType is equal to "net.femtoparsec.model.MyVoClass",

the plugin will search the folder "<ROOT>/net/femtoparsec/model" for

the file "MyVoClass.php" (<ROOT> is a parameter of the plugin).

The plugin can also be configured to behave like the original

CustomClassConverter.

The plugin also modifies the way the properties to serialized are determined.

The original version simply serializes public properties of PHP VO. This plugin

do the same and also serialized private properties with getter and setter.

It is also possible to serialize custom property for specific object that are

not VO object (or not controlled by the develloper).

