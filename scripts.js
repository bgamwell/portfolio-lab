window.addEventListener("DOMContentLoaded", function() {
  var button = document.getElementsByClassName("btn btn-default");
  document.querySelector("btn-default");
  button[0].onclick = function(event){
      alert("Thanks for clicking!");
  };

  var about = document.getElementById("about");
  var contact = document.getElementById("contact");
  about.onclick = function(event){
    contact.style.visibility = "hidden";
  };

});
