---
author: yannick
comments: true
date: 2011-01-23 20:53:57+00:00
excerpt: "<a rel=\"attachment wp-att-48677\" href=\"https://www.silexlabs.org/?attachment_id=48677\"\
  ></a><a rel=\"attachment wp-att-79558\" href=\"https://www.silexlabs.org/?attachment_id=79558\"\
  ><img class=\"aligncenter size-full wp-image-79558\" title=\"plugin\" src=\"https://www.silexlabs.org/wp-content/uploads/2011/01/plugin7.png\"\
  \ alt=\"\" width=\"180\" height=\"85\" /></a><a rel=\"attachment wp-att-48680\"\
  \ href=\"https://www.silexlabs.org/?attachment_id=48680\">Click here to download\
  \ the BestSkinnableButton sources</a>This plugin contains a set of buttons\
  \ for Silex. Those buttons cover most classic button uses and improve on the buttons\
  \ packaged with Silex (like the dreaded labelButton). There are currently 3 different\
  \ buttons packaged with this plugin. They all share common properties and each have\
  \ specific properties.<h2>Overview</h2><h3>Common properties</h3>\
  <ul><li>8 states for each button :<ul><li>Up</li>\
  <li>Over</li><li>Down</li><li>Selected Up</li>\
  <li>Selected Down</li><li>Selected Over</li><li>Disabled\
  \ Up</li><li>Disabled Selected</li></ul></li>\
  <li>Toggle / non-toggle buttons</li><li>Disabled / enabled button</li>\
  <li>Button bar</li></ul><h3>Specific properties</h3>\
  <h4>BestSkinnableButton</h4>A button skinned in Flash. The Fla\
  \ contains a key frame for each of the state of the button. You can change it's\
  \ skins and it's label display in Flash.<h4>BestLabelButton</h4>\
  Displays a different  HTML label for each of the button states with embedded\
  \ or non-embedded text.<h4>BestBackgroundButton</h4>Acts like\
  \ a BestLabelButton and add the possibility to define a background for each of the\
  \ state that must be a component on the scene, like a Geometry component.\
  <h2>Details</h2><h3>Common properties</h3><h4>button states</h4>\
  A best button can have 8 different states triggered by user interaction.\
  \ For instance when the user doesn't interact with the button, the current state\
  \ is Up or SelectedUp if the button is a selected toggle button. If the user rolls\
  \ over a button the current state becomes Over or Selected Over if the button is\
  \ a selected toggle button. For each state, you can defines the display of the background\
  \ and/or the label of the button. For instance, for a BestButton, you define the\
  \ display of the button in Flash, for each state you can change the movieClip of\
  \ the background and the TextField display. With a BestLabelButton, you set the\
  \ display of the label in Silex, with an HTML text.<h4>Toggle / non-toggle\
  \ buttons</h4>A toggle button is a button that can be selected, most of\
  \ them appears to be \"pushed\" when they are selected. For each button, you can\
  \ chose if the button is toggle or not. If it is the button can trigger all of the\
  \ state, if it isn't, he can't trigger the Selected states.<h4>Disabled\
  \ / enabled button</h4>Each button can be disabled, in which case it doesn't\
  \ respond to clicks anymore. The disabled/enabled state can be changed with the\
  \ wysiwyg or via actions, which can come in handy in form creation when some form\
  \ items must be disabled until others are filled.<h4>Button bar</h4>\
  Each button can belong to a button bar. If a button belongs to a button\
  \ bar, when the button is selected, all of the other button in the button bar are\
  \ disabled. It can be useful to create navigation type menu where you can only be\
  \ at one page at a time. It can only work with toggle buttons. To belong to a button\
  \ bar, you must the fill the \"button group ID\" property with the name of the button\
  \ bar that you chose. When multiple buttons share the same button bar name, they\
  \ belong to the same button bar.<h3>Specific properties</h3>\
  <h4>BestSkinnableButton</h4>The BestSkinnableButton only as one label\
  \ property that will be used for each state. This button is oriented toward Flash\
  \ designer, the button skin can be changed with the BestSkinnableButton FLA, downloadable\
  \ from this post. In it, each of the button state are on a separate frame, like\
  \ a Flash button. For each state you can change the background by modifing the background\
  \ MovieClip in the library, and change the label display by changing the text layout\
  \ of the state label's text field.<h4>BestLabelButton</h4>This\
  \ button can be used when you want to create a button with only a label, no background.\
  \ For each of the state, you can fill the label in the Wysiwyg with the corresponding\
  \ property. The label can be in HTML to add style to text. You can use embedded\
  \ font if you select the embed fonts check box. When embed fonts is activated, all\
  \ the HTML labels using fonts that you embedded in the manager will be displayed.\
  \ The label won't appear if the font is not embedded.<h4>BestBackgroundButton</h4>\
  This button has the same properties than the BestLabelButton and add some.\
  \ For each state, you can specify a background. The background must another component\
  \ on the scene. For instance you can use a Geometry component filled with a gradient\
  \ and with rounded corner as the background of your Up state, you just have to enter\
  \ the name of the Geometry component in the Background Up comboBox, the Geometry\
  \ component will move at the right place and take the same size as the button."
