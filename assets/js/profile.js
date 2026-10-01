(function(){
  const wrap=document.querySelector('.profile-menu');
  if(!wrap) return;
  const btn=wrap.querySelector('.profile-download');
  const panel=wrap.querySelector('.profile-panel');
  const generate=wrap.querySelector('.profile-generate');
  const close=wrap.querySelector('.profile-close');
  if(!btn||!panel||!generate) return;

  const sections={
    overview:['Company Overview','01 / WHO WE ARE','S & T Enterprises is a construction company committed to delivering quality workmanship, reliable project execution, and durable solutions. We focus on understanding your requirements and turning ideas into well-planned, high-quality spaces.','Founded in 2018, S & T Enterprises serves clients across Delhi NCR.'],
    services:['Our Capabilities','02 / WHAT WE DO',null,['Residential Construction','Commercial Construction','Industrial Construction','Renovation','Interior Construction','Structural Work','Architectural Services']],
    projects:['Selected Projects','03 / SELECTED WORK',null,['G-18 - Sector 44 - Residential - Completed 2022','A-129 - Sector 92 - Residential - Completed 2023','A-128 - Sector 92 - Residential - Completed 2025','NFC - NFC - Residential - Ongoing']],
    process:['Our Process','04 / HOW WE WORK',null,['PLAN - Understand requirements, scope, priorities and project direction before work begins.','BUILD - Coordinate skilled workmanship, materials and communication through execution.','DELIVER - Focus on quality, detail and a result built for long-term value.']],
    founder:['Founder & Leadership','05 / LEADERSHIP','Mohd Kashif is the Director of S & T Enterprises. With around 14 years of experience and an M. Tech background, he founded the company with a clear vision to deliver reliable, high-quality construction while building lasting client relationships.'],
    why:['Why Choose S & T','06 / OUR PROMISE',null,['Quality You Can Trust','Reliable Project Execution','Transparent Communication','Built Around Your Vision']],
    contact:['Contact Details','07 / GET IN TOUCH',null,['+91 78360 55232','mohd.kashif2782@gmail.com','Shaheen Bagh, Okhla, New Delhi','Business Hours: 9 AM - 6 PM','Serving Delhi NCR']]
  };
  const clean=s=>String(s).replace(/[–—]/g,'-').replace(/[’‘]/g,"'").replace(/[“”]/g,'"').replace(/[^\x09\x0A\x0D\x20-\x7E]/g,'');
  const esc=s=>clean(s).replace(/\\/g,'\\\\').replace(/\(/g,'\\(').replace(/\)/g,'\\)');
  const lines=(s,n)=>{const a=clean(s).split(/\s+/),o=[];let l='';a.forEach(w=>{if((l+' '+w).trim().length>n&&l){o.push(l);l=w}else l=(l+' '+w).trim()});if(l)o.push(l);return o};
  const txt=(s,x,y,z,b)=>'BT /'+(b?'F2':'F1')+' '+z+' Tf '+x+' '+y+' Td ('+esc(s)+') Tj ET';
  const multi=(a,x,y,z,lead,b)=>'BT /'+(b?'F2':'F1')+' '+z+' Tf '+x+' '+y+' Td '+a.map((v,i)=>(i?'0 -'+lead+' Td ':'')+'('+esc(v)+') Tj').join(' ')+' ET';
  function stream(no,key){
    const s=sections[key],o=['q 0.09 0.09 0.08 rg 0 0 595 842 re f Q','q 0.85 0.64 0.18 rg 54 790 487 2 re f Q',txt('S & T ENTERPRISES',54,805,10,true),txt(s[0],54,720,30,true),txt(s[1],54,697,10,false),'q 0.28 0.28 0.26 RG 54 681 m 541 681 l S Q'];let y=625;
    if(s[2]){o.push(txt(key==='overview'?'Strong Foundations. Stronger Futures.':'Director, S & T Enterprises',54,y,16,true));y-=34;const a=lines(s[2],78);o.push(multi(a,54,y,12,18,false));y-=a.length*18+24;if(s[3]){const b=lines(s[3],78);o.push(multi(b,54,y,11,17,false));y-=b.length*17+35}if(key==='overview'){[['2018','FOUNDED'],['15+','PROJECTS COMPLETED'],['3','ONGOING PROJECTS'],['14+','FOUNDER EXPERIENCE']].forEach((v,i)=>{const x=54+(i%2)*248,yy=y-Math.floor(i/2)*90;o.push('q 0.15 0.15 0.14 rg '+x+' '+(yy-48)+' 225 64 re f Q',txt(v[0],x+16,yy,20,true),txt(v[1],x+16,yy-22,8,false))})}}else{(s[3]||[]).forEach((v,i)=>{const yy=y-i*78;o.push('q 0.15 0.15 0.14 rg 54 '+(yy-42)+' 487 56 re f Q',txt(String(i+1).padStart(2,'0'),70,yy-8,10,true));const a=lines(v,key==='process'?62:48);o.push(multi(a,112,yy-3,key==='process'?11:14,key==='process'?16:19,false))})}
    o.push(txt('COMPANY PROFILE  |  S & T ENTERPRISES',54,40,8,false),txt(String(no).padStart(2,'0'),525,40,8,false));return o.join('\n');
  }
  function pdf(keys){
    const o=[],add=x=>(o.push(x),o.length),f1=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>'),f2=add('<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica-Bold >>'),kids=[],contents=[];
    keys.forEach((k,i)=>{const st=stream(i+1,k);contents.push(add('<< /Length '+st.length+' >>\nstream\n'+st+'\nendstream'));kids.push(add(''))});
    const pages=add(''),catalog=add('');
    kids.forEach((id,i)=>o[id-1]='<< /Type /Page /Parent '+pages+' 0 R /MediaBox [0 0 595 842] /Resources << /Font << /F1 '+f1+' 0 R /F2 '+f2+' 0 R >> >> /Contents '+contents[i]+' 0 R >>');
    o[pages-1]='<< /Type /Pages /Kids ['+kids.map(x=>x+' 0 R').join(' ')+'] /Count '+kids.length+' >>';o[catalog-1]='<< /Type /Catalog /Pages '+pages+' 0 R >>';
    let out='%PDF-1.4\n%PDFPROFILE\n',off=[0];o.forEach((x,i)=>{off.push(out.length);out+=(i+1)+' 0 obj\n'+x+'\nendobj\n'});const xr=out.length;out+='xref\n0 '+(o.length+1)+'\n0000000000 65535 f \n';for(let i=1;i<off.length;i++)out+=String(off[i]).padStart(10,'0')+' 00000 n \n';return new Blob([out+'trailer\n<< /Size '+(o.length+1)+' /Root '+catalog+' 0 R >>\nstartxref\n'+xr+'\n%%EOF'],{type:'application/pdf'});
  }
  const closePanel=()=>{panel.classList.remove('is-open');panel.setAttribute('aria-hidden','true');btn.setAttribute('aria-expanded','false')};
  btn.onclick=e=>{e.preventDefault();e.stopPropagation();const open=!panel.classList.contains('is-open');panel.classList.toggle('is-open',open);panel.setAttribute('aria-hidden',String(!open));btn.setAttribute('aria-expanded',String(open))};
  close?.addEventListener('click',closePanel);
  panel.addEventListener('click',e=>e.stopPropagation());
  generate.onclick=()=>{const keys=[...panel.querySelectorAll('input:checked')].map(x=>x.value);if(!keys.length){alert('Please select at least one section.');return}generate.disabled=true;generate.textContent='Creating PDF...';try{const blob=pdf(keys),u=URL.createObjectURL(blob),a=document.createElement('a');a.href=u;a.download='ST-Enterprises-Company-Profile.pdf';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1500);closePanel()}catch(err){console.error(err);alert('PDF could not be generated. Please try again.')}finally{generate.disabled=false;generate.innerHTML='Generate PDF <span>↓</span>'}};
  document.addEventListener('click',e=>{if(!wrap.contains(e.target))closePanel()});document.addEventListener('keydown',e=>{if(e.key==='Escape')closePanel()});
})();