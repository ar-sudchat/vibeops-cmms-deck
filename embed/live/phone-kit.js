/* สร้างจาก mobile-ux-mockup.html ด้วย parts/live_phone_kit.py — ห้ามแก้มือ */
const PK_SPRITE="<svg width=\"0\" height=\"0\" style=\"position:absolute\" aria-hidden=\"true\">\n  <symbol id=\"i-home\" viewBox=\"0 0 24 24\"><path d=\"M3 10.5 12 3l9 7.5V20a1 1 0 0 1-1 1h-5v-6H9v6H4a1 1 0 0 1-1-1z\"/></symbol>\n  <symbol id=\"i-wrench\" viewBox=\"0 0 24 24\"><path d=\"M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.8-3.8a6 6 0 0 1-7.9 7.9l-6.9 6.9a2.1 2.1 0 0 1-3-3l6.9-6.9a6 6 0 0 1 7.9-7.9z\"/></symbol>\n  <symbol id=\"i-scan\" viewBox=\"0 0 24 24\"><path d=\"M3 7V5a2 2 0 0 1 2-2h2M17 3h2a2 2 0 0 1 2 2v2M21 17v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M7.5 8v8M11 8v8M14 8v8M16.5 8v8\"/></symbol>\n  <symbol id=\"i-qr\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"14\" y=\"3\" width=\"7\" height=\"7\" rx=\"1\"/><rect x=\"3\" y=\"14\" width=\"7\" height=\"7\" rx=\"1\"/><path d=\"M14 14h3v3h-3zM20 14v.01M14 20.5h3M20 17.5V21\"/></symbol>\n  <symbol id=\"i-clip\" viewBox=\"0 0 24 24\"><path d=\"M9 3h6a1 1 0 0 1 1 1v2H8V4a1 1 0 0 1 1-1zM8 5H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7a2 2 0 0 0-2-2h-2M8.5 13.5l2.5 2.5 4.5-5\"/></symbol>\n  <symbol id=\"i-user\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"8\" r=\"4\"/><path d=\"M4 21a8 8 0 0 1 16 0\"/></symbol>\n  <symbol id=\"i-users\" viewBox=\"0 0 24 24\"><circle cx=\"9\" cy=\"8\" r=\"3.5\"/><path d=\"M2.5 20a6.5 6.5 0 0 1 13 0M16 4.6a3.5 3.5 0 0 1 0 6.8M18 14.5a6.5 6.5 0 0 1 3.5 5.5\"/></symbol>\n  <symbol id=\"i-box\" viewBox=\"0 0 24 24\"><path d=\"M21 8 12 3 3 8v8l9 5 9-5zM3 8l9 5 9-5M12 13v8\"/></symbol>\n  <symbol id=\"i-layers\" viewBox=\"0 0 24 24\"><path d=\"M12 3 2 8l10 5 10-5zM2 13l10 5 10-5M2 17.5l10 5 10-5\"/></symbol>\n  <symbol id=\"i-inbox\" viewBox=\"0 0 24 24\"><path d=\"M3 13h5l1.5 3h5L16 13h5M5.5 5h13L21 13v6a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-6z\"/></symbol>\n  <symbol id=\"i-pin\" viewBox=\"0 0 24 24\"><path d=\"M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21z\"/><circle cx=\"12\" cy=\"9.5\" r=\"2.5\"/></symbol>\n  <symbol id=\"i-clock\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M12 7v5l3.5 2\"/></symbol>\n  <symbol id=\"i-camera\" viewBox=\"0 0 24 24\"><path d=\"M4 8h3l2-3h6l2 3h3a1 1 0 0 1 1 1v10a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9a1 1 0 0 1 1-1z\"/><circle cx=\"12\" cy=\"13.5\" r=\"3.5\"/></symbol>\n  <symbol id=\"i-video\" viewBox=\"0 0 24 24\"><rect x=\"2.5\" y=\"6\" width=\"13\" height=\"12\" rx=\"2\"/><path d=\"m15.5 10.5 6-3.5v10l-6-3.5\"/></symbol>\n  <symbol id=\"i-mic\" viewBox=\"0 0 24 24\"><rect x=\"9\" y=\"3\" width=\"6\" height=\"11\" rx=\"3\"/><path d=\"M5 11a7 7 0 0 0 14 0M12 18v3\"/></symbol>\n  <symbol id=\"i-check\" viewBox=\"0 0 24 24\"><path d=\"M5 12.5 10 17.5 19.5 7\"/></symbol>\n  <symbol id=\"i-x\" viewBox=\"0 0 24 24\"><path d=\"M6 6l12 12M18 6 6 18\"/></symbol>\n  <symbol id=\"i-chev\" viewBox=\"0 0 24 24\"><path d=\"m9 6 6 6-6 6\"/></symbol>\n  <symbol id=\"i-chevl\" viewBox=\"0 0 24 24\"><path d=\"m15 6-6 6 6 6\"/></symbol>\n  <symbol id=\"i-back\" viewBox=\"0 0 24 24\"><path d=\"M19 12H5M11 6l-6 6 6 6\"/></symbol>\n  <symbol id=\"i-bell\" viewBox=\"0 0 24 24\"><path d=\"M6 16v-5a6 6 0 0 1 12 0v5l2 2H4zM10 21h4\"/></symbol>\n  <symbol id=\"i-cloud\" viewBox=\"0 0 24 24\"><path d=\"M7 19a4.5 4.5 0 1 1 .9-8.9A6 6 0 0 1 19 11a4 4 0 0 1-1 8z\"/></symbol>\n  <symbol id=\"i-cloudok\" viewBox=\"0 0 24 24\"><path d=\"M7 19a4.5 4.5 0 1 1 .9-8.9A6 6 0 0 1 19 11a4 4 0 0 1-1 8zM9.5 14.5l2 2 3.5-3.5\"/></symbol>\n  <symbol id=\"i-wifioff\" viewBox=\"0 0 24 24\"><path d=\"M3 3l18 18M8.5 16.5a5 5 0 0 1 6-.8M5 12.8a10 10 0 0 1 4-2.4M19 12.8a10 10 0 0 0-2.6-1.8M2 9a15 15 0 0 1 4.3-2.7M22 9a15 15 0 0 0-11.3-3.8M12 20h.01\"/></symbol>\n  <symbol id=\"i-bulb\" viewBox=\"0 0 24 24\"><path d=\"M9 18h6M10 21h4M12 3a6 6 0 0 0-3.6 10.8c.7.6 1.1 1.3 1.1 2.2h5c0-.9.4-1.6 1.1-2.2A6 6 0 0 0 12 3z\"/></symbol>\n  <symbol id=\"i-factory\" viewBox=\"0 0 24 24\"><path d=\"M3 21V10l5 3v-3l5 3v-3l5 3V4h3v17zM7 17h2M12 17h2M17 17h2\"/></symbol>\n  <symbol id=\"i-fan\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"2\"/><path d=\"M12 10c0-4 1-7 4-7 2.2 0 2 3-1 5.5M14 12c4 0 7 1 7 4 0 2.2-3 2-5.5-1M12 14c0 4-1 7-4 7-2.2 0-2-3 1-5.5M10 12c-4 0-7-1-7-4 0-2.2 3-2 5.5 1\"/></symbol>\n  <symbol id=\"i-building\" viewBox=\"0 0 24 24\"><path d=\"M4 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16M16 9h3a1 1 0 0 1 1 1v11M2 21h20M8 7h4M8 11h4M8 15h4\"/></symbol>\n  <symbol id=\"i-parking\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"3\" width=\"18\" height=\"18\" rx=\"3\"/><path d=\"M10 17V7h3a3 3 0 0 1 0 6h-3\"/></symbol>\n  <symbol id=\"i-forklift\" viewBox=\"0 0 24 24\"><path d=\"M3 17V9h6l3 5v3M12 17h3M18 3v15h4\"/><circle cx=\"5.5\" cy=\"18.5\" r=\"2\"/><circle cx=\"12\" cy=\"18.5\" r=\"2\"/></symbol>\n  <symbol id=\"i-help\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"M9.5 9.5a2.5 2.5 0 1 1 3.5 2.3c-.6.3-1 .9-1 1.6v.6M12 17h.01\"/></symbol>\n  <symbol id=\"i-alert\" viewBox=\"0 0 24 24\"><path d=\"M12 3.5 2.5 20h19zM12 10v4.5M12 17.2h.01\"/></symbol>\n  <symbol id=\"i-play\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14l11-7z\"/></symbol>\n  <symbol id=\"i-pause\" viewBox=\"0 0 24 24\"><path d=\"M8 5v14M16 5v14\"/></symbol>\n  <symbol id=\"i-pen\" viewBox=\"0 0 24 24\"><path d=\"M4 20h4L19 9l-4-4L4 16zM14 6l4 4\"/></symbol>\n  <symbol id=\"i-gauge\" viewBox=\"0 0 24 24\"><path d=\"M3.5 18a9 9 0 1 1 17 0zM12 14l4-4\"/></symbol>\n  <symbol id=\"i-search\" viewBox=\"0 0 24 24\"><circle cx=\"11\" cy=\"11\" r=\"7\"/><path d=\"m20 20-4-4\"/></symbol>\n  <symbol id=\"i-phone\" viewBox=\"0 0 24 24\"><path d=\"M5 3h3l2 5-2.5 1.5a11 11 0 0 0 7 7L16 14l5 2v3a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-2z\"/></symbol>\n  <symbol id=\"i-merge\" viewBox=\"0 0 24 24\"><circle cx=\"6\" cy=\"5\" r=\"2\"/><circle cx=\"6\" cy=\"19\" r=\"2\"/><circle cx=\"18\" cy=\"12\" r=\"2\"/><path d=\"M6 7v10M6 7c0 3 4 5 10 5\"/></symbol>\n  <symbol id=\"i-undo\" viewBox=\"0 0 24 24\"><path d=\"M9 14 4 9l5-5M4 9h11a5 5 0 0 1 0 10h-3\"/></symbol>\n  <symbol id=\"i-ban\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"12\" r=\"9\"/><path d=\"m5.7 5.7 12.6 12.6\"/></symbol>\n  <symbol id=\"i-star\" viewBox=\"0 0 24 24\"><path d=\"m12 3 2.8 5.8 6.2.9-4.5 4.4 1.1 6.2L12 17.4l-5.6 2.9 1.1-6.2L3 9.7l6.2-.9z\"/></symbol>\n  <symbol id=\"i-send\" viewBox=\"0 0 24 24\"><path d=\"M21 3 10 14M21 3l-6.5 18-4.5-7-7-4.5z\"/></symbol>\n  <symbol id=\"i-history\" viewBox=\"0 0 24 24\"><path d=\"M3 12a9 9 0 1 0 3-6.7L3 8M3 3v5h5M12 7v5l3 2\"/></symbol>\n  <symbol id=\"i-plus\" viewBox=\"0 0 24 24\"><path d=\"M12 5v14M5 12h14\"/></symbol>\n  <symbol id=\"i-timer\" viewBox=\"0 0 24 24\"><circle cx=\"12\" cy=\"13\" r=\"8\"/><path d=\"M12 9v4l2.5 1.5M10 2h4\"/></symbol>\n  <symbol id=\"i-calendar\" viewBox=\"0 0 24 24\"><rect x=\"3\" y=\"5\" width=\"18\" height=\"16\" rx=\"2\"/><path d=\"M8 3v4M16 3v4M3 10h18\"/></symbol>\n  <symbol id=\"i-hand\" viewBox=\"0 0 24 24\"><path d=\"M12 3v9M12 3a1.5 1.5 0 0 1 3 0v9M15 5a1.5 1.5 0 0 1 3 0v8a7 7 0 0 1-7 7h-.5a7 7 0 0 1-5.6-2.8L2.5 14a1.6 1.6 0 0 1 2.4-2l2.1 2V6a1.5 1.5 0 0 1 3 0v6M9 4.5a1.5 1.5 0 0 1 3 0\"/></symbol>\n  <symbol id=\"i-sig\" viewBox=\"0 0 24 24\"><path d=\"M3 21h18M5 17c2-6 3-11 5-11s0 9 2 9 2-4 3-4 1 2 2 2 2-1 3-1\"/></symbol>\n  <!-- ภาพแทนรูปถ่าย -->\n  <symbol id=\"p-pump\" viewBox=\"0 0 100 80\"><rect x=\"18\" y=\"26\" width=\"44\" height=\"30\" rx=\"4\"/><circle cx=\"74\" cy=\"41\" r=\"13\"/><path d=\"M62 41h-0M40 26V14h22M8 56h84M28 56v10M56 56v10M30 36h20M30 44h20\"/><path d=\"M72 62c0 4 3 6 3 9\" stroke-dasharray=\"2 4\"/></symbol>\n  <symbol id=\"p-gauge\" viewBox=\"0 0 100 80\"><circle cx=\"50\" cy=\"40\" r=\"30\"/><path d=\"M50 40l16-14M30 54h40M28 40h4M68 40h4M50 16v4M34 24l3 3M66 24l-3 3\"/></symbol>\n  <symbol id=\"p-seal\" viewBox=\"0 0 100 80\"><circle cx=\"50\" cy=\"40\" r=\"26\"/><circle cx=\"50\" cy=\"40\" r=\"16\"/><path d=\"M10 40h14M76 40h14\"/></symbol>\n  <symbol id=\"p-wheel\" viewBox=\"0 0 100 80\"><circle cx=\"40\" cy=\"44\" r=\"22\"/><circle cx=\"40\" cy=\"44\" r=\"8\"/><path d=\"M62 44h26M80 20v48\"/></symbol>\n</svg>";
const I=(n,c='')=>`<svg class="ic ${c}" aria-hidden="true"><use href="#i-${n}"/></svg>`;
const PHOTO={pump:'oil-leak',seal:'oil-leak',gauge:'oil-leak'};
const P=(n,wm,cls='',tag='')=>{const f=/cool/.test(cls)?'oil-leak-fixed':(PHOTO[n]||'oil-leak');const pos=/warm/.test(cls)?'70% 60%':(n==='seal'?'30% 40%':'50% 50%');return `<div class="ph photo ${cls}"><img src="img/${f}.jpg" alt="" style="object-position:${pos}">${tag?`<span class="tag">${tag}</span>`:''}<span class="wm">${wm}</span></div>`};
const chip=(t,k)=>`<span class="chip ${k}">${t}</span>`;
const go=id=>`data-go="${id}"`;
const wave=(n=34,played=10)=>{let s='';for(let i=0;i<n;i++){const h=20+Math.round(70*Math.abs(Math.sin(i*1.7)*Math.cos(i*.45)));s+=`<i class="${i<played?'p':''}" style="height:${h}%"></i>`;}return `<div class="wave">${s}</div>`};
const voice=(len,who='')=>`<div class="voice"><button class="pl" aria-label="เล่นเสียง">${I('play')}</button>${wave()}<small>${len}${who}</small></div>`;
const meta=a=>`<div class="meta">${a.map(([i,t,c=''])=>`<span class="${c}">${I(i)}${t}</span>`).join('')}</div>`;
const row=o=>`<div class="row ${o.sel?'sel':''}" ${o.go?go(o.go)+' role="button" tabindex="0"':''}><span class="no">${o.no}</span><span class="rb">${o.chips?`<span class="chips">${o.chips}</span>`:''}<span class="rt">${o.t}</span>${o.s?`<span class="rs">${o.s}</span>`:''}${o.m?meta(o.m):''}${o.x||''}</span>${o.right??`<span class="chev">${I('chev')}</span>`}</div>`;
const opt=(t,s,on,ic='',cb=false,g='')=>`<button class="opt ${cb?'cb':''}" aria-pressed="${on}" ${g}><span class="rd"></span>${ic?`<span style="color:var(--primary-strong)">${I(ic)}</span>`:''}<span class="tx"><b>${t}</b>${s?`<small>${s}</small>`:''}</span></button>`;

