---
author: koala
comments: true
date: 2010-12-22 10:36:46+00:00
excerpt: "<img class=\"size-full wp-image-1634 alignnone\" title=\"plugin\" src=\"\
  https://www.silexlabs.org/wp-content/uploads/2010/12/plugin.png\" alt=\"\" width=\"\
  180\" height=\"85\" /><h3 style=\"text-align: left;\">Description</h3>\
  <span style=\"font-weight: normal;\">This plugin is used to import pdf files\
  \ into a template publication.</span><h3>Download</h3>Source\
  \ files are available here : <a href=\"https://www.silexlabs.org/wp-content/uploads/2010/12/pdfImport-sources.zip\"\
  >PDF import plugin for Silex - sources</a><!-- more --><h3>Installation</h3>\
  To use this plugin, you need first to install SWFTools on the server.\
  <h4>SWFTools Install</h4><strong>On Windows</strong>, download windows\
  \ version (binary) on SWFTools official website: <a href=\"http://www.swftools.org/\"\
  \ target=\"_blank\">http://www.swftools.org/</a>Or you can download\
  \ SWFTools for Windows from Silex Labs server here  <a href=\"https://www.silexlabs.org/wp-content/uploads/2010/12/swftools-0.9.1-windows.zip\"\
  >swftools-0.9.1-windows</a>Then install it to C:SWFTools.\
  !!! <strong>Make sure to not install it to the default path C:Program FilesSWFTools\
  \ !!!</strong><strong>On Mac OSX</strong>, XCode should be installed\
  \ first. It is normally already installed on most Macs.Then a compiler\
  \ such as macports needs to be installed.Downlad and launch the DMG\
  \ disk image from <a href=\"http://www.macports.org/\" target=\"_blank\">http://www.macports.org/</a>\
  \ .Then download linux version from SWFTools official website: <a href=\"\
  http://www.swftools.org/\" target=\"_blank\">http://www.swftools.org/</a>\
  Or you can download SWFTools for Mac os from Silex Labs server here <a title=\"\
  Or you can download SWFTools for Mac os from Silex Labs server\" href=\"https://www.silexlabs.org/wp-content/uploads/2010/12/swftools-0.9.1.tar.gz\"\
  >swftools-0.9.1.tar</a>Then install it, by opening Terminal (it is under\
  \ Applications &gt; Tools) and running following command:sudo port install\
  \ swftools<em><strong>Note :</strong></em> you must running at minima\
  \ a 10.6 Mac OS version<strong>On Linux</strong>, download the Linux\
  \ version of SWFTools (swftools-0.x.x.tar.gz) from SWFTools official website:<a\
  \ href=\" http://www.swftools.org/\" target=\"_blank\"> http://www.swftools.org/</a>\
  Then compile the source files:<p style=\"padding-left: 30px;\"\
  >Type on the command-line:</p><p style=\"padding-left: 60px;\">tar -xzf\
  \ swftools-0.x.x.tar.gz</p><p style=\"padding-left: 60px;\">cd swftools-0.x.x</p>\
  <p style=\"padding-left: 60px;\">./configure</p><p style=\"padding-left:\
  \ 60px;\">make</p><p style=\"padding-left: 60px;\">make install</p>\
  <strong>Plugin Install:</strong>On Windows, MacOSX and Linux just\
  \ copy the pdfImport folder into your silex's server's plugin directory.\
  <h4>Template install:</h4>Publication templates specific to pdfImport\
  \ plugin have to be added in the server before importing a pdf.They\
  \ can be found here: <a href=\"http://exchange.silexlabs.org\">http://exchange.silexlabs.org</a>\
  They have to be placed in servercontents_themes folder.<h3>Access</h3>\
  There are two possible ways to access this plugin:<ul>\
  <li>access via standalone mode:</li></ul><p style=\"padding-left:\
  \ 30px;\">server/plugins/pdfImport/standalone.php</p><p style=\"padding-left:\
  \ 30px;\">You do not need to be connected to use this mode.</p><ul>\
  <li>access via the manager</li></ul><p style=\"padding-left:\
  \ 30px;\">You need to be connected to use this mode</p><h3>Settings</h3>\
  <h4>Plugin activation:</h4>Go to your server's manager click on\
  \ Settings &gt; Plugins &gt; Activate a plugin, choose PDFImport plugin and click\
  \ on \"confirm\".<h4>Path to SWFTools parameter setting</h4>\
  (only if accessed via manager. If accessed via standalone mode, to be done by sever\
  \ admin):<h5>Value:</h5>The \"Path to SWFTools\" parameter needs\
  \ also to be filled with the path where SWFTools has been installed.\
  Using the method provided above, the path should be C:SWFTools on Windows, and /opt/local/bin/\
  \ on MacOSX.On MacOSX and Linux, the path can be found by opening a\
  \ terminal and entering the following command: \"which pdf2swf\" or \"whereis pdf2swf\"\
  .The correct path is given by removing the \"pdf2swf\" string to the\
  \ output.<h5>UI setting:</h5>Then to access the plugin, go to\
  \ Settings &gt; Plugins &gt; pdfImport.<h5>Manual setting:</h5>\
  It is also possible to set it in silex_server/contents_utilities/manager/conf.txt\
  \ and adding the following line:pathToSWFTools = '/opt/local/bin';\
  <h4><strong>Linux server safe mode specific settings:</strong></h4>\
  When the server is in safe mode, following issues can happen:<h5><strong>Owner\
  \ issue:</strong></h5>When safe mode is activated on the server, make\
  \ sure that both silex server and plugins files and directories have the same owner\
  \ than the one executing the scripts. To do so, you can use following command on\
  \ your silex server or plugin root and replace \"user\" and \"group\" by the correct\
  \ values:\"chown -R user:group .\"<h5><strong>SwfTools execution\
  \ issue:</strong></h5>If safe mode is activated, possible execution durectories\
  \ are stored in php.ini safe_mode_exec_dir directive.Update its value\
  \ accordingly :safe_mode_exec_dir = \"/usr/local/bin\"The\
  \ most secure way to do would be to copy all swftools scripts from \"/usr/local/bin\"\
  \ to \"/usr/local/bin/swftools\" and then update php.inisafe_mode_exec_dir\
  \ = \"/usr/local/bin/swftools\"In that case, do not for get to update\
  \ manager's plugin's pathToSWFTools parameter accordingly:pathToSWFTools\
  \ = '/opt/local/bin/swftools';<h5><strong>Generic issues:</strong></h5>\
  To resolve installation or execution problem, try using chmod on you plugin\
  \ dir:chmod 755 (or chmod 777 for testing thus it is not recommended\
  \ for production environement))<h3>Use</h3>Fill the form with\
  \ needed parameters:Publication name: the name of the publication to\
  \ be created.Select a PDF: the pdf file to be imported in the publication.\
  \ If it is not already on the server, upload it by a using the next form.\
  Upload a PDF: form to upload a pdf to the server, either via ftp (access via\
  \ manager) or php upload (standalone mode).Select a template: theme\
  \ to be used to generate publication.Advanced settings: avanced pdf\
  \ import plugin parametersOnce the publication has been generated with\
  \ the pdf data, click the link to access the publication.<div id=\"_mcePaste\"\
  ><strong>Advanced parameters</strong></div><div id=\"_mcePaste\">\
  <ul><li>Use as: Allows you to choose wether the pages will be extracted\
  \ in the SWF or in the JPG format.</li><li>Whole document /specified range:\
  \ If you select \"Whole Document\", the whole PDF file will get imported. If you\
  \ select \"Specified Range\", you will be given the possibility to choose a range\
  \ of pages to import.</li><li>First/Last page to extract: Use when selecting\
  \ \"specified range\" to specify the range of pages to be imported.</li>\
  <li>Has double pages : Should we take two pages from the PDF file to put the first\
  \ one on the left of the SILEX page and the second one on the right of the SILEX\
  \ page.</li><li>SWF files' name prefix: The name of the pictures representing\
  \ pages. The number of the page will get appended to it.</li><li>SWF directory:\
  \ The folder in which the generated pictures should be placed (e.g: media/myPublication)</li>\
  <li>Layer's name: The name of the layers generated. The number of the left\
  \ page is appended to it.</li><li>First Silex page to include into: The\
  \ number of the Silex page in which to include the first page extracted from PDF</li>\
  </ul></div><div id=\"_mcePaste\"><h3>Important\
  \ Note</h3></div><div id=\"_mcePaste\">Everything that is in\
  \ a vectorial form in the PDF file is going to get transformed into a bitmap. As\
  \ a result of this, if texts are vectorized in the PDF, they are going to be transformed\
  \ into a bitmap resulting in a bad quality rendering, particularly when zooming\
  \ on elements.</div><div id=\"_mcePaste\">Also, bitmaps are compressed\
  \ and, as such, some artefacts can appear on them. Those artefacts are going to\
  \ be particularly visible when zooming.</div><div id=\"_mcePaste\">Users\
  \ are advised to let texts as texts instead of converting them to vectors.</div>"
