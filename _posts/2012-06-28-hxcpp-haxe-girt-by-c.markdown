---
author: koala
comments: true
date: 2012-06-28 14:45:52+00:00
excerpt: "This talk covers the broad design strategy of the Haxe c++ back-end, and\
  \ how this design effects the implementation. Some low-level details will also be\
  \ discussed, which will imply some coding tips for optimized performance.\
  <h3><a href=\"https://www.silexlabs.org/132147/the-blog/hxcpp-%e2%80%93-haxe-girt-by-c-2/attachment/hugh-sanderson/\"\
  \ rel=\"attachment wp-att-132148\"><img class=\"alignleft size-full wp-image-132148\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2012/04/hugh-sanderson1.jpg\"\
  \ alt=\"\" width=\"100\" height=\"100\" /></a>Dr Hugh Sanderson - Lead Software\
  \ Engineer at <a href=\"http://ddd.com/\" target=\"_blank\">Dynamic Digital Depth</a></h3>\
  By day, Hugh Sanderson is the Lead Software Engineer at Dynamic Digital\
  \ Depth, where he writes software for all types of stereoscopic 3D devices; by night,\
  \ he develops with Haxe and is the primary author of the C++ back-end. Hugh started\
  \ using Haxe in 2007 while looking for a cross platform development tool and by\
  \ the end of that year he was working on the neash library for flash-like functions\
  \ on the neko platform. In 2008, craving ever-higher frame rates, he started to\
  \ work on the C++ back-end, which saw its first official release in mid-2009. He\
  \ has continued to evolve the C++ back-end, and it now runs on almost all computing\
  \ platforms that have C++ compilers. Hugh is also a principal developer of several\
  \ Haxe libraries including NME, which replaced neash, to provide cross platform\
  \ graphics and utilities.Here are the other videos of the <a href=\"\
  http://wwx.haxe.org/\" target=\"_blank\">WWX</a> :- <a href=\"https://www.silexlabs.org/132111/the-blog/may-the-force-be-with-you-making-a-game-with-awe6/\"\
  \ target=\"_blank\">AWE6 by Rob Fell</a>- <a href=\"https://www.silexlabs.org/133359/the-blog/haxe-nme-vs-the-world/\"\
  \ target=\"_blank\">NME vs the World by Philippe Elsass</a>- <a href=\"\
  https://www.silexlabs.org/133423/the-blog/first-contact-selling-haxe-to-clients-and-developers/\"\
  \ target=\"_blank\">First Contact : Selling Haxe to clients and developers\
  </a>- <a href=\"https://www.silexlabs.org/133720/the-blog/haxe-3-and-4-%E2%80%93-plans-for-world-domination/\"\
  \ target=\"_blank\">Haxe 3 and 4 – Plans for World Domination by Nicolas Cannasse</a><a\
  \ href=\"https://www.silexlabs.org/133423/the-blog/first-contact-selling-haxe-to-clients-and-developers/\"\
  \ target=\"_blank\"></a>- <a href=\"https://www.silexlabs.org/133823/the-blog/haxejava-and-haxec-practical-examples-and-implementation-details/\"\
  \ target=\"_blank\">Haxe/Java and Haxe/C#: Practical examples and implementation\
  \ details by Cauê Waneck</a>- <a href=\"https://www.silexlabs.org/133902/the-blog/cocktail-v1-0-sunrise-cross-platform-uis-with-haxe/\"\
  \ target=\"_blank\">Cocktail v1.0 Sunrise, cross platform UIs with haXe by Alex\
  \ Hoyau &amp; Yannick Dominguez</a>- <a href=\"https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056\"\
  \ target=\"_blank\">Vector Graphics in the browser with Haxe by Franco Ponticelli</a>\
  - <a href=\"https://www.silexlabs.org/135169/the-blog/multiplatform-productivity-tool-with-haxe/\"\
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
  \ src=\"http://www.youtube.com/embed/KLSN2GuFktE\" frameborder=\"0\" width=\"640\"\
  \ height=\"480\"></iframe><h2>The slides</h2><iframe src=\"\
  https://docs.google.com/file/d/0B6r3PiGQifuNNEdxVXUtakNpRDQ/preview\" width=\"640\"\
  \ height=\"480\"></iframe>"
