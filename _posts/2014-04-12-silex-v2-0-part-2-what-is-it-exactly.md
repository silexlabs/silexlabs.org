---
layout: post
title: Silex v2.0 - Part 2, what is it exactly?

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex
- Blog Silex Labs
- Silex
- The Blog
- Tutorials Silex
tags:
- cms
- communication
- design
- digital
- geek
- html5-editor
- open source
- silex
- silex labs
- silex V2
- silex-v2-vision
- web

_epLastMessage: ''
_edit_last: '9'
_itemCurrentVersion: ''
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"
_thumbnail_id: '180130'
_wpas_skip_10192259: '1'
_wpas_skip_10208903: '1'

display_name: lexa
first_name: lexa
last_name: ''
permalink: "/silex-v2-0-part-2-what-is-it-exactly/"
---

> ##### This article is part of [a series of articles about the new version of Silex HTML5 editor](https://www.silexlabs.org/tag/silex-v2-vision/).
> 
> ##### Designers will find out what they can do with it. Web developers will have an insight of the technologies behind Silex v2.

##### ![]({{ site.baseurl }}/assets/silex-v2-article-02.png)



[caption id="attachment_203343" align="alignnone" width="300"][![Screen shot of a Silex template for small businesses]({{ site.baseurl }}/assets/screenshot-678x336-300x148.png "silex-v2-template1")](http://www.silex.me/demos/html5-editor/) Silex template for small businesses[/caption]

[caption id="attachment_179337" align="alignnone" width="300"][![Silex v2 first templates]({{ site.baseurl }}/assets/silex-v2-template2-300x270.png "silex-v2-template2")](https://github.com/silexlabs/Silex/issues/168) Another template to test Silex, several pages, inspired by the excellent template "fictional studio" by Tomas Laurinavicius[/caption]

[caption id="attachment_203341" align="alignnone" width="300"][![Silex v2 first templates]({{ site.baseurl }}/assets/Screen-Shot-2014-08-02-at-2.34.21-PM-300x148.png "silex-v2-landing-page")](https://github.com/silexlabs/Silex/issues/167) A real life landing page made with Silex v2.0 beta[/caption]

Now let's have a deeper look on the choices we made, and how we try to reach our goals.

Edit HTML files without programming skills
------------------------------------------

Silex UX is inspired by the great products made by Google. We do not share the company's goals or methods, but we agree that in term of web app and usability, they have found a good formula. The interface let the designer drop elements on the stage, and edit its properties and style with the mouse and tool boxes. Here is a screenshot of the new interface.

[caption id="attachment_179333" align="aligncenter" width="300"]![Silex 2 screenshot]({{ site.baseurl }}/assets/silex-v2-300x225.png "silex v2.0 UI") Silex 2.0 beta version, screenshot[/caption]

The files which are opened and edited by Silex are standard HTML files. For now, you cannot open any web page and edit it in Silex. But it is a matter of
time: we plan to develop an import/export feature, in order to

*   import any HTML page and make it editable in Silex
*   export clean HTML/CSS from the Silex-specific HTML page



Fulfill the common needs of the professional designers, and allow web developers to extend it
---------------------------------------------------------------------------------------------

We used our experience with Silex v1 and our experience on the field with designers, to make it easy to produce a basic website, fully customized, with no trace of Silex in the final product. Also, as a main issue with Silex v1 was the time and skills it takes to make plugins or to enter the code of the software, this time we have chosen javascript common practices and we have as less dependencies as possible. The goal being that web developers can extend or even improve the core of the software. More technical info will be published in the next article in this series.

Plugged into the cloud
----------------------

> In


Silex has always been a website editor in the browser. This means that you do not need to install it to use it, you simply open a web browser and the software loads. You then edit a website and publish it online. In Silex v1, it was mandatory to download Silex and use it from a server, or from your local computer. This had several drawbacks

*   this used to take a "long time" to start with Silex
*   there are many platforms and some of them we could not test on
*   on the local computer, a local server was needed

In Silex v2, we decided to provide an online version of the software. So now you just open a web page and Silex loads from our server to edit your files from any computer. We had to face a
limitation: we can not host your files. Because it is expensive, and because it is wrong! You must be the owner of your data, it is important. About the fact that it is expensive, we chose to take advantage of the cloud services to store your data. This means that Silex can read and write files to and from your Dropbox free accounts and from an FTP account that you may have (usually paid). Concerning the fact that we believe that you should be the owner of your data, we have developed an FTP connection, so that you can read and write directly from your hosted space. And also we would like to make Silex available as a standard software, with an installer, but this will take more time and work. Please note that this means that you must handle the hosting for now. We are on our way to set up professional hosting automatically plugged in with Silex and for free. The good point is that you have simple HTML files to host, and you can find free hosting for this type of data.