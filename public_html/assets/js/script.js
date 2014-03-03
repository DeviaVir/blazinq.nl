$(document).foundation();

if(Modernizr && ('svg' in Modernizr)) {
  if(false === Modernizr.svg) {
    $('.logo').addClass('fallback');
  }
}
