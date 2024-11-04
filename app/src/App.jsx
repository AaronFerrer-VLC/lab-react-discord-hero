import './App.css'
import logo from './assets/discord-logo-white.png';
import background from './assets/discord-background.png'
import icon from './assets/menu-icon.png'

function App() {
  return (
    <div className="App">
      <header className="hero" style={{ backgroundImage: `url(${background})` }}>
        <nav className="navbar">
          <img src={logo} alt="Discord Logo" className="logo" />
          <img src={icon} alt="Menu Icon" className="menu-icon" />
        </nav>
        <div className="hero-content">
          <h1>IMAGINE A PLACE...</h1>
          <p>
            ...where you can belong to a school club, a gaming group, or a worldwide art community. Where just you and a handful of friends can spend time together. A place that makes it easy to talk every day and hang out more often.
          </p>
          <div className="button-group">
            <button className="primary-button">Download for Mac</button>
            <button className="secondary-button">Open Discord in your browser</button>
          </div>
        </div>
      </header>
    </div>
  );
}

export default App