layout: post
link: https://www.silexlabs.org/hxcpp-haxe-girt-by-c/
slug: hxcpp-haxe-girt-by-c
title: HXCPP – Haxe girt by C++
wordpress_id: 133591
categories:
- "Blog Silex Labs"
- "Silex Labs Events"
- "The Blog"
tags:
- "WWX2012"
---

This talk covers the broad design strategy of the Haxe c++ back-end, and how this design effects the implementation. Some low-level details will also be discussed, which will imply some coding tips for optimized performance.


### [![](https://www.silexlabs.org/wp-content/uploads/2012/04/hugh-sanderson1.jpg)](https://www.silexlabs.org/132147/the-blog/hxcpp-%e2%80%93-haxe-girt-by-c-2/attachment/hugh-sanderson/)Dr Hugh Sanderson - Lead Software Engineer at [Dynamic Digital Depth](http://ddd.com/)


				By day, Hugh Sanderson is the Lead Software Engineer at Dynamic Digital Depth, where he writes software for all types of stereoscopic 3D devices; by night, he develops with Haxe and is the primary author of the C++ back-end. Hugh started using Haxe in 2007 while looking for a cross platform development tool and by the end of that year he was working on the neash library for flash-like functions on the neko platform. In 2008, craving ever-higher frame rates, he started to work on the C++ back-end, which saw its first official release in mid-2009. He has continued to evolve the C++ back-end, and it now runs on almost all computing platforms that have C++ compilers. Hugh is also a principal developer of several Haxe libraries including NME, which replaced neash, to provide cross platform graphics and utilities.

				Here are the other videos of the [WWX](http://wwx.haxe.org/) :
				- [AWE6 by Rob Fell
				](https://www.silexlabs.org/132111/the-blog/may-the-force-be-with-you-making-a-game-with-awe6/)- [NME vs the World by Philippe Elsass
				](https://www.silexlabs.org/133359/the-blog/haxe-nme-vs-the-world/)- [First Contact : Selling Haxe to clients and developers
				](https://www.silexlabs.org/133423/the-blog/first-contact-selling-haxe-to-clients-and-developers/)- [Haxe 3 and 4 – Plans for World Domination by Nicolas Cannasse](https://www.silexlabs.org/133720/the-blog/haxe-3-and-4-%E2%80%93-plans-for-world-domination/)[
				](https://www.silexlabs.org/133423/the-blog/first-contact-selling-haxe-to-clients-and-developers/)- [Haxe/Java and Haxe/C#: Practical examples and implementation details by Cauê Waneck](https://www.silexlabs.org/133823/the-blog/haxejava-and-haxec-practical-examples-and-implementation-details/)
				- [Cocktail v1.0 Sunrise, cross platform UIs with haXe by Alex Hoyau & Yannick Dominguez](https://www.silexlabs.org/133902/the-blog/cocktail-v1-0-sunrise-cross-platform-uis-with-haxe/)
				- [Vector Graphics in the browser with Haxe by Franco Ponticelli](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)
				- [Multiplatform productivity tool with Haxe by Peter Halacsy](https://www.silexlabs.org/135169/the-blog/multiplatform-productivity-tool-with-haxe/)
				- [Getting pragmatic developers started with Haxe by Robert Bak](https://www.silexlabs.org/135257/the-blog/getting-pragmatic-developers-started-with-haxe/)[
				](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)- [Haxe macros : meta-programming done right by Juraj Kirchheim](https://www.silexlabs.org/135331/the-blog/haxe-macros-meta-programming-done-right/)[
				](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)- [Britzpetermann & Haxe by Nico Zimmermann](https://www.silexlabs.org/135480/the-blog/britzpetermann-haxe-6/)[
				](https://www.silexlabs.org/134056/the-blog/vector-graphics-in-the-browser-with-haxe/#more-134056)


## The video





## The slides



