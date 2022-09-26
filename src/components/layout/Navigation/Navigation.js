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
  const [activeLink, setActiveLink] = useState(false);

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
    console.log(`handle`);
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
  });

  useEffect(() => {
    const menuLinks = menuLinksRef.current.children;

    if (activeRWD) {
      console.log(`activeRWD`, activeRWD);
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

  // function isInViewport(el) {
  //   // console.log(`element`, el);
  //   const rect = el.getBoundingClientRect();
  //   if (
  //     Math.floor(Math.round(rect.bottom)) >= 0 &&
  //     Math.floor(Math.round(rect.bottom)) <= rect.height
  //   ) {
  //     if (activeLink) setActiveLink(el.id);

  //     // if (activeLink !== el.id) {
  //     //   setLink(el.id);
  //     // }
  //   }
  // }

  // window.addEventListener(`scroll`, (event) => {
  //   // console.log(`section`, sections);
  //   // console.log(`loc`, location.hash);
  //   // console.log(`loc`, location.pathname);
  //   for (const item of sections) {
  //     isInViewport(item);
  //   }
  //   console.log(`active link`, activeLink);
  // });

  // sections.forEach(isInViewport);
  return (
    <nav className={scroll ? styles.root__scroll : styles.root} ref={menuRef}>
      <HamburgerSqueeze
        className={styles.burgerButton}
        id="burgerButton"
        isActive={activeRWD}
        onClick={() => setActiveRWD(!activeRWD)}
      />
      <Col className={`${styles.logoCol} col-12 col-md-6`}>
        <NavHashLink smooth to="/#" onClick={() => handleClick(`#`)}>
          <img src="/images/logo.png" alt="Archaeomedes" />
        </NavHashLink>
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
              className={
                `${location.pathname}${location.hash}` === `/${item.linkSrc}`
                  ? `${styles.navLink__active}`
                  : `${styles.navLink}`
              }
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
