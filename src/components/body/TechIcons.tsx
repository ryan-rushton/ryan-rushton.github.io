import React, { ReactNode } from 'react';
import {
  FaAws,
  FaCss3,
  FaDocker,
  FaGithub,
  FaHtml5,
  FaJava,
  FaJs,
  FaLinux,
  FaMicrosoft,
  FaPython,
  FaReact,
  FaSass,
  FaUikit,
  FaJira,
  FaConfluence,
  FaBitbucket,
  FaGitAlt,
} from 'react-icons/fa';
import {
  SiTypescript,
  SiGitlab,
  SiMaterialUi,
  SiOracle,
  SiPostgresql,
  SiBamboo,
  SiTravisci,
} from 'react-icons/si';

export interface TechIcon {
  icon: ReactNode;
  text: string;
  width?: number;
}

/**
 * Icons that are displayed at the end of the page indicating tech I have used.
 */
const techIcons: TechIcon[][] = [
  [
    {
      icon: <SiTypescript />,
      text: 'Typescript',
    },
    {
      icon: <FaJs />,
      text: 'Javascript',
    },
    {
      icon: <FaReact />,
      text: 'React',
    },
    {
      icon: <SiMaterialUi />,
      text: 'Material UI',
      width: 70,
    },
  ],
  [
    {
      icon: <FaSass />,
      text: 'Sass',
    },
    {
      icon: <FaUikit />,
      text: 'UIKit',
    },
    { icon: <FaHtml5 />, text: 'HTML' },
    {
      icon: <FaCss3 />,
      text: 'CSS',
      width: 30,
    },
  ],
  [
    { icon: <FaJava />, text: 'Java' },
    {
      icon: <FaPython />,
      text: 'Python',
    },
    { icon: <SiOracle />, text: "Oracle DB's" },
    { icon: <SiPostgresql />, text: "PostgreSQL DB's", width: 70 },
  ],
  [
    {
      icon: <FaMicrosoft />,
      text: "Microsoft VS Code and MSSQL DB's",
      width: 70,
    },
    {
      icon: <FaDocker />,
      text: 'Docker',
    },
    {
      icon: <FaLinux />,
      text: 'Linux',
    },
    {
      icon: <FaAws />,
      text: 'AWS',
    },
  ],
  [
    { icon: <FaGitAlt />, text: 'Git' },
    { icon: <FaGithub />, text: 'GitHub including their actions for CI/CD' },
    { icon: <SiGitlab />, text: 'GitLab including their CI/CD' },
    { icon: <FaBitbucket />, text: 'Bit Bucket', width: 70 },
  ],
  [
    { icon: <SiTravisci />, text: 'Travis CI' },
    { icon: <SiBamboo />, text: "Atlassian's Bamboo" },
    { icon: <FaJira />, text: 'Jira' },
    { icon: <FaConfluence />, text: 'Confluence', width: 70 },
  ],
];

export default techIcons;
