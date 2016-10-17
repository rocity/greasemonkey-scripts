// ==UserScript==
// @name        Tabz
// @namespace   Tabz
// @description Powerful tabs, yes.
// @include     https://www.reddit.com/*

// @require http://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min.js
// @version     1
// @grant       none
// ==/UserScript==

var $j = jQuery.noConflict();

var icon = $j('link[rel="shortcut icon"]');
var title = $j('title');

$j(icon).attr('href', 'https://upload.wikimedia.org/wikipedia/en/8/88/Counter-clockwise_Icon.png');

$j(window).load(function() {
  $j(title).html('jQuery Learning Center');
});
