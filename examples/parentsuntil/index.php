<?PHP

include "../index.php";

$shell['title3'] = "parentsUntil";

$shell['h2'] = 'From the selected element(s), get all (or selected) parent elements until an "ending" element is reached.';

// ========================================================================== //
// SCRIPT
// ========================================================================== //

ob_start();
?>
$(function(){
  
  // Example 1: From .f, select all parent elements until .a
  $('#ex1 .f').parentsUntil('.a').addClass('selected');
  
});
<?
$shell['script1'] = ob_get_contents();
ob_end_clean();

ob_start();
?>
$(function(){
  
  // Example 2: From .f, select all parent 'div' elements until .a
  $('#ex2 .f').parentsUntil('.a', 'div').addClass('selected');
  
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
  color: #0a0 !important;
  border: 2px solid #0a0 !important;
}

.example {
  width: 400px;
}

.example * {
  display: block;
  color: #ccc;
  border: 2px solid #ccc;
  padding: 2px;
  margin: 10px;
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
  traverse <a href="../nextuntil/">forward</a> along next siblings, <a href="../prevuntil/">backwards</a> along previous siblings, and upwards along parents,
  selecting all elements (or just elements that match an optional selector).
</p>

<h3>A simple parentsUntil example, with an "until" selector</h3>

<div id="ex1" class="example">
  <div class="a">
    Div with a class of "a"
    <div class="b">
      Div with a class of "b"
      <div class="c">
        Div with a class of "c"
        <span class="d">
          Span with a class of "d"
          <span class="e">
            Span with a class of "e"
            <span class="f">
              Span with a class of "f"
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
</div>

<div class="clear"></div>

<h3>The code</h3>

<pre class="brush:js">
<?= htmlspecialchars( $shell['script1'] ); ?>
</pre>

<h3>A more complex parentsUntil example, with both an "until" and "each" selector</h3>

<div id="ex2" class="example">
  <div class="a">
    Div with a class of "a"
    <div class="b">
      Div with a class of "b"
      <div class="c">
        Div with a class of "c"
        <span class="d">
          Span with a class of "d"
          <span class="e">
            Span with a class of "e"
            <span class="f">
              Span with a class of "f"
            </span>
          </span>
        </span>
      </div>
    </div>
  </div>
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
