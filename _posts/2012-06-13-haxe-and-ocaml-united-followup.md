---
layout: post
title: 'Haxe and OCaml
united: followup!'

type: post
parent_id: '0'
published: true
password: ''
status: publish
categories:
- Blog Silex Labs
- Silex Labs Events
- The Blog
tags: []

_epLastMessage: ''
_edit_last: '11'
_itemCurrentVersion: ''
_thumbnail_id: '133301'
layout_header: "- Select -"
layout_footer: "- Select -"
skin: "- Select -"
wpautop: "- Select -"

display_name: lexa
first_name: lexa
last_name: ''
permalink: "/haxe-and-ocaml-united-followup/"
---

![Haxe and OCaml by Pol ;)]({{ site.baseurl }}/assets/ocaml-haxe-021.jpg "Haxe and OCaml by Pol ;)")



We have discovered a much alive community, new projects and great people.  
Several new ideas came up, as a proof that mixing is good, and that there is a will to collaborate to make something big together!

**Read this article to know what you can do to help Silex Labs make the bridge between the OCaml and the Haxe communities. Leave comments to support this action. [Join the working group "Haxe/OCaml Mix"](https://www.silexlabs.org/groups/labs/haxe-community-meetings/haxe-ocaml-mix/ "Haxe / OCaml mix working group"). **



[  
](https://twitter.com/silexlabs/status/198049310972194816/photo/1)

A short presentation of Haxe
============================

[![Conference by Silex



“Please consider that the approach of many APIs with the same syntax seems trivial to us. What would be interesting is to talk about the choices made in the compiler to implement the different programming concepts in the target languages.” - [Emmanuel](http://www-apr.lip6.fr/~chaillou/), professor at the University of Paris VI.

![]({{ site.baseurl }}/assets/7362437384_e11ca39737_b1-300x225.jpg "7362437384_e11ca39737_b")And this was already a very good
point: OCamlers are interested in what we have achieved with Haxe. In particular the many targets, and some innovative libraries - i.e. NME. Also the very short part about Silex Labs, and Silex seemed to evoke
reactions: communication, production and WYSIWYG surprisingly are words which interest our cousins OCamlers.  


So we switched from a talk to an open discussion, exposing facts about the amazing job made by the Haxers based on the OCaml work. The fact that the OCaml skills are not common in our community lead us to talk about the possible interactions, about the impact of such interactions, about the actors of the OCaml community, and about the lack of communication between our two worlds.

“We saw Nicolas Cannasse a few years ago, with his great vision. It is great to see that Haxe is not only game oriented anymore... And there are so many targets and nice looking apps, I will definitely try it on my spare time!” - A a student attendee.

The OCaml ecosystem
===================

The Haxers there had the chance to talk with active members of the much alive and very discreet OCaml community. We discovered several innovative projects with roots in OCaml.

[![]({{ site.baseurl }}/assets/text_js_of_ocaml_with_shadow.png)](http://ocsigen.org/js_of_ocaml/)





A more ambitious project getting famous these times is [Ocsigen, a web server](http://ocsigen.org/ocsigenserver/) which serves compiled OCaml code. The client side code and server side code of a module are mixed in in the same file, which let the developers design very natural and logical application architectures. The server also enables a new control of security and validation of web applications, since all HTML inputs and outputs are parsed and validated at runtime.



And last but not least, we had the chance to discover [Opa, a platform for writing web applications](http://opalang.org/) in a very innovative way. It is close to the Haxe and Ocsigen approach, but the whole platform is a blast.



These discoveries have been a blast to us, Haxers unconscious of these initiatives which happen so close to ours, and especially to us, French based developers, with these French born technologies. And we say we have a great product but lack visibility and communication? Now we know that... We are not alone!

![]({{ site.baseurl }}/assets/ET_the_Extra_Terrestrial1.jpg "ET_the_Extra_Terrestrial")

And this is a good news because our fellow OCamlers are very friendly to us.

New ideas
=========

So after this epic moment, we have retained several ideas to interact between our two worlds - i.e. Ocaml and Haxe, research and production, public/state and private/corporate.

### Development matters



[![]({{ site.baseurl }}/assets/haxe-compiler1.png "haxe compiler")![]({{ site.baseurl }}/assets/convert1.png "convert")![]({{ site.baseurl }}/assets/IconLarge.png "haxejs")](http://caml.inria.fr/)

On the other hand, the conversion of OCaml bytecode to Haxe source code is possible. Indeed it is not so complicated since the whole [JS of OCaml](http://ocsigen.org/js_of_ocaml/) project was done in under 2 month of programming by a talented OCaml coder (source?).



This would make possible several “crazy”
things: 
*   convert the OCaml code, libraries and projects in Haxe, which would empower OCaml with as many targets as we have got in Haxe. Plus all the OCaml code out there - mostly research and financial applications, would be translatable to Haxe source code. This could be a motivation for OCaml developers to consider learning Haxe in complement to their current skill set.  
    [  
    ![]({{ site.baseurl }}/assets/logo_caml1.png "Caml")![]({{ site.baseurl }}/assets/convert1.png "convert")![]({{ site.baseurl }}/assets/www.haxenme-90x90.png "haxe nme")  
    ](http://caml.inria.fr/)

*   Since the Haxe compiler itself is written in OCaml, it could be translated in Haxe, which is a great perspective for us, Haxe developers, isn’t it?  




*   the Haxe compiler could probably be compiled in php, java, .net and neko - and maybe nodejs, which may be interesting for hosted solutions and on the fly compilation - this would have an immediate application with Silex v2 and Cocktail to compile Haxe javascript/CSS/HTML applications to native and web applications on the server side[![]({{ site.baseurl }}/assets/haxe-compiler1.png "haxe compiler")![]({{ site.baseurl }}/assets/convert1.png "convert")](http://caml.inria.fr/)![]({{ site.baseurl }}/assets/Netframework-version-4.png "dot net")![]({{ site.baseurl }}/assets/php.png "php")![]({{ site.baseurl }}/assets/java.jpg "java")

Another work area could be to target OCaml with Haxe source code. This is "just" another target for Haxe. Nobody could really tell how useful that could be... At least if we could find the resources to do that, this would be made by OCaml developers and they would have to create a new Haxe target, which would probably take them to documenting and improving this process.



### Language theory and research matters

The idea here is that it seems easier to find funding to back a thesis than to back a development.

![]({{ site.baseurl }}/assets/research.gif "research")

A PhD student or a researcher would probably be able to do one or more of these tasks as part of a thesis or a research unit

*   audit and documentation of the Haxe compiler and the targets
*   proposals for evolutions of the compiler to gain in productivity, maintainability, and have an easier learning curve, …
*   proposals for the evolution of the syntax, the macros, the libraries
*   proposal to make the implementation of new targets easier and more maintainable
*   proposal to make Haxe a provable language (source? explanation of this?)
*   write the specifications of the Haxe language
*   a comparison of Haxe and OCaml
: syntaxes, productivity, maintenability of the applications, learning curve, the organization of the whole projects and communities...

Please submit ideas and remarks in the comments. **This is probably the most important matter to discuss**, since it is the most likely to occur in the short run.

Next steps
==========

As Silex Labs members, we have said that we will help OCaml to communicate - very simply to start, so we planned an interview of two key members of OCaml community, maybe in partnership with a parisan web radio. The goal is to spread the world about OCaml, as well as to introduce the OCaml ecosystem to the Haxe community.

To help several OCaml developers to find answers to their questions, we have opened the ["Haxe/OCaml mix" working group](https://www.silexlabs.org/groups/labs/haxe-community-meetings/haxe-ocaml-mix/ "The Haxe/OCaml working group, discussions to help OCamlers understand Haxe and Haxers understand OCaml"), and **we invite volunteer Haxe developers to start a (two way) discussion with them there**.

Silex Labs is investing time in networking with OCaml community members, to make several of the ideas explained above to become a reality. We will try to fund a study, a thesis or a development, and make our best in community management in order to start a movement with inertia.



And finally, this could lead to several partnerships with Silex Labs, IRILL, Ocsigen, OCaml Pro, ... Who knows?

Special thanks
==============

Thank you to

*   IRILL for the invitation
*   the audience - and especially the enthousiasts Benjamin C., Gregoire H., Denis C., Basile S, Vincent B., Fabrice LF, and the organizers Roberto and Emmanuel who also supervised the meeting
*   Alex Hoyau for helping with this article and initiating this movement
*   Raphaël H. for the twitts and pics
*   Isabelle, Pol, Nicolas, Yannick and Raph for their presence and encouragements
*   Haxe et OCaml for being such great tools, and making all this possible!