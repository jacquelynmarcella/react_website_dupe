import React, { Component } from 'react';
import Offering from './offering.js'

class Experiences extends Component {
  render() {
  	const allExperiences = this.props.data.experiences.map( experience => {
  		return <Offering data={experience} />
  	})
    return (
      <div className="section">
        <h3>Experiences {this.props.searchContent}</h3>
        {allExperiences}
      </div>
    );
  }
}

export default Experiences;
