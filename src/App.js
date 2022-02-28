import './App.css';
import { Outlet, Link } from 'react-router-dom';

function App() {
  return (
    <div>
      <nav>
        Navbar---
        <Link to='/'>Homepage</Link>---
        <Link to='/GetAppDetails'>GetAppDetails</Link>
      </nav>
      <Outlet />
    </div>
  );
}

export default App;
