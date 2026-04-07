const technologies = [
    {
        name: 'Python',
        imgSrc:'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
        altSrc: 'Python Logo',
        link: 'https://www.python.org/',
        ariaLink: 'Python Documentation Website',
    },
    {
        name: 'JavaScript',
        imgSrc: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
        altSrc: 'JavaScript Logo',
        link: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript',
        ariaLink: 'JavaScript Documentation Website',
    },
    {
        name: 'Astro',
        imgSrc: 'https://bestofjs.org/logos/astro.svg',
        altSrc: 'Astro Logo',
        link: 'https://astro.build/',
        ariaLink: 'Astro Documentation Website',
    },
    {
        name: 'Supabase',
        imgSrc: 'https://www.vectorlogo.zone/logos/supabase/supabase-icon.svg',
        altSrc: 'Supabase Logo',
        link: 'https://supabase.com/',
        ariaLink: 'Supabase Documentation Website',
    },
    {
        name: 'Refine',
        imgSrc: '/assets/refine.png',
        altSrc: 'Refine Logo',
        link: 'https://refine.dev/',
        ariaLink: 'Refine Documentation Website',
    },
    {
        name: 'Wordpress',
        imgSrc:'https://www.vectorlogo.zone/logos/wordpress/wordpress-tile.svg',
        altSrc: 'Wordpress Logo',
        link: 'https://wordpress.org/',
        ariaLink: 'Wordpress Documentation Website',
    },
    {
        name: 'Odoo',
        imgSrc:'https://upload.wikimedia.org/wikipedia/commons/5/50/Odoo_logo.svg',
        altSrc: 'Odoo Logo',
        link: 'https://www.odoo.com/',
        ariaLink: 'TailwindCSS Documentation Website',
    },
    {
        name: 'Django',
        imgSrc: 'https://www.vectorlogo.zone/logos/djangoproject/djangoproject-icon.svg',
        altSrc: 'Django Logo',
        link: 'https://www.djangoproject.com/',
        ariaLink: 'Django Documentation Website',
    },
    {
        name: 'Gatsby',
        imgSrc: 'https://www.vectorlogo.zone/logos/gatsbyjs/gatsbyjs-icon.svg',
        altSrc: 'Gatsby Logo',
        link: 'https://www.gatsbyjs.com/',
        ariaLink: 'Gatsby Documentation Website',
    },
]

const socials = [
    {
        name: 'Twitter',
        url: 'https://twitter.com/mbayedione10',
        imgSrc: 'mdi:twitter',
        ariaLabel: 'Mamadou Mb. DIONE Twitter Profile',
    },
    {
        name: 'GitHub',
        url: 'https://github.com/mbayedione10',
        imgSrc: 'mdi:github',
        ariaLabel: 'Mamadou Mb. DIONE GitHub Profile',
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/mamadou-mbaye-dione/',
        imgSrc: 'mdi:linkedin',
        ariaLabel: 'Mamadou Mb. DIONE LinkedIn Profile',
    },
    {
        name: 'Discord',
        url: 'https://discordapp.com/users/807221365467381760',
        imgSrc: 'ri:discord-fill',
        ariaLabel: 'Mamadou Mb. DIONE Discord Profile',
    },
]

const pmStats = [
  { number: '10+', label: 'African countries reached' },
  { number: '1 000+', label: 'Users on deployed platforms' },
  { number: '5+', label: 'Years delivering projects' },
  { number: '100+', label: 'People trained' },
];

const pmSkills = [
  'Stakeholder Management',
  'Agile & Scrum',
  'Project Planning',
  'Risk Management',
  'Team Coordination',
  'Digital Transformation',
  'Process Optimization',
  'ERP Implementation',
];

