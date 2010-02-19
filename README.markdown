# jQuery Untils: nextUntil, prevUntil, parentsUntil #
[http://benalman.com/projects/jquery-untils-plugin/](http://benalman.com/projects/jquery-untils-plugin/)

Version: v1.1, Last updated: 2/18/2010

jQuery Untils provides three very simple, but very useful methods: nextUntil, prevUntil, and parentsUntil. These methods are based on their nextAll, prevAll, and parents counterparts, except that they allow you to stop when a certain selector is reached. Elements are returned in "traversal order".

**As of jQuery 1.4, these methods are now included in jQuery core! See the <a href="http://github.com/jquery/jquery/commit/2b481b93cfca62f95aa7005e7db651456fa08e65">patch</a> as well as the official documentation on the
<a href="http://api.jquery.com/prevUntil/">.prevUntil</a>, 
<a href="http://api.jquery.com/nextUntil/">.nextUntil</a> and
<a href="http://api.jquery.com/parentsUntil/">.parentsUntil</a> methods.**

Note that these methods take a less naïve approach than others bearing the same names, and are designed to actually return elements in traversal order, despite the element ordering flaws inherent in the jQuery 1.3.2 selector engine.

Visit the [project page](http://benalman.com/projects/jquery-untils-plugin/) for more information and usage examples!


## Documentation ##
[http://benalman.com/code/projects/jquery-untils/docs/](http://benalman.com/code/projects/jquery-untils/docs/)


## Examples ##
These working examples, complete with fully commented code, illustrate a few
ways in which this plugin can be used.

[http://benalman.com/code/projects/jquery-untils/examples/nextuntil/](http://benalman.com/code/projects/jquery-untils/examples/nextuntil/)  
[http://benalman.com/code/projects/jquery-untils/examples/prevuntil/](http://benalman.com/code/projects/jquery-untils/examples/prevuntil/)  
[http://benalman.com/code/projects/jquery-untils/examples/parentsuntil/](http://benalman.com/code/projects/jquery-untils/examples/parentsuntil/)  

## Support and Testing ##
Information about what version or versions of jQuery this plugin has been
tested with, what browsers it has been tested in, and where the unit tests
reside (so you can test it yourself).

### jQuery Versions ###
1.3.2

### Browsers Tested ###
Internet Explorer 6-8, Firefox 2-3.7, Safari 3-4, Chrome 4-5, Opera 9.6-10.1.

### Unit Tests ###
[http://benalman.com/code/projects/jquery-untils/unit/](http://benalman.com/code/projects/jquery-untils/unit/)


## Release History ##

1.1 - (2/18/2010) Fixed an issue that occurred when until\_selector and each\_selector were mutually exclusive. In the process, simplified plugin logic substantially.  
1.0 - (12/1/2009) Initial release  


## License ##
Copyright (c) 2010 "Cowboy" Ben Alman  
Dual licensed under the MIT and GPL licenses.  
[http://benalman.com/about/license/](http://benalman.com/about/license/)
