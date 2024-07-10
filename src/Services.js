import React from 'react';
import { Link } from 'react-router-dom';
import './css/flaticon.css';

function Services() {
  return (
    <div>
		<nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><span></span>Pizza<br /><small>Delicous</small></Link>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
          <li className="nav-item active"><Link to="/services" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
    
	<section class="ftco-section ftco-services">
    	<div class="container">
    		<div class="row justify-content-center">
          <div class="heading-section text-center">
            <h2>Our Services</h2>
            <p class="mb-4">Discover our range of delicious, handcrafted pizzas and exceptional services tailored just for you</p>
          </div>
        </div>
    		<div class="row">
          <div class="col-md-4">
            <div class="d-block text-center services">
              <div class="icon justify-content-center align-items-center mb-5">
              	<span class="flaticon-diet"></span>
              </div>
              <h3>Healthy Foods</h3>
              <p>Discover the delicious side of wellness with our healthy pizza options</p>
            </div>      
          </div>
          <div class="col-md-4">
            <div class="d-block text-center services">
              <div class="icon justify-content-center align-items-center mb-5">
              	<span class="flaticon-bicycle"></span>
              </div>
                <h3>Fastest Delivery</h3>
                <p>Get your pizza piping hot in record time with our fastest delivery service!</p>
            </div>      
          </div>
          <div class="col-md-4">
            <div class="d-block text-center services">
              <div class="icon justify-content-center align-items-center mb-5"><span class="flaticon-pizza-1"></span></div>
                <h3>Original Recipes</h3>
                <p>Discover the authentic taste of Italy with our original, handcrafted pizza recipes</p>
            </div>    
          </div>
        </div>
    	</div>
    </section>
  </div>
  );
}

export default Services;