import './App.css';
import { 
  BrowserRouter as Router, 
  Routes,
  Route } from 'react-router-dom';
 import Navbar from "./components/Navbar.js"
 import Homepage from "./routes/homepage.jsx"
 import GetAppDetails from "./routes/get-app-details.jsx"

function App() {
  return (
      <Router>
        <div className='app'>
          <Navbar />
            <Routes>
              <Route path="/" exact element={<Homepage />} />
              <Route path="/GetAppDetails/:appid" element={<GetAppDetails />} />
            </Routes>
        </div>
      </Router>
  );
}

export default App;
