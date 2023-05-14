import React from "react";

const Header = () => {
  return (
    <>
      <header id="home">
        {/* Start Navigation */}
        <nav className="navbar mobile-sidenav onepage-menu mobile-nav-only attr-border navbar-sticky navbar-default validnavs navbar-fixed dark no-background">
          <div className="container d-flex justify-content-between align-items-center">
            {/* Start Header Navigation */}
            <div className="navbar-header">
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo.png" className="logo" alt="Logo" />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className="collapse navbar-collapse" id="navbar-menu">
              <img src="assets/img/logo.png" alt="Logo" />
              <button
                type="button"
                className="navbar-toggle"
                data-toggle="collapse"
                data-target="#navbar-menu"
              >
                <i className="fa fa-times" />
              </button>
              <ul
                className="nav navbar-nav navbar-right"
                data-in="fadeInDown"
                data-out="fadeOutUp"
              >
                <li>
                  <a className="smooth-menu" href="#home">
                    Home
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#expertise">
                    expertise
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#portfolio">
                    portfolio
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#about">
                    about
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#blog">
                    blog
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#contact">
                    contact
                  </a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Main Nav */}
          </div>
          {/* Overlay screen for menu */}
          <div className="overlay-screen" />
          {/* End Overlay screen for menu */}
        </nav>
        {/* End Navigation */}
      </header>
      {/* Start Header Fixed 
    ============================================= */}
      <header className="header-fixed">
        <div className="f-flex">
          <div className="logo">
            <a href="#home">
              <img src="assets/img/logo-icon.png" alt="Logo" />
            </a>
          </div>
          <div className="menu">
            <ul className="nav">
              <li>
                <a className="smooth-menu" href="#home">
                  <i className="fas fa-home" />
                  <div className="menu-name">Home</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#services">
                  <i className="fas fa-cog" />
                  <div className="menu-name">Services</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#portfolio">
                  <i className="fas fa-briefcase" />
                  <div className="menu-name">Portfolio</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#about">
                  <i className="fas fa-user" />
                  <div className="menu-name">About</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#resume">
                  <i className="fas fa-file-alt" />
                  <div className="menu-name">Resume</div>
                </a>
              </li>
              <li>
                <a className="smooth-menu" href="#contact">
                  <i className="fas fa-comments" />
                  <div className="menu-name">Contact</div>
                </a>
              </li>
            </ul>
          </div>
          <div className="video">
            <a
              href="https://www.youtube.com/watch?v=5qRsGTuy3Rs"
              className="popup-youtube video-play-button theme"
            >
              <i className="fas fa-play" />
            </a>
          </div>
        </div>
      </header>
      {/* End Header Fixed */}
    </>
  );
};

export default Header;
