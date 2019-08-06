---
author: "yannick"
comments: true
date: "2011-04-20T08:29:23.000Z"
layout: "post"
title: "Ultralign"
categories: ["Plugins"]

---
[![](https://www.silexlabs.org/wp-content/uploads/2011/04/plugin1.png)](https://www.silexlabs.org/?attachment_id=24222)

This component align components to the stage borders, scene borders or to the component position.


## Installation


To use this component, you must first install it on your silex server and then activate it for your publication or for the entire server.


## Properties






  *


### Anchor Point


The point to align the components to. Might be one of the scene or stage corners or the ultralign component himself.


  *


### Aligned Components


Lists all the names of the components which must be aligned by the ultralign components. It can be others ultralign components.


  *


### Xoffsets


Lists all the x offsets of the aligned components, for instance the first Xoffset in the lists is the Xoffset of the first component in the Aligned Components lists.


  *


### Yoffsets


Same for Yoffsets.


  *


### Positioning


Determine how to align the aligned components, **absolut** moves all the components to the anchor point, **vertical** arrange the aligned components in a column where the first component in the Aligned Components list is at the top of the column, **horizontal** arrange them in a row, where the first component in the Aligned Components list is at the left of the row.


<!-- more -->


## Illustration


For the illustration, we have a green rectangle and a yellow ellipse. We are going to align them with the Ultralign component.

![](https://www.silexlabs.org/wp-content/uploads/2011/04/2_components_to_align.png)

Let's see the different positioning (in the following examples, the anchor point is "self") :

**Absolut :**

![](https://www.silexlabs.org/wp-content/uploads/2011/04/absolut_positioning.png)

**Horizontal :**

![](https://www.silexlabs.org/wp-content/uploads/2011/04/horizontal-positioning.png)

**Vertical :**

![](https://www.silexlabs.org/wp-content/uploads/2011/04/vertical_positioning.png)

Let's see the different anchor point (in the following examples, positioning = absolut)

**SceneTopLeft :**

![](https://www.silexlabs.org/wp-content/uploads/2011/04/scene_top_left.png)

**SceneTopRight :**

![](https://www.silexlabs.org/wp-content/uploads/2011/04/scene_top_right.png)**SceneBottomLeft :**

![](https://www.silexlabs.org/wp-content/uploads/2011/04/scene_bottom_left.png)

**SceneBottomRight :**

![](https://www.silexlabs.org/wp-content/uploads/2011/04/scene_bottom_right.png)

_**Note :**_ it's exactly the same principle for stage anchor point.


## Notes






  * You can change the  x and y position of the ultralign component only if the anchor point is on "self"




  * You can align several ultralign components only if the ultralign components aligned to another one have their anchor point on "self"