layout: post
link: https://www.silexlabs.org/pdf-import-plugin/
slug: pdf-import-plugin
title: PDF import plugin
wordpress_id: 1387
categories:
- "Plugins"
---

![](https://www.silexlabs.org/wp-content/uploads/2010/12/plugin.png)


### Description


				This plugin is used to import pdf files into a template publication.


### Download


				Source files are available here : [PDF import plugin for Silex - sources](https://www.silexlabs.org/wp-content/uploads/2010/12/pdfImport-sources.zip)

				<!-- more -->


### Installation


				To use this plugin, you need first to install SWFTools on the server.


#### SWFTools Install


				**On Windows**, download windows version (binary) on SWFTools official website: [http://www.swftools.org/](http://www.swftools.org/)

				Or you can download SWFTools for Windows from Silex Labs server here  [swftools-0.9.1-windows](https://www.silexlabs.org/wp-content/uploads/2010/12/swftools-0.9.1-windows.zip)

				Then install it to C:SWFTools.

				!!! **Make sure to not install it to the default path C:Program FilesSWFTools !!!**

				**On Mac OSX**, XCode should be installed first. It is normally already installed on most Macs.

				Then a compiler such as macports needs to be installed.

				Downlad and launch the DMG disk image from [http://www.macports.org/](http://www.macports.org/) .

				Then download linux version from SWFTools official website: [http://www.swftools.org/](http://www.swftools.org/)

				Or you can download SWFTools for Mac os from Silex Labs server here [swftools-0.9.1.tar](https://www.silexlabs.org/wp-content/uploads/2010/12/swftools-0.9.1.tar.gz)

				Then install it, by opening Terminal (it is under Applications > Tools) and running following command:

				sudo port install swftools

				_**Note :**_ you must running at minima a 10.6 Mac OS version

				**On Linux**, download the Linux version of SWFTools (swftools-0.x.x.tar.gz) from SWFTools official website:[ http://www.swftools.org/]( http://www.swftools.org/)

				Then compile the source files:


Type on the command-line:




tar -xzf swftools-0.x.x.tar.gz




cd swftools-0.x.x




./configure




make




make install


				**Plugin Install:**

				On Windows, MacOSX and Linux just copy the pdfImport folder into your silex's server's plugin directory.


#### Template install:


				Publication templates specific to pdfImport plugin have to be added in the server before importing a pdf.

				They can be found here: [http://exchange.silexlabs.org](http://exchange.silexlabs.org)

				They have to be placed in servercontents_themes folder.


### Access


				There are two possible ways to access this plugin:




  * access via standalone mode:




server/plugins/pdfImport/standalone.php




You do not need to be connected to use this mode.







  * access via the manager




You need to be connected to use this mode





### Settings




#### Plugin activation:


				Go to your server's manager click on Settings > Plugins > Activate a plugin, choose PDFImport plugin and click on "confirm".


#### Path to SWFTools parameter setting


				(only if accessed via manager. If accessed via standalone mode, to be done by sever admin):


##### Value:


				The "Path to SWFTools" parameter needs also to be filled with the path where SWFTools has been installed.

				Using the method provided above, the path should be C:SWFTools on Windows, and /opt/local/bin/ on MacOSX.

				On MacOSX and Linux, the path can be found by opening a terminal and entering the following command: "which pdf2swf" or "whereis pdf2swf".

				The correct path is given by removing the "pdf2swf" string to the output.


##### UI setting:


				Then to access the plugin, go to Settings > Plugins > pdfImport.


##### Manual setting:


				It is also possible to set it in silex_server/contents_utilities/manager/conf.txt and adding the following line:

				pathToSWFTools = '/opt/local/bin';


#### **Linux server safe mode specific settings:**


				When the server is in safe mode, following issues can happen:


##### **Owner issue:**


				When safe mode is activated on the server, make sure that both silex server and plugins files and directories have the same owner than the one executing the scripts. To do so, you can use following command on your silex server or plugin root and replace "user" and "group" by the correct values:

				"chown -R user:group ."


##### **SwfTools execution issue:**


				If safe mode is activated, possible execution durectories are stored in php.ini safe_mode_exec_dir directive.

				Update its value accordingly :

				safe_mode_exec_dir = "/usr/local/bin"

				The most secure way to do would be to copy all swftools scripts from "/usr/local/bin" to "/usr/local/bin/swftools" and then update php.ini

				safe_mode_exec_dir = "/usr/local/bin/swftools"

				In that case, do not for get to update manager's plugin's pathToSWFTools parameter accordingly:

				pathToSWFTools = '/opt/local/bin/swftools';


##### **Generic issues:**


				To resolve installation or execution problem, try using chmod on you plugin dir:

				chmod 755 (or chmod 777 for testing thus it is not recommended for production environement))


### Use


				Fill the form with needed parameters:

				Publication name: the name of the publication to be created.

				Select a PDF: the pdf file to be imported in the publication. If it is not already on the server, upload it by a using the next form.

				Upload a PDF: form to upload a pdf to the server, either via ftp (access via manager) or php upload (standalone mode).

				Select a template: theme to be used to generate publication.

				Advanced settings: avanced pdf import plugin parameters

				Once the publication has been generated with the pdf data, click the link to access the publication.


**Advanced parameters**









  * Use as: Allows you to choose wether the pages will be extracted in the SWF or in the JPG format.


  * Whole document /specified range: If you select "Whole Document", the whole PDF file will get imported. If you select "Specified Range", you will be given the possibility to choose a range of pages to import.


  * First/Last page to extract: Use when selecting "specified range" to specify the range of pages to be imported.


  * Has double pages : Should we take two pages from the PDF file to put the first one on the left of the SILEX page and the second one on the right of the SILEX page.


  * SWF files' name prefix: The name of the pictures representing pages. The number of the page will get appended to it.


  * SWF directory: The folder in which the generated pictures should be placed (e.g: media/myPublication)


  * Layer's name: The name of the layers generated. The number of the left page is appended to it.


  * First Silex page to include into: The number of the Silex page in which to include the first page extracted from PDF










### Important Note







Everything that is in a vectorial form in the PDF file is going to get transformed into a bitmap. As a result of this, if texts are vectorized in the PDF, they are going to be transformed into a bitmap resulting in a bad quality rendering, particularly when zooming on elements.




Also, bitmaps are compressed and, as such, some artefacts can appear on them. Those artefacts are going to be particularly visible when zooming.




Users are advised to let texts as texts instead of converting them to vectors.
