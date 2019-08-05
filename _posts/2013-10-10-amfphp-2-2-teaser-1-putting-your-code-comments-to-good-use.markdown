---
author: ariels
comments: true
date: 2013-10-10 14:26:07+00:00
excerpt: "<em><a href=\"https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/attachment/screen-shot-2013-10-10-at-2-02-49-pm/\"\
  \ rel=\"attachment wp-att-179783\"></a>This is the first of a series of\
  \ articles discussing ongoing developments with AmfPHP. The idea is to give the\
  \ community the chance to give feedback before a final release is made, and of course\
  \ simply to let people know what is going on. </em>You know it’s good\
  \ practice to comment your code. With the upcoming AmfPHP 2.2 the information in\
  \ those comments shall be used to make AmfPHP more useful to you.Here's\
  \ how it works: A special \"discovery\" service is included with AmfPHP. It analyses\
  \ the service classes and their comments. This information is passed to the back\
  \ office.<span style=\"color: #333333; font-size: 20px; font-weight:\
  \ bold;\">In the service browser</span><a href=\"https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/attachment/screen-shot-2013-10-10-at-2-02-49-pm/\"\
  \ rel=\"attachment wp-att-179783\"><img class=\"aligncenter size-large wp-image-179783\"\
  \ title=\"Service Browser showing service comments\" src=\"https://www.silexlabs.org/wp-content/uploads/2013/10/Screen-Shot-2013-10-10-at-2.02.49-PM-687x419.png\"\
  \ alt=\"\" width=\"687\" height=\"419\" /></a>Here is a screenschot\
  \ showing the ongoing development. Notice that the PHP code comments now appear\
  \ in the dialog.First of all, <strong>the service comments and the method\
  \ comments appear in the dialog. </strong>Then, an extra goodie is to\
  \ offer a special formatting option in the comment so that <strong>fields can be\
  \ be prefilled with something meaningful in the service browser.</strong>\
  Here's how it works. The interesting line from the comment is reproduced below:\
  @param mixed $param example: {\"_explicitType\":\"myType\", \"intVal\"\
  :2, \"stringVal\":\"bla\", \"arrayVal\":[1,2, \"ert\"]}Everything right\
  \ of “example: “ is now used to prefill the input for the parameter.  It works with\
  \ numbers, strings, booleans, and also with JSON values so that you can input complex\
  \ types easily. Note that the example here uses \"_explicitType\" ,which would allow\
  \ the object to be converted to a typed object.<h2>In the client generator</h2>\
  Very simply, the class comments appear above the generated client class,\
  \ and the method comments appear above the generated client method.\
  Below is the PHP code :[code]/*** This is a test/example\
  \ service. Remove it for production use** @package Amfphp_Services\
  * @author Ariel Sommeria-klein*/class ExampleService\
  \ {/*** return the same data as what was sent* @param\
  \ mixed $param example: {&quot;_explicitType&quot;:&quot;myType&quot;, &quot;intVal&quot;:2,\
  \ &quot;stringVal&quot;:&quot;bla&quot;, &quot;arrayVal&quot;:[1,2, &quot;ert&quot;]}\
  * @return mixed*/public function returnOneParam($param){\
  return $param;}}[/code]Below\
  \ is the generated AS3 code :[code]/*** This is\
  \ a test/example service. Remove it for production use** @package\
  \ Amfphp_Services* @author Ariel Sommeria-klein*/\
  public class ExampleServiceClient extends AMFPHPServiceClient {/**\
  * constructor.* @param NetConnection nc. instantiate the nc, call\
  \ the connect() method on it with the amfPHP server url, .* maybe add\
  \ some event listeners for error events, then pass it here.**/\
  public function ExampleServiceClient(nc:NetConnection){super(nc, &quot;ExampleService&quot;);\
  }/*** return the same data as what was sent\
  * @param mixed $param* @return mixed*/public function\
  \ returnOneParam(param:Object):IResponderSignal{return callService(&quot;returnOneParam&quot;\
  \ , param);}}[/code]As you see they\
  \ are very similar, and the client code gets the same comments as the server code.\
  The next step would be to use this information to type method parameters\
  \ and find a way to have typed responses that are enforced at compile time. It’s\
  \ not yet clear if this is feasible or practical, so stay tuned !<h2>Other\
  \ Goodies</h2><ul><li>The <a href=\"ace.c9.io\">ACE code editor</a>\
  \ has been integrated, and the parameter inputs are resizable.</li><li>The\
  \ Custom Class Converter plugin now has an option to enforce conversion. This is\
  \ so that when you are working to set up your Value Objects(Vo s), AmfPHP helps\
  \ you by providing some information when you slip up.</li><li>Preliminary\
  \ support for namespaces in services.</li><li>Many small improvements\
  \ in the back office, such as making the service browser uses AJAX to call services\
  \ instead of reloading the page.</li></ul>This is ongoing, so\
  \ if you have some feedback, please comment below.<h2>Thank You</h2>\
  <ul><li>Thanks <a href=\"https://www.silexlabs.org/members/lexa/\"\
  >@Lexa</a> for the idea to use ACE code editor.</li><li>Thanks <a href=\"\
  https://www.silexlabs.org/members/arkascha/\">Christian</a> for getting me thinking\
  \ on comments again.</li><li>Thanks <a href=\"https://twitter.com/Hast4656\"\
  >Alexandr</a> for our discussions on namespaces.</li></ul><a\
  \ href=\"http://sourceforge.net/projects/amfphp/files/amfphp-2.2_comments.zip/download\"\
  >The packaged version is available here, so please try it.</a><a href=\"\
  https://github.com/silexlabs/amfphp-2.0/releases/tag/v2.2_comments\">The code is\
  \ here, if you feel like making a contribution.</a>"
