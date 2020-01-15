// When the user scrolls down 20px from the top of the document, show the button
// window.onscroll = function() {scrollFunction()};

// function scrollFunction() {
//   if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
//     $("#topButton").style.display = "block";
//   } else {
//     $("#topButton").style.display = "none";
//   }
// }

// // When the user clicks on the button, scroll to the top of the document
// function topFunction() {
//   document.body.scrollTop = 0; // For Safari
//   document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
// }

$('.projectModals').on('click', function(e){
  e.preventDefault();
  console.log("modal button clicked displaying now")
  $('#theModal').modal('show').find('.modal-content').load($(this).attr('href'));
});



// scroll back top top button functions
var btn = $('#topButton');

$(window).scroll(function(){
  if($(window).scrollTop() > 300){
      btn.addClass('show');
      console.log("button showing");
  } else {
      btn.removeClass('show');
      console.log("button hide");
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  console.log("button clicked");
  $('html,body').animate({scrollTop:0}, '300');
});






//create modal, call objects to fill
function modalProject(){
  //create modal

  //based on which modal clicked create specfic modal

  //pop up for going to external link warning

  //close modal
}