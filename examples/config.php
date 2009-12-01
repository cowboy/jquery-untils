<?PHP

$shell['title1'] = "jQuery Untils";
$shell['link1']  = "http://benalman.com/projects/jquery-untils-plugin/";

ob_start();
?>
  <a href="http://benalman.com/projects/jquery-untils-plugin/">Project Home</a>,
  <a href="http://benalman.com/code/projects/jquery-untils/docs/">Documentation</a>,
  <a href="http://github.com/cowboy/jquery-untils/">Source</a>
<?
$shell['h3'] = ob_get_contents();
ob_end_clean();

$shell['jquery'] = 'jquery-1.3.2.js';

$shell['shBrush'] = array( 'JScript' );

?>
