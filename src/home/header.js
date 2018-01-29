import React, { Component } from 'react';
import FA from 'react-fontawesome';

class Header extends Component {
  render() {
    return (
      <header>
        <h1>Airbnb</h1>
        <h2>Book unique homes and<br />experiences all over the world.</h2>
        <div className="searchbar">
        	<span><FA name="search" /></span>
          <form onSubmit={this.props.handleFormSubmit}>
        	 <input type="text" placeholder="Try Bali" className="searchfield" onChange={this.props.handleChange} value={this.props.searchContent} />
        	 <input type="submit" value="Search" className="searchbutton" />
          </form>
        	</div>
      </header>
    );
  }
}

export default Header;