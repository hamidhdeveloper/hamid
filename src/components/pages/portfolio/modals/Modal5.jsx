import React from 'react'

const Modal5 = () => {
  return (
    <>
    <div
          className="modal fade"
          id="projectSingleModal5"
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
                    <img src="assets/img/parkside-main-image.png" alt="Thumb" />
                  </div>
                  <div className="top-info">
                    <div className="row">
                      <div className="col-xl-12 left-info">
                        <div className="project-info mt-md-50 mt-xs-40 mb-40">
                          <div className="content">
                            <ul className="project-basic-info">
                              <li>
                                Client <span>Australian</span>
                              </li>
                              <li>
                                Project Type <span>Fitness</span>
                              </li>
                              <li>
                                Date <span>23 October, 2022</span>
                              </li>
                              <li>
                                Address <span>3A Ann Earlwood NSW 2206, Australia</span>
                              </li>
                            </ul>
                            <ul className="social">
                              <li>
                                <h4>Live Preview:</h4>
                              </li>
                              
                              <a href="https://parksidepilates.com.au" style={{cursor:'pointer'}} target='_blank' rel="noreferrer">
                                    Parkside Pilates
                                </a>
                             
                             
                            </ul>
                          </div>
                        </div>
                        <h2>Ongoing Website Maintenance</h2>
                        <p>
                        Parkside Pilates offers ongoing website maintenance services through WordPress to ensure a functional and up-to-date website. Their expertise keeps the site in optimal condition for a seamless user experience. They handle regular updates, plugin and theme management, allowing the studio to focus on providing exceptional Pilates classes. Troubleshooting, performance optimization, and feature implementation are all part of Parkside Pilates' ongoing website maintenance service, ensuring a vibrant and engaging online presence.
                        </p>
                        <ul className="check-list mt-40">
                          <li>
                            <h4>WordPress Support</h4>
                            <p>
                            I provide WordPress Support to Parkside Pilates, ensuring a smooth and efficient website. With expertise in updates, plugins, troubleshooting, their site remains functional. They can focus on delivering exceptional Pilates classes, knowing their online presence is in capable hands.
                            </p>
                          </li>
                          <li>
                            <h4>Social Media Management</h4>
                            <p> 
                             Parkside Pilates entrusts me with their Social Media Management. I curate engaging content, interact with followers, and maintain their online presence. By leveraging social platforms, I help promote their classes and build a strong community. With my expertise, Parkside Pilates can focus on delivering exceptional experiences while I handle their social media strategy and engagement.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="main-content mt-40">
                    <p>
                    
I'm Renee, the owner of Parkside Pilates. With 21+ years of experience in Personal Training, Group Fitness, and Pilates instruction, I'm a Registered Fitness Professional. Qualified in Mat Pilates (including props), Reformer, and Wunda Chair, I'm passionate about Pilates' healing benefits. Constantly updating my knowledge, I recently became an Energetic Health and Healing Practitioner, offering holistic services at Parkside Pilates. Tailoring to your body, age, and fitness level, I empower you to achieve wellness goals. Experience fun, affordable Pilates and Personal Training in a safe, inclusive environment. Join us for a transformative journey. Love, Renee.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/parkside-1.png" alt="Thumb" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/parkside-2.png" alt="Thumb" />
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

export default Modal5
