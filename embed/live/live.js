/* live.js — เล่นจอคอม CMMS (desk-*.html) ทีละขั้น · หน้าจอจำลอง ข้อมูลตัวอย่าง
   ผืนจอ 1440×810 ย่อ/ขยายให้พอดีกรอบ (iframe) ด้วย transform
   หน้า desk-*.html เรียก LIVE.run({steps:[{cap:'คำบรรยาย', run: async a => {...}}]})
   ขั้น 0 = สถานะแรกที่เห็นตอนเปิด (เล่นทันทีแบบไม่มีแอนิเมชัน)

   API (เหมือน phone-run.js / ref-ctl.js):
     window.deck.ready (Promise) · deck.steps() จำนวนสถานะ · deck.step() สถานะปัจจุบัน (0 = สถานะแรก)
     deck.next() เล่นขั้นถัดไป (Promise · false ถ้าหมด · กดระหว่างเล่น = จบขั้นนี้ทันที) · deck.back() · deck.goto(i) ข้ามทันที
     deck.caps() คำบรรยายทุกขั้น · deck.rate = ความเร็ว (2 = เร็วขึ้นเท่าตัว)
   คุยกับ deck แม่ผ่าน postMessage:
     แม่ → ลูก {type:'step', i} (i = cur+1 เล่นแอนิเมชัน · อื่นๆ ข้ามทันที · fast:true = ข้ามเสมอ) · {type:'hello'} · {type:'end'}
     ลูก → แม่ {type:'live-ready', steps, caps} · {type:'live-state', i, steps, cap} · {type:'live-done', i, steps} · {type:'live-key', key}
   URL: ?auto เล่นเอง · ?range=a-b ใช้เฉพาะขั้น a..b · ?at=i เปิดที่สถานะ i · ?cap แสดงคำบรรยายบนจอ (ค่าเริ่มไม่แสดง) */
