<template>
  <div class="portfolio">
    <div class="bg-grid" aria-hidden="true" />
    <div class="bg-glow" aria-hidden="true" />

    <!-- ── Nav ── -->
    <header class="nav">
      <div class="container nav-inner">
        <nav class="nav-links">
          <a href="#projects">projects</a>
          <a href="#stack">stack</a>
          <a href="#education">education</a>
        </nav>
        <a href="https://github.com/JoaquinRSC" target="_blank" rel="noopener" class="nav-gh">
          <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0 0 24 12c0-6.63-5.37-12-12-12z"/>
          </svg>
          GitHub
        </a>
      </div>
    </header>

    <!-- ── Hero ── -->
    <section class="hero">
      <!-- Perspective grid -->
      <div class="hero-grid-wrap" aria-hidden="true">
        <div class="hero-grid-plane" />
        <div class="hero-grid-fade" />
      </div>
      <!-- Center glow -->
      <div class="hero-center-glow" aria-hidden="true" />

      <div class="container hero-content">
        <div class="hero-pre">// hello, world</div>
        <h1 class="hero-name">
          Hey, I'm <span class="hero-accent">Joaquín</span>.
        </h1>
        <div class="hero-typewriter">
          <span class="typed-text">{{ displayText }}</span><span class="cursor">_</span>
        </div>
        <p class="hero-bio">
          Computer Technology student from Uruguay. Building web apps,
          automating workflows, and exploring data science &amp; AI.
        </p>
        <div class="hero-stats">
          <div class="stat-item">
            <span class="stat-num">5+</span>
            <span class="stat-label">Projects</span>
          </div>
          <span class="stat-sep">/</span>
          <div class="stat-item">
            <span class="stat-num">3+</span>
            <span class="stat-label">Years coding</span>
          </div>
          <span class="stat-sep">/</span>
          <div class="stat-item">
            <span class="stat-num">5</span>
            <span class="stat-label">Languages</span>
          </div>
        </div>
        <div class="hero-actions">
          <a href="#projects" class="btn-primary">View projects</a>
          <a href="https://github.com/JoaquinRSC" target="_blank" rel="noopener" class="btn-ghost">
            GitHub ↗
          </a>
        </div>
      </div>
    </section>

    <!-- ── Projects ── -->
    <section id="projects" class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">// 01 &mdash; projects</div>
          <h2 class="section-title">Things I've built</h2>
          <p class="section-sub">A selection of personal and professional projects</p>
        </div>

        <div class="projects-grid reveal" style="--delay: 0.1s">
          <a
            v-for="project in projects"
            :key="project.name"
            :href="project.url"
            target="_blank"
            rel="noopener"
            class="project-card"
          >
            <div class="project-preview" :style="{ background: project.gradient }">
              <div class="mockup">
                <div class="mockup-bar">
                  <span class="mockup-dot" />
                  <span class="mockup-dot" />
                  <span class="mockup-dot" />
                  <span class="mockup-address" />
                </div>
                <div class="mockup-body">
                  <span class="mockup-line wide" :style="{ background: project.accent + '55' }" />
                  <span class="mockup-line med"  :style="{ background: project.accent + '33' }" />
                  <div class="mockup-row">
                    <span class="mockup-block" :style="{ background: project.accent + '22' }" />
                    <span class="mockup-block" :style="{ background: project.accent + '22' }" />
                    <span class="mockup-block" :style="{ background: project.accent + '22' }" />
                  </div>
                  <span class="mockup-line short" :style="{ background: project.accent + '22' }" />
                </div>
              </div>
              <div class="preview-overlay" />
            </div>

            <div class="project-body">
              <div class="project-header">
                <span class="project-name">{{ project.name }}</span>
                <span v-if="project.live" class="live-badge">Live</span>
              </div>
              <p class="project-desc">{{ project.description }}</p>
              <div class="project-footer">
                <span v-if="project.language" class="lang-badge">
                  <span class="lang-dot" :style="{ background: langColor(project.language) }" />
                  {{ project.language }}
                </span>
                <span class="view-hint">Open ↗</span>
              </div>
            </div>
          </a>
        </div>

        <div class="section-more">
          <a href="https://github.com/JoaquinRSC" target="_blank" rel="noopener" class="more-link">
            View GitHub profile →
          </a>
        </div>
      </div>
    </section>

    <!-- ── Stack ── -->
    <section id="stack" class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">// 02 &mdash; stack</div>
          <h2 class="section-title">Technologies I use</h2>
        </div>
        <div class="stack-sections reveal" style="--delay: 0.1s">
          <div v-for="group in skills" :key="group.cat" class="stack-group">
            <div class="stack-cat-label">
              <span>{{ group.cat }}</span>
            </div>
            <div class="tech-grid">
              <a v-for="tech in group.items" :key="tech.name" :href="tech.url" target="_blank" rel="noopener" class="tech-card">
                <span class="tech-link-icon">↗</span>
                <img
                  :src="tech.icon"
                  :alt="tech.name"
                  class="tech-icon"
                  :class="{ invert: tech.invert }"
                  loading="lazy"
                />
                <span class="tech-name">{{ tech.name }}</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Education ── -->
    <section id="education" class="section">
      <div class="container">
        <div class="section-header reveal">
          <div class="section-label">// 03 &mdash; education</div>
          <h2 class="section-title">Academic background</h2>
        </div>
        <div class="edu-list reveal" style="--delay: 0.1s">
          <div v-for="edu in education" :key="edu.title" class="edu-item">
            <div class="edu-meta">
              <span class="edu-status">{{ edu.status }}</span>
              <span class="edu-institution">{{ edu.institution }}</span>
            </div>
            <div class="edu-body">
              <div class="edu-title">{{ edu.title }}</div>
              <div class="edu-desc">{{ edu.description }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── Footer ── -->
    <footer class="footer">
      <div class="container footer-inner">
        <span class="footer-copy">Built with Vue &amp; Quasar</span>
        <a href="https://github.com/JoaquinRSC" target="_blank" rel="noopener" class="footer-link">
          github.com/JoaquinRSC
        </a>
        <span class="footer-loc">Montevideo, Uruguay</span>
      </div>
    </footer>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

// ── Typewriter ───────────────────────────────────────────────────────────────
const displayText = ref('')
const roles = ['Software Developer.', 'Web Developer.', 'Backend Developer.', 'Problem Solver.']
let roleIdx = 0, charIdx = 0, deleting = false

function tick() {
  const role = roles[roleIdx]
  if (!deleting) {
    displayText.value = role.slice(0, ++charIdx)
    if (charIdx === role.length) {
      deleting = true
      return setTimeout(tick, 1800)
    }
  } else {
    displayText.value = role.slice(0, --charIdx)
    if (charIdx === 0) {
      deleting = false
      roleIdx = (roleIdx + 1) % roles.length
    }
  }
  setTimeout(tick, deleting ? 45 : 85)
}

// ── Scroll reveal ────────────────────────────────────────────────────────────
onMounted(() => {
  tick()

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in-view') }),
    { threshold: 0.07 }
  )
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el))
})

