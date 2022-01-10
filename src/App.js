import './App.css';
import Header from './components/header-component';
import Hero from './components/hero-component/index';
import Photos from './components/photos-components';
import PhotosTwo from './components/photos-two-component';
import ShortInfo from './components/short-info-component';
import ShowCase from './components/showcase-component';
import SocialLinks from './components/social-links-component';
import Underwater from './components/underwater-component';

function App() {
  return (
      <div className="App">     
          <Header />
          <Hero />
          <ShortInfo />
          <Photos />
          <ShowCase />
          <PhotosTwo />
          <Underwater />
          <SocialLinks />
      </div> 
  );
}

export default App;
