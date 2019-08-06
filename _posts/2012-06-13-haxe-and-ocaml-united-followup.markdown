---
author: "lexa"
comments: true
date: "2012-06-13T09:52:51.000Z"
layout: "post"
title: "Haxe and OCaml united: followup!"
categories: ["Blog Silex Labs","Silex Labs Events","The Blog"]

---
![Haxe and OCaml by Pol ;)](https://www.silexlabs.org/wp-content/uploads/2012/06/ocaml-haxe-021.jpg)




One month ago, on May 3 2012 [Alex Hoyau from Silex Labs, presented Haxe, Cocktail and NME](https://www.silexlabs.org/132591/the-blog/haxe-and-ocaml-united/) to a public composed of [INRIA](http://www.inria.fr/en/) researchers, academics and members of the [IRILL](http://www.irill.org/) non profit organization. He was backed up by a bunch of Silex Labs regulars, which was very appreciated because the OCamlers did have a bunch of tricky questions for the president...




We have discovered a much alive community, new projects and great people.
Several new ideas came up, as a proof that mixing is good, and that there is a will to collaborate to make something big together!


**Read this article to know what you can do to help Silex Labs make the bridge between the OCaml and the Haxe communities. Leave comments to support this action. [Join the working group "Haxe/OCaml Mix"](https://www.silexlabs.org/groups/labs/haxe-community-meetings/haxe-ocaml-mix/). **

After this contact  we initiated a relationship with old timers of the [Caml](http://caml.inria.fr/) language - a must read "[A brief history of Caml](http://www.pps.jussieu.fr/~cousinea/Caml/caml_history.html)" and we continues to explore a new world for you ...


[
](https://twitter.com/silexlabs/status/198049310972194816/photo/1)





# <!-- more -->A short presentation of Haxe




[![Conference by Silex Labs: OCaml and Haxe united](https://p.twimg.com/Ar-czIzCMAENtcV.jpg:large)](https://twitter.com/silexlabs/status/198049310972194816/photo/1)This presentation was a clash of cultures, where the mountains meet, an experimental mix of complementary visions! Shortly after the start of the presentation it took an unexpected path, since most of the questions which were asked in the first ten minutes showed that people in the room had already understood what Haxe does, and how it works. And the questions about language theory began to fall like rain... Without any answers from the Haxers in the room. So we agreed that this is only a short introduction, that we would meet online to answer these very specific questions.


“Please consider that the approach of many APIs with the same syntax seems trivial to us. What would be interesting is to talk about the choices made in the compiler to implement the different programming concepts in the target languages.” - [Emmanuel](http://www-apr.lip6.fr/~chaillou/), professor at the University of Paris VI.

![](https://www.silexlabs.org/wp-content/uploads/2012/06/7362437384_e11ca39737_b1-300x225.jpg)And this was already a very good point: OCamlers are interested in what we have achieved with Haxe. In particular the many targets, and some innovative libraries - i.e. NME. Also the very short part about Silex Labs, and Silex seemed to evoke reactions: communication, production and WYSIWYG surprisingly are words which interest our cousins OCamlers.
“What you said at the end as an aside is precisely what we find complicated.” - [Basile](http://starynkevitch.net/Basile/index_en.html), researcher at [CEA, LIST](http://www-list.cea0fr), working on the famous [GCC compiler](http://gcc.gnu.org/) and [MELT](http://gcc-melt.org/).

So we switched from a talk to an open discussion, exposing facts about the amazing job made by the Haxers based on the OCaml work. The fact that the OCaml skills are not common in our community lead us to talk about the possible interactions, about the impact of such interactions, about the actors of the OCaml community, and about the lack of communication between our two worlds.

“We saw Nicolas Cannasse a few years ago, with his great vision. It is great to see that Haxe is not only game oriented anymore... And there are so many targets and nice looking apps, I will definitely try it on my spare time!” - A a student attendee.


# The OCaml ecosystem




The Haxers there had the chance to talk with active members of the much alive and very discreet OCaml community. We discovered several innovative projects with roots in OCaml.




[![](http://ocsigen.org/resources/logos/text_js_of_ocaml_with_shadow.png)](http://ocsigen.org/js_of_ocaml/)


The [online demo of the OCaml language](http://try.ocamlpro.com/), is made by [OCaml Pro](http://www.ocamlpro.com/), a company specialized in OCaml. This online demo loads in the browser, lets you manipulate the javascript dom of the page in OCaml, with the OCaml interpreter compiled in javascript. This is possible because OCaml compiler itself is written in OCaml, and there is a [javascript converter of OCaml bytecode, called JS of OCaml](http://ocsigen.org/js_of_ocaml/).

[![](http://www.ocaml-lang.org/files/ocamlpro.png)](http://www.ocamlpro.com/) [![](http://www.mlstate.com/img/mlstate-logo.png)](http://www.mlstate.com/)

A more ambitious project getting famous these times is [Ocsigen, a web server](http://ocsigen.org/ocsigenserver/) which serves compiled OCaml code. The client side code and server side code of a module are mixed in in the same file, which let the developers design very natural and logical application architectures. The server also enables a new control of security and validation of web applications, since all HTML inputs and outputs are parsed and validated at runtime.

The Ocsigen project is maintained by [Vincent Balat](http://www.pps.univ-paris-diderot.fr/~balat/) with the help of the [IRILL non profit organization](http://www.irill.org/) and [many contributors](http://ocsigen.org/credits).

And last but not least, we had the chance to discover [Opa, a platform for writing web applications](http://opalang.org/) in a very innovative way. It is close to the Haxe and Ocsigen approach, but the whole platform is a blast.

[![](http://ocsigen.org/resources/logos/text_ocsigenserver_with_shadow.png)](http://ocsigen.org/ocsigenserver/)  [![](http://a0.twimg.com/profile_images/1817816253/opa-cloud-logo-sq.png)](http://opalang.org/)

These discoveries have been a blast to us, Haxers unconscious of these initiatives which happen so close to ours, and especially to us, French based developers, with these French born technologies. And we say we have a great product but lack visibility and communication? Now we know that... We are not alone!

![](https://www.silexlabs.org/wp-content/uploads/2012/06/ET_the_Extra_Terrestrial1.jpg)

And this is a good news because our fellow OCamlers are very friendly to us.


# New ideas




So after this epic moment, we have retained several ideas to interact between our two worlds - i.e. Ocaml and Haxe, research and production, public/state and private/corporate.





### Development matters


The simplest thing to do right now with Haxe and OCaml communities together, would be to use [JS of OCaml](http://ocsigen.org/js_of_ocaml/) to convert the Haxe compiler into javascript. It should be quite straightforward, and it would allow to run the Haxe compiler on the client side... So the [try Haxe](http://try.haxe.org/) page could be a standalone HTML page, just like the [try OCaml](http://try.ocamlpro.com/) page.

[![](https://www.silexlabs.org/wp-content/uploads/2012/06/haxe-compiler1.png)![](https://www.silexlabs.org/wp-content/uploads/2012/06/convert1.png)![](http://a3.twimg.com/profile_images/1584416889/IconLarge.png)](http://caml.inria.fr/)


On the other hand, the conversion of OCaml bytecode to Haxe source code is possible. Indeed it is not so complicated since the whole [JS of OCaml](http://ocsigen.org/js_of_ocaml/) project was done in under 2 month of programming by a talented OCaml coder (source?).




[![](https://www.silexlabs.org/wp-content/uploads/2012/04/logo_caml1.png)![](https://www.silexlabs.org/wp-content/uploads/2012/06/convert1.png)](http://caml.inria.fr/)[![](https://www.silexlabs.org/wp-content/uploads/2012/04/haxeblog1.jpg)](http://www.haxe.org/)




This would make possible several “crazy” things:







  * convert the OCaml code, libraries and projects in Haxe, which would empower OCaml with as many targets as we have got in Haxe. Plus all the OCaml code out there - mostly research and financial applications, would be translatable to Haxe source code. This could be a motivation for OCaml developers to consider learning Haxe in complement to their current skill set.
[
![](https://www.silexlabs.org/wp-content/uploads/2012/04/logo_caml1.png)![](https://www.silexlabs.org/wp-content/uploads/2012/06/convert1.png)![](http://lbineau.com/blog/wp-content/uploads/2012/03/www.haxenme-90x90.png)
](http://caml.inria.fr/)




  * Since the Haxe compiler itself is written in OCaml, it could be translated in Haxe, which is a great perspective for us, Haxe developers, isn’t it?
[![](https://www.silexlabs.org/wp-content/uploads/2012/06/haxe-compiler1.png)![](https://www.silexlabs.org/wp-content/uploads/2012/06/convert1.png)](http://caml.inria.fr/)[![](https://www.silexlabs.org/wp-content/uploads/2012/04/haxeblog1.jpg)](http://www.haxe.org/)




  * the Haxe compiler could then be compiled to all our targets and become a cross-platform compiler/interpreter to cross-platform languages, for native and web applications - complex apps only since it would probably be heavy, even if [the OCaml compiler in javascript](http://try.ocamlpro.com/toplevel.js)weight less than 550KB.[![](https://www.silexlabs.org/wp-content/uploads/2012/06/haxe-compiler1.png)![](https://www.silexlabs.org/wp-content/uploads/2012/06/convert1.png)](http://caml.inria.fr/) [![](http://lbineau.com/blog/wp-content/uploads/2012/03/www.haxenme-90x90.png)](http://caml.inria.fr/)




  * the Haxe compiler could probably be compiled in php, java, .net and neko - and maybe nodejs, which may be interesting for hosted solutions and on the fly compilation - this would have an immediate application with Silex v2 and Cocktail to compile Haxe javascript/CSS/HTML applications to native and web applications on the server side[![](https://www.silexlabs.org/wp-content/uploads/2012/06/haxe-compiler1.png)![](https://www.silexlabs.org/wp-content/uploads/2012/06/convert1.png)](http://caml.inria.fr/)![](http://www.dealingwithwindows.com/wp-content/uploads/2011/02/Netframework-version-4.png)![](http://drupal.org/files/project-images/php.png)![](http://androinica.com/wp-content/uploads/2010/08/java.jpg)




Another work area could be to target OCaml with Haxe source code. This is "just" another target for Haxe. Nobody could really tell how useful that could be... At least if we could find the resources to do that, this would be made by OCaml developers and they would have to create a new Haxe target, which would probably take them to documenting and improving this process.




[![](https://www.silexlabs.org/wp-content/uploads/2012/04/haxeblog1.jpg)](http://www.haxe.org/)[![](https://www.silexlabs.org/wp-content/uploads/2012/06/convert1.png)](http://caml.inria.fr/)[![](https://www.silexlabs.org/wp-content/uploads/2012/04/logo_caml1.png)](http://caml.inria.fr/)





### Language theory and research matters




The idea here is that it seems easier to find funding to back a thesis than to back a development.




![](http://www.saurabhpendse.com/images/research.gif)


A PhD student or a researcher would probably be able to do one or more of these tasks as part of a thesis or a research unit




  * audit and documentation of the Haxe compiler and the targets


  * proposals for evolutions of the compiler to gain in productivity, maintainability, and have an easier learning curve, …


  * proposals for the evolution of the syntax, the macros, the libraries


  * proposal to make the implementation of new targets easier and more maintainable


  * proposal to make Haxe a provable language (source? explanation of this?)


  * write the specifications of the Haxe language


  * a comparison of Haxe and OCaml : syntaxes, productivity, maintenability of the applications, learning curve, the organization of the whole projects and communities...




Please submit ideas and remarks in the comments. **This is probably the most important matter to discuss**, since it is the most likely to occur in the short run.





# Next steps




As Silex Labs members, we have said that we will help OCaml to communicate - very simply to start, so we planned an interview of two key members of OCaml community, maybe in partnership with a parisan web radio. The goal is to spread the world about OCaml, as well as to introduce the OCaml ecosystem to the Haxe community.




To help several OCaml developers to find answers to their questions, we have opened the ["Haxe/OCaml mix" working group](https://www.silexlabs.org/groups/labs/haxe-community-meetings/haxe-ocaml-mix/), and **we invite volunteer Haxe developers to start a (two way) discussion with them there**.




Silex Labs is investing time in networking with OCaml community members, to make several of the ideas explained above to become a reality. We will try to fund a study, a thesis or a development, and make our best in community management in order to start a movement with inertia.




[![Silex Labs, open source projects](https://www.silexlabs.org/wp-content/uploads/2012/07/logo_silexlabs-gris1.png)](https://www.silexlabs.org/)[![](https://www.silexlabs.org/wp-content/uploads/2012/04/Logotype-IRILL1.jpg)](http://www.irill.org/)[![](https://www.silexlabs.org/wp-content/uploads/2012/04/logo_INRIA1-677x295.jpg)](http://www.inria.fr/en/institute/inria-in-brief/inria-in-a-few-words)




And finally, this could lead to several partnerships with Silex Labs, IRILL, Ocsigen, OCaml Pro, ... Who knows?





# Special thanks




Thank you to







  * IRILL for the invitation


  * the audience - and especially the enthousiasts Benjamin C., Gregoire H., Denis C., Basile S, Vincent B., Fabrice LF, and the organizers Roberto and Emmanuel who also supervised the meeting


  * Alex Hoyau for helping with this article and initiating this movement


  * Raphaël H. for the twitts and pics


  * Isabelle, Pol, Nicolas, Yannick and Raph for their presence and encouragements


  * Haxe et OCaml for being such great tools, and making all this possible!




