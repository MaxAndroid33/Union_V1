
const menu =document.getElementById('menu');
const navbar =document.getElementById('nav-under');
const menuitems =document.querySelector('.menu-items');


// PX offset when the navbar active
const offset =200;


window.addEventListener('scroll',function(){

    if (this.pageYOffset > offset ){
        navbar.classList.add('navbar-active');
        menuitems.classList.add('menu-items-active');
      
        
    }
    else{
        navbar.classList.remove('navbar-active');
       menuitems.classList.remove('menu-items-active');
    }
});