import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Deploying to Netlify.</p>
        <p>The deployment was successful</p>
      </header>
    </div>
  );
}

export default App;
