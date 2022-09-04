import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './pages/Home'
import Recipe from './pages/Recipe'

function App() {
  return (
    <div className="App">
      <div>hello</div>
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/recipe" element={<Recipe />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
