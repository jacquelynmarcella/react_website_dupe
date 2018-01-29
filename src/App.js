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

//Data
import ExperiencesData from './data/experiences-data.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Header />
        <Explore />
        <Experiences data={ExperiencesData} />
        <Footer />
      </div>
    );
  }
}

export default App;
