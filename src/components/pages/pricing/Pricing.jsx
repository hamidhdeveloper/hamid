import React from "react";

const Pricing = () => {
  return (
    <>
      <div id="pricing" className="pricing-area default-padding-top">
        <div className="container">
          <div className="pricing-box">
            <div className="row">
              <div className="col-lg-5">
                <div className="heading-left">
                  <div className="left-info">
                    <h5 className="sub-title">Pricing</h5>
                    <h2 className="title">
                      The best pricing plans <br /> to get your best
                    </h2>
                    <div className="heading-shape">
                      <img src="assets/img/shape/10.png" alt="Shape" />
                    </div>
                  </div>
                </div>
                <div className="save-ammount mt-100 mt-md-50">
                  <h4>
                    Save up to <strong>50%</strong> with your every order
                  </h4>
                  <img src="assets/img/shape/2.webp" alt="Thumb" />
                </div>
              </div>
              <div className="col-lg-6 offset-lg-1">
                <div className="pricing-style-one">
                  <div className="conntent">
                    <h4>WordPress Development</h4>
                    <ul>
                      <li>1 Page with Elementor</li>
                      <li>Design Customization</li>
                      <li>Responsive Design</li>
                    </ul>
                    <a
                      className="btn mt-25 btn-sm circle btn-theme"
                      href="#contact"
                    >
                      Order Now
                    </a>
                  </div>
                  <div className="price">
                    <h2>
                      <sup>$</sup>48
                    </h2>
                    <i className="fab fa-wordpress" />
                  </div>
                </div>
                <div className="pricing-style-one">
                  <div className="conntent">
                    <h4>Static frontend design</h4>
                    <ul>
                      <li>1 Page with React</li>
                      <li>Design implement</li>
                      <li>Responsive Design</li>
                    </ul>
                    <a
                      className="btn mt-25 btn-sm circle btn-dark"
                      href="#contact"
                    >
                      Order Now
                    </a>
                  </div>
                  <div className="price">
                    <h2>
                      <sup>$</sup>60
                    </h2>
                    <i className="fab fa-react" />
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

export default Pricing;
