import React from 'react';
import { Link } from 'react-router-dom';
import './css/icomoon.css';

function About() {
  return (
    <div>
		<nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><span></span>Pizza<br /><small>Delicous</small></Link>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
          <li className="nav-item active"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
    
	<section class="ftco-about d-md-flex mt-5">
    	<div class="one-half" id='aboutImage'></div>
    	<div class="one-half">
        <div class="heading-section">
          <h2>Welcome to <span>Pizza</span> Restaurant</h2>
        </div>
  		<p>At our pizza restaurant, we take pride in serving you the finest, handcrafted pizzas made with the freshest ingredients. From our classic Margherita to unique gourmet creations, every dish is crafted with passion and a commitment to quality. Join us for a delicious meal, a warm atmosphere, and a true taste of Italy!</p>
    	</div>
    </section>

    <section class="ftco-intro">
    		<div class="wrap d-md-flex">
	    		<div class="info">
	    			<div class="row">
	    				<div class="col-md-4 d-flex">
	    					<div class="icon"><span class="icon-phone"></span></div>
	    					<div >
	    						<h3>000 (123) 456 7890</h3>
								<p>8:00am - 9:00pm</p>
	    					</div>
	    				</div>
	    				<div class="col-md-4 d-flex">
	    					<div class="icon"><span class="icon-my_location"></span></div>
	    					<div>
	    						<h3>198 West 21th Street</h3>
	    						<p>Suite 721 New York NY 10016</p>
	    					</div>
	    				</div>
	    				<div class="col-md-4 d-flex">
	    					<div class="icon"><span class="icon-clock-o"></span></div>
	    					<div>
	    						<h3>Open Monday-Friday</h3>
	    						<p>8:00am - 9:00pm</p>
	    					</div>
	    				</div>
	    			</div>
	    		</div>
	    		<div class="social d-md-flex pl-md-5 p-4 align-items-center">
	    			<ul class="social-icon">
              <li><a href="#"><span class="icon-twitter"></span></a></li>
              <li><a href="#"><span class="icon-facebook"></span></a></li>
              <li><a href="#"><span class="icon-instagram"></span></a></li>
            </ul>
	    		</div>
    		</div>
    </section>
  </div>
  );
}

export default About;