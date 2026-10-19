(function(){
var S=Object.assign({},window.SITE_DEFAULTS||{});
try{var pv=JSON.parse(localStorage.getItem('cf-preview')||'null');if(pv)S=Object.assign(S,pv)}catch(e){}
window.SITE=S;
function dg(v){return String(v||'').replace(/\D/g,'').slice(-10)}
var PH=dg(S.phone),WN=dg(S.whatsapp)||PH;window.PHONE=PH;window.WANUM=WN;
function el(t,c,x){var e=document.createElement(t);if(c)e.className=c;if(x!==undefined)e.textContent=x;return e}
var WA='<svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true"><path fill="currentColor" d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>';window.WA_SVG=WA;
var IC=['<rect x="4" y="5" width="16" height="11" rx="1.5"/><path d="M2 19h20"/>','<rect x="3" y="3" width="8" height="8"/><rect x="13" y="3" width="8" height="8"/><rect x="3" y="13" width="8" height="8"/><rect x="13" y="13" width="8" height="8"/>','<path d="M12 3v12m0 0l-4-4m4 4l4-4M4 20h16"/>','<path d="M12 3l8 3v6c0 5-3.5 8-8 9-4.5-1-8-4-8-9V6z"/><path d="M9 12l2 2 4-4"/>','<path d="M4 16a8 8 0 1116 0"/><path d="M12 16l4-5"/>','<path d="M2 9a15 15 0 0120 0M5 12.5a10 10 0 0114 0M8.5 16a5 5 0 017 0"/><circle cx="12" cy="19.5" r="1"/>','<path d="M7 9V3h10v6M7 17H4v-7h16v7h-3"/><rect x="7" y="14" width="10" height="7"/>','<rect x="6" y="6" width="12" height="12" rx="1"/><path d="M9 2v4M15 2v4M9 18v4M15 18v4M2 9h4M2 15h4M18 9h4M18 15h4"/>','<path d="M3 11l9-8 9 8v9H3z"/><path d="M10 20v-6h4v6"/>','<rect x="3" y="4" width="18" height="12" rx="1.5"/><path d="M9 20h6M12 16v4"/>'];
function icon(i){var s=el('span','ico');s.innerHTML='<svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">'+IC[i%IC.length]+'</svg>';return s}
function waUrl(m){return 'https://wa.me/91'+WN+'?text='+encodeURIComponent(m||('Hello '+S.name+', I need help with my computer.'))}
function waBtn(cls,label){var a=el('a',cls);a.href=waUrl();a.target='_blank';a.rel='noopener';a.innerHTML=WA+(label?'<span>'+label+'</span>':'');return a}
function bookUrl(s){return 'contact.html?service='+encodeURIComponent(s)+'#book'}
var cur=location.pathname.split('/').pop()||'index.html';
document.addEventListener('DOMContentLoaded',function(){
document.title=(document.title?document.title+' | ':'')+S.name;
var $=function(i){return document.getElementById(i)};
var h=$('hdr');
if(h){var w=el('div','wrap bar'),a=el('a','logo');a.href='index.html';var im=el('img');im.src='logo-icon.jpg';im.alt=S.name+' logo';a.appendChild(im);a.appendChild(el('span','',S.name));
var mb=el('button','menu','Menu');mb.type='button';mb.setAttribute('aria-expanded','false');mb.setAttribute('aria-controls','nav');
var nav=el('nav');nav.id='nav';nav.setAttribute('aria-label','Main');
[['index.html','Home'],['services.html','Services'],['pricing.html','Pricing'],['index.html#how','How It Works'],['contact.html','Contact']].forEach(function(q){var l=el('a',q[0]==cur&&!location.hash&&q[0].indexOf('#')<0?'on':'',q[1]);l.href=q[0];if(l.className)l.setAttribute('aria-current','page');nav.appendChild(l)});
var bk=el('a','btn hot','Book a Service');bk.href='contact.html#book';nav.appendChild(bk);
mb.onclick=function(){var o=nav.classList.toggle('open');mb.setAttribute('aria-expanded',o)};
w.appendChild(a);w.appendChild(mb);w.appendChild(nav);h.appendChild(w)}
var f=$('ftr');
if(f){var w2=el('div','wrap fgrid');var c1=el('div'),c2=el('div');c1.appendChild(el('strong','',S.name));c1.appendChild(el('p','',S.tagline||''));c1.appendChild(el('p','',S.address));
c2.appendChild(el('p','','Phone: '+S.phone));c2.appendChild(el('p','','Email: '+S.email));c2.appendChild(el('p','',S.hours||''));
var p3=el('p','','\u00a9 '+S.name+' \u00b7 ');var ad=el('a','','Admin');ad.href='admin.html';p3.appendChild(ad);c2.appendChild(p3);w2.appendChild(c1);w2.appendChild(c2);f.appendChild(w2)}
if(cur!=='admin.html'){var fl=waBtn('wafloat');fl.setAttribute('aria-label','Chat with us on WhatsApp');var tip=el('div','watip','Need help? Chat with us on WhatsApp');document.body.appendChild(tip);document.body.appendChild(fl);fl.addEventListener('click',function(){tip.classList.remove('show')});setTimeout(function(){tip.classList.add('show')},2500);setTimeout(function(){tip.classList.remove('show')},9500)}
[].forEach.call(document.querySelectorAll('[data-wa]'),function(e){e.href=waUrl();e.target='_blank';e.rel='noopener';e.innerHTML=WA+'<span>Chat on WhatsApp</span>'});
[].forEach.call(document.querySelectorAll('[data-f]'),function(e){if(S[e.dataset.f]!==undefined)e.textContent=S[e.dataset.f]});
[].forEach.call(document.querySelectorAll('[data-tel]'),function(e){e.href='tel:+91'+PH});
[].forEach.call(document.querySelectorAll('[data-mail]'),function(e){e.href='mailto:'+S.email;e.textContent=S.email});
var sv=$('svc');
if(sv)(S.services||[]).forEach(function(s,i){var c=el('article','card');c.appendChild(icon(i));c.appendChild(el('h3','',s[0]));c.appendChild(el('p','',s[1]||''));var ac=el('div','acts'),b=el('a','btn hot sm','Book Service');b.href=bookUrl(s[0]);var v=el('a','lnk','View Pricing');v.href='pricing.html';ac.appendChild(b);ac.appendChild(v);c.appendChild(ac);sv.appendChild(c)});
var pg=$('pricing');
if(pg)(S.pricing||[]).forEach(function(x){var c=el('article','card price');c.appendChild(el('h3','',x[0]));c.appendChild(el('p','from',x[3]||'Starting from'));c.appendChild(el('p','amount',x[1]));c.appendChild(el('p','',x[2]||''));var ac=el('div','acts'),b=el('a','btn hot sm','Book This Service');b.href=bookUrl(x[0]);ac.appendChild(b);c.appendChild(ac);pg.appendChild(c)});
var pn=$('pricenotes');
if(pn)['These are illustrative starting prices. The final cost depends on the problem.',S.pricingNote,S.diagPolicy].forEach(function(t){if(t)pn.appendChild(el('li','',t))});
var rv=$('reviews');
if(rv){if((S.reviews||[]).length)S.reviews.forEach(function(r){var q=el('blockquote','card');q.appendChild(el('p','',r[1]||''));q.appendChild(el('footer','',r[0]));rv.appendChild(q)});else rv.appendChild(el('p','note','Genuine customer reviews will be shown here. Add them from the admin panel.'))}
var bf=$('bf');
if(bf){
function opt(v,t){var o=el('option','',t);o.value=v;return o}
var names=[];(S.pricing||[]).forEach(function(x){names.push(x[0])});(S.services||[]).forEach(function(x){if(names.indexOf(x[0])<0)names.push(x[0])});names.push('Not sure / other');
var ss=$('bsvc'),cs=$('bcity');ss.appendChild(opt('','Select a service'));names.forEach(function(n){ss.appendChild(opt(n,n))});
cs.appendChild(opt('','Select city'));(S.cities||[]).forEach(function(n){cs.appendChild(opt(n,n))});
var q=new URLSearchParams(location.search),sq=q.get('service'),md=q.get('mode');
if(sq){var fd=false;[].forEach.call(ss.options,function(o){if(o.value.toLowerCase()===sq.toLowerCase()){ss.value=o.value;fd=true}});if(!fd){ss.appendChild(opt(sq,sq));ss.value=sq}}
if(md==='remote'||md==='doorstep')$('m_'+md).checked=true;
var dt=$('bdate'),today=new Date(Date.now()-new Date().getTimezoneOffset()*60000).toISOString().slice(0,10);dt.min=today;
bf.addEventListener('submit',function(e){e.preventDefault();
var v={bn:$('bn').value.trim(),bp:$('bp').value.replace(/[\s-]/g,'').replace(/^(\+91|91|0)(?=\d{10}$)/,''),bcity:cs.value,bsvc:ss.value,bdate:dt.value,btime:$('btime').value,bdesc:$('bdesc').value.trim()};
var mode=bf.querySelector('input[name="mode"]:checked'),er=[];
if(v.bn.length<2)er.push(['bn','Please enter your name.']);
if(!/^[6-9]\d{9}$/.test(v.bp))er.push(['bp','Enter a valid 10-digit mobile number.']);
if(!v.bcity)er.push(['bcity','Please select your city.']);
if(!v.bsvc)er.push(['bsvc','Please select the service you need.']);
if(!mode)er.push(['m_remote','Please choose remote support or doorstep visit.']);
if(!v.bdate||v.bdate<today)er.push(['bdate','Please choose a preferred date (today or later).']);
if(!v.btime)er.push(['btime','Please choose a preferred time.']);
if(v.bdesc.length<5)er.push(['bdesc','Please briefly describe the problem.']);
[].forEach.call(bf.querySelectorAll('[aria-invalid]'),function(x){x.removeAttribute('aria-invalid')});
var box=$('bferr'),ok=$('bfok');box.textContent='';ok.textContent='';
if(er.length){var ul=el('ul');er.forEach(function(x){ul.appendChild(el('li','',x[1]));var f=$(x[0]);if(f)f.setAttribute('aria-invalid','true')});box.appendChild(ul);$(er[0][0]).focus();return}
var msg='Booking request - '+S.name+'\nName: '+v.bn+'\nPhone: '+v.bp+'\nCity: '+v.bcity+'\nService: '+v.bsvc+'\nType: '+(mode.value==='remote'?'Remote support':'Doorstep visit')+'\nPreferred: '+v.bdate+' '+v.btime+'\nProblem: '+v.bdesc;
var win=window.open(waUrl(msg),'_blank');if(win)win.opener=null;
ok.textContent=(win?'WhatsApp has opened with your request. ':'Your browser blocked the WhatsApp window. ')+'Your request is submitted only when you press Send in WhatsApp. ';
var l1=el('a','lnk','Open WhatsApp again');l1.href=waUrl(msg);l1.target='_blank';l1.rel='noopener';var l2=el('a','lnk','or send by email');l2.href='mailto:'+S.email+'?subject='+encodeURIComponent('Booking request - '+v.bsvc)+'&body='+encodeURIComponent(msg);
ok.appendChild(l1);ok.appendChild(document.createTextNode(' \u00b7 '));ok.appendChild(l2)});
}
});})();
