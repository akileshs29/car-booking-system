import React from "react";
import CommonSection from "../components/UI/CommonSection";
import Helmet from '../components/Helmet/Helmet';
import AboutSection from '../components/UI/Aboutsection';
import { Container, Row, Col } from "reactstrap";
import BecomeDriverSection from '../components/UI/BecomeDriverSection';
import driverImg from '../assets/all-images/mus3.jpg'
import OurMembers from "../components/UI/OurMembers";
import '../styles/about.css';


const About = () => {
    return <Helmet title='About'>
        <CommonSection title='About' />
        <AboutSection aboutClass="aboutPage"/>

        <section className="about__page-section">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12'>
                        <div className="about__page-img">
                            <img src={driverImg} alt="" className="w-100 rounded-3" />
                        </div>
                    </Col>
                    <Col lg='6' md='6' sm='12'>
                        <div className="about__page-content">
                            <h2 className="section__title">We Are Committed To 
                            Provide Safe Ride Solutions</h2>
                            <p className="Section__description">
                            The aim is to create an environment that is helping 
                            to sell a particular lifestyle in which the cars play a key role. 
                            The showroom helps to elicit an emotional connection between the 
                            client and the cars on display and ultimately drive sales.
                            </p>

                            <p className="Section__description">
                            The aim is to create an environment that is helping 
                            to sell a particular lifestyle in which the cars play a key role. 
                            The showroom helps to elicit an emotional connection between the 
                            client and the cars on display and ultimately drive sales.
                            </p>
                            <div className="d-flex align-items-center gap-3 mt-4">
                                <span className="fs-4"><i class="ri-phone-line"></i></span>

                                <div>
                                    <h6 className="section__subtitle">Need Any Help?</h6>
                                    <h4>+91-1800-419-3000</h4>
                                </div>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
        <BecomeDriverSection/>

        <section>
            <Container>
                <Row>
                    <Col lg='12' className="mb-5 text-center">
                        <h6 className="section__subtitle">Experts</h6>
                        <h2 className="section__title">Our Members</h2>
                    </Col>
                    <OurMembers/>
                </Row>
            </Container>
        </section>
    </Helmet>
};

export default About;