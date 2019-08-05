---
author: admin
comments: true
date: 2009-08-01 18:02:49+00:00
excerpt: "<h1>Sources</h1>version 1.0 : <a href=\"http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-plugin-for-silex.zip\"\
  \ target=\"_blank\">excel plugin for silex</a>version 1.1 : <a href=\"\
  http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-plugin-for-silex-v111.zip\"\
  >excel-plugin-for-silex-v1.1</a><h2>Versions</h2>v1.0<span>\
  \ </span><ul><li>2009/08/01</li></ul>v1.1<span>\
  \ </span><ul><li>2010/03/04</li><li>xls and xlsx support\
  \ in excel_compute script</li></ul><h3>Presentation</h3>\
  Use PHPExcel to set values  and get values from an Excel sheet. The result\
  \ is an RSS feed which you can use in Silex with the Oof RSSConnector component.\
  \ Formulas of the cells are interpreted thanks to <a title=\"phpExcel\" href=\"\
  http://www.codeplex.com/PHPExcel\" target=\"_blank\">phpExcel</a>.You\
  \ can set the values you want and get other cells which are supposed to contain\
  \ the result.<h3>Example</h3>For example if you want to display\
  \ a list of prices for some fruits at a given date:<img class=\"aligncenter\
  \ size-full wp-image-254\" title=\"excel-example\" src=\"http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-example.jpg\"\
  \ alt=\"excel-example\" width=\"295\" height=\"153\" />Let's say the\
  \ day is set in excel in the column A1, the labels are in the column B and the prices\
  \ are formulas in the column C. You want to display a list with all fruits and their\
  \ prices.So you simply put the Oof components on the Stage in silex:\
  <ul><li>RSSConnector<ul><li>URL prefix = &lt;\
  \ &lt; silex.rootUrl&gt; &gt; /cgi/scripts/</li></ul></li>\
  <li>DataSelector<ul><li>enter the connector and list\
  \ names</li><li>source = excel_compute.php?set_values=A2:DATE&amp;get_values=B2-C5&amp;file_name=media/test_xls.xlsx\
  \ - but replace \"DATE\" by the date you want (if it is different from the one which\
  \ is in the excel file allready). The \"DATE\" value can be entered by the user\
  \ for exemple or be the date of today (use silex accessors)</li></ul>\
  </li><li>RichTextList<ul><li>cell content\
  \ = &lt; &lt; B&gt; &gt;  costs &lt; &lt; C&gt; &gt;  Euros</li></ul>\
  </li></ul>It makes this happend:<p style=\"\
  text-align: center;\"><img class=\"aligncenter size-large wp-image-257\" title=\"\
  excel-example2\" src=\"http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-example2-1024x549.jpg\"\
  \ alt=\"excel-example2\" width=\"717\" height=\"384\" /></p><h2>The\
  \ script which you call with the Oof components</h2><h3>Inputs</h3>\
  <div><div><ul><li>set_values a suite of cell\
  \ names and value pairs - e.g. C1:21,C2:test,C3:6</li><li>get_values values\
  \ to be retrurned - may be a range - e.g. A1,C2-F15,G6</li><li>file_name\
  \ name of the xlsx file</li><li>sheet_number sheet number - default is\
  \ 0</li><li>example excel_compute.php?set_values=C3:654,C4:444&amp;get_values=C11&amp;file=media/btt.xlsx\
  \ =&gt; retrieve the value of C11 when C3 is set to 654 and C4 is set to 444</li>\
  <li>example excel_compute.php?set_values=C3:333,C4:444&amp;get_values=C11,C13,C14&amp;file_name=media/btt.xlsx</li>\
  </ul></div></div><h3>Result</h3>\
  An RSS2 feed with all the desired cells. Title tag is the line number, other tags\
  \ have the name of the column and the value of the corresponding cell (col,line).\
  For example, the items could be like this:<pre><pre\
  \ id=\"line19\">&lt;<span class=\"start-tag\">item</span>&gt;&lt;<span\
  \ class=\"start-tag\">title</span>&gt;<span class=\"cdata\">&lt;![CDATA[4]]&gt;</span>&lt;/<span\
  \ class=\"end-tag\">title</span>&gt;&lt;<span class=\"start-tag\">G</span>&gt;<span\
  \ class=\"cdata\">&lt;![CDATA[Oranges]]&gt;</span>&lt;/<span class=\"end-tag\">G</span>&gt;\
  &lt;<span class=\"start-tag\">H</span>&gt;<span class=\"cdata\">&lt;![CDATA[38]]&gt;</span>&lt;/<span\
  \ class=\"end-tag\">H</span>&gt;</pre><pre id=\"line28\">&lt;<span\
  \ class=\"start-tag\">I</span>&gt;<span class=\"cdata\">&lt;![CDATA[EUR]]&gt;</span>&lt;/<span\
  \ class=\"end-tag\">I</span>&gt;&lt;/<span class=\"end-tag\">item</span>&gt;\
  &lt;<span class=\"start-tag\">item</span>&gt;&lt;<span class=\"\
  start-tag\">title</span>&gt;<span class=\"cdata\">&lt;![CDATA[5]]&gt;</span>&lt;/<span\
  \ class=\"end-tag\">title</span>&gt;&lt;<span class=\"start-tag\">G</span>&gt;<span\
  \ class=\"cdata\">&lt;![CDATA[Pommes]]&gt;</span>&lt;/<span class=\"end-tag\">G</span>&gt;\
  &lt;<span class=\"start-tag\">H</span>&gt;<span class=\"cdata\">&lt;![CDATA[41]]&gt;</span>&lt;/<span\
  \ class=\"end-tag\">H</span>&gt;&lt;<span class=\"start-tag\">I</span>&gt;<span\
  \ class=\"cdata\">&lt;![CDATA[DOLAR]]&gt;</span>&lt;/<span class=\"end-tag\">I</span>&gt;\
  &lt;/<span class=\"end-tag\">item</span>&gt;</pre></pre>\
  <h3>Requirements</h3>The following requirements should be met prior\
  \ to using PHPExcel:* PHP version 5.2 or higher* oof components\
  \ and silex<h3>Installation</h3>- copy includes/phpexcel/ folder\
  \ into [silex installation folder]/cgi/includes/- copy excel_compute.php\
  \ to [silex installation folder]/cgi/scripts/<h3>Test</h3>-\
  \ copy test_xls.xlsx in [silex installation folder]/media/- call the\
  \ script like this: http://mysilexserver.com/cgi/scripts/excel_compute.php?set_values=H3:25,H4:38&amp;get_values=H7,H8,H10,H12&amp;file_name=media/test_xls.xlsx\
  <h3>Help</h3>- call the script without any parameter to display\
  \ help"
