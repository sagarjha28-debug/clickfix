var fixes={"Slow computer":["Online first","We clean up startup items, junk and settings remotely. If it still crawls we suggest an SSD or RAM upgrade onsite."],
"Virus or pop-ups":["Online","Remote scan and removal, then we set up protection so it doesn't come back."],
"Wi-Fi or internet down":["Either","Router and settings can be fixed online. Cabling or hardware faults need a visit."],
"Won't turn on":["Onsite","Power and hardware faults need a technician with the machine in hand."],
"Lost files":["Call first","Stop using the drive and call us. Recovery depends on the state of the disk."],
"Windows or software":["Online","Install, repair, update or activate remotely while you watch."],
"Printer or office setup":["Onsite or online","Drivers and sharing can be done remotely. Cabling and new setups are done onsite."]};
var chips=document.getElementById('chips'),ans=document.getElementById('answer');
Object.keys(fixes).forEach(function(k){var b=document.createElement('button');b.className='chip';b.type='button';b.textContent=k;b.setAttribute('aria-pressed','false');
b.onclick=function(){[].forEach.call(chips.children,function(c){c.setAttribute('aria-pressed','false')});b.setAttribute('aria-pressed','true');
var f=fixes[k];ans.innerHTML='<b></b><p></p><div class="row"><a class="btn hot" href="tel:+91'+PHONE+'">Call now</a><a class="btn" href="#contact">Describe the problem</a></div>';
ans.querySelector('b').textContent=f[0]+': '+k;ans.querySelector('p').textContent=f[1];};chips.appendChild(b);});