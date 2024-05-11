import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Routes } from 'react-router-dom';
import HomePage from './HomePage';
import AboutPage from './AboutPage';
import JoinRoom from './JoinRoom';
import LoginScreen from './LoginScreen';

function App() {

  const [data, setData] = useState(null);
  const [loggedIn, setLoggedIn] = useState(false);

  return (
    <Router>
      <div className="NavBar">
        <nav>
            <Link to='/'>Home</Link>
            <Link to='/AboutPage'>About</Link>
            <Link to='/JoinRoom'>Join Room</Link>
            {loggedIn ?
            <Link to='/HomePage'>Logout</Link>
            :
            <Link to='/LoginScreen'>Login</Link>
            }
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/HomePage" element={<HomePage />} />
          <Route path="/AboutPage" element={<AboutPage />} />
          <Route path="/JoinRoom" element={<JoinRoom />} />
          <Route path="/LoginScreen" element={<LoginScreen />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;