<template>
  <section id="about" class="section">
    <div class="container">
      <div class="section-header reveal">
        <div class="section-label">// 01 &mdash; about</div>
        <h2 class="section-title">A bit about me</h2>
      </div>

      <div class="about-grid reveal" style="--delay: 0.1s">
        <div class="about-prose">
          <p>
            I'm a self-taught developer wrapping up a Computer Science
            technologist degree in Uruguay. Most of what I know came from
            building things end to end &mdash; not following tutorials, but
            shipping real apps that other people actually use, and that I keep
            maintaining over time.
          </p>
          <p>
            I work across the stack with Vue, Quasar and Node.js, and I'm
            increasingly pulled toward the data and AI side of software &mdash;
            a few of the projects here already lean on vision models and price
            analytics. Now I'm after my first Junior&nbsp;/&nbsp;Trainee role to
            keep building like this on a team.
          </p>
        </div>

        <aside class="about-card" aria-label="Quick facts">
          <div class="about-card-bar">
            <span class="about-dot" />
            <span class="about-dot" />
            <span class="about-dot" />
            <span class="about-file">about.js</span>
          </div>
          <div class="about-code">
            <div class="line">
              <span class="kw">const</span> <span class="vr">joaquin</span> <span class="pn">=</span> <span class="pn">{</span>
            </div>
            <div class="line indent">
              <span class="prop">based</span><span class="pn">:</span> <span class="str">'Montevideo, Uruguay'</span><span class="pn">,</span>
            </div>
            <div class="line indent">
              <span class="prop">role</span><span class="pn">:</span> <span class="str">'Full-stack developer'</span><span class="pn">,</span>
            </div>
            <div class="line indent">
              <span class="prop">studying</span><span class="pn">:</span> <span class="str">'CS Technologist · UTU'</span><span class="pn">,</span>
            </div>
            <div class="line indent">
              <span class="prop">into</span><span class="pn">:</span> <span class="str">'Data &amp; AI'</span><span class="pn">,</span>
            </div>
            <div class="line indent">
              <span class="prop">status</span><span class="pn">:</span> <span class="str on">'Open to Junior / Trainee'</span><span class="pn">,</span>
            </div>
            <div class="line">
              <span class="pn">}</span>
            </div>
          </div>
        </aside>
      </div>
    </div>
  </section>
</template>

<script setup></script>

<style scoped lang="scss">
.about-grid {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 28px;
  align-items: start;

  @media (max-width: 768px) { grid-template-columns: 1fr; gap: 22px; }
}

.about-prose p {
  font-size: 15px;
  line-height: 1.85;
  color: var(--muted2);

  & + p { margin-top: 18px; }

  strong { color: var(--text); font-weight: 700; }
}

/* Quick facts rendered as a JS object — the subject's own vernacular. */
.about-card {
  border: 1px solid var(--border);
  border-radius: var(--radius);
  background: var(--surface);
  overflow: hidden;
}

.about-card-bar {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 10px 14px;
  background: rgba(255,255,255,0.02);
  border-bottom: 1px solid var(--border);
}

.about-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: rgba(255,255,255,0.12);
  flex-shrink: 0;
}

.about-file {
  margin-left: 8px;
  font-family: var(--mono);
  font-size: 11px;
  color: var(--muted);
}

.about-code {
  padding: 18px 18px 20px;
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.9;
  white-space: nowrap;
  overflow-x: auto;
}

.line.indent { padding-left: 18px; }

.kw   { color: var(--muted2); }
.vr   { color: var(--text); }
.pn   { color: var(--muted); }
.prop {
  display: inline-block;
  min-width: 5.25em;
  color: var(--accent);
}
.str  { color: var(--muted2); }

/* The line that matters most for a recruiter gets the accent. */
.str.on {
  color: var(--accent2);
  text-shadow: 0 0 18px rgba(34,197,94,0.25);
}
</style>