layout: post
link: https://www.silexlabs.org/best-buttons/
slug: best-buttons
title: best buttons
wordpress_id: 2269
categories:
- "Plugins"
---

[](https://www.silexlabs.org/?attachment_id=48677)[![](https://www.silexlabs.org/wp-content/uploads/2011/01/plugin7.png)](https://www.silexlabs.org/?attachment_id=79558)

				[Click here to download the BestSkinnableButton sources](https://www.silexlabs.org/?attachment_id=48680)

				This plugin contains a set of buttons for Silex. Those buttons cover most classic button uses and improve on the buttons packaged with Silex (like the dreaded labelButton). There are currently 3 different buttons packaged with this plugin. They all share common properties and each have specific properties.


## Overview




### Common properties






  * 8 states for each button :


    * Up


    * Over


    * Down


    * Selected Up


    * Selected Down


    * Selected Over


    * Disabled Up


    * Disabled Selected





  * Toggle / non-toggle buttons


  * Disabled / enabled button


  * Button bar




### Specific properties




#### BestSkinnableButton


				A button skinned in Flash. The Fla contains a key frame for each of the state of the button. You can change it's skins and it's label display in Flash.


#### BestLabelButton


				Displays a different  HTML label for each of the button states with embedded or non-embedded text.


#### BestBackgroundButton


				Acts like a BestLabelButton and add the possibility to define a background for each of the state that must be a component on the scene, like a Geometry component.


## Details




### Common properties




#### button states


				A best button can have 8 different states triggered by user interaction. For instance when the user doesn't interact with the button, the current state is Up or SelectedUp if the button is a selected toggle button. If the user rolls over a button the current state becomes Over or Selected Over if the button is a selected toggle button. For each state, you can defines the display of the background and/or the label of the button. For instance, for a BestButton, you define the display of the button in Flash, for each state you can change the movieClip of the background and the TextField display. With a BestLabelButton, you set the display of the label in Silex, with an HTML text.


#### Toggle / non-toggle buttons


				A toggle button is a button that can be selected, most of them appears to be "pushed" when they are selected. For each button, you can chose if the button is toggle or not. If it is the button can trigger all of the state, if it isn't, he can't trigger the Selected states.


#### Disabled / enabled button


				Each button can be disabled, in which case it doesn't respond to clicks anymore. The disabled/enabled state can be changed with the wysiwyg or via actions, which can come in handy in form creation when some form items must be disabled until others are filled.


#### Button bar


				Each button can belong to a button bar. If a button belongs to a button bar, when the button is selected, all of the other button in the button bar are disabled. It can be useful to create navigation type menu where you can only be at one page at a time. It can only work with toggle buttons. To belong to a button bar, you must the fill the "button group ID" property with the name of the button bar that you chose. When multiple buttons share the same button bar name, they belong to the same button bar.


### Specific properties




#### BestSkinnableButton


				The BestSkinnableButton only as one label property that will be used for each state. This button is oriented toward Flash designer, the button skin can be changed with the BestSkinnableButton FLA, downloadable from this post. In it, each of the button state are on a separate frame, like a Flash button. For each state you can change the background by modifing the background MovieClip in the library, and change the label display by changing the text layout of the state label's text field.


#### BestLabelButton


				This button can be used when you want to create a button with only a label, no background. For each of the state, you can fill the label in the Wysiwyg with the corresponding property. The label can be in HTML to add style to text. You can use embedded font if you select the embed fonts check box. When embed fonts is activated, all the HTML labels using fonts that you embedded in the manager will be displayed. The label won't appear if the font is not embedded.


#### BestBackgroundButton


				This button has the same properties than the BestLabelButton and add some. For each state, you can specify a background. The background must another component on the scene. For instance you can use a Geometry component filled with a gradient and with rounded corner as the background of your Up state, you just have to enter the name of the Geometry component in the Background Up comboBox, the Geometry component will move at the right place and take the same size as the button.
