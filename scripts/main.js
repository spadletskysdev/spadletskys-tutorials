/* Components */
/* Scroll Spy */

import scrollSpy from "./scroll-spy.js";

/* Animations */
/* Slide In Animation */

import slideIn from "./animations/slide-in.js";

// First Part - HTML JS CSS Slide In Animation

let prog_lang_el = $("div.testing");

console.log(scrollSpy(prog_lang_el));

window.onscroll = () => {
  slideIn("left", prog_lang_el, 200, 'slow');
};