// ==UserScript==
// @name        dollatopesa
// @namespace   dollatopesa
// @description Convert USD to PHP
// @include     https://wiki.greasespot.net/Main_Page
// @include     https://www.reddit.com/r/headphones/wiki/recommendations
// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

var elem = $('h1, h2, h3, h4, h5, h6, span, a, p');

$.each(elem, function(i, v) {

  var elemtext = $(v).text();
  var re = /\$(\d+)/g;
  var newstr = elemtext.replace(re, function(m, p1) {
    var convval = (p1.replace(/\D/g, '') * 45);
    var retstr = " $" + p1 + " (₱" + convval + ") ";
    return retstr;
  });
  $(v).html(newstr);
})
