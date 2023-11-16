import { useEffect, useState } from 'react';
import {Container, Row, Col } from "react-bootstrap";
import { ArrowRightCircle } from "react-bootstrap-icons";
import headerImg from '../assets/img/headerImg.svg';

export const Banner = () => {
    const [loopNum, setLoopNum] = useState(0);
    const [isDeleting, setIsDeleting]  = useState(false);
    const toRotate = [ "Full Stack", "Web Dev", "Front & Back" ];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300- Math.random() * 100);
    const period = 2000;

useEffect(() => {
    let ticker = setInterval(() => {
        tick();
    }, delta)
    return () => { clearInterval(ticker)};
}, [text])

const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length -1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if(isDeleting) {
        setDelta(prevDelta => prevDelta/2)
    }

    if(!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
    }

}

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7}>
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1 style={{ height: '100px', lineHeight: '1.5' }} >{`Hi, I'm Beatriz`} <br /> <span className="wrap" >{text}</span></h1>                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tincidunt, nunc auctor euismod malesuada, purus augue tincidunt elit. Fusce suscipit, nisl vel fringilla sagittis, quam justo auctor nisi, ac tincidunt ante libero nec orci. Suspendisse in odio augue. Integer vel viverra nibh.</p>
                        <button onClick={() => console.log('connect')}>Connect With Me <ArrowRightCircle size={25} /></button>
                    </Col>
                    <Col xs={12} md={6} xl={5}>
                        <img src={headerImg} alt="header img" />
                    </Col>
                </Row>
            </Container>
        </section>
    )
}