import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import SocialMediaSites from './components/MainPage/socialMedia';
import ExpBar from './components/MainPage/ExpBar';
import IntroHeader from './components/MainPage/IntroHeader';
import SuperPowerHeader from './components/MainPage/superpower';
import InterestHeader from './components/MainPage/interests';

export default function App() {
  return (
    <><NavBar></NavBar>
    <SocialMediaSites></SocialMediaSites>   
    <div>
      <div className='rowify'>
        <div>
          <IntroHeader></IntroHeader>
          <SuperPowerHeader></SuperPowerHeader>
        </div>
        <div>
          <ExpBar></ExpBar>
          <InterestHeader></InterestHeader>
        </div>
      </div>
    </div>
    
    <div className="App">
    <h1>Hello World Russell</h1>
    </div></>

  );
}
