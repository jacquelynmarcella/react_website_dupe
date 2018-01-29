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
        <ExploreItem name="Homes" image="http://thomasmoorehomes.com/wp-content/uploads/2017/07/house-inside-design-2-vibrant-design-magnificent-inside-house-in-stylish.jpg" />
        <ExploreItem name="Experiences" image="http://thomasmoorehomes.com/wp-content/uploads/2017/07/house-inside-design-2-vibrant-design-magnificent-inside-house-in-stylish.jpg" />
        <ExploreItem name="Restaurants" image="http://thomasmoorehomes.com/wp-content/uploads/2017/07/house-inside-design-2-vibrant-design-magnificent-inside-house-in-stylish.jpg" />
      </div>
    );
  }
}

export default Explore;
