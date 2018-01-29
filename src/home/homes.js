import React, { Component } from 'react';
import Offering from './offering.js'

class Homes extends Component {
  render() {
  	const allHomes = this.props.data.homes.map( home => {
  		return <Offering data={home} />
  	})
    return (
      <div className="section">
        <h3>Homes</h3>
        {allHomes}
      </div>
    );
  }
}

export default Homes;
