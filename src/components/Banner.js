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
    const period = 3000;
    


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
        setDelta(prevDelta => prevDelta/4);
    }

    if(!isDeleting && updatedText === fullText) {
        
        setIsDeleting(true);
        setDelta(period);
    } else if(isDeleting && updatedText === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(100);
    }

}

    return (
        <section className="banner" id="home">
            <Container>
                <Row className="align-items-center">
                    <Col xs={12} md={6} xl={7} className="intro">
                        <span className="tagline">Welcome to my Portfolio</span>
                        <h1 style={{ height: '100px', lineHeight: '1.5' }} >{`Beatriz Sandoval`} <br /> <span className="wrap" >{text}</span><span className="cursor">|</span></h1>   
                                         
                        <p>welcome to my digital garden! as a junior developer, I have a passion for problem-solving and a knack for turning complexity into elegant simplicity. my portfolio isn't just a showcase-it's an invitation to explore possibilities and build something great!</p>
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