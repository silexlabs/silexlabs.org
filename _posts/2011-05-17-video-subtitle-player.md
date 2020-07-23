---
layout: post
title: Video Subtitle Player (SRT Player)

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags: []

_selectedProject: Silex
_selectedVersionsArray: v1.6.0,v1.6.1
_itemCurrentVersion: '1.0'
_epLastError: ''
color: red

_itemCurrentFileName: plugin.zip
_wp_old_slug: ''

display_name: codam
first_name: codam
last_name: ''
permalink: "/video-subtitle-player/"
---

[![]({{ site.baseurl }}/assets/plugin1.png "plugin")](https://www.silexlabs.org/?attachment_id=49739)

### **Description**

This plugin adds a video player component supporting .srt subtitle files.

There are several remote skins provided with this player.

Here is the default
skin: 
[![]({{ site.baseurl }}/assets/SRTPlayerPreviewHQ.png "SRTPlayerPreviewHQ")](https://www.silexlabs.org/?attachment_id=49748)

### Installation

To install this plugin on a silex server, use the manager's plugin installer (exchange platform), or copy the snapshot plugin folder in the silex_server/plugins folder.

**Server activation (for all publications):**

In the server's manager go to "Settings > Plugins > Activate a plugin", click on the plugin icon and then on "confirm".

**Specific publication activation:**

In the server's manager go to "Manage", click on the publication on which the plugin should be activated, then click on "Plugins > Activate a plugin", and finally click on the plugin icon and then on "confirm".

### Use

**To add the SRT Player on the stage:**

*   click on the ViewMenu's Wysiwyg button
*   click on the layer where the component has to be added
*   click on "add component"
*   in the Audio/Video part select the SRT Player

**To configure the video and the subtitle:**

*   make sure the video and subtitle have been placed in the media/ directory of the silex server
*   select the wanted video file by clicking on subtitles file's url "edit" button
*   select the wanted subtitle file by clicking on video's url "edit" button

**To change the remote skin:**

*   select the wanted skin file by clicking on vplayer skin's url "edit" button
*   the remote skins are located in SRTPlayer/as2/SRTPlayer
*   the remote skins preview are visible on the right of the Wysiwyg

### Parameters

None

### Content

The snapshot plugin folder contains several
files: 
**index.php**

contains the php and the links to the swf files needed to load the plugin.

**directories**

*   **as2**
    *  
SRTPlayer.swf: the SRT Player swf which contains the needed AS2 classes
    *   SRTPlayer
directory: contains the 28 default Flash remote skins.

*   **descriptors**
    *  
SRTPlayer.xml: the SRT Player descriptor defining SRT Player parameters

*   **editors**
    *  
SRTPlayer.swf: the SRT Player specific editor used in the Wysiwig

*   **icons**
    *  
videoDisplay.swf: the video display Wysiwyg icon used by the SRT Player

*   **lang**
    *   contains the SRT Player translations files

  
  

### Sources

They can be found on following subversion


And also in this zip
