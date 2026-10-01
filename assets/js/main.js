const header=document.querySelector('.site-header');const menu=document.querySelector('.menu');const nav=document.querySelector('.site-header nav');
const setHeader=()=>header?.classList.toggle('scrolled',window.scrollY>40);setHeader();window.addEventListener('scroll',setHeader,{passive:true});
if(menu&&nav){const home=new URL(header.querySelector('.brand')?.getAttribute('href')||'./',location.href);const links=[['About','about/'],['Services','services/'],['Projects','projects/'],['Process','#process'],['Contact','contact/']];nav.querySelectorAll('a:not(.nav-cta)').forEach((a,i)=>{if(links[i])a.href=new URL(links[i][1],home).href});menu.setAttribute('aria-expanded','false');menu.addEventListener('click',()=>{const open=header.classList.toggle('open');menu.setAttribute('aria-expanded',String(open));menu.setAttribute('aria-label',open?'Close menu':'Open menu');menu.textContent=open?'×':'☰';document.body.classList.toggle('menu-open',open)});nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{header.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.setAttribute('aria-label','Open menu');menu.textContent='☰';document.body.classList.remove('menu-open')}));window.addEventListener('resize',()=>{if(window.innerWidth>800){header.classList.remove('open');menu.setAttribute('aria-expanded','false');menu.textContent='☰';document.body.classList.remove('menu-open')}})}
function handleForm(e){e.preventDefault();const f=new FormData(e.target);const msg='Hello S & T Enterprises, I would like to discuss a project.\\n\\nName: '+(f.get('name')||'')+'\\nPhone: '+(f.get('phone')||'')+'\\nProject: '+(f.get('type')||'')+'\\nMessage: '+(f.get('message')||'');window.open('https://wa.me/917836055232?text='+encodeURIComponent(msg),'_blank','noopener');return false}
(function(){const whatsappIcon='<svg class="whatsapp-icon" viewBox="0 0 24 24" aria-hidden="true" focusable="false"><path d="M20.52 3.48A11.85 11.85 0 0 0 12.09 0C5.53 0 .19 5.34.19 11.91c0 2.1.55 4.15 1.6 5.96L.09 24l6.28-1.65a11.9 11.9 0 0 0 5.72 1.46h.01c6.56 0 11.9-5.34 11.9-11.9 0-3.18-1.24-6.17-3.48-8.43ZM12.1 21.85h-.01a9.91 9.91 0 0 1-5.05-1.38l-.36-.21-3.73.98.99-3.64-.23-.37a9.89 9.89 0 1 1 8.39 4.62Zm5.43-7.42c-.3-.15-1.77-.87-2.05-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.94 1.17-.17.2-.35.22-.65.07-.3-.15-1.25-.46-2.39-1.47-.88-.79-1.47-1.77-1.64-2.07-.17-.3-.02-.46.13-.61.14-.14.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.02-.52-.07-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.51h-.57c-.2 0-.52.07-.79.37-.27.3-1.04 1.02-1.04 2.49s1.07 2.89 1.22 3.09c.15.2 2.1 3.21 5.08 4.5.71.31 1.26.49 1.69.63.71.23 1.35.2 1.86.12.57-.08 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z"/></svg>';document.querySelectorAll('a[href*="wa.me"]').forEach(a=>{if(!a.querySelector('.whatsapp-icon'))a.insertAdjacentHTML('afterbegin',whatsappIcon)});const modal=document.createElement('div');modal.className='enquiry-modal';modal.id='enquiryModal';modal.setAttribute('aria-hidden','true');modal.innerHTML='<div class="enquiry-backdrop" data-close-enquiry></div><div class="enquiry-dialog" role="dialog" aria-modal="true" aria-labelledby="enquiryTitle"><button class="enquiry-close" type="button" data-close-enquiry aria-label="Close enquiry">×</button><p class="kicker">S & T ENTERPRISES / PROJECT ENQUIRY</p><h2 id="enquiryTitle">Let\'s discuss your <em>project.</em></h2><p class="enquiry-intro">Share a few details and we\'ll prepare the enquiry for WhatsApp.</p><form class="enquiry-form" onsubmit="return handleForm(event)"><label>Name<input required name="name" placeholder="Your name"></label><label>Phone<input required name="phone" placeholder="Your phone number"></label><label>Project type<select name="type"><option>Residential Construction</option><option>Commercial Construction</option><option>Industrial Construction</option><option>Renovation</option><option>Interior Construction</option><option>Structural Work</option><option>Architectural Services</option></select></label><label>Message<textarea name="message" rows="4" placeholder="Tell us briefly about your project"></textarea></label><button class="btn btn-dark" type="submit">Continue on WhatsApp ↗</button></form></div></div>';document.body.appendChild(modal);const whatsappModalButton=modal.querySelector('.enquiry-form .btn');if(whatsappModalButton&&!whatsappModalButton.querySelector('.whatsapp-icon'))whatsappModalButton.insertAdjacentHTML('afterbegin',whatsappIcon);const open=()=>{modal.classList.add('is-open');modal.setAttribute('aria-hidden','false');document.body.classList.add('modal-open');setTimeout(()=>modal.querySelector('input')?.focus(),120)};const close=()=>{modal.classList.remove('is-open');modal.setAttribute('aria-hidden','true');document.body.classList.remove('modal-open')};document.addEventListener('click',e=>{const trigger=e.target.closest('[data-popup="enquiry"],.cta-band .btn,.documents .btn,.actions .btn-light,.faq-cta .text-link');if(trigger){e.preventDefault();open()}if(e.target.closest('[data-close-enquiry]'))close()});document.addEventListener('keydown',e=>{if(e.key==='Escape')close()})})();

