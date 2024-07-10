import React from 'react';
import { Link } from 'react-router-dom';

function Contact() {
  return (
    <div>
		<nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><span></span>Pizza<br /><small>Delicous</small></Link>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item active"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
    
    <section class="ftco-section">
      <div class="container">
        <div class="row">
					<div class="col-md-4">
						<div class="row">
							<div class="col-md-12 mb-4">
	              <h2 class="h4">Contact Information</h2>
	            </div>
	            <div class="col-md-12 mb-3">
	              <p><span>Phone:</span> <a href="tel://0001234567890">000 (123) 456 7890</a></p>
	            </div>
	            <div class="col-md-12 mb-3">
	              <p><span>Email:</span> <a href="mailto:pizzeria@gmail.com">pizzeria@gmail.com</a></p>
	            </div>
						</div>
					</div>

          <div class="col-md-6">
            <form action="#" class="contact-form">
            	<div class="row">
            		<div class="col-md-6">
	                <div class="form-group">
	                  <input type="text" class="form-control" placeholder="Your Name"></input>
	                </div>
                </div>
                <div class="col-md-6">
	                <div class="form-group">
	                  <input type="text" class="form-control" placeholder="Your Email"></input>
	                </div>
	                </div>
              </div>
              <div class="form-group">
                <textarea name="" id="" cols="30" rows="7" class="form-control" placeholder="Message"></textarea>
              </div>
              <div class="form-group">
                <input type="submit" value="Send Message" class="btn btn-primary py-3 px-5"></input>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  </div>
  );
}

export default Contact;