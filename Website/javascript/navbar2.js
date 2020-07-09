$(document).ready(function() {

  $('.myLinkedDropdown').mouseenter(function() {
    $(this).addClass('show')
    $(this).children('.dropdown-menu').addClass('show');
  });

  $('.myLinkedDropdown').mouseleave(function() {
    $(this).removeClass('show');
    $(this).children('.dropdown-menu').removeClass('show');
  });
});
