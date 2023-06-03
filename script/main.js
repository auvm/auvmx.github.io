const menu_icon_img = document.querySelector(".menu_icon");
const menu_container = document.querySelector(".menu_container");
const list_item_menu = document.querySelectorAll(".list_item_menu");


menu_icon_img.addEventListener("click", toggle_mobile_menu);

list_item_menu.forEach((item) => {
    item.addEventListener("click", toggle_mobile_menu);
})


function toggle_mobile_menu(){
    // let isShoppingCartOpen = !shoppingCart.classList.contains("inactive");
    // let isAsideProductDetailOpen = !asideProductDetail.classList.contains("inactive");
    // if(isAsideProductDetailOpen){
    //     asideProductDetail.classList.add("inactive");
    // }
    // if(isShoppingCartOpen){
    //     shoppingCart.classList.add("inactive");
    // }
    // mobileMenu.classList.toggle("inactive");

    menu_container.classList.toggle("inactive");
}
