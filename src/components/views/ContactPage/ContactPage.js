/* eslint-disable react/style-prop-object */
/* eslint-disable comma-dangle */
import React, { useEffect, useRef } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { gsap } from 'gsap';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { faIcons, fas } from '@fortawesome/free-solid-svg-icons';
import styles from './ContactPage.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';
import { IconsGenerator } from '../../utils/IconsGenerator';

import contact from '../../../data/contact.json';

const Contact = () => {
  const languageData = contact.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === `DE`,
  );

  const contactInfoRef = useRef(null);
  const contactMapRef = useRef(null);

  const timeline = gsap.timeline({
    duration: 0.3,
    defaults: {
      ease: `Power3.easeOut`,
    },
  });

  useEffect(() => {
    const contactInfo = contactInfoRef.current.children;
    const contactMap = contactMapRef.current;

    gsap.set([contactMap], {
      opacity: 0,
      x: -50,
    });
    gsap.set([contactInfo], {
      opacity: 0,
      y: 50,
    });

    timeline
      .to(contactMap, { opacity: 1, x: 0 })
      .to([contactInfo], { opacity: 1, y: 0, stagger: 0.2 }, `-=0.3`);
  }, []); // eslint-disable-line react-hooks/exhaustive-deps

  const handleLink = (link, type) => {
    if (type === `web`) {
      if (link.includes(`https://`)) {
        return link;
      }
      if (!link.includes(`https://`)) {
        return `https://${link}`;
      }
    }
    if (type === `phone`) return `tel:${link}`;
    if (type === `mail`) return `mailto:${link}`;
  };

  return (
    <div className={styles.root}>
      <Row className={styles.contactRow}>
        <Col className={`col-12 col-lg-3 ${styles.contactCol}`}>
          <SectionHeader>{languageData.title}</SectionHeader>
          <div className={styles.contactList}>
            <ul ref={contactInfoRef}>
              {languageData.contact.map((item) => (
                <li key={item.id}>
                  <a
                    href={handleLink(item.value, item.type)}
                    className={styles.contactLink}
                  >
                    <Row>
                      <Col className="col-2 pt-3 pb-3 d-flex  align-items-center justify-content-center">
                        <IconsGenerator
                          iconName={item.icon}
                          iconsList={item.icon !== `faFacebook` ? fas : fab}
                          alternativeIcon={faIcons}
                          size={2}
                        />
                      </Col>
                      <Col className="col-10 pt-2 pb-2  d-flex flex-column align-items-start justify-content-center">
                        {Array.isArray(item.textData) ? (
                          item.textData.map((i) => <p>{i.text}</p>)
                        ) : (
                          <p>{item.textData}</p>
                        )}
                      </Col>
                    </Row>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </Col>
        <Col
          className={`col-12 col-lg-9 ${styles.contactCol}`}
          ref={contactMapRef}
        >
          <div className={styles.divMap}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d81679.65335426765!2d6.184447498163711!3d51.57145138543581!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c76666e58f2ff3%3A0x844d66f39ee850c2!2sMaasstra%C3%9Fe%2012%2C%2047623%20Kevelaer%2C%20Niemcy!5e0!3m2!1spl!2spl!4v1664104728227!5m2!1spl!2spl"
              title="Archeomedes Localization"
              width="100%"
              height="100%"
              // position="fixed"
              // display="flex"
              // style="border:0"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </Col>
      </Row>
      <div />
    </div>
  );
};

export default Contact;
