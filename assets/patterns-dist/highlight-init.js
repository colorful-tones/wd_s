$(document).ready(function() {
  $('.highlight pre code').each(function(i, block) {
    hljs.highlightBlock(block);
  });
});