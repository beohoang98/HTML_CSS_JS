var menu_head = document.querySelectorAll('.menu_member');
for(var i = 0 ; i < menu_head.length; ++i) {
    menu_head[i].className += " lowTheme";
}

var menu_contain = document.querySelectorAll('.menu_contain div');
for(var i = 0 ; i < menu_contain.length; ++i) {
    menu_contain[i].className += " mediumTheme";
}
