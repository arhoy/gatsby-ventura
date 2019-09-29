import React from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../../scss/footer.module.scss';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map(link => (
          <AniLink key={link.path} fade to={link.path}>
            {' '}
            {link.text}{' '}
          </AniLink>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map((icon, i) => (
          <a
            key={icon.url + i}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; Ventura Tours company {new Date().getFullYear()} all
        rights reserved
      </div>
    </footer>
  );
};

export default Footer;
