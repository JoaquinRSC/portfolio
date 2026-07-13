// UI copy in both languages. Project and education copy that lives next to its
// data (long descriptions, degree titles) is kept in projects.js / education.js
// as { en, es } pairs; everything else — the page chrome — lives here.
export const messages = {
  en: {
    nav: {
      links: { about: 'about', projects: 'projects', stack: 'stack', education: 'education', contact: 'contact' },
      langLabel: 'Language',
    },
    hero: {
      pre: '// hello, world',
      greetPre: "Hey, I'm ",
      greetPost: '.',
      roles: ['Full Stack Developer.', 'Web Developer.', 'Backend Developer.', 'Problem Solver.'],
      bio: 'IT student and full-stack developer from Uruguay. Building real-world web apps with Vue, Quasar & Node.js since 2019 — currently looking for my first Junior / Trainee role.',
      stats: { projects: 'Projects', years: 'Years coding', languages: 'Languages' },
      actions: { projects: 'View projects', cv: 'Download CV', email: 'Email me' },
    },
    about: {
      label: 'about',
      title: 'A bit about me',
      p1: "I'm a self-taught developer wrapping up a Computer Science technologist degree in Uruguay. Most of what I know came from building things end to end — not following tutorials, but shipping real apps that other people actually use, and that I keep maintaining over time.",
      p2: "I work across the stack with Vue, Quasar and Node.js, and I'm increasingly pulled toward the data and AI side of software — a few of the projects here already lean on vision models and price analytics. Now I'm after my first Junior / Trainee role to keep building like this on a team.",
      facts: {
        based: 'Montevideo, Uruguay',
        role: 'Full-stack developer',
        studying: 'CS Technologist · UTU',
        into: 'Data & AI',
        status: 'Open to Junior / Trainee',
      },
    },
    projects: {
      label: 'projects',
      title: "Things I've built",
      sub: 'Live demos where possible, and sanitized previews of private work',
      badges: { live: 'Live', private: 'Private', wip: 'In Progress' },
      actions: { demo: 'Try demo ▶', open: 'Open ↗', screenshots: 'Screenshots ⤢', private: 'Code private' },
      tryLive: '▶ Try it live',
      shots: (n) => `⤢ ${n} screenshot${n > 1 ? 's' : ''}`,
      embedMeta: '· live demo · sample data',
      openTab: 'Open in new tab ↗',
      more: 'View GitHub profile →',
    },
    stack: {
      label: 'stack',
      title: 'Technologies I use',
      cats: { Frontend: 'Frontend', Backend: 'Backend', Languages: 'Languages', Database: 'Database', Tools: 'Tools' },
      openSite: (name) => `${name} — open official site`,
    },
    education: {
      label: 'education',
      title: 'Academic background',
    },
    contact: {
      label: 'contact',
      title: "Let's work together",
      sub: "I'm after my first Junior / Trainee role — remote or in Montevideo, Uruguay. Email is the fastest way to reach me.",
      email: 'Email me',
      cv: 'Download CV',
    },
    footer: {
      built: 'Built with Vue & Quasar',
      location: 'Montevideo, Uruguay',
    },
    toast: { emailCopied: 'Email copied' },
  },

  es: {
    nav: {
      links: { about: 'sobre mí', projects: 'proyectos', stack: 'stack', education: 'educación', contact: 'contacto' },
      langLabel: 'Idioma',
    },
    hero: {
      pre: '// hola, mundo',
      greetPre: 'Hola, soy ',
      greetPost: '.',
      roles: ['Desarrollador Full Stack.', 'Desarrollador Web.', 'Desarrollador Backend.', 'Resuelvo problemas.'],
      bio: 'Estudiante de informática y desarrollador full-stack de Uruguay. Construyo apps web reales con Vue, Quasar y Node.js desde 2019 — busco mi primer puesto Junior / Trainee.',
      stats: { projects: 'Proyectos', years: 'Años programando', languages: 'Lenguajes' },
      actions: { projects: 'Ver proyectos', cv: 'Descargar CV', email: 'Escribime' },
    },
    about: {
      label: 'sobre mí',
      title: 'Un poco sobre mí',
      p1: 'Soy un desarrollador autodidacta terminando un Tecnólogo en Informática en Uruguay. Casi todo lo que sé lo aprendí construyendo cosas de punta a punta — no siguiendo tutoriales, sino lanzando apps reales que otra gente usa, y que mantengo en el tiempo.',
      p2: 'Trabajo en todo el stack con Vue, Quasar y Node.js, y cada vez me atrae más el lado de datos e IA — varios de los proyectos acá ya usan modelos de visión y análisis de precios. Ahora busco mi primer puesto Junior / Trainee para seguir construyendo así, en equipo.',
      facts: {
        based: 'Montevideo, Uruguay',
        role: 'Desarrollador full-stack',
        studying: 'Tecnólogo en Informática · UTU',
        into: 'Datos e IA',
        status: 'Busco Junior / Trainee',
      },
    },
    projects: {
      label: 'proyectos',
      title: 'Lo que construí',
      sub: 'Demos en vivo cuando se puede, y vistas sanitizadas del trabajo privado',
      badges: { live: 'En vivo', private: 'Privado', wip: 'En progreso' },
      actions: { demo: 'Probar demo ▶', open: 'Abrir ↗', screenshots: 'Capturas ⤢', private: 'Código privado' },
      tryLive: '▶ Probar en vivo',
      shots: (n) => `⤢ ${n} captura${n > 1 ? 's' : ''}`,
      embedMeta: '· demo en vivo · datos de ejemplo',
      openTab: 'Abrir en pestaña nueva ↗',
      more: 'Ver perfil de GitHub →',
    },
    stack: {
      label: 'stack',
      title: 'Tecnologías que uso',
      cats: { Frontend: 'Frontend', Backend: 'Backend', Languages: 'Lenguajes', Database: 'Base de datos', Tools: 'Herramientas' },
      openSite: (name) => `${name} — abrir sitio oficial`,
    },
    education: {
      label: 'educación',
      title: 'Formación académica',
    },
    contact: {
      label: 'contacto',
      title: 'Trabajemos juntos',
      sub: 'Busco mi primer puesto Junior / Trainee — remoto o en Montevideo, Uruguay. El email es la forma más rápida de contactarme.',
      email: 'Escribime',
      cv: 'Descargar CV',
    },
    footer: {
      built: 'Hecho con Vue y Quasar',
      location: 'Montevideo, Uruguay',
    },
    toast: { emailCopied: 'Email copiado' },
  },
}
