# jQuery Untils: nextUntil, prevUntil, parentsUntil #
[http://benalman.com/projects/jquery-untils-plugin/](http://benalman.com/projects/jquery-untils-plugin/)

Version: v1.0, Last updated: 12/1/2009

jQuery Untils provides three very simple, but very useful methods: nextUntil, prevUntil, and parentsUntil. These methods are based on their nextAll, prevAll, and parents counterparts, except that they allow you to stop when a certain selector is reached. Elements are returned in "traversal order".

Note that these methods take a less naïve approach than others bearing the same names, and are designed to actually return elements in traversal order, despite the element ordering flaws inherent in the jQuery 1.3.2 selector engine. A [ticket](http://dev.jquery.com/ticket/5551) and [patch](http://github.com/cowboy/jquery/commit/cbf1da9ed88b14bc991fc2dcfec87750d19237ad) have been submitted to the jQuery team for hopeful inclusion in the 1.4 release.

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
Internet Explorer 6-8, Firefox 2-3.5, Safari 3-4, Chrome, Opera 9.6-10.

### Unit Tests ###
[http://benalman.com/code/projects/jquery-untils/unit/](http://benalman.com/code/projects/jquery-untils/unit/)


## Release History ##

1.0 - (12/1/2009) Initial release


## License ##
Copyright (c) 2009 "Cowboy" Ben Alman  
Dual licensed under the MIT and GPL licenses.  
[http://benalman.com/about/license/](http://benalman.com/about/license/)
