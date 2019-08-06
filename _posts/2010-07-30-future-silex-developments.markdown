---
author: "admin"
comments: true
date: "2010-07-30T17:47:58.000Z"
layout: "post"
title: "Future Silex Developments"
categories: ["Blog Silex","The Blog"]

---
Here is a document that I wrote formalizing some of the discussions we're having about Silex.


## Introduction


The aim of this development is to:

-       Increase performance

-       Start evolving towards platform independence. This means that  soon Silex will be able to render sites in AS2, AS3, JS, or pure static  HTML and that this development must lay some of the groundwork for that.

-       Make integration of third party components as easy as possible

-       Remove functionality from the core to make it lighter and push  it towards plugins

-       Supercomponents. This is a separate development so it will not  be specified here, but its future integration must be taken into account

-       Library of components in one swf file should be possible

<!-- more -->

Current state of things, and what the problems are :

-       A page is what you see at a url, for example [yoursite.com/welcome/contact](http://yoursite.com/welcome/contact).  This is rendered in Silex as pile of Layouts that contain Layers that  contain media and components. Containers that are in a “Layer Skin”  render Media, for example images and sound. Components are special SWFs  that are loaded independently. It would be simpler and better to speak  of Layers, SubLayers, and only components, not media.

-       Layouts are described in cumbersome XML files that no longer  fit our needs and that are long to parse and manipulate. Furthermore the  component properties are very linked to the virtual machine DOM. For  example they contain “_x”, that is only x in AS2. There is therefore no  way forward to work with AS3 or JS. The file format/system needs to be  changed.

-       All components in Silex currently need to inherit the UiBase  AS2 class. UiBase contains the arrays where the components and their  properties are described. This is bad for performance, forces all  components to be visual whereas there are now many non-visual  components, and makes integration of third party functionality very  difficult. We need to get rid of this dependence on UiBase and find  another mechanism to describe components.


## Proposal


**Changes to the user experience**

As mentioned above, a page will now be rendered as a pile of Layers  that contain SubLayers. LayerSkins will be destroyed, and be replaced by  a system where there is a mapping between the file extension of the  media being used and the corresponding container component. For example,  all files ending with “jpg”, ”png”, and “swf” can be rendered in the  same way by the same container component that is responsible for static  visual media. It could be called “ImageDisplay”. The current library  will be enhanced with a separation between media and components. To add  an image, the user will therefore have 2 possibilities: either add an  “ImageDisplay” and configure it, or simply choose to insert the image  and use the associated component. If by chance there are 2 components  available to render the same file extension, the UI could offer a  choice.  The only way for components that do not match a media type to  be added is now through the component menu.

**Changes in the architecture**

The current layer skin players are moved to a plugin called  “base_components”. This plugin contains the current renderers each in  their own swf (or one single librairy ?), and one or more php files for  the plugin integration.

A description of these components and how they can be used, configured  etc. must be made available when editing the site, but not be necessary  just to render them. Furthermore, the layer description file(s) should  be useable to render the layer without a server and be planned for the  multiplatform evolution.

The following data formats are to be applied:

Layers are described in one file per platform, using the following  naming scheme: <layername>.<platform>.xml. For example:  start.as2.xml. The structure of all of these files is the same down to  component description, where the description of the component properties  is specific to the DOM of the platform. For example the as2 file will  contain _x if necessary, and the as3 file will contain x.

So for example:

<layer>

<subLayer id=”under”>

<components>

<component url=”/plugins/base_components/imagedisplay.swf” _x=”34” …  more properties, ><htmlText>...</htmlText>...more  properties...</component>

… more components

</components>

</subLayer>

… more subLayers

</layer>

Here is the content of the class ComponentDescriptor:

-       As2Url, as3Url, jsUrl: urls to the file to load when using it,  depending on the platform. url relative to the root of the server. This  information is used to see what platforms are supported.

-       Class: Name of the class contained in the file, where relevant

-       Name: A localized name to show in the components menu

-       Description: A localized description to show in the components

-       MediaTypes: an array of strings each containing an extension  that is supported by the component. For example [“swf”, “png”, “jpg”]

-       Properties: An array of properties. See below.

-       getHtmlEquivalent which returns an html equivalent for the  component (seo). Takes as input: the component id, the context (values  for accessors, i.e. all layers data for the current page + publication  config)

Events and methods and whatever other meta data we need can be added  later.

Here is the content of the class PropertyDescriptor:

-       Name: Localized name

-       Description: Localized description

-       As2Name, as3Name, jsName : The matching property in each  platform (e.g. _x / x / left )

-       Default: default value

-       Category: a category to use to sort the properties. TODO Could  be replaced by tags, maybe.

-       isRegistered:  true/false should this be saved?

-       Miscellaneous meta data such as type, min/max values, min/max  length etc.

Events and methods are not currently used, so they can be described  later.

Furthermore, it must be easy to inherit descriptors. For example, the  image renderer and the video renderer will have shared properties  because they are both visual components. So a possible class inheritance  structure would be :

ComponentDescriptorBase -> VisualComponentDescriptor->  ImageDescriptor and VideoDescriptor.

It makes sense to make ComponentDescriptorBase and  VisualComponentDescriptor part of the basic framework so that components  in other plugins such as OOF can use them to build their descriptors.  ComponentDescriptorBase should handle localization using a standard yet  to be defined. Each of these descriptor classes is defined in its own  PHP file.

These components descriptors are only used by the wysiwyg, so they can  be queried using a new service called component_descriptor_service. The  method is called getDescriptors. It returns all available component  descriptors.


