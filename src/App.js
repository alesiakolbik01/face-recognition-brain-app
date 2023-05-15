import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import ParticlesBg from 'particles-bg';
import './App.css';
import 'tachyons';

function App() {
  return (
    <div className="App">
      <ParticlesBg color="#ff0000" type="cobweb" bg={true} />
      <Navigation />
      <Logo />
      <Rank />
      <ImageLinkForm />
    </div>
  );
}

export default App;
