(function(){
document.documentElement.classList.add('js');
var d=document.getElementById('mob-drawer'),o=document.getElementById('mob-overlay'),b=document.getElementById('nav-toggle'),c=document.getElementById('mob-close');
function openD(){d.classList.add('open');o.classList.add('open');b.setAttribute('aria-expanded','true');document.documentElement.style.overflow='hidden';}
function closeD(){d.classList.remove('open');o.classList.remove('open');b.setAttribute('aria-expanded','false');document.documentElement.style.overflow='';}
if(b){b.addEventListener('click',openD);}
if(c){c.addEventListener('click',closeD);}
if(o){o.addEventListener('click',closeD);}
document.addEventListener('keydown',function(e){if(e.key==='Escape'){closeD();}});
window.addEventListener('resize',function(){if(window.innerWidth>768){closeD();}});
var qs=document.querySelectorAll('.faq-q');
for(var i=0;i<qs.length;i++){(function(q){
var a=q.nextElementSibling,it=q.parentNode;
q.addEventListener('click',function(){
var open=it.classList.toggle('open');
q.setAttribute('aria-expanded',open?'true':'false');
a.style.maxHeight=open?a.scrollHeight+'px':'0px';
});})(qs[i]);}
})();
