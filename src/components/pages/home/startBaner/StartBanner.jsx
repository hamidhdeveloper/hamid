import React from "react";

const StartBanner = () => {
  return (
    <>
      <div className="auto-height bg-fixed banner-style-one">
        <div className="container">
          <div className="double-items">
            <div className="row align-center">
              <div className="col-lg-6 info">
                <h1 className="text-invisible">WELCOME</h1>
                <h2>
                  Hey <img src="assets/img/shape/4.png" alt="Icon" /> I'm{" "}
                  <span>Easton</span>
                </h2>
                <h3 className="title">
                  <span className="header-caption" id="page-top">
                    {/* type headline start*/}
                    <span className="cd-headline clip is-full-width">
                      {/* ROTATING TEXT */}
                      <span className="cd-words-wrapper">
                        <b className="is-visible">Web Developer</b>
                        <b className="is-hidden">Professional Coder</b>
                        <b className="is-hidden">UI/UX Designer</b>
                      </span>
                    </span>
                    {/* type headline end */}
                  </span>
                </h3>
                <div className="button mt-55">
                  <a
                    className="btn btn-md circle btn-theme effect"
                    href="#resume"
                  >
                    My Resume
                  </a>
                </div>
              </div>
              <div className="col-lg-6 thumb" data-wow-delay="900ms">
                <img
                  className=" wow fadeInDown"
                  src="assets/img/illustration/1.png"
                  alt="Thumb"
                />
                <div className="shape-center">
                  <img src="assets/img/shape/7.png" alt="Thumb" />
                </div>
              </div>
            </div>
            <div className="personal-social">
              <ul>
                <li className="facebook">
                  <a href="/">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="behance">
                  <a href="/">
                    <i className="fab fa-behance" />
                  </a>
                </li>
                <li className="dribbble">
                  <a href="/">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartBanner;
