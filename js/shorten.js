var API_URL = "https://api.shrtco.de/v2/shorten";

var urls = [];

document.getElementById("btnShorten").onclick = function (e) {
   e.preventDefault();
   var txtShorten = document.getElementById("txtShorten");
   
   txtShorten.classList.remove("invalidInput");
   document.getElementById("spanError").style.display = "none";
   
   if (txtShorten.value == "") {
      txtShorten.classList.add("invalidInput");
      return document.getElementById("spanError").style.display = "block";
   }

   fetch(`${API_URL}?url=${txtShorten.value.trim()}`)
   .then(response => response.json())
   .then(link =>{ 
      urls.push(link.result);

      var contLinksShortened = document.getElementById("contLinksShortened");
      contLinksShortened.innerHTML = "";

      urls.forEach(url => {
      contLinksShortened.innerHTML += `<div class="contShorten bg-white">
        <h3 class="linkToShorten">${ txtShorten.value}</h3>
        <div class="contControlsLink">
          <input type="text" class="linkShortened" value="${url.short_link}">
          <button class="btn btn-cyan text-white btnCopy">Copy</button>
        </div>
      </div>`
      });
      
      txtShorten.value = "";

   })
   .catch(error => alert("Error al acortar el link"));

   
   

}