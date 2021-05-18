import { nanoid } from 'nanoid';

// HEAD DATA
export const headData = {
  title: '', // e.g: 'Name | Developer'
  lang: '', // e.g: en, es, fr, jp
  description: '', // e.g: Welcome to my website
};

// HERO DATA
export const heroData = {
  title: '',
  name: 'David Medina',
  subtitle:"I'm a Software Engineer",
  cta: '',
};

// ABOUT DATA
export const aboutData = {
  img: 'IMG_3132.jpg',
  paragraphOne: 'I am a Software Engineer with experience in Frontend Development, Customer Service, Event Planning and Management. A recent graduate from Flatiron School, a NYC bootcamp. I am passionate about helping build a better future and creating innovations through technology that will empower my community.',
  paragraphTwo: ' My experience ranges from user interface projects to backend web technologies, and exposure to knowledge of architecture concepts. I pride myself in being creative, a curious learner, easily adaptable to changes in a fast-growing environment, and passionate about my ideas. My past experience hones on my ability to have effective communication skills through various years of customer facing roles and dedication to the Brazilian Jiu Jitsu martial art.Relentlessly pursuing my passion to create solutions and solve problems. ',
  paragraphThree: 'Relentlessly pursuing my passion to create solutions and solve problems. ',
  resume: 'https://docs.google.com/document/d/1s04Gi2KJ3SVVd8r15Tgn7A8FDNoyyfOKFoU4Zc4F7Q8/edit?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'project.jpg',
    title: '',
    info: '',
    info2: '',
    url: '',
    repo: 'https://github.com/cobidev/react-simplefolio', // if no repo, the button will not show up
  },
];

// CONTACT DATA
export const contactData = {
  cta: '',
  btn: '',
  email: 'davidamedina619@gmail.com',
};

// FOOTER DATA
export const footerData = {
  networks: [
    {
      id: nanoid(),
      name: 'medium blog',
      url: 'https://davidamedina619.medium.com/',
    },
    {
      id: nanoid(),
      name: 'linkedin',
      url: 'https://www.linkedin.com/in/david-medina-484039207/',
    },
    {
      id: nanoid(),
      name: 'github',
      url: 'https://github.com/dashdavid13',
    },
  ],
};

// Github start/fork buttons
export const githubButtons = {
  isEnabled: true, // set to false to disable the GitHub stars/fork buttons
};
