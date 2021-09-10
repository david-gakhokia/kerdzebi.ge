import styles from "../styles/Footer.module.css";
import { Container, Row, Col } from "react-bootstrap";
import {
  FaFacebookSquare,
  FaInstagram,
  FaRegClock,
  FaPhoneAlt,
  FaMapPin,
} from "react-icons/fa";

export default function Footer() {
  return (
    <Container>
      <Row>
        <Col sm={6} md={6} ls={3} xl={3}>
          <div>
            <h3>Social Networks</h3>
            <ul className={styles.list}>
              <FaFacebookSquare className={styles.fb} />
              <FaInstagram className={styles.ig} />
            </ul>
          </div>
        </Col>

        <Col sm={6} md={6} ls={3} xl={3}>
          <div>
            <h3>Working hours</h3>

            <p>
              <FaRegClock />
              &nbsp; Monday-Sunday 12:00 -22:00
            </p>
          </div>
        </Col>

        <Col sm={6} md={6} ls={3} xl={3}>
          <div>
            <h3>Contacts</h3>
            <p>
              <FaPhoneAlt />
              &nbsp;(+995) 032 294 90 00
            </p>
          </div>
        </Col>

        <Col sm={6} md={6} ls={3} xl={3}>
          <div>
            <h3>Address</h3>
            <p>
              <FaMapPin />
              &nbsp;111, Gorgiladze str. Batumi, Georgia
            </p>
          </div>
        </Col>
      </Row>
    </Container>
  );
}
