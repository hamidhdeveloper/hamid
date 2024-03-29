import React from "react";

const Services = () => {
  return (
    <>
      {/* Start Services
    ============================================= */}
      <div
        id="services"
        className="services-style-one-area box-layout default-padding bottom-less bg-light"
      >
        <div className="blur-bg" />
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">My Expertise</h4>
                <h2 className="title">What I Do </h2>
                <div className="devider" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            {/* Single Item */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="assets/img/icon/1.png" alt="Icon" />
                <h4>
                  <a
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    Website design
                  </a>
                </h4>
                <p>
                I have React skills and WordPress knowledge allow me to create engaging, custom websites with dynamic UIs, themes, and plugins for clients with ease.
                </p>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="assets/img/icon/2.png" alt="Icon" />
                <h4>
                  <a
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                   Web App Development
                  </a>
                </h4>
                <p>
                JavaScript frameworks i used to create scalable web apps for automation, collaboration, and business insights that enhance operations.
                </p>
              </div>
            </div>
            {/* End Single Item */}
            {/* Single Item */}
            <div className="service-style-one col-lg-4 col-md-6">
              <div className="service-style-one-item">
                <img src="assets/img/icon/4.png" alt="Icon" />
                <h4>
                  <a
                    href="/"
                    data-bs-toggle="modal"
                    data-bs-target="#"
                  >
                    UX/UI Design
                  </a>
                </h4>
                <p>
                With React expertise and UX/UI design tools like Figma and Adobe XD, I convert designs into responsive React code for custom and engaging web applications.
                </p>
              </div>
            </div>
            {/* End Single Item */}
          </div>
        </div>
        {/* Start Services Single Modal */}
        <div
          className="modal fade"
          id="serviceSingleModal"
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
                <div className="services-single-content">
                  <div className="thumb">
                    <img src="assets/img/1500x700.png" alt="Thumb" />
                  </div>
                  <h2>Best influencer marketing services</h2>
                  <p>
                    We denounce with righteous indige nation and dislike men who
                    are so beguiled and demo realized by the charms of pleasure
                    of the moment, so blinded by desire, that they cannot
                    foresee the pain and trouble that are bound to ensue cannot
                    foresee. These cases are perfectly simple and easy to
                    distinguish. In a free hour, when our power of choice is
                    untrammelled data structures manages data in technology.
                  </p>
                  <div className="features mt-40 mt-xs-30 mb-30 mb-xs-20">
                    <div className="row">
                      <div className="col-lg-4 col-md-6">
                        <div className="content">
                          <h4>Included Services</h4>
                          <ul className="feature-list-item">
                            <li>Monthly SEO Task</li>
                            <li>24/7 Alltime Supporting</li>
                            <li>Turbo Boosting</li>
                            <li>Expert Team Members</li>
                          </ul>
                        </div>
                      </div>
                      <div className="col-lg-8 col-md-6 mt-xs-30">
                        <div className="content">
                          <h4>The Challange</h4>
                          <p>
                            Temporibus autem quibusdam et aut officiis debitis
                            aut rerum necessitatibus saepe eveniet ut et
                            voluptates repudiandae sint et molestiae non
                            recusandae. Itaque earum rerum hic tenetur a
                            sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias. consequatur aut perferendis doloribus
                            asperiores repellat. Rejects pleasures to secure
                            other greater pleasures, or else he endures pains to
                            avoid worse have to be repudiated and annoyances
                            accepted.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  <h4>What we do?</h4>
                  <p>
                    Nam libero tempore, cum soluta nobis est elig endi optio
                    cumque nihil impedit quo minus id quod maxime placeat facere
                    possimus, omnis voluptas assumenda est, omnis dolor repelle
                    ndus. Temporibus autem quibusdam et aut officiis debitis aut
                    rerum necessitatibus saepe eveniet ut et voluptates
                    repudiandae sint et molestiae non recusandae. Itaque earum
                    rerum hic tenetur a sapiente delectus, ut aut reiciendis
                    voluptatibus maiores alias. consequatur aut perferendis
                    doloribus asperiores repellat. The wise man therefore always
                    holds in these matters to this principle of selection: he
                    rejects pleasures to secure other greater pleasures, or else
                    he endures pains to avoid worse pains. pleasures have to be
                    repudiated and annoyances accepted.
                  </p>
                  <div className="faq-style-one mt-40">
                    <h3 className="mb-25">Common Question for this project</h3>
                    <div className="accordion" id="faqAccordion">
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingOne">
                          <button
                            className="accordion-button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseOne"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Where can I get analytics help?
                          </button>
                        </h2>
                        <div
                          id="collapseOne"
                          className="accordion-collapse collapse show"
                          aria-labelledby="headingOne"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Bennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause
                              her way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              minute exact dear open to reaching out.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingTwo">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            How much does data analytics costs?
                          </button>
                        </h2>
                        <div
                          id="collapseTwo"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingTwo"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Cennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause
                              her way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              minute exact dear open to reaching out.
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="accordion-item">
                        <h2 className="accordion-header" id="headingThree">
                          <button
                            className="accordion-button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#collapseThree"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            What kind of data is needed for analysis?
                          </button>
                        </h2>
                        <div
                          id="collapseThree"
                          className="accordion-collapse collapse"
                          aria-labelledby="headingThree"
                          data-bs-parent="#faqAccordion"
                        >
                          <div className="accordion-body">
                            <p>
                              Tennings appetite disposed me an at subjects an.
                              To no indulgence diminution so discovered mr
                              apartments. Are off under folly death wrote cause
                              her way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              minute exact dear open to reaching out.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="services-more mt-50">
                    <h3>Popular Services</h3>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="item">
                          <i className="flaticon-development" />
                          <h4>
                            <a href="/">Speed Optimization</a>
                          </h4>
                          <p>
                            These cases are perfectly simple and easy to
                            distinguish. In a free hour, when our power.
                          </p>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="item">
                          <i className="flaticon-layers" />
                          <h4>
                            <a href="/">Frondend Development</a>
                          </h4>
                          <p>
                            These cases are perfectly simple and easy to
                            distinguish. In a free hour, when our power.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* End Services Single Modal */}
      </div>
      {/* End Services */}
    </>
  );
};

export default Services;
