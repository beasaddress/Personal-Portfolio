import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Container, Col, Row } from "react-bootstrap";
import JsSkill from '../assets/img/jsSkill.svg';
import reactSkill from '../assets/img/reactSkill.svg';
import resDesign from '../assets/img/ResDesign.svg';
import APISkill from '../assets/img/ApiSkill.svg';
import DBmgmt from '../assets/img/DbMgmt.svg';
import jest from '../assets/img/debugging.svg';
import agile from '../assets/img/agile.svg';

export const Skills = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };

      return (
        <section className="skills" id="skills">
            <Container>
                <Row>
                    <Col>
                        <div className="skill-bx">
                            <h2>
                                Skills...
                            </h2>
                            <p>Explore my tech toolkit—a mix of coding languages, frameworks, and software skills. Whether it's crafting user-friendly interfaces or navigating through the ever-evolving tech landscape, my expertise is your practical guide to all things digital.</p>
                            <Carousel responsive={responsive} infinite={true}  className="skill-slider">
                                <div className="item">
                                  <img src={JsSkill} alt="JavaScript logog" />
                                  <h5>JavaScript/HTML/CSS</h5>
                                </div>
                                <div className="item">
                                  <img src={reactSkill} alt="react logo" />
                                  <h5>React</h5>
                                </div>
                                <div className="item">
                                  <img src={resDesign} alt="different devices graphic" />
                                  <h5>Responsive Design</h5>
                                </div>
                                <div className="item">
                                  <img src={APISkill} alt="API graphic" />
                                  <h5>RESTful API's</h5>
                                </div>
                                <div className="item">
                                  <img src={DBmgmt} alt="mongoDB and mySQL logo" />
                                  <h5>Database Management</h5>
                                </div>
                                <div className="item">
                                  <img src={jest} alt="debugging graphic" />
                                  <h5>Testing/Debugging</h5>
                                </div>
                                <div className="item">
                                  <img src={agile} alt="teamwork graphic" />
                                  <h5>Agile/Scrum Methodologies</h5>
                                </div>
                            </Carousel>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
      )

}