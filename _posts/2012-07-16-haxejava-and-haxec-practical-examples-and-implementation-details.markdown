---
author: koala
comments: true
date: 2012-07-16 15:30:32+00:00
excerpt: "This talk introduces the new C# and Java targets for haxe. It will show\
  \ how it works, with an overview of the design choices, with practical examples\
  \ and samples of what can be done with them, as well as strategies for interacting\
  \ with legacy and native code.<h3><a href=\"https://www.silexlabs.org/132224/the-blog/haxejava-and-haxec-practical-examples-and-implementation-details-2/attachment/caue-waneck/\"\
  \ rel=\"attachment wp-att-132225\"><img class=\"alignleft size-full wp-image-132225\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2012/04/caue-waneck1.jpg\"\
  \ alt=\"\" width=\"138\" height=\"175\" /></a>Cauê Waneck - Developer at <a href=\"\
  http://www.comtacti.com.br/\" target=\"_blank\">Comtacti</a></h3>Cauê\
  \ is a self-taught developer very passionate about haxe, and is currently the lead\
  \ developer at the Brazillian digital agency Comtacti, where he and his team create\
  \ games and interactive applications. They benefit widely from code reuse and the\
  \ versatility of Haxe. As Comtacti started to work with Unity 3D to leverage 3D\
  \ games, Cauê started working on a C# target for Haxe on his free time.\
  Here are the other videos of the <a href=\"http://wwx.haxe.org/\" target=\"_blank\"\
  >WWX</a> :- <a href=\"https://www.silexlabs.org/132111/the-blog/may-the-force-be-with-you-making-a-game-with-awe6/\"\
  \ target=\"_blank\">AWE6 by Rob Fell</a>- <a href=\"https://www.silexlabs.org/133359/the-blog/haxe-nme-vs-the-world/\"\
  \ target=\"_blank\">NME vs the World by Philippe Elsass</a>- <a href=\"\
  https://www.silexlabs.org/133423/the-blog/first-contact-selling-haxe-to-clients-and-developers/\"\
  \ target=\"_blank\">First Contact : Selling Haxe to clients and developers\
  </a>- <a href=\"https://www.silexlabs.org/133591/the-blog/hxcpp-%E2%80%93-haxe-girt-by-c/\"\
  \ target=\"_blank\">HXCPP – Haxe girt by C++ by Hugh Sanderson</a>- <a\
  \ href=\"https://www.silexlabs.org/133720/the-blog/haxe-3-and-4-%E2%80%93-plans-for-world-domination/\"\
  \ target=\"_blank\">Haxe 3 and 4 – Plans for World Domination by Nicolas Cannasse</a>\
  - <a href=\"https://www.silexlabs.org/133902/the-blog/cocktail-v1-0-sunrise-cross-platform-uis-with-haxe/\"\
  \ target=\"_blank\">Cocktail v1.0 Sunrise, cross platform UIs with haXe by Alex\
  \ Hoyau &amp; Yannick Dominguez</a>- <a href=\"https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056\"\
  \ target=\"_blank\">Vector Graphics in the browser with Haxe by Franco Ponticelli</a><a\
  \ href=\"https://www.silexlabs.org/133823/the-blog/haxejava-and-haxec-practical-examples-and-implementation-details/\"\
  \ target=\"_blank\"></a>- <a href=\"https://www.silexlabs.org/135169/the-blog/multiplatform-productivity-tool-with-haxe/\"\
  \ target=\"_blank\">Multiplatform productivity tool with Haxe by Peter Halacsy</a>\
  - <a href=\"https://www.silexlabs.org/135257/the-blog/getting-pragmatic-developers-started-with-haxe/\"\
  \ target=\"_blank\">Getting pragmatic developers started with Haxe by Robert Bak</a><a\
  \ href=\"https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056\"\
  \ target=\"_blank\"></a>- <a href=\"https://www.silexlabs.org/135331/the-blog/haxe-macros-meta-programming-done-right/\"\
  \ target=\"_blank\">Haxe macros : meta-programming done right by Juraj Kirchheim</a><a\
  \ href=\"https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056\"\
  \ target=\"_blank\"></a>- <a href=\"https://www.silexlabs.org/135480/the-blog/britzpetermann-haxe-6/\"\
  \ target=\"_blank\">Britzpetermann &amp; Haxe by Nico Zimmermann</a><a href=\"https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056\"\
  \ target=\"_blank\"></a><h2>The video</h2><iframe\
  \ src=\"http://www.youtube.com/embed/1sKAd91iqMI\" frameborder=\"0\" width=\"640\"\
  \ height=\"480\"></iframe><h2>The slides</h2><div class=\"prezi-player\"\
  ><object id=\"prezi_5ab8vzrd4qqt\" width=\"640\" height=\"465\" classid=\"\
  clsid:d27cdb6e-ae6d-11cf-96b8-444553540000\" codebase=\"http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=6,0,40,0\"\
  ><param name=\"allowfullscreen\" value=\"true\" /><param name=\"allowFullScreenInteractive\"\
  \ value=\"true\" /><param name=\"allowscriptaccess\" value=\"always\" /><param name=\"\
  flashvars\" value=\"prezi_id=5ab8vzrd4qqt&amp;lock_to_path=0&amp;color=ffffff&amp;autoplay=no&amp;autohide_ctrls=0\"\
  \ /><param name=\"src\" value=\"http://prezi.com/bin/preziloader.swf\" /><param\
  \ name=\"allowfullscreeninteractive\" value=\"true\" /><embed id=\"prezi_5ab8vzrd4qqt\"\
  \ width=\"640\" height=\"465\" type=\"application/x-shockwave-flash\" src=\"http://prezi.com/bin/preziloader.swf\"\
  \ allowfullscreen=\"true\" allowFullScreenInteractive=\"true\" allowscriptaccess=\"\
  always\" flashvars=\"prezi_id=5ab8vzrd4qqt&amp;lock_to_path=0&amp;color=ffffff&amp;autoplay=no&amp;autohide_ctrls=0\"\
  \ allowfullscreeninteractive=\"true\" /></object><div class=\"prezi-player-links\"\
  ><a title=\"Practical Haxe/Java &amp; Haxe/C#\" href=\"http://prezi.com/5ab8vzrd4qqt/practical-haxejava-haxec/\"\
  \ target=\"_blank\">Practical Haxe/Java &amp; Haxe/C#</a> on <a href=\"http://prezi.com/\"\
  \ target=\"_blank\">Prezi</a></div></div>"