// ── Data ─────────────────────────────────────────────────────────────────────
const LANG_COLORS = {
  JavaScript: '#f1e05a',
  Vue:        '#41b883',
  Python:     '#3572A5',
}
function langColor(lang) { return LANG_COLORS[lang] ?? '#52525b' }

const projects = [
  {
    name: 'CS2 Skin Tracker',
    description: 'Personal investment tracker for CS2 skins. Syncs from Google Sheets, enriches with Buff163 prices, and includes arbitrage detection against skin.land.',
    language: 'Vue',
    url: 'https://skin-tracker-eight.vercel.app',
    live: true,
    gradient: 'linear-gradient(135deg, #0a0f0a 0%, #0d1f0d 50%, #41b88318 100%)',
    accent: '#41b883',
  },
  {
    name: 'CSFloat Buy Orders',
    description: 'Automates CS2 skin buy orders on CSFloat using live Buff163 prices. Features a web UI, SSE-based scanning, ratio caching, and a Tampermonkey userscript for browser-relayed price fetching.',
    language: 'JavaScript',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #1a1400 0%, #2d2200 50%, #f59e0b18 100%)',
    accent: '#f59e0b',
  },
  {
    name: 'Empresa Progreso',
    description: 'Internal management system for a logistics company. Handles contracts, partners, categories, financial ratios, and PDF generation.',
    language: 'Vue',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #0a0f1e 0%, #0d1a35 50%, #3b82f618 100%)',
    accent: '#3b82f6',
  },
  {
    name: 'Pokemon Accounts',
    description: 'Dashboard to manage Pokémon TCG accounts. Tracks published status, credentials, and includes legacy account migration from flat-file storage.',
    language: 'JavaScript',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #0f0a00 0%, #1f1500 50%, #eab30818 100%)',
    accent: '#eab308',
  },
  {
    name: 'MP Tracker',
    description: 'Scraper and tracker for car listings in Montevideo. Monitors price changes and new listings over time.',
    language: 'JavaScript',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #001a14 0%, #00261d 50%, #10b98118 100%)',
    accent: '#10b981',
  },
  {
    name: 'This Portfolio',
    description: 'Built with Vue 3 and Quasar. Dark theme, typewriter animation, scroll reveals, and a clean terminal-inspired design.',
    language: 'Vue',
    url: 'https://github.com/JoaquinRSC',
    gradient: 'linear-gradient(135deg, #061206 0%, #0a1f0a 50%, #22c55e18 100%)',
    accent: '#22c55e',
  },
]

