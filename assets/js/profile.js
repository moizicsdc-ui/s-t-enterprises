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
    const d=data[k], cover=k==='overview';
    const itemHTML=d.items?'<div class="profile-items">'+d.items.map((x,n)=>'<div class="profile-item"><span>'+String(n+1).padStart(2,'0')+'</span><div><b>'+esc(x.split(' — ')[0])+'</b>'+(x.includes(' — ')?'<small>'+esc(x.split(' — ').slice(1).join(' — '))+'</small>':'')+'</div></div>').join('')+'</div>':'';
    const textHTML=d.text?d.text.map(x=>'<p>'+esc(x)+'</p>').join(''):'';
    const stats=d.stats?'<div class="profile-stats">'+d.stats.map(x=>'<div><strong>'+esc(x[0])+'</strong><span>'+esc(x[1])+'</span></div>').join('')+'</div>':'';
    return '<section class="pdf-profile-page '+(cover?'pdf-cover':'')+'"><div class="pdf-grid"></div><div class="pdf-top"><span>S & T ENTERPRISES</span><span>COMPANY PROFILE / 2026</span></div><div class="pdf-accent"></div><div class="pdf-main"><div class="pdf-eyebrow">'+esc(d.eyebrow)+'</div><h1>'+esc(d.title)+'</h1>'+(d.intro?'<h2>'+esc(d.intro)+'</h2>':'')+'<div class="pdf-rule"></div><div class="pdf-copy">'+textHTML+'</div>'+itemHTML+stats+'</div><div class="pdf-bottom"><span>STRONG FOUNDATIONS. STRONGER FUTURES.</span><span>'+String(i+1).padStart(2,'0')+' / '+String(total).padStart(2,'0')+'</span></div></section>';
  }

  function styles(){
    const s=document.createElement('style');s.id='st-profile-pdf-styles';s.textContent=`
      .st-pdf-render{position:fixed;left:-100000px;top:0;width:794px;background:#f2efe8;z-index:-1}
      .pdf-profile-page{box-sizing:border-box;width:794px;height:1123px;padding:58px 64px 52px;background:#f2efe8;color:#171714;font-family:Arial,Helvetica,sans-serif;position:relative;overflow:hidden}
      .pdf-grid{position:absolute;right:-110px;top:90px;width:340px;height:340px;border:1px solid rgba(23,23,20,.09);transform:rotate(45deg);box-shadow:0 0 0 32px rgba(23,23,20,.025),0 0 0 64px rgba(23,23,20,.02);pointer-events:none}
      .pdf-top{display:flex;justify-content:space-between;align-items:center;font-size:9px;font-weight:700;letter-spacing:2px;color:#5f5b54}
      .pdf-accent{width:86px;height:4px;background:#d9a441;margin-top:22px}
      .pdf-main{padding-top:94px;position:relative;z-index:1}
      .pdf-eyebrow{font-size:10px;font-weight:700;letter-spacing:2.5px;color:#8b816f;margin-bottom:18px}
      .pdf-profile-page h1{font-size:51px;line-height:.98;letter-spacing:-2.2px;margin:0 0 20px;font-weight:700;max-width:650px}
      .pdf-profile-page h2{font-size:21px;line-height:1.35;margin:0 0 25px;font-weight:700;letter-spacing:-.3px;max-width:620px}
      .pdf-rule{width:100%;height:1px;background:#c9c4bb;margin:25px 0 30px}
      .pdf-copy{max-width:625px}.pdf-copy p{font-size:14px;line-height:1.72;margin:0 0 17px;color:#4f4b45}
      .profile-items{margin-top:4px}.profile-item{display:grid;grid-template-columns:54px 1fr;gap:18px;align-items:start;border-top:1px solid #c9c4bb;padding:17px 0;font-size:16px;line-height:1.35;color:#282621}
      .profile-item>span{font-size:10px;font-weight:700;letter-spacing:1.5px;color:#a07a2e;padding-top:2px}.profile-item b{font-size:17px;font-weight:700;display:block}.profile-item small{display:block;font-size:10px;line-height:1.5;color:#777168;text-transform:uppercase;letter-spacing:1px;margin-top:5px}
      .profile-stats{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:30px}.profile-stats>div{background:#211f1b;color:#f2efe8;padding:20px 18px;min-height:66px;position:relative}.profile-stats>div:after{content:'';position:absolute;right:12px;top:12px;width:7px;height:7px;background:#d9a441}.profile-stats strong{display:block;font-size:25px;line-height:1;margin-bottom:9px}.profile-stats span{display:block;font-size:8px;text-transform:uppercase;letter-spacing:1.4px;color:#c8c3ba}
      .pdf-cover{background:#171714;color:#f2efe8}.pdf-cover .pdf-top{color:#bdb7ac}.pdf-cover .pdf-accent{width:150px;height:5px}.pdf-cover .pdf-main{padding-top:285px}.pdf-cover .pdf-eyebrow{color:#d9a441}.pdf-cover h1{font-size:67px;max-width:650px}.pdf-cover h2{font-size:22px;color:#d3cec4;max-width:500px}.pdf-cover .pdf-rule{background:#514d45;width:150px}.pdf-cover .pdf-grid{right:-40px;top:250px;width:520px;height:520px;border-color:rgba(217,164,65,.22);box-shadow:0 0 0 42px rgba(217,164,65,.04),0 0 0 84px rgba(217,164,65,.025)}
      .pdf-bottom{position:absolute;left:64px;right:64px;bottom:25px;border-top:1px solid #c9c4bb;padding-top:13px;display:flex;justify-content:space-between;font-size:8px;letter-spacing:1.4px;color:#777168}.pdf-cover .pdf-bottom{border-color:#514d45;color:#999389}
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