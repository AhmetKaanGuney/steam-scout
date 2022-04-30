import './App.css';
import { React, useState } from "react";
import { 
  BrowserRouter as Router, 
  Routes,
  Route } from 'react-router-dom';
import Navbar from "./components/Navbar.js"
import Homepage from "./routes/homepage.jsx"
import About from './routes/about.jsx';
import Menu from './components/Menu.js';

function App() {
  const [menuVisible, setMenuVisible] = useState(false);
  return (
      <Router>
        <div className='app'>
          <div className='page-container'>
            <Navbar onMenuClick={setMenuVisible} />
            <div className='limit-width'>
              <Menu hidden={!menuVisible} setVisibility={setMenuVisible} />
              <Routes>
                <Route path="/" exact element={<Homepage />} />
                <Route path="/about" exact element={<About />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
