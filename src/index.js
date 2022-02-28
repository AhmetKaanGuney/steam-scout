import React from 'react';
import ReactDOM from 'react-dom';
import { 
  BrowserRouter, 
  Route, 
  Routes
} from 'react-router-dom';
import App from './App';
import GetAppDetails from './routes/get-app-details.jsx'
import Homepage from './routes/homepage.jsx';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<App />}>
          <Route path='/' element={<Homepage />} />
          <Route path='GetAppDetails'>
            <Route path=':appid' element={<GetAppDetails />} />
          </Route>
        </Route>
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

