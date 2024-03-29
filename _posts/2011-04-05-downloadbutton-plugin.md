---
layout: post
title: DownloadButton plugin

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags: []

_epLastMessage: ''
_itemCurrentVersion: '1.2'
_selectedProject: Silex
_selectedVersionsArray: v1.6.1

_itemCurrentFileName: downloadButton.zip
_wp_old_slug: ''
color: orange

display_name: Benjamin
first_name: ''
last_name: ''
permalink: "/downloadbutton-plugin/"
---

### [![]({{ site.baseurl }}/assets/plugin.png "plugin")](https://www.silexlabs.org/?attachment_id=16135)

### DownloadButton Plugin

**Description**

This plugin adds the DownloadButton component to your SILEX Server.

This button can be added to download a PDF file that was imported with PDF2SWF or it can also be forced to download any other file.

**Properties:**

*  
fileURL:  
    The fileURL property allows you to set the file to download. This file can only be located inside your silex server and the user must have the right to read it. For these reasons, the media folder seems to be a very good choice.
*  
forceDownload:  
    When this parameter is set to true (checked), clicking on the button will ensure that the user's browser's download dialog is shown. When it is set to false (unchecked), the URL is open in a new page allowing the browser to directly display the file if it can.

**Working with PDFImport:**

You can easily retrieve the URL of the imported PDF file by using the following accessor in
fileURL: 
<<silex.config.importedPDFFile>>