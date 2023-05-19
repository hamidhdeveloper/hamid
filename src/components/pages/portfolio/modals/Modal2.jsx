import React from 'react'

const Modal2 = () => {
  return (
    <>
    <div
          className="modal fade"
          id="projectSingleModal2"
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
                    <img src="assets/img/main-image-pikaso.png" alt="Thumb" />
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
                                Date <span>29 April, 2023</span>
                              </li>
                              <li>
                                Address <span>Al Muruj Riyadh Saudi Arabia</span>
                              </li>
                            </ul>
                            <ul className="social">
                              <li>
                                <h4>Live Preview:</h4>
                              </li>
                              
                              <a href="https://pikasoai.netlify.app" style={{cursor:'pointer'}} target='_blank' rel="noreferrer">
                                 PikaSo
                                </a>
                             
                             
                            </ul>
                          </div>
                        </div>
                        <h2>Ongoing Website Maintenance</h2>
                        <p>
                        Welcome to Pikaso React, a website I designed from a Figma file. Pikaso is an AI Image Generator shaping the future of art creation. Unleash your creativity and produce astonishing artwork using Fotor's powerful AI image generator.

Experience AI's transformative power as it automates turning imagination into remarkable paintings. Regardless of your artistic background, create captivating artwork effortlessly with AI Image Generator.

This user-friendly platform requires no art or design knowledge, allowing anyone to dive into digital art creation. Customize artwork with diverse styles and effects for the desired aesthetic.

Craft your masterpiece and export creations with AI Image Generator. Share with friends, showcase on social media, or incorporate into personal projects.

Start your artistic journey on the website. The intuitive interface lets you experiment with styles and effects, resulting in stunning, professional images. Unleash creativity and embrace art's future with Pikaso React.
                        </p>
                        <ul className="check-list mt-40">
                          <li>
                            <h4>React Support</h4>
                            <p>
                            Count on my dependable React support for the Pikaso website. I'll ensure smooth functionality and assist with any technical issues that arise. Let's make your Pikaso experience flawless!
                            </p>
                          </li>
                          <li>
                            <h4>Social Media Management</h4>
                            <p>
                              
With my Social Media Management expertise, I'll enhance the online presence of the Pikaso website. From content creation to engagement strategies, I'll optimize social media channels to attract a wider audience and boost brand visibility. Let's take Pikaso's social media game to the next level!
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                  <div className="main-content mt-40">
                    <p>
                    Welcome to the captivating world of React Pikaso website. Designed with meticulous attention to detail, this platform combines the power of React with the innovation of Pikaso's AI Image Generator. Prepare to embark on a journey of boundless creativity as you unleash the full potential of Fotor's Artificial Intelligence image generator.

Our website seamlessly integrates React, providing a robust and efficient framework for creating stunning artwork. Whether you're a seasoned artist or a beginner, React Pikaso empowers you to transform your imagination into breathtaking paintings effortlessly.

Experience the magic of AI as it automates the process of turning your visions into remarkable artwork. Say goodbye to the constraints of traditional art techniques and embrace the limitless possibilities offered by AI Image Generator.

Navigating the React Pikaso website is a breeze, thanks to its intuitive interface. Choose from a diverse array of styles and effects to customize your artwork and achieve the desired aesthetic. No prior knowledge of art or design is required, making this platform accessible to all.

Once you've crafted your masterpiece, React Pikaso offers seamless exporting options. Share your creations with friends, showcase them on social media, or incorporate them into your personal projects. The possibilities are endless.

Embark on your artistic journey today by visiting our website. With React Pikaso, you'll have the tools and inspiration to create stunning, professional-looking images. Embrace the future of art and unlock your creative potential with React Pikaso - where React and AI Image Generator converge.
                    </p>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/pikaso-1.png" alt="Thumb" />
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <img src="assets/img/pikaso-2.png" alt="Thumb" />
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

export default Modal2
