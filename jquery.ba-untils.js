/*!
 * jQuery Untils - v1.0 - 12/1/2009
 * http://benalman.com/projects/jquery-untils-plugin/
 * 
 * Copyright (c) 2009 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */

// Script: jQuery Untils: nextUntil, prevUntil, parentsUntil
//
// *Version: v1.0, Last updated: 12/1/2009*
// 
// Project Home - http://benalman.com/projects/jquery-untils-plugin/
// GitHub       - http://github.com/cowboy/jquery-untils/
// Source       - http://github.com/cowboy/jquery-untils/raw/master/jquery.ba-untils.js
// (Minified)   - http://github.com/cowboy/jquery-untils/raw/master/jquery.ba-untils.min.js (0.7kb)
// 
// About: License
// 
// Copyright (c) 2009 "Cowboy" Ben Alman,
// Dual licensed under the MIT and GPL licenses.
// http://benalman.com/about/license/
// 
// About: Example
// 
// This working example, complete with fully commented code, illustrates one way
// in which this plugin can be used.
// 
// Untils - http://benalman.com/code/projects/jquery-untils/examples/untils/
// 
// About: Support and Testing
// 
// Information about what version or versions of jQuery this plugin has been
// tested with, what browsers it has been tested in, and where the unit tests
// reside (so you can test it yourself).
// 
// jQuery Versions - 1.3.2
// Browsers Tested - Internet Explorer 6-8, Firefox 2-3.5, Safari 3-4, Chrome, Opera 9.6-10.
// Unit Tests      - http://benalman.com/code/projects/jquery-untils/unit/
// 
// About: Release History
// 
// 1.0 - (12/1/2009) Initial release

(function($){
  '$:nomunge'; // Used by YUI compressor.
  
  $.each({
    
    // These three methods use jQuery.dir internally, so it makes sense for them
    // to have an "until" mode.
    
    // Method: jQuery.fn.nextUntil
    // 
    // From the selected element(s), get all (or selected) next sibling elements
    // until an "ending" element is reached. The ending element is not included
    // in the final collection of elements, which is uniqued and returned in
    // "traversal" order.
    // 
    // Usage:
    // 
    // > jQuery('selector').nextUntil( until_sel [, each_sel ] );
    // 
    // Arguments:
    // 
    //  until_sel - (String) A jQuery selector that matches the "ending"
    //    element. Only elements preceding the first element matching this
    //    selector will be returned.
    //  each_sel - (String) An optional jQuery selector that filters each
    //    element that is iterated over. Excluding this argument is the same as
    //    specifying "*".
    // 
    // Returns:
    // 
    //  (jQuery) A filtered jQuery collection of elements, returned in
    //  "traversal" order.
    
    nextUntil: 'nextAll',
    
    // Method: jQuery.fn.prevUntil
    // 
    // From the selected element(s), get all (or selected) previous sibling
    // elements until an "ending" element is reached. The ending element is not
    // included in the final collection of elements, which is uniqued and
    // returned in "traversal" order.
    // 
    // Usage:
    // 
    // > jQuery('selector').prevUntil( until_sel [, each_sel ] );
    // 
    // Arguments:
    // 
    //  until_sel - (String) A jQuery selector that matches the "ending"
    //    element. Only elements preceding the first element matching this
    //    selector will be returned.
    //  each_sel - (String) An optional jQuery selector that filters each
    //    element that is iterated over. Excluding this argument is the same as
    //    specifying "*".
    // 
    // Returns:
    // 
    //  (jQuery) A filtered jQuery collection of elements, returned in
    //  "traversal" order.
    
    prevUntil: 'prevAll',
    
    // Method: jQuery.fn.parentsUntil
    // 
    // From the selected element(s), get all (or selected) parent elements until
    // an "ending" element is reached. The ending element is not included in the
    // final collection of elements, which is uniqued and returned in "traversal"
    // order.
    // 
    // Usage:
    // 
    // > jQuery('selector').parentsUntil( until_sel [, each_sel ] );
    // 
    // Arguments:
    // 
    //  until_sel - (String) A jQuery selector that matches the "ending"
    //    element. Only elements preceding the first element matching this
    //    selector will be returned.
    //  each_sel - (String) An optional jQuery selector that filters each
    //    element that is iterated over. Excluding this argument is the same as
    //    specifying "*".
    // 
    // Returns:
    // 
    //  (jQuery) A filtered jQuery collection of elements, returned in
    //  "traversal" order.
    
    parentsUntil: 'parents'
    
  }, function( name, method ){
    
    $.fn[ name ] = function( until_selector, each_selector ) {
      
      // Store elements "for later".
      var elems = [],
        
        // An array containing the originally selected elements.
        that = this.get(),
        
        // If the method is prevUntil or parentsUntil, the selected elements
        // must be returned in traversal- or reverse-DOM-order.
        is_reverse = name.indexOf( 'p' ) === 0;
      
      // Because `this` is a DOM-ordered jQuery collection of elements, we need
      // to iterate over it in reverse for reverse-DOM-order methods.
      if ( is_reverse && that.length > 1 ) {
        that = that.reverse();
      }
      
      // For each element passed in,
      $.each( that, function(){
        
        // Get all elements (or those matching each_selector).
        var result = $(this)[ method ]( each_selector ),
          
          browser = $.browser;
        
        if ( is_reverse ) {
          
          // jQuery 1.3.2 doesn't always return elements in DOM order for IE6/7.
          if ( that.length > 1 && browser.msie && browser.version < 8 ) {
            result = result.filter( '*,*' ).get().reverse();
            
          // Since jQuery 1.3.2 returns elements in DOM-order instead of
          // reverse-DOM-order when a complex selector is passed to prevAll or
          // parents, the resulting element set must be reversed.
          } else if ( /,/.test( each_selector ) ) {
            result = result.get().reverse();
          }
        }
        
        $.each( result, function(){
          
          // Store elements "for later", until the until_selector is matched.
          return $(this).is( until_selector )
            ? false
            : elems.push( this );
        });
      });
      
      // Return a uniqued collection of the "stored for later" elements, which
      // can be reverted by using .end().
      return this.pushStack( $.unique( elems ), name, until_selector + ( each_selector ? ',' + each_selector : '' ) );
    };
    
  });
  
})(jQuery);
