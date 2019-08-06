---
author: "ariels"
comments: true
date: "2012-09-01T13:23:41.000Z"
layout: "post"
title: "AmfPHP Plugin TransactionManager"
categories: ["Exchange amfPHP"]

---
TransactionManager is an AMFPHP plugin that manages database transaction. Before a service is call, a transaction is started. If an exception is thrown by the service, the transaction is rollbacked otherwise the transaction is committed.







This works only if the used database extension is global for all service. The plugin ServicePropertySetter can be useful for that.







[https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/TransactionManager/documentation.txt](https://github.com/baracil/FPC-AMFPHP-Plugins/blob/master/TransactionManager/documentation.txt)


