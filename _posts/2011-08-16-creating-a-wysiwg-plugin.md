---
layout: post
title: Creating a Wysiwyg plugin

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Tutorials Silex
tags: []

_epLastMessage: ''
_edit_last: '16'
_itemCurrentVersion: ''
wpautop: "- Select -"
skin: "- Select -"
layout_footer: "- Select -"
layout_header: "- Select -"

display_name: yannick
first_name: ''
last_name: ''
permalink: "/creating-a-wysiwg-plugin/"
---

In this section, we will create a silex plugin that will display a "hello silex !" text in the properties panel of the wysiwyg.

The plugin will be based on an index.php file initialising the plugin, on a Flex application that will be displayed in the Wysiwyg, and on a button, visible in the properties toolbox header and displaying our plugin.

This document implies a knowledge of object-oriented PHP5, ActionScript3/Flex and Javascript. It also implies that you know how to create a Silex plugin and how to use the Silex Toolbar system (i.e. ViewMenu).

I/ Creating the plugin Index
----------------------------

Creating a Silex plugin is out of the scope of this document. You can find all the necessary information [here](http://community.silexlabs.org/silex/codex/?page_id=10).

As we will create a new Silex plugin, it needs to have it's own folder in the "plugins" directory. In the "plugins" folder of your silex server, create a new folder called "helloWysiwygPlugin" and create the index.php class. You should have the following
structure: silex_trunksilex_serverpluginshelloWysiwygPlugin

II/ Creating the Flex application
---------------------------------

We will now create a simple Flex application, and display the resulting SWF in the Wysiwyg properties toolbox. You can also use pure AS3 SWF, but Flex framework is often more convenient to build interfaces as you can use all the skinned controls of the wysiwyg.

In Flex or FlashDevelop, create a new project and set the build path to the "helloWysiwygPlugin" folder of your Silex Server, using "helloWysiwygPlugin.swf" as the name of the output file. The project will only be constituted of a main Application class as you can see in the following
code: 
<?xml version="1.0" encoding="utf-8"?>  

<mx:Text text="Hello Wysiwyg plugin !" />  
</mx:Application>

Once loaded in the Wysiwyg, the application will display a text "Hello Wysiwyg plugin !".

III/ Adding the plugin's opening button to the properties toolbox toolbar
-------------------------------------------------------------------------

The next step is to add a button in the properties toolbox header that will, when clicked, display the "helloWysiwygPlugin" plugin in the properties toolbox body.

At first we need to create the button as a separate SWF file and then add this button to the toolbar using the SilexAdminAPI in JavaScript.

### a/ Creating the button

The button will be an independant Flash project with it's own logic. It will be include a FLA file (button design) and an ActionScript3 class. We will use Flash IDE as it is the simplest way to create graphical assets but you can also create the button with code only (by using FlashDevelop for instance).

### b/ Creating the graphical asset

*   Create a new folder such as silex_trunkprojectstoolshelloWysiwygPlugin
*   Open Flash IDE and create a new ActionScript3 project in it.
*   Set the size of the Stage to 20x20
*   Create a new Button in the library and design it. This asset will be the one displayed in the properties toolbox header.
*   Put one instance of the item on the stage and name its intance "button".
*   Set the document class to "HelloWysiwygPluginButton", this is the name of the class that will control the button logic. This class has to be created and saved in the same folder.
*   Set the publication path of the FLA to the "helloWysiwygPlugin" folder of your Silex Server (silex_trunksilex_serverpluginshelloWysiwygPlugin) and set the output file to "helloWysiwygPluginButton.swf".
*   In the FLA, add the following source folder
: silex_trunkprojectstoolswysiwigToolBoxAPIsrc. We will use these packages to communicate with the wysiwyg.
*   Save the FLA

### c/ Creating the button class

Create an ActionScript class file and call it "HelloWysiwygPluginButton.as". Save it in the folder where you saved your FLA.

You can use the following code for your class
: 
`package  {  
import flash.display.Sprite;  
import flash.events.MouseEvent;  
import flash.display.SimpleButton;  
import org.silex.wysiwyg.toolboxApi.ToolBoxAPIController;`

public class HelloWysiwygPluginButton extends Sprite {

/**  
* This is a reference to the button that you put on the stage of your FLA  
*/  
public var button:SimpleButton;

/**  
* This is the url of the Flex Application that we want to load in the wysiwyg  
* It is the relative path starting from the server root  
*/  
private static const pluginUrl:String = "plugins/helloWysiwygPlugin/helloWysiwygPlugin.swf";

/**  
* We add a listener to the click of the button  
*/  
public function HelloWysiwygPluginButton()  
{  
button.addEventListener(MouseEvent.MOUSE_DOWN, mouseDownHandler);  
}

/**  
* When the user clicks the button, we get an instance of the ToolBoxApiController and ask it  
* to load our Flex application in the properties toolbox  
*/  

{  
ToolBoxAPIController.getInstance().loadEditor(pluginUrl, "Hello Wysiwyg plugin description");  
}  
}

}

Publish the FLA to SWF.

### d/ the ToolBoxAPI

In HelloWysiwygPluginButton class, we use the ToolBoxAPI project to communicate with the Wysiwyg. This project is an API exposing method controlling some of the key behaviour of the Wysiwyg. It is mainly used by plugins to load their editor in the Wysiwyg properties ToolBox. To do se, they use the ToolBoxAPIController class. It is a singleton that exposes methods to load editors and get info on the loaded editor. It exposes the following method
: 


This method loads the requested editorUrl, and also  displays the description of the editor in the Wysiwyg. This method dispatches a ToolBoxAPIEvent.LOAD_EDITOR event that can be used to keep track of the loaded editor. For instance, you can use it to toggle the plugin's editor button and disable it when the corresponding editor is loaded.



This method sets the requested editor as the default editor but does not load it. The corresponding editor will be only loaded when the wysiwyg closes and re-opens the properties panel. Any plugin can become the default plugin. Tthe Specific Plugin is the default.

`getDefaultEditor():Object`

Returns an object containing the defaultEditor Url and description.

### e/ adding the button to the properties toolbox toolbar

Once the SWF button is generated, the javaScript SilexAdminAPI has to be used to add it to the Wysiwyg properties toolbox toolbar. You can find a more detailed information on how to use and create toolbars here. (LINK TO TOOLBAR PAGE)

In the Index.php class of your plugin, add a callback to the "admin-body-end" PHP hook. Add the following script in the callback
: 
silexNS.SilexAdminApi.callApiFunction("toolBarItems", "addItem",  
[{name:"HelloWysiwygPluginButton",  
hasBackground:false,  
uid:"silex.Properties.ToolItem.HelloWysiwygPluginButton",  
groupUid:"silex.Properties.ToolItemGroup.Display",  

label:"the HelloWysiwygPlugin label",  
description:" the HelloWysiwygPlugin description",  
url:$rootUrl+"plugins/helloWysiwygPlugin/helloWysiwygPluginButton.swf"}]);

This script calls the "addItem" method on SilexAdminAPI's "toolbarItems" which adds the SWF to the properties toolbar. This method's parameters are used to define to which toolbar and group our new item has to be added, but aso the item's informations (name, description, level in the group...) and finally the SWF button's url.

### f/ testing

You first need to activate the plugin in the manager.

Then launch your website and login to see the Viewmenu.

When the wysiwyg properties toolbox is opened, you can now see that the new button appears, and that when clicked, it loads the Flex application displaying the "Hello Wysiwyg plugin !" text.