---
author: "deleu"
comments: true
date: "2019-07-29T10:28:31.219Z"
layout: "post"
link: "https://www.silexlabs.org/?p=137258"
published: false
slug: ""
title: "New version for class type Date on Amfphp"
wordpress_id: 137258
categories: ["Exchange amfPHP"]

---
Amfphp has an Amfphp_Core_Amf_Types_Date class for certain time now, but it's only purpose is to travel _timestamp_ from Flex to PHP and from PHP to Flex. When travelling timestamp from PHP to Flex, the class will be enough since Flex will supply methods to work with the timestamp. But when travelling timestamp from Flex to PHP, the class isn't self-sufficient due to lack of built-in usability to work the date received. With [this version of the Date Class](https://www.silexlabs.org/?attachment_id=137279) you'll be able to have a better manipulation of Dates without having to install PHP 5.2~5.3 for Date/Time class functions. The update provides some new attributes and methods that works with [date()](http://php.net/manual/pt_BR/function.date.php) which is available since PHP 5.

**Changelog:**

******New Attributes: **

private $DATE_FORMAT which includes formats in which the library can convert in case of casting to (string);
public $USE_FORMAT set as default to 0 (Y-m-d H:i:s format). To see available formats, check DATE_FORMAT attribute;
public $year set as date("Y") when __construct or setTimestamp() is called; See [date() manual](http://php.net/manual/pt_BR/function.date.php).
public $month set as date("m") when __construct or setTimestamp() is called; See [date() manual](http://php.net/manual/pt_BR/function.date.php).
public $day set as date("d") when __construct or setTimestamp() is called; See [date() manual](http://php.net/manual/pt_BR/function.date.php).
public $hour set as date("H") when __construct or setTimestamp() is called; See [date() manual](http://php.net/manual/pt_BR/function.date.php).
public $minute set as date("i") when __construct or setTimestamp() is called; See [date() manual](http://php.net/manual/pt_BR/function.date.php).
public $second set as date("s") when __construct or setTimestamp() is called; See [date() manual](http://php.net/manual/pt_BR/function.date.php).

**New Methods / Methods changed:**

1. __construct() now has an additional boolean $ms attribute used to specify if the timestamp is in milliseconds or seconds. It is default set as true since AmfPHP framework will keep working naturally, but when using the class from PHP, you can set the argument as false so the timestamp can be multiplied by 1000;
2. Added setTimestamp() method;
3. Added timestampChange() method that fills up attributes from year to second everytime setTimestamp() is called; __construct() also dispatches it.
4. __toString() were overwritten to return a datetime string formatted in the $USE_FORMAT form.
5.internalDate() function added to simplify how __toString() will work instead of abusive use of native php function date().

