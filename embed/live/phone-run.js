/* phone-run.js — เล่นจอมือถือทีละขั้น (หน้าจอจำลอง · ข้อมูลตัวอย่าง)
   ใช้คู่กับ phone-kit.js (ข้อมูลจอจากต้นแบบที่อนุมัติแล้ว) + phone-run.css
   หน้า phone-*.html เรียก PR.run({start:'r1', steps:[{cap, run:async a=>{...}}]})

   API (เหมือน ref-ctl.js ของ deck ตัวอย่าง):
     window.deck.ready (Promise) · deck.steps() จำนวนสถานะ · deck.step() สถานะปัจจุบัน (0 = สถานะแรก)
     deck.next() เล่นขั้นถัดไป (Promise · false ถ้าหมดแล้ว) · deck.back() · deck.goto(i) ข้ามทันที
   คุยกับ deck แม่ผ่าน postMessage:
     แม่ → ลูก {type:'step', i} (i = cur+1 เล่นแอนิเมชัน · อื่นๆ ข้ามทันที) · {type:'hello'} ขอสถานะ · {type:'end'} ไปขั้นสุดท้าย
     ลูก → แม่ {type:'live-ready', steps, caps} · {type:'live-state', i, steps, cap} · {type:'live-key', key}
   URL: ?range=a-b ใช้เฉพาะขั้น a..b ของสคริปต์ (ใช้หน้าเดียวกันได้หลายสไลด์) · ?auto เล่นเอง · ?nocap ไม่แสดงคำบรรยาย */
