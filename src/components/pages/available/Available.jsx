import React from "react";

const Available = () => {
  return (
    <>
      <div className="work-available-area text-center box-layout bg-light default-padding">
        <div className="shape-right-top-mini">
          <img src="assets/img/shape/16.png" alt="illustration" />
        </div>
        <div className="shape-illustration">
          <img src="assets/img/illustration/2.png" alt="illustration" />
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2">
              <div className="work-available">
                <h2 className="title">
                  I'm <strong>available</strong> for <br /> freelance work
                </h2>
                <a
                  className="btn btn-md circle btn-theme smooth-menu"
                  href="#contact"
                >
                  Hire me now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Available;
