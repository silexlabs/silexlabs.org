---
author: ariels
comments: true
date: 2012-10-17 09:45:50+00:00
excerpt: "Adobe has given up on its PHP products, it seems. And yes, this is yet another\
  \ good reason to <a title=\"Downloads\" href=\"https://www.silexlabs.org/amfphp/downloads/\"\
  >use amfPHP</a>!It's no secret Adobe is refocusing the <a href=\"http://www.adobe.com/devnet/flashplatform.html\"\
  >Flash Platform</a>, around <a href=\"http://www.adobe.com/devnet/flashplatform/whitepapers/roadmap.html\"\
  >Gaming and Premium Video</a>. It would seem that helping Flash to communicate with\
  \ PHP should be a part of that vision. Indeed, Adobe has 2 products related to PHP:\
  \ <a href=\"http://www.adobe.com/products/flash-builder-php.html\">Flash Builder\
  \ for PHP</a> and <a href=\"http://framework.zend.com/manual/1.12/en/zend.amf.html\"\
  >Zend AMF</a>. It seems however that both products are in trouble.What's\
  \ up with Zend AMF? <a href=\"http://framework.zend.com/download/amf\">The old download\
  \ link </a>now shows a \"Page Not Found\" error.<p style=\"text-align:\
  \ center;\"><img class=\"aligncenter size-large wp-image-136525\" title=\"Zend 404\"\
  \ src=\"https://www.silexlabs.org/wp-content/uploads/2012/10/Screen-Shot-2012-10-10-at-4.01.24-PM-687x324.png\"\
  \ alt=\"\" width=\"687\" height=\"324\" /></p>A bit of digging brought\
  \ us <a href=\"https://twitter.com/weierophinney/statuses/230271276151873536\">this\
  \ nice quote on Twitter:</a> : <em><strong>[Zend AMF is ] dropped as of rc1. We\
  \ moved it to its own repo as it's unmaintained, and the zf1 version is more stable.</strong></em>\
  <p style=\"text-align: center;\"><em><strong></strong><img class=\"aligncenter\
  \ size-large wp-image-136528\" title=\"flash builder for PHP\" src=\"https://www.silexlabs.org/wp-content/uploads/2012/10/flash-builder-for-PHP-687x252.png\"\
  \ alt=\"\" width=\"687\" height=\"252\" /></em></p>What about\
  \ <a href=\"http://www.adobe.com/products/flash-builder-php.html\">Flash Builder\
  \ for PHP</a> ?.  It seems that it's stuck at version 4.5. <a href=\"http://www.adobe.com/products/flash-builder.html\"\
  >Flash Builder</a> now has a 4.6 and has a <a href=\"http://labs.adobe.com/technologies/flashbuilder4-7/\"\
  >beta for 4.7</a> . <strong>The update for Flash Builder for PHP was apparently\
  \ <a href=\"http://forums.adobe.com/message/4662034\">planned for Q1 2012</a> but\
  \ never came.</strong>So what to do? Obviously here at <a href=\"http://silexlabs.org/silexlabs/\"\
  >Silex Labs</a> we can't do much about Flash Builder for PHP, but we do have this\
  \ product that should be of interest to Zend AMF users. It's called <a href=\"http://silexlabs.org/amfphp/\"\
  >AmfPHP</a>. It's not an exact equivalent. <strong>AmfPHP's goal is to help build\
  \ Cloud Services in PHP for various client technologies and protocols including\
  \ <a href=\"http://en.wikipedia.org/wiki/Action_Message_Format\">AMF</a>; whereas\
  \ Zend AMF aims to add AMF support to <a href=\"http://framework.zend.com/\">Zend\
  \ Framework</a>.</strong><p style=\"text-align: center;\"><img class=\"\
  aligncenter size-large wp-image-135923\" title=\"header-amfphp\" src=\"https://www.silexlabs.org/wp-content/uploads/2012/07/header-amfphp-687x124.jpg\"\
  \ alt=\"\" width=\"687\" height=\"124\" /></p>AmfPHP has been around since\
  \ 2003, but Adobe chose to develop their own solution in collaboration with Zend.\
  \ How did they stack up against each other?Zend AMF's advantages:\
  <ul><li>Official Adobe Product</li><li>Zend Framework\
  \ Integration</li><li>Flash Builder for PHP integration</li>\
  </ul>AmfPHP's advantages:<ul><li>Vast Community Support,\
  \ tutorials, etc.</li><li>Service Browser</li><li>Client Code\
  \ Generator for multiple client technologies</li><li>No need to code gateway,\
  \ making it easier to get started</li><li>plugins</li><li>support\
  \ for other protocols</li></ul>Competition is good, and there\
  \ was space for both products.<strong> Zend AMF will be missed!</strong> In the\
  \ meantime, you can of course <strong><a href=\"https://www.silexlabs.org/amfphp/downloads/\"\
  >download amfPHP here</a>.</strong>If you need help switching or simply\
  \ have some questions, <a href=\"https://www.silexlabs.org/groups/amfphp/amfphp-users/forum/\"\
  >please get in touch via the forums</a>We are also looking for people\
  \ with experience with both amfPHP and Zend Framework to help us bridge both platforms.\
  \ If you fit the bill we would be glad to provide any assistance you might need."
