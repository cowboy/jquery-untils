<?PHP

include "../index.php";

$shell['title3'] = "prevUntil";

$shell['h2'] = 'From the selected element(s), get all (or selected) previous sibling elements until an "ending" element is reached.';

// ========================================================================== //
// SCRIPT
// ========================================================================== //

ob_start();
?>
$(function(){
  
  // Example 1: From .g, select all previous sibling elements until .a
  $('#ex1 .f').prevUntil('.a').addClass('selected');
  
});
<?
$shell['script1'] = ob_get_contents();
ob_end_clean();

ob_start();
?>
$(function(){
  
  // Example 2: From .f, select all previous sibling 'p' elements until .a
  $('#ex2 .f').prevUntil('.a', 'p').addClass('selected');
  
});
<?
$shell['script2'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// HTML HEAD ADDITIONAL
// ========================================================================== //

ob_start();
?>
<script type="text/javascript" src="../../jquery.ba-untils.js"></script>
<script type="text/javascript" language="javascript">

<?= $shell['script1']; ?>
<?= $shell['script2']; ?>

$(function(){
  
  // Syntax highlighter.
  SyntaxHighlighter.highlight();
  
});

</script>
<style type="text/css" title="text/css">

/*
bg: #FDEBDC
bg1: #FFD6AF
bg2: #FFAB59
orange: #FF7F00
brown: #913D00
lt. brown: #C4884F
*/

#page {
  width: 700px;
}

.selected {
  color: #0a0;
}

.example {
  color: #ccc;
}

.example p {
  margin: 0;
}

</style>
<?
$shell['html_head'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// HTML BODY
// ========================================================================== //

ob_start();
?>
<?= $shell['donate'] ?>

<p>
  With <a href="http://benalman.com/projects/jquery-untils-plugin/">jQuery Untils</a> you easily
  traverse <a href="../nextuntil/">forward</a> along next siblings, backwards along previous siblings, and <a href="../parentsuntil/">upwards</a> along parents,
  selecting all elements (or just elements that match an optional selector).
</p>

<h3>A simple prevUntil example, with an "until" selector</h3>

<ol id="ex1" class="example">
  <li class="a">List item with a class of "a"</li>
  <li class="b">List item with a class of "b"</li>
  <li class="c">List item with a class of "c"</li>
  <li class="d">List item with a class of "d"</li>
  <li class="e">List item with a class of "e"</li>
  <li class="f">List item with a class of "f"</li>
</ol>

<div class="clear"></div>

<h3>The code</h3>

<pre class="brush:js">
<?= htmlspecialchars( $shell['script1'] ); ?>
</pre>

<h3>A more complex prevUntil example, with both an "until" and "each" selector</h3>

<div id="ex2" class="example">
  <p class="a">Paragraph with a class of "a"</p>
  <span class="b">Span with a class of "b"</span>
  <p class="c">Paragraph with a class of "c"</p>
  <span class="d">Span with a class of "d"</span>
  <p class="e">Paragraph with a class of "e"</p>
  <span class="f">Span with a class of "f"</span>
</div>

<h3>The code</h3>

<pre class="brush:js">
<?= htmlspecialchars( $shell['script2'] ); ?>
</pre>


<?
$shell['html_body'] = ob_get_contents();
ob_end_clean();

// ========================================================================== //
// DRAW SHELL
// ========================================================================== //

draw_shell();

?>
