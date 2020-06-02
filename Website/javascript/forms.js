var $ = function ( id ) { return document.getElementById( id ); }


var validate = function()
{
  var first = $("fname").value;
  var last = $("lname").value;
  var email = $("email").value;
  var comments = $("comments").value;
  var errors = "";

  if ( first == "" )
    errors += "You must enter a first name \n";
  if ( last == "" )
    errors += "You must enter a last name \n";
  if ( email == "" )
    errors += "You must enter an email address \n";
  if ( comments = "")
    errors += "You have not entered a comment \n";
  /*Something is funky about the comments button*/
  if ( errors == "" )
    alert( "Thank you" );
  else
    alert( errors );
}
var reset = function()
{
  $("fname").value = "";
  $("lname").value = "";
  $("email").value = "";
  $("comments").value = "";
}
window.onload = function()
{
  $("subscribe").onclick = validate;
  $("reset").onclick = reset;
}
