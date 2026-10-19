(function(){
var S=Object.assign({},window.SITE_DEFAULTS||{});
try{var p=JSON.parse(localStorage.getItem('cf-preview')||'null');if(p)S=Object.assign(S,p)}catch(e){}
window.SITE=S;window.PHONE=String(S.phone).replace(/\D/g,'').slice(-10);
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e}
var pages=[['index.html','Home'],['services.html','Services'],['contact.html','Contact']];
var cur=location.pathname.split('/').pop()||'index.html';
document.addEventListener('DOMContentLoaded',function(){
document.title=(document.title?document.title+' | ':'')+S.name;
var h=document.getElementById('hdr');
if(h){var w=el('div','wrap'),hd=el('header'),a=el('a','logo');a.href='index.html';var im=el('img');im.src='logo-icon.jpg';im.alt='';a.appendChild(im);a.appendChild(el('span','',S.name));
var nav=el('nav');pages.forEach(function(q){var l=el('a',q[0]==cur?'on':'',q[1]);l.href=q[0];nav.appendChild(l)});
var c=el('a','btn hot','Call '+S.phone);c.href='tel:+91'+PHONE;nav.appendChild(c);hd.appendChild(a);hd.appendChild(nav);w.appendChild(hd);h.appendChild(w)}
var f=document.getElementById('ftr');
if(f){var w2=el('div','wrap'),ft=el('footer');ft.appendChild(el('span','','\u00a9 '+S.name+'. '+S.address+' \u00b7 '+S.phone+' \u00b7 '+S.email+' \u00b7 '));var ad=el('a','','Admin');ad.href='admin.html';ft.appendChild(ad);w2.appendChild(ft);f.appendChild(w2)}
[].forEach.call(document.querySelectorAll('[data-f]'),function(e){e.textContent=S[e.dataset.f]});
[].forEach.call(document.querySelectorAll('[data-tel]'),function(e){e.href='tel:+91'+PHONE});
[].forEach.call(document.querySelectorAll('[data-mail]'),function(e){e.href='mailto:'+S.email;e.textContent=S.email});
function svc(id,n){var box=document.getElementById(id);if(!box)return;(S.services||[]).slice(0,n||99).forEach(function(s){var d=el('div'),t=el('h3','',s[0]);d.appendChild(t);d.appendChild(el('p','',s[1]||''));box.appendChild(d)})}
svc('svc');svc('svc3',3);
var ci=document.getElementById('cities');
if(ci)(S.cities||[]).forEach(function(n){var d=el('div','city');d.appendChild(el('h3','',n));d.appendChild(el('p','','Onsite visits and online support.'));ci.appendChild(d)});
var sel=document.getElementById('c');
if(sel)(S.cities||[]).concat(['Other (online only)']).forEach(function(n){var o=el('option','',n);sel.appendChild(o)});
var fm=document.getElementById('f');
if(fm)fm.onsubmit=function(e){e.preventDefault();var m="Hello "+S.name+", I'm "+document.getElementById('n').value+" from "+sel.value+". Support type: "+document.getElementById('t').value+". Problem: "+document.getElementById('p').value;window.open('https://wa.me/91'+PHONE+'?text='+encodeURIComponent(m),'_blank')};
});})();