(function () {
  const Q = new URLSearchParams(location.search);
  const CANCEL = { cancel: true };
  let cfg, screens = {}, cur = null, tok = 0, at = 0, busy = false, readyRes, lo = 0, hi = 0, timerIv = null;
  const deck = { rate: 1, ready: new Promise(r => readyRes = r) };
  window.deck = deck;

  const stage = () => document.querySelector('.pr-phone');
  const sleep = ms => new Promise(r => setTimeout(r, ms / deck.rate));

  function buildScreens() {
    const ph = stage();
    ph.querySelectorAll('.screen').forEach(s => s.remove());
    screens = {};
    const tmp = document.createElement('div');
    for (const f of PK.F.concat(cfg.extra || [])) {
      tmp.innerHTML = PK.phone(f);
      const s = tmp.querySelector('.screen');
      s.dataset.sid = f.id;
      s.querySelectorAll('[data-go]').forEach(e => e.removeAttribute('data-go'));
      ph.appendChild(s);
      screens[f.id] = s;
    }
    cur = null;
  }

  /* ── ตัวช่วยของแต่ละขั้น ── */
  function mk(fast, my) {
    const chk = () => { if (my !== tok) throw CANCEL; };
    const W = async ms => { chk(); if (!fast) await sleep(ms); chk(); };
    const scr = () => screens[cur];
    function find(x, root) {
      root = root || scr();
      if (typeof x !== 'string') return x;
      if (x[0] !== '@') { const e = root.querySelector(x); if (!e) throw new Error('ไม่พบ ' + x + ' ใน ' + cur); return e; }
      const t = x.slice(1);
      const c = [...root.querySelectorAll('button,.row,.tile,.pk,.opt,a,.tab,.trail button,[data-t]')]
        .filter(e => e.textContent.replace(/\s+/g, ' ').includes(t));
      const inner = c.filter(e => !c.some(o => o !== e && e.contains(o)));
      if (!inner.length) throw new Error('ไม่พบปุ่ม "' + t + '" ใน ' + cur);
      return inner[0];
    }
    async function reveal(el) {
      const main = el.closest('.main');
      if (!main) return;
      const r = el.getBoundingClientRect(), m = main.getBoundingClientRect();
      if (r.top >= m.top + 8 && r.bottom <= m.bottom - 8) return;
      const target = main.scrollTop + (r.top - m.top) - Math.max(12, (m.height - r.height) / 2.4);
      if (fast) { main.scrollTop = target; return; }
      main.scrollTo({ top: target, behavior: 'smooth' });
      await W(420);
    }
    const a = {
      fast, find,
      wait: W,
      get screen() { return scr(); },
      async go(id, dir) {
        chk();
        const nx = screens[id]; if (!nx) throw new Error('ไม่มีจอ ' + id);
        const old = cur ? screens[cur] : null;
        cur = id;
        nx.querySelector('.main') && (nx.querySelector('.main').scrollTop = 0);
        if (fast || !old) {
          Object.values(screens).forEach(s => { s.className = s.className.replace(/\bpr-(on|in|out|back)\b/g, '').trim(); });
          nx.classList.add('pr-on');
          return;
        }
        // กันจอค้างซ้อน: จอที่ไม่ใช่จอเก่า/จอใหม่ ต้องไม่ค้าง pr-on/pr-out (เกิดเมื่อกดถัดไปเร็วระหว่างเลื่อนจอ)
        Object.entries(screens).forEach(([k, s]) => { if (s !== nx && s !== old) s.classList.remove('pr-on', 'pr-out', 'pr-in', 'pr-back'); });
        nx.classList.remove('pr-on', 'pr-out'); nx.classList.add('pr-in'); if (dir === 'back') nx.classList.add('pr-back');
        void nx.offsetWidth;
        old.classList.add('pr-out'); if (dir === 'back') old.classList.add('pr-back');
        nx.classList.add('pr-on'); nx.classList.remove('pr-in');
        // เก็บกวาดด้วยตัวจับเวลาที่ไม่ผูกกับขั้น — ถ้าขั้นถูกยกเลิกกลางทาง จอเก่าจะไม่ค้างซ้อนอยู่ข้างหลัง
        setTimeout(() => { Object.entries(screens).forEach(([k, s]) => { if (k !== cur) s.classList.remove('pr-on', 'pr-out', 'pr-in', 'pr-back'); }); }, 480);
        await W(460);
        Object.entries(screens).forEach(([k, s]) => { if (k !== cur) s.classList.remove('pr-on', 'pr-out', 'pr-in', 'pr-back'); });
        screens[cur].classList.remove('pr-back', 'pr-in', 'pr-out'); screens[cur].classList.add('pr-on');
      },
      async tap(x, opt = {}) {
        chk();
        const el = find(x);
        await reveal(el);
        if (!fast) {
          const ph = stage(), r = el.getBoundingClientRect(), p = ph.getBoundingClientRect(), k = p.width / ph.offsetWidth;
          const t = document.createElement('i');
          t.className = 'pr-touch';
          const cx = opt.x != null ? opt.x : .5, cy = opt.y != null ? opt.y : .5;
          t.style.left = ((r.left - p.left + r.width * cx) / k) + 'px';
          t.style.top = ((r.top - p.top + r.height * cy) / k) + 'px';
          ph.appendChild(t);
          await W(330);
          el.classList.add('pr-press');
          await W(170);
          el.classList.remove('pr-press');
          setTimeout(() => t.remove(), 700);
        }
        if (opt.press !== false) press(el);
        await W(opt.after != null ? opt.after : 260);
        return el;
      },
      async type(x, text, opt = {}) {
        chk();
        const el = find(x);
        await reveal(el);
        const keep = el.querySelector('.caret');
        const set = s => { el.textContent = s; if (keep) el.appendChild(keep); };
        if (fast) { set(text); opt.each && opt.each(text); return; }
        el.classList.add('pr-typing');
        for (let n = 1; n <= text.length; n++) { set(text.slice(0, n)); opt.each && opt.each(text.slice(0, n)); await W(opt.ms || 38); }
        el.classList.remove('pr-typing');
        await W(200);
      },
      set(x, fn) { chk(); const el = find(x); fn(el); return el; },
      html(x, h) { chk(); const el = find(x); el.innerHTML = h; return el; },
      cls(x, c, on = true) { chk(); const el = find(x); el.classList.toggle(c, on); return el; },
      async pop(x) { chk(); const el = find(x); el.classList.remove('pr-hide'); if (!fast) { el.classList.add('pr-pop'); await reveal(el); await W(380); el.classList.remove('pr-pop'); } return el; },
      async toast(title, sub, ms = 1100) {
        chk();
        const s = scr(); s.querySelectorAll('.pr-toast').forEach(t => t.remove());
        const t = document.createElement('div');
        t.className = 'pr-toast' + (fast ? ' on' : '');
        t.innerHTML = PK.I('cloudok') + '<span><b>' + title + '</b>' + (sub ? '<small>' + sub + '</small>' : '') + '</span>';
        s.appendChild(t);
        if (!fast) { void t.offsetWidth; t.classList.add('on'); await W(ms); }
      },
      clearToast() { scr().querySelectorAll('.pr-toast').forEach(t => t.remove()); },
      async scan(label, ok, kind) {
        chk();
        const s = scr();
        const v = document.createElement('div');
        v.className = 'pr-scan';
        v.innerHTML = '<div class="vf' + (kind ? ' ' + kind : '') + '"><i class="ln"></i></div><p>' + label + '</p>';
        s.appendChild(v);
        if (!fast) { void v.offsetWidth; v.classList.add('on'); await W(1100); v.querySelector('p').innerHTML = PK.I('check') + ok; v.classList.add('ok'); await W(650); v.classList.remove('on'); await W(260); }
        v.remove();
      },
      timer(x, from) {
        clearInterval(timerIv);
        const el = find(x); let sec = from;
        const pad = n => String(n).padStart(2, '0');
        const show = () => { el.textContent = pad(sec / 3600 | 0) + ':' + pad((sec / 60 | 0) % 60) + ':' + pad(sec % 60); };
        show(); timerIv = setInterval(() => { sec++; show(); }, 1000);
      },
      stopTimer() { clearInterval(timerIv); },
      scrollTo(y) { const m = scr().querySelector('.main'); if (!m) return; if (fast) m.scrollTop = y; else m.scrollTo({ top: y, behavior: 'smooth' }); return W(400); },
    };
    return a;
  }

  // กดแล้วเลือก: กลุ่ม data-pick เลือกได้อันเดียว · data-multi สลับ · ดาวเติมถึงดวงที่กด
  function press(el) {
    if (el.matches('[data-stars] button')) { const all = [...el.parentElement.children], i = all.indexOf(el); all.forEach((c, j) => c.classList.toggle('on', j <= i)); return; }
    if (!el.hasAttribute('aria-pressed')) return;
    const g = el.parentElement;
    if (g.hasAttribute('data-multi')) el.setAttribute('aria-pressed', el.getAttribute('aria-pressed') !== 'true');
    else [...g.children].forEach(c => c.hasAttribute('aria-pressed') && c.setAttribute('aria-pressed', c === el));
  }

  /* ── เดินขั้น ── */
  const total = () => hi - lo + 1;
  function post(m) { if (parent !== window) parent.postMessage(m, '*'); }
  function caption() {
    const c = document.querySelector('.pr-cap');
    const st = cfg.steps[lo + at];
    if (c) { c.querySelector('.n').textContent = at + 1; c.querySelector('.t').innerHTML = st.cap; c.querySelector('.of').textContent = '/ ' + total(); }
    document.querySelector('.pr-dots') && (document.querySelector('.pr-dots').innerHTML = Array.from({ length: total() }, (_, k) => `<i class="${k < at ? 'd' : k === at ? 'c' : ''}"></i>`).join(''));
    post({ type: 'live-state', i: at, steps: total(), cap: st.cap.replace(/<\/b>\s*<small>/g, ' · ').replace(/<[^>]+>/g, '') });
  }
  async function replay(to) {
    const my = ++tok; busy = false;
    clearInterval(timerIv);
    buildScreens();
    const a = mk(true, my);
    try { for (let k = 0; k <= lo + to; k++) await cfg.steps[k].run(a); }
    catch (e) { if (e !== CANCEL) console.error('phone-run replay:', e && e.message || e); return; }
    if (my !== tok) return;
    at = to; caption();
  }
  async function animate(to) {
    const my = ++tok; busy = true;
    at = to; caption();
    try { await cfg.steps[lo + to].run(mk(false, my)); }
    catch (e) { if (e !== CANCEL) { console.error(e); } return; }
    if (my === tok) { busy = false; post({ type: 'live-done', i: at, steps: total() }); }
  }
  deck.steps = () => total();
  deck.caps = () => cfg.steps.slice(lo, hi + 1).map(s => s.cap.replace(/<\/b>\s*<small>/g, ' · ').replace(/<[^>]+>/g, ''));
  deck.step = () => at;
  deck.busy = () => busy;
  deck.goto = i => replay(Math.max(0, Math.min(total() - 1, i)));
  deck.next = async () => {
    if (busy) { await replay(at); return true; }   // กดระหว่างเล่น = จบขั้นนี้ทันที
    if (at + 1 >= total()) return false;
    await animate(at + 1); return true;
  };
  deck.back = () => { if (at <= 0) return false; replay(at - 1); return true; };

  addEventListener('message', e => {
    const m = e.data || {};
    if (m.type === 'hello') post({ type: 'live-ready', steps: total(), caps: cfg.steps.slice(lo, hi + 1).map(s => s.cap.replace(/<\/b>\s*<small>/g, ' · ').replace(/<[^>]+>/g, '')) }), caption();
    else if (m.type === 'step') {
      const i = Math.max(0, Math.min(total() - 1, m.i | 0));
      if (i === at + 1 && !m.fast) animate(i); else if (i !== at || busy || m.fast) replay(i);
    } else if (m.type === 'end') replay(total() - 1);
  });
  addEventListener('keydown', e => {
    if (parent !== window) { post({ type: 'live-key', key: e.key }); e.preventDefault(); return; }
    if (['ArrowRight', ' ', 'Enter', 'PageDown'].includes(e.key)) { e.preventDefault(); deck.next(); }
    if (['ArrowLeft', 'PageUp', 'Backspace'].includes(e.key)) { e.preventDefault(); deck.back(); }
  });
  addEventListener('click', () => { if (parent === window) deck.next(); });

  function fit() {
    const w = document.querySelector('.pr-wrap'); if (!w) return;
    const s = Math.min(innerWidth / w.offsetWidth, innerHeight / w.offsetHeight);
    w.style.transform = 'translate(-50%,-50%) scale(' + s + ')';
  }

  window.PR = {
    run(c) {
      cfg = c;
      const r = (Q.get('range') || '').split('-').map(Number);
      lo = r.length === 2 && !isNaN(r[0]) ? r[0] : 0;
      hi = r.length === 2 && !isNaN(r[1]) ? Math.min(r[1], c.steps.length - 1) : c.steps.length - 1;
      document.body.insertAdjacentHTML('afterbegin', PK_SPRITE);
      document.body.insertAdjacentHTML('beforeend',
        `<div class="pr-wrap${Q.has('nocap') ? ' nocap' : ''}"><div class="pr-cap"><span class="n"></span><span class="t"></span><span class="of"></span></div>` +
        `<div class="pr-phone phone"><span class="pr-role">${c.role || ''}</span></div><div class="pr-dots"></div></div>`);
      addEventListener('resize', fit); fit();
      const go = () => replay(0).then(() => {
        fit(); readyRes(true);
        post({ type: 'live-ready', steps: total(), caps: c.steps.slice(lo, hi + 1).map(s => s.cap.replace(/<\/b>\s*<small>/g, ' · ').replace(/<[^>]+>/g, '')) });
        if (Q.has('auto')) (async function loop() { while (await deck.next()) await sleep(900); })();
      });
      (document.fonts && document.fonts.ready ? document.fonts.ready : Promise.resolve()).then(go).catch(e => console.error('phone-run:', e));
    }
  };
})();
