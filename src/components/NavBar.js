import { Navbar, Container, Nav } from "react-bootstrap";
import { useState, useEffect } from "react";
import logo from '../assets/img/logo.svg';
import githubIcon from '../assets/img/github.svg';
import linkedInIcon from '../assets/img/linkedIn.svg';

export const NavBar = () => {
    const [activeLink, setActiveLink] = useState('home');
    const [scrolled, setScrolled] = useState(false);
    const [expanded, setExpanded] = useState(false);

    useEffect(() => {
        const onScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false);
                setExpanded(false);
            }
        }

        window.addEventListener("scroll", onScroll);

        return () => window.removeEventListener('scroll', onScroll);
    }, [])

    const onUpdateActiveLink = (value) => {
        setActiveLink(value);
    }
    const handleToggle = () => {
      setExpanded(!expanded);
    };
    return (
       
    <Navbar expanded={expanded} expand="lg"  className={` ${scrolled ? "scrolled" : ""}${expanded ? " expanded-navbar" : ""}`}>
      <Container className="align-items-center">
        <Navbar.Brand href="#home">
            <img src={logo} alt="logo" />
        </Navbar.Brand>
        <Navbar.Toggle onClick={() => {
          setExpanded(expanded ? false : "expanded");
          handleToggle();
          setScrolled(true);
          }} 
          aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>    
        <Navbar.Collapse id="basic-navbar-nav" className={expanded ? 'show': ''}>
          <Nav className="ms-auto">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
            onUpdateActiveLink('home');
            setExpanded(false);          
            }}
          >Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
              onUpdateActiveLink('skills');
              setExpanded(false);
            }}
            >Skills</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => {
              onUpdateActiveLink('projects');
              setExpanded(false);
            }}
            >Projects</Nav.Link>
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
                <a href="#"><img src={githubIcon} alt="icon for github link" /></a>
                <a href="#"><img src={linkedInIcon} alt="icon for linkedIn link" /></a>
            </div>
            <button className ="vvd" onClick={() => console.log('connect')}><span>Let's Connect</span></button>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );

}