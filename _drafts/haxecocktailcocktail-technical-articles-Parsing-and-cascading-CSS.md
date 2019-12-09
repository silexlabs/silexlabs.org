---
id: 138514
title: "Parsing and cascading CSS"
date: "2013-05-13T11:10:41.000Z"
author: "yannick"
layout: "page"
guid: "https://www.silexlabs.org/?page_id=138514"

---
CSS is the language used to style an HTML document. In the first iteration of HTML, the docoment was styled using dedicated tags and attribute such as the <Font> tag, used to define a font-face, color and size. As the web gained popularity and website grew bigger, this caused a lot of redundant code and made the site hardly maintainable.  
CSS was the answer, a dedicated language, used to separate content (HTML) from presentation (CSS). CSS rules are mapped to nodes in an HTML document using &#8220;selectors&#8221;. For instance selectors allows to target a specific node using its tag name or its class attribute.  
CSS defines all aspect of a document rendering, from the color and size of its text to its layout.  
CSS implementation in cocktail is comprised of 2 main tasks :

  * parsing CSS, which consists in turning a CSS defined as a character string into a CSS object model (note : for now, cocktail doesn&#8217;t implement fully the standard CSSOM).
  * cascading CSS, which is the process where each node in the DOM is affected a value for each CSS property supported by cocktail, based on the defined CSS and the node&#8217;s tag name, class name, position in the document&#8230;

## Where does my CSS come from ?

The CSS defined for a document can come from the following sources :

  * The most common way is to link an external CSS stylsheet (a .css file) which will be loaded at runtime via http. In cocktail, loading is implemented in the HTMLLinkElement : <https://github.com/silexlabs/Cocktail/blob/master/cocktail/core/html/HTMLLinkElement.hx>.
  * The style can also be defined in a <style> tag, define in the HTML. All the text content of the tag is considered to be a CSS stylesheet. In cocktail, this is implemented by the HTMLStyleElement : <https://github.com/silexlabs/Cocktail/blob/master/cocktail/core/html/HTMLStyleElement.hx>
  * The style can be defined inline on a node with the &#8220;style&#8221; attribute. In this case, it will only apply to this node.
  * Finally, cocktail includes an hard-coded stylsheet which defines default styles for element. This default stylesheet is implemented by all browser, it is defined in the CSS spec : <http://www.w3.org/TR/CSS2/sample.html>. Cocktail&#8217;s implementation can be found here : <https://github.com/silexlabs/Cocktail/blob/master/cocktail/core/css/DefaultCSSStyleSheet.hx>

<div>
</div>

<div>
  Any number of CSS can be defined for a document and they are all used for styling the document.
</div>

<div>
  We can see in the implementation of the <link> and <style> elements that once the CSS string is ready, it is use to initialise a CSSStylSheet object, in charge of parsing the CSS. This stylesheet object is then sent to the document, so that it can be used during cascading.
</div>

<div>
</div>

## Parsing CSS

CSS parsing is split in 3 main parsers :

  * the rule parser. It separate CSS rules. A rule contain one or multiple selector and one or mutiple style values. For example, &#8220;body {margin:0}&#8221; is a CSS rule. A style sheet can contain any number of rule
  * the selector parser, parsing only the selector part of a rule.
  * the style parser, parsing only style values.

Each parser is implemented as a state parser. Each parser define a number of state, for instance for the style parser there will be a &#8220;CSS style name&#8221; state and a &#8220;CSS value&#8221; state. The parser loops in all the characters in the CSS string which affects the current state. For instance if the parser is in &#8220;CSS style name&#8221; state and a &#8220;:&#8221; charachter is found, then it changes to &#8220;CSS value&#8221; state. Each state has its own behahviour affecting how the CSS object model is built.  
CSS parsers are implemented here : <https://github.com/silexlabs/Cocktail/tree/master/cocktail/core/css/parsers>

## The CSS objects

The CSS parser produces a few object representing the parsed CSS rule, CSS selector and CSS styles. A CSS style rule is represented by the CSSStyleRule objet : <https://github.com/silexlabs/Cocktail/blob/master/cocktail/core/css/CSSStyleRule.hx>  
This CSS style rule object holds an objet representation of its selector and of its style values.  
Style values are defined as CSSStyleDeclaration object : <https://github.com/silexlabs/Cocktail/blob/master/cocktail/core/css/CSSStyleDeclaration.hx>  
Those object may hold style values for any supported style objects.

## Validating CSS

Each CSS rule, selector and style value can be valid or invalid. The CSS syntax defines what to do when an invalid value is found. Validating a value is shared between the parsers and the CSSStyleDeclaration object :

  * The parser check that the syntax is valid CSS. If not it ignores the current rule/selector/style value
  * The CSSStyleDeclaration check that the define style name is among the supported CSS styles and wheter its value is valid for this partiular style

Once a style is validated, it can be applied to nodes of the HTML document during the cascade.

## Cascading CSS
























