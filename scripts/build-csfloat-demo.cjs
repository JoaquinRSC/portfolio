/*
 * Builds public/demos/csfloat/index.html from the CSFloat project's real UI
 * (public/index.html), injecting the demo mock layer (csfloat-demo-mock.js) so
 * the full dashboard runs on sample data with NO backend, NO API keys, and NO
 * real account data. Re-run after changing the CSFloat UI or the mock.
 */
const fs = require('fs')
const path = require('path')

const SRC = 'C:\\Users\\Joaquin\\Desktop\\csfloat-buyorders\\public\\index.html'
const MOCK = path.join(__dirname, 'csfloat-demo-mock.js')
const OUT = path.join(__dirname, '..', 'public', 'demos', 'csfloat', 'index.html')

let html = fs.readFileSync(SRC, 'utf8')
const mockJs = fs.readFileSync(MOCK, 'utf8')

const mockTag = '<script>\n' + mockJs + '\n</script>\n'
const banner =
  '<div style="background:rgba(34,197,94,.12);color:#22c55e;text-align:center;' +
  'padding:6px 12px;font-size:12px;font-weight:600;' +
  'border-bottom:1px solid rgba(34,197,94,.25);flex-shrink:0;">' +
  'Demo · datos de ejemplo · sin backend ni conexión a APIs reales' +
  '</div>\n'

// 1. Inject the mock before the app's inline script runs.
if (!html.includes('</head>')) throw new Error('no </head> found')
html = html.replace('</head>', mockTag + '</head>')

// 2. Add the demo banner as the first child of #app.
if (!html.includes('<div id="app">')) throw new Error('no #app found')
html = html.replace('<div id="app">', '<div id="app">\n' + banner)

// 3. Make the run modal copy demo-appropriate (it mentions real funds).
html = html.replace(
  'Skins will be scanned and buy orders placed using real funds from your CSFloat account.',
  'Demo — no real orders are placed. This simulates the scan and order-placement flow with sample data.',
)

// 4. Neutralize the logout link (there is no backend here).
html = html.replace('href="/logout"', 'href="#" onclick="return false"')

// 5. Demo chrome: hide scrollbars for a cleaner look and add a floating
//    "back to portfolio" link that only shows when opened in its own tab
//    (not inside the portfolio iframe, which already has a close button).
const demoChrome =
  '<style>' +
  'html{scrollbar-width:none;-ms-overflow-style:none;}' +
  '*::-webkit-scrollbar{width:0;height:0;display:none;}' +
  '.demo-back{position:fixed;left:12px;bottom:12px;z-index:99999;display:none;' +
  'align-items:center;gap:6px;padding:9px 14px;border-radius:999px;' +
  "font:600 13px/1 'Inter',system-ui,sans-serif;color:#e8edf8;" +
  'background:rgba(6,8,16,.85);border:1px solid rgba(59,130,246,.4);' +
  'box-shadow:0 6px 24px rgba(0,0,0,.5);backdrop-filter:blur(6px);' +
  'text-decoration:none;}' +
  '.demo-back:hover{border-color:#3b82f6;color:#3b82f6;}' +
  '</style>\n'
html = html.replace('</head>', demoChrome + '</head>')

const backLink =
  '<a href="/#projects" class="demo-back" id="demo-back">&larr; Portfolio</a>' +
  "<script>if(window.self===window.top){var b=document.getElementById('demo-back');" +
  "if(b)b.style.display='inline-flex';}</script>\n"
if (!html.includes('</body>')) throw new Error('no </body> found')
html = html.replace('</body>', backLink + '</body>')

fs.mkdirSync(path.dirname(OUT), { recursive: true })
fs.writeFileSync(OUT, html)
console.log('wrote', OUT, '(' + html.length + ' bytes)')
