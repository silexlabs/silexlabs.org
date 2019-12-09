---
id: 235
title: "Creating a specific panel"
date: "2010-11-24T09:20:19.000Z"
author: "yannick"
layout: "page"
guid: "http://community.silexlabs.org/silex/codex/?page_id=235"

---
A specific panel is an individual SWF file that will be displayed in the wysiwyg properties toolbox and loaded based on the type of the selected component. For instance, if an image is selected, the image specific panel will be displayed, if it a text, the text specific panel is displayed. Creating a specific panel is useful when you create a new component for Silex. You can associate a specific panel to this component. The resulting specific panel will then be tailored for the specific needs of the component, highlighting it&#8217;s main properties. The Specific panels are displayed in the wysiwyg in the properties toolbox when the specific plugin is selected (symbolised by the &#8220;s&#8221; button in the properties toolbox header). The Specific plugin is in charge of loading the right panel based on the selected component(s) data. The url of the panel to load is specified in the metadata of the components object coming from the SilexAdminAPI. We we will see how to add these url in the XMLDescriptor of the components.

## I/ creating a specific panel

The specific panel can be created in both AS3 and Flex. However the Flex framework fastens the process of building an interface and give access to the skinned Wysiwyg controls. The WysiwygPlugins Flex project available in the Silex Trunk contains 2 base class facilitating the creation of a specific panel. They mask the complexity of the task by dealing with the SilexAdminAPI to retrieve the needed properties from the SilexAdminAPI We will first see how to create a panel without those classes then with those classes.

### a/ Creating a panel without the panels base class

Without the base class masking the complexity of creating a panel and communicating with the SilexAdminAPI, the idea is to retrieve the properties you want to edit from the SilexAdminAPI, presents them in a custom interface then update the properties based on user input. You can create the interface in Flex or pure AS3. You will then put the url of the resulting SWF in the metadata of your component. With this approach, the simplest way is to read the document on how to use the SilexAdminAPI [here](http://community.silexlabs.org/silex/codex/?page_id=185).

### b/ Creating a panel with the help of the WysiwygPlugin base class

The WysiwygPlugin Flex project presents 2 base class to help creating panels along with Wysiwyg mxml components to fasten developpement and preserve graphical unity. Here is the description of the 2 base class and their exposed API :

#### PanelBase.as

It is a class extending the Flex Application class. It retrieves the properties data from the SilexAdminAPI then arrange them in an object where the key is the name of the property allowing you to easily retrieve a property object. It also listens for property DATA\_CHANGE event on the SilexAdminAPI and determine if the panels properties must be refreshed. The Application class of the panel must extend the PanelBase class. It must also override the registerPanelsUi() protected method. In this method, you must push in the \_panelUis array each of the PanelUiBase components of your panel.

#### PanelUiBase.as

It is a class extending the Flex VBox class. The specific panels for the Silex base components (image, text, video&#8230;) are arranged in multiple rows, each one containing a few controls to edit the properties. Each of those row extends PanelUiBase. Some smaller mxml components like &#8220;PanelUiWidthHeightStepper&#8221; extends this class. Extending this class allow the components to use the propertyArray object which contains each edited property object where the key is the name of the Property object.  
Ex: If I want to get the &#8220;width&#8221; property value, I can use the propertyArray object like this : propertyArray.width.currentValue.  
The PanelUiBase also exposes method proxying the communication with SilexAdminAPI :  
`updatePropertyValue(value:*, propertyName:String):void`  
This method update the value of a Property object using the updateCurrentValue method of the Property object. When the property is updated an ID is given as a paramter corresponding to the ID od the specific plugin. This ID will be dispatched in the properties.DATA_CHANGED event resulting from this update. The goal is for the specific panels to know if they are the originator of a property data change. If they are, then there is no need to update the property of the specific panel which is costly in ressource.  
`selectProperty(property:Property):void`  
Selects a property on the SilexAdminApi which as a result loads the corresponding PropertyEditor based on the type of the given property

## II/ Updating the component&#8217;s XMLDescriptor

In the XMLDescriptor of the component for which you created the specific panel, you need to write the url of your specific panel url so that it can be retrieved by the SilexAdminApi. You need to add the following tag to your XML :  
`<specificEditorUrl>parthToSpecificPanelRelativeToThePlugin/MySpecfificPanel.swf</specificEditorUrl>`  
You need to add it at the root of your XML (in the same node as &#8220;as2Url&#8221;, &#8220;className&#8221;, &#8220;componentName&#8221;&#8230;  
Here is an exemple from the Image component descriptor :

<div id="_mcePaste">
  <componentDescriptor version=&#8221;1.0&#8243;>
</div>

<div id="_mcePaste">
  <componentName>Image</componentName>
</div>

<div id="_mcePaste">
  <as2Url>as2/org.silex.ui.players.Image.swf</as2Url>
</div>

<div id="_mcePaste">
  <html5Url>html5#org.silex.ui.Image</html5Url>
</div>

<div id="_mcePaste">
  <className>org.silex.ui.players.Image</className>
</div>

<div id="_mcePaste">
  <strong><specificEditorUrl>editors/Image.swf</specificEditorUrl></strong>
</div>

<div id="_mcePaste">
  <parentDescriptorClassName>org.silex.ui.components.ComponentBase</parentDescriptorClassName>
</div>

<div id="_mcePaste">
  <componentRoot>main</componentRoot>
</div>

<div>
  &#8230;
</div>
























