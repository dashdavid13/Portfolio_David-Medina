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
  paragraphTwo: ' My experience ranges from user interface projects to backend web technologies, and exposure to knowledge of architecture concepts. I pride myself in being creative, a curious learner, easily adaptable to changes in a fast-growing environment, and passionate about my ideas. My past experience hones on my ability to have effective communication skills through various years of customer facing roles and dedication to the Brazilian Jiu Jitsu martial art.',
  paragraphThree: 'Relentlessly pursuing my passion to create solutions and solve problems. ',
  resume: 'https://drive.google.com/file/d/1B7X-VNp3yNGlTztUMSQM91hksDqBZ4dO/view?usp=sharing', // if no resume, the button will not show up
};

// PROJECTS DATA
export const projectsData = [
  {
    id: nanoid(),
    img: 'hero.png',
    title: 'Heroes of the Sky',
    info: 'A multiplayer jet fighter game displayed on the command line.',
    info2: 'Built with Ruby and a unique Ruby Gem Gosu for graphics and movement of each player. Created two instances allowing two players to appear on the screen. Adjusted each instance’s X and Y movement as well as individual keys to be able to shoot and move. ',
    url: 'https://www.youtube.com/watch?v=kewv-g4Qtio&feature=youtu.be',
    repo: 'https://github.com/dashdavid13/ruby-project-alt-guidelines', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'ace.png',
    title: 'ACE',
    info: 'A fitness app, that provides a user with a workout plan and dietary lifestyle based on their choice of goal.',
    info2: 'Built with Ruby on Rails. Implemented sessions and cookies for authorization and authentication of a user. Calculated user’s caloric intake and water intake based on their criteria.',
    url: 'https://www.youtube.com/watch?v=e2vLkFrQrsc&feature=youtu.be',
    repo: 'https://github.com/dashdavid13/ACE', // if no repo, the button will not show up
  },
  {
    id: nanoid(),
    img: 'budex.png',
    title: 'Budex',
    info: 'Finance app where a user can create and keep track of current bills. ',
    info2: 'Built with Ruby on Rails backend as an API and the frontend was built with JavaScript React. Taught and implemented an artificial intelligence IBM Cloud Chatbot, which helped users navigate throughout the application. Added and retrieved a token from local storage to wallow authorization and authentication of a user.',
    url: 'https://www.youtube.com/watch?v=rtyhTxqrI-o',
    repo: 'https://github.com/dashdavid13/BudEx-backend',
    repo: 'https://github.com/dashdavid13/BudEx-frontend'
     // if no repo, the button will not show up
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
