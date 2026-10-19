(function(){
var S=Object.assign({},window.SITE_DEFAULTS||{});
try{var p=JSON.parse(localStorage.getItem('cf-preview')||'null');if(p)S=Object.assign(S,p)}catch(e){}
window.SITE=S;window.PHONE=String(S.phone).replace(/\D/g,'').slice(-10);
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e}
var WA='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';window.WA_SVG=WA;
function waUrl(m){return 'https://wa.me/91'+window.PHONE+'?text='+encodeURIComponent(m||('Hello '+S.name+', I need help with my computer.'))}
function waBtn(cls,label){var a=el('a',cls);a.href=waUrl();a.target='_blank';a.rel='noopener';a.innerHTML=WA+(label?'<span>'+label+'</span>':'');return a}
var pages=[['index.html','Home'],['services.html','Services'],['contact.html','Contact']];
var cur=location.pathname.split('/').pop()||'index.html';
document.addEventListener('DOMContentLoaded',function(){
document.title=(document.title?document.title+' | ':'')+S.name;
var h=document.getElementById('hdr');
if(h){var w=el('div','wrap'),hd=el('header'),a=el('a','logo');a.href='index.html';var im=el('img');im.src='logo-icon.jpg';im.alt='';a.appendChild(im);a.appendChild(el('span','',S.name));
var nav=el('nav');pages.forEach(function(q){var l=el('a',q[0]==cur?'on':'',q[1]);l.href=q[0];nav.appendChild(l)});
var c=el('a','btn hot','Call '+S.phone);c.href='tel:+91'+PHONE;nav.appendChild(c);nav.appendChild(waBtn('btn wa','WhatsApp'));hd.appendChild(a);hd.appendChild(nav);w.appendChild(hd);h.appendChild(w)}
var f=document.getElementById('ftr');
if(f){var w2=el('div','wrap'),ft=el('footer');ft.appendChild(el('span','','\u00a9 '+S.name+'. '+S.address+' \u00b7 '+S.phone+' \u00b7 '+S.email+' \u00b7 '));var ad=el('a','','Admin');ad.href='admin.html';ft.appendChild(ad);w2.appendChild(ft);f.appendChild(w2)}
if(cur!=='admin.html'){var fl=waBtn('wafloat');fl.setAttribute('aria-label','Chat with us on WhatsApp');var tip=el('div','watip','Need help? Chat with us on WhatsApp');document.body.appendChild(tip);document.body.appendChild(fl);fl.addEventListener('click',function(){tip.classList.remove('show')});setTimeout(function(){tip.classList.add('show')},2000);setTimeout(function(){tip.classList.remove('show')},9000)}
[].forEach.call(document.querySelectorAll('[data-wa]'),function(e){e.href=waUrl();e.target='_blank';e.rel='noopener';e.innerHTML=WA+'<span>Chat on WhatsApp</span>'});
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
