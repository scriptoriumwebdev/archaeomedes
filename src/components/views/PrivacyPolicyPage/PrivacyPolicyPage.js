/* eslint-disable react/style-prop-object */
/* eslint-disable comma-dangle */
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from './PrivacyPolicyPage.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

import privacyPolicy from '../../../data/privacyPolicy.json';
import utils from '../../../data/utils.json';

const PrivacyPolicy = () => {
  const languageData = privacyPolicy.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  const privacyPolicyInfoRef = useRef(null);

  return (
    <Container className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <div
        className={styles.privacyPolicyTextContainer}
        ref={privacyPolicyInfoRef}
      >
        {languageData.textData &&
          Array.isArray(languageData.textData) &&
          languageData.textData.map((item) => (
            <div key={item.id} className={styles.privacyPolicyItem}>
              {item.type === `subtitle` ? (
                <h4 className={styles.privacyPolicySubtitle}>{item.value}</h4>
              ) : null}
              {item.type === `paragraph` ? (
                <p className={styles.privacyPolicyText}>{item.value}</p>
              ) : null}
              {item.type === `list` ? (
                <p className={styles.privacyPolicyList}>{item.value}</p>
              ) : null}
            </div>
          ))}
      </div>
    </Container>
  );
};

export default PrivacyPolicy;
