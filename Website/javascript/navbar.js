function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

$(document).ready(function() {

  $('.myLinkedDropdown').mouseenter(function() {
    $(this).addClass('show')
    $(this).children('.dropdown-menu-wide').addClass('show');
  });

  $('.myLinkedDropdown').mouseleave(function() {
    $(this).removeClass('show');
    $(this).children('.dropdown-menu-wide').removeClass('show');
  });
});
