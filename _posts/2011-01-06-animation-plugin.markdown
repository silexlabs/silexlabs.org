---
author: "yannick"
comments: true
date: "2011-01-06T16:17:11.000Z"
layout: "post"
link: "https://www.silexlabs.org/animation-plugin/"
slug: "animation-plugin"
title: "Animation plugin"
wordpress_id: 1564
categories: ["Plugins"]

---
![](https://www.silexlabs.org/wp-content/uploads/2011/01/plugin.png)

This is a plugin adding animation to Silex using actions. You need to install it and activate it for the whole server or for each publication in which you want to use it.


## Update v1.1






  * The plugin now use Caurina for it's Tween instead of Flash built in tweens thanks to Thomas Fétiveau, [http://tofee.fr](http://tofee.fr).The Caurina project is hosted here : [http://code.google.com/p/tweener/](http://code.google.com/p/tweener/)


  * A tween can be paused/stopped/resumed


  * All tweens can be paused/stopped/resumed at once


  * Adding an easing type to an animation is now done with only one parameter instead of two


  * Added modifiers for animation start and animation update (called each frame during animation)


  * An exemple publication is installed with the plugin. It is called "silextween" and demoes this plugin.




## Animating a component


To animate a component, we need to add a line in it'as actions. In this exemple we will move a component along it's horizontal axis when clicked. Select a component, rename it "myComponent", and copy the following line in the action panel :

`onRelease _global.silexTween.startTween:myComponent,_x,500,1`

Click on the confirm button of the action panel and unselect the layer and component (using the unselect button at the bottom of the Page toolbox or the escape key). When you click on the component, he start moving until it's x postion is equal to 500.

<!-- more -->


## Required Parameters of a tween


A tween is the programmatic name for an animation. When you want to tween a component, you always need to use the following function:

`_global.silexTween.startTween:`

This is the function telling the tween to plugin to start a tween. This function has the following parameters in order :




  *


### name of the component to tween


This is the name of the component you want to move as it appears in the component toolbox or in the properties toolbox.


  *


### name of the property to tween


This is name of the property you want to animate. For instance, if you want to move a component horizontally, you use "_x", if you want to resize it's width, you use "_width". You can use any numerical property such as "_x", "_y", "_alpha", "_width", "_height", "_rotation"...


  *


### target value of the property


This the value that the tweened property will have when the animation is complete. In the above exemple we see that the name of the property is "_x" and the target value is "500". So at the end of the animation, the _x position of the component will be 500.


  *


### Duration of the tween


This is the duration of the tween in second. In the exemple it is "1", so the animation will last for 1 seconds. You can use decimal values like "1.5".




## Additionnal parameters


You can add the following optionnal parameters after the "Duration of the tween" parameter. If you don't use those parameters, they will use default value.


### name of the type of easing


The easing type is the name of the animation effect to use. For instance you can add a bouncy effect to your animation by typing "easeInBounce". Here is the list of all the available types of easing :




  * linear


  * easeInSine


  * easeOutSine


  * easeInOutSine


  * easeInQuad


  * easeOutQuad


  * easeInOutQuad


  * easeInCubic


  * easeOutCubic


  * easeInOutCubic


  * easeInQuart


  * easeOutQuart


  * easeInOutQuart


  * easeInQuint


  * easeOutQuint


  * easeInOutQuint


  * easeInExpo


  * easeOutExpo


  * easeInOutExpo


  * easeInCirc


  * easeOutCirc


  * easeInOutCirc


  * easeInElastic


  * easeOutElastic


  * easeInOutElastic


  * easeInBack


  * easeOutBack


  * easeInOutBack


  * easeInBounce


  * easeOutBounce


  * easeInOutBounce


You can find more info [here](http://hosted.zeh.com.br/tweener/docs/en-us/misc/transitions.html). If you don't use this parameter, it will use a default value, as we saw in the exemple animation at the beginning of the page.

Here is an exemple of how to add a bouncy effect to the animation, which will ease at the beggining of the animation :

`onRelease _global.silexTween.startTween:myComponent,_x,500,1,easeInBounce`

**warning :** setting the easing type was done with two separate parameters in the previous version, you'll need to update your actions if you want to use this new version


## Other available functions




### Pausing a tween


This function allows to pause the execution of a given tween on a given component.


<blockquote>onRelease _global.silexTween.pauseTween:myComponent,_x</blockquote>


If the property (in this exemple "_x") is not specifyied, if will pause all the tweens currently running on the component specifyied in the first parameter.


### Pausing all tweens


Pauses all currently running tweens:


<blockquote>onRelease _global.silexTween.pauseAllTweens</blockquote>




### Resuming a tween


Resumes a tween that has been paused. Usage:


<blockquote>onRelease _global.silexTween.playTween:myComponent,_x</blockquote>


If the property (in this exemple "_x") is not specifyied, if will resume all the tweens currently paused on the component specifyied in the first parameter.


### Resuming all paused tweens


Resumes all currently paused tweens:


<blockquote>onRelease _global.silexTween.playAllTweens</blockquote>




### Stoping a tween


This function removes definitively a given tween on a given component.


<blockquote>onRelease _global.silexTween.stopTween:myComponent,_x</blockquote>


If the property (in this exemple "_x") is not specifyied, if will remove all the tweens currently defined (running or paused) on the component specifyied in the first parameter.


### Stoping all tweens


Removes all the tweens:


<blockquote>onRelease _global.silexTween.stopAllTweens</blockquote>




## Creating an animation sequence


You can create a sequence of animation by using the "onAnimationComplete" modifier. The modifier is the first part of an action, the one defining the interaction to react to, like "onRelease", "onRollOver"...


### Creating a return animation


The "onAnimationComplete" modifier is called on the component when is animation is finished. In the above exemple, it is called when the component has arrived at it's final x position at "500". We will use this to move the component back to it's original position when the animation is complete. Copy the 2 following actions : (you can overwrite the first action)

`onRelease _global.silexTween.startTween:myComponent,_x,500,1,Bounce,easeIn`
`onAnimationComplete _global.silexTween.startTween:myComponent,_x,0,1,Bounce,easeOut`

When you click on the component, he first goes to the "500" x coordinate, then when this animation is complete, he goes to "0" x coordinate.


### Creating multiple animation sequence


We will now create a sequence of 3 animations. We will first move the x coordinnate of the component, then it's y coordinnate, then both it's width and height at the same time. We see here that we run into a limitation if we use the default "onAnimationComplete" modifier. If we only use it, the plugin won't know the order of the animation to play. He will first move the component along it's x axis, then he won't know if he must move the component on it's y axis or resize the width and height as both will be executed after the end of x animation ! In addition, in the previous exemple, the "onAnimationComplete" animation will be called indefinetly as it calls itself each time the animation ends.

To solve those issues we will create custom "onAnimationComplete" modifier for each animation by adding a parameter to the startTween function. This parameter will be the name of the custom modifier. For instance, for the end of the x animation, we will add the parameter "onXAnimationComplete", then we will use this modifier to trigger the next animation. Copy the following code to test the animation sequence :

`onRelease _global.silexTween.startTween:myComponent,_x,500,1,easeInBounce,onXAnimationComplete`
`onXAnimationComplete _global.silexTween.startTween:myComponent,_y,300,1.5,easeOutBounce,onYAnimationComplete`
`onYAnimationComplete _global.silexTween.startTween:myComponent,_width,200,2,easeInElastic`
`onYAnimationComplete _global.silexTween.startTween:myComponent,_height,100,1,easeOutElastic`

In this exemple we can see that the animation are executed in order, one at a time, or simultaneously (the width/height animation) with variying duration and easing effects.


## Additional modifiers


There three  more modifiers you can use when you create a tween and another parameter described in the paragraph below. There is "onAnimationStart", called just before the tween animation begins, "onAnimationUpdate" called each frame during the tween, and "onAnimationCompleteBeforeStart" that can be called if the tweened component is already at the finishing position before the tween begins. Like the "onAnimationComplete" modifier you can either use the default modifier or create a custom one. The last parameter is the callbackTargetName, it can be used to change the component that will call the modifiers. By default the tweened component is the target, meaning that you must set the actions ("onAnimationComplete", "onAnimationStart"...) on him. You can specifiy anther component's name. It's useful when you want for instance that the component which started the tween calls the modifier. The complete startTween function is here :

`onRelease _global.silexTween.startTween:myComponent,_x,500,1,easeInBounce,onXAnimationComplete,onXAnimationStart,onXAnimationUpdate,alternativeTargetName,onXAnimationCompleteBeforeStart`