const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

const skills = [
  {
    cat: 'Frontend',
    items: [
      { name: 'Vue.js',      icon: `${DI}/vuejs/vuejs-original.svg`,           url: 'https://vuejs.org' },
      { name: 'Quasar',      icon: `${DI}/quasar/quasar-original.svg`,         url: 'https://quasar.dev' },
      { name: 'JavaScript',  icon: `${DI}/javascript/javascript-original.svg`, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'HTML5',       icon: `${DI}/html5/html5-original.svg`,           url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3',        icon: `${DI}/css3/css3-original.svg`,             url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    ],
  },
  {
    cat: 'Backend',
    items: [
      { name: 'Node.js',  icon: `${DI}/nodejs/nodejs-original.svg`,              url: 'https://nodejs.org' },
      { name: 'Express',  icon: `${DI}/express/express-original.svg`, invert: true, url: 'https://expressjs.com' },
      { name: 'PHP',      icon: `${DI}/php/php-original.svg`,                   url: 'https://www.php.net' },
    ],
  },
  {
    cat: 'Languages',
    items: [
      { name: 'C#',    icon: `${DI}/csharp/csharp-original.svg`,       url: 'https://learn.microsoft.com/dotnet/csharp/' },
      { name: 'C',     icon: `${DI}/c/c-original.svg`,                 url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
      { name: 'C++',   icon: `${DI}/cplusplus/cplusplus-original.svg`, url: 'https://isocpp.org' },
      { name: 'Java',  icon: `${DI}/java/java-original.svg`,           url: 'https://www.java.com' },
      { name: 'Bash',  icon: `${DI}/bash/bash-original.svg`,           url: 'https://www.gnu.org/software/bash/' },
    ],
  },
  {
    cat: 'Database',
    items: [
      { name: 'MySQL',  icon: `${DI}/mysql/mysql-original.svg`, url: 'https://www.mysql.com' },
    ],
  },
  {
    cat: 'Tools',
    items: [
      { name: 'Git',     icon: `${DI}/git/git-original.svg`,                      url: 'https://git-scm.com' },
      { name: 'GitHub',  icon: `${DI}/github/github-original.svg`, invert: true,  url: 'https://github.com' },
      { name: 'Linux',   icon: `${DI}/linux/linux-original.svg`,                  url: 'https://www.linux.org' },
      { name: 'Docker',  icon: `${DI}/docker/docker-original.svg`,                url: 'https://www.docker.com' },
    ],
  },
]

const education = [
  {
    status: 'In Progress',
    title: 'Computer Technology',
    institution: 'UTU / Udelar / UTEC',
    description: 'Advanced coursework in OOP, databases, operating systems, computer architecture, and software engineering.',
  },
  {
    status: 'Completed',
    title: 'Technical Baccalaureate in IT',
    institution: 'UTU',
    description: 'Programming fundamentals, IT support, networking, and web development.',
  },
  {
    status: '2026',
    title: 'Data Science School',
    institution: 'Platzi',
    description: 'Data science, databases, and analytical tools.',
  },
]
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Space+Mono:wght@400;700&family=Inter:wght@400;500;600&display=swap');

:root {
  --bg:       #060b06;
  --surface:  #0a100a;
  --surface2: #101810;
  --border:   #1a2e1a;
  --border2:  #2a4a2a;
  --muted:    #4b6b4b;
  --muted2:   #7a9a7a;
  --text:     #e8f5e8;
  --accent:   #22c55e;
  --accent2:  #4ade80;
  --radius:   8px;
  --mono:     'Space Mono', 'JetBrains Mono', monospace;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; -webkit-tap-highlight-color: transparent; }
html { scroll-behavior: smooth; }

body.body--dark {
  background: var(--bg) !important;
  font-family: 'Inter', -apple-system, sans-serif !important;
  -webkit-font-smoothing: antialiased;
  color: var(--text);
}

a { text-decoration: none; color: inherit; }

// ── Background ───────────────────────────────────────────────────────────────
.bg-grid {
  position: fixed;
  inset: 0;
  z-index: 0;
  pointer-events: none;
}

.bg-glow {
  position: fixed;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 800px;
  height: 500px;
  background: radial-gradient(ellipse at top, rgba(34,197,94,0.06) 0%, transparent 65%);
  pointer-events: none;
  z-index: 0;
}

// ── Layout ───────────────────────────────────────────────────────────────────
.portfolio { min-height: 100vh; position: relative; overflow-x: hidden; }

.container {
  max-width: 1100px;
  margin: 0 auto;
  padding: 0 32px;
  position: relative;
  z-index: 1;
}

// ── Nav ──────────────────────────────────────────────────────────────────────
.nav {
  position: sticky;
  top: 0;
  z-index: 100;
  background: rgba(6,11,6,0.8);
  backdrop-filter: blur(20px);
  border-bottom: 1px solid var(--border);
}

.nav-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 60px;
}

.nav-links {
  display: flex;
  gap: 2px;

  a {
    font-family: var(--mono);
    font-size: 13px;
    color: var(--muted2);
    padding: 6px 12px;
    border-radius: 5px;
    transition: color 0.15s, background 0.15s;

    &:hover { color: var(--accent); background: rgba(34,197,94,0.06); }
  }
}

.nav-gh {
  display: inline-flex;
  align-items: center;
  gap: 7px;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
  padding: 6px 14px;
  border: 1px solid var(--border2);
  border-radius: 6px;
  transition: background 0.15s, border-color 0.15s;
  &:hover { background: rgba(34,197,94,0.08); border-color: var(--accent); }
}

// ── Hero ─────────────────────────────────────────────────────────────────────
.hero {
  position: relative;
  padding: 0 0 100px;
  border-bottom: 1px solid var(--border);
  overflow: hidden;
}

// Perspective grid — the main visual element
.hero-grid-wrap {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  height: 62%;
  pointer-events: none;
  overflow: hidden;
}

.hero-grid-plane {
  position: absolute;
  inset: -60% -60% 0;
  background-image:
    linear-gradient(rgba(34,197,94,0.18) 1px, transparent 1px),
    linear-gradient(90deg, rgba(34,197,94,0.14) 1px, transparent 1px);
  background-size: 70px 70px;
  transform: perspective(380px) rotateX(55deg);
  transform-origin: 50% 100%;
}

.hero-grid-fade {
  position: absolute;
  inset: 0;
  background: linear-gradient(
    to bottom,
    var(--bg) 0%,
    transparent 25%,
    transparent 70%,
    var(--bg) 100%
  );
}

.hero-center-glow {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 700px;
  height: 350px;
  background: radial-gradient(ellipse at 50% 30%, rgba(34,197,94,0.12) 0%, transparent 65%);
  pointer-events: none;
  z-index: 1;
}

.hero-content {
  position: relative;
  z-index: 2;
  padding-top: 130px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-pre {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--accent);
  margin-bottom: 20px;
  opacity: 0.75;
  letter-spacing: 0.5px;
}

.hero-name {
  font-family: var(--mono);
  font-size: clamp(2.2rem, 5vw, 3.8rem);
  font-weight: 700;
  letter-spacing: -1px;
  line-height: 1.1;
  color: var(--text);
  margin-bottom: 16px;
}

.hero-accent {
  color: var(--accent);
  text-shadow: 0 0 40px rgba(34,197,94,0.4);
}

.hero-typewriter {
  font-family: var(--mono);
  font-size: clamp(1.1rem, 2.5vw, 1.6rem);
  font-weight: 700;
  color: var(--muted2);
  margin-bottom: 28px;
  min-height: 2rem;
}

.typed-text { color: var(--text); }

.cursor {
  color: var(--accent);
  animation: blink 1s step-end infinite;
}

@keyframes blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0; }
}

