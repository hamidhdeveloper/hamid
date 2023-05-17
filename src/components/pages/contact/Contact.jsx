import React,{useState} from "react";
import emailjs from '@emailjs/browser';


const Contact = () => {
   
  // contact form starts
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      name: name,
      phone: phone,
      email: email,
      message: message
    };

    // Perform form validation
    let isValid = true;

    if (email.trim() === '') {
      setEmailError('Email is required');
      isValid = false;
    } else {
      setEmailError('');
    }

    if (message.trim() === '') {
      setMessageError('Project details are required');
      isValid = false;
    } else {
      setMessageError('');
    }

    if (isValid) {
      setLoading(true);
      // Form is valid, submit the data or perform any other desired action
      // console.log('Form submitted:', { name, email, phone, message });
      emailjs.send('service_db01apg','template_dms4ffq', formData, 'o2qIwYQ5tRlh2tXjD')
	.then((response) => {
    setLoading(false);
    setSuccess('Message sent successfully')
    setName('');
    setEmail('');
    setPhone('');
    setMessage('');
	  //  console.log('SUCCESS!', response.status, response.text);
	}, (err) => {
    setLoading(false);
    setError('Message sending failed');
	  //  console.log('FAILED...', err);
	});
    }
  };
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
                            value={email} onChange={(e) => setEmail(e.target.value)} 
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
                            name="message"
                            placeholder="Tell Us About Project *"
                            value={message} onChange={(e) => setMessage(e.target.value)} 
                          />
                          <span className="alert-error" style={{color: '#FF004F'}}>{messageError}</span>
                        </div>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-lg-12">
                        <span className="btn btn-md circle btn-theme effect" type="submit" name="submit"  onClick={handleSubmit}>
                        Send Message 
                        </span>
                        { loading && (<img src="assets/img/ajax-loader.gif" class="loader" alt="loader" style={{height: '2rem'}} />)} 
                      </div>
                    </div>
                    {/* Alert Message */}
                    <div className="col-lg-12 alert-notification">
                      <div id="message" className="alert-msg" style={{color:"#00C0FF"}} >{success && (success)}</div>
                      <div id="message" className="alert-msg" style={{color:"#FF004F"}} >{error && (error)}</div>
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
