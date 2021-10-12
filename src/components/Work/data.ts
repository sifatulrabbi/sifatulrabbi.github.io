import { FiGithub, FiExternalLink } from 'react-icons/fi';
import { IconType } from 'react-icons';

export type WorksData = {
  id: string;
  name: string;
  desc: string;
  tags: string[];
  links: {
    icon: IconType;
    link: string;
  }[];
};

const data: WorksData[] = [
  {
    id: 'asdfghjklqwertv',
    name: 'Arkanoid Game',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['TypeScript', 'CSS', 'HTML'],
    links: [
      { icon: FiGithub, link: 'hello' },
      { icon: FiExternalLink, link: 'hello' },
    ],
  },
  {
    id: 'asdfghjklqwertx',
    name: 'Social media app',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['React', 'JavaScript', 'styled components', 'firebase'],
    links: [
      { icon: FiGithub, link: 'hello' },
      { icon: FiExternalLink, link: 'hello' },
    ],
  },
  {
    id: 'asdfghjklqwertn',
    name: 'Full stack blog',
    desc: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt exercitationem provident non dolorum maxime ex suscipit voluptas, reprehenderit dignissimos natus.',
    tags: ['React', 'JavaScript', 'styled components', 'firebase'],
    links: [
      { icon: FiGithub, link: 'hello' },
      { icon: FiExternalLink, link: 'hello' },
    ],
  },
];

export default data;
