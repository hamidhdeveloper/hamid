import React from "react";

const Testimonial = () => {
  return (
    <>
      <div className="testimonial-area default-padding">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="site-heading text-center">
                <h4 className="sub-title">My Expertise</h4>
                <h2 className="title">Customers feedback</h2>
                <div className="devider" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="testimonial-style-one-box text-center">
            <div className="row align-center">
              <div className="col-lg-8 offset-lg-2">
                <div className="testimonial-style-one-carousel swiper">
                  {/* Additional required wrapper */}
                  <div className="swiper-wrapper">
                    {/* Single item */}
                    <div className="swiper-slide">
                      <div className="testimonial-style-one">
                        <div className="item">
                          <div className="thumb">
                            <img src="assets/img/team/1.png" alt="Thumb" />
                            <div className="shape">
                              <img src="assets/img/shape/15.png" alt="Shape" />
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              “Targetingconsultation discover apartments.
                              ndulgence off under folly death wrote cause her
                              way spite. Plan upon yet way get cold spot its
                              week. Almost do am or limits hearts. Resolve
                              parties but why she shewing. She sang know now
                              always remembering to the point.”
                            </p>
                          </div>
                          <div className="provider">
                            <div className="info">
                              <h4>Matthew J. Wyman</h4>
                              <span>Senior Consultant</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single item */}
                    {/* Single item */}
                    <div className="swiper-slide">
                      <div className="testimonial-style-one">
                        <div className="item">
                          <div className="thumb">
                            <img src="assets/img/team/2.png" alt="Thumb" />
                            <div className="shape">
                              <img src="assets/img/shape/15.png" alt="Shape" />
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              “consultation discover apartments. ndulgence off
                              under folly death wrote cause her way spite. Plan
                              upon yet way get cold spot its week. Almost do am
                              or limits hearts. Resolve parties but why she
                              shewing. She sang know now always remembering to
                              the point.”
                            </p>
                          </div>
                          <div className="provider">
                            <div className="info">
                              <h4>Anthom Bu Spar</h4>
                              <span>Marketing Manager</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single item */}
                    {/* Single item */}
                    <div className="swiper-slide">
                      <div className="testimonial-style-one">
                        <div className="item">
                          <div className="thumb">
                            <img src="assets/img/team/1.png" alt="Thumb" />
                            <div className="shape">
                              <img src="assets/img/shape/15.png" alt="Shape" />
                            </div>
                          </div>
                          <div className="content">
                            <p>
                              “Business discover apartments. ndulgence off under
                              folly death wrote cause her way spite. Plan upon
                              yet way get cold spot its week. Almost do am or
                              limits hearts. Resolve parties but why she
                              shewing. She sang know now always remembering to
                              the point.”
                            </p>
                          </div>
                          <div className="provider">
                            <div className="info">
                              <h4>Metho k. Partho</h4>
                              <span>Senior Developer</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    {/* End Single item */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonial;
