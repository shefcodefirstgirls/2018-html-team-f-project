// Put your JavaScript code in the block below. You can remove line 3.
//$(document).ready(function() {
//    alert("Your JavaScript file is working.")
//})


//  $( "#draggable" ).draggable();
//} );




/*function filter1(a){
  window.x= document.getElementsByClassName(a);
}

function filter2(b){
 window.y= window.x.getElementsByClassName(b);
}

function filter3(c){
  window.z= window.y.getElementsByClassName(c);
}

//function display(){
  //z.innerHTML;
//}


$('#b1').click(function() {
		$('#thirty').hide();

	}*/

	$(window).load(function(){
	  $(window).scroll(function() {
	    var wintop = $(window).scrollTop(), docheight = $('main').height(), winheight = $(window).height();
	    console.log(wintop);
	    var totalScroll = (wintop/(docheight-winheight))*100;
	    $(".progressBar").css("width",totalScroll+"%");
	  });

	});
	
	// When the user scrolls down 20px from the top of the document, show the button
	window.onscroll = function() {scrollFunction()};

	function scrollFunction() {
	    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
	        document.getElementById("myBtn").style.display = "block";
	    } else {
	        document.getElementById("myBtn").style.display = "none";
	    }
	}

	// When the user clicks on the button, scroll to the top of the document
	function topFunction() {
	    document.body.scrollTop = 0; // For Safari
	    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
	}
