import React from "react";

const About = () => {
  return (
    <>
      <div id="about" className="about-style-six-area default-padding-top">
        <div className="container">
          <div className="row align-center">
            <div className="about-style-six col-lg-5">
              <div className="thumb">
                <img
                  className="wow fadeInUp"
                  src="assets/img/illustration/hamid-developer.png"
                  alt="Thumb"
                />
              </div>
            </div>
            <div className="about-style-six col-lg-6 offset-lg-1">
              <h4 className="sub-title">About Me</h4>
              <h2 className="title">
                I can develop <br /> that help people
              </h2>
              <p>
              
Hi, I'm Hamid, a React and WordPress developer. I develop web apps that solve real-world problems and create intuitive, engaging UIs. I deliver high-quality work and prioritize excellent customer service.
              </p>
              <div className="skill-list">
                <ul>
                  <li>
                    <div className="icon">
                      <i className="fab fa-wordpress" />
                    </div>
                    <div className="content">
                      <h4>Professional WordPress Developer</h4>
                      <span>Top Rated – Upwork</span>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="fab fa-react" />
                    </div>
                    <div className="content">
                      <h4>React Front-End Developer</h4>
                      <span>3 Years Experience</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
