import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { fab } from '@fortawesome/free-brands-svg-icons';
import { faIcons, fas } from '@fortawesome/free-solid-svg-icons';
import styles from './Contact.module.scss';
import SectionHeader from '../SectionHeader/SectionHeader';
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
        <Col className={`col-12 col-lg-6 ${styles.contactCol}`}>Mapa</Col>
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