(function(){
  const nav=document.querySelector('.site-header nav');
  if(!nav || nav.querySelector('.profile-download')) return;
  const profileBtn=document.createElement('a');
  profileBtn.href='#';
  profileBtn.className='nav-cta profile-download';
  profileBtn.setAttribute('aria-label','Download Company Profile');
  profileBtn.innerHTML='Company Profile <span>↓</span>';
  nav.appendChild(profileBtn);

  let pdfPromise;
  function loadPdfLibrary(){
    if(window.jspdf?.jsPDF) return Promise.resolve(window.jspdf.jsPDF);
    if(pdfPromise) return pdfPromise;
    pdfPromise=new Promise((resolve,reject)=>{
      const s=document.createElement('script');
      s.src='https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
      s.onload=()=>window.jspdf?.jsPDF?resolve(window.jspdf.jsPDF):reject(new Error('PDF library unavailable'));
      s.onerror=reject;
      document.head.appendChild(s);
    });
    return pdfPromise;
  }

  function addHeader(doc,page,title,section){
    doc.setFillColor(23,23,20);doc.rect(0,0,210,297,'F');
    doc.setTextColor(217,164,65);doc.setFontSize(9);doc.setFont('helvetica','bold');
    doc.text('S & T ENTERPRISES',18,20);
    doc.setTextColor(255,255,255);doc.setFontSize(34);doc.setFont('helvetica','bold');
    doc.text(title,18,48);
    doc.setTextColor(170,170,165);doc.setFontSize(9);doc.setFont('helvetica','normal');
    doc.text(section,18,57);
    doc.setDrawColor(90,90,85);doc.line(18,66,192,66);
    doc.setTextColor(115,115,110);doc.setFontSize(8);doc.text('COMPANY PROFILE  |  2026',18,284);
    doc.text(String(page).padStart(2,'0'),192,284,{align:'right'});
  }
  function addText(doc,text,x,y,maxWidth,size=11,color=[55,55,50],line=7){
    doc.setTextColor(...color);doc.setFont('helvetica','normal');doc.setFontSize(size);
    const lines=doc.splitTextToSize(text,maxWidth);doc.text(lines,x,y);
    return y+lines.length*line;
  }
  function addCard(doc,x,y,w,h,label,value){
    doc.setFillColor(37,37,34);doc.roundedRect(x,y,w,h,2,2,'F');
    doc.setTextColor(217,164,65);doc.setFont('helvetica','bold');doc.setFontSize(8);doc.text(label,x+8,y+13);
    doc.setTextColor(255,255,255);doc.setFontSize(18);doc.text(value,x+8,y+30);
  }
  function buildProfile(jsPDF){
    const doc=new jsPDF({unit:'mm',format:'a4'});
    addHeader(doc,1,'Strong Foundations.','Stronger Futures.');
    doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(13);
    doc.text('CONSTRUCTION | DELHI NCR | EST. 2018',18,78);
    addText(doc,'S & T Enterprises is a construction company committed to quality workmanship, reliable project execution, and durable solutions. We focus on understanding client requirements and turning ideas into well-planned, high-quality spaces.',18,94,174,11,[210,210,205],7);
    addCard(doc,18,132,54,42,'15+','PROJECTS');
    addCard(doc,78,132,54,42,'3','ONGOING');
    addCard(doc,138,132,54,42,'14+','FOUNDER YEARS');
    doc.setTextColor(217,164,65);doc.setFont('helvetica','bold');doc.setFontSize(9);doc.text('OUR APPROACH',18,198);
    addText(doc,'Plan carefully. Build responsibly. Deliver with attention to detail.',18,214,165,22,[255,255,255],10);
    addText(doc,'Our work is guided by transparent communication, skilled workmanship, quality materials, and responsible project management.',18,250,170,10,[170,170,165],6.5);
    
    doc.addPage();addHeader(doc,2,'Capabilities & Work','Seven ways to move a project forward.');
    const services=['01  Residential Construction','02  Commercial Construction','03  Industrial Construction','04  Renovation','05  Interior Construction','06  Structural Work','07  Architectural Services'];
    let y=78;
    services.forEach((s,i)=>{doc.setTextColor(255,255,255);doc.setFont('helvetica','bold');doc.setFontSize(13);doc.text(s,18,y);doc.setDrawColor(70,70,65);doc.line(18,y+7,192,y+7);y+=24});
    doc.setTextColor(217,164,65);doc.setFontSize(9);doc.text('SELECTED PROJECTS',18,258);
    doc.setTextColor(255,255,255);doc.setFontSize(11);doc.text('G-18  |  Sector 44  |  Residential  |  Completed 2022',18,271);
    doc.text('A-129 |  Sector 92  |  Residential  |  Completed 2023',18,279);
    doc.text('A-128 |  Sector 92  |  Residential  |  Completed 2025',18,287);
    
    doc.addPage();addHeader(doc,3,'Leadership & Contact','Built on experience. Driven by accountability.');
    doc.setTextColor(217,164,65);doc.setFont('helvetica','bold');doc.setFontSize(9);doc.text('FOUNDER / DIRECTOR',18,79);
    doc.setTextColor(255,255,255);doc.setFontSize(26);doc.text('Mohd Kashif',18,94);
    doc.setFont('helvetica','normal');doc.setFontSize(11);doc.setTextColor(180,180,175);doc.text('Director, S & T Enterprises  |  M. Tech  |  14+ years experience',18,104);
    addText(doc,'S & T Enterprises was founded with a clear vision: to deliver reliable, high-quality construction while building lasting relationships with clients. What started with a vision to build better has grown into a company focused on creating strong, durable, and thoughtfully constructed spaces.',18,121,174,11,[210,210,205],7);
    doc.setTextColor(217,164,65);doc.setFont('helvetica','bold');doc.setFontSize(9);doc.text('WHY CHOOSE US',18,174);
    ['Quality You Can Trust','Reliable Project Execution','Transparent Communication','Built Around Your Vision'].forEach((v,i)=>{doc.setTextColor(255,255,255);doc.setFontSize(11);doc.text('0'+(i+1)+'  '+v,18,189+i*14)});
    doc.setTextColor(217,164,65);doc.setFontSize(9);doc.text('CONTACT',18,253);
    doc.setTextColor(255,255,255);doc.setFontSize(11);
    doc.text('+91 78360 55232',18,266);doc.text('mohd.kashif2782@gmail.com',18,274);doc.text('Shaheen Bagh, Okhla, New Delhi',18,282);
    return doc;
  }
  profileBtn.addEventListener('click',async e=>{
    e.preventDefault();
    const original=profileBtn.innerHTML;
    profileBtn.innerHTML='Preparing PDF...';
    profileBtn.setAttribute('aria-busy','true');
    try{
      const jsPDF=await loadPdfLibrary();
      const doc=buildProfile(jsPDF);
      doc.save('ST-Enterprises-Company-Profile.pdf');
    }catch(err){
      alert('The company profile could not be generated right now. Please try again.');
    }finally{
      profileBtn.innerHTML=original;
      profileBtn.removeAttribute('aria-busy');
    }
  });
})();