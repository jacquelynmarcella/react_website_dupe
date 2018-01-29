import React, { Component } from 'react';


class ExploreItem extends Component {
	render() {
		return(
			<div className="exploreItem">
				<div className="exploreImg">
					<img src={this.props.image} />
				</div>
				<div className="exploreContent">
					{this.props.name}
				</div>
			</div>
		)
	}
}

class Explore extends Component {
  render() {
    return (
      <div className="section">
        <h3>Explore Airbnb</h3>
        <ExploreItem name="Homes" image="https://a0.muscache.com/im/pictures/8b7519ec-2c82-4c09-8233-fd4d2715bbf9.jpg" />
        <ExploreItem name="Experiences" image="https://a0.muscache.com/im/pictures/d3811ff7-cc34-471b-8aee-b0d613db0052.jpg" />
        <ExploreItem name="Restaurants" image="https://a0.muscache.com/im/pictures/da2d8e97-90b7-409f-94ac-5ab0327c289b.jpg" />
      </div>
    );
  }
}

export default Explore;
