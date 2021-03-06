import React, { useState, useEffect } from 'react';
import AniLink from 'gatsby-plugin-transition-link/AniLink';
import styles from '../../scss/navbar.module.scss';
import { FaAlignRight, FaOpencart } from 'react-icons/fa';
import links from '../constants/links';
import socialIcons from '../constants/social-icons';
import logo from '../../images/logo.svg';
import netlifyIdentity from 'netlify-identity-widget';

const Navbar = () => {
  useEffect(() => {
    console.log('Navbar is here!');
    netlifyIdentity.init();
  }, []);

  const [isOpen, setIsOpen] = useState(false);

  const burgerIconHandler = () => {
    setIsOpen(prevOpen => !prevOpen);
  };
  return (
    <nav className={styles.navbar}>
      <div className={styles.navCenter}>
        <div className={styles.navHeader}>
          <img className={styles.logo} src={logo} alt="Ventura Logo" />
          <button className={styles.logoBtn} onClick={burgerIconHandler}>
            <FaAlignRight className={styles.logoIcon} />

            <FaOpencart
              className={`snipcart-checkout ${styles.cartCheckout}`}
            />
          </button>
        </div>
        <ul
          className={
            isOpen
              ? `${styles.navLinks} ${styles.showNav}`
              : `${styles.navLinks}`
          }
        >
          {links.map(link => (
            <li key={link.path}>
              <AniLink fade to={link.path}>
                {link.text}
              </AniLink>
            </li>
          ))}
          <div className="netlify_custom__1" data-netlify-identity-button></div>
        </ul>
        <div className={styles.navSocialLinks}>
          <FaOpencart className={`snipcart-checkout ${styles.cartCheckout}`} />
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
      </div>
    </nav>
  );
};

export default Navbar;