layout: post
link: https://www.silexlabs.org/excel-plugin-for-silex/
slug: excel-plugin-for-silex
title: Excel plugin for silex
wordpress_id: 250
categories:
- "Plugins"
---

# Sources


				version 1.0 : [excel plugin for silex](http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-plugin-for-silex.zip)

				version 1.1 : [excel-plugin-for-silex-v1.1](http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-plugin-for-silex-v111.zip)


## Versions


				v1.0




  * 2009/08/01


				v1.1




  * 2010/03/04


  * xls and xlsx support in excel_compute script




### Presentation


				Use PHPExcel to set values  and get values from an Excel sheet. The result is an RSS feed which you can use in Silex with the Oof RSSConnector component. Formulas of the cells are interpreted thanks to [phpExcel](http://www.codeplex.com/PHPExcel).

				You can set the values you want and get other cells which are supposed to contain the result.


### Example


				For example if you want to display a list of prices for some fruits at a given date:
				![excel-example](http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-example.jpg)

				Let's say the day is set in excel in the column A1, the labels are in the column B and the prices are formulas in the column C. You want to display a list with all fruits and their prices.

				So you simply put the Oof components on the Stage in silex:




  * RSSConnector


    * URL prefix = < < silex.rootUrl> > /cgi/scripts/





  * DataSelector


    * enter the connector and list names


    * source = excel_compute.php?set_values=A2:DATE&get_values=B2-C5&file_name=media/test_xls.xlsx - but replace "DATE" by the date you want (if it is different from the one which is in the excel file allready). The "DATE" value can be entered by the user for exemple or be the date of today (use silex accessors)





  * RichTextList


    * cell content = < < B> >  costs < < C> >  Euros





				It makes this happend:


![excel-example2](http://wp-manager.silex-ria.org/wp-content/uploads/2009/08/excel-example2-1024x549.jpg)





## The script which you call with the Oof components




### Inputs












  * set_values a suite of cell names and value pairs - e.g. C1:21,C2:test,C3:6


  * get_values values to be retrurned - may be a range - e.g. A1,C2-F15,G6


  * file_name name of the xlsx file


  * sheet_number sheet number - default is 0


  * example excel_compute.php?set_values=C3:654,C4:444&get_values=C11&file=media/btt.xlsx => retrieve the value of C11 when C3 is set to 654 and C4 is set to 444


  * example excel_compute.php?set_values=C3:333,C4:444&get_values=C11,C13,C14&file_name=media/btt.xlsx










### Result


				An RSS2 feed with all the desired cells. Title tag is the line number, other tags have the name of the column and the value of the corresponding cell (col,line).

				For example, the items could be like this:





    	<<span class="start-tag">item</span>>
    				<<span class="start-tag">title</span>><span class="cdata"><![CDATA[4]]></span></<span class="end-tag">title</span>>
    				<<span class="start-tag">G</span>><span class="cdata"><![CDATA[Oranges]]></span></<span class="end-tag">G</span>>
    				<<span class="start-tag">H</span>><span class="cdata"><![CDATA[38]]></span></<span class="end-tag">H</span>>




    		<<span class="start-tag">I</span>><span class="cdata"><![CDATA[EUR]]></span></<span class="end-tag">I</span>>
    				</<span class="end-tag">item</span>>
    				<<span class="start-tag">item</span>>
    				<<span class="start-tag">title</span>><span class="cdata"><![CDATA[5]]></span></<span class="end-tag">title</span>>
    				<<span class="start-tag">G</span>><span class="cdata"><![CDATA[Pommes]]></span></<span class="end-tag">G</span>>
    				<<span class="start-tag">H</span>><span class="cdata"><![CDATA[41]]></span></<span class="end-tag">H</span>>
    				<<span class="start-tag">I</span>><span class="cdata"><![CDATA[DOLAR]]></span></<span class="end-tag">I</span>>
    				</<span class="end-tag">item</span>>







### Requirements


				The following requirements should be met prior to using PHPExcel:

				* PHP version 5.2 or higher

				* oof components and silex


### Installation


				- copy includes/phpexcel/ folder into [silex installation folder]/cgi/includes/

				- copy excel_compute.php to [silex installation folder]/cgi/scripts/


### Test


				- copy test_xls.xlsx in [silex installation folder]/media/

				- call the script like this: http://mysilexserver.com/cgi/scripts/excel_compute.php?set_values=H3:25,H4:38&get_values=H7,H8,H10,H12&file_name=media/test_xls.xlsx


### Help


				- call the script without any parameter to display help
