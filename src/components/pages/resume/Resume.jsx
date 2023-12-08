import React from "react";

const Resume = () => {
  return (
    <>
      <div id="resume" className="resume-area default-padding-top">
        <div className="shape-right-top-extra">
          <img src="assets/img/shape/14.png" alt="Shape" />
        </div>
        <div className="container">
          <div className="experience-content-box">
            <div className="row">
              <div className="col-xl-10 offset-xl-1">
                <div
                  className="nav nav-tabs text-center resume-tab-navs"
                  id="nav-tab"
                  role="tablist"
                >
                  <button
                    className="nav-link active"
                    id="nav-id-1"
                    data-bs-toggle="tab"
                    data-bs-target="#tab1"
                    type="button"
                    role="tab"
                    aria-controls="tab1"
                    aria-selected="true"
                  >
                    Biography <strong>01</strong>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-2"
                    data-bs-toggle="tab"
                    data-bs-target="#tab2"
                    type="button"
                    role="tab"
                    aria-controls="tab2"
                    aria-selected="false"
                  >
                    Skills <strong>02</strong>
                  </button>
                  <button
                    className="nav-link"
                    id="nav-id-3"
                    data-bs-toggle="tab"
                    data-bs-target="#tab3"
                    type="button"
                    role="tab"
                    aria-controls="tab3"
                    aria-selected="false"
                  >
                    Education <strong>03</strong>
                  </button>
                </div>
                <div
                  className="tab-content resume-tab-content"
                  id="nav-tabContent"
                >
                  {/* Single Item */}
                  <div
                    className="tab-pane fade show active"
                    id="tab1"
                    role="tabpanel"
                    aria-labelledby="nav-id-1"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="biography-table">
                          <li>
                            <h5>Name</h5>
                            <p>Hamid Hussain</p>
                          </li>
                          <li>
                            <h5>Birthday</h5>
                            <p>7 February, 1999</p>
                          </li>
                          <li>
                            <h5>Age</h5>
                            <p>24</p>
                          </li>
                          <li>
                            <h5>Address</h5>
                            <p>Riyadh, Saudi Arabia</p>
                          </li>
                          <li>
                            <h5>Email</h5>
                            <p>hamidhussain740@gmail.com</p>
                          </li>
                          <li>
                            <h5>Phone</h5>
                            <p>+(966)575568052</p>
                          </li>
                          <li>
                            <h5>Instagram</h5>
                            <p>@hamid.developer</p>
                          </li>
                          <li>
                            <h5>Freelance</h5>
                            <p>Available</p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div
                    className="tab-pane fade"
                    id="tab2"
                    role="tabpanel"
                    aria-labelledby="nav-id-2"
                  >
                    <div className="row align-center">
                      <div className="col-lg-12">
                        <ul className="skill-table">
                          <li>
                            <div className="row align-center">
                              <div className="col-lg-2">
                                <div className="icon">
                                  <i className="fab fa-figma" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <h4>Figma & Adobe XD to React</h4>
                              </div>
                              <div className="col-lg-5">
                                <div className="progress-box">
                                  <h5>78%</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      data-width={78}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row align-center">
                              <div className="col-lg-2">
                                <div className="icon">
                                  <i className="fab fa-react" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <h4>Front-End with React</h4>
                              </div>
                              <div className="col-lg-5">
                                <div className="progress-box">
                                  <h5>84%</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      data-width={84}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                          <li>
                            <div className="row align-center">
                              <div className="col-lg-2">
                                <div className="icon">
                                  <i className="fab fa-html5" />
                                </div>
                              </div>
                              <div className="col-lg-5">
                                <h4>Advance Custom Development</h4>
                              </div>
                              <div className="col-lg-5">
                                <div className="progress-box">
                                  <h5>92%</h5>
                                  <div className="progress">
                                    <div
                                      className="progress-bar"
                                      role="progressbar"
                                      data-width={92}
                                    />
                                  </div>
                                </div>
                              </div>
                            </div>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                  {/* Single Item */}
                  <div
                    className="tab-pane fade"
                    id="tab3"
                    role="tabpanel"
                    aria-labelledby="nav-id-3"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <ul className="education-table">
                          <li>
                            <h4>Master in Computer Science</h4>
                            <h5>Islamia College University Peshawar</h5>
                            <span>2018 - 2020</span>
                            <p>
                            Completed Master's in Computer Science from Islamia College Peshawar. Passionate about programming and software development.
                            </p>
                          </li>
                          <li>
                            <h4>Bachelor Degree in Computer Science</h4>
                            <h5>Bacha Khan University </h5>
                            <span>2016 - 2018</span>
                            <p>
                            I have a Bachelor's Degree in Computer Science from Bacha Khan University. The university is known for its emphasis on research and innovation.
                            </p>
                          </li>
                          <li>
                            <h4>Web Developer &amp; Trainer</h4>
                            <h5>ICEL College</h5>
                            <span>2014 - 2016</span>
                            <p>
                            I completed a Diploma in Information Technology and Web Designing at ICEL College under the guidance of Iftikhar Sir, acquiring skills to excel in the field of technology.
                            </p>
                          </li>
                          <li>
                            <h4>Freelancer</h4>
                            <h5>RexTech Agency</h5>
                            <span>2020 - 2022</span>
                            <p>
                            I received Freelancer education from RexTech, an Australian agency, which equipped me with the necessary skills and knowledge to succeed as a professional freelancer.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  {/* End Single Item */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Resume;