layout: post
link: https://www.silexlabs.org/amfphp-survives-zend-amf/
slug: amfphp-survives-zend-amf
title: AmfPHP survives Zend AMF
wordpress_id: 136374
categories:
- "Blog amfPHP"
- "Blog Silex Labs"
- "The Blog"
tags:
- "amfphp"
- "flash"
- "futur"
- "php"
---

Adobe has given up on its PHP products, it seems. And yes, this is yet another good reason to [use amfPHP](https://www.silexlabs.org/amfphp/downloads/)!

				It's no secret Adobe is refocusing the [Flash Platform](http://www.adobe.com/devnet/flashplatform.html), around [Gaming and Premium Video](http://www.adobe.com/devnet/flashplatform/whitepapers/roadmap.html). It would seem that helping Flash to communicate with PHP should be a part of that vision. Indeed, Adobe has 2 products related to PHP: [Flash Builder for PHP](http://www.adobe.com/products/flash-builder-php.html) and [Zend AMF](http://framework.zend.com/manual/1.12/en/zend.amf.html). It seems however that both products are in trouble.

				What's up with Zend AMF? [The old download link ](http://framework.zend.com/download/amf)now shows a "Page Not Found" error.


![](https://www.silexlabs.org/wp-content/uploads/2012/10/Screen-Shot-2012-10-10-at-4.01.24-PM-687x324.png)


				A bit of digging brought us [this nice quote on Twitter:](https://twitter.com/weierophinney/statuses/230271276151873536) : _**[Zend AMF is ] dropped as of rc1. We moved it to its own repo as it's unmaintained, and the zf1 version is more stable.**_


_****![](https://www.silexlabs.org/wp-content/uploads/2012/10/flash-builder-for-PHP-687x252.png)
				_


				What about [Flash Builder for PHP](http://www.adobe.com/products/flash-builder-php.html) ?.  It seems that it's stuck at version 4.5. [Flash Builder](http://www.adobe.com/products/flash-builder.html) now has a 4.6 and has a [beta for 4.7](http://labs.adobe.com/technologies/flashbuilder4-7/) . **The update for Flash Builder for PHP was apparently [planned for Q1 2012](http://forums.adobe.com/message/4662034) but never came.**

				So what to do? Obviously here at [Silex Labs](http://silexlabs.org/silexlabs/) we can't do much about Flash Builder for PHP, but we do have this product that should be of interest to Zend AMF users. It's called [AmfPHP](http://silexlabs.org/amfphp/). It's not an exact equivalent. **AmfPHP's goal is to help build Cloud Services in PHP for various client technologies and protocols including [AMF](http://en.wikipedia.org/wiki/Action_Message_Format); whereas Zend AMF aims to add AMF support to [Zend Framework](http://framework.zend.com/).**


![](https://www.silexlabs.org/wp-content/uploads/2012/07/header-amfphp-687x124.jpg)


				AmfPHP has been around since 2003, but Adobe chose to develop their own solution in collaboration with Zend. How did they stack up against each other?

				Zend AMF's advantages:




  * Official Adobe Product


  * Zend Framework Integration


  * Flash Builder for PHP integration


				AmfPHP's advantages:


  * Vast Community Support, tutorials, etc.


  * Service Browser


  * Client Code Generator for multiple client technologies


  * No need to code gateway, making it easier to get started


  * plugins


  * support for other protocols


				Competition is good, and there was space for both products.** Zend AMF will be missed!** In the meantime, you can of course **[download amfPHP here](https://www.silexlabs.org/amfphp/downloads/).**

				If you need help switching or simply have some questions, [please get in touch via the forums](https://www.silexlabs.org/groups/amfphp/amfphp-users/forum/)

				We are also looking for people with experience with both amfPHP and Zend Framework to help us bridge both platforms. If you fit the bill we would be glad to provide any assistance you might need.
