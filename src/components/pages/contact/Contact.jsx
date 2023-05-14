import React from "react";

const Contact = () => {
  return (
    <>
      <div
        id="contact"
        className="contact-area shape-less default-padding overflow-hidden"
      >
        <h2 className="text-shade">Contact</h2>
        <div className="container">
          <div className="contact-content">
            <div className="row align-center">
              <div className="col-lg-7 contact-form-box mb-md-50 mb-xs-50">
                <div className="form-box">
                  <h2>Let's talk?</h2>
                  <p>
                    It's all about the humans behind a brand and those
                    experiencing it, br we're right there. In the middle
                    performance quick.
                  </p>
                  <form
                    action="assets/mail/contact.php"
                    method="POST"
                    className="contact-form"
                  >
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="name"
                            name="name"
                            placeholder="Name"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="email"
                            name="email"
                            placeholder="Email*"
                            type="email"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                      <div className="col-lg-6">
                        <div className="form-group">
                          <input
                            className="form-control"
                            id="phone"
                            name="phone"
                            placeholder="Phone"
                            type="text"
                          />
                          <span className="alert-error" />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <div className="form-group comments">
                          <textarea
                            className="form-control"
                            id="comments"
                            name="comments"
                            placeholder="Tell Us About Project *"
                            defaultValue={""}
                          />
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <button type="submit" name="submit" id="submit">
                          Send Message
                        </button>
                      </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                      <div id="message" className="alert-msg" />
                    </div>
                  </form>
                </div>
              </div>
              <div className="col-lg-4 offset-lg-1 info">
                <div className="content">
                  <ul>
                    <li className="contact-info-list wow fadeInUp">
                      <div className="icon">
                        <i className="fas fa-envelope-open-text" />
                      </div>
                      <div className="info">
                        <p>Our Email</p>
                        <h5>
                          <a href="mailto:info@validtheme.com">
                            info@validtheme.com
                          </a>
                          <br />
                          <a href="mailto:support@softar.com">
                            support@softar.com
                          </a>
                        </h5>
                      </div>
                    </li>
                    <li
                      className="contact-info-list wow fadeInUp"
                      data-wow-delay="300ms"
                    >
                      <div className="icon">
                        <i className="fas fa-map-marker-alt" />
                      </div>
                      <div className="info">
                        <p>Address</p>
                        <h5>
                          22 Baker Street, <br /> London, United Kingdom, <br />{" "}
                          W1U 3BW
                        </h5>
                      </div>
                    </li>
                    <li
                      className="contact-info-list wow fadeInUp"
                      data-wow-delay="500ms"
                    >
                      <div className="icon">
                        <i className="fas fa-headphones-alt" />
                      </div>
                      <div className="info">
                        <p>Phone</p>
                        <h5>
                          <a href="tel:+4733378901">+44-20-7328-4499</a>
                          <br />
                          <a href="tel:+4733378901">+99-34-8878-9989</a>
                        </h5>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
