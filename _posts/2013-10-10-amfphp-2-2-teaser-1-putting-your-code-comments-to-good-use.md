---
layout: post
title: 'AmfPHP 2.2 Teaser #1 Putting your code comments to good use'

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog amfPHP
- Blog Silex Labs
- The Blog
tags: []

_epLastMessage: ''
_edit_last: '10'
_syntaxhighlighter_encoded: '1'
_itemCurrentVersion: ''
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"
_thumbnail_id: '135923'

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/"
---

_[  
](https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/attachment/screen-shot-2013-10-10-at-2-02-49-pm/)This is the first of a series of articles discussing ongoing developments with AmfPHP. The idea is to give the community the chance to give feedback before a final release is made, and of course simply to let people know what is going on. _

You know it’s good practice to comment your code. With the upcoming AmfPHP 2.2 the information in those comments shall be used to make AmfPHP more useful to you.

Here's how it
works: A special "discovery" service is included with AmfPHP. It analyses the service classes and their comments. This information is passed to the back office.

In the service browser

[![]({{ site.baseurl }}/assets/Screen-Shot-2013-10-10-at-2.02.49-PM-687x419.png "Service Browser showing service comments")](https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/attachment/screen-shot-2013-10-10-at-2-02-49-pm/)

Here is a screenschot showing the ongoing development. Notice that the PHP code comments now appear in the dialog.

First of all, **the service comments and the method comments appear in the dialog. **

Then, an extra goodie is to offer a special formatting option in the comment so that **fields can be be prefilled with something meaningful in the service browser.**

Here's how it works. The interesting line from the comment is reproduced
below: 
@param mixed $param


Everything right of
“example: “ is now used to prefill the input for the parameter.  It works with numbers, strings, booleans, and also with JSON values so that you can input complex types easily. Note that the example here uses "_explicitType" ,which would allow the object to be converted to a typed object.

In the client generator
-----------------------

Very simply, the class comments appear above the generated client class, and the method comments appear above the generated client method.

Below is the PHP code :

[code]  
/**  
* This is a test/example service. Remove it for production use  
*  
* @package Amfphp_Services  
* @author Ariel Sommeria-klein  
*/  
class ExampleService {

/**  
* return the same data as what was sent  
* @param mixed $param

* @return mixed  
*/  
public function returnOneParam($param){  
return $param;  
}

}  
[/code]

Below is the generated AS3 code :

[code]  
/**  
* This is a test/example service. Remove it for production use  
*  
* @package Amfphp_Services  
* @author Ariel Sommeria-klein  
*/  
public class ExampleServiceClient extends AMFPHPServiceClient {  
/**  
* constructor.  
* @param NetConnection nc. instantiate the nc, call the connect() method on it with the amfPHP server url, .  
* maybe add some event listeners for error events, then pass it here.  
**/  
public function ExampleServiceClient(nc:NetConnection){  
super(nc, "ExampleService");  
}

/**  
* return the same data as what was sent  
* @param mixed $param  
* @return mixed  
*/  

return callService("returnOneParam" , param);  
}

}  
[/code]

As you see they are very similar, and the client code gets the same comments as the server code.

The next step would be to use this information to type method parameters and find a way to have typed responses that are enforced at compile time. It’s not yet clear if this is feasible or practical, so stay tuned !

Other Goodies
-------------

*   The [ACE code editor](ace.c9.io) has been integrated, and the parameter inputs are resizable.
*   The Custom Class Converter plugin now has an option to enforce conversion. This is so that when you are working to set up your Value Objects(Vo s), AmfPHP helps you by providing some information when you slip up.
*   Preliminary support for namespaces in services.
*   Many small improvements in the back office, such as making the service browser uses AJAX to call services instead of reloading the page.

This is ongoing, so if you have some feedback, please comment below.

Thank You
---------

*   Thanks [@Lexa](https://www.silexlabs.org/members/lexa/) for the idea to use ACE code editor.
*   Thanks [Christian](https://www.silexlabs.org/members/arkascha/) for getting me thinking on comments again.
*   Thanks [Alexandr](https://twitter.com/Hast4656) for our discussions on namespaces.

[The packaged version is available here, so please try it.](http://sourceforge.net/projects/amfphp/files/amfphp-2.2_comments.zip/download)

[The code is here, if you feel like making a contribution.](https://github.com/silexlabs/amfphp-2.0/releases/tag/v2.2_comments)