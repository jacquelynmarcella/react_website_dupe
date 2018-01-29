import React, { Component } from 'react';
import FA from 'react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <footer>
       <a href="#" className="logo">© Airbnb, Inc.</a>
       <a href="#">Terms</a>
       <a href="#">Privacy</a>
       <a href="#">Sitemap</a>
       <span><FA name="facebook-f" /></span> 
       <span><FA name="twitter" /></span> 
       <span><FA name="instagram" /></span> 
      </footer>
    );
  }
}

export default Footer;
