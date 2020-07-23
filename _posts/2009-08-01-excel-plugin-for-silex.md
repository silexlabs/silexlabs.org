---
layout: post
title: Excel plugin for silex

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags: []

_epLastMessage: ''
_itemCurrentVersion: v1.0
_epLastError: ''

_itemCurrentFileName: excel plugin for silex v1.1 3.zip
_selectedProject: Silex
_selectedVersionsArray: v1.6.0,v1.6.1,v1.5.x

display_name: Silex Labs
first_name: Silex Labs
last_name: ''
permalink: "/excel-plugin-for-silex/"
---

Sources
=======

version 1.0
: [excel plugin for silex](http://wp-manager.silexlabs.org/wp-content/uploads/2009/08/excel-plugin-for-silex.zip)

version 1.1
: [excel-plugin-for-silex-v1.1](http://wp-manager.silexlabs.org/wp-content/uploads/2009/08/excel-plugin-for-silex-v111.zip)

Versions
--------

v1.0

*   2009/08/01

v1.1

*   2010/03/04
*   xls and xlsx support in excel_compute script

### Presentation

Use PHPExcel to set values and get values from an Excel sheet. The result is an RSS feed which you can use in Silex with the Oof RSSConnector component. Formulas of the cells are interpreted thanks to [phpExcel](http://www.codeplex.com/PHPExcel "phpExcel").

You can set the values you want and get other cells which are supposed to contain the result.

### Example

For example if you want to display a list of prices for some fruits at a given
date:  
![excel-example]({{ site.baseurl }}/assets/excel-example.jpg "excel-example")

Let's say the day is set in excel in the column A1, the labels are in the column B and the prices are formulas in the column C. You want to display a list with all fruits and their prices.

So you simply put the Oof components on the Stage in
silex: 
*   RSSConnector
    *   URL prefix = < < silex.rootUrl> > /cgi/scripts/
*   DataSelector
    *   enter the connector and list names
    *   source = excel_compute.php?set_values=A2:DATE&get_values=B2-C5&file_name=media/test_xls.xlsx - but replace "DATE" by the date you want (if it is different from the one which is in the excel file allready). The "DATE" value can be entered by the user for exemple or be the date of today (use silex accessors)
*   RichTextList
    *   cell content = < < B> > costs < < C> > Euros

It makes this
happend: 
![excel-example2]({{ site.baseurl }}/assets/excel-example2-1024x549.jpg "excel-example2")

The script which you call with the Oof components
-------------------------------------------------

### Inputs


*   get_values values to be retrurned - may be a range - e.g. A1,C2-F15,G6
*   file_name name of the xlsx file
*   sheet_number sheet number - default is 0



### Result

An RSS2 feed with all the desired cells. Title tag is the line number, other tags have the name of the column and the value of the corresponding cell (col,line).

For example, the items could be like
this: 
	<item>
		<title><![CDATA[4]]></title>
		<G><![CDATA[Oranges]]></G>
		<H><![CDATA[38]]></H>

		<I><![CDATA[EUR]]></I>
	</item>
	<item>
		<title><![CDATA[5]]></title>
		<G><![CDATA[Pommes]]></G>
		<H><![CDATA[41]]></H>
		<I><![CDATA[DOLAR]]></I>
	</item>

### Requirements

The following requirements should be met prior to using
PHPExcel: 
* PHP version 5.2 or higher

* oof components and silex

### Installation

- copy includes/phpexcel/ folder into [silex installation folder]/cgi/includes/

- copy excel_compute.php to [silex installation folder]/cgi/scripts/

### Test

- copy test_xls.xlsx in [silex installation folder]/media/

- call the script like


### Help

- call the script without any parameter to display help