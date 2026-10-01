(function(){
  const wrap=document.querySelector('.profile-menu');
  if(!wrap) return;
  const btn=wrap.querySelector('.profile-download');
  const panel=wrap.querySelector('.profile-panel');
  const generate=wrap.querySelector('.profile-generate');
  const close=wrap.querySelector('.profile-close');
  if(!btn||!panel||!generate) return;

  const data={
    overview:{
      eyebrow:'01 / WHO WE ARE',
      title:'Company Overview',
      intro:'Strong Foundations. Stronger Futures.',
      text:[
        'S & T Enterprises is a construction company committed to delivering quality workmanship, reliable project execution, and durable solutions. We focus on understanding your requirements and turning ideas into well-planned, high-quality spaces.',
        'Founded in 2018, S & T Enterprises serves clients across Delhi NCR.'
      ],
      stats:[['2018','Founded'],['15+','Projects Completed'],['3','Ongoing Projects'],['14+','Founder Experience']]
    },
    services:{eyebrow:'02 / WHAT WE DO',title:'Our Capabilities',items:['Residential Construction','Commercial Construction','Industrial Construction','Renovation','Interior Construction','Structural Work','Architectural Services']},
    projects:{eyebrow:'03 / SELECTED WORK',title:'Selected Projects',items:['G-18 — Sector 44 — Residential — Completed 2022','A-129 — Sector 92 — Residential — Completed 2023','A-128 — Sector 92 — Residential — Completed 2025','NFC — NFC — Residential — Ongoing']},
    process:{eyebrow:'04 / HOW WE WORK',title:'Our Process',items:['PLAN — Understand requirements, scope, priorities and project direction before work begins.','BUILD — Coordinate skilled workmanship, materials and communication through execution.','DELIVER — Focus on quality, detail and a result built for long-term value.']},
    founder:{eyebrow:'05 / LEADERSHIP',title:'Founder & Leadership',intro:'Mohd Kashif',text:['Director, S & T Enterprises. With around 14 years of experience and an M. Tech background, he founded the company with a clear vision to deliver reliable, high-quality construction while building lasting client relationships.']},
    why:{eyebrow:'06 / OUR PROMISE',title:'Why Choose S & T',items:['Quality You Can Trust','Reliable Project Execution','Transparent Communication','Built Around Your Vision']},
    contact:{eyebrow:'07 / GET IN TOUCH',title:'Contact Details',items:['+91 78360 55232','mohd.kashif2782@gmail.com','Shaheen Bagh, Okhla, New Delhi','Business Hours: 9 AM — 6 PM','Serving Delhi NCR']}
  };

  const loadScript=(src)=>new Promise((resolve,reject)=>{
    const existing=[...document.scripts].find(s=>s.src===src);
    if(existing){ if(existing.dataset.loaded==='1') return resolve(); existing.addEventListener('load',resolve,{once:true}); existing.addEventListener('error',reject,{once:true}); return; }
    const s=document.createElement('script');s.src=src;s.onload=()=>{s.dataset.loaded='1';resolve()};s.onerror=reject;document.head.appendChild(s);
  });

  const esc=s=>String(s).replace(/[&<>"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;'}[c]));
  function page(k,i,total){
    const d=data[k], itemHTML=d.items?'<div class="profile-items">'+d.items.map((x,n)=>'<div class="profile-item"><span>'+String(n+1).padStart(2,'0')+'</span><div>'+esc(x)+'</div></div>').join('')+'</div>':'';
    const textHTML=d.text?d.text.map(x=>'<p>'+esc(x)+'</p>').join(''):'';
    const stats=d.stats?'<div class="profile-stats">'+d.stats.map(x=>'<div><strong>'+esc(x[0])+'</strong><span>'+esc(x[1])+'</span></div>').join('')+'</div>':'';
    return '<section class="pdf-profile-page"><div class="pdf-top"><span>S & T ENTERPRISES</span><span>COMPANY PROFILE</span></div><div class="pdf-accent"></div><div class="pdf-main"><div class="pdf-eyebrow">'+esc(d.eyebrow)+'</div><h1>'+esc(d.title)+'</h1>'+(d.intro?'<h2>'+esc(d.intro)+'</h2>':'')+'<div class="pdf-rule"></div><div class="pdf-copy">'+textHTML+'</div>'+itemHTML+stats+'</div><div class="pdf-bottom"><span>STRONG FOUNDATIONS. STRONGER FUTURES.</span><span>'+String(i+1).padStart(2,'0')+' / '+String(total).padStart(2,'0')+'</span></div></section>';
  }

  function styles(){
    const s=document.createElement('style');s.id='st-profile-pdf-styles';s.textContent=`
      .st-pdf-render{position:fixed;left:-100000px;top:0;width:794px;background:#f2efe8;z-index:-1}
      .pdf-profile-page{box-sizing:border-box;width:794px;height:1123px;padding:58px 64px 52px;background:#f2efe8;color:#171714;font-family:Arial,Helvetica,sans-serif;position:relative;overflow:hidden}
      .pdf-top{display:flex;justify-content:space-between;align-items:center;font-size:10px;font-weight:700;letter-spacing:2px;color:#5f5b54}
      .pdf-accent{width:100%;height:3px;background:#d9a441;margin-top:22px}
      .pdf-main{padding-top:105px}
      .pdf-eyebrow{font-size:11px;font-weight:700;letter-spacing:2.4px;color:#777168;margin-bottom:18px}
      .pdf-profile-page h1{font-size:48px;line-height:1.02;letter-spacing:-1.8px;margin:0 0 18px;font-weight:700;max-width:650px}
      .pdf-profile-page h2{font-size:20px;line-height:1.35;margin:0 0 26px;font-weight:700;letter-spacing:-.3px}
      .pdf-rule{width:100%;height:1px;background:#c9c4bb;margin:26px 0 32px}
      .pdf-copy{max-width:620px}
      .pdf-copy p{font-size:15px;line-height:1.75;margin:0 0 18px;color:#4f4b45}
      .profile-items{margin-top:8px}
      .profile-item{display:grid;grid-template-columns:52px 1fr;gap:18px;align-items:start;border-top:1px solid #c9c4bb;padding:20px 0;font-size:17px;line-height:1.5;color:#282621}
      .profile-item>span{font-size:11px;font-weight:700;letter-spacing:1.5px;color:#a07a2e;padding-top:4px}
      .profile-stats{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:35px}
      .profile-stats>div{background:#211f1b;color:#f2efe8;padding:22px 20px;min-height:72px}
      .profile-stats strong{display:block;font-size:25px;line-height:1;margin-bottom:10px}
      .profile-stats span{display:block;font-size:9px;text-transform:uppercase;letter-spacing:1.5px;color:#c8c3ba}
      .pdf-bottom{position:absolute;left:64px;right:64px;bottom:25px;border-top:1px solid #c9c4bb;padding-top:13px;display:flex;justify-content:space-between;font-size:8px;letter-spacing:1.4px;color:#777168}
    `;document.head.appendChild(s);return s;
  }

  let styleEl;
  async function generatePDF(){
    const keys=[...panel.querySelectorAll('input:checked')].map(x=>x.value);
    if(!keys.length){alert('Please select at least one section.');return}
    generate.disabled=true;generate.innerHTML='Creating PDF...';
    let host;
    try{
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/html2canvas/1.4.1/html2canvas.min.js');
      await loadScript('https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js');
      styleEl=styles();
      host=document.createElement('div');host.className='st-pdf-render';
      document.body.appendChild(host);
      const {jsPDF}=window.jspdf;
      const pdf=new jsPDF({orientation:'portrait',unit:'mm',format:'a4',compress:true});
      const pageW=210,pageH=297;
      for(let i=0;i<keys.length;i++){
        host.innerHTML=page(keys[i],i,keys.length);
        await new Promise(r=>requestAnimationFrame(()=>requestAnimationFrame(r)));
        const canvas=await html2canvas(host.firstElementChild,{scale:2,useCORS:true,backgroundColor:'#f2efe8',logging:false});
        const img=canvas.toDataURL('image/jpeg',0.96);
        if(i) pdf.addPage();
        pdf.addImage(img,'JPEG',0,0,pageW,pageH,undefined,'FAST');
      }
      pdf.save('ST-Enterprises-Company-Profile.pdf');
      closePanel();
    }catch(err){
      console.error('Company profile PDF error:',err);
      alert('PDF could not be generated. Please try again.');
    }finally{
      host?.remove();styleEl?.remove();styleEl=null;generate.disabled=false;generate.innerHTML='Generate PDF <span>↓</span>';
    }
  }

  const closePanel=()=>{panel.classList.remove('is-open');panel.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false')};
  btn.onclick=e=>{e.preventDefault();e.stopPropagation();const open=!panel.classList.contains('is-open');panel.classList.toggle('is-open',open);panel.setAttribute('aria-hidden',String(!open));btn.setAttribute('aria-expanded',String(open))};
  close?.addEventListener('click',closePanel);
  panel.addEventListener('click',e=>e.stopPropagation());
  generate.onclick=generatePDF;
  document.addEventListener('click',e=>{if(!wrap.contains(e.target))closePanel()});
  document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});
})();