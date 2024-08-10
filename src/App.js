import logo from './mo-logo.png';
import home_video from './assets/home.mp4'
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar />
      <h1 className="dm-serif-text-regular"> Mentor's Outlook</h1>
      <div className="video">
      <video autoPlay muted loop><source src={home_video} type="video/mp4"></source></video>
      </div>
    </div>
  );
}

function Navbar() {
  return (  // Added return statement here
    <div class="nav noto-sans">
      <img src={logo} alt="mentor's outlook logo" />
      <ul id="nav-links">
        <li>Home</li>
        <li>Knowledge Center</li>
        <li>Products & Services</li>
        <li>Bazaar</li>
      </ul>
      <a href="contact.html" target="_blank">CONTACT</a>
    </div>
  );
}

export default App;
