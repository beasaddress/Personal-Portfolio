import logo from '../assets/img/logo.svg';
import github from '../assets/img/github.svg';
import linkedIn from '../assets/img/linkedIn.svg';
import { Container, Row, Col } from "react-bootstrap";

export const Footer = () => {
    return (
        <footer className="footer">
            <Container>
                <Row className="align-items-center">
                    <Col sm={6} className="logo">
                       <img src={logo} alt="logo"/>
                    </Col>
                    <Col sm={6} className="text-center text-sm-end">
                        <div className="social-icon">
                        <a href="https://github.com/beasaddress" target="_blank" rel="noopener noreferrer"><img src={github} alt="icon for github link" /></a>
                <a href="https://www.linkedin.com/in/beatriz-sandoval-36312016b/"target="_blank" rel="noopener noreferrer" ><img src={linkedIn} alt="icon for linkedIn link" /></a>
                        </div>
                        <p>Copyright 2023. All Rights Reserved</p>
                    </Col>
                </Row>
            </Container>
        </footer>
    )
}