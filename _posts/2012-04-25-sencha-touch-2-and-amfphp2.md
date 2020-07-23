---
layout: post
title: Sencha Touch 2 and amfPHP2

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog amfPHP
- The Blog
tags: []

_epLastMessage: ''
_edit_last: '11'
_syntaxhighlighter_encoded: '1'
_itemCurrentVersion: ''
_thumbnail_id: '135923'
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/sencha-touch-2-and-amfphp2/"
---



_For those who don’t know Sencha
Touch: it’s a javascript framework for mobile (based on Sencha_  
_Ext)._

It’s always a bit trial and error when new updates are released; new methods, deprecated stuff... I’m  
talking about Sencha Touch 2 and amfPHP 2 in this case.  
Since we’re talking about mobile apps, Ajax-requests are basically used to receive or send our  
data (because we want it to run behind the screens). So, amfPHP is a perfect partner for  
communication between Sencha Touch (or any other client framework) and the services.  
But some things have changed since boths v1’s... For
example: You don’t have to specify your service and  
method name any longer in the url-property (to which the request is sent) of the Ajax-request. Now  
you have to add both names as a property value together with the other parameters.  
Examples of
usage: 
consider this amfPHP
service: 
[code]  
<!--?php class MyService{ function myMethod($data){ // do something with property1 } } ?-->

[/code]

To call it from Sencha Touch when running it in amfPHP v1, do the
following: 
[code]  
var myParams = {  
property1: ‘value1’,  
property2: ‘value2’  
};  
Ext.Ajax.request({  
method: 'POST',  

params: myParams  
});

?>

[/code]

To call it from Sencha Touch when running it in amfPHP v2, do the
following: 
[code]

var myParams = {  
serviceName: 'MyService',  
methodName: 'myMethod',  
parameters: [  
{'dataroot': [‘value1’,’value2’]}  
]  
};

Ext.Ajax.request({  
method: 'POST',  

params: JSON.stringify(myParams);  
});

[/code]