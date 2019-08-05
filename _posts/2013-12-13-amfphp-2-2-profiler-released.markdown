---
author: ariels
comments: true
date: 2013-12-13 10:57:31+00:00
excerpt: "Silex Labs is proud to present the latest and greatest version of <a title=\"\
  Amfphp\" href=\"https://www.silexlabs.org/amfphp/\" target=\"_blank\">Amfphp</a>:\
  \ <strong>Amfphp 2.2 Profiler</strong>! <a title=\"Downloads\" href=\"https://www.silexlabs.org/amfphp/downloads/\"\
  >Get it here</a>.Amfphp now comes with graphical profiling tools. The\
  \ idea behind these new features is to help you better understand how your server\
  \ shall perform live, and to give you easy access to the information you need to\
  \ eliminate bottlenecks and fine-tune performance.<a href=\"https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-10.37.45-AM.png\"\
  ><img class=\"aligncenter size-large wp-image-200707\" alt=\"Profiler, main view\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-10.37.45-AM-687x511.png\"\
  \ width=\"687\" height=\"511\" /></a><p style=\"text-align: center;\"\
  ><em><strong>Amfphp Profiler, showing average values for all types of call.</strong></em></p>\
  Amfphp's <a title=\"Using the Back Office\" href=\"https://www.silexlabs.org/amfphp/documentation/using-the-back-office/\"\
  \ target=\"_blank\">Back Office</a> now comes with a new Tab, the <a title=\"Profiler\"\
  \ href=\"https://www.silexlabs.org/amfphp/documentation/using-the-back-office/profiler/\"\
  \ target=\"_blank\">Profiler</a>.It shows information about how much\
  \ time is spent in the various stages of processing. The default view shows averages\
  \ for all your calls. You can get more details on a call by clicking on its name.\
  <!-- more --><a href=\"https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.27.59-AM.png\"\
  ><img class=\"aligncenter size-large wp-image-200708\" alt=\"Profiler, method detail\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.27.59-AM-687x521.png\"\
  \ width=\"687\" height=\"521\" /></a><p style=\"text-align: center;\"\
  ><em><strong>Amfphp Profiler, showing details for calls to returnLargeTypedDataSet</strong></em></p>\
  <h1>Adding your own markers</h1>If you want to add your own\
  \ markers, you can. For example if your service performs multiple database requests\
  \ before returning, you might want to know how much time is spent for each request.\
  \ If you add your own markers, these shall also show up in the profiler.\
  Below you can see the usual Amfphp times, plus CUSTOM operation 1 to 3.\
  <a href=\"https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.29.05-AM.png\"\
  ><img class=\"aligncenter size-large wp-image-200709\" alt=\"Profiler, custom markers\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.29.05-AM-687x535.png\"\
  \ width=\"687\" height=\"535\" /></a><p style=\"text-align: center;\"\
  ><em><strong>Amfphp Profiler, showing times for custom markers</strong></em></p>\
  <h1>The Service Browser's Call Repeater</h1>The Service Browser\
  \ now comes with a Call Repeater. It allows you to generate a new request as soon\
  \ as the old one is finished. You can also control the number of concurrent users.\
  <a href=\"https://www.silexlabs.org/wp-content/uploads/2013/12/Screen-Shot-2013-12-13-at-10.17.01-AM.png\"\
  ><img class=\"aligncenter\" alt=\"Amfphp Service Browser Call Repeater\" src=\"\
  https://www.silexlabs.org/wp-content/uploads/2013/12/Screen-Shot-2013-12-13-at-10.17.01-AM-687x121.png\"\
  \ width=\"687\" height=\"121\" /></a><p style=\"text-align: center;\"\
  ><em><strong>Service Browser detail: the Call Dialog, with emphasis on the Call\
  \ Repeater functions</strong></em></p>You can then observe this in the\
  \ Profiler using the auto refresh function.This is useful for example\
  \ if you want to tweak your system for performance and don’t want to test manually\
  \ between each change.The video below demonstrates this, with and without\
  \ flushing at each refresh, and using adding <a href=\"http://baguetteamf.com\"\
  ><b>Baguette AMF </b></a>as an example of tweaking performance.<p style=\"\
  text-align: center;\"><iframe width=\"420\" height=\"315\" src=\"https://www.youtube.com/embed/-IFYHlPJb_k\"\
  \ frameborder=\"0\" allowfullscreen></iframe></p><p style=\"text-align:\
  \ center;\"><em><strong>Video showing how to use the Service Browser's Call Repeater\
  \ together with the Profiler. <a href=\"http://www.youtube.com/watch?v=-IFYHlPJb_k\"\
  \ target=\"_blank\">View online here</a>.</strong></em></p><h1>More\
  \ New Stuff</h1>Before this release, there were 2 other articles showcasing\
  \ other new developments for Amfphp 2.2 Profiler. They can be read <a title=\"AmfPHP\
  \ 2.2 Teaser #1 Putting your code comments to good use\" href=\"https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/\"\
  >here</a> and <a title=\"AmfPHP 2.2 Teaser #2 Value Object Love\" href=\"https://www.silexlabs.org/180181/the-blog/amfphp-2-2-teaser-2-value-object-love/\"\
  >here</a>.You can now send and received AMF Vectors.<h1>Thank\
  \ you</h1><ul><li>A big thank you to <a href=\"https://www.silexlabs.org/members/pol\"\
  >Pol Goasdoué</a> who provided invaluable feedback and suggestions about the User\
  \ Experience and came up with the new design. Amfphp has never looked better, and\
  \ it's thanks to him.</li><li>Thanks also to <a href=\"http://mickpowellstips.blogspot.ch/2013/03/amfphp-with-flash-vector-class.html\"\
  >Mick Powell </a>who provided inspiration and code regarding AMF Vectors.</li>\
  </ul><strong>If you've read so far, you're surely dying to try\
  \ it out. <a title=\"Downloads\" href=\"https://www.silexlabs.org/amfphp/downloads/\"\
  >Get Amfphp 2.2 Profiler here</a>!</strong><img class=\"aligncenter\"\
  \ alt=\"\" src=\"http://farm3.staticflickr.com/2153/2066166376_4b65f208f5_z.jpg\"\
  \ width=\"640\" height=\"428\" /><p style=\"text-align: center;\">Yes,\
  \ this is a <a href=\"http://www.flickr.com/photos/tinou/2066166376/sizes/m/in/photostream/\"\
  \ target=\"_blank\">profile</a>.</p>"
