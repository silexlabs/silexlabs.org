---
id: 288
title: "How to integrate a plugin written in haXe/PHP"
date: "2011-08-16T15:31:41.000Z"
author: "Benjamin"
layout: "page"
guid: "http://community.silexlabs.org/silex/codex/?p=288"
categories: ["Tutorials Silex"]

---
Before, when we wanted to integrate a plugin that we had written in haXe/PHP we just had to include the plugin&#8217;s index.php file (the one generated by haXe) into our own index.php (the one in the plugins folder).  
That somehow looked like this:

<div>
  class htmlGenerator extends plugin_base
</div>

<div>
  {
</div>

<div>
  public function initHooks($hookManager)
</div>

<div>
  {
</div>

<div>
  include(dirname(__FILE__).&#8221;/myHaxeGeneratedPlugin/index.php&#8221;);
</div>

<div>
  }
</div>

<div>
  }
</div>

<div>
  But now, the haXe&#8217;s index is written in haXe and doing so would result in a redefinition of php_Boot (note that having several haXe/PHP plugins would also have resulted in that).
</div>

<div>
  So, you now need to do that instead:
</div>

<div>
  <div>
    php_Lib::loadLib(dirname(__FILE__).&#8217;/myHaxeGeneratedPlugin/lib&#8217;);
  </div>
  
  <div>
    org_silex_htmlGenerator_Main::main();
  </div>
</div>

<div>
  The first line tells PHP how to look for additional libraries. Note that it points to the &#8220;lib&#8221; directory that has been generated by the haXe compiler.
</div>

<div>
  The second line simply runs the plugin&#8217;s main method! (Here it is org.silex.htmlGenerator.Main.main in haXe &#8211; classes&#8217; names are getting &#8220;flattened&#8221; by the compiler).
</div>
























