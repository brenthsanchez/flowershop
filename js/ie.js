$(document).ready(function(){

var h = window.innerHeight
        || document.documentElement.clientHeight
        || document.body.clientHeight;

if( document.getElementById("BGContainer").offsetHeight < h )
    document.getElementById("BGContainer").style.minHeight = h + "px";
}