import React, { Component } from 'react';
import FA from 'react-fontawesome';

class Offering extends Component {
	render(){
		return(
			<div className="offering">
				{this.props.data.image}
				<span className="subhead">{this.props.data.subhead}</span>
				<span className="title">{this.props.data.title}</span>
				<span className="cost">{this.props.data.cost}</span>
				<span className="rating">
					<span><FA name="star" /></span>
					<span><FA name="star" /></span>
					<span><FA name="star" /></span>
					<span><FA name="star" /></span>
					<span><FA name="star" /></span>
				{this.props.data.rating}</span>
			</div>
		)
	}
}

class ExperiencesItem extends Component {
	render(){
		return(
			<div className="offering">
				<Offering data={this.props.data} />
			</div>
		)
	}
}


class Experiences extends Component {
  render() {
  	const allExperiences = this.props.data.experiences.map( experience => {
  		return <ExperiencesItem data={experience} />
  	})
    return (
      <div className="section">
        <h3>Experiences</h3>
        {allExperiences}
      </div>
    );
  }
}

export default Experiences;
