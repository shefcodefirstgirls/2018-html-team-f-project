// Put your JavaScript code in the block below. You can remove line 3.
//$(document).ready(function() {
//    alert("Your JavaScript file is working.")
//})


$( function() {
  $( "#draggable" ).draggable();
} );

function filter1(a){
  var x= document.getElementByClassName(a);
}

function filter2(b){
  var y= x.getElementsByClassName('b');
}

function filter3(c){
  var z= y.getElementsByClassName('c');
}

function display(){
  z.innerHTML;
}
