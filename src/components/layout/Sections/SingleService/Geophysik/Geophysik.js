import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import styles from './Geophysik.module.scss';

import SectionHeader from '../../../../common/SectionHeader/SectionHeader';

const Geophysik = () => (
  <Container className={styles.root}>
    <Row>
      <Col className={`col-12 col-lg-6 ${styles.serviceColGeophysik}`}>
        <img
          src="/images/services/service6.webp"
          alt="&nbsp;"
          className={styles.serviceImageGeophysik}
        />
      </Col>
      <Col
        className={`col-12 col-lg-6 order-first order-lg-0 ${styles.serviceCol}`}
      >
        <div className={styles.aboutUsTextContainer}>
          <SectionHeader>Geophysikalische Prospektion</SectionHeader>
          <p className={styles.serviceText}>
            Eine der Spezialisierungen unseres Unternehmens ist die
            geophysikalische Prospektion. Diese Methode ermöglicht die
            Voruntersuchung einer archäologischen Stätte ohne
            Ausgrabungsmaßnahmen. Anthropogene Eingriffe können vorläufig
            bestimmt und bewertet werden, auch hinsichtlich der flächenmässigen
            Ausdehnung eines archäologischen Fundplatzes. Dies erleichtert eine
            vorläufige Schätzung zu Dauer und Aufwand eine archäologische
            Ausgrabung. Zielgerichtet können spezifische Zonen und deren
            archäologisches Potenzial in einem Untersuchungsfeld bestimmt werden
            wie z.B. Rückschlüsse auf die Anzahl archäologischer Objekte oder
            Befundcluster. Umgekehrt können auch Zonen mit geringem
            archäologischem Potential ausgewiesen und ein Vorhandensein
            archäologischer Befunde weitgehend ausgeschlossen werden. Aus diesem
            Grunde kann die geophysikalische Prospektion die Planung von
            Erdeingriffen in Verbindung mit den archäologischen Arbeiten
            erleichtern. Weiter dient diese Methode, das Wissen über eine
            archäologische Stätte zu vervollständigen und die anschließende
            Auswertung in einen größeren Zusammenhang zu stellen.
          </p>
          {/* <br />
          <br />
          <p className={styles.spanWord}>Mehr erfahren: </p>
          <p className={styles.serviceText}>
            Das Unternehmen Archäomedes GbR führt breitflächige geophysikalische
            Vermessungen, kleinere Sondageuntersuchungen und explorative
            Forschungen mit den folgenden Methoden durch: Geomagnetik,
            Elektrofusion und Georadar (GPR). Dies sind geophysikalische
            Methoden im flachen Untergrund, die am häufigsten in der Archäologie
            verwendet werden.
          </p>
          <br />
          <p className={styles.serviceText}>
            <span className={styles.spanWord}>
              Die geomagnetische Prospektion
            </span>
            {` `}
            ist eine Methode, die sich auf die Untersuchung von Änderungen im
            lokalen Magnetfeld bezieht. Archäologische Objekte und Artefakte
            können andere magnetische Werte aufweisen als die Durchschnittswerte
            des Erdmagnetfeldes in einem spezifischen Umfeld. Indem die
            Gerätesensoren auf das lokale Magnetfeld eingestellt werden, können
            anomale Werte erfasst werden, die das natürliche Magnetfeld stören.
            Dies ermöglicht Rückschlüsse auf menschliche Bodeneingriffe wie auch
            die Beschaffenheit und Größe von archäologischen Befunden. Mit
            dieser hocheffektiven Methode ist lassen sich Voruntersuchungen von
            großen Flächenbereiche innerhalb kürzester Zeit bewerkstelligen.
          </p>
          <br />
          <p className={styles.serviceText}>
            <span className={styles.spanWord}>Die Elektrofusionsmethode</span>
            {` `}
            ist ist eine Methode der flachen Geophysik, die auf der Untersuchung
            des elektrischen Bodenwiderstands basiert, indem ein geschlossenes
            System von Messelektroden geschaffen wird, durch die dann Strom von
            geringer Intensität übertragen wird. Das Messgerät erfasst die Werte
            des elektrischen Widerstands überall im Prüfbereich. Im Anschluss
            werden die gesammelten Messungen auf eine grafische Karte des
            Untersuchungsgebietes unterhalb der heutigen Oberfläche
            interpoliert. Diese Methode ist ideal für die Untersuchung von
            Mauern oder architektonischen Objekten unterhalb der heutigen
            Oberfläche, was sie ideal zum Einsatz in bebauten Gebieten wie
            Städten macht. Es ist auch möglich, ein Elektrofusionsprofil zu
            erstellen, mit dem die Tiefe von stratigraphischen Schichten
            bestimmt werden kann.
          </p>
          <br />
          <p className={styles.serviceText}>
            Das <span className={styles.spanWord}>GPR-Verfahren</span> gehört zu
            den elektromagnetischen Verfahren. Die GPR-Antenne sendet
            elektromagnetische Wellen mit einer bestimmten, zuvor ausgewählten
            Frequenz aus (ausgewählt in Abhängigkeit von der Art des zu
            untersuchenden Objekts, der Geologie usw.), die dann als Sonar zum
            Empfänger zurückkehrt. Das Gerät erstellt so den Querschnitt eines
            bestimmten Profils auf der Grundlage dieser Wellenlänge. Aus solchen
            Profilen ist es auch möglich, eine 2D-Karte von Anomalien eines
            bestimmten Gebiets in einer spezifischen Tiefe zu erstellen. Das
            Georadar eignet sich hervorragend für die Suche nach Hohlräumen,
            Krypten usw. und kann auch die Tiefenanomalien von Objekten sehr
            genau bestimmen.
          </p> */}
        </div>
      </Col>
    </Row>
  </Container>
);

export default Geophysik;
