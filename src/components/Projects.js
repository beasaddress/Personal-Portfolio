import { Col, Container, Nav, Row, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import depoImg from '../assets/img/depoImg.PNG';
import figlanceImg from '../assets/img/fiGlance.JPG';
import networkApiImg from '../assets/img/mongoProject.JPG';
import ecommerceImg from '../assets/img/ecommerceImg.JPG';
import mySqlImg from '../assets/img/mySql.JPG';


export const Projects = () => {
    const projects = [
        {
            title: 'Design Depo',
            description: 'Color Story Generator',
            imgUrl: depoImg,
        },
        {
           title: 'Fi-Glance',
           description: 'Personal Finance Manager utlizing Plaid API',
           imgUrl: figlanceImg,
        },
        {
            title: 'Social Network API',
            description: 'Back-end for a social network web application utilizing MongoDB, mongoose, Express.js, Insomnia, and Node.js',
            imgUrl: networkApiImg,
        },
        {
            title: 'E-Commerce Back-End',
            description: 'The back-end for an E-Commerce site utilizing Express.js, MySQL, Insomnia and Sequelize',
            imgUrl: ecommerceImg,
        },
        {
            title: 'Employee Database',
            description: 'A command-line application to manage an employee database using Node.js, Inquirer, and MySQL.',
            imgUrl: mySqlImg,
        },
    ];

    return (
        <section className="project" id="project">
            <Container className="proj-box">
                <Row>
                    <Col> 
                                         
                        <h2> Projects...</h2>
                        <p className="mx-auto">Here, you can check out my recent projects. You'll find my tech adventures from practical command-line apps all the way to the MERN stack. Click the box and you'll be taken to my tech archives to see the magic! </p>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                         <Nav.Item>
                                <Nav.Link eventKey="first">Full Stack Apps</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Back-End Work</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Front-End Work</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row className="mx-auto justify-content-center">
                                    {
                                        projects.slice(0,2).map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Row>
                                    {
                                        projects.slice(2,5).map((project, index) => {
                                            return (
                                                <ProjectCard
                                                    key={index}
                                                    {...project}
                                                    />
                                            )
                                        })
                                    }
                                </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                         
                    </Col>
                </Row>
            </Container>
            
        </section>
    )
}