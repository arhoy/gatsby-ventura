import React from 'react';
import { Link } from 'gatsby';
import styles from '../../scss/footer.module.scss';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.links}>
        {links.map(link => (
          <Link to={link.path}> {link.text} </Link>
        ))}
      </div>
      <div className={styles.icons}>
        {socialIcons.map(icon => (
          <a
            key={icon.url}
            href={icon.url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {icon.icon}
          </a>
        ))}
      </div>
      <div className={styles.copyright}>
        copyright &copy; backgrounds travel company {new Date().getFullYear()}{' '}
        all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
