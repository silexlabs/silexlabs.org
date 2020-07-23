---
layout: post
title: Amfphp Plugin FPCAuthentication

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Exchange
- Exchange amfPHP
tags: []

_epLastMessage: ''
_edit_last: '10'
_itemCurrentVersion: '1.0'
_selectedProject: AMFPHP
_selectedVersionsArray: v2.0.0
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: Ariel Sommeria-Klein
first_name: Ariel
last_name: Sommeria-Klein
permalink: "/fpcauthentication/"
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

