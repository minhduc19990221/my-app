import React, { Component } from 'react'

export default class PropertyDetails extends Component {
    render() {
        return (
            <div>
                <div>
        <meta charSet="utf-8" />
        <meta content="width=device-width, initial-scale=1.0" name="viewport" />
        <title>EstateAgency Bootstrap Template - Index</title>
        <meta content name="descriptison" />
        <meta content name="keywords" />
        {/* Favicons */}
        <link href="assets/img/favicon.png" rel="icon" />
        <link href="assets/img/apple-touch-icon.png" rel="apple-touch-icon" />
        {/* Google Fonts */}
        <link href="https://fonts.googleapis.com/css?family=Poppins:300,400,500,600,700" rel="stylesheet" />
        {/* Vendor CSS Files */}
        <link href="assets/vendor/bootstrap/css/bootstrap.min.css" rel="stylesheet" />
        <link href="assets/vendor/ionicons/css/ionicons.min.css" rel="stylesheet" />
        <link href="assets/vendor/animate.css/animate.min.css" rel="stylesheet" />
        <link href="assets/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet" />
        <link href="assets/vendor/owl.carousel/assets/owl.carousel.min.css" rel="stylesheet" />
        {/* Template Main CSS File */}
        <link href="assets/css/style.css" rel="stylesheet" />
        {/* =======================================================
  * Template Name: EstateAgency - v2.1.0
  * Template URL: https://bootstrapmade.com/real-estate-agency-bootstrap-template/
  * Author: BootstrapMade.com
  * License: https://bootstrapmade.com/license/
  ======================================================== */}
        {/* ======= Property Search Section ======= */}
        <div className="click-closed" />
        {/*/ Form Search Star /*/}
        <div className="box-collapse">
          <div className="title-box-d">
            <h3 className="title-d">Search Property</h3>
          </div>
          <span className="close-box-collapse right-boxed ion-ios-close" />
          <div className="box-collapse-wrap form">
            <form className="form-a">
              <div className="row">
                <div className="col-md-12 mb-2">
                  <div className="form-group">
                    <label htmlFor="Type">Keyword</label>
                    <input type="text" className="form-control form-control-lg form-control-a" placeholder="Keyword" />
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="Type">Type</label>
                    <select className="form-control form-control-lg form-control-a" id="Type">
                      <option>All Type</option>
                      <option>For Rent</option>
                      <option>For Sale</option>
                      <option>Open House</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="city">City</label>
                    <select className="form-control form-control-lg form-control-a" id="city">
                      <option>All City</option>
                      <option>Alabama</option>
                      <option>Arizona</option>
                      <option>California</option>
                      <option>Colorado</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="bedrooms">Bedrooms</label>
                    <select className="form-control form-control-lg form-control-a" id="bedrooms">
                      <option>Any</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="garages">Garages</label>
                    <select className="form-control form-control-lg form-control-a" id="garages">
                      <option>Any</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                      <option>04</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="bathrooms">Bathrooms</label>
                    <select className="form-control form-control-lg form-control-a" id="bathrooms">
                      <option>Any</option>
                      <option>01</option>
                      <option>02</option>
                      <option>03</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-6 mb-2">
                  <div className="form-group">
                    <label htmlFor="price">Min Price</label>
                    <select className="form-control form-control-lg form-control-a" id="price">
                      <option>Unlimite</option>
                      <option>$50,000</option>
                      <option>$100,000</option>
                      <option>$150,000</option>
                      <option>$200,000</option>
                    </select>
                  </div>
                </div>
                <div className="col-md-12">
                  <button type="submit" className="btn btn-b">Search Property</button>
                </div>
              </div>
            </form>
          </div>
        </div>{/* End Property Search Section */}&gt;
        {/* ======= Header/Navbar ======= */}
        <nav className="navbar navbar-default navbar-trans navbar-expand-lg fixed-top">
          <div className="container">
            <button className="navbar-toggler collapsed" type="button" data-toggle="collapse" data-target="#navbarDefault" aria-controls="navbarDefault" aria-expanded="false" aria-label="Toggle navigation">
              <span />
              <span />
              <span />
            </button>
            <a className="navbar-brand text-brand" href="index.html">Estate<span className="color-b">Agency</span></a>
            <button type="button" className="btn btn-link nav-search navbar-toggle-box-collapse d-md-none" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
              <span className="fa fa-search" aria-hidden="true" />
            </button>
            <div className="navbar-collapse collapse justify-content-center" id="navbarDefault">
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link active" href="index.html">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="about.html">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="property-grid.html">Property</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="blog-grid.html">Blog</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Pages
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="property-single.html">Property Single</a>
                    <a className="dropdown-item" href="blog-single.html">Blog Single</a>
                    <a className="dropdown-item" href="agents-grid.html">Agents Grid</a>
                    <a className="dropdown-item" href="agent-single.html">Agent Single</a>
                  </div>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="contact.html">Contact</a>
                </li>
              </ul>
            </div>
            <button type="button" className="btn btn-b-n navbar-toggle-box-collapse d-none d-md-block" data-toggle="collapse" data-target="#navbarTogglerDemo01" aria-expanded="false">
              <span className="fa fa-search" aria-hidden="true" />
            </button>
          </div>
        </nav>{/* End Header/Navbar */}
        <main id="main">
          {/* ======= Intro Single ======= */}
          <section className="intro-single">
            <div className="container">
              <div className="row">
                <div className="col-md-12 col-lg-8">
                  <div className="title-single-box">
                    <h1 className="title-single">304 Blaster Up</h1>
                    <span className="color-text-a">Chicago, IL 606543</span>
                  </div>
                </div>
                <div className="col-md-12 col-lg-4">
                  <nav aria-label="breadcrumb" className="breadcrumb-box d-flex justify-content-lg-end">
                    <ol className="breadcrumb">
                      <li className="breadcrumb-item">
                        <a href="index.html">Home</a>
                      </li>
                      <li className="breadcrumb-item">
                        <a href="property-grid.html">Properties</a>
                      </li>
                      <li className="breadcrumb-item active" aria-current="page">
                        304 Blaster Up
                      </li>
                    </ol>
                  </nav>
                </div>
              </div>
            </div>
          </section>{/* End Intro Single*/}
          {/* ======= Property Single ======= */}
          <section className="property-single nav-arrow-b">
            <div className="container">
              <div className="row">
                <div className="col-sm-12">
                  <div id="property-single-carousel" className="owl-carousel owl-arrow gallery-property">
                    <div className="carousel-item-b">
                      <img src="assets/img/slide-2.jpg" alt="" />
                    </div>
                    <div className="carousel-item-b">
                      <img src="assets/img/slide-3.jpg" alt="" />
                    </div>
                    <div className="carousel-item-b">
                      <img src="assets/img/slide-1.jpg" alt="" />
                    </div>
                  </div>
                  <div className="row justify-content-between">
                    <div className="col-md-5 col-lg-4">
                      <div className="property-price d-flex justify-content-center foo">
                        <div className="card-header-c d-flex">
                          <div className="card-box-ico">
                            <span className="ion-money">$</span>
                          </div>
                          <div className="card-title-c align-self-center">
                            <h5 className="title-c">15000</h5>
                          </div>
                        </div>
                      </div>
                      <div className="property-summary">
                        <div className="row">
                          <div className="col-sm-12">
                            <div className="title-box-d section-t4">
                              <h3 className="title-d">Quick Summary</h3>
                            </div>
                          </div>
                        </div>
                        <div className="summary-list">
                          <ul className="list">
                            <li className="d-flex justify-content-between">
                              <strong>Property ID:</strong>
                              <span>1134</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Location:</strong>
                              <span>Chicago, IL 606543</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Property Type:</strong>
                              <span>House</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Status:</strong>
                              <span>Sale</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Area:</strong>
                              <span>340m
                                <sup>2</sup>
                              </span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Beds:</strong>
                              <span>4</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Baths:</strong>
                              <span>2</span>
                            </li>
                            <li className="d-flex justify-content-between">
                              <strong>Garage:</strong>
                              <span>1</span>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-7 col-lg-7 section-md-t3">
                      <div className="row">
                        <div className="col-sm-12">
                          <div className="title-box-d">
                            <h3 className="title-d">Property Description</h3>
                          </div>
                        </div>
                      </div>
                      <div className="property-description">
                        <p className="description color-text-a">
                          Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec velit
                          neque, auctor sit amet
                          aliquam vel, ullamcorper sit amet ligula. Cras ultricies ligula sed magna dictum porta.
                          Curabitur aliquet quam id dui posuere blandit. Mauris blandit aliquet elit, eget tincidunt
                          nibh pulvinar quam id dui posuere blandit.
                        </p>
                        <p className="description color-text-a no-margin">
                          Curabitur arcu erat, accumsan id imperdiet et, porttitor at sem. Donec rutrum congue leo eget
                          malesuada. Quisque velit nisi,
                          pretium ut lacinia in, elementum id enim. Donec sollicitudin molestie malesuada.
                        </p>
                      </div>
                      <div className="row section-t3">
                        <div className="col-sm-12">
                          <div className="title-box-d">
                            <h3 className="title-d">Amenities</h3>
                          </div>
                        </div>
                      </div>
                      <div className="amenities-list color-text-a">
                        <ul className="list-a no-margin">
                          <li>Balcony</li>
                          <li>Outdoor Kitchen</li>
                          <li>Cable Tv</li>
                          <li>Deck</li>
                          <li>Tennis Courts</li>
                          <li>Internet</li>
                          <li>Parking</li>
                          <li>Sun Room</li>
                          <li>Concrete Flooring</li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-10 offset-md-1">
                  <ul className="nav nav-pills-a nav-pills mb-3 section-t3" id="pills-tab" role="tablist">
                    <li className="nav-item">
                      <a className="nav-link active" id="pills-video-tab" data-toggle="pill" href="#pills-video" role="tab" aria-controls="pills-video" aria-selected="true">Video</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-plans-tab" data-toggle="pill" href="#pills-plans" role="tab" aria-controls="pills-plans" aria-selected="false">Floor Plans</a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" id="pills-map-tab" data-toggle="pill" href="#pills-map" role="tab" aria-controls="pills-map" aria-selected="false">Ubication</a>
                    </li>
                  </ul>
                  <div className="tab-content" id="pills-tabContent">
                    <div className="tab-pane fade show active" id="pills-video" role="tabpanel" aria-labelledby="pills-video-tab">
                      <iframe src="https://player.vimeo.com/video/73221098" width="100%" height={460} frameBorder={0} webkitallowfullscreen mozallowfullscreen allowFullScreen />
                    </div>
                    <div className="tab-pane fade" id="pills-plans" role="tabpanel" aria-labelledby="pills-plans-tab">
                      <img src="assets/img/plan2.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="tab-pane fade" id="pills-map" role="tabpanel" aria-labelledby="pills-map-tab">
                      <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.1422937950147!2d-73.98731968482413!3d40.75889497932681!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25855c6480299%3A0x55194ec5a1ae072e!2sTimes+Square!5e0!3m2!1ses-419!2sve!4v1510329142834" width="100%" height={460} frameBorder={0} style={{border: 0}} allowFullScreen />
                    </div>
                  </div>
                </div>
                <div className="col-md-12">
                  <div className="row section-t3">
                    <div className="col-sm-12">
                      <div className="title-box-d">
                        <h3 className="title-d">Contact Agent</h3>
                      </div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-md-6 col-lg-4">
                      <img src="assets/img/agent-4.jpg" alt="" className="img-fluid" />
                    </div>
                    <div className="col-md-6 col-lg-4">
                      <div className="property-agent">
                        <h4 className="title-agent">Anabella Geller</h4>
                        <p className="color-text-a">
                          Nulla porttitor accumsan tincidunt. Vestibulum ac diam sit amet quam vehicula elementum sed sit amet
                          dui. Quisque velit nisi,
                          pretium ut lacinia in, elementum id enim.
                        </p>
                        <ul className="list-unstyled">
                          <li className="d-flex justify-content-between">
                            <strong>Phone:</strong>
                            <span className="color-text-a">(222) 4568932</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong>Mobile:</strong>
                            <span className="color-text-a">777 287 378 737</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong>Email:</strong>
                            <span className="color-text-a">annabella@example.com</span>
                          </li>
                          <li className="d-flex justify-content-between">
                            <strong>Skype:</strong>
                            <span className="color-text-a">Annabela.ge</span>
                          </li>
                        </ul>
                        <div className="socials-a">
                          <ul className="list-inline">
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-facebook" aria-hidden="true" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-twitter" aria-hidden="true" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-instagram" aria-hidden="true" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-pinterest-p" aria-hidden="true" />
                              </a>
                            </li>
                            <li className="list-inline-item">
                              <a href="#">
                                <i className="fa fa-dribbble" aria-hidden="true" />
                              </a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-md-12 col-lg-4">
                      <div className="property-contact">
                        <form className="form-a">
                          <div className="row">
                            <div className="col-md-12 mb-1">
                              <div className="form-group">
                                <input type="text" className="form-control form-control-lg form-control-a" id="inputName" placeholder="Name *" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-1">
                              <div className="form-group">
                                <input type="email" className="form-control form-control-lg form-control-a" id="inputEmail1" placeholder="Email *" required />
                              </div>
                            </div>
                            <div className="col-md-12 mb-1">
                              <div className="form-group">
                                <textarea id="textMessage" className="form-control" placeholder="Comment *" name="message" cols={45} rows={8} required defaultValue={""} />
                              </div>
                            </div>
                            <div className="col-md-12">
                              <button type="submit" className="btn btn-a">Send Message</button>
                            </div>
                          </div>
                        </form>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>{/* End Property Single*/}
        </main>{/* End #main */}
        {/* ======= Footer ======= */}
        <section className="section-footer">
          <div className="container">
            <div className="row">
              <div className="col-sm-12 col-md-4">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="w-title-a text-brand">EstateAgency</h3>
                  </div>
                  <div className="w-body-a">
                    <p className="w-text-a color-text-a">
                      Enim minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip exea commodo consequat duis
                      sed aute irure.
                    </p>
                  </div>
                  <div className="w-footer-a">
                    <ul className="list-unstyled">
                      <li className="color-a">
                        <span className="color-text-a">Phone .</span> contact@example.com</li>
                      <li className="color-a">
                        <span className="color-text-a">Email .</span> +54 356 945234</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 section-md-t3">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="w-title-a text-brand">The Company</h3>
                  </div>
                  <div className="w-body-a">
                    <div className="w-body-a">
                      <ul className="list-unstyled">
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Site Map</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Legal</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Agent Admin</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Careers</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Affiliate</a>
                        </li>
                        <li className="item-list-a">
                          <i className="fa fa-angle-right" /> <a href="#">Privacy Policy</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-4 section-md-t3">
                <div className="widget-a">
                  <div className="w-header-a">
                    <h3 className="w-title-a text-brand">International sites</h3>
                  </div>
                  <div className="w-body-a">
                    <ul className="list-unstyled">
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Venezuela</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">China</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Hong Kong</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Argentina</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Singapore</a>
                      </li>
                      <li className="item-list-a">
                        <i className="fa fa-angle-right" /> <a href="#">Philippines</a>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <footer>
          <div className="container">
            <div className="row">
              <div className="col-md-12">
                <nav className="nav-footer">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">Home</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">About</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Property</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Blog</a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">Contact</a>
                    </li>
                  </ul>
                </nav>
                <div className="socials-a">
                  <ul className="list-inline">
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-facebook" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-twitter" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-instagram" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-pinterest-p" aria-hidden="true" />
                      </a>
                    </li>
                    <li className="list-inline-item">
                      <a href="#">
                        <i className="fa fa-dribbble" aria-hidden="true" />
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="copyright-footer">
                  <p className="copyright color-text-a">
                    © Copyright
                    <span className="color-a">EstateAgency</span> All Rights Reserved.
                  </p>
                </div>
                <div className="credits">
                  {/*
            All the links in the footer should remain intact.
            You can delete the links only if you purchased the pro version.
            Licensing information: https://bootstrapmade.com/license/
            Purchase the pro version with working PHP/AJAX contact form: https://bootstrapmade.com/buy/?theme=EstateAgency
          */}
                  Designed by <a href="https://bootstrapmade.com/">BootstrapMade</a>
                </div>
              </div>
            </div>
          </div>
        </footer>{/* End  Footer */}
        <a href="#" className="back-to-top"><i className="fa fa-chevron-up" /></a>
        <div id="preloader" />
        {/* Vendor JS Files */}
        {/* Template Main JS File */}
      </div>
            </div>
        )
    }
}
