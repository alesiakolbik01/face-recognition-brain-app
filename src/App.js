import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';
import ParticlesBg from 'particles-bg';
import './App.css';
import 'tachyons';
import React from 'react';
import Clarifai from 'clarifai';

class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      imageUrl : null
    }
  }

  onHandelSubmit = (value) => {
    this.setState({imageUrl: value});
  }

  render() {
    return (
      <div className="App">
        <ParticlesBg color="#ff0000" type="cobweb" bg={true} />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm handleSubmit={this.onHandelSubmit} />
        <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

export default App;
