let menu_btn = document.getElementById("mob-btn");
let mob_menu = document.getElementById("mobile-menu");
let menu_items = document.getElementsByClassName("menu-item");

let hide_menu = function(){
    mob_menu.style.display = mob_menu.style.display == "none" || mob_menu.style.display == "" ? "flex" : "none";
};

menu_btn.addEventListener('click',hide_menu);
Array.from(menu_items).forEach(item => {
    item.addEventListener('click',hide_menu);
});
