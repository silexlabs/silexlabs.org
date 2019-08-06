---
author: "yannick"
comments: true
date: "2011-08-16T15:14:58.000Z"
layout: "post"
title: "Creating a component plugin"
categories: ["Tutorials Silex"]

---
This article assumes that you know how to create a plugin in Silex, you can find all the infos here: [https://www.silexlabs.org/silex/docs-silex/codex-silex/silex-plugins-creation/](https://www.silexlabs.org/silex/docs-silex/codex-silex/silex-plugins-creation/).

A component plugin is a plugin adding components that the admin user can add to the publication and edit in the wysiwyg. For instance the BaseComponents, oofComponents and silexComponents of the base distribution are all component plugins, as their goal is to add an array of components available in the wysiwyg. For instance if you create a gallery for Silex, developed in AS2, you will need to create a plugin component to easily make it available for the user in the wysiwyg.<!-- more -->


## The PluginLibraryComponentBase PHP class


Like any plugin, the component plugins must extends the plugin_base class to be activated by Silex. However the Silex distribution include tht PluginLibraryComponentBase, a class extending plugin_base, automating the process of creating a component plugin. You can for instance look into the index.php file of the baseComponents plugin. The BaseComponents class extends the PluginComponentLibraryBase and does'nt need to do anything else to work as a component library. It works by having PluginComponentLibraryBase look for all the required infos to add a component in the XML descriptors of each component. We won't detail how the class works, you can find it  in your server in cgi/includes/PluginComponentLibraryBase.


## Looking at the Image descriptor


We will use an exemple to illustrate how to add a component to the wysiwyg. You can find the Image XML descriptor in you silex server in the plugins/baseComponents/descriptors/Image.xml


## The metaData tag


All the added info required by the PluginComponentLibraryBase are contained in the metaData tag. We will look at each node we find in it.


``<metaData>``




`<pluginRelativeUrl>plugins/baseComponents/</pluginRelativeUrl>`




`<addComponentParams>`




<name>NewImage</name>




<uid>silex.AddComponent.ToolItem.AddImage</uid>




<groupUid>silex.AddComponent.ToolItemGroup.Images</groupUid>




<toolUid>silex.AddComponent.Tool</toolUid>




<label>LABEL_IMAGE</label>




<description>DESCRIPTION_IMAGE</description>




<level>0</level>




<action>addMediaComponent</action>




<initPropertyName>url</initPropertyName>




<iconUrl>icons/images.swf</iconUrl>




</addComponentParams>




</metaData>




### PluginRelativeUrl


Indicates the url of the plugin relative to the silex server. It is used for instance to locate the url of the icon located in the plugin to display in the component panel next to the component's name. This info can be retrieved in As3 using the SilexAdminAPI


### addComponentParams


This tag contains all the info to add an item in the wysiwyg "addComponents" panel. It use the toolbar system of the Silex, if you're not familiar with it, you can fid the infos here : (TO DO).  The name tag is the name of the component that will appear in the component's panel once added.

The uid is an unique identifier for the item in the "addComponent" panel.

The groupUid is used to place your component' item in the right group in the "addComponent" panel. For instance we see here that the item is added in the "silex.AddComponent.ToolItemGroup.Images" group. If you want to add it to another group, you can either create your own group or use another existing one. You can find the uid of existing group either by looking into the descriptors of components belonging to the group you look or by looking into the index.php of the wysiwyg, which add most of the basic groups.

The toolUid is used to place the item in the right toolbar. For now only the "AddComponent" toolbar can be used as other toolbar such as the view menu are not compatible with the add component system but eventually other compatible toolbars might be created.

The label and description are displayed in the AddComponent panel next to the button and as tooltips.

The level is the place you want your item to appear in the group. If you level is 0, the plugin will appear at the beginning or near the begining, if it 10 or more it will most likely appear at the end. This system is necessary as we can't now at first how many items will appear in a group, so the item can't just choose a place but instead request a place.

The action tag determine what will happen when the user clicks on the button, there are three possible values:




  * addComponent : When the user clicks on the button, the component is instantly added to the selected subLayer.


  * addMediaComponent : When the user clicks on the button, the library is opened as the user needs to choose a media. When the user import is media, the component is added to the publication


  * addSkinnableComponent : When the user clicks on the button, a panel opens asking the user to choose a skin for the component. When the user chooses a skin, the component is added to the publication. It is used for component that can be skinned such as buttons or lists. For more info, read the "skinned component" paragraph below.


For the initPropertyName, read the "media component" paragraph below.

iconUrl is the url of the icon displayed in the AddComponent panel and in the components panel.


## Descriptors location


For the PluginLibraryComponentBase to find the descriptors, they must be located in your plugin, in a folder called "descriptors", like in the baseComponents or oofComponents plugins.


## The three components type


There are three  types of component, each one corresponding to an action. The media and skinned component type add extra tags to the metaData of the component.


### Component


The simpler type of component, used for component that does'nt need extra ste to add.For instance non-visual components like an XMLConnector, don't need extra step as they are neither media nor skinned.


### Media Component


Media components are components that rely on a media such as a video, an image, an mp3. For instance in the baseComponents, you can find Image,Video and Audio which all work with different kinds of media. The media components require one extra tag : the <initPropertyName> tag. It is the name of the property that needs to be initiliased with the component that is the media url. For instance, in the Image XML descriptor, we can see that the initPropertyName is "url". Here is the "url" property, found below in the descriptor :

` <url>
<type>String</type>
<subType>Url</subType>
<description>PROPERTIES_LABEL_URL</description>
<defaultValue>defaultUrl</defaultValue>
<isRegistered>true</isRegistered>
<extensions>jpg,jpeg,gif,png,swf</extensions>
<group>attributes</group>
</url>`

When the user clicks on the component button in the addComponent toolbox, this property will be used to open the library and set it's authorised extensions with the value of <extensions> tag. When the user selects a media in the opened library, an instance of the component is created and it's <initPropertyName> property is initialised with the url of the media chosen by the user. The subType "Url" will also insure that when the user wants to swap the media of the component, the library opens with the right authorised extensions.


### Skinned Component


Skinned component are components that can have multiple different design. For instance a button or a list is a skinnable component, a designer can create a new appearance for the plugin without altering it's behaviour. You can add any number of skin to a component, by adding a <skins> tag in the metaData of the drescriptor. Let's look at the RichTextList descriptor found in plugins/oofComponents/descriptors/RichTextList.xml.

In it we can see the following tag :
`
<skins>
<skin>
<label>RichTextList skin 1</label>
<url>as2/RichTextList/RichTextList1.swf</url>
<description>skin1 description</description>
</skin>
</skins>
`
This tag add one skin, define it's label, url and description. You can add as many<skin> tag as you have skins. If a designer create skins that are not included in the plugin, he can add them by first clicking on the component button, then clicking the "+" button next to the skins list that will open the library, allowing the user to browse to it's skinned component.


## Adding groups


If you need to create one or many groups in the addComponent toolbox, specifically for your plugin, you can override the "addToolBar" PHP method of the PluginComponentLibraryBase class. This method returns a string that contain the JavaScript required to add one or many groups. By default it returns nothing. Here is an exemple of how to add a group called TestGroup :
`
protected function addToolBarGroups(){`

`$ret = 'silexNS.SilexAdminApi.callApiFunction('toolBarGroups', 'addItem', [{';
$ret.= 'name:'TestGroup',';
$ret.= 'uid:'silex.AddComponent.ToolItemGroup.TestGroup',';
$ret.= 'level:0,';
$ret.= 'toolUid:'silex.AddComponent.Tool',';
$ret.= 'label:'This is the TestGroup label',';
$ret.= 'description:'This is the TestGroup description'}]);';`

`return $ret;
}
`
You can then add component to the new group by modifing the <groupUid> tag in the component XML descriptor


