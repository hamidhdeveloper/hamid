import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="bg-dark text-light">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <ul className="footer-social">
                <li className="facebook">
                  <a href="https://www.facebook.com/Hamid.developer" target="_blank" rel="noreferrer">
                    <i className="fab fa-facebook-f" />
                  </a>
                </li>
                <li className="linkedin">
                  <a href="https://www.linkedin.com/in/hamid-developer" target="_blank" rel="noreferrer">
                    <i className="fab fa-linkedin" />
                  </a>
                </li>
                <li className="dribbble">
                  <a href="https://dribbble.com/hamideveloper" target="_blank" rel="noreferrer">
                    <i className="fab fa-dribbble" />
                  </a>
                </li>
                <li className="instagram" target="_blank" rel="noreferrer">
                  <a href="https://www.instagram.com/hamid.developer">
                    <i className="fab fa-instagram" />
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-lg-6 text-end">
              <p>© 2023 Hamid. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
