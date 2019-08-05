---
author: koala
comments: true
date: 2011-01-11 08:37:26+00:00
excerpt: "<a rel=\"attachment wp-att-86282\" href=\"https://www.silexlabs.org/?attachment_id=86282\"\
  ><img class=\"aligncenter size-full wp-image-86282\" title=\"plugin\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/01/plugin8.png\"\
  \ alt=\"\" width=\"180\" height=\"85\" /></a>This plugin install\
  \ two components : a slider and a progress bar.They are both the same component\
  \ with different default parameters.<h2>2 components</h2>When\
  \ adding a slider component, the progress bar of the component is hidden and the\
  \ handle shown whereas when adding a progress bar, the progress bar is visible and\
  \ the handle hidden.<h2>Parameters</h2><h3>Show Handle</h3>\
  If the checkbox is checked, display an handle that the user can use to change\
  \ the slider value. It is useful to hide it when the component is used as a progress\
  \ bar.<h3>Show Progress Bar</h3>If the checkbox is checked,\
  \ display the progress bar representing the progress of the slider, if the progress\
  \ is 50%, then the progress will take half the width of the component. It is useful\
  \ to hide it when the component is used as a simple slider.<h3>Show Background</h3>\
  If the checkbox is checked, display the background of the slider\
  <h3>Active Drag</h3>If the checkbox is checked, each time the user moves\
  \ the slider's handle an \"onSlide\" event is sent (see below \"using the onSlide\
  \ action\"), whereas it is only sent once the user release the handle if not.\
  <h3>Min value</h3>This is the minimum value that the slider can\
  \ take. In most cases it will be 0. It means that when the slider's handle is at\
  \ the left of the slider, the slider progress value will be the Min value.\
  <h3>Max value</h3>This is the maximum value that the slider can take.\
  \ In most cases it will be 100 or 10. It means that when the slider's handle is\
  \ at the right of the slider, the slider progress value will be the Max value.\
  ex : if the slider is used to control the volume of an audio component,\
  \ the min value will be 0 and the max value will 100 or 10 based on the volume parameter\
  \ of the audio component.<h3>Progress</h3>It represent the current\
  \ position of the handle based on the min value and max value parameters. For instance,\
  \ if the min value is 0, the max value is 100 and the handle is at the exact center\
  \ of the slider, then the progress value will be 50.<h3>Step</h3>\
  This is the interval between two possible progress values. In most case, it\
  \ will be 1. For instance, if the min value is 0, the max value is 10 and the step\
  \ is 1, the possible progress values will be : 0,1,2,3,4,5,6,7,8,9,10. If the step\
  \ is 2, the possible values will be : 0,2,4,6,8,10.<h2>Exemple</h2>\
  <h3>Using the slider to control the volume of an audio component</h3>\
  In this exemple, I have in a site a slider named \"Slider\" with the following\
  \ parameters :minValue : 0,max value : 100,step\
  \ : 1,progress : 0.I also have an audio component named \"\
  Audio\". In the slider actions, I add the following action :<code>onSlide\
  \ Audio.volume=&lt;&lt;Slider.progress&gt;&gt;</code>When the user moves\
  \ the handle of the slider, the volume of the Audio component changes, it takes\
  \ the value of the progress parameter of the slider. If \"Active drag\" is checked,\
  \ the volume changes as the handle move, else it changes when the user releases\
  \ the handle.<h2>Skinning the slider</h2>The slider can be skinned\
  \ with the source available here<a rel=\"attachment wp-att-86383\" href=\"https://www.silexlabs.org/?attachment_id=86383\"\
  > : slider_source</a>. The zip contains the FLA of the slider and the Slider.as\
  \ file, necessary to publish the FLA. In the FLA, you can change the design of the\
  \ background of the slider, the progress bar and the handle."
layout: post
link: https://www.silexlabs.org/slider-plugin/
slug: slider-plugin
title: Slider plugin
wordpress_id: 1883
categories:
- "Plugins"
---

[![](https://www.silexlabs.org/wp-content/uploads/2011/01/plugin8.png)
				](https://www.silexlabs.org/?attachment_id=86282)
				This plugin install two components : a slider and a progress bar.They are both the same component with different default parameters.


## 2 components


				When adding a slider component, the progress bar of the component is hidden and the handle shown whereas when adding a progress bar, the progress bar is visible and the handle hidden.


## Parameters




### Show Handle


				If the checkbox is checked, display an handle that the user can use to change the slider value. It is useful to hide it when the component is used as a progress bar.


### Show Progress Bar


				If the checkbox is checked, display the progress bar representing the progress of the slider, if the progress is 50%, then the progress will take half the width of the component. It is useful to hide it when the component is used as a simple slider.


### Show Background


				If the checkbox is checked, display the background of the slider


### Active Drag


				If the checkbox is checked, each time the user moves the slider's handle an "onSlide" event is sent (see below "using the onSlide action"), whereas it is only sent once the user release the handle if not.


### Min value


				This is the minimum value that the slider can take. In most cases it will be 0. It means that when the slider's handle is at the left of the slider, the slider progress value will be the Min value.


### Max value


				This is the maximum value that the slider can take. In most cases it will be 100 or 10. It means that when the slider's handle is at the right of the slider, the slider progress value will be the Max value.

				ex : if the slider is used to control the volume of an audio component, the min value will be 0 and the max value will 100 or 10 based on the volume parameter of the audio component.


### Progress


				It represent the current position of the handle based on the min value and max value parameters. For instance, if the min value is 0, the max value is 100 and the handle is at the exact center of the slider, then the progress value will be 50.


### Step


				This is the interval between two possible progress values. In most case, it will be 1. For instance, if the min value is 0, the max value is 10 and the step is 1, the possible progress values will be : 0,1,2,3,4,5,6,7,8,9,10. If the step is 2, the possible values will be : 0,2,4,6,8,10.


## Exemple




### Using the slider to control the volume of an audio component



				In this exemple, I have in a site a slider named "Slider" with the following parameters :

				minValue : 0,
				max value : 100,
				step : 1,
				progress : 0.

				I also have an audio component named "Audio". In the slider actions, I add the following action :

				`onSlide Audio.volume=<<Slider.progress>>`

				When the user moves the handle of the slider, the volume of the Audio component changes, it takes the value of the progress parameter of the slider. If "Active drag" is checked, the volume changes as the handle move, else it changes when the user releases the handle.


## Skinning the slider


				The slider can be skinned with the source available here[ : slider_source](https://www.silexlabs.org/?attachment_id=86383). The zip contains the FLA of the slider and the Slider.as file, necessary to publish the FLA. In the FLA, you can change the design of the background of the slider, the progress bar and the handle.
