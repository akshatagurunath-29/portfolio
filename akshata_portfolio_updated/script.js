const navbar=document.getElementById('navbar');
const menuBtn=document.getElementById('menuBtn');
const navLinks=document.getElementById('navLinks');
const year=document.getElementById('year');
year.textContent=new Date().getFullYear();
window.addEventListener('scroll',()=>navbar.classList.toggle('scrolled',window.scrollY>20));
menuBtn.addEventListener('click',()=>navLinks.classList.toggle('open'));
navLinks.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>navLinks.classList.remove('open')));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')}),{threshold:.12});
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const certModal=document.getElementById('certModal');
const certImg=document.getElementById('certImg');
function closeCert(){certModal.classList.remove('open');certModal.setAttribute('aria-hidden','true');certImg.src='';document.body.style.overflow=''}
document.querySelectorAll('.cert-link').forEach(b=>b.addEventListener('click',()=>{certImg.src=b.dataset.src;certImg.alt=b.dataset.alt;certModal.classList.add('open');certModal.setAttribute('aria-hidden','false');document.body.style.overflow='hidden'}));
certModal.addEventListener('click',e=>{if(e.target!==certImg)closeCert()});
document.addEventListener('keydown',e=>{if(e.key==='Escape')closeCert()});

/* ---- PROJECT LINKS ----
   Paste the GitHub repo URL for each project between the quotes.
   Any project left empty falls back to the GitHub profile. */
const PROJECT_LINKS={
  "E-commerce Web Application":"https://github.com/akshatagurunath-29/E-commerce-web",
  "HandGestures":"https://github.com/akshatagurunath-29/Handgestures",
  "Question-Answering using NLP":"https://github.com/akshatagurunath-29/Question-Answering",
  "Calculator":"https://github.com/akshatagurunath-29/Calculator",
  "Crop-Yield Prediction using ML":"https://github.com/akshatagurunath-29/Crop-yield-prediction"
};
document.querySelectorAll('.project-link').forEach(a=>{
  const u=PROJECT_LINKS[a.textContent.trim()];
  if(u)a.href=u;
});
