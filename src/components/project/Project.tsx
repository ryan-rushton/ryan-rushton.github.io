import { FC } from 'react';
import styles from './Project.module.scss';

interface Props {
  name: string;
  links: { full: string; short: string }[];
  description: string;
}

const Project: FC<Props> = ({ name, links, description }: Props) => {
  return (
    <div className={styles.project}>
      <div className={styles.header}>
        <h2 className={styles.title}>{name}</h2>
        <div className={styles.links}>
          {links &&
            links.map((link) => (
              <span key={link.full}>
                <a href={link.full} className="rr-site-link">
                  {link.short}
                </a>
              </span>
            ))}
        </div>
      </div>
      <div className={styles.description}>{description}</div>
    </div>
  );
};

export default Project;
