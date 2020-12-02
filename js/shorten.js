document.getElementById("btnShorten").onclick = function (e) {
   e.preventDefault();
   var txtShorten = document.getElementById("txtShorten");
   
   txtShorten.classList.remove("invalidInput");
   document.getElementById("spanError").style.display = "none";
   
   if (txtShorten.value == "") {
      txtShorten.classList.add("invalidInput");
      document.getElementById("spanError").style.display = "block";
   }
}