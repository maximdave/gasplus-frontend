import React from "react";
import Button from "../components/Button";
import { Container } from "react-bootstrap";
import Navbar from "../components/Navbar";
import { BsEnvelope } from "react-icons/bs";

import "./LandingPage.css";
const LandingPage = () => {
  const About = [
    "Our clients are notified on updates about LNG",
    "Our clients are notified on updates about GASPLUS",
    "Our clients get detailed understanding of how our processes work",
    "Our clients can track their supply with ease",
    "Our clients can view transaction records with GASPLUS",
    "Our clients experience convinence while making supply request",
    "We provide our clients with a reliable and recognised source for purchase thereby reducing risks associated with third party purchase or unreliable source",
  ];
  const services = [
    {
      topic: "Competitive Price",
      details:
        "Gasplus offers the most competitive LNG pricing for our end users with ready to use facilities for storage and regasification.",
    },
    {
      topic: "Guaranteed Supply",
      details:
        "Guaranteed annual supply of over a 500,000MT per annum of LNG to end-users who are off grid, underserved, in isolated areas and urban areas",
    },
    {
      topic: "Skilled WorkForce",
      details:
        "Access to a pool of over 2,500 highly skilled local oil & gas work force",
    },
    {
      topic: "Guaranteed Supply",
      details:
        "Extensive local awareness and experience in managing Oil & Gas facilities",
    },
    {
      topic: "Fully Regulatory & HSE Complaint",
      details:
        "Fully meet regulatory/local content obligations and HSE Complaint.",
    },
    {
      topic: "Competitive Price",
      details:
        "Gas Plus Synergy Limited (Gas Plus) has recently signed a 500,000 MTPA Seller Purchase Agreement (SPA) with Nigeria LNG (NLNG) for Domestic LNG (DLNG) Supply and Distribution Project.",
    },
  ];
  return (
    <>
      <Container fluid className="landing-page">
        <Navbar />

        <div className="mx-lg-4 mx-sm-2 px-1 header-text-wrapper">
          <h3 className="header-text">
            Best provider of onshore & offshore oil and gas infrastructure/asset
            development!
          </h3>
          <p className="body-text">
            Gasplus LNG signed the domestic LNG Scheme SPA with NLNG for the
            supply of LNG to domestic market. Gasplus virtual pipeline will
            connect customers who are in the remotest of places surpassing the
            reach of conventional pipelines.
          </p>

          <div className="d-flex mt-5">
            <Button style={{ marginRight: "30px" }}>Our Services</Button>
            <Button variant="secondary">Register Here</Button>
          </div>
        </div>
      </Container>
      <Container fluid className="px-lg-5">
        <div className="row d-flex w-100 contact-section-div bg-primary">
          <div className="col-sm-6 bg-danger">
            <div className="col-xs-12">
              <div className="d-flex align-items-center">
                <div className="icon-bg">
                  <BsEnvelope color="#ffffff" size={"24"} />
                </div>
                <div className="contact-card">
                  <h3>Contact Us</h3>
                  <p>Email: Promina@7oroof.com </p>
                  <p>Phone: 55 654 541 17</p>
                </div>
              </div>
            </div>
            <div className="col-sm-12">
              <div className="d-flex align-items-center w-100">
                <div className="icon-bg w-auto">
                  <BsEnvelope color="#ffffff" size={"24"} />
                </div>
                <div className="contact-card ml-3">
                  <h3>Our Location</h3>
                  <p>Ibukun house, Block 105 Baderinwa Alabi St</p>
                  <p>Lekki Phase 1 106104, Lagos, Nigeria</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-xs-6">dsfa</div>
        </div>
      </Container>

      <Container fluid className="services">
        <h3 className="text-center primary-text">Our Services</h3>
        <p className="text-center service-text">
          These are the things that make gas plus(platform) unique and best for
          the public, organizations, power houses, factories etc…
        </p>

        <div className="row mt-5">
          <div className="col-md-4"></div>
          <div className="col-md-8">
            <div className="row">
              {services.map((service, index) => (
                <div className="col-md-4 d-flex" key={index}>
                  <div>
                    <h2 className="mr-3">{index + 1}</h2>
                  </div>
                  <div>
                    <h4>{service.topic}</h4>
                    <p>{service.details}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>

      <Container fluid className="mt-5">
        <h3 className="text-center primary-text">Our Clients</h3>
        <div className="row">
          <div className="col-xs-3"></div>
          <div className="col-xs-3"></div>
          <div className="col-xs-3"></div>
          <div className="col-xs-3"></div>
        </div>
      </Container>

      <Container fluid className="bg-primary about-gasplus">
        <div className="row px-3 text-white">
          <div className="col-md-8">
            <h3>We’ve Got The Best Deal Out There.</h3>
            {About.map((el, index) => (
              <p key={index}>{el}</p>
            ))}
          </div>
          <div className="col-md-4"></div>
        </div>
      </Container>

      <Container fluid></Container>

      <Container fluid className="pr-0 footer-section">
        <div className="row bg-primary">
          <div className="col-md-3"></div>
          <div className="col-md-3">
            <p>
              Gasplus LNG signed the domestic LNG Scheme SPA with NLNG for the
              supply of LNG to domestic market. Gasplus virtual pipeline will
              connect customers who are in the remotest of places surpassing the
              reach of conventional pipelines.
            </p>
          </div>
          <div className="col-md-3">
            <ul>
              <li>Home</li>
              <li>Services</li>
              <li>Why Gasplus</li>
              <li>Our clients</li>
              <li>Contact Us</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Contact Us Today</h3>
            <textarea placeholder="Send Us A Message Today"></textarea>
            <button>Send</button>
          </div>
        </div>
      </Container>
      <Container fluid className="w-100 conditions">
        <div className="">
          <p className="text-center text-white">
            © 2022 Gasplus LTD - GPI. All rights reserved.
          </p>
        </div>
      </Container>
    </>
  );
};

export default LandingPage;