.hero-bio {
  font-size: 15px;
  line-height: 1.85;
  color: var(--muted2);
  max-width: 480px;
  margin-bottom: 44px;
}

.hero-stats {
  display: flex;
  align-items: center;
  gap: 24px;
  margin-bottom: 44px;
  padding: 20px 36px;
  border: 1px solid var(--border);
  border-radius: 10px;
  background: rgba(34,197,94,0.03);
  flex-wrap: wrap;
  justify-content: center;
}

.stat-item {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
}

.stat-num {
  font-family: var(--mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--accent);
  text-shadow: 0 0 20px rgba(34,197,94,0.3);
}

.stat-label {
  font-size: 11px;
  color: var(--muted2);
  text-transform: uppercase;
  letter-spacing: 0.8px;
}

.stat-sep {
  font-family: var(--mono);
  font-size: 20px;
  color: var(--border2);
  user-select: none;
}

.hero-actions {
  display: flex;
  align-items: center;
  gap: 12px;
  flex-wrap: wrap;
  justify-content: center;
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  background: var(--accent);
  color: #051005;
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  border-radius: 6px;
  transition: opacity 0.15s, box-shadow 0.15s;

  &:hover { opacity: 0.9; box-shadow: 0 0 20px rgba(34,197,94,0.3); }
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 10px 24px;
  border: 1px solid var(--border2);
  color: var(--muted2);
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  border-radius: 6px;
  transition: color 0.15s, border-color 0.15s;

  &:hover { color: var(--accent); border-color: var(--accent); }
}

