import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { IconType } from 'react-icons';

export type WorksData = {
  name: string;
  desc: string;
  tags: string[];
  links: {
    icon: IconType;
    link: string;
  }[];
}[];

const data = [
  {
    name: 'Arkanoid Game',
    desc: 'description',
    tags: ['TypeScript', 'CSS', 'HTML'],
    links: [
      { icon: FiGithub, link: 'hello' },
      { icon: FiExternalLink, link: 'hello' },
    ],
  },
  {
    name: 'Social media app',
    desc: 'description',
    tags: ['React', 'JavaScript', 'styled components', 'firebase'],
    links: [
      { icon: FiGithub, link: 'hello' },
      { icon: FiExternalLink, link: 'hello' },
    ],
  },
];

export default data;
