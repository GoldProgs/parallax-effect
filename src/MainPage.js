import React from 'react';
import { Link } from 'react-router-dom';
import OwlCarousel from 'react-owl-carousel';

function MainPage() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg ftco-navbar-light">
      <div className="container">
        <Link className="navbar-brand" to="/"><span></span>Pizza<br /><small>Delicous</small></Link>
        <ul className="navbar-nav">
          <li className="nav-item active"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/menu" className="nav-link">Menu</Link></li>
          <li className="nav-item"><Link to="/services" className="nav-link">Services</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact</Link></li>
        </ul>
      </div>
    </nav>

     <OwlCarousel className="home-slider owl-carousel" loop margin={0} nav items={1}>
      <div className="slider-item" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-center">
            <div className="col-md-6">
              <span className="subheading">Delicious</span>
              <h1>Italian Pizza</h1>
              <p>Savor the authentic flavors of Italy with our mouth-watering, delicious Italian pizza!</p>
              <p><a href="#" className="btn btn-primary p-3">Order Now</a><Link to="/menu" className="btn btn-white btn-outline-white p-3">View Menu</Link></p>
            </div>
            <div className="col-md-6">
              <img src="images/bg_1.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-item" style={{ backgroundImage: 'url(images/bg_1.jpg)' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text align-items-center">
            <div className="col-md-6">
              <span className="subheading">Crunchy</span>
              <h1>Italian Pizza</h1>
              <p>Savor the authentic flavors of Italy with our mouth-watering, delicious Italian pizza!</p>
              <p><a href="#" className="btn btn-primary p-3">Order Now</a> <Link to="/menu" className="btn btn-white btn-outline-white p-3">View Menu</Link></p>
            </div>
            <div className="col-md-6">
              <img src="images/bg_2.png" className="img-fluid" alt="" />
            </div>
          </div>
        </div>
      </div>

      <div className="slider-item" style={{ backgroundImage: 'url(images/bg_3.jpg)' }}>
        <div className="overlay"></div>
        <div className="container">
          <div className="row slider-text justify-content-center align-items-center">
            <div className="col-md-7 text-center">
              <span className="subheading">Welcome</span>
              <h1>We cooked your desired Pizza Recipe</h1>
              <p>We've crafted your perfect pizza recipe just for you!</p>
              <p><a href="#" className="btn btn-primary p-3">Order Now</a> <Link to="/menu" className="btn btn-white btn-outline-white p-3">View Menu</Link></p>
            </div>
          </div>
        </div>
      </div>
    </OwlCarousel> 
  </div>
  );
}

export default MainPage;