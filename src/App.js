import logo from './logo.svg';
import './App.css';
import NavBar from './components/Navigation/NavBar';
import SocialMediaSites from './components/MainPage/socialMedia';
import ExpBar from './components/MainPage/ExpBar';
import IntroHeader from './components/MainPage/IntroHeader';

export default function App() {
  return (
    <><NavBar></NavBar>
    <SocialMediaSites></SocialMediaSites>    
    <div>
      <div className='rowify'>
        <div>
          <IntroHeader></IntroHeader>
        </div>
        <div>
          <ExpBar></ExpBar>
        </div>
      </div>
    </div>
    
    <div className="App">
    <h1>Hello World Russell</h1>
    </div></>

  );
}
