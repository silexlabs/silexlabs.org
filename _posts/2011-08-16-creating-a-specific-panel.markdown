---
author: "yannick"
comments: true
date: "2011-08-16T15:16:32.000Z"
layout: "post"
link: "https://www.silexlabs.org/creating-a-specific-panel/"
slug: "creating-a-specific-panel"
title: "Creating a specific panel"
wordpress_id: 128991
categories: ["Tutorials Silex"]

---
A specific panel is an individual SWF file that will be displayed in the wysiwyg properties toolbox and loaded based on the type of the selected component. For instance, if an image is selected, the image specific panel will be displayed, if it a text, the text specific panel is displayed. Creating a specific panel is useful when you create a new component for Silex. You can associate a specific panel to this component. The resulting specific panel will then be tailored for the specific needs of the component, highlighting it's main properties. The Specific panels are displayed in the wysiwyg in the properties toolbox when the specific plugin is selected (symbolised by the "s" button in the properties toolbox header). The Specific plugin is in charge of loading the right panel based on the selected component(s) data. The url of the panel to load is specified in the metadata of the components object coming from the SilexAdminAPI. We we will see how to add these url in the XMLDescriptor of the components.<!-- more -->


## I/ creating a specific panel


The specific panel can be created in both AS3 and Flex. However the Flex framework fastens the process of building an interface and give access to the skinned Wysiwyg controls. The WysiwygPlugins Flex project available in the Silex Trunk contains 2 base class facilitating the creation of a specific panel. They mask the complexity of the task by dealing with the SilexAdminAPI to retrieve the needed properties from the SilexAdminAPI We will first see how to create a panel without those classes then with those classes.


### a/ Creating a panel without the panels base class


Without the base class masking the complexity of creating a panel and communicating with the SilexAdminAPI, the idea is to retrieve the properties you want to edit from the SilexAdminAPI, presents them in a custom interface then update the properties based on user input. You can create the interface in Flex or pure AS3. You will then put the url of the resulting SWF in the metadata of your component. With this approach, the simplest way is to read the document on how to use the SilexAdminAPI [here](http://community.silexlabs.org/silex/codex/?page_id=185).


### b/ Creating a panel with the help of the WysiwygPlugin base class


The WysiwygPlugin Flex project presents 2 base class to help creating panels along with Wysiwyg mxml components to fasten developpement and preserve graphical unity. Here is the description of the 2 base class and their exposed API :


#### PanelBase.as


It is a class extending the Flex Application class. It retrieves the properties data from the SilexAdminAPI then arrange them in an object where the key is the name of the property allowing you to easily retrieve a property object. It also listens for property DATA_CHANGE event on the SilexAdminAPI and determine if the panels properties must be refreshed. The Application class of the panel must extend the PanelBase class. It must also override the registerPanelsUi() protected method. In this method, you must push in the _panelUis array each of the PanelUiBase components of your panel.


#### PanelUiBase.as


It is a class extending the Flex VBox class. The specific panels for the Silex base components (image, text, video...) are arranged in multiple rows, each one containing a few controls to edit the properties. Each of those row extends PanelUiBase. Some smaller mxml components like "PanelUiWidthHeightStepper" extends this class. Extending this class allow the components to use the propertyArray object which contains each edited property object where the key is the name of the Property object.

Ex: If I want to get the "width" property value, I can use the propertyArray object like this : propertyArray.width.currentValue.

The PanelUiBase also exposes method proxying the communication with SilexAdminAPI :

`updatePropertyValue(value:*, propertyName:String):void`

This method update the value of a Property object using the updateCurrentValue method of the Property object. When the property is updated an ID is given as a paramter corresponding to the ID od the specific plugin. This ID will be dispatched in the properties.DATA_CHANGED event resulting from this update. The goal is for the specific panels to know if they are the originator of a property data change. If they are, then there is no need to update the property of the specific panel which is costly in ressource.

`selectProperty(property:Property):void`

Selects a property on the SilexAdminApi which as a result loads the corresponding PropertyEditor based on the type of the given property


## II/ Updating the component's XMLDescriptor


In the XMLDescriptor of the component for which you created the specific panel, you need to write the url of your specific panel url so that it can be retrieved by the SilexAdminApi. You need to add the following tag to your XML :

`<specificEditorUrl>parthToSpecificPanelRelativeToThePlugin/MySpecfificPanel.swf</specificEditorUrl>`

You need to add it at the root of your XML (in the same node as "as2Url", "className", "componentName"...

Here is an exemple from the Image component descriptor :


<componentDescriptor version="1.0">




<componentName>Image</componentName>




<as2Url>as2/org.silex.ui.players.Image.swf</as2Url>




<html5Url>html5#org.silex.ui.Image</html5Url>




<className>org.silex.ui.players.Image</className>




**<specificEditorUrl>editors/Image.swf</specificEditorUrl>**




<parentDescriptorClassName>org.silex.ui.components.ComponentBase</parentDescriptorClassName>




<componentRoot>main</componentRoot>




...