// ── Sections ─────────────────────────────────────────────────────────────────
.section {
  padding: 88px 0;
  border-bottom: 1px solid var(--border);
  &:last-of-type { border-bottom: none; }
}

.section-header { margin-bottom: 44px; }

.section-label {
  font-family: var(--mono);
  font-size: 12px;
  color: var(--accent);
  margin-bottom: 10px;
  opacity: 0.8;
}

.section-title {
  font-family: var(--mono);
  font-size: 24px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 6px;
}

.section-sub {
  font-size: 14px;
  color: var(--muted2);
}

.section-more { margin-top: 28px; text-align: center; }

.more-link {
  font-family: var(--mono);
  font-size: 13px;
  color: var(--muted2);
  transition: color 0.15s;
  &:hover { color: var(--accent); }
}

// ── Projects ─────────────────────────────────────────────────────────────────
.projects-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 14px;

  @media (max-width: 860px) { grid-template-columns: repeat(2, 1fr); }
  @media (max-width: 520px) { grid-template-columns: 1fr; }
}

.project-card {
  display: flex;
  flex-direction: column;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
  transition: border-color 0.2s, transform 0.2s, box-shadow 0.2s;

  &:hover {
    border-color: rgba(34,197,94,0.4);
    transform: translateY(-4px);
    box-shadow: 0 12px 40px rgba(0,0,0,0.5), 0 0 0 1px rgba(34,197,94,0.08);
  }
}

