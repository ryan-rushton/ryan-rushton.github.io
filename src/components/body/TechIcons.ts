import {
  faApple,
  faAtlassian,
  faAws,
  faCss3,
  faDocker,
  faFontAwesome,
  faGithub,
  faHtml5,
  faJava,
  faJs,
  faLinux,
  faMicrosoft,
  faPython,
  faReact,
  faSass,
  faUikit,
  IconDefinition,
} from '@fortawesome/free-brands-svg-icons';

export interface TechIcon {
  icon: IconDefinition;
  text: string;
  width?: number;
}

const techIcons: TechIcon[][] = [
  [
    {
      icon: faJs,
      text: 'JS',
    },
    {
      icon: faReact,
      text: 'React',
    },
    {
      icon: faJava,
      text: 'Java',
    },
    { icon: faHtml5, text: 'HTML' },
    {
      icon: faCss3,
      text: 'CSS',
      width: 30,
    },
  ],
  [
    {
      icon: faPython,
      text: 'Python',
    },
    {
      icon: faSass,
      text: 'Sass',
    },
    {
      icon: faApple,
      text: 'Apple',
    },
    {
      icon: faLinux,
      text: 'Linux',
    },
    {
      icon: faMicrosoft,
      text: 'Microsoft VS Code and MSSQL',
      width: 70,
    },
  ],
  [
    {
      icon: faDocker,
      text: 'Docker',
    },
    {
      icon: faAws,
      text: 'AWS',
    },
    {
      icon: faFontAwesome,
      text: 'Font Awesome',
    },
    { icon: faGithub, text: 'GitHub' },
    {
      icon: faAtlassian,
      text: "Atlassian's Jira, BitBucket, Confluence and SourceTree",
      width: 100,
    },
  ],
  [
    {
      icon: faUikit,
      text: 'UIKit',
    },
  ],
];

export default techIcons;
