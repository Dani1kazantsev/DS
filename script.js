let btn = document.querySelector('.burger')
let menu = document.querySelector('.nav-list')
let arrow1 = document.querySelector('.demon-text__arrow--1')
let text1 = document.querySelector('.demon-text__block--1')
let arrow2 = document.querySelector('.demon-text__arrow--2')
let text2 = document.querySelector('.demon-text__block--2')
let arrow3 = document.querySelector('.demon-text__arrow--3')
let text3 = document.querySelector('.demon-text__block--3')
let arrow4 = document.querySelector('.demon-text__arrow--4')
let text4 = document.querySelector('.demon-text__block--4')
btn.addEventListener('click', function(){
    menu.classList.toggle('nav-list--open')
    btn.classList.toggle('burger--open')
})

arrow1.addEventListener('click', function(){
    text1.classList.toggle('demon-text__block--open')
    arrow1.classList.toggle('demon-text__arrow--open')
})

arrow2.addEventListener('click', function(){
    text2.classList.toggle('demon-text__block--open')
    arrow2.classList.toggle('demon-text__arrow--open')
})

arrow3.addEventListener('click', function(){
    text3.classList.toggle('demon-text__block--open')
    arrow3.classList.toggle('demon-text__arrow--open')
})

arrow4.addEventListener('click', function(){
    text4.classList.toggle('demon-text__block--open')
    arrow4.classList.toggle('demon-text__arrow--open')
})
