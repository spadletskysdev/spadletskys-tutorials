export default function slideIn($dir, $el, $pos, $dur) {
  var w = $el.outerWidth();
  var h = $el.height;

  if ($dir == "left") {
    $el.animate({ left: $pos }, $dur);
    console.log(w);
  }
}
