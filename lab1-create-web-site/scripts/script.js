const menu=document.querySelector("#menu");
const closeImg=document.querySelector(".logo_image--burger__close");
const openImg=document.querySelector(".logo_image--burger__open");
const button=document.querySelector(".logo_image--burger")
let isOpen=false;
const navbar=document.querySelector(".navbar");
let oldScrollY=0;

const openMenu=()=>{

    menu.style.opacity=1;
    menu.style.top=0;
    closeImg.style.display="block";
    openImg.style.display="none";
    isOpen=true;
}

const closeMenu=()=>{
    menu.style.opacity=1;
    menu.style.top=" -100vh";
    closeImg.style.display="none";
    openImg.style.display="block";

    isOpen=false;
}

const menuEventClick=()=>{
    if(isOpen){
        closeMenu(); 
    }
    else  openMenu();
}

const scrollWin =()=> {
    let scrolled = window.pageYOffset || document.documentElement.scrollTop;
    let dY = scrolled - oldScrollY;
    
    if ( dY < 0 ){
      navbar.style.top=0;
    } else {
      navbar.style.top="-100px";
    }
    
    oldScrollY = scrolled;
  
  }
button.addEventListener("click",menuEventClick);
window.addEventListener("scroll",scrollWin)