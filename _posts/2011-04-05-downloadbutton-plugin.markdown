---
author: Benjamin
comments: true
date: 2011-04-05 15:59:06+00:00
excerpt: "<div id=\"_mcePaste\"><h3><a rel=\"attachment wp-att-16135\" href=\"\
  https://www.silexlabs.org/?attachment_id=16135\"><img class=\"alignnone size-full\
  \ wp-image-16135\" title=\"plugin\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/04/plugin.png\"\
  \ alt=\"\" width=\"180\" height=\"85\" /></a></h3><h3>DownloadButton Plugin</h3>\
  <strong>Description</strong></div><div id=\"_mcePaste\"\
  ><div id=\"_mcePaste\">This plugin adds the DownloadButton component to\
  \ your SILEX Server.</div><div id=\"_mcePaste\">This button can be added\
  \ to download a PDF file that was imported with PDF2SWF or it can also be forced\
  \ to download any other file.</div></div><div id=\"_mcePaste\"\
  ><strong>Properties:</strong></div><div id=\"_mcePaste\"><ul>\
  <li>fileURL:The fileURL property allows you to set the file to\
  \ download. This file can only be located inside your silex server and the user\
  \ must have the right to read it. For these reasons, the media folder seems to be\
  \ a very good choice.</li><li>forceDownload:When this parameter\
  \ is set to true (checked), clicking on the button will ensure that the user's browser's\
  \ download dialog is shown. When it is set to false (unchecked), the URL is open\
  \ in a new page allowing the browser to directly display the file if it can.</li>\
  </ul></div><div id=\"_mcePaste\"><strong>Working with\
  \ PDFImport:</strong></div><div id=\"_mcePaste\">You can easily retrieve\
  \ the URL of the imported PDF file by using the following accessor in fileURL:</div>\
  <div id=\"_mcePaste\">&lt;&lt;silex.config.importedPDFFile&gt;&gt;</div>"
layout: post
link: https://www.silexlabs.org/downloadbutton-plugin/
slug: downloadbutton-plugin
title: DownloadButton plugin
wordpress_id: 15217
categories:
- "Plugins"
---




### [![](https://www.silexlabs.org/wp-content/uploads/2011/04/plugin.png)](https://www.silexlabs.org/?attachment_id=16135)




### DownloadButton Plugin


				**Description**









This plugin adds the DownloadButton component to your SILEX Server.




This button can be added to download a PDF file that was imported with PDF2SWF or it can also be forced to download any other file.







**Properties:**









  * fileURL:
				The fileURL property allows you to set the file to download. This file can only be located inside your silex server and the user must have the right to read it. For these reasons, the media folder seems to be a very good choice.


  * forceDownload:
				When this parameter is set to true (checked), clicking on the button will ensure that the user's browser's download dialog is shown. When it is set to false (unchecked), the URL is open in a new page allowing the browser to directly display the file if it can.







**Working with PDFImport:**




You can easily retrieve the URL of the imported PDF file by using the following accessor in fileURL:




<<silex.config.importedPDFFile>>