const pmTools = [
  {
    name: 'Jira',
    imgSrc: 'https://www.vectorlogo.zone/logos/atlassian_jira/atlassian_jira-icon.svg',
    altSrc: 'Jira Logo',
    link: 'https://www.atlassian.com/software/jira',
    ariaLink: 'Jira Website',
  },
  {
    name: 'Notion',
    imgSrc: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    altSrc: 'Notion Logo',
    link: 'https://www.notion.so/',
    ariaLink: 'Notion Website',
  },
  {
    name: 'Trello',
    imgSrc: 'https://www.vectorlogo.zone/logos/trello/trello-icon.svg',
    altSrc: 'Trello Logo',
    link: 'https://trello.com/',
    ariaLink: 'Trello Website',
  },
  {
    name: 'Slack',
    imgSrc: 'https://www.vectorlogo.zone/logos/slack/slack-icon.svg',
    altSrc: 'Slack Logo',
    link: 'https://slack.com/',
    ariaLink: 'Slack Website',
  },
  {
    name: 'GitHub',
    imgSrc: 'https://www.vectorlogo.zone/logos/github/github-icon.svg',
    altSrc: 'GitHub Logo',
    link: 'https://github.com/',
    ariaLink: 'GitHub Website',
  },
  {
    name: 'Figma',
    imgSrc: 'https://www.vectorlogo.zone/logos/figma/figma-icon.svg',
    altSrc: 'Figma Logo',
    link: 'https://www.figma.com/',
    ariaLink: 'Figma Website',
  },
  {
    name: 'NocoDB',
    imgSrc: 'https://raw.githubusercontent.com/nocodb/nocodb/develop/packages/nc-gui/assets/img/brand/nocodb-logo.svg',
    altSrc: 'NocoDB Logo',
    link: 'https://nocodb.com/',
    ariaLink: 'NocoDB Website',
  },
  {
    name: 'Google Workspace',
    imgSrc: 'https://www.vectorlogo.zone/logos/google/google-icon.svg',
    altSrc: 'Google Workspace Logo',
    link: 'https://workspace.google.com/',
    ariaLink: 'Google Workspace Website',
  },
];

const speakingEvents = [
  {
    tag: 'Speaker',
    tagVariant: 'default' as const,
    title: 'FIFAfrica 2025 — Namibia',
    desc: 'Digital rights and civic tech in Africa',
    href: 'https://youthdemocracycohort.com/the-ydc-attends-the-12th-edition-of-fifafrica/',
    img: '/assets/speak.webp',
  },
  {
    tag: 'Speaker',
    tagVariant: 'default' as const,
    title: 'Electoral Integrity Summit — Kampala',
    desc: 'AI and electoral transparency',
    href: 'https://ahead.africa/en/first-electoral-integrity-africa-summit-final-communique/',
    img: '/assets/speak2.webp',
  },
  {
    tag: 'Speaker',
    tagVariant: 'default' as const,
    title: '2nd Electoral Integrity Summit — Lusaka',
    desc: 'Session 5: Harnessing AI & Emerging Technologies to Safeguard Electoral Integrity in Africa',
    href: 'https://ahead.africa/en/second-electoral-integrity-summit/',
    img: '/assets/speak2.webp',
  },
  {
    tag: 'Runner-up',
    tagVariant: 'award' as const,
    title: 'Refine + DEV Hackathon',
    desc: 'GTFC municipal governance platform — 2nd prize',
    href: 'https://refine.dev/blog/refine-hackathon-2/#gtfc-municipalitys-monitoring',
    img: '/assets/note.webp',
  },
  {
    tag: 'Mentor',
    tagVariant: 'training' as const,
    title: 'Innov4Democracy Hackathon',
    desc: 'Mentored 5 teams on civic tech and digital innovation',
    img: '/assets/groupmmd.webp',
  },
  {
    tag: 'Trainer',
    tagVariant: 'training' as const,
    title: 'NGOs & Student Communities',
    desc: '100+ people trained on databases, web development, and digital tools',
    img: '/assets/groupmmd.webp',
  },
];

export { technologies, socials, pmStats, pmSkills, pmTools, speakingEvents }
