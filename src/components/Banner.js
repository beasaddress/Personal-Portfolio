import {Container, Row } from "react-bootstrap";

export const Banner = () => {
    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1>{`Hi, I'm webdecoded`}<span classname="wrap">web developer</span></h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nunc auctor euismod malesuada, purus augue tincidunt elit. Fusce suscipit, nisl vel fringilla sagittis, quam justo auctor nisi, ac tincidunt ante libero nec orci. Suspendisse in odio augue. Integer vel viverra nibh.</p>
                        <button onClick={() => console.log('connect') }></button>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}