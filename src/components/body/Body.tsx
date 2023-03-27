import { FC } from 'react';
import Project from '../project/Project';
import styles from './Body.module.scss';
import techIcons, { TechIcon } from './TechIcons';
import Icon, { POPUP_SIDE } from './icon/Icon';

interface GridRowProps {
  icons: TechIcon[];
}

const GridRow: FC<GridRowProps> = ({ icons }: GridRowProps) => (
  <div className={styles.techGridRow} key={`row-${icons.map((iconSet) => iconSet.text).join(',')}`}>
    {icons.map((iconSet, index) => (
      <Icon
        icon={iconSet.icon}
        key={iconSet.text}
        text={iconSet.text}
        width={iconSet.width}
        popupSide={index <= Math.floor(icons.length / 2) ? POPUP_SIDE.right : POPUP_SIDE.left}
      />
    ))}
  </div>
);

const Body: FC = () => {
  return (
    <div id="rr-body" className={`rr-content ${styles.body}`}>
      <h1 className={styles.title}>{'About Me'}</h1>
      <p>
        {
          'I am passionate about building things people love to use and making complex data as intuitive as possible. I enjoy working with people and value camaraderie and culture within in a team.'
        }
      </p>
      <h1 className={styles.title}>{'Projects'}</h1>
      <p>
        {
          'Here is a bunch of projects I work on from time to time. Some I have have built myself and some I contribute to.'
        }
      </p>
      <div className={styles.projects}>
        <Project
          name={'The System'}
          links={[
            { full: 'https://github.com/ryan-rushton/the-system', short: 'github' },
            { full: 'https://the-system.netlify.app', short: 'the-system' },
          ]}
          description={
            'The solar system in your browser. I started this as an exercise making some performance optimisations in React. It renders a large number of elements when creating the belt. Now I tend to use it as a testing ground for new technology.'
          }
        />
        <Project
          name={'Xbdd'}
          links={[{ full: 'https://github.com/orionhealth/XBDD', short: 'github' }]}
          description={
            'A web application that provides an overview of Cucumber scenario test reports. It allows automated scenarios to be cross checked and catalogued and provides a history of manually tested scenario results. \n\nThis is an Orion Health open source project that I helped rejuvenate. We moved it from an old Jersey/YUI application that was converted to React, Typescript and Spring Boot.'
          }
        />
        <Project
          name={'Destiny Item Manager'}
          links={[{ full: 'https://github.com/DestinyItemManager/DIM', short: 'github' }]}
          description={
            'An item/content manager for the game Destiny that is regarded as the staple choice by the Destiny community. I contribute with small to medium features and bugfixes.'
          }
        />
        <Project
          name={'Destiny Quartermaster'}
          links={[
            {
              full: 'https://github.com/ryan-rushton/destiny-quartermaster',
              short: 'github',
            },
          ]}
          description={
            "This one is still under construction but it is planned to be a app to help people find an optimum build in the game Destiny. Currently I have built a lot of the infrastructure to get all the required data from the bungie api. I need to build UI's now."
          }
        />
        <Project
          name={'eslint-plugin-no-except'}
          links={[
            {
              full: 'https://github.com/ryan-rushton/eslint-plugin-no-except',
              short: 'github',
            },
            { full: 'https://npmjs.com/package/eslint-plugin-no-except', short: 'npm' },
          ]}
          description={
            'For a product at work, we needed an eslint rule that would disallow the use of Array.includes but allow _.includes as we were working with Internet Explorer.'
          }
        />
      </div>
      <h1 className={styles.title}>{'Tech'}</h1>
      <div>{'A collection of technologies I have used in my last few jobs or in open source.'}</div>
      <div className={styles.techGrid}>
        {techIcons.map((icons) => (
          <GridRow key={icons.map((icon) => icon.text).join('+')} icons={icons} />
        ))}
      </div>{' '}
    </div>
  );
};

export default Body;
