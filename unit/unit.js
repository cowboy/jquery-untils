// Not sure why this isn't set by default in qunit.js..
QUnit.jsDump.HTML = false;

$(function(){ // START CLOSURE

$('#jq_version').html( $.fn.jquery );

test( "$.fn.nextUntil", function() {
  expect(19);
  
  var next = $("#foo1").next(),
    next_all = $("#foo1").nextAll(),
    all_but_last = next_all.not(":last"),
    next_all2 = $("#bar1").nextAll(),
    all_but_last2 = next_all2.not(":last");
  
  same( $("#foo1").nextUntil().get(), next_all.get(), "nextUntil with no selector (nextAll)" );
  same( $("#foo1").nextUntil(".xxx").get(), next_all.get(), "nextUntil with invalid selector (nextAll)" );
  same( $("#foo1").nextUntil("#foo3").get(), next.get(), "Simple nextUntil check" );
  same( $("#foo1").nextUntil("#foo8, #foo3").get(), next.get(), "Less simple nextUntil check" );
  same( $("#foo1").nextUntil("#foo8").get(), all_but_last.get(), "Simple nextUntil check" );
  same( $("#foo1").nextUntil("#foo8", "p").get(), all_but_last.not("span").get(), "Filtered nextUntil check" );
  same( $("#foo1").nextUntil("#foo8", "span").get(), all_but_last.not("p").get(), "Filtered nextUntil check" );
  same( $("#foo1").nextUntil("#foo8", "p, span").get(), all_but_last.get(), "Multiple-filtered nextUntil check" );
  same( $("#foo1").nextUntil("#foo8", "ul").get(), [], "Filtered nextUntil check, no match" );
  same( $("#foo1, #foo3").nextUntil("#foo8").get(), all_but_last.get(), "Multi-source, nextUntil check" );
  same( $("#foo1, #foo3").nextUntil("#foo8", "span").get(), all_but_last.not("p").get(), "Multi-source, filtered nextUntil check" );
  same( $("#foo3, #foo1").nextUntil("#foo8", "p, span").get(), all_but_last.get(), "Multi-source, multiple-filtered nextUntil check" );
  same( $("#foo1, #bar1").nextUntil("#foo8").get(), all_but_last.add(next_all2).get(), "Multi-source, nextUntil check" );
  same( $("#foo1, #bar1").nextUntil("#foo8").get(), all_but_last.add(next_all2).get(), "Multi-source, nextUntil check" );
  same( $("#foo1, #bar1").nextUntil("#foo8, #bar8").get(), all_but_last.add(all_but_last2).get(), "Multi-source, less simple nextUntil check" );
  same( $("#bar1, #foo1").nextUntil("#foo8, #bar8", "span").get(), all_but_last.add(all_but_last2).not("p").get(), "Multi-source, less simple filtered nextUntil check" );
  same( $("#bar1, #foo1").nextUntil("#foo8, #bar8", "p, span").get(), all_but_last.add(all_but_last2).get(), "Multi-source, less simple multiple-filtered nextUntil check" );
  same( $("#baz1").nextUntil(":not(span)", "span").get(), $("#baz span").get(), "Exclusive each and until selectors check" );
  same( $("#baz1,#baz2").nextUntil(":not(span)", "span").get(), $("#baz span").get(), "Multi-source, exclusive each and until selectors check" );
});

test( "$.fn.prevUntil", function() {
  expect(19);
  
  var prev = $("#foo8").prev(),
    prev_all = $("#foo8").prevAll(),
    all_but_last = prev_all.not(":last"),
    prev_all2 = $("#bar8").prevAll(),
    all_but_last2 = prev_all2.not(":last");
  
  same( $("#foo8").prevUntil().get(), prev_all.get(), "prevUntil with no selector (prevAll)" );
  same( $("#foo8").prevUntil(".xxx").get(), prev_all.get(), "prevUntil with invalid selector (prevAll)" );
  same( $("#foo8").prevUntil("#foo6").get(), prev.get(), "Simple prevUntil check" );
  same( $("#foo8").prevUntil("#foo1, #foo6").get(), prev.get(), "Less simple prevUntil check" );
  same( $("#foo8").prevUntil("#foo1").get(), all_but_last.get(), "Simple prevUntil check" );
  same( $("#foo8").prevUntil("#foo1", "p").get(), all_but_last.not("span").get(), "Filtered prevUntil check" );
  same( $("#foo8").prevUntil("#foo1", "span").get(), all_but_last.not("p").get(), "Filtered prevUntil check" );
  
  same( $("#foo8").prevUntil("#foo1", "p, span").get(), all_but_last.get(), "Multiple-filtered prevUntil check" );
  
  same( $("#foo8").prevUntil("#foo1", "ul").get(), [], "Filtered prevUntil check, no match" );
  same( $("#foo8, #foo6").prevUntil("#foo1").get(), all_but_last.get(), "Multi-source, prevUntil check" );
  same( $("#foo8, #foo6").prevUntil("#foo1", "span").get(), all_but_last.not("p").get(), "Multi-source, filtered prevUntil check" );
  same( $("#foo6, #foo8").prevUntil("#foo1", "p, span").get(), all_but_last.get(), "Multi-source, multiple-filtered prevUntil check" );
  same( $("#foo8, #bar8").prevUntil("#foo1").get(), prev_all2.add(all_but_last).get(), "Multi-source, prevUntil check" );
  same( $("#foo8, #bar8").prevUntil("#foo1").get(), prev_all2.add(all_but_last).get(), "Multi-source, prevUntil check" );
  same( $("#foo8, #bar8").prevUntil("#foo1, #bar1").get(), all_but_last2.add(all_but_last).get(), "Multi-source, less simple prevUntil check" );
  same( $("#bar8, #foo8").prevUntil("#foo1, #bar1", "span").get(), all_but_last2.add(all_but_last).not("p").get(), "Multi-source, less simple filtered prevUntil check" );
  same( $("#bar8, #foo8").prevUntil("#foo1, #bar1", "p, span").get(), all_but_last2.add(all_but_last).get(), "Multi-source, less simple multiple-filtered prevUntil check" );
  same( $("#baz4").prevUntil(":not(span)", "span").get(), $("#baz span").get().reverse(), "Exclusive each and until selectors check" );
  same( $("#baz3,#baz4").prevUntil(":not(span)", "span").get(), $("#baz span").get().reverse(), "Multi-source, exclusive each and until selectors check" );
});

test( "$.fn.parentsUntil", function() {
  expect(17);
  
  var parent = $("#foo1000").parent(),
    parents = $("#foo1000").parents(),
    parents_until_body = parents.not('html,body'),
    parents2 = $("#bar1000").parents(),
    parents_until_body2 = parents2.not('html,body');
  
  same( $("#foo1000").parentsUntil().get(), parents.get(), "parentsUntil with no selector (parents)" );
  same( $("#foo1000").parentsUntil(".xxx").get(), parents.get(), "parentsUntil with invalid selector (parents)" );
  same( $("#foo1000").parentsUntil("#foo10").get(), parent.get(), "Simple parentsUntil check" );
  same( $("#foo1000").parentsUntil("#foo, #foo10").get(), parent.get(), "Less simple parentsUntil check" );
  same( $("#foo1000").parentsUntil("body").get(), parents_until_body.get(), "Simple parentsUntil check" );
  same( $("#foo1000").parentsUntil("body", "p").get(), parents_until_body.not("span, em, div").get(), "Filtered parentsUntil check" );
  same( $("#foo1000").parentsUntil("body", "span").get(), parents_until_body.not("p, em, div").get(), "Filtered parentsUntil check" );
  same( $("#foo1000").parentsUntil("body", "p, span, em, div").get(), parents_until_body.get(), "Multiple-filtered parentsUntil check" );
  same( $("#foo1000").parentsUntil("body", "ul").get(), [], "Filtered parentsUntil check, no match" );
  same( $("#foo1000, #foo10").parentsUntil("body").get(), parents_until_body.get(), "Multi-source, parentsUntil check" );
  same( $("#foo1000, #foo10").parentsUntil("body", "span").get(), parents_until_body.not("p, em, div").get(), "Multi-source, filtered parentsUntil check" );
  same( $("#foo10, #foo1000").parentsUntil("body", "p, span, em, div").get(), parents_until_body.get(), "Multi-source, multiple-filtered parentsUntil check" );
  same( $("#foo1000, #bar1000").parentsUntil("body").get(), parents_until_body2.add(parents_until_body).get(), "Multi-source, parentsUntil check" );
  same( $("#foo1000, #bar1000").parentsUntil("body").get(), parents_until_body2.add(parents_until_body).get(), "Multi-source, parentsUntil check" );
  
  same( $("#foo1000, #bar1000").parentsUntil("body, html").get(), parents_until_body2.add(parents_until_body).get(), "Multi-source, less simple parentsUntil check" );
  same( $("#bar1000, #foo1000").parentsUntil("body, html", "span").get(), parents_until_body2.add(parents_until_body).not("p, em, div").get(), "Multi-source, less simple filtered parentsUntil check" );
  same( $("#bar1000, #foo1000").parentsUntil("body, html", "p, span, em, div").get(), parents_until_body2.add(parents_until_body).get(), "Multi-source, less simple multiple-filtered parentsUntil check" );
});

}); // END CLOSURE