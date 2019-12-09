---
id: 19
title: "Testing amfPHP"
date: "2011-03-15T17:39:26.000Z"
author: "Ariel Sommeria-Klein"
layout: "page"
guid: "http://localhost:8888/amfphpdoc/?p=19"

---
In the &#8220;Services&#8221; folder of amfphp, you should see a file &#8220;ExampleService&#8221;.   If you open it you will see that it simply consists of a class with a simple method, &#8220;returnOneParam&#8221;, which just returns the data you send it. You can use this service to do a few tests, and get a feel for what you can do with amfphp.  
The simplest way to test amfphp is to use the Service Browser. For example if you installed Amfphp at the root of your local server go to  
<http://localhost/amfphp-2.xxx/BackOffice/ServiceBrowser.php> .  
You&#8217;ll need to login, or disable logging in. [See here for details](https://www.silexlabs.org/amfphp/documentation/using-the-back-office/).  
There you should see the service browser which allows you to choose from the services available there, to choose from its available methods, and to call that method with parameters of your choice. You can add your own service class to the &#8220;Services&#8221; folder and test it too.  
Once you have a service up and running, you can try using it remotely, for example using Flash and AMF. See the Examples folder for sample code.
























