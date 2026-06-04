/*
 * CSFloat demo mock layer.
 * Intercepts window.fetch and window.EventSource so the real CSFloat dashboard
 * runs entirely on sample data: NO backend, NO API keys, NO real account data.
 * Injected into the demo build by scripts/build-csfloat-demo.cjs.
 */
(function () {
  const nowIso = () => new Date().toISOString();

  // Sample flip opportunities for the Opportunities panel.
  const OPPS = [
    { name: 'AK-47 | Redline (Field-Tested)', csfloatPrice: 12.4, buffBO: 18.9, ratio: 0.656 },
    { name: 'M4A1-S | Hyper Beast (Minimal Wear)', csfloatPrice: 9.8, buffBO: 16.2, ratio: 0.605 },
    { name: 'Glock-18 | Water Elemental (Factory New)', csfloatPrice: 5.1, buffBO: 8.7, ratio: 0.586 },
    { name: 'Five-SeveN | Case Hardened (Field-Tested)', csfloatPrice: 3.2, buffBO: 5.4, ratio: 0.593 },
    {
      name: 'USP-S | Kill Confirmed (Minimal Wear)',
      csfloatPrice: 28.5, buffBO: 41.0, ratio: 0.695, betterWearWarning: true,
      wearLadder: [
        { abbr: 'FN', csfloatPrice: 64.0, ratio: 0.78, isCurrent: false, isWarn: false },
        { abbr: 'MW', csfloatPrice: 28.5, ratio: 0.695, isCurrent: true, isWarn: false },
        { abbr: 'FT', csfloatPrice: 26.9, ratio: 0.66, isCurrent: false, isWarn: true },
      ],
    },
    { name: 'AWP | Asiimov (Field-Tested)', csfloatPrice: 38.1, buffBO: 52.0, ratio: 0.733 },
    { name: 'Galil AR | Chatterbox (Field-Tested)', csfloatPrice: 11.3, buffBO: 15.6, ratio: 0.724 },
    { name: 'Desert Eagle | Blaze (Factory New)', csfloatPrice: 47.0, buffBO: 60.0, ratio: 0.783 },
    { name: 'MAC-10 | Neon Rider (Factory New)', csfloatPrice: 3.8, buffBO: 5.1, ratio: 0.745 },
  ];

  // Skin pool the simulated scan iterates over.
  const SKINS = [
    'AK-47 | Redline (Field-Tested)', 'AWP | Asiimov (Field-Tested)', 'M4A4 | Desolate Space (Minimal Wear)',
    'Glock-18 | Water Elemental (Factory New)', 'USP-S | Kill Confirmed (Minimal Wear)', 'Desert Eagle | Blaze (Factory New)',
    'AK-47 | Asiimov (Field-Tested)', 'M4A1-S | Hyper Beast (Minimal Wear)', 'AWP | Hyper Beast (Field-Tested)',
    'Five-SeveN | Case Hardened (Field-Tested)', 'P250 | Asiimov (Factory New)', 'MAC-10 | Neon Rider (Factory New)',
    'SSG 08 | Dragonfire (Field-Tested)', 'Galil AR | Chatterbox (Field-Tested)', 'MP9 | Starlight Protector (Factory New)',
    'Tec-9 | Fuel Injector (Factory New)', 'AUG | Chameleon (Field-Tested)', 'FAMAS | Roll Cage (Minimal Wear)',
  ];

  // ── fetch shim ──────────────────────────────────────────────────────────────
  const reply = (obj) => Promise.resolve({ ok: true, status: 200, json: () => Promise.resolve(obj) });
  const realFetch = window.fetch ? window.fetch.bind(window) : null;
  window.fetch = function (url, opts) {
    const u = String(url);
    if (u.includes('/orders-count')) return reply({ count: 16, limit: 150 });
    if (u.includes('/state')) return reply({ hasSavedState: false });
    if (u.includes('/last-scan')) return reply({ hasLastScan: false });
    if (u.includes('/scanner/pause')) {
      const body = opts && opts.body ? JSON.parse(opts.body) : {};
      return reply({ paused: !!body.paused });
    }
    if (u.includes('/scanner/config')) return reply({ ok: true });
    if (u.includes('/sync-purchases')) return reply({ added: 0, alreadySynced: 42 });
    if (u.includes('/buff-result')) return reply({ ok: true });
    if (u.includes('/pause')) return reply({ ok: true });
    return realFetch ? realFetch(url, opts) : reply({});
  };

  // ── EventSource shim ─────────────────────────────────────────────────────────
  class FakeEventSource {
    constructor(url) {
      this.url = String(url);
      this.onmessage = null;
      this.onerror = null;
      this.readyState = 1;
      this._timers = [];
      this._closed = false;
      this._boot = setTimeout(() => this._start(), 40); // let the app attach handlers first
    }
    _send(obj, delay) {
      const t = setTimeout(() => {
        if (!this._closed && this.onmessage) this.onmessage({ data: JSON.stringify(obj) });
      }, delay);
      this._timers.push(t);
    }
    _start() {
      if (this.url.includes('/scanner/events')) {
        this._send({ type: 'update', opportunities: OPPS, lastRun: nowIso(), paused: false }, 0);
        return;
      }
      if (this.url.includes('delete-all')) {
        this._send({ type: 'info', msg: 'Deleting all active buy orders...' }, 0);
        this._send({ type: 'done', deleted: 16, errors: 0, msg: 'Done' }, 900);
        return;
      }
      if (this.url.includes('maintain')) {
        this._send({ type: 'info', msg: 'Reviewing active buy orders against limits...' }, 0);
        this._send({ type: 'done', updated: 7, deleted: 2, kept: 6, errors: 0, msg: 'Done' }, 1300);
        return;
      }
      // Simulated scan + order placement (the "run" stream).
      const N = 18;
      let delay = 0;
      let placed = 0;
      let skipped = 0;
      this._send({ type: 'info', msg: 'Loading skin pool from Buff163 (sample data)...' }, delay);
      delay += 380;
      this._send({ type: 'info', msg: 'Comparing against CSFloat top buy orders...' }, delay);
      delay += 320;
      for (let i = 0; i < N; i++) {
        const name = SKINS[i % SKINS.length];
        const buffBO = +(2 + Math.random() * 55).toFixed(2);
        const buffAsk = +(buffBO * (1.05 + Math.random() * 0.25)).toFixed(2);
        const ratioPct = +(55 + Math.random() * 45).toFixed(1);
        if (ratioPct <= 70) placed++; else skipped++;
        this._send({ type: 'progress', current: i + 1, total: N, name, buffBO, buffAsk, ratioPct, msg: name }, delay);
        delay += 150;
      }
      this._send({ type: 'done', placed, skipped, errors: 0, msg: 'Scan complete' }, delay + 250);
    }
    close() {
      this._closed = true;
      clearTimeout(this._boot);
      this._timers.forEach(clearTimeout);
    }
  }
  window.EventSource = FakeEventSource;

  // ── Notification stub (avoid permission prompts inside the iframe) ────────────
  window.Notification = function () {};
  window.Notification.permission = 'denied';
  window.Notification.requestPermission = () => Promise.resolve('denied');
})();
