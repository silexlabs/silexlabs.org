---
author: "ariels"
comments: true
date: "2013-11-07T16:28:27.000Z"
layout: "post"
link: "https://www.silexlabs.org/amfphp-2-2-teaser-2-value-object-love/"
slug: "amfphp-2-2-teaser-2-value-object-love"
title: "AmfPHP 2.2 Teaser #2 Value Object Love"
wordpress_id: 180181
categories: ["Blog amfPHP","Blog Silex Labs","The Blog"]

---
_This is the second of a series of articles discussing ongoing developments with AmfPHP. The idea is to give the community the chance to give feedback before a final release is made, and of course simply to let people know what is going on. [The first is here](https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/). [Get the download here ](http://sourceforge.net/projects/amfphp/files/amfphp-2.2_vos.zip/download)_

One of the key selling points of the AMF format is that you can use it to transmit typed objects. Previous versions of AmfPHP had a plugin, AmfphpCustomClassConverter, whose responsibility was to manage these typed objects. It did its job reasonably well, but had some limitations which have been adressed in its successor.

<!-- more -->

![](http://photos.foter.com/66/a-little-love-free-creative-commons-pink-heart_l.jpg)


# Better performance


If you use AmfPHP to transfer large amounts of typed data, you should see some significant performance increases. This is especially for [Baguette AMF](http://baguetteamf.com) users. One tester was sending 600 kbytes of nested objects, and was having performance issues: Some of his requests would take 15 seconds to process. He went from 15 seconds to 5 seconds per request when installing Baguette AMF, then down to 1 second per request with this update.

This only works for AMF(not JSON), and should have a significant impact if you're sending large quantities of data, even more so if the data contains nested typed objects. The technicalities are beyond the scope of this article, but might be discussed elsewhere.


# Better developer experience


Vo conversion is optional. As typing is not enforced in PHP, it makes sense to do without it completely and just use anonymous objects with "_explicitType" marked to whatever type you want to send back to your client. Hence by default the Vo Converter's default behavior when it doesn't find a class with a certain type is just to give you an anonymous object.

This is fine for production, but when developing, it would be nice to be informed when a class is missing. So a new feature is the "enforceConversion" flag. If set to true, an exception is thrown when a VO class is not found. This exception contains information about what was sought, and the various possible paths where it could be found, so be sure to remove it for production.


# Namespace Support


It is now possible to use namespaces in your Value Objects.
Here is a snippet to show how you would configure the Vo Converter. the first entry in the array is the path to the folder, and the second is for the root namespace, 'NVo'. So a "Vo\MyVO" class in "NamespaceVo/MyVO.php" can be sent with a client(explicit) type "MyVO".

[code]
$voFolders = array();
//add the folder with the namespace. 1st comes the pass, 2nd comes the namespace root.
$voFolders[] = array(dirname(__FILE__) . '/NamespaceVo/', 'NVo');
$config->pluginsConfig['AmfphpVoConverter'] = array('voFolders' => $voFolders);
[/code]

Note that this is the same system as for service folders.


# Better Name


Nobody knew what the custom class converter did without looking it up. It's now called Vo Converter.


# Other Goodies






  * The back office tells you what version of AmfPHP you're running and whether you're up to date. A mini RSS reader is also tucked away so that you can get AmfPHP news.


  * You can choose to make calls from the Service Browser either in JSON or AMF.


  * Put an @amfphpHide tag in your service or method's comments, and it won't appear in the back office


  * The service browser now truncates data when it's too much to display. This avoids you killing your browser when you've loaded big data in the service browser.


  * The AmfPHPErrorHandler has been enhanced so that it does not throw exception for which reporting has been disabled.


  * Yes we're still working on the styling of the back office. So here's yet another look, tell us what you think!


  * [A guide to migrating your config can be found here](www.silexlabs.org/amfphp/documentation/upgrading-from-2-0-x-and-2-1-x-to-2-2/).




# Thank You






  * Thanks [Tommie](https://twitter.com/tomvanmechgelen) for all the testing and feedback.


  * Thanks [Dan Franklin](https://www.silexlabs.org/members/danfranklinusa/) for the AmfphpErrorHandler suggestion and code


[The packaged version is available here, so please try it.](http://sourceforge.net/projects/amfphp/files/amfphp-2.2_vos.zip/download)

[The code is here, if you feel like making a contribution.](https://github.com/silexlabs/amfphp-2.0/releases/tag/v2.2_vos)

[The heart picture was taken here](http://foter.com/photo/a-little-love-free-creative-commons-pink-heart/).

