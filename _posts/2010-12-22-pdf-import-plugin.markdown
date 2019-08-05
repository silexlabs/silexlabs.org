---
author: "koala"
comments: true
date: "2010-12-22T10:36:46.000Z"
layout: "post"
link: "https://www.silexlabs.org/pdf-import-plugin/"
slug: "pdf-import-plugin"
title: "PDF import plugin"
wordpress_id: 1387
categories: ["Plugins"]

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

