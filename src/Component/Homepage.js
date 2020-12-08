import React, { Component } from 'react';
import Intro from './Intro';
import LatestNews from './LatestNews';
import LatestProps from './LatestProps';
import FooterPage from './FooterPage';
import Agents from './Agents';
import Navbar from './Navbar';
import SearchBar from './SearchBar';
import PropertyDetails from './PropertyDetails'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


export default class Homepage extends Component {
    render() {
        return (
          <div>
            <div>
              <meta charSet="utf-8" />
              <meta
                content="width=device-width, initial-scale=1.0"
                name="viewport"
              />
              <title>EstateAgency Bootstrap Template - Index</title>
              <meta content name="descriptison" />
              <meta content name="keywords" />
              {/* Favicons */}
              <link href="assets/img/favicon.png" rel="icon" />
              <link
                href="assets/img/apple-touch-icon.png"
                rel="apple-touch-icon"
              />
              {/* Google Fonts */}
              <link
                href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700"
                rel="stylesheet"
              />
              {/* Vendor CSS Files */}
              <link
                href="assets/vendor/bootstrap/css/bootstrap.min.css"
                rel="stylesheet"
              />
              <link
                href="assets/vendor/ionicons/css/ionicons.min.css"
                rel="stylesheet"
              />
              <link
                href="assets/vendor/animate.css/animate.min.css"
                rel="stylesheet"
              />
              <link
                href="assets/vendor/font-awesome/css/font-awesome.min.css"
                rel="stylesheet"
              />
              <link
                href="assets/vendor/owl.carousel/assets/owl.carousel.min.css"
                rel="stylesheet"
              />
              {/* Template Main CSS File */}
              {/* =======================================================
  * Template Name: EstateAgency - v2.1.0
  * Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
              {/* ======= Property Search Section ======= */}
              <div className="click-closed" />
              {/*/ Form Search Star /*/}
              <SearchBar />
              {/* End Property Search Section */}&gt;
              {/* ======= Header/Navbar ======= */}
              <Navbar />
              {/* End Header/Navbar */}
              {/* ======= Intro Section ======= */}
              <Intro />
              {/* End Intro Section */}
              <main id="main">
                {/* ======= Latest Properties Section ======= */}
                <Router>
                  <Switch>
                    <Route exact path="/">
                      <LatestProps />
                      {/* End Latest Properties Section */}
                      {/* ======= Agents Section ======= */}
                      <Agents />
                      {/* End Agents Section */}
                      {/* ======= Latest News Section ======= */}
                      <LatestNews />
                      {/* End Latest News Section */}
                    </Route>
                    <Route path="/about">
                      <Intro />
                    </Route>
                    <Route path="/property-grid">
                      <PropertyDetails />
                    </Route>
                  </Switch>
                </Router>
              </main>
              {/* End #main */}
              {/* ======= Footer ======= */}
              <FooterPage />
              {/* End  Footer */}
              <a href="#" className="back-to-top">
                <i className="fa fa-chevron-up" />
              </a>
              <div id="preloader" />
              {/* Vendor JS Files */}
              {/* Template Main JS File */}
            </div>
          </div>
        );
    }
}
