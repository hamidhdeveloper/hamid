import React from 'react'

const Modal3 = () => {
  return (
    <>
    <div
          className="modal fade"
          id="projectSingleModal3"
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
                    <img src="assets/img/mvp-main-image.png" alt="Thumb" />
                  </div>
                  <div className="top-info">
                    <div className="row">
                      <div className="col-xl-12 left-info">
                        <div className="project-info mt-md-50 mt-xs-40 mb-40">
                          <div className="content">
                            <ul className="project-basic-info">
                              <li>
                                Client <span>MVP</span>
                              </li>
                              <li>
                                Project Type <span>Artificial Intelligence</span>
                              </li>
                              <li>
                                Date <span>1 March, 2023</span>
                              </li>
                              <li>
                                Address <span>Al Muruj Riyadh Saudi Arabia</span>
                              </li>
                            </ul>
                            <ul className="social">
                              <li>
                                <h4>Live Preview:</h4>
                              </li>
                              
                              <a href="https://hamidhdeveloper.github.io/mvp" style={{cursor:'pointer'}} target='_blank' rel="noreferrer">
                                 MVP
                                </a>
                             
                             
                            </ul>
                          </div>
                        </div>
                        <h2>Ongoing Website Maintenance</h2>
                        <p>
                        I provide ongoing support for the React front end of an MVP website that incorporates Artificial Intelligence (AI). With my expertise, I ensure seamless functionality and continuous enhancements for this innovative platform. As an AI-powered MVP, the website opens up endless possibilities, combining cutting-edge technology with user-friendly interfaces. I strive to deliver top-notch support to optimize the website's performance, enabling users to leverage AI capabilities and explore the limitless opportunities it offers.
                        </p>
                        <ul className="check-list mt-40">
                          <li>
                            <h4>React Support</h4>
                            <p>
                            I'll provide React support to the MVP website, ensuring its smooth operation and constant improvements, unleashing the potential of AI and offering an exceptional user experience.
                            </p>
                          </li>
                          <li>
                            <h4>Social Media Management</h4>
                            <p>
                            I will handle the Social Media Management of the MVP website, leveraging various platforms to create engaging content, grow the audience, and enhance brand visibility. With strategic planning and effective communication, I'll maximize the website's reach, fostering a strong online presence and driving user engagement.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="main-content mt-40">
                    <p>
                    The MVP website, powered by cutting-edge Artificial Intelligence (AI) technology, is revolutionizing the digital landscape. With a strong focus on user experience, my role revolves around providing ongoing support for its front-end, built using React. By leveraging my expertise in React development, I ensure the website operates seamlessly and delivers a visually appealing and intuitive interface. I am committed to continuously enhancing the website's functionality and performance, addressing any issues that may arise and optimizing its overall user experience. This involves collaborating closely with the development team to implement new features, improve responsiveness, and optimize load times. Additionally, I work diligently to ensure the website remains compatible across different devices and browsers, offering a consistent experience for users. By actively monitoring user feedback and conducting usability tests, I gather valuable insights to make informed decisions for further enhancements. My goal is to empower users with a dynamic and engaging platform that showcases the potential of AI while creating a lasting impact. Through effective communication and collaboration, I contribute to the success of the MVP website, making it a game-changer in the realm of AI-driven innovation.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/mvp-1.png" alt="Thumb" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/mvp-2.png" alt="Thumb" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>
      
    </>
  )
}

export default Modal3
