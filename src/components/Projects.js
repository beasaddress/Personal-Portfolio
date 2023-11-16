import { Col, Container, Tab } from "react-bootstrap";
import { ProjectCard } from './ProjectCard';
import depoImg from '../assets/img/depoImg.PNG';
import figlanceImg from '../assets/img/fiGlance.JPG';
import networkApiImg from '../assets/img/mongoProject.JPG';

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
            <Container>
                <Row>
                    <Col>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                        <h2> Projects</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore <br></br>magna aliqua. Ut enim ad minim veniam.</p>
                        <Nav variant="pils" defaultActiveKey="/home">
                         <Nav.Item>
                                <Nav.Link eventKey="first">Tab One</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="second">Tab Two</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="third">Tab Three</Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                                <Row>
                                    {
                                        projects.map((project, index) => {
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
                            <Tab.Pane eventKey="second">Lorem</Tab.Pane>
                            <Tab.Pane eventKey="third">Lorem</Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    </Col>
                </Row>
            </Container>
        </section>
    )
}