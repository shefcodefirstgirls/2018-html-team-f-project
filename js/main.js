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


			$('#submit').click(function() {

<<<<<<< HEAD
			    var val1 = $('[name=Option1]:checked').val();
			    var val2 = $('[name=Option2]:checked').val();
			    $('tr').each(function() {
			        var src = $(this).find('.Source').text();
			        var typ = $(this).find('.Type').text();
			            //alert(val2);
=======
$(window).load(function(){
  $(window).scroll(function() {
    var wintop = $(window).scrollTop(), docheight = $('main').height(), winheight = $(window).height();
    console.log(wintop);
    var totalScroll = (wintop/(docheight-winheight))*100;
    $(".progressBar").css("width",totalScroll+"%");
  });
>>>>>>> 4518b9c607c06a37c2353e3017aaacbfdd753513

			        if ((typ == val1 || val1 == 'A' ) && (src == val2 || val2 == 'A' )){
			            $(this).show();
			        } else {
			            $(this).hide();
			        }
			    });
			});
