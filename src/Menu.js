import React from 'react';
import { Link } from 'react-router-dom';

function Menu() {
  return (
    <div>
		<nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><span></span>Pizza<br /><small>Delicous</small></Link>
        <ul className="navbar-nav">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item active"><Link to="/menu" className="nav-link">Menu</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>
    
		<section className="ftco-section">
    		<div className="row justify-content-center ">
          <div className="text-center">
            <h2>Our Menu</h2>
            <p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</p>
          </div>
        </div>

    		<div className="row no-gutters">
    			<div className="col-lg-4">
    				<div className="services-wrap d-flex">
    					<a href="#" id="img1" className="img"></a>
    					<div className="text p-4">
    						<h3>Italian Pizza</h3>
    						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
    						<p className="price"><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" id="img2"></a>
    					<div className="text p-4">
    						<h3>Greek Pizza</h3>
    						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price"><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img" id="img3" ></a>
    					<div className="text p-4">
    						<h3>Caucasian Pizza</h3>
    						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price"><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>

    			<div className="col-lg-4">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img order-lg-last" id="img4"></a>
    					<div className="text p-4">
    						<h3>American Pizza</h3>
    						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia </p>
    						<p className="price"><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img order-lg-last" id="img5"></a>
    					<div className="text p-4">
    						<h3>Tomatoe Pie</h3>
    						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price"><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    			<div className="col-lg-4">
    				<div className="services-wrap d-flex">
    					<a href="#" className="img order-lg-last" id="img6"></a>
    					<div className="text p-4">
    						<h3>Margherita</h3>
    						<p>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia</p>
    						<p className="price"><span>$2.90</span> <a href="#" className="ml-2 btn btn-white btn-outline-white">Order</a></p>
    					</div>
    				</div>
    			</div>
    		</div>

    </section>
  </div>
  );
}

export default Menu;