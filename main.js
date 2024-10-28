let btn = document.getElementById('menu');
let hd =document.querySelector('header');
let mod = document.querySelector('.mode')
let nav = document.querySelector('nav');
let section = document.querySelector('section');
let coment = document.querySelector('.comment');
let heading = document.querySelector('.heading');
let bd = document.body;
let coment_h= document.querySelector('.comment h3');
let h3=document.querySelector('.heading h3');
let categori = document.querySelector('.categorer');
let categori_h=document.querySelector('h3');
let tutor = document.querySelector('.tutor');
let tutor_h = document.querySelector('h3');
let heading2 = document.querySelector('#aside h3');
let section_id = document.querySelector('#aside .cours-html');
let section_id_top = document.querySelector('#aside .top ');
let c_css=document.querySelector('.cours-css');
let c_js=document.querySelector('.cours-js');
let icon=document.querySelector('.icon');
let box = document.querySelector('.box');


btn.addEventListener('click', () => {
  hd.classList.toggle('active');
  
  console.log();
})

mod.addEventListener('click', () => {
  nav.classList.toggle('active');
  section.classList.toggle('active');
  coment.classList.toggle('active');
  coment_h.classList.toggle('active');
  heading.classList.toggle('active');
  bd.classList.toggle('active');
  h3.classList.toggle('active');
  categori.classList.toggle('active');
  categori_h.classList.toggle('active');
  tutor.classList.toggle('active');
  heading2.classList.toggle('active');
  section_id.classList.toggle('active');
  section_id_top.classList.toggle('active');
  c_css.classList.toggle('active');
  c_js.classList.toggle('active');
  bgheader();

})

icon.addEventListener('click',()=>{
  box.classList.toggle('active');
})