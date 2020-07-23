---
layout: post
title: Ultralign

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags: []


_itemCurrentVersion: beta1.3
_wp_old_slug: ''
_selectedProject: Silex
_selectedVersionsArray: v1.6.1
_itemCurrentFileName: Ultralign.zip
_epLastError: ''
_epLastMessage: ''
_edit_last: '20'

display_name: yannick
first_name: ''
last_name: ''
permalink: "/ultralign/"
---

[![]({{ site.baseurl }}/assets/plugin1.png "plugin")](https://www.silexlabs.org/?attachment_id=24222)

This component align components to the stage borders, scene borders or to the component position.

Installation
------------

To use this component, you must first install it on your silex server and then activate it for your publication or for the entire server.

Properties
----------

*   ### Anchor Point
    
    The point to align the components to. Might be one of the scene or stage corners or the ultralign component himself.
    
*   ### Aligned Components
    
    Lists all the names of the components which must be aligned by the ultralign components. It can be others ultralign components.
    
*   ### Xoffsets
    
    Lists all the x offsets of the aligned components, for instance the first Xoffset in the lists is the Xoffset of the first component in the Aligned Components lists.
    
*   ### Yoffsets
    
    Same for Yoffsets.
    
*   ### Positioning
    
    Determine how to align the aligned components, **absolut** moves all the components to the anchor point, **vertical** arrange the aligned components in a column where the first component in the Aligned Components list is at the top of the column, **horizontal** arrange them in a row, where the first component in the Aligned Components list is at the left of the row.
    

Illustration
------------

For the illustration, we have a green rectangle and a yellow ellipse. We are going to align them with the Ultralign component.

![]({{ site.baseurl }}/assets/2_components_to_align.png "2_components_to_align")

Let's see the different positioning (in the following examples, the anchor point is "self")
: 
**Absolut :**

![]({{ site.baseurl }}/assets/absolut_positioning.png "absolut_positioning")

**Horizontal :**

![]({{ site.baseurl }}/assets/horizontal-positioning.png "horizontal-positioning")

**Vertical :**

![]({{ site.baseurl }}/assets/vertical_positioning.png "vertical_positioning")

Let's see the different anchor point (in the following examples, positioning = absolut)

**SceneTopLeft :**

![]({{ site.baseurl }}/assets/scene_top_left.png "scene_top_left")

**SceneTopRight :**

![]({{ site.baseurl }}/assets/scene_top_right.png "scene_top_right")**SceneBottomLeft :**

![]({{ site.baseurl }}/assets/scene_bottom_left.png "scene_bottom_left")

**SceneBottomRight :**

![]({{ site.baseurl }}/assets/scene_bottom_right.png "scene_bottom_right")

_**Note :**_ it's exactly the same principle for stage anchor point.

Notes
-----

*   You can change the  x and y position of the ultralign component only if the anchor point is on "self"

*   You can align several ultralign components only if the ultralign components aligned to another one have their anchor point on "self"