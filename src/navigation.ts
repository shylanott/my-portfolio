import { getPermalink, getBlogPermalink, getAsset } from './utils/permalinks';


export const headerData = {
  links: [
    {
      text: 'Home',
      href: getPermalink('/'),
    },
    {
      text: 'Projects',
      href: getPermalink('/#projects'),
    },
    {
      text: 'About',
      href: getPermalink('/about'),
    },
    {
      text: 'Contact',
      href: getPermalink('/contact'),
    },
  ],
  actions: [{ 
    text: 'Resume', 
    href: '/resume.pdf', 
    target: '_blank',
    class: 'btn-primary'
  }],
};

/* export const footerData = {
  links: [],
  socialLinks: [
    { ariaLabel: 'LinkedIn', icon: 'tabler:brand-linkedin', href: 'https://www.linkedin.com/in/shylanott/' }, // Add your LinkedIn
    { ariaLabel: 'Github', icon: 'tabler:brand-github', href: 'http://github.com/shylanott/' }, // Add your GitHub
    { ariaLabel: 'Email', icon: 'tabler:mail', href: 'mailto:shyla.nott@gmail.com' }, // Add your email
  ],
  footNote: `
    © ${new Date().getFullYear()} Shyla Nott. All rights reserved.
  `,
};*/