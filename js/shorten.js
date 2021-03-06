var API_URL = "https://api.shrtco.de/v2/shorten";

var urls = [];
var itemUrlsShortened = "urlsShortened";

getUrlsShortened();

function getUrlsShortened () {
   if (localStorage.getItem(itemUrlsShortened) == "") {
      localStorage.setItem(itemUrlsShortened, JSON.stringify([]));
   }

   urls = JSON.parse(localStorage.getItem(itemUrlsShortened)) || [];
   showUrlsShortened();
   setFunctionCopy();

}

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

      addUrl({
         "originalUrl": txtShorten.value,
         "urlShorten": link.result.short_link
      });

      var contLinksShortened = document.getElementById("contLinksShortened");
      contLinksShortened.innerHTML = "";

      showUrlsShortened();
      setFunctionCopy();
      
      txtShorten.value = "";

   })
   .catch(error => alert("Error al acortar el link"));

}

function setFunctionCopy() {
   var btns = Array.from(document.getElementsByClassName("btnCopy"));

   btns.forEach(el => {
      el.onclick = function (e) {

         var btnCopied = Array.from(document.getElementsByClassName("bgCopied"));
         if (btnCopied.length != 0) {
            btnCopied[0].classList.remove("bgCopied");
            btnCopied[0].textContent = "Copy";
         }

         document.getElementById("urlCopy").value = document.getElementById("txtShortened-" + this.id.split("-")[1]).textContent;
         document.getElementById("urlCopy").focus();
         document.getElementById("urlCopy").select();
         document.execCommand("copy");
         el.focus();
         this.classList.add("bgCopied");
         this.textContent = "Copied!";
      }
   })
}

function showUrlsShortened() {
      urls.forEach((url, index) => {
         contLinksShortened.innerHTML += 
            `<div class="contShorten bg-white">
               <div class="contOriginalLink">
                  <p class="linkToShorten">${url.originalUrl}</p>
               </div>
               <div class="contControlsLink">
                  <label id="txtShortened-${index}" class="linkShortened">${url.urlShorten}</label>
                  <button id="btnCopy-${index}" class="btn btn-cyan text-white btnCopy">Copy</button>
               </div>
            </div>`;
      });
}

function addUrl(url) {
   urls.push(url);
   localStorage.setItem(itemUrlsShortened, JSON.stringify(urls));
}