const DI = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons'

export const skills = [
  {
    cat: 'Frontend',
    items: [
      { name: 'Vue.js',     icon: `${DI}/vuejs/vuejs-original.svg`,           url: 'https://vuejs.org' },
      { name: 'Quasar',     icon: `${DI}/quasar/quasar-original.svg`,         url: 'https://quasar.dev' },
      { name: 'JavaScript', icon: `${DI}/javascript/javascript-original.svg`, url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript' },
      { name: 'HTML5',      icon: `${DI}/html5/html5-original.svg`,           url: 'https://developer.mozilla.org/en-US/docs/Web/HTML' },
      { name: 'CSS3',       icon: `${DI}/css3/css3-original.svg`,             url: 'https://developer.mozilla.org/en-US/docs/Web/CSS' },
    ],
  },
  {
    cat: 'Backend',
    items: [
      { name: 'Node.js', icon: `${DI}/nodejs/nodejs-original.svg`,              url: 'https://nodejs.org' },
      { name: 'Express', icon: `${DI}/express/express-original.svg`, invert: true, url: 'https://expressjs.com' },
      { name: 'PHP',     icon: `${DI}/php/php-original.svg`,                   url: 'https://www.php.net' },
    ],
  },
  {
    cat: 'Languages',
    items: [
      { name: 'C#',   icon: `${DI}/csharp/csharp-original.svg`,       url: 'https://learn.microsoft.com/dotnet/csharp/' },
      { name: 'C',    icon: `${DI}/c/c-original.svg`,                 url: 'https://en.wikipedia.org/wiki/C_(programming_language)' },
      { name: 'C++',  icon: `${DI}/cplusplus/cplusplus-original.svg`, url: 'https://isocpp.org' },
      { name: 'Java', icon: `${DI}/java/java-original.svg`,           url: 'https://www.java.com' },
      { name: 'Bash', icon: `${DI}/bash/bash-original.svg`,           url: 'https://www.gnu.org/software/bash/' },
    ],
  },
  {
    cat: 'Database',
    items: [
      { name: 'MySQL', icon: `${DI}/mysql/mysql-original.svg`, url: 'https://www.mysql.com' },
    ],
  },
  {
    cat: 'Tools',
    items: [
      { name: 'Git',    icon: `${DI}/git/git-original.svg`,                       url: 'https://git-scm.com' },
      { name: 'GitHub', icon: `${DI}/github/github-original.svg`, invert: true,   url: 'https://github.com' },
      { name: 'Linux',  icon: `${DI}/linux/linux-original.svg`,                   url: 'https://www.linux.org' },
      { name: 'Docker', icon: `${DI}/docker/docker-original.svg`,                 url: 'https://www.docker.com' },
    ],
  },
]
