const btn_bars = document.querySelector('.bars');
const nav_items = document.querySelector('.nav-items');
const top_nav_bar = document.querySelector('.top-nav-bar');
btn_bars.addEventListener('click', function(){
    if(nav_items.classList.contains('hide'))
    {
        nav_items.classList.remove('hide');
    }
    else
    {
        nav_items.classList.add('hide');
    }
})