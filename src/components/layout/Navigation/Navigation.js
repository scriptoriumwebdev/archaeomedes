/* eslint-disable comma-dangle */
import React, { useState, useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { NavHashLink } from 'react-router-hash-link';
import { HamburgerSqueeze } from 'react-animated-burgers';
import styles from './Navigation.module.scss';

import navigation from '../../../data/navigation.json';

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [activeRWD, setActiveRWD] = useState(false);
  const menuRef = useRef(null);
  const menuLinksRef = useRef(null);
  const location = useLocation();

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

    let linkDelay = 0.3;

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
  }, [location.pathname]);

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

  return (
    <nav className={styles.root} ref={menuRef}>
      <HamburgerSqueeze
        className={styles.burgerButton}
        id="burgerButton"
        isActive={activeRWD}
        onClick={() => setActiveRWD(!activeRWD)}
      />
      <div className={styles.background} />
      <div className={scroll ? styles.bottomCurve__scroll : styles.bottomCurve}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#132226"
            fillOpacity="1"
            d="M0,128L80,112C160,96,320,64,480,48C640,32,800,32,960,42.7C1120,53,1280,75,1360,85.3L1440,96L1440,0L1360,0C1280,0,1120,0,960,0C800,0,640,0,480,0C320,0,160,0,80,0L0,0Z"
          />
        </svg>
      </div>
      <div
        className={activeRWD ? styles.menu : styles.menu__hidden}
        ref={menuLinksRef}
      >
        {navigation.map((item) => (
          <Col key={item.id} className="p-3 p-xl-0">
            <NavHashLink
              smooth
              className={styles.navLink}
              to={`/${item.linkSrc}`}
              onClick={() => handleClick(item.linkSrc)}
            >
              {item.linkName}
            </NavHashLink>
          </Col>
        ))}
      </div>
    </nav>
  );
};

export default Navigation;
