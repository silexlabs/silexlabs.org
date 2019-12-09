---
id: 137258
title: "New version for class type Date on Amfphp"
date: "2013-02-18T03:54:48.000Z"
author: "Deleu"
layout: "page"
guid: "https://www.silexlabs.org/?p=137258"
categories: ["Exchange amfPHP"]

---
Amfphp has an Amfphp\_Core\_Amf\_Types\_Date class for certain time now, but it&#8217;s only purpose is to travel _timestamp_ from Flex to PHP and from PHP to Flex. When travelling timestamp from PHP to Flex, the class will be enough since Flex will supply methods to work with the timestamp. But when travelling timestamp from Flex to PHP, the class isn&#8217;t self-sufficient due to lack of built-in usability to work the date received. With <a href="https://www.silexlabs.org/?attachment_id=137279" rel="attachment wp-att-137271">this version of the Date Class</a> you&#8217;ll be able to have a better manipulation of Dates without having to install PHP 5.2~5.3 for Date/Time class functions. The update provides some new attributes and methods that works with <a title="PHP date() Function" href="http://php.net/manual/pt_BR/function.date.php" target="_blank" rel="noopener noreferrer">date()</a> which is available since PHP 5.  
**Changelog:**  
******New Attributes: **  
private $DATE_FORMAT which includes formats in which the library can convert in case of casting to (string);  
public $USE\_FORMAT set as default to 0 (Y-m-d H:i:s format). To see available formats, check DATE\_FORMAT attribute;  
public $year set as date(&#8220;Y&#8221;) when __construct or setTimestamp() is called; See <a title="date()" href="http://php.net/manual/pt_BR/function.date.php" target="_blank" rel="noopener noreferrer">date() manual</a>.  
public $month set as date(&#8220;m&#8221;) when __construct or setTimestamp() is called; See <a title="date()" href="http://php.net/manual/pt_BR/function.date.php" target="_blank" rel="noopener noreferrer">date() manual</a>.  
public $day set as date(&#8220;d&#8221;) when __construct or setTimestamp() is called; See <a title="date()" href="http://php.net/manual/pt_BR/function.date.php" target="_blank" rel="noopener noreferrer">date() manual</a>.  
public $hour set as date(&#8220;H&#8221;) when __construct or setTimestamp() is called; See <a title="date()" href="http://php.net/manual/pt_BR/function.date.php" target="_blank" rel="noopener noreferrer">date() manual</a>.  
public $minute set as date(&#8220;i&#8221;) when __construct or setTimestamp() is called; See <a title="date()" href="http://php.net/manual/pt_BR/function.date.php" target="_blank" rel="noopener noreferrer">date() manual</a>.  
public $second set as date(&#8220;s&#8221;) when __construct or setTimestamp() is called; See <a title="date()" href="http://php.net/manual/pt_BR/function.date.php" target="_blank" rel="noopener noreferrer">date() manual</a>.  
**New Methods / Methods changed:**  
1. __construct() now has an additional boolean $ms attribute used to specify if the timestamp is in milliseconds or seconds. It is default set as true since AmfPHP framework will keep working naturally, but when using the class from PHP, you can set the argument as false so the timestamp can be multiplied by 1000;  
2. Added setTimestamp() method;  
3. Added timestampChange() method that fills up attributes from year to second everytime setTimestamp() is called; __construct() also dispatches it.  
4. _\_toString() were overwritten to return a datetime string formatted in the $USE\_FORMAT form.  
5.internalDate() function added to simplify how __toString() will work instead of abusive use of native php function date().
























