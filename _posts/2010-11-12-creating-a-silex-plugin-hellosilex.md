---
layout: post
title: Creating a silex plugin "HelloSilex"

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Tutorials Silex
tags:
- tutorial

_epLastError: ''
_epLastMessage: ''
_edit_last: '11'
_itemCurrentVersion: ''

display_name: lexa
first_name: lexa
last_name: ''
permalink: "/creating-a-silex-plugin-hellosilex/"
---

In this tutorial you will create a simple silex plugin displaying a "Hello Silex !" message on your publication. You will then add a button in the ViewMenu to show/hide the message, then add a parameter in the manager allowing you to change the displayed text.

As this tutorial showcases all the Silex Plugins functionnalities, it assumes base knowledge in PHP, JavaScript, ActionScript 2 and ActionScript 3. The generated AS2 and AS3 swf will be created in Flash IDE but you can use the IDE of your liking. It also assumes that you read the "Silex Plugins Creation" article at this adress
: [http://new.silexlabs.org/codex/silex-plugins-creation/](../silex-plugins-creation/)

You can find the source of this tutorial here
:  [Hello_Silex_Tutorial_source](https://www.silexlabs.org/wp-content/uploads/2012/05/Hello_Silex_Tutorial_source1.zip)

I - A simple plugin
-------------------

the first part of this tutorial will focus on creating a plugin displaying a "Hello Silex !" text field on the publication startup. It will use mainly PHP, AS2 and a bit of JavaScript.

### a/ creating the plugin folder

Go to your silex server folder, and open the plugins/ folder. Create a new folder called "helloSilex".

### b/ the index.php file

The index.php file is the entry point of your plugin for the silex server. It must be a class named like your folder plugin and extends the plugin_base class. Create a new index.php file in the plugin folder and copy the following code in
it: 
<?php

require_once ROOTPATH.'cgi/includes/plugin_base.php';

class snapshot_management extends plugin_base

{

}

?>

The first include the extended plugin_base class, the php class is then declared.

### c/ adding a PHP hook

The next step is to add a hook on Silex PHP hook manager that will signal to our plugin that the Silex Core is ready. Add the following code to your class
: 
<?php

require_once ROOTPATH.'cgi/includes/plugin_base.php';

class snapshot_management extends plugin_base

{

**public function initHooks($hook_manager)**

**{**

**$hook_manager->add_hook('index-body-end', 'hello_silex_index_body_end_hook', $this);**

**}**

**public function hello_silex_index_body_end_hook()**

**{**

**echo "hello silex ready";**

**}**

}

?>

The function initHooks add a hook to the Hook Manager when the plugin is loaded instructing the Hook Manager to call the "hello_silex_index_body_end_hook" callback when the "index-body-end" hook is called. The callback only echoes a text for now that appears in the php log.

### d/ the ActionScript 2 Flash file

Now that the plugin PHP part is set up, we are gonna create the flash .swf file that will display the "Hello Silex !" message in your publication.

1.  Open Flash IDE.
2.  Create a new **AS2** document.
3.  In the libray, add a new MovieClip and call it "Container".
4.  In the "Container" MovieClip, add a new Text field and name it "helloText".
5.  Write "HELLO SILEX !" in the text field in the size and color of your liking.
6.  In the "Anti-alias" params of the text, choose "Use device fonts".
7.  Add the Container MovieClip to the Stage.
8.  Publish the .swf in your plugin folder under the name "helloSilex.swf". (file > publish settings in Flash to choose the output directory).
9.  Export your FLA as a .png in the plugin folder with the name "plugin.png". This file will be used as a preview by the manager. This file is required for the plugin to work.

![]({{ site.baseurl }}/assets/screen_1.jpg "screen_1")

When you open the swf, it now displays the "HELLO SILEX !", we are now going to include it at runtime in our publication.

### e/ loading the .swf

Re-open the index.php file and modify the "**hello_silex_index_body_end_hook" method like so:**

<?php

require_once ROOTPATH.'cgi/includes/plugin_base.php';

class snapshot_management extends plugin_base

{

**public function initHooks($hook_manager)**

**{**

**$hook_manager->add_hook('index-body-end', 'hello_silex_index_body_end_hook', $this);**

**}**

**public function hello_silex_index_body_end_hook()**

**{**

**?>** 

**<script type="text/javascript">**

silexNS.HookManager.addHook("preloadDone",initHelloSilex);

**function initHelloSilex()**

**{**

**document.getElementById('silex').SetVariable('silex_exec_str','load_clip:plugins/snapshot/helloSilex.swf,plugins');**

**}**

**</script>**

**<?php** 

**}**

}

?>

The modified "hello_silex_index_body_end_hook" method now register a new "initHelloSilex" method between "<script>" tags, this methods is called by JavaScript when the "preloadDone" hook is called, that is when the publication has finished loading.  
This method add the "helloSilex" swf file that we previously created on the silex object of the DOM. the SetVariable method calls the corresponding AS2 method on Silex Core via External Interface which loads the given url in the the "plugins" MovieClip of Silex.

Our Plugin is now ready to display the text on our publication.

### f/ activating the plugin

To see our plugin in action, we first need to activate it on a publication. We're gonna create a new Silex publication and activate the plugin on it.

1.  Open your Silex manager and log in.
2.  Go to the "Create" page
3.  Click on "Create a site form a blank page".
4.  Name your publication "hellosilex" and click save.
5.  In the appearing box click on "Properties".
6.  Click on your publication in the list on the left
7.  Click on Plugins
8.  Click on "Activate a plugin".
9.  Choose the "helloSilex" plugin in the list, click on it and confirm.
10.  The plugin is now activated, go to Manage, click on the "helloSilex" publication and click on "edit".

When the publication opens you can see the "HELLO SILEX !" text field has been added to the stage.

![]({{ site.baseurl }}/assets/screen_21.jpg "screen_2")

II - Creating a Tool plugin
---------------------------

We are going to expand on our previous plugin to create a tool plugin, a special kind of plugin only displayed in admin mode. We will add a button in the ViewMenu that will toggle the visibility of the "HELLO SILEX !" text field. We are going to use PHP, JavaScript and ActionScript 2 and 3 in this part.

### a/ changing the hook

Our plugin is currently adding a hook called when the Silex publication preload is done. To make the text appear when the user logs in, simply change the added hook name in the script tag
: 
<script type="text/javascript">

**silexNS.HookManager.addHook("silexAdminApiReady",initHelloSilex);**

function initHelloSilex()

{

document.getElementById('silex').SetVariable('silex_exec_str','load_clip:plugins/snapshot/helloSilex.swf,plugins');

}

</script>

We changed the hook to "silexAdminApiReady", called when the log in process is complete and the admin API method are available. You can test your publication now and see that the text field only appears on log in (right click > login or ctrl+L on PC and cmd+L on Mac).

### b/ creating the ViewMenu button

We are going to create the button appearing in the ViewMenu in ActionScript 3. This button will communicate with Silex via External Interface to call the method that will switch the "HELLO SILEX !" text field visibility.

#### Creating the Graphical asset

Open Flash IDE.

1.  Create a new **AS3** document.
2.  In the document properties, set the size of the stage to 25px X 25px.
3.  Insert a new Flash button on the Stage (insert > new Symbol, then set it's type to Button)
4.  Set it's size to 25 x 25 and feel free to personnalise the design of the different button states.
5.  Name the instance of the button on the stage "helloSilexButton".
6.  In the document Class text input, enter "Main", which is the name of main class that we will create now for our button.
7.  Save your FLA in any folder under the "helloSilex_ViewMenu_Button".

![]({{ site.baseurl }}/assets/screen_3.jpg "screen_3")

#### Creating the Main class

In Flash , create a new Actionscript 3.0 class.

Depending on your version of Flash, the boilerplate code may or may not be generated, here it is
: 
package  {

public class Main {

public function Main() {

// constructor code

}

}

}

Now add the following code to your
class: 
package  {
**import flash.display.SimpleButton;**
 **import flash.events.MouseEvent;**
 **import flash.external.ExternalInterface;**
public class Main {
**private var helloSilexButton:SimpleButton;**
public function Main() {
**helloSilexButton.addEventListener(MouseEvent.MOUSE_DOWN, onMouseDown);**
}

 **{**
 **ExternalInterface.call("toggle_hello_silex_visibility");**
 **}**
}
}

What we do here is get a reference to the button we added on the stage via the "helloSilexButton" variable, then set a listener on it that will call a javacript method on click, that we will later add to the index.php file.

Now go back to the "helloSilex_ViewMenu_Button" FLA file and publish the "helloSilex_ViewMenu_Button.swf" in your plugin folder.

### c/ modifing the "helloSilex" swf

We are now going to add logic to the previously created "helloSilex" so that he will know when he needs to toggle his visibility.

1.  Open Flash IDE.
2.  Create a new ActionScript file and write the following code in it
: 
import flash.external.ExternalInterface;

class HelloSilex extends MovieClip

{

public function HelloSilex()

{

this._visible = false;

ExternalInterface.addCallback("toggleHelloSilexVisibility", this, toggleHelloSilexVisibility);

}

public function toggleHelloSilexVisibility()

{

if (this._visible)

{

this._visible = false;

}

else {

this._visible = true;

}

}

}

This actionscript 2 class file adds an ExternalInterface callback on the DOM silex Object called "toggleHelloSilexVisibility" that we will call from the index.php class. When called, this method switch the MovieClip visibility.

Now open the "helloSilex" FLA, and link the "Container" MovieClip to the created class
: 
1.  Right click on the Container MoviClip in the library.
2.  Click on "Properties"
3.  In the appearing panel, click on "Export for ActionScript".
4.  In the Class Text Input, write "HelloSilex".
5.  Publish your new "helloSilex.swf" in your plugin folder.

### d/bringing it together

We now are going to modifiy the index.php file to account for the change made in the plugin. Add the following code in index.php
: 
<?php

require_once ROOTPATH.'cgi/includes/plugin_base.php';

class helloSilex_management extends plugin_base

{

public function initHooks($hook_manager)

{

$hook_manager->add_hook('index-body-end', 'hello_silex_index_body_end_hook', $this);

}

public function hello_silex_index_body_end_hook()

{

?>

<script type="text/javascript">

silexNS.HookManager.addHook("silexAdminApiReady",initHelloSilex);

 **silexNS.HookManager.addHook("getViewMenuItems",set_view_menu_item);**

function initHelloSilex()

{

document.getElementById('silex').SetVariable('silex_exec_str','load_clip:plugins/helloSilex/helloSilex.swf,plugins');

}

**function toggle_hello_silex_visibility()**

 **{**

 **document.getElementById('silex').toggleHelloSilexVisibility();**

 **}**

  

 **function set_view_menu_item(event)**

 **{**

 **event.data.push($rootUrl+"plugins/helloSilex/helloSilex_ViewMenu_Button.swf");**

 **}**

</script>

<?php

}

}

?>

In this iteration we added one hook to the JavaScript hook manager and 2 method. The hook is called by the ViewMenu when it's initialisation is complete and ask the plugins to add themselves to it. He passes an array as argument that yout must push with your icon .swf url. Here we add "helloSilex_ViewMenu_Button" AS3 button, giving it's full url from the root of the server.

The  "toggle_hello_silex_visibility" method is the one that we set as External Interface callback in the Main class of our ViewMenu button. It will be called when we click the ViewMenu button. We can see that the body of this method calls a method on the silex DOM element, "toggleHelloSilexVisibility" which his the one that we set in our HelloSilex AS2 class. This method when called after a click on the viewMenu button, toggles the visibility of the "Hello Silex !" MovieClip in our publication.

[caption id="attachment_51" align="alignnone" width="580" caption="a blue button has been added to the ViewMenu"]![]({{ site.baseurl }}/assets/screen_4.jpg "screen_4")[/caption]

The second part of this tutorial is now complete. Now that you understand the mechanism of Silex Plugin, you can try adding different behaviour in your AS2 "HelloSilex" class or try adding more button to the viewMenu, each one interacting differently with the plugin.

III - Adding parameters to the plugin
-------------------------------------

To extend the functionnalities of your plugin, you have the possibility to add parameters to it via PHP, those parameters will be initialised at the plugin startup and their values will be editable in the manager.

In our "hello silex !" plugin, we will add a paramter that will allow the user to change the text of the text field.

### a/ adding the callback in flash

We first need to add a new method in "hello silex !" AS2 .swf that will change the value of the text field.

1.  Open the "HelloSilex.as" class.
2.  Change the class like this
: 
import flash.external.ExternalInterface;

class HelloSilex extends MovieClip

{

**var helloText:MovieClip;**

public function HelloSilex()

{

this._visible = false;

ExternalInterface.addCallback("toggleHelloSilexVisibility", this, toggleHelloSilexVisibility);

**ExternalInterface.addCallback("changeHelloSilexText", this, changeHelloSilexText);**

}

public function toggleHelloSilexVisibility()

{

if (this._visible)

{

this._visible = false;

}

else {

this._visible = true;

}

}



 **{**

 **helloText.text = value;**

 **}**

  

}

We add an External Interface callback in the constructor that will be called from the index.php, and add the method that will change the text, of the text field on the stage.

### b/setting the index.php file

The last change is to adapt the index.php file
: 
<?php

require_once ROOTPATH.'cgi/includes/plugin_base.php';

class helloSilex_management extends plugin_base

{

**function initDefaultParamTable()**

 **{**

 **$this->paramTable = array(** 

 **array(**

 **"name" => "helloSilex_text",**

 **"label" => "helloSilex Text",**

 **"description" => "This is the text of the hello silex plugin",**

 **"value" => "HELLO SILEX !",**

 **"restrict" => "",**

 **"type" => "string",**

 **"maxChars" => "200"**

 **)**

 **);**

 **}**

public function initHooks($hook_manager)

{

$hook_manager->add_hook('index-body-end', 'hello_silex_index_body_end_hook', $this);

}

public function hello_silex_index_body_end_hook()

{

$i = 0;

while( $i < count( $this->paramTable ) )

{

if($this->paramTable[$i]["name"] == "helloSilex_text")

$helloSilexText = $this->paramTable[$i]["value"];

$i++;

}

?>

<script type="text/javascript">

silexNS.HookManager.addHook("silexAdminApiReady",initHelloSilex);

silexNS.HookManager.addHook("getViewMenuItems",set_view_menu_item);

function initHelloSilex()

{

document.getElementById('silex').SetVariable('silex_exec_str','load_clip:plugins/helloSilex/helloSilex.swf,plugins');

}

function toggle_hello_silex_visibility()

{

 **document.getElementById('silex').changeHelloSilexText("<?php echo $helloSilexText ?> ");**

document.getElementById('silex').toggleHelloSilexVisibility();

}

function set_view_menu_item(event)

{

event.data.push($rootUrl+"plugins/helloSilex/helloSilex_ViewMenu_Button.swf");

}

</script>

<?php

}

}

[Hello_Silex_Tutorial_source](https://www.silexlabs.org/wp-content/uploads/2012/05/Hello_Silex_Tutorial_source1.zip)?>

We add a PHP method **initDefaultParamTable which add our parameter in the parameter array. Our parameter is represented by an assoc array with a few different properties. In the "**hello_silex_index_body_end_hook", we add a loop that will search in the param array for the value of our parameters. A loop might be useful for plugins with many differnt parameters. And last, we add a call to the "changeHelloSilexText" in the "toggle_hello_silex_visibility" JavaScript body method. This call will change the value of the text in flash, passing it the PHP $helloSilexText value.

### c/ changing the parameter value from the manager

The value of the parameter is set from the Silex Manager

1.  Open the manager and log-in
2.  Go to the "Manage" page
3.  Click on the "helloSilex" publication
4.  Click on Plugins
5.  Click on the helloSilex plugin
6.  Click on helloSilex Text parameter
7.  Change the text
8.  Save then click on Edit to see the change

![]({{ site.baseurl }}/assets/screen_5.jpg "screen_5")

![]({{ site.baseurl }}/assets/screen_6.jpg "screen_6")

You plugin is now complete, you can download the source of this 3 parts tutorial here
: [Hello_Silex_Tutorial_source](https://www.silexlabs.org/wp-content/uploads/2012/05/Hello_Silex_Tutorial_source1.zip)