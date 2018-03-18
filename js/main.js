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



	/* Storing selection values */
$('button[name=Option1]').click(function() {
  $('button[name=Option1]').removeAttr('id');
  $(this).attr('id', 'selected');
});

$('button[name=Option2]').click(function() {
  $('button[name=Option2]').removeAttr('id');
  $(this).attr('id', 'selected');
});

$('button[name=Option3]').click(function() {
  $('button[name=Option3]').removeAttr('id');
  $(this).attr('id', 'selected');
});

/* Filtering */
$('#submit').click(function() {

  var val1 = $('[name=Option1][id=selected]').val();
  var val2 = $('[name=Option2][id=selected]').val();
  var val3 = $('[name=Option3][id=selected]').val();
  $('tr').each(function() {
    var src = $(this).find('.Time').text();
    var typ = $(this).find('.Location').text();
    var knd = $(this).find('.Type').text();

    if ((src == val1 || val1 == 'A') && (typ == val2 || val2 == 'A') && (knd == val3 || val3 == 'A')) {
      $(this).show();
    } else {
      $(this).hide();
    }
  });
});