layout: post
link: https://www.silexlabs.org/amfphp-2-2-profiler-released/
slug: amfphp-2-2-profiler-released
title: Amfphp 2.2 Profiler Released
wordpress_id: 200755
categories:
- "Blog amfPHP"
- "The Blog"
---

Silex Labs is proud to present the latest and greatest version of [Amfphp](https://www.silexlabs.org/amfphp/): **Amfphp 2.2 Profiler**! [Get it here](https://www.silexlabs.org/amfphp/downloads/).

				Amfphp now comes with graphical profiling tools. The idea behind these new features is to help you better understand how your server shall perform live, and to give you easy access to the information you need to eliminate bottlenecks and fine-tune performance.

				[![Profiler, main view](https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-10.37.45-AM-687x511.png)](https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-10.37.45-AM.png)


_**Amfphp Profiler, showing average values for all types of call.**_


				Amfphp's [Back Office](https://www.silexlabs.org/amfphp/documentation/using-the-back-office/) now comes with a new Tab, the [Profiler](https://www.silexlabs.org/amfphp/documentation/using-the-back-office/profiler/).

				It shows information about how much time is spent in the various stages of processing. The default view shows averages for all your calls. You can get more details on a call by clicking on its name.

				<!-- more -->

				[![Profiler, method detail](https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.27.59-AM-687x521.png)](https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.27.59-AM.png)


_**Amfphp Profiler, showing details for calls to returnLargeTypedDataSet**_





# Adding your own markers


				If you want to add your own markers, you can. For example if your service performs multiple database requests before returning, you might want to know how much time is spent for each request. If you add your own markers, these shall also show up in the profiler.

				Below you can see the usual Amfphp times, plus CUSTOM operation 1 to 3.

				[![Profiler, custom markers](https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.29.05-AM-687x535.png)](https://www.silexlabs.org/wp-content/uploads/2013/11/Screen-Shot-2013-12-12-at-11.29.05-AM.png)


_**Amfphp Profiler, showing times for custom markers**_





# The Service Browser's Call Repeater


				The Service Browser now comes with a Call Repeater. It allows you to generate a new request as soon as the old one is finished. You can also control the number of concurrent users.

				[![Amfphp Service Browser Call Repeater](https://www.silexlabs.org/wp-content/uploads/2013/12/Screen-Shot-2013-12-13-at-10.17.01-AM-687x121.png)](https://www.silexlabs.org/wp-content/uploads/2013/12/Screen-Shot-2013-12-13-at-10.17.01-AM.png)


_**Service Browser detail: the Call Dialog, with emphasis on the Call Repeater functions**_


				You can then observe this in the Profiler using the auto refresh function.

				This is useful for example if you want to tweak your system for performance and don’t want to test manually between each change.

				The video below demonstrates this, with and without flushing at each refresh, and using adding [**Baguette AMF **](http://baguetteamf.com)as an example of tweaking performance.





_**Video showing how to use the Service Browser's Call Repeater together with the Profiler. [View online here](http://www.youtube.com/watch?v=-IFYHlPJb_k).**_





# More New Stuff


				Before this release, there were 2 other articles showcasing other new developments for Amfphp 2.2 Profiler. They can be read [here](https://www.silexlabs.org/179725/the-blog/amfphp-2-2-teaser-1-putting-your-code-comments-to-good-use/) and [here](https://www.silexlabs.org/180181/the-blog/amfphp-2-2-teaser-2-value-object-love/).

				You can now send and received AMF Vectors.


# Thank you






  * A big thank you to [Pol Goasdoué](https://www.silexlabs.org/members/pol) who provided invaluable feedback and suggestions about the User Experience and came up with the new design. Amfphp has never looked better, and it's thanks to him.


  * Thanks also to [Mick Powell ](http://mickpowellstips.blogspot.ch/2013/03/amfphp-with-flash-vector-class.html)who provided inspiration and code regarding AMF Vectors.


				**If you've read so far, you're surely dying to try it out. [Get Amfphp 2.2 Profiler here](https://www.silexlabs.org/amfphp/downloads/)!**

				![](http://farm3.staticflickr.com/2153/2066166376_4b65f208f5_z.jpg)


Yes, this is a [profile](http://www.flickr.com/photos/tinou/2066166376/sizes/m/in/photostream/).
