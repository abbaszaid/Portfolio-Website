import { FaAws, FaPython } from 'react-icons/fa';
import { FaGolang } from 'react-icons/fa6';
import { RiFirebaseFill } from 'react-icons/ri';

import { Icons } from '@/components/icons';
export const links = [
  {
    name: 'Home',
    hash: '#home',
  },
  {
    name: 'About',
    hash: '#about',
  },
  {
    name: 'Projects',
    hash: '#projects',
  },
  {
    name: 'Experience',
    hash: '#experience',
  },
  {
    name: 'Contact',
    hash: '#contact',
  },
] as const;

export const projectsData = [
  {
    image: '/projects/ai.png',
    title: 'Currently developing: AI app',
    description: 'Cross platform app with AI integrated',
    technologies: [
      'React Native Expo',
      'TypeScript',
      'DynamoDB',
      'FirebaseAuth',
    ],
    links: {
      github: 'https://github.com/abbaszaid/tujjari',
    },
  },
  {
    image: '/projects/priceseekr.png',
    title: 'PriceSeekr',
    description:
      'Web extension that finds cheaper and similar products in one click!',
    technologies: [
      'TypeScript',
      'React',
      ' Plasmo',
      'Firebase Auth',
      'Firestore',
    ],
    links: {
      github: 'https://github.com/abbaszaid/PriceSeekr',
    },
  },
  {
    image: '/projects/geonerd.png',
    title: 'GeoNerd',
    description: 'A multiplayer web game used by over 2000 people',
    technologies: ['JavaScript', 'Socket.io', 'API(axios)', 'HTML', 'CSS'],
    links: {
      github: 'https://github.com/abbaszaid/geonerd',
    },
  },
  {
    image: '/projects/tujjari.png',
    title: 'Tujjari',
    description: 'Car selling and buying platform with a realtime chat',
    technologies: [
      'PHP',
      'JavaScript',
      'AJAX',
      'MySQL',
      'Firebase Realtime DB',
    ],
    links: {
      github: 'https://github.com/abbaszaid/tujjari',
    },
  },
  {
    image: '/projects/s.png',
    title: 'Space Invaders - Android Game',
    description:
      'An android game with a theme similar to the popular 1978s arcade video game Space Invaders',
    technologies: [
      'TypeScript',
      'React',
      ' Plasmo',
      'Firebase Auth',
      'Firestore',
    ],
    links: {
      github: 'https://github.com/abbaszaid/Fast-as-Light',
    },
  },
  {
    image: '/projects/idir.png',
    title: 'Fact Checker',
    description:
      'Full stack website that searches the web and generates an easy to read map with all its findings related to the claim',
    technologies: [
      'Flask',
      'Python',
      'JavaScript',
      'HTML',
      'CSS',
      'BeautifulSoup',
    ],
    links: {
      github: 'https://github.com/abbaszaid/geonerd',
    },
  },
] as const;

export const experiencesData = [
  {
    title: 'SDE @ IDIR',
    location: 'Dallas, Texas',
    description:
      'Worked part time as a web developer and built a full stack fact checker website with visualizations for a data research lab',
    date: '2022-Present',
  },
  {
    title: 'Java Developer Intern @ PISIQ',
    location: 'Remote',
    description:
      'Built Telegram chatbots using Java and the telegram API to enhance the customer service offered',
    date: '2020',
  },
] as const;

export const skillsData = [
  { icon: <FaPython className="size-12" /> },
  { icon: <Icons.javascript className="size-12" /> },
  { icon: <Icons.typescript className="size-12" /> },
  { icon: <Icons.react className="size-12" /> },
  { icon: <Icons.nextjs className="size-12" /> },
  { icon: <FaAws className="size-12" /> },
  { icon: <FaGolang className="size-12" /> },
  { icon: <RiFirebaseFill className="size-12" /> },
  { icon: <Icons.tailwind className="size-12" /> },
  { icon: <Icons.html className="size-12" /> },
  { icon: <Icons.css className="size-12" /> },
  { icon: <Icons.docker className="size-12" /> },
] as const;
