---
author: "ariels"
comments: true
date: "2012-07-05T11:56:16.000Z"
layout: "post"
link: "https://www.silexlabs.org/big-data-leak-using-old-amfphp/"
slug: "big-data-leak-using-old-amfphp"
title: "Big Data leak using old AmfPHP"
wordpress_id: 133629
categories: ["Blog amfPHP","The Blog"]

---
This article was brought to our attention: [http://webwereld.nl/nieuws/111012/marketingsite-bol-com-lekt-gegevens-84-000-mensen.html](http://webwereld.nl/nieuws/111012/marketingsite-bol-com-lekt-gegevens-84-000-mensen.html) What it says is that a website suffered a leak because they were using an older version of amfPHP, and that this was with SQL injection. AmfPHP doesn't provide any functionality to interact with databases, its role is only to expose it so that it can be easily accessed. If they did however leave the service browser in production and didn't validate their inputs,  amfPHP probably made the attacker's job easier. It seems that the company reacted quickly and transparently to fix the flaw, so kudos to them for handling this properly.

We encourage our users to use the latest version, and to apply standard security best practices to prevent SQL injection, such as using prepared statements. See [http://php.net/manual/en/security.database.sql-injection.php](http://php.net/manual/en/security.database.sql-injection.php) for more information on SQL injection.

Read [https://www.silexlabs.org/amfphp/documentation/security/](https://www.silexlabs.org/amfphp/documentation/security/) for information about AmfPHP security. Following the instructions there will make it more difficult for attackers to learn about your server. But ultimately it is up to developers to make sure that the functionality they expose with amfPHP is secure. There are a lot of older AmfPHP installations out there that have a publicly available service browser. This is a good vector for an attack, so obviously the service browser should never be on a production server.

