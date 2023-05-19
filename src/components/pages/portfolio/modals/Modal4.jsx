import React from 'react'

const Modal4 = () => {
  return (
    <>
    <div
          className="modal fade"
          id="projectSingleModal4"
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
                    <img src="assets/img/spf-main-image.png" alt="Thumb" />
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
                                Project Type <span>Construction</span>
                              </li>
                              <li>
                                Date <span>11 September, 2022</span>
                              </li>
                              <li>
                                Address <span>138 Frances Street, Lidcombe NSW Australia</span>
                              </li>
                            </ul>
                            <ul className="social">
                              <li>
                                <h4>Live Preview:</h4>
                              </li>
                              
                              <a href="https://spfservices.net" style={{cursor:'pointer'}} target='_blank' rel="noreferrer">
                                  SPF Services
                                </a>
                             
                             
                            </ul>
                          </div>
                        </div>
                        <h2>Ongoing Website Maintenance</h2>
                        <p>
                        SPF offers ongoing maintenance services for WordPress websites. With a focus on ensuring the smooth operation and optimal performance of your WordPress site, SPF takes care of regular updates, security patches, and plugin management. Their team of experts conducts thorough checks, monitors website performance, and addresses any technical issues promptly. From backing up your site to optimizing its speed and responsiveness, SPF ensures that your WordPress website remains secure, up-to-date, and functioning at its best. With their ongoing maintenance services, you can focus on your core business while leaving the technical aspects of your website in capable hands.
                        </p>
                        <ul className="check-list mt-40">
                          <li>
                            <h4>WordPress Support</h4>
                            <p> 
                          I will provide WordPress support to SPF's website, offering assistance with updates, troubleshooting, plugin management, and ensuring optimal performance. Together, we'll keep their website running smoothly and effectively.
                            </p>
                          </li>
                          <li>
                            <h4>Social Media Management</h4>
                            <p>
                            
                            I will handle Social Media Management for SPF's website, creating engaging content, managing their social media accounts, and implementing effective strategies to increase brand visibility and engagement. Together, we'll build a strong online presence and connect with their target audience through various social media platforms.
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="main-content mt-40">
                    <p>
                    SPF offers roof restoration, coating, and repair services to ensure the integrity of your roof. Our experienced team handles new roof installations, restorations, and repairs promptly to prevent leaks and subsequent damage. In addition, we provide comprehensive solutions for formwork, scaffolding systems, and plywood, ensuring efficient and safe construction processes. As renovation specialists, we understand the evolving needs of homeowners in Sydney, transforming layouts and creating personalized spaces to enhance functionality and aesthetics. At SPF, we deliver high-quality services across roofing, formwork, concreting, and renovations, striving to exceed expectations and enhance your property's value and enjoyment.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/spf-1.png" alt="Thumb" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/spf-2.png" alt="Thumb" />
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

export default Modal4