const TABS={
 opr:[['home','หน้าแรก'],['wrench','แจ้งซ่อม'],['scan','สแกน'],['clip','คำขอของฉัน',2],['user','ฉัน']],
 tec:[['clip','งานของฉัน',4],['box','อะไหล่'],['scan','สแกน'],['wrench','แจ้งซ่อม'],['user','ฉัน']],
 sup:[['home','หน้าแรก'],['inbox','คัดกรอง',4],['scan','สแกน'],['clip','ใบงาน'],['user','ฉัน']],
 sto:[['home','คิวจ่าย',3],['box','จ่ายของ'],['scan','สแกน'],['layers','สต็อก'],['user','ฉัน']]};
const sbIcons=`<span class="sbi"><svg viewBox="0 0 18 12"><rect x="0" y="8" width="3" height="4" rx="1"/><rect x="5" y="5.5" width="3" height="6.5" rx="1"/><rect x="10" y="3" width="3" height="9" rx="1"/><rect x="15" y="0" width="3" height="12" rx="1"/></svg><svg viewBox="0 0 26 12"><rect x=".5" y=".5" width="22" height="11" rx="3" fill="none" stroke="#fff" opacity=".6"/><rect x="2.5" y="2.5" width="15" height="7" rx="1.5"/><rect x="23.5" y="4" width="2" height="4" rx="1" opacity=".6"/></svg></span>`;
const SYNC={mini:`<span class="sync" title="ส่งครบแล้ว" aria-label="ส่งครบแล้ว" style="padding:0 10px">${I('cloudok','s')}</span>`,ok:`<span class="sync">${I('cloudok','s')}ส่งครบแล้ว</span>`,off:`<button class="sync off" ${go('c2')}>${I('cloud','s')}รอส่ง 2</button>`};
const bell=n=>`<button class="bell" aria-label="แจ้งเตือน ${n} รายการ" ${go('c1')}>${I('bell')}${n?`<em>${n}</em>`:''}</button>`;

