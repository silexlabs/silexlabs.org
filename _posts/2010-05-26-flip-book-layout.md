---
layout: post
title: Flip book animation layout

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Layouts
tags:
- flip
- flip book

_itemCurrentVersion: v1.1
_itemCurrentFileName: ''
_selectedProject: Silex
_selectedVersionsArray: v1.6.0,v1.6.1
_epLastMessage: ''
_epLastError: ''

_edit_last: '11'

display_name: Silex Labs
first_name: Silex Labs
last_name: ''
permalink: "/flip-book-layout/"
---

_![]({{ site.baseurl }}/assets/flip.png "flip")_

### **Description:**

This is the flip book animation layout plugin.

Flip layout plugin emulates real paper books pages flip. You can use Silex to design the pages of this Flash flip book, often called an e-catalog or a web magazine.

### **flipBook_plugin.zip** **content:**

- index.php
: contains the php necessary to load the plugin. It waits for the hook SilexAdminApiReady to be called.

- layouts folder
: contains the flip.swf layout

- media/flip
folder: contains the flip sound files

[flipbookplugin](https://www.silexlabs.org/3209/exchange/exchange-silex/layouts/flip-book-layout/attachment/flipbookplugin/)

### Sources

They can be found on following subversion


### Installation

Installation of the layout

*   download and unzip flip.zip from http://wp-manager.silexlabs.org/?p=648
*   paste "flip.swf" into Silex "layouts/" folder
*   paste "plugins/flipBook" folder to the plugins server of your silex server
*   paste media/flip folder to the media folder of your silex server

Installation of the test site

*   download and unzip "flip-sources.zip" from http://wp-manager.silexlabs.org/?p=648
*   paste "bin/flip.swf" into Silex "layouts/" folder
*   paste "contents/flip/" into Silex "contents/" folderof your silex server
*   paste "plugins/flipBook" folder to the plugins server of your silex server

### Use

The flip configuration is stored into your publication configuration - in the manager, section "advanced parameters". As an example, with the following params for a
publication: 
flipWidth=910
flipHeight=628
flipPosX=50
flipPosY=65
flipAlign=TopLeft
flipDuration=50
flipRichTextListName=RichTextList
GRADIENT_OVER_COLORS=0xFF0000,0x00FF00,0x0000FF

you will see this
result: 
[caption id="" align="alignnone" width="559" caption="Example of how the flip book layout can be configured"]![Example of how the flip book layout can be configured]({{ site.baseurl }}/assets/rvbflipbookwithsilex.jpg "Example of how the flip book layout can be configured")[/caption]

### **Parameters**

Add the flip configuration data into your publication configuration (in the manager, section "advanced parameters")

flipWidth (using snapShotTool_imageWidth parameter)

> width of the page (or double page) of the web magazine, which is the part of the publication which will have a "flip book" effect during transition.  
>
example: flipWidth=910

flipHeight (using snapShotTool_imageHeight parameter)

> height of the page (or double page) of the web magazine, which is the part of the publication which will have a "flip book" effect during transition.
> 
>
example: flipHeight=620

flipPosX (using snapShotTool_imageX parameter)

> x position of the page (or double page) of the web magazine in the publication, i.e. the x coordinate of the top left corner of the flip book.
> 
>
example: flipPosX=50

flipPosY (using snapShotTool_imageY parameter)

> y position of the page (or double page) of the web magazine in the publication, i.e. the x coordinate of the bottom left corner of the flip book.
> 
>
example: flipPosY=200

flipPreviewImageExtension (using snapShotTool_imageType parameter)

> Extension of the image previews of the pages. It may be jpg or png. The preview is displayed while the page is turning.
> 
> optional
> 
>
examples: flipPreviewImageExtension=jpg or flipPreviewImageExtension=png

snapShotTool_layoutDepth

> depth of the layout to be taken as snapshot source, and which gives its name to the image.
> 
>
example: when the user takes a snapshot of page /start/layer1/layer1-1/, the picture will be named "start.png" if layoutDepth is set to 0, or "layer1.png" if layoutDepth is set to 1, or "layer1-1.png" if layoutDepth is set to 2
> 
> default is "0"

flipDuration

> duration of the transition between two pages, when it is automatically flipped (when the corner is notdragged)
> 
>
example: flipDuration=20

flipAlign

> Used as default corner to be flipped when using an internal link which opens a page of the flip book.

> Possible
values: TopLeft, TopRight, BottomLeft, BottomRight

>
example: flipDuration=TopRight

flipRichTextListName

> name of the rich text list component (RichTextList.cmp.swf, part of the Oof components) which is used to store the pages list. The selection will be automatically set to the previous item when the user start to drag a corner but then cancel the page change. The list is expected to contain objects with an attribute "name" which is the name of the layout (silex page) and which is also the name of the preview, in contents/my.flip.book/my.page.name.jpg
> 
>
example: flipRichTextListName=myRichTextList

flipListObjectsPageNameField

Name of the field of the page name, in the items of the list.

Default is "name"

flipMovementSmoothingRatio

> Mouvement smoothing ratio which corresponds to the delay before the real corner position reaches the mouse position. Smooth the flip motion while dragging the page.  
> Recommended
values: between 0 and 10.

>
examples: flipMovementSmoothingRatio=3

pageTurnSoundUrl

Sound file used when turning the page.

Default
value: media/flip/turn.mp3

pageDragSoundUrl

Sound file used when dragging the page.

Default
value: media/flip/drag.mp3

Gradient
parameters: 
[![]({{ site.baseurl }}/assets/FlipBookGradient.jpg "FlipBookGradient")](https://www.silexlabs.org/?attachment_id=24911)

Here are parameters related to the shadow gradient applied over the "over" page, i.e. the page in the foreground which is beeing turned. For more information


*   GRADIENT_OVER_FILLTYPE
*   GRADIENT_OVER_COLORS
*   GRADIENT_OVER_ALPHAS
*   GRADIENT_OVER_RATIOS

Here are parameters related to the shadow gradient applied over the "under inside" page, i.e. the page which is beeing revealed (next page). For more information


*   GRADIENT_UNDERINSIDE_FILLTYPE
*   GRADIENT_UNDERINSIDE_COLORS
*   GRADIENT_UNDERINSIDE_ALPHAS
*   GRADIENT_UNDERINSIDE_RATIOS

Here are parameters related to the shadow gradient applied over the "under outside" page, i.e. the page which is beeing hidden (previous page). For more information


*   GRADIENT_UNDEROUTSIDE_FILLTYPE
*   GRADIENT_UNDEROUTSIDE_COLORS
*   GRADIENT_UNDEROUTSIDE_ALPHAS
*   GRADIENT_UNDEROUTSIDE_RATIOS

In the publication, open a page which uses "layouts/flip.swf" as the layout. In this page, you can add components in the corners with the following instructions on it. If the components are not icons, then you have to add an action on each of the components like "onRelease open:start/layer1/web.mag.page2". The flipAlign value is determined automatically if the flipRichTextListName is defined.

For the top left
corner: 
onPress layout.startFlip
onPress silex.config.flipAlign=TopLeft

For the top right
corner: 
onPress layout.startFlip
onPress silex.config.flipAlign=TopRight

For the bottom left
corner: 
onPress layout.startFlip
onPress silex.config.flipAlign=BottomLeft

For the bottom right
corner: 
onPress layout.startFlip
onPress silex.config.flipAlign=BottomRight

When you put an internal link which opens a page of the flip book, before opening the page, choose the corner which will automatically turned with these instructions. It is automatic if the flipRichTextListName is defined.  
silex.config.flipAlign=TopLeft  
or  
silex.config.flipAlign=TopRight  
or  
silex.config.flipAlign=BottomLeft  
or  
silex.config.flipAlign=BottomRight

### Licence

This contribution is released under the GPL
License: 
This program is free software; you can redistribute it and/or modify it under the terms of the GNU General Public License (GPL) as published by the Free Software Foundation; either version 2 of the License, or (at your option) any later version.

This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU General Public License for more details.

To read the license please visit http://www.gnu.org/copyleft/gpl.html

____________________________________________________________________

### To do List

*   sound
*   bug list
*   update l archive sur la platform + demo en ligne

### Known bugs

. repertoire themes (prendre l url avec le service web ou tenir compte de la variable content  
. documentation is obsolete?

---------------

flip bugs  
. bug preview  
. bug saut

Solutions  
- attendre fin preload 2 pages pour effacer le gabarit pr√©c√©dent / faire apparaitre le nouveau  
. bug preview pour pages connexes  
. bug saut  
- √©venement page suivante/precedent preload√©e  
. bug preview pour pages connexes  
- hook imagesLoaded + attendre fin chargement images pour effacer le gabarit pr√©c√©dent / faire apparaitre le nouveau  
. bug saut  
- bloquer le changement de page tant que la preview n'est pas charg√©e et relancer le changement apres  
. bug preview

____________________________________________________________________  
FLIP  
-> swf comme preview  
. script site_editor.php  
. CDF  
. doc et PreviewFileExt de la conf  
Enfin, la page start ne mène pas automatiquement à la page.1 pourtant

_______________________________