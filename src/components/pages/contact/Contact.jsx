import React,{useState} from "react";
import ReCAPTCHA from 'react-google-recaptcha';


const Contact = () => {
  // for recaptcha
  // eslint-disable-next-line
  const [captchaValue, setCaptchaValue] = useState('');
  const handleCaptchaChange = (value) => {
    setCaptchaValue(value);
  };


  // contact form starts
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');

  // validate on blur function
const validateEmail = () => {
  if (!email) {
    setEmailError('Email is required');
    return false;
  } else if (!/\S+@\S+\.\S+/.test(email)) {
    setEmailError('Email is invalid');
    return false;
  } else {
    setEmailError('');
    return true;
  }
};
const validateMessage = () => {
  if (!message) {
    setMessageError('Project details required');
    return false;
  } else if (message.length < 20) {
    setMessageError('At least 20 characters long');
    return false;
  } else {
    setMessageError('');
    return true;
  }
};


const handleSubmit = async(e) => {
  e.preventDefault();
  let formIsValid = true;
  
// validate email
if (!email) {
  setEmailError('Email is required');
  formIsValid = false;
} else if (!/\S+@\S+\.\S+/.test(email)) {
  setEmailError('Email is invalid');
  formIsValid = false;
} else {
  setEmailError('');
}

// validate message
if (!message) {
  setMessageError('Project details required');
  formIsValid = false;
} else if (message.length < 20) {
  setMessageError('At least 20 characters long');
  formIsValid = false;
} else {
  setMessageError('');
}


   
// submit the form if there are no errors
    if (formIsValid) {

      
      // const data = {
      //   email: email,
      //   message: message
      // };
      // api here
    }

}
  // contact form ends
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
                  I'm always here to chat and help answer any questions you might have about Web development. So, what's on your mind today?


                  </p>
                  <form
                    className="contact-form"
                    onSubmit={handleSubmit}
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
                            value={name} onChange={(e) => setName(e.target.value)} 
                          />
                          <span className="alert-error" style={{color: '#FF004F'}}></span>
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
                            value={email} onChange={(e) => setEmail(e.target.value)} onBlur={validateEmail}
                          />
                          <span className="alert-error" style={{color: '#FF004F'}}>{emailError}</span>
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
                            value={phone} onChange={(e) => setPhone(e.target.value)} 
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
                            value={email} onChange={(e) => setMessage(e.target.value)} onBlur={validateMessage}
                          />
                          <span className="alert-error" style={{color: '#FF004F'}}>{messageError}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                      <ReCAPTCHA sitekey="6LepXA4mAAAAAMZCqxVtG4UCQfZ0p3hAxXLZWI4S" onChange={handleCaptchaChange} />
                        <button type="submit" name="submit" >
                          Send Message
                        </button>
                      </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                      <div id="message" className="alert-msg" ></div>
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
                        <p>My Email</p>
                        <h5>
                          <a href="mailto:hamidhussain740@gmail.com">
                            hamidhussain740@gmail.com
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
                        Al Olaya Riyadh, <br /> Saudi Arabia (KSA) 
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
                          <a href="tel:+966575568052">+966-575-568-052</a>
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
