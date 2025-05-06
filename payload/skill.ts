import { ISkill } from '../component/skill/ISkill';

const Languages: ISkill.Skill = {
  category: 'Languages',
  items: [
    {
      title: 'PHP',
      level: 3,
    },
    {
      title: 'JAVA',
      level: 2,
    },
    {
      title: 'HTML/CSS',
      level: 3,
    },
    {
      title: 'TypeScript',
      level: 1,
    },
    {
      title: 'JavaScript',
      level: 3,
    },
  ],
};

const Frameworks: ISkill.Skill = {
  category: 'Frameworks & Libraries',
  items: [
    {
      title: 'React.js',
      level: 2,
    },
    {
      title: 'Node.js',
      level: 2,
    },
    {
      title: 'Vue.js',
      level: 1,
    },
  ],
};

const Infrastructure: ISkill.Skill = {
  category: 'Infrastructure & Databases',
  items: [
    {
      title: 'Linux',
    },
    {
      title: 'MySQL',
    },
    {
      title: 'Apache',
    },
    {
      title: 'AWS',
    },
    {
      title: 'Oracle',
    },
    {
      title: 'MSSQL',
    },
  ],
};

const Tools: ISkill.Skill = {
  category: 'Tools & IDEs',
  items: [
    {
      title: 'Vim',
    },
    {
      title: 'Git',
    },
    {
      title: 'GitLab',
    },
    {
      title: 'Github',
    },
    {
      title: 'VS Code',
    },
    {
      title: 'JIRA',
    },
    {
      title: 'svn',
    },
  ],
};

const skill: ISkill.Payload = {
  disable: false,
  skills: [Languages, Frameworks, Infrastructure, Tools],
  tooltip: '1: 기초 수준\n2: 취미 개발 수준\n3: Production 개발 가능 수준',
};

export default skill;