function phone(o){
  const tabs=(TABS[o.role]||[]).map(([ic,t,b],i)=>`<button class="tab ${i===o.tab?'on':''} ${ic==='scan'?'scan':''}">${I(ic)}${b?`<em>${b}</em>`:''}<span>${t}</span></button>`).join('');
  const right=o.right===undefined?(o.back?SYNC.mini:SYNC.ok):o.right;
  return `<div class="shot" id="${o.id}"><div class="cap"><span class="capn">${o.n}</span><span class="capt">${o.cap}</span><span class="capd">${o.note}</span></div>
  <div class="phone"><div class="screen">
   <div class="hd"><div class="sb"><span>09:41</span>${sbIcons}</div><i class="island"></i>
    <div class="ab ${o.back?'':'nob'}">${o.back?`<button class="bk" aria-label="ย้อนกลับ" ${go(o.back)}>${I('back')}</button>`:''}<div class="abt"><b>${o.title}</b><small>${o.sub}</small></div>${right}</div>
    ${o.prog?`<div class="prog"><i style="width:${o.prog}%"></i></div>`:''}</div>
   ${o.banner||''}
   <div class="main">${o.body}</div>
   ${o.act?`<div class="act">${o.act}</div>`:''}
   <div class="tabs">${tabs}<i class="homeind"></i></div>
  </div></div></div>`;
}
const OFF=`<div class="offbar">${I('wifioff','s')}<span><b>ไม่มีสัญญาณ</b> · ทำงานต่อได้</span><button ${go('c2')}>รอส่ง 2 รายการ</button></div>`;
const LOC='อาคาร A ฉีดพลาสติก › โซนฉีด 1 › ไลน์ 2';
const IMM='IMM-06 เครื่องฉีดพลาสติก 650 ตัน';

