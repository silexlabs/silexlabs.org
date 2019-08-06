---
author: "ariels"
comments: true
date: "2012-04-25T07:58:08.000Z"
layout: "post"
title: "Sencha Touch 2 and amfPHP2"
categories: ["Blog amfPHP","The Blog"]

---
_[Mathieu Decoene](http://creativeskills.be/user/Coenego/)  [@Coenego](https://twitter.com/Coenego) here shares some insights on using [Sencha Touch 2 ](http://www.sencha.com/products/touch/)with amfPHP 2_

_For those who don’t know Sencha Touch: it’s a javascript framework for mobile (based on Sencha_
_Ext)._

It’s always a bit trial and error when new updates are released; new methods, deprecated stuff... I’m
talking about Sencha Touch 2 and amfPHP 2 in this case.
_
_Since we’re talking about mobile apps, Ajax-requests are basically used to receive or send our
data (because we want it to run behind the screens). So, amfPHP is a perfect partner for
communication between Sencha Touch (or any other client framework) and the services.
But some things have changed since boths v1’s... For example: You don’t have to specify your service and
method name any longer in the url-property (to which the request is sent) of the Ajax-request. Now
you have to add both names as a property value together with the other parameters.
Examples of usage:

consider this amfPHP service:

[code]
<!--?php class MyService{ function myMethod($data){ // do something with property1 } } ?-->

[/code]

To call it from Sencha Touch when running it in amfPHP v1, do the following:

[code]
var myParams = {
property1: ‘value1’,
property2: ‘value2’
};
Ext.Ajax.request({
method: 'POST',
url: ‘http://www.yoururl.com/amfphp/json.php/MyService.myMethod’,
params: myParams
});

?>

[/code]

To call it from Sencha Touch when running it in amfPHP v2, do the following:

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
url: ‘http://www.yoururl.com/amfphp/?contentType=application/json’,
params: JSON.stringify(myParams);
});

[/code]


