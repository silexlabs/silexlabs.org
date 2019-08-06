---
author: "lexa"
comments: true
date: "2010-10-12T13:15:47.000Z"
layout: "post"
title: "Actions & Filters"
categories: ["Blog Silex","The Blog"]
tags: ["dev","Haxe","hooks"]

---
**This post is aimed at developers.**
As you certainly know, in order to unify development of SILEX, we are moving from a solution using JavaScript, ActionScript2, ActionScript3 and PHP to a solution using haXe targetting all these platforms.
Since haXe provides no way of using references in PHP, we have to make some changes in our Hook system. In order to do that, we are now introducing a new system : Actions and Filters.
The following aims at explaining how this new system will work and how it will be articulated.

<!-- more -->


# The issue


The hook system in SILEX works pretty well. The problem comes from the move to the haXe language.

The fact is that the hook system makes an extensive use of references (giving parameters as references) to allow a hook to modify a parameter so that a new value may be used in place when resuming to normal flow.

Although this system was working with pure PHP it is unusable in haXe because haXe does not support references.


# The solution


We are going to implement something that’s close to WordPress Actions & Filters system.


## Actions


Actions will call registered handlers. These handlers will be able to do whatever they want to do (such as displaying a prompt to the user or logging something).
Also, in the future, we may add the possibility for action handlers to prevent the action from taking place.

Filters

Filters are to be used in order to modify some data. Those data could be strings or any other type of object. The filter is simply called with a set of parameters and returns the new value for the object to be filtered.

Filter calls are chained which means that the third filter gets the modified value from the first and second filters.


## Several filter handlers


When several filter handlers are registered on the same filter, the first one gets the initial value and returns a new value. This new value is then passed to the second filter that returns a second new value. This second value gets passed to the third filter and so on. The applyFilter function (see below) will then only return the new value from the last filter.


# Implementation


The implementation is pretty straightforward but there are something to account for before doing it.

There are three cases:




  1. An action/filter is dispatched from JS, it has to be relayed to the AS side.


  2. An action/filter is dispatched from AS, it has to be relayed to the JS side.


  3. An action/filter is dispatched from PHP, it will stay in PHP.


So, to sum up things: when an action/filter is dispatched on the client side, it stays on the client side (but is dispatched across all platforms used on this side). When an action/filter is dispatched on the server side, it stays on the server side.


### At the moment


At the moment, we will stick to writing a class that would work on all platforms but without any communication between platforms. This will make it easier and will fit our needs.  So, right now, an action/filter dispatched in JS will stay in JS and one dispatched in AS will stay in AS.

Also, note that we do not plan to support communication between the client and the server sides.


# The class


Only one class will be used: it will manage the dispatching of actions and filters. Here is the proposed signature for this class:


## HookManager


This class would be responsible of registering handlers for actions and dispatching them.


### addActionHandler


Action Handlers would take 1 parameter:




  * An array of parameters.


Handlers return either true or false (false to prevent the action from taking place if this is implemented in the future).

The addActionHandler function takes the following parameters:


  * actionName the name of the action to link the handler with.


  * handler the handler to be added. If you are using this function from haXe, you can pass a function reference as you would normally do. If you are in PHP, you can pass your PHP function as you would do it with [call_user_func_array](http://fr.php.net/manual/en/function.call-user-func-array.php).




### applyAction


This method calls all action handlers who are registered to the specified action.




  * action is a string specifying the action.


  * parameters is an array of parameters that will be passed to the action handlers. You can either pass a PHP array or an haXe array.


It returns true if the action took place or false if it was cancelled (if preventing action is to be implemented).


### removeAction


This function removes the action handler given as parameters from the list of handlers to be called for the action.


## addFilterHandler


This function allows one to register an handler for a filter.

Handlers take one parameter, which is the value to filter and return the value once filtered.

This function takes two arguments:




  * filter is a string specifying the filter to link with.


  * handler is the handler to be added. Same remark than for addActionHandler.




### applyFilter


This function takes the name of the filter to be dispatched and the value to be filtered as parameters and returns the value once filtered by all filters.


### removeFilter


This function removes the filter handler from the list of filter handlers to be called for the specified filter.


