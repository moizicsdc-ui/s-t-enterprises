const header=document.querySelector('.site-header');const menu=document.querySelector('.menu');const nav=document.querySelector('.site-header nav');
const setHeader=()=>header?.classList.toggle('scrolled',window.scrollY>40);setHeader();window.addEventListener('scroll',setHeader,{passive:true});
if(menu&&nav){const home=new URL(header.querySelector('.brand')?.getAttribute('href')||'./',location.href);const links=[['About','about/'],['Services','services/'],['Projects','projects/'],['Process','#process'],['Contact','contact/']];nav.querySelectorAll('a:not(.nav-cta)').forEach((a,i)=>{if(links[i])a.href=new URL(links[i][1],home).href});menu.setAttribute('aria-expanded','false');menu.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');menu.textContent=open?'×':'☰';document.body.classList.toggle('menu-open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');menu.textContent='☰';document.body.classList.remove('menu-open')}));window.addEventListener('resize',()=>{if(window.innerWidth>800){header.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';document.body.classList.remove('menu-open')}})}
function handleForm(e){e.preventDefault();const f=new FormData(e.target);const msg='Hello S & T Enterprises, I would like to discuss a project.\\n\\nName: '+(f.get('name')||'')+'\\nPhone: '+(f.get('phone')||'')+'\\nProject: '+(f.get('type')||'')+'\\nMessage: '+(f.get('message')||'');window.open('https://wa.me/917836055232?text='+encodeURIComponent(msg),'_blank','noopener');return false}
(function(){const whatsappIcon='<svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.09 0C5.53 0 .19 5.34.19 11.91c0 2.1.55 4.15 1.6 5.96L.09 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.48-8.43ZM12.1 21.85h-.01a9.91 9.91 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.89 9.89 0 1 1 8.39 4.62Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>';document.querySelectorAll('a[href*="wa.me"]').forEach(a=>{if(!a.querySelector('.whatsapp-icon'))a.insertAdjacentHTML('afterbegin',whatsappIcon)});const modal=document.createElement('div');modal.className='enquiry-modal';modal.id='enquiryModal';modal.setAttribute('aria-hidden','true');modal.innerHTML='<div class="enquiry-backdrop" data-close-enquiry></div><div class="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiryTitle"><button class="enquiry-close" type="button" data-close-enquiry aria-label="Close enquiry">×</button><p class="kicker">S & T ENTERPRISES / PROJECT ENQUIRY</p><h2 id="enquiryTitle">Let\'s discuss your <em>project.</em></h2><p class="enquiry-intro">Share a few details and we\'ll prepare the enquiry for WhatsApp.</p><form class="enquiry-form" onsubmit="return handleForm(event)"><label>Name<input required name="name" placeholder="Your name"></label><label>Phone<input required name="phone" placeholder="Your phone number"></label><label>Project type<select name="type"><option>Residential Construction</option><option>Commercial Construction</option><option>Industrial Construction</option><option>Renovation</option><option>Interior Construction</option><option>Structural Work</option><option>Architectural Services</option></select></label><label>Message<textarea name="message" rows="4" placeholder="Tell us briefly about your project"></textarea></label><button class="btn btn-dark" type="submit">Continue on WhatsApp ↗</button></form></div></div>';document.body.appendChild(modal);const whatsappModalButton=modal.querySelector('.enquiry-form .btn');if(whatsappModalButton&&!whatsappModalButton.querySelector('.whatsapp-icon'))whatsappModalButton.insertAdjacentHTML('afterbegin',whatsappIcon);const open=()=>{modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>modal.querySelector('input')?.focus(),120)};const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};document.addEventListener('click',e=>{const trigger=e.target.closest('[data-popup="enquiry"],.cta-band .btn,.documents .btn,.actions .btn-light,.faq-cta .text-link');if(trigger){e.preventDefault();open()}if(e.target.closest('[data-close-enquiry]'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})})();\n
(function(){
  const wrap=document.querySelector('.site-header nav .profile-menu');
  if(!wrap) return;
  const btn=wrap.querySelector('.profile-download');
  const panel=wrap.querySelector('.profile-panel');
  const generate=wrap.querySelector('.profile-generate');
  if(!btn||!panel||!generate) return;

  const sections={
    overview:{title:'Company Overview',eyebrow:'01 / WHO WE ARE',text:'S & T Enterprises is a construction company committed to delivering quality workmanship, reliable project execution, and durable solutions. We focus on understanding our clients requirements and turning their ideas into well-planned, high-quality spaces.',extra:'Founded in 2018, S & T Enterprises serves clients across Delhi NCR.'},
    services:{title:'Our Capabilities',eyebrow:'02 / WHAT WE DO',items:['Residential Construction','Commercial Construction','Industrial Construction','Renovation','Interior Construction','Structural Work','Architectural Services']},
    projects:{title:'Selected Projects',eyebrow:'03 / SELECTED WORK',items:['G-18 - Sector 44 - Residential - Completed 2022','A-129 - Sector 92 - Residential - Completed 2023','A-128 - Sector 92 - Residential - Completed 2025','NFC - NFC - Residential - Ongoing']},
    process:{title:'Our Process',eyebrow:'04 / HOW WE WORK',items:['PLAN - Understand requirements, scope, priorities and project direction before work begins.','BUILD - Coordinate skilled workmanship, materials and communication through execution.','DELIVER - Focus on quality, detail and a result built for long-term value.']},
    founder:{title:'Founder & Leadership',eyebrow:'05 / LEADERSHIP',text:'Mohd Kashif is the Director of S & T Enterprises. With around 14 years of experience and an M. Tech background, he founded the company with a clear vision to deliver reliable, high-quality construction while building lasting client relationships.'},
    why:{title:'Why Choose S & T',eyebrow:'06 / OUR PROMISE',items:['Quality You Can Trust','Reliable Project Execution','Transparent Communication','Built Around Your Vision']},
    contact:{title:'Contact Details',eyebrow:'07 / GET IN TOUCH',items:['+91 78360 55232','mohd.kashif2782@gmail.com','Shaheen Bagh, Okhla, New Delhi','Business Hours: 9 AM - 6 PM','Serving Delhi NCR']}
  };

  const clean=s=>String(s).replace(/[–—]/g,'-').replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[^\x09\x0A\x0D\x20-\x7E]/g,'');
  const esc=s=>clean(s).replace(/\\/g,'\\\\').replace(/\\(/g,'\\(').replace(/\\)/g,'\\)');
  const wrapText=(text,max)=>{const words=clean(text).split(/\\s+/),lines=[];let line='';words.forEach(w=>{if((line+' '+w).trim().length>max&&line){lines.push(line);line=w}else line=(line+' '+w).trim()});if(line)lines.push(line);return lines};
  const textCmd=(text,x,y,size,font='F1')=>'BT /'+font+' '+size+' Tf '+x+' '+y+' Td ('+esc(text)+') Tj ET';
  const multiCmd=(lines,x,y,size,leading,font='F1')=>'BT /'+font+' '+size+' Tf '+x+' '+y+' Td '+lines.map((l,i)=>(i?'0 -'+leading+' Td ':'')+'('+esc(l)+') Tj').join(' ')+' ET';

  function pageStream(n,key){
    const s=sections[key], out=[];
    out.push('q 0.09 0.09 0.08 rg 0 0 595.28 841.89 re f Q');
    out.push('q 0.85 0.64 0.18 rg 54 790 487 2 re f Q');
    out.push(textCmd('S & T ENTERPRISES',54,805,10,'F2'));
    out.push(textCmd(s.title,54,720,30,'F2'));
    out.push(textCmd(s.eyebrow,54,697,10,'F1'));
    out.push('q 0.28 0.28 0.26 RG 54 681 m 541 681 l S Q');
    let y=625;
    if(s.text){
      out.push(textCmd(key==='overview'?'Strong Foundations. Stronger Futures.':'Director, S & T Enterprises',54,y,16,'F2')); y-=34;
      const lines=wrapText(s.text,78); out.push(multiCmd(lines,54,y,12,18,'F1')); y-=lines.length*18+24;
      if(s.extra){const extra=wrapText(s.extra,78);out.push(multiCmd(extra,54,y,11,17,'F1'));y-=extra.length*17+35}
      if(key==='overview'){
        const stats=[['2018','FOUNDED'],['15+','PROJECTS COMPLETED'],['3','ONGOING PROJECTS'],['14+','FOUNDER EXPERIENCE']];
        stats.forEach((st,i)=>{const x=54+(i%2)*248, yy=y-Math.floor(i/2)*90;out.push('q 0.15 0.15 0.14 rg '+x+' '+(yy-48)+' 225 64 re f Q');out.push(textCmd(st[0],x+16,yy,20,'F2'));out.push(textCmd(st[1],x+16,yy-22,8,'F1'))});
      }
    }else{
      (s.items||[]).forEach((item,i)=>{const yy=y-i*78;out.push('q 0.15 0.15 0.14 rg 54 '+(yy-42)+' 487 56 re f Q');out.push(textCmd(String(i+1).padStart(2,'0'),70,yy-8,10,'F2'));const lines=wrapText(item,key==='process'?62:48);out.push(multiCmd(lines,112,yy-3,key==='process'?11:14,key==='process'?16:19,'F1'))});
    }
    out.push(textCmd('COMPANY PROFILE  |  S & T ENTERPRISES',54,40,8,'F1'));
    out.push(textCmd(String(n).padStart(2,'0'),525,40,8,'F1'));
    return out.join('\n');
  }

  function buildPdf(keys){
    const objects=[];
    const add=o=>{objects.push(o);return objects.length};
    const font1=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>');
    const font2=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>');
    const pageIds=[], contentIds=[];
    keys.forEach((key,i)=>{const stream=pageStream(i+1,key);const c=add('<< /Length '+stream.length+' >>\\nstream\\n'+stream+'\\nendstream');contentIds.push(c);pageIds.push(add(''))});
    const pagesId=add('');
    pageIds.forEach((pid,i)=>{objects[pid-1]='<< /Type /Page /Parent '+pagesId+' 0 R /MediaBox [0 0 595.28 841.89] /Resources << /Font << /F1 '+font1+' 0 R /F2 '+font2+' 0 R >> >> /Contents '+contentIds[i]+' 0 R >>'});
    objects[pagesId-1]='<< /Type /Pages /Kids ['+pageIds.map(id=>id+' 0 R').join(' ') +'] /Count '+pageIds.length+' >>';
    const catalogId=add('<< /Type /Catalog /Pages '+pagesId+' 0 R >>');
    let pdf='%PDF-1.4\\n%âãÏÓ\\n', offsets=[0];
    objects.forEach((obj,i)=>{offsets.push(pdf.length);pdf+=(i+1)+' 0 obj\\n'+obj+'\\nendobj\\n'});
    const xref=pdf.length;pdf+='xref\\n0 '+(objects.length+1)+'\\n0000000000 65535 f \\n';for(let i=1;i<offsets.length;i++)pdf+=String(offsets[i]).padStart(10,'0')+' 00000 n \\n';
    pdf+='trailer\\n<< /Size '+(objects.length+1)+' /Root '+catalogId+' 0 R >>\\nstartxref\\n'+xref+'\\n%%EOF';
    return new Blob([pdf],{type:'application/pdf'});
  }

  function closePanel(){panel.classList.remove('is-open');panel.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false')}
  btn.addEventListener('click',e=>{e.preventDefault();e.stopPropagation();const open=!panel.classList.contains('is-open');panel.classList.toggle('is-open',open);panel.setAttribute('aria-hidden',String(!open));btn.setAttribute('aria-expanded',String(open))});
  panel.addEventListener('click',e=>e.stopPropagation());
  wrap.querySelector('.profile-close')?.addEventListener('click',closePanel);
  generate.addEventListener('click',()=>{
    const keys=[...panel.querySelectorAll('input:checked')].map(i=>i.value);
    if(!keys.length){alert('Please select at least one section.');return}
    generate.disabled=true;generate.textContent='Creating PDF...';
    try{
      const blob=buildPdf(keys),url=URL.createObjectURL(blob),a=document.createElement('a');
      a.href=url;a.download='ST-Enterprises-Company-Profile.pdf';a.style.display='none';document.body.appendChild(a);a.click();a.remove();
      setTimeout(()=>URL.revokeObjectURL(url),1000);closePanel();
    }catch(e){console.error(e);alert('PDF could not be generated. Please try again.')}
    finally{generate.disabled=false;generate.innerHTML='Generate PDF <span>↓</span>'}
  });
  document.addEventListener('click',e=>{if(!wrap.contains(e.target))closePanel()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});
})();
