const nav = document.querySelector('nav');
const navList = document.querySelector('.nav-list');
const openBtn = document.querySelector('.nav-btn');
// const closeBtn = document.querySelector('.fa-close');
const pageContainer = document.querySelector('.container');
const navBtn = document.querySelector('.nav-btn');

let openFlag = false


openBtn.addEventListener('click', ()=>{
    if(!openFlag){
        pageContainer.classList.add('container-active');
        nav.classList.add('nav-active');
        navList.classList.add('nav-list-active');
        openBtn.classList.add('nav-btn-active');
        openFlag = true;
    }
    else {
        pageContainer.classList.remove('container-active');
        nav.classList.remove('nav-active');
        navList.classList.remove('nav-list-active');
        openBtn.classList.remove('nav-btn-active');
        openFlag = false;
    }
})