.project-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 9;
  overflow: hidden;
}

.mockup {
  width: 85%;
  margin: 16px auto 0;
  border-radius: 5px 5px 0 0;
  overflow: hidden;
  border: 1px solid rgba(255,255,255,0.06);
  border-bottom: none;
}

.mockup-bar {
  display: flex;
  align-items: center;
  gap: 5px;
  padding: 6px 10px;
  background: rgba(255,255,255,0.04);
  border-bottom: 1px solid rgba(255,255,255,0.04);
}

.mockup-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  flex-shrink: 0;
}

.mockup-address {
  flex: 1;
  height: 6px;
  border-radius: 3px;
  background: rgba(255,255,255,0.05);
  margin-left: 4px;
}

.mockup-body {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 7px;
  background: rgba(0,0,0,0.25);
}

.mockup-line {
  display: block;
  height: 6px;
  border-radius: 3px;
  &.wide  { width: 70%; }
  &.med   { width: 50%; }
  &.short { width: 35%; }
}

.mockup-row { display: flex; gap: 5px; }

.mockup-block {
  flex: 1;
  height: 24px;
  border-radius: 3px;
}

.preview-overlay {
  position: absolute;
  inset: 0;
  background: linear-gradient(to bottom, transparent 50%, rgba(6,11,6,0.7) 100%);
  pointer-events: none;
}

.project-body {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding: 16px 18px;
  flex: 1;
}

.project-header {
  display: flex;
  align-items: center;
  gap: 8px;
}

.project-name {
  font-family: var(--mono);
  font-size: 13px;
  font-weight: 700;
  color: var(--text);
  flex: 1;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}

.live-badge {
  font-family: var(--mono);
  font-size: 9px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  color: var(--accent);
  border: 1px solid rgba(34,197,94,0.35);
  background: rgba(34,197,94,0.08);
  border-radius: 4px;
  padding: 2px 7px;
}

.project-desc {
  font-size: 12px;
  color: var(--muted2);
  line-height: 1.65;
  flex: 1;
}

.project-footer {
  display: flex;
  align-items: center;
  gap: 10px;
  padding-top: 10px;
  border-top: 1px solid var(--border);
  margin-top: 2px;
}

.lang-badge {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  font-size: 12px;
  color: var(--muted2);
}

.lang-dot {
  display: block;
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.view-hint {
  margin-left: auto;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
  transition: color 0.15s;
}

.project-card:hover .view-hint { color: var(--accent); }

// ── Stack ─────────────────────────────────────────────────────────────────────
.stack-sections {
  display: flex;
  flex-direction: column;
  gap: 36px;
}

.stack-group {}

.stack-cat-label {
  display: flex;
  align-items: center;
  gap: 14px;
  margin-bottom: 16px;

  span {
    font-family: var(--mono);
    font-size: 10px;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 1.5px;
    color: var(--accent);
    opacity: 0.75;
    white-space: nowrap;
  }

  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: var(--border);
  }
}

.tech-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
}

.tech-card {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding: 18px 16px;
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: var(--radius);
  min-width: 82px;
  transition: border-color 0.2s, transform 0.2s, background 0.2s;

  &:hover {
    border-color: rgba(34,197,94,0.35);
    background: var(--surface2);
    transform: translateY(-3px);

    .tech-link-icon { opacity: 1; }
    .tech-name { color: var(--accent); }
  }
}

.tech-link-icon {
  position: absolute;
  top: 7px;
  right: 8px;
  font-size: 9px;
  color: var(--accent);
  opacity: 0;
  transition: opacity 0.15s;
}

.tech-icon {
  width: 38px;
  height: 38px;
  object-fit: contain;

  &.invert { filter: invert(1); }
}

