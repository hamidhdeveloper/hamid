import React from 'react'

const Modal1 = () => {
  return (
    <>
      <div
          className="modal fade"
          id="projectSingleModal1"
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
                    <img src="assets/img/araby-ai-main-image.png" alt="Thumb" />
                  </div>
                  <div className="top-info">
                    <div className="row">
                      <div className="col-xl-12 left-info">
                        <div className="project-info mt-md-50 mt-xs-40 mb-40">
                          <div className="content">
                            <ul className="project-basic-info">
                              <li>
                                Client <span>MVP Game & Design Development</span>
                              </li>
                              <li>
                                Project Type <span>Artificial Intelligence</span>
                              </li>
                              <li>
                                Date <span>25 February, 2023</span>
                              </li>
                              <li>
                                Address <span>Al Muruj Riyadh Saudi Arabia</span>
                              </li>
                            </ul>
                            <ul className="social">
                              <li>
                                <h4>Live Preview:</h4>
                              </li>
                              
                                <a href="https://arabyai.netlify.app/" style={{cursor:'pointer'}} target='_blank' rel="noreferrer">
                                 Araby Ai
                                </a>
                              
                            </ul>
                          </div>
                        </div>
                        <h2>Ongoing Website Maintenance</h2>
                        <p>
                         At Araby AI, we specialize in providing ongoing website maintenance services specifically tailored for React websites. Our skilled team of developers is well-versed in React's intricacies and stays updated with the latest advancements in the framework. We offer comprehensive support to ensure your React website remains in optimal condition. From monitoring performance and optimizing code to resolving compatibility issues and enhancing user experience, we handle all aspects of maintenance. With our proactive approach, we identify and address potential problems before they impact your website's functionality. Trust Araby AI for reliable, efficient, and hassle-free ongoing maintenance for your React website.
                        </p>
                        <ul className="check-list mt-40">
                          <li>
                            <h4>React Support</h4>
                            <p>
                            Araby AI is proud to offer exceptional React support for our website. Our team is dedicated to ensuring that your React-powered site operates flawlessly. From component development to state management and performance optimization, we have the expertise to deliver outstanding results. Trust us to provide reliable React support that enhances your web experience.
                            </p>
                          </li>
                          <li>
                            <h4>Social Media Management</h4>
                            <p>
                            Araby AI excels in Social Media Management for your React website. We understand the power of social platforms in boosting your online presence. Our team expertly handles content creation, scheduling, engagement, and analytics. With a data-driven approach, we help you optimize your social media strategy and drive meaningful results. Trust Araby AI to manage your social media presence effectively and elevate your brand's visibility.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="main-content mt-40">
                    <p>
                    Welcome to Araby.AI, where we unlock the power of AI in Arabic. Our cutting-edge technology offers a wide range of artificial intelligence solutions across various industries. From machine learning to natural language processing, we provide innovative coding solutions tailored to Arabic language and culture. Our mission is to empower businesses and individuals by harnessing the potential of AI, enabling smarter decision-making and driving efficiency. Join us on this transformative journey as we revolutionize the Arabic AI landscape. Together, let's shape the future with the limitless possibilities of artificial intelligence.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/araby-1.png" alt="Thumb" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/araby-2.png" alt="Thumb" />
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

export default Modal1
