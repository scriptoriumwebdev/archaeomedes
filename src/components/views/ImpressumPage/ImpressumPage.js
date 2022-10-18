/* eslint-disable react/style-prop-object */
/* eslint-disable comma-dangle */
import React, { useRef } from 'react';
import { Container } from 'react-bootstrap';
import styles from './ImpressumPage.module.scss';
import SectionHeader from '../../common/SectionHeader/SectionHeader';

import impressum from '../../../data/impressum.json';
import utils from '../../../data/utils.json';

const Impressum = () => {
  const languageData = impressum.data.find(
    // eslint-disable-next-line prettier/prettier
    (i) => i.language === utils.language,
  );

  const impressumInfoRef = useRef(null);

  return (
    <Container className={styles.root}>
      <SectionHeader>{languageData.title}</SectionHeader>
      <div className={styles.impressumTextContainer} ref={impressumInfoRef}>
        {languageData.textData &&
          Array.isArray(languageData.textData) &&
          languageData.textData.map((item) => (
            <div key={item.id} className={styles.impressumItem}>
              {item.type === `subtitle` ? (
                <h4 className={styles.impressumSubtitle}>{item.value}</h4>
              ) : null}
              {item.type === `paragraph` ? (
                <p className={styles.impressumText}>{item.value}</p>
              ) : null}
            </div>
          ))}
      </div>
    </Container>
  );
};

export default Impressum;