.tech-name {
  font-family: var(--mono);
  font-size: 10px;
  color: var(--muted2);
  text-align: center;
  white-space: nowrap;
  transition: color 0.15s;
}

// ── Education ─────────────────────────────────────────────────────────────────
.edu-list {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  overflow: hidden;
}

.edu-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 24px;
  padding: 26px 30px;
  border-bottom: 1px solid var(--border);
  transition: background 0.15s;

  &:last-child { border-bottom: none; }
  &:hover { background: var(--surface); }

  @media (max-width: 640px) { grid-template-columns: 1fr; gap: 10px; }
}

.edu-meta {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 2px;
}

.edu-status {
  display: inline-block;
  width: fit-content;
  font-family: var(--mono);
  font-size: 10px;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  color: var(--accent);
  background: rgba(34,197,94,0.08);
  border: 1px solid rgba(34,197,94,0.2);
  border-radius: 4px;
  padding: 3px 9px;
}

.edu-institution {
  font-size: 12px;
  color: var(--muted2);
  line-height: 1.4;
}

.edu-title {
  font-family: var(--mono);
  font-size: 14px;
  font-weight: 700;
  color: var(--text);
  margin-bottom: 8px;
  line-height: 1.4;
}

.edu-desc {
  font-size: 13px;
  color: var(--muted2);
  line-height: 1.7;
}

// ── Footer ────────────────────────────────────────────────────────────────────
.footer {
  padding: 28px 0;
  border-top: 1px solid var(--border);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  font-size: 12px;
  color: var(--muted);

  @media (max-width: 600px) { flex-direction: column; text-align: center; }
}

.footer-link {
  font-family: var(--mono);
  color: var(--muted2);
  transition: color 0.15s;
  &:hover { color: var(--accent); }
}

// ── Reveal ────────────────────────────────────────────────────────────────────
.reveal {
  opacity: 0;
  transform: translateY(28px);
  transition: opacity 0.55s ease, transform 0.55s ease;
  transition-delay: var(--delay, 0s);

  &.in-view { opacity: 1; transform: translateY(0); }
}

// ── Responsive ───────────────────────────────────────────────────────────────

// Tablet
@media (max-width: 768px) {
  .hero-content { padding-top: 100px; }

  .hero-stats {
    gap: 16px;
    padding: 16px 24px;
  }

  .section { padding: 64px 0; }

  .edu-item {
    grid-template-columns: 1fr;
    gap: 10px;
  }
}

// Large phone
@media (max-width: 600px) {
  .container { padding: 0 20px; }

  // Nav
  .nav-links { display: none; }
  .nav-gh span { display: none; }

  // Hero
  .hero { padding: 0 0 64px; }
  .hero-content { padding-top: 80px; }
  .hero-name { letter-spacing: -0.5px; }
  .hero-bio { font-size: 14px; }

  .hero-stats {
    width: 100%;
    justify-content: space-around;
    padding: 16px 12px;
    gap: 8px;
  }
  .stat-sep { display: none; }

  .hero-actions {
    width: 100%;
    flex-direction: column;

    .btn-primary, .btn-ghost {
      width: 100%;
      justify-content: center;
    }
  }

  // Projects
  .projects-grid { grid-template-columns: 1fr; }

  // Stack
  .tech-grid { gap: 8px; }
  .tech-card { min-width: 72px; padding: 14px 10px; }
  .tech-icon { width: 30px; height: 30px; }

  // Education
  .edu-item { padding: 20px; }

  // Footer
  .footer-inner {
    flex-direction: column;
    text-align: center;
    gap: 6px;
  }

  // Sections
  .section { padding: 56px 0; }
  .section-title { font-size: 20px; }
}

// Small phone
@media (max-width: 380px) {
  .hero-name { font-size: 2rem; }
  .hero-typewriter { font-size: 1rem; }
  .stat-num { font-size: 20px; }
  .tech-card { min-width: 64px; padding: 12px 8px; }
  .tech-name { font-size: 9px; }
}
</style>
