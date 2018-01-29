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
      searching: false,
      searchText: ''
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
        searching: true,
        searchText: 'in ' + this.state.searchContent
      })
      console.log(this.state);
    } else {
      this.setState({
        searching: false,
        searchText: ''
      })
    }
  }

  render() {
      return (
        <div className="App">
          <Navbar />
          <Header handleChange={this.handleChange} handleFormSubmit={this.handleFormSubmit} searchContent={this.state.searchContent} />
          <Explore searching={this.state.searching} />
          <Experiences data={ExperiencesData} searchContent={this.state.searchText} />
          <Homes data={HomeData} searchContent={this.state.searchText} />
          <hr />
          <Footer />
        </div>
      );
  }
}

export default App;
