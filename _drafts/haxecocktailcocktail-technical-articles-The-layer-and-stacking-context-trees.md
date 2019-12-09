---
id: 138464
title: "The layer and stacking context trees"
date: "2013-05-08T11:37:03.000Z"
author: "yannick"
layout: "page"
guid: "https://www.silexlabs.org/?page_id=138464"

---
In a previous article we&#8217;ve seen the rendering tree is in charge of representing the visual nodes of the html element so that they can be displayed on screen.  
The rendering tree layout all its elements, giving them all an x and y coordinate relative to the origin of the document. Rendered nodes in an HTML document are also  
given a z axis so that they can overlap in a predictable way.  
In an HTML document, node which are the most deeply nested in the document markup will be rendered on top of their parent node by default. CSS offers a way to  
override this behaviour with the &#8220;z-index&#8221; style, allowing element to be displayed on top or below parent or sibling elements.  
The added third dimension of the document warrants the creation of another tree data stucture, the layer tree.

## &#8212;&#8212;&#8212;&#8212;

The layer tree is owned by the rendering tree in the same way that the rendering tree is owned by the DOM tree. The layer tree is always sparser than  
the rendering tree. The layer tree is always constituted of one least one root element, owned by the rendering tree&#8217;s root element.  
In the same way that each DOM node may create a corresponding node in the rendering tree or not, each node in the rendering tree can create a node in the layer tree,  
simply refered to as a &#8220;layer&#8221;.  
With this added data tree, the document is now represented as a pile of stacked layers, the top layers being the ones &#8220;closest&#8221; to the eye of the user.  
Not all node in the rendering create their own layer. Here is a non-exhaustive list of conditions creating a new layer :  
&#8211; the node has a non-static &#8220;position&#8221; style (relative, absolute or fixed)  
&#8211; the node is transparent (because of the &#8220;opacity&#8221; style).  
&#8211; the node had transformations applied to it (because of the &#8220;transform&#8221; style).  
As a rule of thumb, a new layer is created for an element which can overlap other elements.

## Implementation

The layer tree is implemented in the &#8220;layer&#8221; package located in the &#8220;core&#8221; package.
























