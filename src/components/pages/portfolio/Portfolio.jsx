import React from "react";
import Modal1 from "./modals/Modal1";
import Modal2 from "./modals/Modal2";
import Modal3 from "./modals/Modal3";

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
                      <img src="assets/img/araby-ai.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>React Front-End</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal1"
                            >
                              Araby.ai
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal1"
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
                      <img src="assets/img/pikaso.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>React Front-End</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal2"
                            >
                              PikaSo
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal2"
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
                      <img src="assets/img/mvp.png" alt="thumb" />
                      <div className="content">
                        <div className="title">
                          <span>React Front-End</span>
                          <h5>
                            <a
                              href="/"
                              data-bs-toggle="modal"
                              data-bs-target="#projectSingleModal3"
                            >
                              MVP
                            </a>
                          </h5>
                        </div>
                        <a
                          href="/"
                          data-bs-toggle="modal"
                          data-bs-target="#projectSingleModal3"
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
        <Modal1 />
        <Modal2 />
        <Modal3 />
        {/* End Projects Single Modal */}
      </div>
    </>
  );
};

export default Portfolio;
