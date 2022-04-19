import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route } from 'react-router-dom';
 import Navbar from "./components/Navbar.js"
 import Homepage from "./routes/homepage.jsx"

function App() {
  return (
      <Router>
        <div className='app'>
          <div className='page-container'>
            <Navbar />
            <div className='limit-width'>
              <Routes>
                <Route path="/" exact element={<Homepage />} />
              </Routes>
            </div>
          </div>
        </div>
      </Router>
  );
}

export default App;
