---
id: 128973
title: "Create your first pages"
date: "2011-08-16T15:01:33.000Z"
author: "koala"
layout: "page"
guid: "https://www.silexlabs.org/?p=128973"
categories: ["Tutorials Silex"]

---
### Move on to serious matters !

Now that you know how to create a site from a blank page and how the wysiwyg toolboxes work, we are going to see the page principles.  
Create a page is technically easy.  
But if you want to create a site with several pages  according to your wishes and needs, you must first understand the following principles :

  * layers and sub-layers principle
  * parent layer / children layer principle

Don&#8217;t worry ! You will find some tutorials linked to the page creation in the &#8220;Tutorials&#8221; category of the online help.  
Let&#8217;s go !

#### Layers and sub-layers

A Silex publication is made up of layers and sub-layers (if you know Photoshop and Illustrator for example, it is the same principle).  
Each layer has necessarily one sub-layer. **It&#8217;s on the sub-layer that you put your components.**  
Example :  
<img class="aligncenter size-full wp-image-1619" title="layer" src="http://localhost:8080/wp-content/uploads/2011/04/layer.png" alt="" width="570" height="322" srcset="http://localhost:8080/wp-content/uploads/2011/04/layer.png 570w, http://localhost:8080/wp-content/uploads/2011/04/layer-300x169.png 300w" sizes="(max-width: 570px) 100vw, 570px" />  
<img class="aligncenter size-full wp-image-1620" title="sublayer" src="http://localhost:8080/wp-content/uploads/2011/04/sublayer.png" alt="" width="570" height="321" srcset="http://localhost:8080/wp-content/uploads/2011/04/sublayer.png 570w, http://localhost:8080/wp-content/uploads/2011/04/sublayer-300x169.png 300w" sizes="(max-width: 570px) 100vw, 570px" />  
Here, <start> is the layer and <fade> is its sub-layer. When you select <start> nothing appears in the components toolbox and you can not add components to it : it is completly normal !  
But if you select <fade>, components appear in the components toolbox and you can add some to it.  
<span style="text-decoration: underline;"><strong><em>Note :</em></strong></span> a layer can have as many sub-layers as you want.

#### Parent-layer and children-layer

When you start editing a publication (a site) &#8211; if you choose &#8220;create a site from a blank page&#8221; &#8211; you will notice that one layer already exists : it is the <start> layer. This layer is very important because it is from it that you will build all your site.  
The <start> layer has the status of &#8220;parent-layer&#8221;.  
Its partucularity is that all the components that you would add on it would be automatically on all the pages of your site. So, for example, if you want to add a video that only appears on the page 2 of your site, don&#8217;t put it on the <start> layer !  
Of course the <start> layer can have &#8220;children-layers&#8221; &#8211; the children-layers of <start> would correspond to the different pages of your site.  
Note : the children layers of <start> can have themselves &#8220;children layers&#8221; and consequently be parent-layers.  
Let see it concretly with the Association theme :  
In this theme you have a &#8220;news&#8221; page  
<img class="aligncenter size-full wp-image-1608" title="news_page" src="http://localhost:8080/wp-content/uploads/2011/04/news_page.png" alt="" width="700" height="425" srcset="http://localhost:8080/wp-content/uploads/2011/04/news_page.png 700w, http://localhost:8080/wp-content/uploads/2011/04/news_page-300x182.png 300w" sizes="(max-width: 700px) 100vw, 700px" />  
If you look at the wysiwyg, you will find this :  
<img class="aligncenter size-full wp-image-1609" title="start_news" src="http://localhost:8080/wp-content/uploads/2011/04/start_news.png" alt="" width="570" height="339" srcset="http://localhost:8080/wp-content/uploads/2011/04/start_news.png 570w, http://localhost:8080/wp-content/uploads/2011/04/start_news-300x178.png 300w" sizes="(max-width: 570px) 100vw, 570px" />  
Here, the <news> layer is the children layer of start.  
If you take the <works> page :  
<img class="aligncenter size-full wp-image-1612" title="works_home" src="http://localhost:8080/wp-content/uploads/2011/04/works_home.png" alt="" width="700" height="407" srcset="http://localhost:8080/wp-content/uploads/2011/04/works_home.png 700w, http://localhost:8080/wp-content/uploads/2011/04/works_home-300x174.png 300w" sizes="(max-width: 700px) 100vw, 700px" /> and open the wysiwyg, you will see :  
<img class="aligncenter size-full wp-image-1613" title="start_works" src="http://localhost:8080/wp-content/uploads/2011/04/start_works.png" alt="" width="570" height="336" srcset="http://localhost:8080/wp-content/uploads/2011/04/start_works.png 570w, http://localhost:8080/wp-content/uploads/2011/04/start_works-300x177.png 300w" sizes="(max-width: 570px) 100vw, 570px" />  
Here, it&#8217;s a bit more complicated.  
<works.home> layer is the children layer of <start> as the same level as the <news> layer. It is also the parent layer of the <works> layer.  
<works> layer is the children layer of the <works> one, and, it is also the parent layer of the <00> layer.  
And <00> layer is the children layer of the <works> layer  
You can note that here we have 4 differents levels :  
<start> corresponds to the level 0 = all the elements that are on this layer would be find on all the pages and sub-pages of your publication.  
<works.home> corresponds to the level 1 = the elements that you will find here are those that you would put on this layer + those that are on the <start> layer  
<works> corresponds to the level 2 : the elements that you will find here are those that you would put on this layer + those that are on the <start> layer + those that are on the <works.home> layer  
<00> corresponds to the level 3 : the elements that you will find here are those that you would put on this layer + those that are on the <start> layer + those that are on the <works.home> layer + those that are on the <works> layer  
Look at this schema, maybe you would understand it better :  
<img class="aligncenter size-full wp-image-1617" title="levels_layers_schema" src="http://localhost:8080/wp-content/uploads/2011/04/levels_layers_schema1.png" alt="" width="700" height="495" srcset="http://localhost:8080/wp-content/uploads/2011/04/levels_layers_schema1.png 700w, http://localhost:8080/wp-content/uploads/2011/04/levels_layers_schema1-300x212.png 300w" sizes="(max-width: 700px) 100vw, 700px" />  
Note :

  * the black rectangles correspond to layers

  * you can have as many levels as you want
  * you can have as many layers as you want on each level

Create a page  
To explain you the principle, we will only focus on the level 0 and the level 1. But, of course, you can apply this principle to all the different levels.  
To create a page from <start> (level 0) you must put a media (button, png, jpg&#8230;) on the stage and declare it as an icon.
























