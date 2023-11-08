import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from "reactstrap";
import { Link } from 'react-router-dom';
import "../../styles/footer.css";

const quickLinks = [
  {
    path: "/about",
    display: "About",
  },

  {
    path: "#",
    display: "Privacy Policy",
  },

  {
    path: "/cars",
    display: "Car Listing",
  },
  {
    path: "/blogs",
    display: "Blog",
  },

  {
    path: "/contact",
    display: "Contact",
  },
  {
    path:"/login",
    display:"Login",
  },
  {
    path:"/signup",
    display:"SingUp",
  }
  
];


const Footer = () => {

  const date =new Date()
  const year=date.getFullYear()
  return (
    <footer className='footer'>
      <Container>
        <Row>
          <Col lg='4' md='4' sm='12'>
            <div className='logo footer__logo'>
              <h1>
                <Link to='/home' className='d-flex align-items-center gap-3'>
                  <i class="ri-car-line"></i>
                  <span>Book Car</span>
                </Link>
              </h1>
            </div>
            <p className="footer__logo-content">
              Nothing beats that first drive in your new car.
              No one buys this for you, You have to earn it My very first car. Definitely worth the wait!
              If you know me, you know how excited I’m about my newest addition to the garage.
              Start your new car and take a ride in it.
            </p>
          </Col>
          <Col lg='2' md='4' sm='6'>
            <div className='mb-4'>
              <h5 className='footer__link-title'>
                Quick Links
              </h5>
              <ListGroup>
                {
                  quickLinks.map((item, index) => (
                    <ListGroupItem key={index} className='p-0 mt-3
                    quick__link'>
                      <Link to={item.path}>{item.display}
                      </Link>
                    </ListGroupItem>
                  ))}
              </ListGroup>
            </div>
          </Col>
          <Col lg='3' md='4' sm='6'>
            <div className="mb-4">
            <h5 className='footer__link-title mb-4'>
                Head Office
              </h5>
              <p className='office__info'>Office-Address:423, Poonamallee High Rd, SBI Officers Colony, Arumbakkam, Chennai, Tamil Nadu 600106</p>
              <p className='office__info'>Phone No: +919022905957 </p>
              <p className='office__info'>Email:custmail@ford.com. </p>
              <p className='office__info'>Office-Open: 9am - 7pm</p>
            </div>
          </Col>
          <Col lg='3' md='4' sm='12'>
            <div className="mb-4">
              <h5 className='footer__link-title'>Newsletter</h5>
              <p className='section__description'>Subscribe our newsletter</p>
              <div className="newsletter">
                <input type="email" placeholder='Email' />
                <span>
                <i class="ri-send-plane-fill"></i>
                </span>
              </div>
            </div>
          </Col>

          <Col lg='12'>
            <div className="footer__bottom">
              <p className="section__description d-flex 
              align-items-center justify-content-center gap-1 pt-4">
              <i class="ri-copyright-line"></i>Copyright {year} , Developed by Akilesh. All rights reserved.
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;