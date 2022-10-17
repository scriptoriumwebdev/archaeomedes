/* eslint-disable comma-dangle */
import React, { useState, useEffect, useRef } from 'react';
import { Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { NavHashLink } from 'react-router-hash-link';
import { HamburgerSqueeze } from 'react-animated-burgers';
import { useLocation } from 'react-router-dom';
import styles from './Navigation.module.scss';

import navigation from '../../../data/navigation.json';

const Navigation = () => {
  const [scroll, setScroll] = useState(true);
  const [activeRWD, setActiveRWD] = useState(false);
  const [activeLink, setActiveLink] = useState(`/`);

  const menuRef = useRef(null);
  const menuLinksRef = useRef(null);

  const timeline = gsap.timeline({
    duration: 0.3,
    defaults: {
      ease: `Power3.easeOut`,
    },
  });

  const scrollFunction = () => {
    if (window.location.pathname === `/`) setScroll(false);
    if (window.location.pathname !== `/`) setScroll(true);
  };

  useEffect(() => {
    const menuLinks = menuLinksRef.current.children;

    let linkDelay = 0.1;

    if (
      window.location.pathname === `/` &&
      document.documentElement.scrollTop < 50
    )
      linkDelay = 2;

    gsap.set([menuLinks], { autoAlpha: 0 });

    timeline.to(menuLinks, { autoAlpha: 1, stagger: 0.1, delay: linkDelay });
    scrollFunction();
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleClick = (link) => {
    setActiveRWD(false);
    if (link === `#`) setScroll(false);
    if (link !== `#`) setScroll(true);
    console.log(`link`, link.replace(`#`, ``));
  };

  useEffect(() => {
    window.onscroll = function () {
      if (
        document.documentElement.scrollTop < 50 &&
        window.location.pathname === `/`
      ) {
        setScroll(false);
      } else {
        setScroll(true);
      }
    };
  });

  useEffect(() => {
    const menuLinks = menuLinksRef.current.children;

    if (activeRWD) {
      gsap.set([menuLinks], { autoAlpha: 0 });

      timeline.to(menuLinks, { autoAlpha: 1, stagger: 0.1, delay: 0.3 });
    }
  }, [activeRWD]); // eslint-disable-line react-hooks/exhaustive-deps

  const useOutsideMenu = (ref) => {
    useEffect(() => {
      function handleClickOutside(e) {
        if (ref.current && !ref.current.contains(e.target)) {
          setActiveRWD(false);
        }
      }
      document.addEventListener(`mousedown`, handleClickOutside);
      return () => {
        document.removeEventListener(`mousedown`, handleClickOutside);
      };
    }, [ref]);
  };

  useOutsideMenu(menuRef);

  const location = useLocation();
  const sections = document.getElementsByTagName(`section`);

  function isInViewport(el) {
    const rect = el.getBoundingClientRect();
    if (
      Math.floor(Math.round(rect.bottom)) >= 0 &&
      Math.floor(Math.round(rect.bottom)) <= rect.height + 50
    ) {
      if (activeLink) setActiveLink(el.id);
    }
  }

  window.addEventListener(`scroll`, (e) => {
    for (const section of sections) {
      isInViewport(section);
    }
  });

  useEffect(() => {
    console.log(`activeLink`, activeLink);
  }, [activeLink]);
  return (
    <nav className={scroll ? styles.root__scroll : styles.root} ref={menuRef}>
      <Col className={`${styles.mobileNavi} col-12 col-md-6`}>
        <Col className={`col-9 col-md-6 ${styles.colLogo}`}>
          <NavHashLink smooth to="/#" onClick={() => handleClick(`#`)}>
            <img src="/images/logo.png" alt="Archaeomedes" />
          </NavHashLink>
        </Col>
        <Col className="col-3 col-md-6">
          <HamburgerSqueeze
            className={styles.burgerButton}
            id="burgerButton"
            isActive={activeRWD}
            onClick={() => setActiveRWD(!activeRWD)}
          />
        </Col>
      </Col>
      <Col
        className={`${
          activeRWD ? styles.menu : styles.menu__hidden
        } col-12 col-md-6`}
        ref={menuLinksRef}
      >
        {navigation.map((item) => (
          <Col key={item.id} className="p-3 p-xl-0">
            <NavHashLink
              smooth
              to={`/${item.linkSrc}`}
              onClick={() => handleClick(item.linkSrc)}
              // className={
              //   `${location.pathname}${location.hash}` === `/${item.linkSrc}` &&
              //   activeLink
              //     ? `${styles.navLink__active}`
              //     : `${styles.navLink}`
              // }
              className={`${styles.navLink} ${
                activeLink === `${item.linkSrc.replace(`#`, ``)}`
                  ? styles.navLink__active
                  : ``
              }`}
            >
              {item.linkName}
            </NavHashLink>
          </Col>
        ))}
      </Col>
    </nav>
  );
};

export default Navigation;
