import React from 'react';
// import logo from 'public/images/logo.png';
// import logo from "public/images/logo.png";

const Navbar = () => {
  return (
    <>
    <div class="container" id='navbar-container'>
    <nav class="navbar navbar-expand-lg justify-content-center show-on-pc" id='navitems'>
       
        <div class="container-fluid ">
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a href="#" class="navbar-brand">
            <img src="images/logo.png" id='logo-nav' alt="Logo" />
            </a>
            <div class="collapse navbar-collapse" id="navbarCollapse">
            <div class="navbar-nav " id='nav-items'>
                <a href="#" class="nav-item nav-link active">Home</a>
                <a href="#" class="nav-item nav-link">Services</a>
                <a href="#" class="nav-item nav-link">Portfolio</a>
                <a href="#" class="nav-item nav-link">Team</a>
                <a href="#" class="nav-item nav-link">Blog</a>
                <a href="#" class="nav-item nav-link">Contact Us</a>
            </div>
            </div>
            <div class="navbar-nav">
               <a href="#" class="nav-item nav-link"><button class="btn btn-outline-primary " type="submit" id='nav-meet-btn'>Meet with us</button></a>
            </div>
        </div>
        


        
    </nav>
    <nav class="navbar navbar-expand-lg justify-content-center show-on-mobile" id='navitems'>
    <div class="container-fluid " >
            <button type="button" class="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarCollapse">
              <span class="navbar-toggler-icon"></span>
            </button>
            <a href="#" class="navbar-brand">
            <img src="images/logo.png" id='logo-nav' alt="Logo" />
            </a>
            
            <div class="navbar-nav">
               <a href="#" class="nav-item nav-link">
                <button class="btn btn-outline-primary " type="submit" id='nav-meet-btn'>Meet with us</button></a>
            </div>
            <div class="collapse navbar-collapse" id="navbarCollapse">
                <div class="navbar-nav " id='nav-items'>
                    <a href="#" class="nav-item nav-link active">Home</a>
                    <a href="#" class="nav-item nav-link">Services</a>
                    <a href="#" class="nav-item nav-link">Portfolio</a>
                    <a href="#" class="nav-item nav-link">Team</a>
                    <a href="#" class="nav-item nav-link">Blog</a>
                    <a href="#" class="nav-item nav-link">Contact Us</a>
                </div>
            </div>
        </div>
    </nav>
    </div>
    
    </>
  )
}

<script src = "https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/js/bootstrap.bundle.min.js"></script>  

export default Navbar
