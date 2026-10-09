// Icons are devicon v2.16.0 SVGs vendored into public/icons/tech/ so the stack
// section never depends on (or breaks with) a third-party CDN.
const icon = (name) => `/icons/tech/${name}.svg`

export const skills = [
  {
    cat: 'Frontend',
    items: [
      { name: 'Vue.js',     icon: icon('vuejs'),      url: 'https://vuejs.org' },
      { name: 'Quasar',     icon: icon('quasar'),     url: 'https://quasar.dev' },
      { name: 'JavaScript', icon: icon('javascript'), url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'TypeScript', icon: icon('typescript'), url: 'https://www.typescriptlang.org' },
      { name: 'Tailwind',   icon: icon('tailwindcss'), url: 'https://tailwindcss.com' },
      { name: 'HTML5',      icon: icon('html5'),      url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3',       icon: icon('css3'),       url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    ],
  },
  {
    cat: 'Backend',
    items: [
      { name: 'Node.js',  icon: icon('nodejs'),                  url: 'https://nodejs.org' },
      { name: 'Express',  icon: icon('express'), invert: true,   url: 'https://expressjs.com' },
      { name: 'Supabase', icon: icon('supabase'),                url: 'https://supabase.com' },
      { name: 'PHP',      icon: icon('php'),                     url: 'https://www.php.net' },
    ],
  },
  {
    cat: 'Languages',
    items: [
      { name: 'Python', icon: icon('python'),  url: 'https://www.python.org' },
      { name: 'C#',   icon: icon('csharp'),    url: 'https://learn.microsoft.com/dotnet/csharp/' },
      { name: 'C',    icon: icon('c'),         url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
      { name: 'C++',  icon: icon('cplusplus'), url: 'https://isocpp.org' },
      { name: 'Java', icon: icon('java'),      url: 'https://www.java.com' },
      { name: 'Bash', icon: icon('bash'),      url: 'https://www.gnu.org/software/bash/' },
    ],
  },
  {
    cat: 'Database',
    items: [
      { name: 'PostgreSQL', icon: icon('postgresql'), url: 'https://www.postgresql.org' },
      { name: 'MySQL',      icon: icon('mysql'),      url: 'https://www.mysql.com' },
    ],
  },
  {
    cat: 'Tools',
    items: [
      { name: 'Git',            icon: icon('git'),                          url: 'https://git-scm.com' },
      { name: 'GitHub',         icon: icon('github'),        invert: true,  url: 'https://github.com' },
      { name: 'GitHub Actions', icon: icon('githubactions'),                url: 'https://github.com/features/actions' },
      { name: 'Docker',         icon: icon('docker'),                       url: 'https://www.docker.com' },
      { name: 'Vercel',         icon: icon('vercel'),        invert: true,  url: 'https://vercel.com' },
      { name: 'Linux',          icon: icon('linux'),         invert: true,  url: 'https://www.linux.org' },
    ],
  },
]
