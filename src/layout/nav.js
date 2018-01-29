import React, { Component } from 'react';

class Navbar extends Component {
  render() {
    return (
      <div>
        <nav>
          <a href="#" className="logo"><img src="./airbnb-logo.png" /></a>
          <a href="#">Become a host</a>
          <a href="#">Help</a>
          <a href="#">Sign Up</a>
          <a href="#">Login</a>
        </nav>
      </div>
    );
  }
}

export default Navbar;
