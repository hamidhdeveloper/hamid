import React,{useState} from "react";

const Header = () => {
  // for close mobile menu
  const [isCollapsed, setIsCollapsed] = useState(false);
  const toggleCollapse = () => {
    setIsCollapsed(!isCollapsed);
  };


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
                onClick={toggleCollapse}
              >
                <i className="fa fa-bars" />
              </button>
              <a className="navbar-brand" href="index.html">
                <img src="assets/img/logo.png" className="logo" alt="Logo" />
              </a>
            </div>
            {/* End Header Navigation */}
            {/* Collect the nav links, forms, and other content for toggling */}
            <div className={`collapse navbar-collapse collapse-mobile ${isCollapsed ? 'show' : ''}`} id="navbar-menu">
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
                  <a className="smooth-menu" href="#home" onClick={toggleCollapse}>
                    Home
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#portfolio" onClick={toggleCollapse}>
                    portfolio
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#about" onClick={toggleCollapse}>
                    about
                  </a>
                </li>
                <li>
                  <a className="smooth-menu" href="#contact" onClick={toggleCollapse}>
                    contact
                  </a>
                </li>
              </ul>
            </div>
            {/* /.navbar-collapse */}
            {/* Main Nav */}
          </div>
          {/* Overlay screen for menu */}
          <div className={`overlay-screen ${isCollapsed ? 'opened' : ''}`} />
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
              href="https://wa.me/+966575568052"
              className=" video-play-button theme"
              target="_blank" rel="noreferrer"
              style={{cursor: "pointer"}}
            >
              <i className="fab fa-whatsapp" />
            </a>
          </div>
        </div>
      </header>
      {/* End Header Fixed */}
    </>
  );
};

export default Header;
