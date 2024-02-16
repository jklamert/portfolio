// gitprofile.config.ts

const CONFIG = {
  github: {
    username: 'jklamert', // Your GitHub org/user name. (This is the only required config)
  },
  /**
   * If you are deploying to https://<USERNAME>.github.io/, for example your repository is at https://github.com/arifszn/arifszn.github.io, set base to '/'.
   * If you are deploying to https://<USERNAME>.github.io/<REPO_NAME>/,
   * for example your repository is at https://github.com/arifszn/portfolio, then set base to '/portfolio/'.
   */
  base: '/',
  projects: {
    github: {
      display: true, // Display GitHub projects?
      header: 'Github Projects',
      mode: 'automatic', // Mode can be: 'automatic' or 'manual'
      automatic: {
        sortBy: 'stars', // Sort projects by 'stars' or 'updated'
        limit: 8, // How many projects to display.
        exclude: {
          forks: false, // Forked projects will not be displayed if set to true.
          projects: [], // These projects will not be displayed. example: ['arifszn/my-project1', 'arifszn/my-project2']
        },
      },
      manual: {
        // Properties for manually specifying projects
        projects: [], // List of repository names to display. example: ['arifszn/my-project1', 'arifszn/my-project2']
      },
    },
    external: {
      header: 'My Projects',
      // To hide the `External Projects` section, keep it empty.
      projects: [
        {
          title: 'FlowGIS Mobile',
          description:
            'FlowGIS Mobile is a GIS-centric software solution for utilities, municipalities and other organizations, designed to support configurable workflows, streamline maintenance operations and enable data-driven, intelligence-based decisions.',
          imageUrl:
            'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/1b/25/57/1b255719-40f6-4958-8804-c672c4cb5845/AppIcons-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
          link: 'https://apps.apple.com/us/app/flowgis-mobile/id1447533715',
        },
        {
          title: 'FieldLogIQ Classic',
          description:
            'FieldLogIQ Classic is an internal hybrid web-mobile application that specializes in natural gas project management.',
          imageUrl:
            'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/b9/4e/19/b94e1981-fd87-ff19-d282-e5ba963aa26c/AppIcon-0-0-1x_U007emarketing-0-0-0-10-0-0-sRGB-0-0-0-GLES2_U002c0-512MB-85-220-0-0.png/230x0w.webp',
          link: 'https://pm.flowgis.com/',
        },
        {
          title: 'FieldLogIQ',
          description:
            "FieldLogIQ is a B2B SaSS hybrid web-mobile application that specializes in natural gas project management. This brings Magnolia River's natural gas expertise into the software marketplace. The new application features advanced geospatial tooling, GPS integration, geospatial exports, and a rich dashboard for visibility.",
          imageUrl:
            'https://is1-ssl.mzstatic.com/image/thumb/Purple126/v4/e6/93/51/e6935114-000b-8f2b-2f80-72f29f72bc3d/AppIcon-1x_U007emarketing-0-7-0-85-220.png/230x0w.webp',
          link: 'https://app.fieldlogiq.com/',
        },
        {
          title: 'REI Tooling',
          description:
            'A personal project that sifts through real estate listings and picks out only the listings of interest.',
          imageUrl: 'https://img.icons8.com/clouds/100/home.png',
          link: '',
        },
      ],
    },
  },
  seo: {
    title: 'Jason Klamert',
    description:
      "A brief overview of Jason Klamert's accomplishments and skills.",
    imageURL: 'https://avatars.githubusercontent.com/u/81494203?v=4',
  },
  social: {
    linkedin: 'jason-klamert',
    email: 'jayklamert@gmail.com',
  },
  resume: {
    fileUrl: '', // Empty fileUrl will hide the `Download Resume` button.
  },
  skills: [
    {
      title: 'JavaScript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
      url: 'https://www.w3schools.com/js/',
    },
    {
      title: 'React.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
      url: 'https://react.dev/',
    },
    {
      title: 'Node.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original-wordmark.svg',
      url: 'https://nodejs.org/en',
    },
    {
      title: 'Next.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg',
      url: 'https://nextjs.org/',
    },
    {
      title: 'Microsoft SQL Server',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg',
      url: 'https://www.microsoft.com/en-us/sql-server/sql-server-2022',
    },
    {
      title: 'PostgreSQL',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
      url: 'https://www.postgresql.org/',
    },
    {
      title: 'Git',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg',
      url: 'https://git-scm.com/',
    },
    {
      title: 'Docker',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg',
      url: 'https://www.docker.com/',
    },
    {
      title: 'Kubernetes',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/kubernetes/kubernetes-original.svg',
      url: 'https://kubernetes.io/',
    },
    {
      title: 'CSS',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
      url: 'https://www.w3.org/Style/CSS/',
    },
    {
      title: 'Framework 7',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/framework7/framework7-original.svg',
      url: 'https://framework7.io/',
    },
    {
      title: 'Capcitor.js',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/capacitor/capacitor-original.svg',
      url: 'https://capacitorjs.com/',
    },
    {
      title: 'Tailwind',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/tailwindcss/tailwindcss-original-wordmark.svg',
      url: 'https://tailwindcss.com/',
    },

    {
      title: 'Python',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg',
      url: 'https://www.python.org/',
    },
    {
      title: 'Typescript',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
      url: 'https://www.typescriptlang.org/',
    },
    {
      title: 'CI/CD',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuredevops/azuredevops-original.svg',
      url: 'https://github.com/features/actions',
    },
    {
      title: 'TDD',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jest/jest-plain.svg',
      url: 'https://jestjs.io/',
    },
    {
      title: 'Automated Testing',
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/puppeteer/puppeteer-original.svg',
      url: 'https://jestjs.io/',
    },
  ],
  experiences: [
    {
      company: 'Centene',
      position: 'Web Services Intern',
      from: 'May 2015',
      to: 'Aug. 2015',
      companyLink: 'https://www.centene.com/',
    },
    {
      company: 'Centene',
      position: 'Web Services Intern',
      from: 'May 2016',
      to: 'Jan. 2018',
      companyLink: 'https://www.centene.com/',
    },
    {
      company: 'Magnolia River Services, Inc.',
      position: 'Jr. Developer',
      from: 'Jan. 2018',
      to: 'Dec. 2018',
      companyLink: 'https://www.magnolia-river.com/',
    },
    {
      company: 'Magnolia River Services, Inc.',
      position: 'Software Developer',
      from: 'Dec. 2018',
      to: 'Present',
      companyLink: 'https://www.magnolia-river.com/',
    },
  ],
  certifications: [
    // {
    //   name: 'Lorem ipsum',
    //   body: 'Lorem ipsum dolor sit amet',
    //   year: 'March 2022',
    //   link: 'https://example.com',
    // },
  ],
  educations: [
    {
      institution: 'Fox High School',
      degree: 'High School Diploma',
      from: '2008',
      to: '2012',
    },
    {
      institution: 'University of Missouri - St. Louis',
      degree: 'Bachelors of Science in Computer Science',
      from: '2012',
      to: '2017',
    },
  ],
  // Display articles from your medium or dev account. (Optional)
  blog: {
    // source: 'dev', // medium | dev
    // username: 'arifszn', // to hide blog section, keep it empty
    // limit: 3, // How many articles to display. Max is 10.
  },
  googleAnalytics: {
    id: '', // GA3 tracking id/GA4 tag id UA-XXXXXXXXX-X | G-XXXXXXXXXX
  },
  // Track visitor interaction and behavior. https://www.hotjar.com
  hotjar: {
    id: '',
    snippetVersion: 6,
  },
  themeConfig: {
    defaultTheme: 'halloween',

    // Hides the switch in the navbar
    // Useful if you want to support a single color mode
    disableSwitch: false,

    // Should use the prefers-color-scheme media-query,
    // using user system preferences, instead of the hardcoded defaultTheme
    respectPrefersColorScheme: false,

    // Display the ring in Profile picture
    displayAvatarRing: true,

    // Available themes. To remove any theme, exclude from here.
    themes: [
      'light',
      'dark',
      'cupcake',
      'bumblebee',
      'emerald',
      'corporate',
      'synthwave',
      'retro',
      'cyberpunk',
      'valentine',
      'halloween',
      'garden',
      'forest',
      'aqua',
      'lofi',
      'pastel',
      'fantasy',
      'wireframe',
      'black',
      'luxury',
      'dracula',
      'cmyk',
      'autumn',
      'business',
      'acid',
      'lemonade',
      'night',
      'coffee',
      'winter',
      'dim',
      'nord',
      'sunset',
      'procyon',
    ],

    // Custom theme, applied to `procyon` theme
    customTheme: {
      primary: '#fc055b',
      secondary: '#219aaf',
      accent: '#e8d03a',
      neutral: '#2A2730',
      'base-100': '#E3E3ED',
      '--rounded-box': '3rem',
      '--rounded-btn': '3rem',
    },
  },

  // Optional Footer. Supports plain text or HTML.
  // footer: `Made with <a
  //     class="text-primary" href="https://github.com/arifszn/gitprofile"
  //     target="_blank"
  //     rel="noreferrer"
  //   >GitProfile</a> and ❤️`,

  enablePWA: false,
};

export default CONFIG;
