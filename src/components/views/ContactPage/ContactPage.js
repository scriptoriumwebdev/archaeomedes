import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

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
  console.log(`languageData`, languageData);

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
    <Container className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <Row className={styles.contactRow}>
        <Col className={`col-12 col-lg-6 ${styles.contactCol}`}>
          Dodać mapę po stworzeniu profilu firmy.
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d2562.175487500164!2d18.692627765716793!3d50.0455438294216!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47114ddc4e2e9861%3A0x6be395ae1cfd8964!2sFraternia%20Zakonna!5e0!3m2!1spl!2spl!4v1657717562483!5m2!1spl!2spl"
            title="mapy"
            width="600"
            height="450"
            // style="border:0;"
            allowFullScreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          /> */}
        </Col>
        <Col className={`col-12 col-lg-6 ${styles.contactCol}`}>
          <ul>
            {languageData.contact.map((item) => (
              <li key={item.id}>
                <a
                  href={handleLink(item.value, item.type)}
                  className={styles.contactLink}
                >
                  <Row>
                    <Col className="col-3 pt-2 pb-2 d-flex  align-items-center justify-content-center">
                      <IconsGenerator
                        iconName={item.icon}
                        iconsList={item.icon !== `faFacebook` ? fas : fab}
                        alternativeIcon={faIcons}
                        size={2}
                      />
                    </Col>
                    <Col className="col-9 pt-2 pb-2  d-flex flex-column align-items-start justify-content-center">
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
        </Col>
      </Row>
      <div />
    </Container>
  );
};

export default Contact;