layout: post
link: https://www.silexlabs.org/haxejava-and-haxec-practical-examples-and-implementation-details/
slug: haxejava-and-haxec-practical-examples-and-implementation-details
title: 'Haxe/Java and Haxe/C#: Practical examples and implementation details'
wordpress_id: 133823
categories:
- "Blog Silex Labs"
- "Silex Labs Events"
- "The Blog"
tags:
- "WWX2012"
---

This talk introduces the new C# and Java targets for haxe. It will show how it works, with an overview of the design choices, with practical examples and samples of what can be done with them, as well as strategies for interacting with legacy and native code.


### [![](https://www.silexlabs.org/wp-content/uploads/2012/04/caue-waneck1.jpg)](https://www.silexlabs.org/132224/the-blog/haxejava-and-haxec-practical-examples-and-implementation-details-2/attachment/caue-waneck/)Cauê Waneck - Developer at [Comtacti](http://www.comtacti.com.br/)


				Cauê is a self-taught developer very passionate about haxe, and is currently the lead developer at the Brazillian digital agency Comtacti, where he and his team create games and interactive applications. They benefit widely from code reuse and the versatility of Haxe. As Comtacti started to work with Unity 3D to leverage 3D games, Cauê started working on a C# target for Haxe on his free time.

				Here are the other videos of the [WWX](http://wwx.haxe.org/) :
				- [AWE6 by Rob Fell
				](https://www.silexlabs.org/132111/the-blog/may-the-force-be-with-you-making-a-game-with-awe6/)- [NME vs the World by Philippe Elsass
				](https://www.silexlabs.org/133359/the-blog/haxe-nme-vs-the-world/)- [First Contact : Selling Haxe to clients and developers
				](https://www.silexlabs.org/133423/the-blog/first-contact-selling-haxe-to-clients-and-developers/)- [HXCPP – Haxe girt by C++ by Hugh Sanderson](https://www.silexlabs.org/133591/the-blog/hxcpp-%E2%80%93-haxe-girt-by-c/)
				- [Haxe 3 and 4 – Plans for World Domination by Nicolas Cannasse](https://www.silexlabs.org/133720/the-blog/haxe-3-and-4-%E2%80%93-plans-for-world-domination/)
				- [Cocktail v1.0 Sunrise, cross platform UIs with haXe by Alex Hoyau & Yannick Dominguez](https://www.silexlabs.org/133902/the-blog/cocktail-v1-0-sunrise-cross-platform-uis-with-haxe/)
				- [Vector Graphics in the browser with Haxe by Franco Ponticelli](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)[
				](https://www.silexlabs.org/133823/the-blog/haxejava-and-haxec-practical-examples-and-implementation-details/)- [Multiplatform productivity tool with Haxe by Peter Halacsy](https://www.silexlabs.org/135169/the-blog/multiplatform-productivity-tool-with-haxe/)
				- [Getting pragmatic developers started with Haxe by Robert Bak](https://www.silexlabs.org/135257/the-blog/getting-pragmatic-developers-started-with-haxe/)[
				](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)- [Haxe macros : meta-programming done right by Juraj Kirchheim](https://www.silexlabs.org/135331/the-blog/haxe-macros-meta-programming-done-right/)[
				](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)- [Britzpetermann & Haxe by Nico Zimmermann](https://www.silexlabs.org/135480/the-blog/britzpetermann-haxe-6/)[
				](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)


## The video





## The slides











				[Practical Haxe/Java & Haxe/C#](http://prezi.com/5ab8vzrd4qqt/practical-haxejava-haxec/) on [Prezi](http://prezi.com/)





