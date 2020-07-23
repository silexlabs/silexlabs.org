---
layout: post
title: AmfPHP Plugin TransactionManager

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
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
permalink: "/transactionmanager/"
---

TransactionManager is an AMFPHP plugin that manages database transaction. Before a service is call, a transaction is started. If an exception is thrown by the service, the transaction is rollbacked otherwise the transaction is committed.

This works only if the used database extension is global for all service. The plugin ServicePropertySetter can be useful for that.

