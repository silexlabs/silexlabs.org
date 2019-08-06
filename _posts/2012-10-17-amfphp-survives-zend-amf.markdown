---
author: "ariels"
comments: true
date: "2012-10-17T09:45:50.000Z"
layout: "post"
title: "AmfPHP survives Zend AMF"
categories: ["Blog amfPHP","Blog Silex Labs","The Blog"]
tags: ["amfphp","flash","futur","php"]

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