(function () {
  const W = 1440, H = 810;
  const Q = new URLSearchParams(location.search);
  const CANCEL = { cancel: true };
  let cfg, stage, snap = '', tok = 0, at = 0, busy = false, lo = 0, hi = 0, readyRes;
  const deck = { rate: 1, ready: new Promise(r => readyRes = r) };
  window.deck = deck;
  const sleep = ms => new Promise(r => setTimeout(r, ms / deck.rate));

  /* ── ไอคอน (เส้น 2px แบบ lucide ตามโปรแกรมจริง) ── */
  const IC = {
    bag: '<path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"/><path d="M3 6h18"/><path d="M16 10a4 4 0 0 1-8 0"/>',
    cart: '<circle cx="8" cy="21" r="1"/><circle cx="19" cy="21" r="1"/><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"/>',
    clip: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="M12 11h4M12 16h4M8 11h.01M8 16h.01"/>',
    clipcheck: '<rect width="8" height="4" x="8" y="2" rx="1"/><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"/><path d="m9 14 2 2 4-4"/>',
    factory: '<path d="M2 20a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8l-7 5V8l-7 5V4a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"/><path d="M17 18h1M12 18h1M7 18h1"/>',
    wrench: '<path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/>',
    coins: '<circle cx="8" cy="8" r="6"/><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4M16.71 13.88l.7.71-2.82 2.82"/>',
    pkg: '<path d="m7.5 4.27 9 5.15M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"/><path d="m3.3 7 8.7 5 8.7-5M12 22V12"/>',
    contact: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="12" cy="10" r="3"/><path d="M7 21v-2a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2"/>',
    shield: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="m9 12 2 2 4-4"/>',
    shieldalert: '<path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"/><path d="M12 8v4M12 16h.01"/>',
    bell: '<path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/><path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>',
    down: '<path d="m6 9 6 6 6-6"/>', right: '<path d="m9 18 6-6-6-6"/>', updown: '<path d="m7 15 5 5 5-5M7 9l5-5 5 5"/>',
    back: '<path d="m12 19-7-7 7-7M19 12H5"/>', check: '<path d="M20 6 9 17l-5-5"/>', x: '<path d="M18 6 6 18M6 6l12 12"/>',
    search: '<circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>',
    camera: '<path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"/><circle cx="12" cy="13" r="3"/>',
    image: '<rect width="18" height="18" x="3" y="3" rx="2"/><circle cx="9" cy="9" r="2"/><path d="m21 15-3.1-3.1a2 2 0 0 0-2.8 0L6 21"/>',
    mic: '<path d="M12 2a3 3 0 0 0-3 3v7a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z"/><path d="M19 10v2a7 7 0 0 1-14 0v-2M12 19v3"/>',
    pin: '<path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/>',
    star: '<path d="M11.5 2.3a.53.53 0 0 1 1 0l2.3 4.67a2.12 2.12 0 0 0 1.6 1.16l5.16.76a.53.53 0 0 1 .3.9l-3.74 3.63a2.12 2.12 0 0 0-.61 1.88l.88 5.14a.53.53 0 0 1-.77.56l-4.6-2.43a2.12 2.12 0 0 0-1.97 0L6.4 21.01a.53.53 0 0 1-.77-.56l.88-5.13a2.12 2.12 0 0 0-.61-1.88L2.16 9.8a.53.53 0 0 1 .3-.9l5.15-.76a2.12 2.12 0 0 0 1.6-1.16z"/>',
    plus: '<path d="M5 12h14M12 5v14"/>',
    printer: '<path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"/><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"/><rect x="6" y="14" width="12" height="8" rx="1"/>',
    grid: '<rect width="7" height="7" x="3" y="3" rx="1"/><rect width="7" height="7" x="14" y="3" rx="1"/><rect width="7" height="7" x="14" y="14" rx="1"/><rect width="7" height="7" x="3" y="14" rx="1"/>',
    building: '<rect width="16" height="20" x="4" y="2" rx="2"/><path d="M9 22v-4h6v4M8 6h.01M16 6h.01M12 6h.01M12 10h.01M12 14h.01M16 10h.01M16 14h.01M8 10h.01M8 14h.01"/>',
    tree: '<path d="m17 14 3 3.3a1 1 0 0 1-.7 1.7H4.7a1 1 0 0 1-.7-1.7L7 14h-.3a1 1 0 0 1-.7-1.7L9 9h-.2A1 1 0 0 1 8 7.3L12 3l4 4.3a1 1 0 0 1-.8 1.7H15l3 3.3a1 1 0 0 1-.7 1.7H17Z"/><path d="M12 22v-3"/>',
    drop: '<path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z"/>',
    thermo: '<path d="M14 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"/>',
    volume: '<path d="M11 4.7a.7.7 0 0 0-1.2-.5L6.4 7.6A1.4 1.4 0 0 1 5.4 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.4a1.4 1.4 0 0 1 1 .4l3.4 3.4a.7.7 0 0 0 1.2-.5z"/><path d="M16 9a5 5 0 0 1 0 6M19.4 18.4a9 9 0 0 0 0-12.7"/>',
    vibrate: '<path d="m2 8 2 2-2 2 2 2-2 2M22 8l-2 2 2 2-2 2 2 2"/><rect width="8" height="14" x="8" y="5" rx="1"/>',
    power: '<path d="M12 2v10"/><path d="M18.4 6.6a9 9 0 1 1-12.77.04"/>',
    zap: '<path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"/>',
    clock: '<circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>',
    cal: '<rect width="18" height="18" x="3" y="4" rx="2"/><path d="M16 2v4M8 2v4M3 10h18"/>',
    user: '<circle cx="12" cy="8" r="5"/><path d="M20 21a8 8 0 0 0-16 0"/>',
    expand: '<path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>', cols: '<rect width="18" height="18" x="3" y="3" rx="2"/><path d="M12 3v18"/>',
    dl: '<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3"/>',
    file: '<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"/><path d="M14 2v4a2 2 0 0 0 2 2h4"/>',
    list: '<path d="m3 17 2 2 4-4M3 7l2 2 4-4M13 6h8M13 12h8M13 18h8"/>',
    pencil: '<path d="M21.17 6.81a1 1 0 0 0-3.99-3.99L3.84 16.17a2 2 0 0 0-.5.83l-1.32 4.35a.5.5 0 0 0 .62.62l4.35-1.32a2 2 0 0 0 .83-.5z"/>',
    phone: '<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.8 19.8 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.8 19.8 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z"/>',
    info: '<circle cx="12" cy="12" r="10"/><path d="M12 16v-4M12 8h.01"/>',
    alert: '<path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"/><path d="M12 9v4M12 17h.01"/>',
    qr: '<rect width="5" height="5" x="3" y="3" rx="1"/><rect width="5" height="5" x="16" y="3" rx="1"/><rect width="5" height="5" x="3" y="16" rx="1"/><path d="M21 16h-3a2 2 0 0 0-2 2v3M21 21v.01M12 7v3a2 2 0 0 1-2 2H7M3 12h.01M12 3h.01M12 16v.01M16 12h1M21 12v.01M12 21v-1"/>',
    send: '<path d="M14.54 21.69a.5.5 0 0 0 .94-.03l6.5-19a.5.5 0 0 0-.64-.64l-19 6.5a.5.5 0 0 0-.03.94l7.93 3.18a2 2 0 0 1 1.11 1.11z"/><path d="m21.85 2.15-10.94 10.93"/>',
  };
  const ic = (n, s) => `<svg class="ic" viewBox="0 0 24 24" width="${s || 20}" height="${s || 20}" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true">${IC[n] || ''}</svg>`;

  /* ── แถบบน (เหมือนโปรแกรมจริง) ── */
  const MENU = [['bag', 'ขาย'], ['cart', 'จัดซื้อ'], ['clip', 'วางแผน'], ['factory', 'ผลิต'], ['wrench', 'ซ่อมบำรุง'], ['coins', 'ต้นทุน'], ['pkg', 'คลังสินค้า'], ['contact', 'ข้อมูลหลัก'], ['shield', 'ผู้ดูแลระบบ']];
  function header(h) {
    const on = h.dataset.menu || 'ซ่อมบำรุง', user = h.dataset.user || 'วรวุฒิ เจริญผล';
    h.innerHTML = `<div class="hd-brand"><span class="hd-logo">${ic('factory', 23)}</span><span>VibeOps</span></div>
      <nav>${MENU.map(([i, t]) => `<a${t === on ? ' aria-current="page"' : ''}>${ic(i, 19)}<span>${t}</span></a>`).join('')}</nav>
      <div class="hd-acc"><span class="hd-bell">${ic('bell', 22)}<b>14</b></span><span class="hd-lang">TH ${ic('down', 14)}</span>
      <span class="hd-user">${user} ${ic('down', 14)}</span><span class="hd-av">${user[0]}</span></div>`;
  }

  /* ── ตัวช่วยของแต่ละขั้น ── */
  function mk(fast, my) {
    const chk = () => { if (my !== tok) throw CANCEL; };
    const w = async ms => { chk(); if (!fast) await sleep(ms); chk(); };
    const els = x => typeof x === 'string' ? [...stage.querySelectorAll(x)] : (x.length !== undefined ? [...x] : [x]);
    function $(x) {
      if (typeof x !== 'string') return x;
      if (x[0] !== '@') { const e = stage.querySelector(x); if (!e) throw new Error('ไม่พบ ' + x); return e; }
      const t = x.slice(1);
      const c = [...stage.querySelectorAll('button,a,.tile,.chip,.opt,tr,.seg>*,li,[data-t]')].filter(e => e.offsetParent !== null && e.textContent.replace(/\s+/g, ' ').includes(t));
      const inner = c.filter(e => !c.some(o => o !== e && e.contains(o)));
      if (!inner.length) throw new Error('ไม่พบ "' + t + '"');
      return inner[0];
    }
    const cur = () => stage.querySelector('.cur');
    function center(el) {
      const s = stage._s || 1, r = el.getBoundingClientRect(), b = stage.getBoundingClientRect();
      return [(r.left - b.left + r.width / 2) / s, (r.top - b.top + r.height / 2) / s];
    }
    const a = {
      fast, $, w, ic,
      async move(x, dx = 0, dy = 0) {
        const el = $(x), [cx, cy] = center(el), c = cur();
        c.style.opacity = 1; c.style.left = (cx + dx) + 'px'; c.style.top = (cy + dy) + 'px';
        await w(620);
      },
      async click(x, then) {
        const el = $(x);
        await a.move(el);
        if (!fast) {
          const c = cur(), r = document.createElement('i');
          r.className = 'rip'; r.style.left = c.style.left; r.style.top = c.style.top; stage.appendChild(r);
          setTimeout(() => r.remove(), 700);
          el.classList.add('pressed'); setTimeout(() => el.classList.remove('pressed'), 180);
        }
        await w(160);
        if (then) await then(el);
        await w(160);
        return el;
      },
      async type(x, text, ms = 38) {
        const el = $(x), inp = 'value' in el && el.tagName !== 'BUTTON' && el.tagName !== 'LI';
        el.classList.add('focus');
        if (fast) { inp ? el.value = text : el.textContent = text; }
        else for (let i = 1; i <= text.length; i++) { const t = text.slice(0, i); inp ? el.value = t : el.textContent = t; await w(ms); }
        el.classList.remove('focus'); el.classList.add('filled');
      },
      async count(x, to, o = {}) {
        const el = $(x), dec = o.dec || 0, from = o.from != null ? o.from : 0, dur = o.dur || 900;
        const f = v => v.toLocaleString('en-US', { minimumFractionDigits: dec, maximumFractionDigits: dec });
        if (fast) { el.textContent = f(to); return; }
        const t0 = performance.now(), D = dur / deck.rate;
        await new Promise(res => {
          const st = now => {
            if (my !== tok) return res();
            const k = Math.min(1, (now - t0) / D), e = 1 - Math.pow(1 - k, 3);
            el.textContent = f(from + (to - from) * e);
            k < 1 ? requestAnimationFrame(st) : res();
          };
          requestAnimationFrame(st);
        });
        chk(); el.textContent = f(to);
      },
      show(x, anim = 'fx-in') {
        els(x).forEach(el => {
          el.hidden = false; el.classList.remove('off');
          if (!fast && anim) { el.classList.remove(anim); void el.offsetWidth; el.classList.add(anim); }
        });
      },
      hide(x) { els(x).forEach(el => { el.hidden = true; }); },
      async stagger(x, gap = 90, anim = 'fx-in') { for (const el of els(x)) { a.show(el, anim); await w(gap); } },
      set(x, html) { $(x).innerHTML = html; },
      text(x, t) { const el = $(x); el.textContent = t; if (!fast) { el.classList.remove('fx-flash'); void el.offsetWidth; el.classList.add('fx-flash'); } },
      cls(x, add, rm) { els(x).forEach(el => { if (rm) rm.split(' ').forEach(c => el.classList.remove(c)); if (add) add.split(' ').forEach(c => el.classList.add(c)); }); },
      attr(x, k, v) { els(x).forEach(el => el.setAttribute(k, v)); },
      pick(x) { const el = $(x); [...el.parentElement.children].forEach(c => c.setAttribute('aria-pressed', c === el)); },
      sel(x, on = true) { const el = $(x); if (on) [...el.parentElement.children].forEach(c => c.removeAttribute('aria-selected')); on ? el.setAttribute('aria-selected', 'true') : el.removeAttribute('aria-selected'); },
      badge(x, kind, t) {
        const el = $(x); el.className = 'badge ' + kind; el.textContent = t;
        if (!fast) { el.classList.remove('fx-pop'); void el.offsetWidth; el.classList.add('fx-pop'); }
      },
      toast(x, t, kind = 'ok') {
        const slot = $(x);
        slot.innerHTML = `<span class="toast ${kind}${fast ? '' : ' fx-in'}">${ic(kind === 'ok' ? 'check' : 'info', 18)}${t}</span>`;
      },
      width(x, v) { els(x).forEach(el => el.style.width = v); },
      async scroll(x, top, ms = 600) {
        const el = $(x);
        if (fast) { el.scrollTop = top; return; }
        const s0 = el.scrollTop, t0 = performance.now(), D = ms / deck.rate;
        await new Promise(res => { const st = now => { if (my !== tok) return res(); const k = Math.min(1, (now - t0) / D), e = k < .5 ? 2 * k * k : 1 - Math.pow(-2 * k + 2, 2) / 2; el.scrollTop = s0 + (top - s0) * e; k < 1 ? requestAnimationFrame(st) : res(); }; requestAnimationFrame(st); });
        chk(); el.scrollTop = top;
      },
      off() { cur().style.opacity = 0; },
    };
    return a;
  }

  /* ── เดินขั้น ── */
  const total = () => hi - lo + 1;
  const capOf = k => (cfg.steps[lo + k].cap || '').replace(/<[^>]+>/g, '');
  const caps = () => cfg.steps.slice(lo, hi + 1).map((s, k) => capOf(k));
  function post(m) { if (parent !== window) parent.postMessage(m, '*'); }
  function caption() {
    document.body.dataset.step = at; document.body.dataset.caption = capOf(at);
    const c = document.querySelector('.lv-cap');
    if (c) c.innerHTML = `<b>${at + 1}/${total()}</b> ${capOf(at)}`;
    post({ type: 'live-state', i: at, steps: total(), cap: capOf(at) });
  }
  function reset() { stage.innerHTML = snap; }
  async function replay(to) {
    const my = ++tok; busy = false;
    reset(); stage.classList.add('nofx');
    const a = mk(true, my);
    try { for (let k = 0; k <= lo + to; k++) await cfg.steps[k].run(a); }
    catch (e) { if (e === CANCEL) return; console.error(e); }
    void stage.offsetWidth; stage.classList.remove('nofx');
    if (my !== tok) return;
    at = to; caption();
  }
  async function animate(to) {
    const my = ++tok; busy = true;
    at = to; caption();
    try { await cfg.steps[lo + to].run(mk(false, my)); }
    catch (e) { if (e !== CANCEL) console.error(e); return; }
    if (my === tok) { busy = false; post({ type: 'live-done', i: at, steps: total() }); }
  }
  deck.steps = () => total();
  deck.step = () => at;
  deck.caps = caps;
  deck.busy = () => busy;
  deck.goto = i => replay(Math.max(0, Math.min(total() - 1, i)));
  deck.next = async () => {
    if (busy) { await replay(at); return true; }
    if (at + 1 >= total()) return false;
    await animate(at + 1); return true;
  };
  deck.back = () => { if (at <= 0) return false; replay(at - 1); return true; };

  addEventListener('message', e => {
    const m = e.data || {};
    if (m.type === 'hello') { post({ type: 'live-ready', steps: total(), caps: caps() }); caption(); }
    else if (m.type === 'step') {
      const i = Math.max(0, Math.min(total() - 1, m.i | 0));
      if (i === at + 1 && !m.fast && !busy) animate(i); else if (i !== at || busy || m.fast) replay(i);
    } else if (m.type === 'end') replay(total() - 1);
  });
  addEventListener('keydown', e => {
    if (parent !== window) { post({ type: 'live-key', key: e.key }); e.preventDefault(); return; }
    if (['ArrowRight', ' ', 'Enter', 'PageDown'].includes(e.key)) { e.preventDefault(); deck.next(); }
    if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); deck.back(); }
  });
  addEventListener('click', () => { if (parent === window) deck.next(); });

  function fit() {
    const s = Math.min(innerWidth / W, innerHeight / H);
    stage._s = s;
    stage.style.transform = `translate(${(innerWidth - W * s) / 2}px,${(innerHeight - H * s) / 2}px) scale(${s})`;
  }

  window.LIVE = {
    ic,
    run(c) {
      cfg = c;
      stage = document.querySelector('.stage');
      const r = (Q.get('range') || '').split('-').map(Number);
      lo = r.length === 2 && !isNaN(r[0]) ? r[0] : 0;
      hi = r.length === 2 && !isNaN(r[1]) ? Math.min(r[1], c.steps.length - 1) : c.steps.length - 1;
      if (c.build) c.build(stage);
      stage.querySelectorAll('header.hd').forEach(header);
      stage.querySelectorAll('[data-ic]').forEach(e => { e.outerHTML = ic(e.dataset.ic, +e.dataset.s || 20); });
      stage.insertAdjacentHTML('beforeend', '<div class="cur" style="left:1250px;top:700px;opacity:0"><svg width="28" height="28" viewBox="0 0 24 24"><path d="M4 2.5 19.5 13l-6.6 1.1 3.9 6.6-2.6 1.5-3.9-6.7L5.6 20Z" fill="#fff" stroke="#202027" stroke-width="1.4" stroke-linejoin="round"/></svg></div>');
      snap = stage.innerHTML;
      document.body.dataset.captions = JSON.stringify(caps());
      if (Q.has('cap')) document.body.insertAdjacentHTML('beforeend', '<div class="lv-cap"></div>');
      addEventListener('resize', fit); fit();
      const start = Math.max(0, Math.min(total() - 1, +(Q.get('at') || 0)));
      const go = () => replay(start).then(() => {
        readyRes(true);
        post({ type: 'live-ready', steps: total(), caps: caps() });
        if (Q.has('auto')) (async function loop() { await sleep(700); while (await deck.next()) await sleep(1100); })();
      });
      (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go);
    }
  };
})();
