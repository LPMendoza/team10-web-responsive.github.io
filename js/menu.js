let menu_btn = document.getElementById("mob-btn");
let mob_menu = document.getElementById("mobile-menu");
let menu_items = document.getElementsByClassName("hm");

let showed = false;

let hide_menu = function(){
    if(showed) {
        showed = false;
        mob_menu.classList.remove("mobile-menu-showed");
    }
    else {
        showed = true;
        mob_menu.classList.add("mobile-menu-showed");
    }
};

menu_btn.addEventListener('click',hide_menu);
Array.from(menu_items).forEach(item => {
    item.addEventListener('click',hide_menu);
});
