---
layout: post
title: Simple Gallery

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Plugins
tags: []

_itemCurrentVersion: beta1.1
_wp_old_slug: ''
_epLastMessage: ''
_epLastError: ''

_itemCurrentFileName: download.zip
color: blue
_selectedProject: Silex
_edit_last: '16'
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: yannick
first_name: ''
last_name: ''
permalink: "/simple-gallery/"
---

This component is a simple picture gallery, just drop it in your site and input the urls of your gallery's pictures.

Authors
: Camille GERARD HIRNE, Yannick DOMINGUEZ

2 galleries
-----------

This plugin adds 2 components
: the gallery and the autoplay gallery. They are both the same component with different configuration. The autoplay gallery will automatically switch pictures every few seconds and won't display the next and previsou buttons.

Use
---

[caption id="attachment_73235" align="aligncenter" width="300"][![simple gallery panel]({{ site.baseurl }}/assets/simpleGallery_panel-300x139.png "simpleGallery_panel")](https://www.silexlabs.org/?attachment_id=73235) the panel of the simple gallery (click to zoom)[/caption]

The gallery has the following parameters
: 
### Pictures URLs

This is the urls of the pictures that you want to display in your gallery. The pictures can either come from your media folder
(ex: "media/logosilex.jpg") or from another website


### Autoplay

If the autoplay checkbox is checked, the picture will automatically be switched every few seconds. You can specify the interval with the "Autoplay duration" parameter.

### Autoplay duration

The interval in seconds before displaying the next picture, if the autoplay is activated.

### Loop

If the loop checkbox is checked, once the user reaches the last picture, if he clicks the next button, the first picture will be displayed, same for the first picture with the previous button.

### Transition Type

Determine the transition animation between 2 pictures, here are the current transitions types
: 
*   Fade
*   Swipe
*   Zoom

### Transition duration

The duration of the transition between 2 pictures in seconds.

### Show controls

If the checkbox is checked, the next and previous buttons are displayed

### Show loader

If the checkbox is checked, the loader will be displayed when a picture is loading

### Controls vertical align

Detrmine the vertical position of the next and previous button, can be top, middle or bottom.

### Scale mode

The scale mode applied to the pictures, there are 3 scale modes
: 
*   #### noscale
    
    The picture won't be resized and will be displayed at their full size
    
*   #### fill
    
    The picture will take the dimensions of the gallery. It will probably deform the picture
    
*   #### exactFit
    
    The picture will take the biggest size they can within the gallery without being deformed
    

### Show background

If the checkbox is checked, display the background of the gallery. Hiding the background is useful if you want a transparent background or a custom background added in Silex.

### Background color

The color of the gallery background

Skinning the gallery
--------------------

The simple gallery is a skinnable component, you can download the source FLA here
: [SimpleGallery_source](https://www.silexlabs.org/?attachment_id=86570). This FLA allows to create your own design by customising
: 
*   The next button
*   the previous button
*   the loader displayed when a picture is loading
*   the error panel displayed when a picture was not found

The folder "silex framework" in the Flash library contain all the necessary clips to make the gallery work as a Silex component and shouldn't be changed. The "gallery asset" folder contains some graphics which can be customised.

Controlling the gallery with actions
------------------------------------

You can use any component to act as the next and previous button of your gallery by adding an action to them.

Ex
: for a simple gallery called "myGallery".

Add the following action on the component yout want to use as the next button
: 
`onRelease myGallery.next`

Add the following action on the component yout want to use as the previous button
: 
`onRelease myGallery.previous`

Event sent by the gallery
-------------------------

For a more advanced use of the gallery with actions, here is the list of the event dispatched by it
: 
*   onStartPictureLoading  
    sent when a picture loading start
*   onPictureLoaded  
    sent when a picture has been successfuly loaded
*   onPictureLoadingError  
    sent when there was an error during picture loading
*   onPictureStartTransition  
    sent when the transition start between 2 pictures
*   onPictureTransitionComplete  
    sent when the transition is complete between 2 pictures
*   onNextPicture  
    sent when the process to display the next picture starts
*   onPreviousPicture  
    sent when the process to display the previous picture starts
*   onNextPictureAutoPlay  
    sent when the next picture is displayed thanks to the autoplay
*   onChange  
    A generic changed event dispatched with some  other events