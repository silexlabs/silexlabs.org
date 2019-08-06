---
author: "admin"
comments: true
date: "2009-08-01T18:02:49.000Z"
layout: "post"
title: "Excel plugin for silex"
categories: ["Plugins"]

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


