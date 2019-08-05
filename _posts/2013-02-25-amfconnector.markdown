---
author: "deleu"
comments: true
date: "2013-02-25T08:37:43.000Z"
layout: "post"
link: "https://www.silexlabs.org/amfconnector/"
slug: "amfconnector"
title: "AMFConnector"
wordpress_id: 137242
categories: ["Exchange","Exchange amfPHP"]
tags: ["AMFConnector","amfphp","Flex 3","Flex 4","Multiple Calls","NetConnection"]

---
**AMFConnector **is an AS3 library that uses NetConnection Adobe's class to perform connections between ActionScript and amfPHP. It's goal is to avoid facing connection errors through the Flash Debug, simplify the connection, provide a way of knowing when a call is still being processed and allow multiple calls for different Service Browser's class through a single established connection.

**1. Installing AMFConnector**

For simple and fast installation, you can download the .swc file [here](https://www.silexlabs.org/wp-content/uploads/2013/02/AMFConnector.rar) and place it at your _libs_ folder inside your Flex project.
You can also download the [source code](https://www.silexlabs.org/wp-content/uploads/2013/02/AMFConnector-source.rar) and attach it to the library for debug purpose if you like.

**2. Configurating Amfphp class**

_path: _Folder in which the index.php file of amfPHP is located. Configurated as **Amfphp/**by default.
_automaticBusyCursor: _Boolean variable that sets the cursor as busy through CursorManager.setBusyCursor(); every time a call is made. **True** by default.
Example of usage: If your AmfPHP folder is located at the same folder as the index.swf file, you don't need to change the path config. But if you have an libs/Amfphp structure, for instance, all you have to do is the following:

[code]Amfphp.getInstance().path = "libs/Amfphp/";[/code]

_Don't forget to finish it with a slash (/)._

You only have to change the config of the library once each runtime.

Since this is a compiled library, it doesn't actually need to be configurated at source-code level. But there are two variables that can be changed to work along with your project. The first one is the _path_ variable that reflects on where the Amfphp folder is located relatively to the index.swf. For instance, let's say your project is being compiled to C:\xampp\httpdocs\myFirstProject\index.swf and you placed the Amfphp library at C:\xampp\httpdocs\myFirstProject\Amfphp, in this case, it means that relatively to the index.swf file, the AmfPHP Framework is located at **Amfphp/**
Example 2: Now, say that your project is located at /var/www/html/MyProjectName/index.swf and the Amfphp framework is located at /var/www/html/Amfphp/index.php
In this case, the Amfphp folder is located outside of your project's folder and relatively to your index.swf, you'd have to go up and then go to Amfphp's folder. To configure it like this, you'd do:

[code]Amfphp.getInstance().path = "../Amfphp/";[/code]

The second variable is automaticBusyCursor, a boolean variable that will decide whether set the cursor to busy or not while using the library. To change it, you can simply add:

[code]Amfphp.getInstance().automaticBusyCursor = false;[/code]

**3. Simple Service Call**

A simple call can be made from any file of your project with the following code:

[code]CallGateway.getInstance().call("ExampleService/returnOneParam", resultFunction, firstParameter);[/code]

You can also make direct NetConnection calls through Amfphp class. The above call using this method would be similar to the following:

[code]Amfphp.getInstance().gateway.call("ExampleService/returnOneParam", new Responder(resultFunction, faultFunction), firstParameter);[/code]

_Note: if you make more than one call through Amfphp class directly, all calls will be made normally, since you're making the call direct through the NetConnection object. But if you use CallGateway class to make more than one call, consider using multiple-calls method (explained on the next topic), since the act of making more than one call simultaneously will make the library behave badly because the calls might be lost. A probable fix might come in future versions._

**4. Multiple Service Calls**

For this utility, we will need a PHP file placed at your Service Browser's folder. The main reason is because instead of establishing tons of calls to the server, we'll establish only one call carrying information of all calls. The server will then call itself and store all the returned data to deliver it back to Flex in a single communication tunnel. [You can download the PHP file here](https://www.silexlabs.org/?attachment_id=137245).

[code]CallGateway.getInstance().addCall("ExampleService/returnOneParam", resultFirstCall, "Parameter1");
CallGateway.getInstance().addCall("ExampleService/returnOneParam", resultSecondCall, "Parameter2");
CallGateway.getInstance().addCall("ExampleService/returnOneParam", resultThirdCall, "Parameter3");
CallGateway.getInstance().dispatchCalls();[/code]

The above code will store 3 different calls inside the library and dispatchCalls(); method will establish one single call for amfPHP (CallGateway.php file) in which each individual call will be made from the server to the server. After every data collection is done, each result function will be invoked receiving their respective server response.

**5. Preventing users from overflowing the server with multiple clicks on action button**

At the end of your form you have an action button that will make the call to the server. In a hypothetical situation, your user types everything that the forms requires and then he clicks the button 10 different times and the information filled was stored inside your database 10 different times. You can prevent this by simply binding _amf_busy _library's property with the _enabled_ attribute of your clickable component that will trigger the action. The following code will make the button disable whenever a call is made to the server and re-enable when the call is finished:

`<s:Button id="actionButton" label="Click me!" enabled="{!AMFConnector.Amfphp.getInstance().amf_busy}" />`

**6. Installing example**

****If you downloaded and placed Amfphp's folder inside your local server, you noticed that it has an Examples folder inside of it. Navigate to Examples/Php/ExamplesServices and place the [CallGateway](https://www.silexlabs.org/?attachment_id=137245) file mentioned at the section 4 of this doc. After that, download [AMFConnectorExample](https://www.silexlabs.org/137242/exchange/exchange-amfphp/amfconnector/attachment/amfconnectorexample/) and place it at Examples/Flex/. The Flex project has the view-source available.

For now, this is all the library is capable of doing. Suggestions for improvements would be appreciated. Download it and try now.
Library written by Marco Aurélio Deleu.

