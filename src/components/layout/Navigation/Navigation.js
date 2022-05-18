/* eslint-disable comma-dangle */
import React, { useState, useEffect, useRef } from 'react';

import { Col } from 'react-bootstrap';
// import { gsap } from 'gsap';
import { NavHashLink } from 'react-router-hash-link';
import { HamburgerSqueeze } from 'react-animated-burgers';
import styles from './Navigation.module.scss';

import navigation from '../../../data/navigation.json';

const Navigation = () => {
  const [scroll, setScroll] = useState(false);
  const [activeRWD, setActiveRWD] = useState(false);

  useEffect(() => {
    window.onscroll = function () {};
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

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

  const menuRef = useRef(null);
  useOutsideMenu(menuRef);

  return (
    <nav className={scroll ? styles.root : styles.rootScroll} ref={menuRef}>
      <HamburgerSqueeze
        className={styles.burgerButton}
        id="burgerButton"
        isActive={activeRWD}
        onClick={() => setActiveRWD(!activeRWD)}
      />
      <div className={styles.background} />
      <div className={activeRWD ? styles.menu : styles.menu__hidden}>
        <Col className="col-12 col-xl-5">
          <div className="d-flex flex-column flex-xl-row">
            {navigation.map((item) => (
              <Col key={item.id} className="p-3 p-xl-0">
                <NavHashLink
                  smooth
                  className={styles.navLink}
                  to={`/${item.linkSrc}`}
                  onClick={() => setActiveRWD(false)}
                >
                  {item.linkName}
                </NavHashLink>
              </Col>
            ))}
          </div>
        </Col>
      </div>
    </nav>
  );
};

export default Navigation;
