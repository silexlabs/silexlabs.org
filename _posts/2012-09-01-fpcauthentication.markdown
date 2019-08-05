---
author: "ariels"
comments: true
date: "2012-09-01T13:16:22.000Z"
layout: "post"
link: "https://www.silexlabs.org/fpcauthentication/"
slug: "fpcauthentication"
title: "Amfphp Plugin FPCAuthentication"
wordpress_id: 136135
categories: ["Exchange","Exchange amfPHP"]

---
FPCAuthentication is an AMFPHP plugin that manages authentication of user with a login




and a password. The plugin offers two ways to authenticate, a basic and a elaborate one.







The basic method is a simple call to the server with the user login and its secret value




(generally a digest of a password) and the server grants or rejects the access according




to these two values. This method is simple but not 100% secured if not used over a secured




connection (a https connection) since message can be intercepted and even if a digest of




the password is sent, this digest is the password for the server.







The elaborate method is an exchange of 4 messages between the server and the client.




The secret of the user is never sent explicitly nor a direct digest of it. This method




allows the authentication of the user on the server but also the authentication of the




server on the client side. Also, it provides a random password only known by the client




and the server and only valid as long as the user does not logout. This temporary password




can be used to send sensible data to the server without compromising the user password.







[https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/FPCAuthentication/documentation.txt](https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/FPCAuthentication/documentation.txt)

