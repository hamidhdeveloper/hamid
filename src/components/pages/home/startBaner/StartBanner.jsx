import React from "react";

const StartBanner = () => {
  // resume download
    const resumeDownload = () => {
      const link = document.createElement('a');
      link.href = 'assets/resume/Hamid-Web-Developer-CV.pdf';
      link.download = 'Hamid CV.pdf';
      link.click();
    }
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
                  <span>Hamid</span>
                </h2>
                <h3 className="title">
                  <span className="header-caption" id="page-top">
                    {/* type headline start*/}
                    <span className="cd-headline clip is-full-width">
                      {/* ROTATING TEXT */}
                      <span className="cd-words-wrapper">
                        <b className="is-visible">Front End Developer</b>
                        <b className="is-hidden">Professional Coder</b>
                        <b className="is-hidden">Responsive Web Designer</b>
                        <b className="is-hidden">WordPress Developer</b>
                        <b className="is-hidden">React Developer</b>
                        <b className="is-hidden">HTML/CSS Expert</b>
                        <b className="is-hidden">Continuous Learner</b>
                      </span>
                    </span>
                    {/* type headline end */}
                  </span>
                </h3>
                <div className="button mt-55">
                  <span
                    className="btn btn-md circle btn-theme effect"
                    onClick={resumeDownload}
                  >
                    Download CV
                  </span>
                </div>
              </div>
              <div className="col-lg-6 thumb" data-wow-delay="900ms">
                <img
                  className=" wow fadeInDown"
                  src="assets/img/illustration/hamid.png"
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
                  <a href="https://www.facebook.com/Hamid.developer" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="instagram">
                  <a href="https://www.instagram.com/hamid.developer" target="_blank" rel="noreferrer">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/hamid-developer" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin" />
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