const F=[
/* ================= ผู้แจ้ง ================= */
{role:'opr',id:'r1',n:1,cap:'หน้าแรกผู้แจ้ง',note:'ปุ่มแจ้งซ่อมใหญ่อยู่ล่างจอในระยะนิ้วโป้ง ด้านบนเหลือแค่เรื่องที่ยังไม่จบ',
 title:'สวัสดี คุณสุภาพร',sub:'ฝ่ายผลิต · อาคาร A ฉีดพลาสติก',right:bell(1),tab:0,
 body:`<p class="sum">เรื่องที่ฉันแจ้ง ยังไม่จบ <b>2 เรื่อง</b></p>
 <div class="list">
 ${row({no:1,chips:chip('กำลังซ่อม','info'),t:'IMM-06 เครื่องฉีดพลาสติก',s:'เสียงดังที่ชุดปั๊ม น้ำมันซึม',m:[['user','อนุชา กำลังซ่อม'],['clock','แจ้ง 08:12']],go:'r7'})}
 ${row({no:2,chips:chip('รอคัดกรอง','pend'),t:'หลอดไฟดับ 2 ดวง',s:'โซนบรรจุ › จุด 3',m:[['clock','แจ้ง 07:40']]})}
 </div>
 <button class="link" style="align-self:flex-start">ดูเรื่องที่แจ้งทั้งหมด 14 เรื่อง ${I('chev','s')}</button>
 <div class="thumb">
  <button class="hero-btn" ${go('r2')}><span class="hi">${I('wrench')}</span><span><b>แจ้งซ่อม</b><small>เครื่องเสีย ไฟดับ หรือของชำรุด</small></span></button>
  <button class="btn big wide" ${go('r2')}>${I('qr')}สแกน QR ที่เครื่องหรือที่จุด</button>
 </div>`},

{role:'opr',id:'r2',n:2,cap:'ที่ไหน',note:'สแกน QR ได้เครื่องทันที หรือค้นหา หรือไล่ตามที่ตั้งทีละชั้น ไม่มีรายการเครื่องยาวๆ',
 title:'แจ้งซ่อม',sub:'ขั้น 1 จาก 5 · ที่ไหน',back:'r1',prog:20,tab:1,
 body:`<h2 class="q">เกิดที่ไหน</h2>
 <button class="btn big wide soft" ${go('r3')}>${I('qr')}สแกน QR ที่เครื่องหรือที่จุด</button>
 <div class="inp">${I('search')}ค้นหา: รหัสเครื่อง ชื่อเครื่อง ชื่อจุด</div>
 <p class="lbl">หรือเลือกตามที่ตั้ง</p>
 <div class="trail">
  <button><span class="dot">${I('check','s')}</span><span><span class="k">อาคาร</span><span class="v">อาคาร A ฉีดพลาสติก</span></span><span class="ch">เปลี่ยน</span></button>
  <button><span class="dot">${I('check','s')}</span><span><span class="k">โซน</span><span class="v">โซนฉีด 1</span></span><span class="ch">เปลี่ยน</span></button>
 </div>
 <p class="lbl">เลือกจุด ในโซนฉีด 1</p>
 <div class="list">
  ${row({no:1,t:'ไลน์ 1',m:[['factory','เครื่อง 4']]})}
  ${row({no:2,t:'ไลน์ 2',m:[['factory','เครื่อง 3'],['bulb','อุปกรณ์อาคาร 6']],sel:true,go:'r3',right:`<span class="chev" style="color:var(--primary)">${I('check')}</span>`})}
  ${row({no:3,t:'ไลน์ 3',m:[['factory','เครื่อง 3']]})}
  ${row({no:4,t:'ทางเดินและพื้นที่ส่วนกลาง',m:[['bulb','อุปกรณ์อาคาร 12']]})}
 </div>`,
 act:`<button class="btn sec" ${go('r1')}>ยกเลิก</button><button class="btn pri" ${go('r3')}>ถัดไป: อะไรเสีย</button>`},

{role:'opr',id:'r3',n:3,cap:'อะไรเสีย',note:'เลือกประเภทก่อน แล้วเหลือเฉพาะของในจุดนั้น · หลอดไฟ ที่จอดรถ แจ้งได้โดยไม่ต้องมีทะเบียนเครื่อง',
 title:'แจ้งซ่อม',sub:'ขั้น 2 จาก 5 · อะไรเสีย',back:'r2',prog:40,tab:1,
 body:`<div class="loc">${I('pin','s')}<span>อาคาร A › โซนฉีด 1 › ไลน์ 2</span><a href="#" ${go('r2')}>เปลี่ยน</a></div>
 <h2 class="q">อะไรเสีย</h2>
 <div class="tiles" data-pick>
  <button class="tile" aria-pressed="true"><span class="ti">${I('factory')}</span><span><b>เครื่องจักรผลิต</b><small>ในจุดนี้ 3 เครื่อง</small></span></button>
  <button class="tile" aria-pressed="false"><span class="ti">${I('fan')}</span><span><b>อุปกรณ์ระบบ</b><small>ปั๊ม แอร์ ตู้ไฟ</small></span></button>
  <button class="tile" aria-pressed="false"><span class="ti">${I('bulb')}</span><span><b>ไฟแสงสว่าง</b><small>หลอด โคม</small></span></button>
  <button class="tile" aria-pressed="false"><span class="ti">${I('building')}</span><span><b>อาคาร</b><small>ประตู พื้น ห้องน้ำ</small></span></button>
  <button class="tile" aria-pressed="false"><span class="ti">${I('parking')}</span><span><b>พื้นที่ภายนอก</b><small>ที่จอดรถ ถนน รั้ว</small></span></button>
  <button class="tile" aria-pressed="false"><span class="ti">${I('forklift')}</span><span><b>รถยก ยานพาหนะ</b><small>forklift</small></span></button>
  <button class="tile full" aria-pressed="false"><span class="ti">${I('camera')}</span><span><b>ไม่รู้ชื่อ ถ่ายรูปแทน</b></span></button>
 </div>
 <p class="lbl">เครื่องจักรผลิต ที่ไลน์ 2</p>
 <div class="list">
  ${row({no:1,t:'IMM-05 เครื่องฉีดพลาสติก 650 ตัน'})}
  ${row({no:2,t:IMM,sel:true,go:'r4',right:`<span class="chev" style="color:var(--primary)">${I('check')}</span>`})}
  ${row({no:3,t:'IMM-07 เครื่องฉีดพลาสติก 650 ตัน',m:[['alert','มีเรื่องค้าง 1 เรื่อง · ดูก่อนแจ้งซ้ำ','warn']]})}
 </div>`,
 act:`<button class="btn sec" ${go('r2')}>ย้อน</button><button class="btn pri" ${go('r4')}>ถัดไป: อาการ</button>`},

{role:'opr',id:'r4',n:4,cap:'อาการ รูป คลิป เสียง',note:'อาการเปลี่ยนตามประเภทของที่เสีย · รูปมีลายน้ำเวลาและจุดให้เอง · พูดอธิบายแทนพิมพ์ได้',
 title:'แจ้งซ่อม',sub:'ขั้น 3 จาก 5 · เกิดอะไรขึ้น',back:'r3',prog:60,tab:1,
 body:`<h2 class="q">เกิดอะไรขึ้นกับ IMM-06</h2>
 <div class="picks" data-multi>
  <button class="pk" aria-pressed="true">เสียงดังผิดปกติ</button><button class="pk" aria-pressed="true">รั่ว ซึม</button>
  <button class="pk" aria-pressed="false">ร้อนเกิน</button><button class="pk" aria-pressed="false">สั่น</button>
  <button class="pk" aria-pressed="false">ไม่ทำงาน</button><button class="pk" aria-pressed="false">ชิ้นงานเสีย</button>
  <button class="pk" aria-pressed="false">ไฟฟ้า ไฟช็อต</button>
 </div>
 <div class="inp ta">ได้ยินเสียงหอนจากชุดปั๊มไฮดรอลิกตั้งแต่ต้นกะ มีน้ำมันซึมใต้ปั๊ม</div>
 <p class="lbl">รูป คลิป เสียง</p>
 <div class="caprow"><button class="btn soft">${I('camera')}ถ่ายรูป</button><button class="btn">${I('video')}คลิป</button><button class="btn">${I('mic')}อัดเสียง</button></div>
 <div class="media">${P('pump','08:10 · ไลน์ 2')}${P('pump','08:11 · ไลน์ 2','warm')}<div class="ph add">${I('plus')}เพิ่มรูป</div></div>
 ${voice('0:18')}
 <div class="loc">${I('clock','s')}<span>เห็นปัญหา วันนี้ 08:10 · กะเช้า</span><a href="#">แก้</a></div>`,
 act:`<button class="btn sec" ${go('r3')}>ย้อน</button><button class="btn pri" ${go('r5')}>ถัดไป: ผลกระทบ</button>`},

{role:'opr',id:'r5',n:5,cap:'ผลกระทบ',note:'คำตอบตรงนี้กับระดับความสำคัญของเครื่อง ใช้คำนวณความเร่งด่วนที่เสนอให้หัวหน้า',
 title:'แจ้งซ่อม',sub:'ขั้น 4 จาก 5 · ผลกระทบ',back:'r4',prog:80,tab:1,
 body:`<h2 class="q">ตอนนี้เครื่องเป็นอย่างไร</h2>
 <div class="opts" data-pick>
  ${opt('เครื่องหยุด','เดินต่อไม่ได้',false)}
  ${opt('เดินได้ แต่ผิดปกติ','ยังผลิตได้ ต้องเฝ้าดู',true)}
  ${opt('ยังเดินปกติ','แจ้งไว้ก่อนเสียหนัก',false)}
 </div>
 <p class="lbl">สายผลิตหยุดไหม</p>
 <div class="seg" data-pick><button aria-pressed="true">ไม่หยุด</button><button aria-pressed="false">หยุดบางส่วน</button><button aria-pressed="false">หยุดทั้งสาย</button></div>
 <div class="opts" data-multi>${opt('มีอันตรายต่อคน','เช่น น้ำมันบนพื้นลื่น ไฟรั่ว ของหล่น · ติ๊กแล้วระบบบอกให้กั้นพื้นที่ และแจ้งหัวหน้าทันที',false,'',true)}</div>
 <div class="note pend">${I('timer')}<span>ระบบเสนอความเร่งด่วน <b>ด่วน</b> จาก “เดินได้แต่ผิดปกติ” กับเครื่องสำคัญระดับ A · หัวหน้าปรับได้</span></div>`,
 act:`<button class="btn sec" ${go('r4')}>ย้อน</button><button class="btn pri" ${go('r6')}>ถัดไป: ตรวจแล้วส่ง</button>`},

{role:'opr',id:'r6',n:6,cap:'ตรวจแล้วส่ง',note:'สรุปทุกขั้นในจอเดียว แตะ “แก้” กลับไปขั้นนั้นได้เลย · ชื่อและแผนกเติมจากบัญชีให้',
 title:'แจ้งซ่อม',sub:'ขั้น 5 จาก 5 · ตรวจแล้วส่ง',back:'r5',prog:100,tab:1,
 body:`<h2 class="q">ตรวจก่อนส่ง</h2>
 <div class="kv">
  <div>${I('pin')}<span><span class="k">ที่ไหน</span><span class="v" style="display:block">${LOC}</span></span><a href="#" ${go('r2')}>แก้</a></div>
  <div>${I('factory')}<span><span class="k">อะไรเสีย</span><span class="v" style="display:block"><b>${IMM}</b></span></span><a href="#" ${go('r3')}>แก้</a></div>
  <div>${I('wrench')}<span><span class="k">อาการ</span><span class="v" style="display:block">เสียงดังผิดปกติ · รั่ว ซึม<br>“ได้ยินเสียงหอนจากชุดปั๊มไฮดรอลิก…”</span></span><a href="#" ${go('r4')}>แก้</a></div>
  <div>${I('camera')}<span><span class="k">หลักฐาน</span><span class="v" style="display:block">รูป 2 · เสียง 0:18</span></span><a href="#" ${go('r4')}>แก้</a></div>
  <div>${I('alert')}<span><span class="k">ผลกระทบ</span><span class="v" style="display:block">เดินได้แต่ผิดปกติ · สายผลิตไม่หยุด · ไม่มีอันตรายต่อคน</span></span><a href="#" ${go('r5')}>แก้</a></div>
  <div>${I('user')}<span><span class="k">ผู้แจ้ง</span><span class="v" style="display:block">สุภาพร · ฝ่ายผลิต · โทรภายใน 2214</span></span><a href="#">แก้</a></div>
 </div>`,
 act:`<button class="btn sec" ${go('r5')}>ย้อน</button><button class="btn pri" ${go('r7')}>${I('send')}ส่งแจ้งซ่อม</button>`},

{role:'opr',id:'r7',n:7,cap:'ติดตามสถานะ',note:'ไทม์ไลน์บอกว่าเรื่องอยู่ที่ใคร ตั้งแต่เมื่อไร · ทุกขั้นที่เปลี่ยนมีแจ้งเตือน',
 title:'RQ-2026-0217',sub:'IMM-06 · แจ้งวันนี้ 08:12',back:'r1',tab:3,
 body:`<div class="ttl"><span class="chips">${chip('กำลังซ่อม','info big')}${chip('ด่วน','warn')}</span><p class="tline">${IMM}<small>เสียงดังที่ชุดปั๊ม น้ำมันซึม</small></p></div>
 <ol class="tl">
  <li class="done"><span class="mk">${I('check','s')}</span><span class="tt"><b>รับเรื่องแล้ว</b><span>08:12 · ส่งจากโทรศัพท์</span></span></li>
  <li class="done"><span class="mk">${I('check','s')}</span><span class="tt"><b>หัวหน้าคัดกรองแล้ว · ด่วน</b><span>08:31 · วิชัย ทองดี</span></span></li>
  <li class="done"><span class="mk">${I('check','s')}</span><span class="tt"><b>มอบงานให้ช่าง</b><span>08:34 · อนุชา แก้วมณี · ใบงาน WO-2026-0103</span></span></li>
  <li class="now"><span class="mk"></span><span class="tt"><b>กำลังซ่อม</b><span>เริ่ม 09:05 · คาดว่าเสร็จ 10:30</span></span></li>
  <li class="later"><span class="mk"></span><span class="tt"><b>ซ่อมเสร็จ รอหัวหน้าตรวจรับ</b></span></li>
  <li class="later"><span class="mk"></span><span class="tt"><b>คุณประเมินงาน</b></span></li>
 </ol>
 <div class="quote">“เปลี่ยนซีลชุดปั๊ม ระหว่างนี้ใช้เครื่องได้ แต่อย่าเร่งรอบ”<small>อนุชา แก้วมณี · 09:12</small></div>`,
 act:`<button class="btn pri" ${go('r8')}>${I('plus')}เพิ่มรูปหรือข้อความให้ช่าง</button>`},

{role:'opr',id:'r8',n:8,cap:'ประเมินงาน',note:'ปิดวงจร: ผู้แจ้งยืนยันว่าใช้งานได้จริง และให้คะแนน',
 title:'RQ-2026-0217',sub:'ซ่อมเสร็จ 10:30 · หัวหน้าตรวจรับแล้ว',back:'r7',tab:3,
 body:`<div class="ttl"><span class="chips">${chip('รอคุณประเมิน','warn big')}</span><p class="tline">งานซ่อมนี้เรียบร้อยไหม<small>${IMM}</small></p></div>
 <div class="media" style="grid-template-columns:1fr 1fr">${P('pump','08:10 · ก่อนซ่อม','','ก่อน')}${P('seal','10:24 · หลังซ่อม','cool','หลัง')}</div>
 <div class="quote">เปลี่ยนซีลกระบอกสูบ 2 ชิ้น และไส้กรองน้ำมัน เติมน้ำมัน 20 ลิตร ทดลองเดิน 30 รอบ เสียงปกติ ไม่มีซึม<small>อนุชา แก้วมณี · ใช้เวลา 1 ชม. 25 นาที</small></div>
 <div class="opts" data-pick>${opt('เรียบร้อย ใช้งานได้','',true)}${opt('ยังมีปัญหา','ส่งกลับให้หัวหน้าพร้อมเหตุผล',false)}</div>
 <p class="lbl">ความพอใจ</p>
 <div class="stars" data-stars><button class="on" aria-label="1 ดาว">${I('star')}</button><button class="on" aria-label="2 ดาว">${I('star')}</button><button class="on" aria-label="3 ดาว">${I('star')}</button><button class="on" aria-label="4 ดาว">${I('star')}</button><button aria-label="5 ดาว">${I('star')}</button></div>`,
 act:`<button class="btn pri" ${go('r1')}>ยืนยันว่าเรียบร้อย</button>`},

/* ================= ช่าง ================= */
{role:'tec',id:'t1',n:1,cap:'งานของฉันวันนี้',note:'เรียง ฉุกเฉิน → เกินกำหนด → วันนี้ · ทั้งแถวแตะได้ · มีแถบบอกเมื่อไม่มีเน็ต',
 title:'งานของฉัน',sub:'อนุชา แก้วมณี · ทีมซ่อมอาคาร A',right:'',tab:0,banner:OFF,
 body:`<p class="sum">ค้างอยู่ <b>4 งาน</b> · <span class="bad">ฉุกเฉิน 1</span> · <span class="bad">เกินกำหนด 1</span></p>
 <p class="grp bad">ฉุกเฉิน</p>
 <div class="list">${row({no:1,chips:chip('ฉุกเฉิน','bad')+chip('พักงาน รออะไหล่','neu'),t:'IMM-07 เครื่องฉีดพลาสติก 650 ตัน',s:'น้ำมันไฮดรอลิกรั่วที่กระบอกปิดแม่พิมพ์',m:[['pin','โซนฉีด 1 › ไลน์ 2'],['clock','ต้องเสร็จวันนี้ 12:00','warn']]})}</div>
 <p class="grp bad">เกินกำหนด</p>
 <div class="list">${row({no:2,chips:chip('ด่วน','warn')+chip('รอดำเนินการ','pend'),t:'FLT-02 รถยกไฟฟ้า 2.5 ตัน',s:'เบรกมือไม่อยู่ ไหลเมื่อจอดทางลาด',m:[['pin','อาคาร C › ลานขนถ่าย'],['clock','เกินกำหนด 1 วัน','bad']]})}</div>
 <p class="grp">วันนี้</p>
 <div class="list">
 ${row({no:3,chips:chip('ด่วน','warn')+chip('มอบให้คุณแล้ว','pend'),t:IMM,s:'เสียงดังที่ชุดปั๊ม น้ำมันซึม',m:[['pin','โซนฉีด 1 › ไลน์ 2'],['clock','ต้องเสร็จ 15:00'],['clip','0/6 ข้อ']],go:'t2',sel:true})}
 ${row({no:4,chips:chip('ปกติ','neu')+chip('PM รายเดือน','info'),t:'GA37 คอมเพรสเซอร์ 37 kW',s:'ตรวจตามแผนประจำเดือน',m:[['pin','อาคาร A › ห้องคอมเพรสเซอร์'],['clock','16:00']]})}
 </div>`},

{role:'tec',id:'t2',n:2,cap:'รายละเอียดงาน',note:'ชื่อเครื่องและอาการเป็นหัวเรื่อง เลขใบงานเป็นข้อความรอง · เห็นรูป เสียง และประวัติก่อนออกไปหน้างาน',
 title:'WO-2026-0103',sub:'จาก RQ-2026-0217',back:'t1',tab:0,
 body:`<div class="ttl"><span class="chips">${chip('ด่วน','warn')}${chip('มอบให้คุณแล้ว','pend')}</span><p class="tline">${IMM}<small>เสียงดังผิดปกติ · รั่ว ซึม</small></p></div>
 <div class="loc">${I('pin','s')}<span>${LOC}</span></div>
 <div class="quote">“ได้ยินเสียงหอนจากชุดปั๊มไฮดรอลิกตั้งแต่ต้นกะ มีน้ำมันซึมใต้ปั๊ม”<small>สุภาพร · ฝ่ายผลิต · 08:12</small></div>
 <div class="media">${P('pump','08:10 · ไลน์ 2')}${P('pump','08:11 · ไลน์ 2','warm')}<div class="ph cool"><svg class="ill" aria-hidden="true"><use href="#p-gauge"/></svg><span class="wm">คลิป 0:09</span></div></div>
 ${voice('0:18',' · ผู้แจ้ง')}
 <div class="kv">
  <div>${I('alert')}<span><span class="k">ผลกระทบ</span><span class="v" style="display:block">เดินได้แต่ผิดปกติ · สายผลิตไม่หยุด</span></span></div>
  <div>${I('history')}<span><span class="k">ประวัติ 90 วัน</span><span class="v" style="display:block">ซ่อม 2 ครั้ง · ล่าสุด 28/10/2569 เปลี่ยนโอริงข้อต่อ</span></span><a href="#">ดู</a></div>
 </div>`,
 act:`<button class="btn sec">${I('phone')}โทร</button><button class="btn pri" ${go('t3')}>${I('qr')}สแกนเครื่อง เริ่มงาน</button>`},

{role:'tec',id:'t3',n:3,cap:'เริ่มงาน จับเวลา',note:'สแกนยืนยันว่าอยู่ที่เครื่องจริง แล้วเริ่มจับเวลา · ปุ่มหลักคือสิ่งถัดไปที่ต้องทำเสมอ',
 title:'กำลังซ่อม',sub:'WO-2026-0103 · IMM-06',back:'t2',tab:0,
 body:`<div class="scanok">${I('check')}<span><b>สแกนตรงเครื่อง IMM-06</b> · 09:05</span></div>
 <div class="timer"><span><span class="t" data-timer="768">00:12:48</span><span class="tk" style="display:block">เวลาซ่อม · เริ่ม 09:05</span></span><button class="btn">${I('pause')}พัก</button></div>
 <p class="lbl">สิ่งที่ต้องทำ</p>
 <div class="list">
  ${row({no:1,chips:chip('กำลังทำ','info'),t:'เช็กลิสต์ระบบไฮดรอลิก',m:[['clip','เสร็จ 1 จาก 6 ข้อ']],go:'t4'})}
  ${row({no:2,t:'บันทึกมิเตอร์',m:[['gauge','2 ค่า']],go:'t6'})}
  ${row({no:3,t:'เบิกอะไหล่',m:[['box','จาก BOM ชุดปั๊มไฮดรอลิก']],go:'t7'})}
  ${row({no:4,t:'ปิดงาน',m:[['pen','สาเหตุ วิธีแก้ รูปหลังซ่อม ลายเซ็น']],go:'t8'})}
 </div>`,
 act:`<button class="btn sec">พักงาน</button><button class="btn pri" ${go('t4')}>ทำข้อ 2 ต่อ</button>`},

{role:'tec',id:'t4',n:4,cap:'เช็กลิสต์ · ผ่าน / ไม่ผ่าน',note:'หนึ่งจอหนึ่งข้อ ปุ่มใหญ่ใช้ได้แม้ใส่ถุงมือ · แตะแล้วไปข้อถัดไปเอง',
 title:'เช็กลิสต์ · ข้อ 2 จาก 6',sub:'ระบบไฮดรอลิก · IMM-06',back:'t3',prog:33,right:SYNC.off,tab:0,
 body:`<div class="dots"><i class="d"></i><i class="c"></i><i></i><i></i><i></i><i></i></div>
 <h2 class="q">รอยรั่วที่ข้อต่อและท่ออ่อน</h2>
 <p class="sub">ดูรอบชุดปั๊ม ข้อต่อ P1–P4 และท่ออ่อนไปกระบอกปิดแม่พิมพ์ ขณะเครื่องเดิน</p>
 <div class="pf" data-pick><button class="pass" aria-pressed="false" ${go('t5')}>${I('check')}ผ่าน</button><button class="fail" aria-pressed="true">${I('x')}ไม่ผ่าน</button></div>
 <div class="note bad">${I('alert')}<span><b>ไม่ผ่าน</b> · ใส่สิ่งที่เห็นสั้นๆ และถ่ายรูปจุดที่รั่ว</span></div>
 <div class="inp ta">ซึมที่ซีลก้านกระบอกสูบด้านปั๊ม หยดราว 1 หยดต่อนาที</div>
 <div class="media">${P('seal','09:21 · IMM-06')}<div class="ph add">${I('camera')}ถ่ายเพิ่ม</div></div>`,
 act:`<button class="btn sec" ${go('t3')}>ย้อน</button><button class="btn pri" ${go('t5')}>บันทึก ไปข้อ 3</button>`},

{role:'tec',id:'t5',n:5,cap:'เช็กลิสต์ · ค่าวัดพร้อมช่วง',note:'เห็นเกณฑ์ก่อนกรอก · ค่าเกินขึ้นแดงพร้อมบอกว่าเกินเท่าไร และบอกล่วงหน้าว่าระบบจะทำอะไรต่อ',
 title:'เช็กลิสต์ · ข้อ 3 จาก 6',sub:'ระบบไฮดรอลิก · IMM-06',back:'t4',prog:50,right:SYNC.off,tab:0,
 body:`<div class="dots"><i class="d"></i><i class="x"></i><i class="c"></i><i></i><i></i><i></i></div>
 <h2 class="q">แรงดันระบบขณะฉีด</h2>
 <p class="sub">อ่านจากเกจ P1 ที่ชุดปั๊ม ตอนเครื่องเดินรอบฉีดปกติ</p>
 <div class="measure"><div class="val">172<i class="caret"></i></div><span class="u">bar</span></div>
 <div>
  <div class="gauge"><span class="okz" style="left:40%;width:30%"></span><span class="pt" style="left:79%"></span></div>
  <div class="range"><span>0</span><span>เกณฑ์ 140–160 bar</span><span>200</span></div>
 </div>
 <div class="note bad">${I('alert')}<span><b>สูงกว่าเกณฑ์ 12 bar</b> · เมื่อบันทึก ระบบจะเปิด<b>งานซ่อมต่อเนื่อง</b>ให้หัวหน้าคัดกรอง งานนี้ทำต่อได้ตามเดิม</span></div>
 <button class="btn wide">${I('camera')}ถ่ายรูปหน้าปัดเกจ (ไม่บังคับ)</button>`,
 act:`<button class="btn sec" ${go('t4')}>ย้อน</button><button class="btn pri" ${go('t6')}>บันทึก ไปข้อ 4</button>`},

{role:'tec',id:'t6',n:6,cap:'บันทึกมิเตอร์',note:'เห็นค่าครั้งก่อนและส่วนต่างทันที กันพิมพ์ตัวเลขผิดหลัก · ค่ามิเตอร์ใช้ตั้งรอบ PM ถัดไป',
 title:'มิเตอร์ · 1 จาก 2',sub:'IMM-06 · WO-2026-0103',back:'t3',prog:50,tab:0,
 body:`<h2 class="q">ชั่วโมงเดินเครื่อง</h2>
 <p class="sub">ดูที่หน้าจอเครื่อง เมนู Counter › Run hours</p>
 <div class="kv"><div>${I('history')}<span><span class="k">ครั้งก่อน</span><span class="v" style="display:block"><b>18,452 ชม.</b> · 12/11/2569 · สมชาย</span></span></div></div>
 <div class="measure"><div class="val okv">18,618<i class="caret"></i></div><span class="u">ชม.</span></div>
 <div class="note ok">${I('check')}<span>เพิ่ม <b>166 ชม.</b> ใน 7 วัน · ใกล้ค่าเฉลี่ย 22 ชม. ต่อวัน</span></div>
 <div class="note info">${I('calendar')}<span>PM 2,000 ชม. ครั้งถัดไป ที่ <b>20,000 ชม.</b> · อีกราว 63 วัน</span></div>
 <p class="empty">ถัดไป: ตัวนับรอบฉีด</p>`,
 act:`<button class="btn sec" ${go('t5')}>ย้อน</button><button class="btn pri" ${go('t7')}>บันทึก ไปมิเตอร์ 2</button>`},

{role:'tec',id:'t7',n:7,cap:'เบิกอะไหล่จาก BOM',note:'รายการมาจาก BOM ของชุดที่ซ่อม เลือกจำนวนที่ใช้รอบนี้ · ของหมดบอกตรงๆ พร้อมทางไปต่อ',
 title:'เบิกอะไหล่',sub:'WO-2026-0103 · IMM-06',back:'t3',tab:1,
 body:`<div class="note info">${I('box')}<span>จาก BOM <b>ชุดปั๊มไฮดรอลิก</b> ของ IMM-06 · ใส่เฉพาะที่ใช้รอบนี้</span></div>
 <div class="list">
  ${row({no:1,t:'ซีลกระบอกสูบ 80 มม.',m:[['box','HYD-SEAL-80'],['layers','คงคลัง 6']],right:'',x:`<span class="qty"><span>จำนวน</span><span class="step"><button aria-label="ลด">−</button><span>2</span><button aria-label="เพิ่ม">+</button></span></span>`})}
  ${row({no:2,t:'ไส้กรองน้ำมันไฮดรอลิก',m:[['box','FLT-H10'],['layers','คงคลัง 3']],right:'',x:`<span class="qty"><span>จำนวน</span><span class="step"><button aria-label="ลด">−</button><span>1</span><button aria-label="เพิ่ม">+</button></span></span>`})}
  ${row({no:3,t:'น้ำมันไฮดรอลิก ISO VG46 (ลิตร)',m:[['box','HYD-OIL-46'],['layers','คงคลัง 180']],right:'',x:`<span class="qty"><span>จำนวน</span><span class="step"><button aria-label="ลด">−</button><span>20</span><button aria-label="เพิ่ม">+</button></span></span>`})}
  ${row({no:4,t:'โอริงข้อต่อ 22 มม.',m:[['box','OR-22'],['alert','หมดคลัง','bad']],s:'<button class="link">ขอซื้อผ่านจัดซื้อ '+I('chev','s')+'</button>',right:'',x:`<span class="qty"><span>จำนวน</span><span class="step zero"><button aria-label="ลด">−</button><span>0</span><button aria-label="เพิ่ม">+</button></span></span>`})}
 </div>
 <button class="btn wide">${I('scan')}อะไหล่นอก BOM · สแกนหรือค้นหา</button>`,
 act:`<button class="btn sec" ${go('t3')}>ย้อน</button><button class="btn pri" ${go('k1')}>ส่งขอเบิก 3 รายการ</button>`},

{role:'tec',id:'t8',n:8,cap:'ปิดงาน · สาเหตุและวิธีแก้',note:'เลือกสาเหตุจากชุดคำกลางเพื่อใช้ทำรายงาน แล้วพิมพ์หรือพูดวิธีแก้',
 title:'ปิดงาน · 1 จาก 2',sub:'WO-2026-0103 · IMM-06',back:'t3',prog:50,tab:0,
 body:`<h2 class="q">สาเหตุ</h2>
 <div class="picks" data-pick>
  <button class="pk" aria-pressed="true">สึกหรอตามอายุ</button><button class="pk" aria-pressed="false">ขาดการบำรุงรักษา</button>
  <button class="pk" aria-pressed="false">ใช้งานผิดวิธี</button><button class="pk" aria-pressed="false">ติดตั้งไม่ถูก</button>
  <button class="pk" aria-pressed="false">ไม่ทราบสาเหตุ</button>
 </div>
 <div class="kv"><div>${I('box')}<span><span class="k">ชิ้นส่วนที่เสีย (จากที่เบิก)</span><span class="v" style="display:block">ซีลกระบอกสูบ 80 มม. · ไส้กรองน้ำมันไฮดรอลิก</span></span><a href="#">แก้</a></div></div>
 <p class="lbl">วิธีแก้</p>
 <div class="inp ta">เปลี่ยนซีลกระบอกสูบ 2 ชิ้น และไส้กรองน้ำมัน เติมน้ำมัน 20 ลิตร ทดลองเดิน 30 รอบ เสียงปกติ ไม่มีซึม</div>
 <button class="btn wide">${I('mic')}พูดแทนพิมพ์</button>`,
 act:`<button class="btn sec" ${go('t3')}>ย้อน</button><button class="btn pri" ${go('t9')}>ถัดไป: รูปและลายเซ็น</button>`},

{role:'tec',id:'t9',n:9,cap:'ปิดงาน · รูปหลังซ่อมและลายเซ็น',note:'ระบบบอกว่าครบหรือยังก่อนส่ง · เซ็นในจอได้เลย ไม่ต้องกดบันทึกลายเซ็นแยก',
 title:'ปิดงาน · 2 จาก 2',sub:'WO-2026-0103 · IMM-06',back:'t8',prog:100,tab:0,
 body:`<p class="lbl">รูปหลังซ่อม</p>
 <div class="media">${P('seal','10:24 · IMM-06','cool')}${P('pump','10:26 · IMM-06','cool')}<div class="ph add">${I('camera')}ถ่ายเพิ่ม</div></div>
 <div class="opts" data-multi>${opt('เครื่องพร้อมใช้งาน','ส่งต่อให้ฝ่ายผลิตใช้ได้ทันที',true,'',true)}</div>
 <div class="kv">
  <div>${I('timer')}<span><span class="k">เวลาซ่อม</span><span class="v" style="display:block"><b>1 ชม. 25 นาที</b> · 09:05–10:30</span></span></div>
  <div>${I('check')}<span><span class="k">ครบแล้ว</span><span class="v" style="display:block">เช็กลิสต์ 6/6 · มิเตอร์ 2/2 · อะไหล่ 3 รายการ</span></span></div>
 </div>
 <div class="sig"><svg viewBox="0 0 300 82" preserveAspectRatio="none" aria-hidden="true"><path d="M14 60c10-30 22-46 30-40s-8 36 4 34 14-30 26-28-2 26 10 24 16-20 28-18 6 14 20 10 12-14 22-12M168 50c18-6 40-10 60-6s30 0 44-8"/></svg><span class="base"></span><small>อนุชา แก้วมณี · ช่างผู้ซ่อม</small><a href="#">เซ็นใหม่</a></div>`,
 act:`<button class="btn sec" ${go('t8')}>ย้อน</button><button class="btn pri" ${go('s4')}>ส่งปิดงาน</button>`},

/* ================= หัวหน้าทีม ================= */
{role:'sup',id:'s1',n:1,cap:'คิวคัดกรอง',note:'เรียงเครื่องหยุดก่อน แล้วตามเวลารอ · เห็นรูปเสียงและผลกระทบจากรายการเลย',
 title:'คัดกรอง',sub:'วิชัย ทองดี · หัวหน้าทีมซ่อมอาคาร A',right:bell(3),tab:1,
 body:`<div class="picks scrollx" data-pick><button class="pk" aria-pressed="true">รอคัดกรอง 4</button><button class="pk" aria-pressed="false">เครื่องหยุด 1</button><button class="pk" aria-pressed="false">อันตรายต่อคน 0</button></div>
 <div class="list">
  ${row({no:1,chips:chip('เครื่องหยุดอยู่','stop'),t:'IMM-09 เครื่องฉีดพลาสติก 350 ตัน',s:'ไม่ทำงาน หน้าจอขึ้น Alarm 21',m:[['pin','โซนฉีด 2 › ไลน์ 5'],['clock','รอ 6 นาที','bad']]})}
  ${row({no:2,chips:chip('ด่วน (ระบบเสนอ)','warn'),t:IMM,s:'เสียงดังที่ชุดปั๊ม น้ำมันซึม',m:[['camera','รูป 2 · เสียง 1'],['clock','รอ 14 นาที','warn']],go:'s2',sel:true})}
  ${row({no:3,chips:chip('ปกติ','neu'),t:'หลอดไฟดับ 2 ดวง',s:'อาคาร B › โซนบรรจุ › จุด 3',m:[['clock','รอ 51 นาที']]})}
  ${row({no:4,chips:chip('ปกติ','neu'),t:'ที่จอดรถพนักงาน · หลุมบ่อ',s:'หน้าประตู 2 รถจักรยานยนต์ล้มแล้ว 1 คัน',m:[['clock','รอ 2 ชม.']]})}
 </div>`},

{role:'sup',id:'s2',n:2,cap:'คัดกรอง',note:'ข้อมูลที่ต้องใช้ตัดสินอยู่ในจอเดียว · ความเร่งด่วนที่ระบบเสนอปรับได้ · เลือกทางแล้วค่อยไปจอถัดไป',
 title:'คัดกรอง RQ-2026-0217',sub:'สุภาพร · ฝ่ายผลิต · 08:12',back:'s1',tab:1,
 body:`<div class="ttl"><p class="tline">${IMM}<small>${LOC}</small></p></div>
 <div class="quote">เสียงดังผิดปกติ · รั่ว ซึม<br>“ได้ยินเสียงหอนจากชุดปั๊มไฮดรอลิกตั้งแต่ต้นกะ มีน้ำมันซึมใต้ปั๊ม”</div>
 <div class="media">${P('pump','08:10 · ไลน์ 2')}${P('pump','08:11 · ไลน์ 2','warm')}<div class="ph cool"><svg class="ill" aria-hidden="true"><use href="#p-gauge"/></svg><span class="wm">เสียง 0:18</span></div></div>
 <div class="kv">
  <div>${I('alert')}<span><span class="k">ผลกระทบ</span><span class="v" style="display:block">เดินได้แต่ผิดปกติ · สายไม่หยุด · ไม่มีอันตรายต่อคน</span></span></div>
  <div>${I('history')}<span><span class="k">ประวัติ 90 วัน · เครื่องสำคัญระดับ A</span><span class="v" style="display:block">ซ่อม 2 ครั้ง · ล่าสุด 28/10/2569 โอริงข้อต่อรั่ว</span></span><a href="#">ดู</a></div>
 </div>
 <p class="lbl">ความเร่งด่วน</p>
 <div class="seg" data-pick><button aria-pressed="false">ฉุกเฉิน</button><button aria-pressed="true">ด่วน<small>ระบบเสนอ</small></button><button aria-pressed="false">ปกติ</button></div>
 <p class="lbl">ตัดสินใจ</p>
 <div class="opts" data-pick>
  ${opt('อนุมัติ สร้างใบงาน','แล้วเลือกช่างในจอถัดไป',true,'check')}
  ${opt('รวมกับเรื่องที่ค้างอยู่','เพิ่มรูปเข้าเรื่องเดิม',false,'merge')}
  ${opt('ส่งกลับ ขอข้อมูลเพิ่ม','ผู้แจ้งได้แจ้งเตือนพร้อมคำถาม',false,'undo')}
  ${opt('ไม่รับเรื่อง','ต้องใส่เหตุผล',false,'ban')}
 </div>`,
 act:`<button class="btn sec">${I('phone')}โทร</button><button class="btn pri" ${go('s3')}>อนุมัติ แล้วเลือกช่าง</button>`},

{role:'sup',id:'s3',n:3,cap:'มอบหมายช่าง',note:'เห็นภาระงานวันนี้ ความถนัด และสถานะของช่างแต่ละคน ก่อนกดมอบงาน',
 title:'มอบงาน WO-2026-0103',sub:'IMM-06 · ด่วน · ต้องเสร็จวันนี้ 15:00',back:'s2',tab:1,
 body:`<div class="loc">${I('users','s')}<span>ทีมซ่อมอาคาร A · ระบบไฮดรอลิก</span><a href="#">เปลี่ยนทีม</a></div>
 <div class="list" data-pick-rows>
  ${row({no:1,chips:chip('ว่าง','ok'),t:'อนุชา แก้วมณี',s:'ไฮดรอลิก · เครื่องฉีด',m:[['clip','วันนี้ 3 งาน · 3.5 จาก 8 ชม.']],x:'<span class="bar"><i style="width:44%"></i></span>',sel:true,go:'t1',right:`<span class="chev" style="color:var(--primary)">${I('check')}</span>`})}
  ${row({no:2,chips:chip('กำลังซ่อม IMM-07','info'),t:'ธนพล ศรีวงศ์',s:'ไฟฟ้า · ระบบควบคุม',m:[['clip','วันนี้ 5 งาน · 7 จาก 8 ชม.']],right:'',x:'<span class="bar hi"><i style="width:88%"></i></span>'})}
  ${row({no:3,chips:chip('ลาครึ่งวันบ่าย','warn'),t:'กิตติ พรหมมา',s:'เครื่องกล · ไฮดรอลิก',m:[['clip','วันนี้ 2 งาน · 2 จาก 4 ชม.']],right:'',x:'<span class="bar"><i style="width:50%"></i></span>'})}
  ${row({no:4,chips:chip('ผู้รับเหมา','neu'),t:'บ. ไฮดรอลิกเซอร์วิส',s:'ต้องเปิดใบสั่งซื้อผ่านจัดซื้อ',m:[['clock','เข้าหน้างานได้พรุ่งนี้']],right:''})}
 </div>`,
 act:`<button class="btn pri" ${go('t1')}>มอบงานให้ อนุชา</button>`},

{role:'sup',id:'s4',n:4,cap:'ตรวจรับงาน',note:'สรุปผลซ่อม เวลา อะไหล่ รูปก่อนและหลัง · ค่าที่เกินเกณฑ์กลายเป็นงานต่อเนื่องแล้ว ไม่หายไป',
 title:'ตรวจรับ WO-2026-0103',sub:'อนุชา แก้วมณี · ส่งปิดงาน 10:31',back:'s1',tab:3,
 body:`<div class="ttl"><span class="chips">${chip('รอตรวจรับ','warn big')}</span><p class="tline">${IMM}<small>สึกหรอตามอายุ · ซีลกระบอกสูบ</small></p></div>
 <div class="media" style="grid-template-columns:1fr 1fr">${P('pump','08:10 · ก่อนซ่อม','','ก่อน')}${P('seal','10:24 · หลังซ่อม','cool','หลัง')}</div>
 <div class="kv">
  <div>${I('timer')}<span><span class="k">เวลาซ่อม</span><span class="v" style="display:block"><b>1 ชม. 25 นาที</b> · เครื่องพร้อมใช้งาน</span></span></div>
  <div>${I('clip')}<span><span class="k">เช็กลิสต์</span><span class="v" style="display:block">ผ่าน 4 · ไม่ผ่าน 1 (แก้แล้ว) · <span style="color:var(--bad)">เกินเกณฑ์ 1</span></span></span></div>
  <div>${I('box')}<span><span class="k">อะไหล่ 3 รายการ</span><span class="v" style="display:block"><span class="money">2,940.00</span> บาท</span></span><a href="#">ดู</a></div>
 </div>
 <div class="note warn">${I('alert')}<span>แรงดันระบบ 172 bar เกินเกณฑ์ → เปิด<b>งานต่อเนื่อง WO-2026-0104</b> รอคัดกรองแล้ว</span></div>`,
 act:`<button class="btn sec">${I('undo')}ส่งกลับให้ช่าง</button><button class="btn pri" ${go('r8')}>ตรวจรับ ปิดงาน</button>`},

/* ================= คลัง ================= */
{role:'sto',id:'k1',n:1,cap:'รายการขอเบิก',note:'คิวจ่ายเรียงตามความเร่งด่วนของใบงาน · บอกตรงๆ ว่าใบไหนติดรอของเข้า',
 title:'คิวจ่ายอะไหล่',sub:'มาลี ศรีสุข · คลังอะไหล่ อาคาร A',right:bell(0),tab:0,
 body:`<p class="sum">รอจ่าย <b>3 ใบ</b> · <span class="warn">ติดรอของเข้า 1</span></p>
 <div class="list">
  ${row({no:1,chips:chip('ด่วน','warn')+chip('รอจ่าย','pend'),t:'WO-2026-0103 · IMM-06',s:'อนุชา แก้วมณี · 3 รายการ',m:[['clock','ขอ 10:02'],['pin','ชั้น B-03, B-07, ถัง T-02']],go:'k2',sel:true})}
  ${row({no:2,chips:chip('ฉุกเฉิน','bad')+chip('รอของเข้า','warn'),t:'WO-2026-0101 · IMM-07',s:'ธนพล ศรีวงศ์ · ซีลกระบอกปิดแม่พิมพ์ 1 ชุด',m:[['calendar','ของเข้า 20/11/2569 · PO-2026-0412']]})}
  ${row({no:3,chips:chip('ปกติ','neu')+chip('รอจ่าย','pend'),t:'WO-2026-0105 · GA37',s:'PM รายเดือน · 2 รายการ',m:[['clock','ใช้ 16:00']]})}
 </div>`},

{role:'sto',id:'k2',n:2,cap:'จ่ายของด้วยการสแกน',note:'สแกนแล้วติ๊กให้เอง · ปุ่มยังกดไม่ได้จะบอกเหตุใต้ปุ่ม แตะแล้วพาไปรายการที่ขาด',
 title:'จ่าย WO-2026-0103',sub:'ผู้รับ อนุชา แก้วมณี · IMM-06',back:'k1',tab:1,
 body:`<button class="btn big wide soft">${I('scan')}สแกนบาร์โค้ดอะไหล่</button>
 <div class="scanok">${I('check')}<span>สแกนแล้ว <b>FLT-H10</b> ไส้กรองน้ำมันไฮดรอลิก</span></div>
 <div class="list">
  ${row({no:1,chips:chip('ครบ 2/2','ok'),t:'ซีลกระบอกสูบ 80 มม.',m:[['box','HYD-SEAL-80'],['pin','ชั้น B-03']],right:`<span class="chev" style="color:var(--ok)">${I('check')}</span>`})}
  ${row({no:2,chips:chip('ครบ 1/1','ok'),t:'ไส้กรองน้ำมันไฮดรอลิก',m:[['box','FLT-H10'],['pin','ชั้น B-07']],right:`<span class="chev" style="color:var(--ok)">${I('check')}</span>`})}
  ${row({no:3,chips:chip('ยังไม่สแกน','warn'),t:'น้ำมันไฮดรอลิก ISO VG46',m:[['box','HYD-OIL-46'],['pin','ถัง T-02']],right:'',x:`<span class="qty"><span>จำนวน</span><span class="step"><button aria-label="ลด">−</button><span>20</span><button aria-label="เพิ่ม">+</button></span></span>`,sel:true})}
 </div>
 <div class="kv"><div>${I('user')}<span><span class="k">ผู้รับของ</span><span class="v" style="display:block">อนุชา แก้วมณี · สแกนบัตรพนักงานแล้ว</span></span></div></div>`,
 act:`<button class="btn sec">${I('scan')}สแกนต่อ</button><button class="btn pri" aria-disabled="true" ${go('t8')}>ยืนยันจ่าย 3 รายการ</button><span class="why">${I('alert','s')}ยังไม่สแกนรายการที่ 3 · แตะเพื่อไปที่รายการ</span>`},

/* ================= ใช้ร่วม ================= */
{role:'tec',grp:'com',id:'c1',n:1,cap:'แจ้งเตือน',note:'ทุกการเปลี่ยนสถานะมาที่นี่ แตะแล้วไปที่เรื่องนั้นเลย · ยังไม่อ่านมีจุดสีหลัก',
 title:'แจ้งเตือน',sub:'อนุชา แก้วมณี · ยังไม่อ่าน 2',back:'t1',tab:0,
 body:`<p class="grp">วันนี้</p>
 <div class="list">
  ${row({no:'<i class="unread"></i>',t:'อะไหล่พร้อมรับที่คลังอาคาร A',s:'WO-2026-0103 · 3 รายการ',right:'<span class="when">10:15</span>'}).replace('class="row ','class="row nrow ')}
  ${row({no:'<i class="unread"></i>',t:'หัวหน้าส่งกลับ WO-2026-0098',s:'ขอรูปผ้าเบรกหลังเปลี่ยน FLT-02',right:'<span class="when">09:40</span>'}).replace('class="row ','class="row nrow ')}
  ${row({no:'',t:'งานใหม่ถึงคุณ · ด่วน',s:'WO-2026-0103 · IMM-06 เครื่องฉีดพลาสติก',right:'<span class="when">08:34</span>',go:'t2'}).replace('class="row ','class="row nrow ')}
 </div>
 <p class="grp">เมื่อวาน</p>
 <div class="list">
  ${row({no:'',t:'ตรวจรับแล้ว WO-2026-0097',s:'GA37 คอมเพรสเซอร์ · ผู้แจ้งให้ 5 ดาว',right:'<span class="when">16:20</span>'}).replace('class="row ','class="row nrow ')}
  ${row({no:'',t:'แผน PM ใกล้ถึง',s:'GA37 คอมเพรสเซอร์ · พรุ่งนี้ 16:00',right:'<span class="when">08:00</span>'}).replace('class="row ','class="row nrow ')}
 </div>`},

{role:'tec',grp:'com',id:'c2',n:2,cap:'รอส่ง ตอนไม่มีเน็ต',note:'งานไม่ถูกบล็อกเพราะไม่มีเน็ต · ข้อมูลเก็บในเครื่องและส่งเองเมื่อสัญญาณกลับมา',
 title:'รอส่ง 2 รายการ',sub:'เก็บไว้ในเครื่องนี้',back:'t1',right:'',tab:0,banner:OFF,
 body:`<div class="note info">${I('cloud')}<span>ปิดแอปได้ ข้อมูลไม่หาย · ระบบจะส่งเองเมื่อมีเน็ต แล้วแจ้งให้ทราบ</span></div>
 <div class="list">
  ${row({no:1,chips:chip('รอส่ง','neu'),t:'เช็กลิสต์ข้อ 2 · ไม่ผ่าน',s:'WO-2026-0103 · พร้อมรูป 1 รูป',m:[['clock','บันทึก 09:21']],right:''})}
  ${row({no:2,chips:chip('รอส่ง','neu'),t:'เช็กลิสต์ข้อ 3 · 172 bar',s:'WO-2026-0103 · เปิดงานต่อเนื่องเมื่อส่งถึง',m:[['clock','บันทึก 09:24']],right:''})}
 </div>
 <p class="empty">ส่งล่าสุดสำเร็จ 09:02</p>`,
 act:`<button class="btn pri" aria-disabled="true">ลองส่งตอนนี้</button><span class="why">${I('wifioff','s')}ยังไม่มีสัญญาณ · ไม่ต้องรอ ทำงานต่อได้เลย</span>`}
];
window.PK={F,phone,row,chip,opt,I,P,LOC,IMM,TABS,SYNC,bell,OFF,voice};