layout: post
link: https://www.silexlabs.org/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/
slug: amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use
title: 'AmfPHP 2.2 Teaser #1 Putting your code comments to good use'
wordpress_id: 179725
categories:
- "Blog amfPHP"
- "Blog Silex Labs"
- "The Blog"
---

_[
				](https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/attachment/screen-shot-2013-10-10-at-2-02-49-pm/)This is the first of a series of articles discussing ongoing developments with AmfPHP. The idea is to give the community the chance to give feedback before a final release is made, and of course simply to let people know what is going on. _

				You know it’s good practice to comment your code. With the upcoming AmfPHP 2.2 the information in those comments shall be used to make AmfPHP more useful to you.

				Here's how it works: A special "discovery" service is included with AmfPHP. It analyses the service classes and their comments. This information is passed to the back office.

				In the service browser

				[![](https://www.silexlabs.org/wp-content/uploads/2013/10/Screen-Shot-2013-10-10-at-2.02.49-PM-687x419.png)](https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/attachment/screen-shot-2013-10-10-at-2-02-49-pm/)

				Here is a screenschot showing the ongoing development. Notice that the PHP code comments now appear in the dialog.

				First of all, **the service comments and the method comments appear in the dialog. **

				Then, an extra goodie is to offer a special formatting option in the comment so that **fields can be be prefilled with something meaningful in the service browser.**

				Here's how it works. The interesting line from the comment is reproduced below:

				@param mixed $param example: {"_explicitType":"myType", "intVal":2, "stringVal":"bla", "arrayVal":[1,2, "ert"]}

				Everything right of “example: “ is now used to prefill the input for the parameter.  It works with numbers, strings, booleans, and also with JSON values so that you can input complex types easily. Note that the example here uses "_explicitType" ,which would allow the object to be converted to a typed object.


## In the client generator


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
				* @param mixed $param example: {"_explicitType":"myType", "intVal":2, "stringVal":"bla", "arrayVal":[1,2, "ert"]}
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
				public function returnOneParam(param:Object):IResponderSignal{
				return callService("returnOneParam" , param);
				}

				}
				[/code]

				As you see they are very similar, and the client code gets the same comments as the server code.

				The next step would be to use this information to type method parameters and find a way to have typed responses that are enforced at compile time. It’s not yet clear if this is feasible or practical, so stay tuned !


## Other Goodies






  * The [ACE code editor](ace.c9.io) has been integrated, and the parameter inputs are resizable.


  * The Custom Class Converter plugin now has an option to enforce conversion. This is so that when you are working to set up your Value Objects(Vo s), AmfPHP helps you by providing some information when you slip up.


  * Preliminary support for namespaces in services.


  * Many small improvements in the back office, such as making the service browser uses AJAX to call services instead of reloading the page.


				This is ongoing, so if you have some feedback, please comment below.


## Thank You






  * Thanks [@Lexa](https://www.silexlabs.org/members/lexa/) for the idea to use ACE code editor.


  * Thanks [Christian](https://www.silexlabs.org/members/arkascha/) for getting me thinking on comments again.


  * Thanks [Alexandr](https://twitter.com/Hast4656) for our discussions on namespaces.


				[The packaged version is available here, so please try it.](http://sourceforge.net/projects/amfphp/files/amfphp-2.2_comments.zip/download)

				[The code is here, if you feel like making a contribution.](https://github.com/silexlabs/amfphp-2.0/releases/tag/v2.2_comments)
