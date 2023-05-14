import React from "react";

const Portfolio = () => {
  return (
    <>
      <div
        id="portfolio"
        className="portfolio-style-six-area default-padding-top"
      >
        <div className="shape-animated-right">
          <img src="assets/img/shape/1.webp" alt="Shape" />
        </div>
        <div className="container">
          <div className="heading-left">
            <div className="row align-center">
              <div className="col-lg-5">
                <div className="left-info">
                  <h5 className="sub-title">Recent Work</h5>
                  <h2 className="title">
                    Look at my portfolio and <br /> give me your feedback
                  </h2>
                  <div className="heading-shape">
                    <img src="assets/img/shape/10.png" alt="Shape" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="right-info">
                  <div className="fun-factor-default">
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to={2} data-speed={2000}>
                        2
                        </div>
                        <div className="operator">H</div>
                      </div>
                      <span className="medium">Completed Projects</span>
                    </div>
                    <div className="fun-fact">
                      <div className="counter">
                        <div className="timer" data-to={94} data-speed={2000}>
                          94
                        </div>
                        <div className="operator">%</div>
                      </div>
                      <span className="medium">Positive Rating</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-md-12 gallery-content mb--15">
              <div className="magnific-mix-gallery masonary">
                <div id="portfolio-grid" className="gallery-items colums-3">
                  {/* Single Item */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="assets/img/800x600.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Components</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal"
                            >
                              UI design
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal"
                        >
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="assets/img/800x600.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Creative</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal"
                            >
                              Gaming Apps
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal"
                        >
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="assets/img/800x600.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Business</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal"
                            >
                              Business Apps
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal"
                        >
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="assets/img/800x600.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Invest</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal"
                            >
                              Travel Apps
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal"
                        >
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="assets/img/800x600.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Source</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal"
                            >
                              Lifestyle Apps
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal"
                        >
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Single Item */}
                  {/* Single Item */}
                  <div className="pf-item">
                    <div className="overlay-content">
                      <img src="assets/img/800x600.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>Finance</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal"
                            >
                              Entertainment Apps
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal"
                        >
                          <i className="fas fa-arrow-right" />
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Start Projects Single Modal */}
        <div
          className="modal fade"
          id="projectSingleModal"
          tabIndex={-1}
          aria-hidden="true"
        >
          <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable modal-xl">
            <div className="modal-content">
              <div className="modal-body">
                <div className="modal-header">
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  />
                </div>
                <div className="project-details-items">
                  <div className="project-thumb">
                    <img src="assets/img/1500x700.png" alt="Thumb" />
                  </div>
                  <div className="top-info">
                    <div className="row">
                      <div className="col-xl-12 left-info">
                        <div className="project-info mt-md-50 mt-xs-40 mb-40">
                          <div className="content">
                            <ul className="project-basic-info">
                              <li>
                                Client <span>validthemes</span>
                              </li>
                              <li>
                                Project Type <span>Website Growth</span>
                              </li>
                              <li>
                                Date <span>25 February, 2023</span>
                              </li>
                              <li>
                                Address <span>New York United state</span>
                              </li>
                            </ul>
                            <ul className="social">
                              <li>
                                <h4>Share:</h4>
                              </li>
                              <li>
                                <a href="/">
                                  <i className="fab fa-facebook-f" />
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <i className="fab fa-twitter" />
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <i className="fab fa-linkedin-in" />
                                </a>
                              </li>
                              <li>
                                <a href="/">
                                  <i className="fab fa-pinterest-p" />
                                </a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <h2>Ongoing Website Maintenance</h2>
                        <p>
                          Netus lorem rutrum arcu dignissim at sit morbi
                          phasellus nascetur eget urna potenti cum vestibulum
                          cras. Tempor nonummy metus lobortis. Sociis velit
                          etiam, dapibus. Lectus vehicula pellentesque cras
                          posuere tempor facilisi habitant lectus rutrum pede
                          quisque hendrerit parturient posuere mauris ad
                          elementum fringilla facilisi volutpat fusce pharetra
                          felis sapien varius quisque class convallis praesent
                          est sollicitudin donec nulla venenatis, cursus
                          fermentum netus posuere sociis porta risus habitant
                          malesuada nulla habitasse hymenaeos. Viverra curabitur
                          nisi vel sollicitudin dictum natoqu. Tempor nonummy
                          metus lobortis. Sociis velit etiam, dapibus. Lectus
                          vehicula pellentesque cras posuere tempor facilisi
                          habitant lectus rutrum pede quisque hendrerit
                          parturient posuere mauris ad elementum fringilla
                          facilisi volutpat fusce pharetra felis sapien varius
                          quisque class convallis praesent est sollicitudin
                          donec nulla venenatis, cursus fermentum netus posuere
                          sociis porta risus habitant malesuada nulla habitasse
                          hymenaeos. Viverra curabitur nisi vel sollicitudin
                          dictum.
                        </p>
                        <ul className="check-list mt-40">
                          <li>
                            <h4>WordPress Support</h4>
                            <p>
                              Tempor nonummy metus lobortis. Sociis velit etiam,
                              dapibus. Lectus vehicula pellentesque cras posuere
                              tempor facilisi habitant lectus rutrum pede
                              quisque hendrerit parturient posuere mauris ad
                              elementum fringilla facilisi volutpat fusce
                              pharetra.
                            </p>
                          </li>
                          <li>
                            <h4>Social Media Management</h4>
                            <p>
                              Energy nonummy metus lobortis. Sociis velit etiam,
                              dapibus. Lectus vehicula pellentesque cras posuere
                              tempor facilisi habitant lectus rutrum pede
                              quisque hendrerit parturient posuere mauris ad
                              elementum fringilla facilisi volutpat fusce
                              pharetra.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="main-content mt-40">
                    <p>
                      Give lady of they such they sure it. Me contained
                      explained my education. Vulgar as hearts by garret.
                      Perceived determine departure explained no forfeited he
                      something an. Contrasted dissimilar get joy you instrument
                      out reasonably. Again keeps at no meant stuff. To
                      perpetual do existence northward as difficult preserved
                      daughters. Continued at up to zealously necessary
                      breakfast. Surrounded sir motionless she end literature.
                      Gay direction neglected but supported yet her. Facilisis
                      inceptos nec, potenti nostra aenean lacinia varius semper
                      ant nullam nulla primis placerat facilisis. Netus lorem
                      rutrum arcu dignissim at sit morbi phasellus nascetur eget
                      urna potenti cum vestibulum cras. Tempor nonummy metus
                      lobortis. Sociis velit etiam, dapibus. Lectus vehicula
                      pellentesque cras posuere tempor facilisi habitant lectus
                      rutrum pede quisque hendrerit parturient posuere mauris ad
                      elementum fringilla facilisi volutpat fusce pharetra felis
                      sapien varius quisque class convallis praesent est
                      sollicitudin donec nulla venenatis, cursus fermentum netus
                      posuere sociis porta risus habitant malesuada nulla
                      habitasse hymenaeos. Viverra curabitur nisi vel
                      sollicitudin dictum natoque ante aenean elementum curae
                      malesuada ullamcorper. vivamus nonummy nisl posuere rutrum
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/800x600.png" alt="Thumb" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/800x600.png" alt="Thumb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Projects Single Modal */}
      </div>
    </>
  );
};

export default Portfolio;
