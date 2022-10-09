
const menu =document.getElementById('menu');
const navbar =document.getElementById('navbar');
// const menu =document.querySelector('.menu');


// PX offset when the navbar active
const offset =200;








window.addEventListener('scroll',function(){

    if (this.pageYOffset > offset ){
        navbar.classList.add('navbar-active');
      
        
    }
    else{
        navbar.classList.remove('navbar-active');
       
    }
});