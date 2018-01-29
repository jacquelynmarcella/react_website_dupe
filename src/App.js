import React, { Component } from 'react';
import './App.css';
import FA from 'react-fontawesome';

//Layout sections
import Navbar from './layout/nav.js'
import Footer from './layout/footer.js'

//Homepage content sections
import Header from './home/header.js'
import Explore from './home/explore.js'
import Experiences from './home/experiences.js'
import Homes from './home/homes.js'
import Offering from './home/offering.js'

//Data
import ExperiencesData from './data/experiences-data.js'
import HomeData from './data/home-data.js'

class App extends Component {
    constructor(props){
    super(props);
    this.state = {
      searchContent: '',
      searching: false
    }
  }
  handleChange = (event) => {
    this.setState({ 
      searchContent: event.target.value
    });
    console.log(this.state);
  }
  handleFormSubmit = (event) => {
    event.preventDefault();
    if(this.state.searchContent.length > 0){
      this.setState({
        searching: true
      })
      console.log(this.state);
    } else {
      this.setState({
        searching: false
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Navbar />
        <Header handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit} />
        <Explore />
        <Experiences data={ExperiencesData} />
        <Homes data={HomeData} />
        <hr />
        <Footer />
      </div>
    );
  }
}

export default App;
