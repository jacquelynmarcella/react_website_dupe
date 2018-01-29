import React, { Component } from 'react';
import FA from 'react-fontawesome';

class Offering extends Component {
	render(){
		return(
			<div className="offering">
				{this.props.data.image} <br />
				<span className="subhead">{this.props.data.subhead}</span><br />
				<span className="title">{this.props.data.title}</span><br />
				<span className="cost">{this.props.data.cost}</span><br />
				<span className="rating">
					<span><FA name="star" /></span>
					<span><FA name="star" /></span>
					<span><FA name="star" /></span>
					<span><FA name="star" /></span>
					<span><FA name="star" /></span> 
					&nbsp; {this.props.data.rating}
				</span>
			</div>
		)
	}
}

export default Offering;