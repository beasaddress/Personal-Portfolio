import {Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from "../assets/img"

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm webdecoded`}<span classname="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nunc auctor euismod malesuada, purus augue tincidunt elit. Fusce suscipit, nisl vel fringilla sagittis, quam justo auctor nisi, ac tincidunt ante libero nec orci. Suspendisse in odio augue. Integer vel viverra nibh.</p>
                        <button onClick={() => console.log('connect')}>Connect With Me <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}